import { existsSync, readFileSync } from "node:fs";
import { parse as parseYaml } from "yaml";
import { z } from "zod";
import type {
  ExperienceEntryDetail,
  ExperienceLocalizedContent,
} from "../../src/types/content.ts";
import { formatIssues } from "./diagnostics.ts";
import type { LoadResult, Mode } from "./types.ts";

const localizedExperienceSchema = z.strictObject({
  title: z.string().min(1),
  period: z.string().min(1),
  organizationNote: z.string().min(1).nullable(),
  description: z.string().min(1),
  contributions: z.array(z.string().min(1)).min(3).max(5),
});

const experienceEntrySchema = z
  .strictObject({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "id must be lowercase kebab-case"),
    type: z.enum(["experience", "education"]),
    organization: z.string().min(1),
    technologies: z.array(z.string().min(1)).min(1).max(5),
    content: z.strictObject({
      en: localizedExperienceSchema,
      id: localizedExperienceSchema.nullable(),
    }),
  })
  .superRefine((entry, context) => {
    if (new Set(entry.technologies).size !== entry.technologies.length) {
      context.addIssue({
        code: "custom",
        path: ["technologies"],
        message: "technologies must not repeat a label",
      });
    }
  });

const experienceSourceSchema = z.strictObject({
  schemaVersion: z.literal(1),
  entries: z.array(experienceEntrySchema).min(1),
});

function toExperienceDetail(
  entry: z.infer<typeof experienceEntrySchema>,
): ExperienceEntryDetail {
  const english: ExperienceLocalizedContent = { locale: "en", ...entry.content.en };
  const indonesian: ExperienceLocalizedContent | null = entry.content.id
    ? { locale: "id", ...entry.content.id }
    : null;

  return {
    id: entry.id,
    type: entry.type,
    organization: entry.organization,
    technologies: entry.technologies,
    content: { en: english, id: indonesian },
  };
}

function parseExperience(experienceFile: string, mode: Mode): ExperienceEntryDetail[] {
  if (!existsSync(experienceFile)) {
    throw new Error(`${experienceFile}: experience source is missing`);
  }

  const parsed = experienceSourceSchema.safeParse(
    parseYaml(readFileSync(experienceFile, "utf8")),
  );

  if (!parsed.success) {
    const issues = formatIssues(parsed.error).join("; ");
    throw new Error(`${experienceFile}: ${issues}`);
  }

  const seen = new Set<string>();
  const entries: ExperienceEntryDetail[] = [];
  const missingIndonesian: string[] = [];

  for (const entry of parsed.data.entries) {
    if (seen.has(entry.id)) {
      throw new Error(`${experienceFile}: duplicate entry id "${entry.id}"`);
    }
    seen.add(entry.id);

    if (entry.content.id === null) {
      missingIndonesian.push(entry.id);
    }

    entries.push(toExperienceDetail(entry));
  }

  if (mode === "release" && missingIndonesian.length > 0) {
    throw new Error(
      `${experienceFile}: release builds require Indonesian content for every entry; missing on ${missingIndonesian.join(", ")}`,
    );
  }

  return entries;
}

export function loadExperience(
  experienceFile: string,
  mode: Mode,
): LoadResult<ExperienceEntryDetail[]> {
  try {
    return { value: parseExperience(experienceFile, mode), errors: [] };
  } catch (error) {
    return {
      value: [],
      errors: [error instanceof Error ? error.message : String(error)],
    };
  }
}
