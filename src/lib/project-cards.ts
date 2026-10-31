import type { ProjectCardProps } from "../features/projects/ProjectCard";
import { toProjectCardProps } from "../features/projects/toProjectCardProps";
import type { Locale, ProjectDetail } from "../types/content";
import { projectDetailPath } from "./routes";

function collectCards(
  projects: ProjectDetail[],
  locale: Locale,
): ProjectCardProps[] {
  return projects.flatMap((project) => {
    const href = projectDetailPath(project.slug, locale);
    if (href === null) return [];

    const card = toProjectCardProps(project, href, locale);
    return card ? [card] : [];
  });
}

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

export function selectRelatedProjectCards(
  projects: ProjectDetail[],
  currentSlug: string,
  locale: Locale,
): ProjectCardProps[] {
  const candidates = projects.filter(
    (project) => project.slug !== currentSlug,
  );

  return collectCards(candidates, locale);
}
