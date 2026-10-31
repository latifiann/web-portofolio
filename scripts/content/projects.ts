import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { parse as parseYaml } from "yaml";
import { z } from "zod";
import type {
  ProjectDetail,
  ProjectHighlight,
  ProjectLink,
  ProjectLocalizedContent,
} from "../../src/types/content.ts";
import { formatIssues } from "./diagnostics.ts";
import { parseBody, splitFrontMatter } from "./markdown.ts";
import type { LoadResult, Mode, ParsedProject } from "./types.ts";

export const releaseSlugs = [
  "fms-create",
  "remi-mobile",
  "semina",
  "mooda-app",
  "nkri",
  "remi-web",
] as const;

// Swapped for the bundler import identifier when the manifest is rendered.
export const heroSourcePlaceholder = "__HERO_SOURCE__";

const timelineSchema = z.object({
  start: z.string().min(1),
  end: z.string().min(1).nullable(),
  ongoing: z.boolean(),
  display: z.string().min(1),
});

const linkSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
  kind: z.enum(["external", "repository", "demo"]),
});

const heroMediaSchema = z.object({
  source: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  aspectRatio: z.number().positive(),
  focalPosition: z.string().min(1),
});

const projectSchema = z
  .object({
    schemaVersion: z.literal(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "slug must be lowercase kebab-case"),
    publication: z.enum(["draft", "published"]),
    homepageOrder: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.null(),
    ]),
    cardTitle: z.string().min(1),
    caseStudyTitle: z.string().min(1),
    category: z.string().min(1),
    timeline: timelineSchema,
    status: z.enum(["ongoing", "completed", "prototype", "archived"]),
    maintenance: z.enum(["maintained", "unmaintained"]).nullable(),
    roles: z.array(z.string().min(1)).min(1),
    teamContext: z.string().min(1),
    stack: z.array(z.string().min(1)).min(1),
    cardStack: z.array(z.string().min(1)).min(1),
    repository: z.object({
      visibility: z.enum(["private", "public", "none"]),
      url: z.string().url().nullable(),
    }),
    demoUrl: z.string().url().nullable(),
    primaryLink: z.string().url().nullable(),
    ctaLabel: z.string().min(1).nullable().default(null),
    links: z.array(linkSchema),
    media: z.object({ hero: heroMediaSchema }),
  })
  .superRefine((project, context) => {
    if (project.repository.visibility === "private" && project.repository.url !== null) {
      context.addIssue({
        code: "custom",
        path: ["repository", "url"],
        message: "a private repository must not carry a public URL",
      });
    }

    if (project.repository.visibility === "public" && project.repository.url === null) {
      context.addIssue({
        code: "custom",
        path: ["repository", "url"],
        message: "a public repository requires its URL",
      });
    }

    if (new Set(project.cardStack).size !== project.cardStack.length) {
      context.addIssue({
        code: "custom",
        path: ["cardStack"],
        message: "cardStack must not repeat a technology",
      });
    }

    if (project.timeline.ongoing && project.timeline.end !== null) {
      context.addIssue({
        code: "custom",
        path: ["timeline", "end"],
        message: "an ongoing project must not declare an end value",
      });
    }

    const brokenDemo =
      project.demoUrl !== null && !project.links.some((link) => link.url === project.demoUrl);
    if (brokenDemo) {
      context.addIssue({
        code: "custom",
        path: ["demoUrl"],
        message: "demoUrl must also appear in links so its label is localized",
      });
    }

    const brokenPrimaryLink =
      project.primaryLink !== null &&
      !project.links.some((link) => link.url === project.primaryLink);
    if (brokenPrimaryLink) {
      context.addIssue({
        code: "custom",
        path: ["primaryLink"],
        message: "primaryLink must reference one of the project links",
      });
    }
  });

const highlightSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  note: z.string().min(1),
});

