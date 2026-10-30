import type { ProjectCardProps } from "../features/projects/ProjectCard";
import { toProjectCardProps } from "../features/projects/toProjectCardProps";
import type { Locale, ProjectDetail } from "../types/content";
import { projectDetailPath } from "./routes";

const relatedProjectLimit = 2;

function collectCards(
  projects: ProjectDetail[],
  locale: Locale,
): ProjectCardProps[] {
  return projects.flatMap((project) => {
    const href = projectDetailPath(project.slug);
    if (href === null) return [];

    const card = toProjectCardProps(project, href, locale);
    return card ? [card] : [];
  });
}

/**
 * Landing cards for Selected Work, in `homepageOrder` sequence. Records without
 * a homepage slot stay out of the preview.
 */
export function selectProjectCards(
  projects: ProjectDetail[],
  locale: Locale,
): ProjectCardProps[] {
  const ordered = projects
    .filter((project) => project.homepageOrder !== null)
    .slice()
    .sort(
      (left, right) =>
        (left.homepageOrder ?? 0) - (right.homepageOrder ?? 0),
    );

  return collectCards(ordered, locale);
}

/**
 * Up to two other projects in manifest order. The current project is always
 * excluded so a case study never recommends itself.
 */
export function selectRelatedProjectCards(
  projects: ProjectDetail[],
  currentSlug: string,
  locale: Locale,
): ProjectCardProps[] {
  const candidates = projects.filter(
    (project) => project.slug !== currentSlug,
  );

  return collectCards(candidates, locale).slice(0, relatedProjectLimit);
}