const frontMatterSchema = z.object({
  locale: z.enum(["en", "id"]),
  title: z.string().min(1),
  summary: z.string().min(1),
  cardSummary: z.string().min(1),
  roleSummary: z.string().min(1),
  seoDescription: z.string().min(1).max(160),
  mediaAlt: z.object({ hero: z.string().min(1) }),
  mediaCaption: z.object({ hero: z.string().min(1) }),
  outcomeSummary: z.string().min(1),
  highlights: z.array(highlightSchema).min(1).max(3),
});

function parseLocalizedContent(
  filePath: string,
  expectedLocale: "en" | "id",
): { content: ProjectLocalizedContent; heroAlt: string } {
  const source = readFileSync(filePath, "utf8");
  const { data, body } = splitFrontMatter(filePath, source);
  const parsed = frontMatterSchema.safeParse(data);

  if (!parsed.success) {
    const issues = formatIssues(parsed.error).join("; ");
    throw new Error(`${filePath}: ${issues}`);
  }

  if (parsed.data.locale !== expectedLocale) {
    throw new Error(`${filePath}: front matter locale must be "${expectedLocale}"`);
  }

  const highlights: ProjectHighlight[] = parsed.data.highlights;

  return {
    heroAlt: parsed.data.mediaAlt.hero,
    content: {
      locale: parsed.data.locale,
      title: parsed.data.title,
      summary: parsed.data.summary,
      cardSummary: parsed.data.cardSummary,
      roleSummary: parsed.data.roleSummary,
      seoDescription: parsed.data.seoDescription,
      heroCaption: parsed.data.mediaCaption.hero,
      outcomeSummary: parsed.data.outcomeSummary,
      highlights,
      sections: parseBody(filePath, body),
    },
  };
}

function parseProject(projectsRoot: string, slug: string, mode: Mode): ParsedProject {
  const projectDirectory = join(projectsRoot, slug);
  const projectFile = join(projectDirectory, "project.yaml");

  if (!existsSync(projectFile)) {
    throw new Error(`${projectFile}: project record is missing`);
  }

  const parsed = projectSchema.safeParse(parseYaml(readFileSync(projectFile, "utf8")));

  if (!parsed.success) {
    const issues = formatIssues(parsed.error).join("; ");
    throw new Error(`${projectFile}: ${issues}`);
  }

  const record = parsed.data;

  if (record.slug !== slug) {
    throw new Error(`${projectFile}: slug "${record.slug}" does not match its directory name`);
  }

  const heroSourcePath = resolve(projectDirectory, record.media.hero.source);

  if (!existsSync(heroSourcePath)) {
    throw new Error(`${projectFile}: hero media "${record.media.hero.source}" does not exist`);
  }

  const englishFile = join(projectDirectory, "en.md");
  const indonesianFile = join(projectDirectory, "id.md");

  if (!existsSync(englishFile)) {
    throw new Error(`${englishFile}: English narrative is required for every project record`);
  }

  if (record.publication === "published" && !existsSync(indonesianFile)) {
    throw new Error(
      `${indonesianFile}: a published project requires complete English and Indonesian narratives`,
    );
  }

  const english = parseLocalizedContent(englishFile, "en");
  const indonesian = existsSync(indonesianFile)
    ? parseLocalizedContent(indonesianFile, "id")
    : null;

  const links: ProjectLink[] = record.links;
  const primaryLink =
    record.primaryLink === null
      ? null
      : (links.find((link) => link.url === record.primaryLink) ?? null);
  const heroAlt = english.heroAlt;

  const detail: ProjectDetail = {
    slug: record.slug,
    cardTitle: record.cardTitle,
    caseStudyTitle: record.caseStudyTitle,
    category: record.category,
    timeline: record.timeline,
    status: record.status,
    maintenance: record.maintenance,
    roles: record.roles,
    teamContext: record.teamContext,
    stack: record.stack,
    cardStack: record.cardStack,
    publication: record.publication,
    homepageOrder: record.homepageOrder,
    links,
    primaryLink,
    ctaLabel: record.ctaLabel,
    hero: {
      src: heroSourcePlaceholder,
      width: record.media.hero.width,
      height: record.media.hero.height,
      alt: heroAlt,
    },
    content: {
      en: english.content,
      id: indonesian ? indonesian.content : null,
    },
  };

  if (mode === "release" && record.publication !== "published") {
    throw new Error(`${projectFile}: release builds require publication: published`);
  }

  return { detail, heroSourcePath, publication: record.publication };
}

function validateHomepageOrder(projects: ParsedProject[], mode: Mode): void {
  const seen = new Map<number, string>();

  for (const project of projects) {
    const order = project.detail.homepageOrder;
    if (order === null) continue;
    const existing = seen.get(order);
    if (existing) {
      throw new Error(
        `homepageOrder ${order} is used by both "${existing}" and "${project.detail.slug}"`,
      );
    }
    seen.set(order, project.detail.slug);
  }

  if (mode === "development") return;

  const considered = projects
    .map((project) => project.detail)
    .filter((detail) => detail.publication === "published")
    .map((detail) => detail.homepageOrder)
    .filter((order): order is 1 | 2 | 3 | 4 | 5 | 6 => order !== null)
    .sort((left, right) => left - right);

  const expectedCount = mode === "release" ? releaseSlugs.length : considered.length;
  if (considered.length !== expectedCount) {
    throw new Error(
      `homepageOrder must fill 1..${expectedCount} for published projects; found ${considered.join(", ") || "none"}`,
    );
  }

  for (let index = 0; index < expectedCount; index += 1) {
    if (considered[index] !== index + 1) {
      throw new Error(
        `published homepageOrder must start at 1 without gaps; found ${considered.join(", ") || "none"}`,
      );
    }
  }
}

function validateReleaseSet(projects: ParsedProject[]): void {
  const published = projects.filter((project) => project.publication === "published");
  const slugs = new Set(published.map((project) => project.detail.slug));

  if (published.length !== releaseSlugs.length) {
    throw new Error(
      `release requires exactly ${releaseSlugs.length} published projects; found ${published.length}`,
    );
  }

  for (const slug of releaseSlugs) {
    if (!slugs.has(slug)) {
      throw new Error(`release requires published project "${slug}"`);
    }
  }

  for (const project of published) {
    const expectedOrder = releaseSlugs.indexOf(
      project.detail.slug as (typeof releaseSlugs)[number],
    );
    if (project.detail.homepageOrder !== expectedOrder + 1) {
      throw new Error(
        `${project.detail.slug}: homepageOrder must be ${expectedOrder + 1} in the public v1 order`,
      );
    }
    if (project.detail.content.id === null) {
      throw new Error(`${project.detail.slug}: published project is missing Indonesian content`);
    }
  }
}

export function loadProjects(projectsRoot: string, mode: Mode): LoadResult<ParsedProject[]> {
  const directories = existsSync(projectsRoot)
    ? readdirSync(projectsRoot, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort()
    : [];
  const slugs = directories.filter((name) =>
    existsSync(join(projectsRoot, name, "project.yaml")),
  );

  const errors: string[] = [];

  if (mode === "release") {
    for (const required of releaseSlugs) {
      if (!slugs.includes(required)) {
        errors.push(`${join(projectsRoot, required, "project.yaml")}: project record is missing`);
      }
    }
  }

  const projects: ParsedProject[] = [];

  for (const slug of slugs) {
    try {
      projects.push(parseProject(projectsRoot, slug, mode));
    } catch (error) {
      errors.push(error instanceof Error ? error.message : String(error));
    }
  }

  if (errors.length === 0) {
    try {
      validateHomepageOrder(projects, mode);
      if (mode === "release") validateReleaseSet(projects);
    } catch (error) {
      errors.push(error instanceof Error ? error.message : String(error));
    }
  }

  return { value: projects, errors };
}

export function selectProjectsForManifest(
  projects: ParsedProject[],
  mode: Mode,
): ParsedProject[] {
  const included =
    mode === "development" ? projects : projects.filter((project) => project.publication === "published");

  return included.slice().sort((left, right) => {
    const leftOrder = left.detail.homepageOrder ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = right.detail.homepageOrder ?? Number.MAX_SAFE_INTEGER;
    if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    return left.detail.slug.localeCompare(right.detail.slug);
  });
}
