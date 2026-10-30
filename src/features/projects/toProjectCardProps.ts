import type { ProjectDetail, Locale } from "../../types/content";
import type { ProjectCardProps } from "./ProjectCard";

/**
 * Maps a manifest record into landing-card props. The caller owns the resolved
 * `href`, so this mapper never decides whether a destination exists. It returns
 * `null` when the requested locale content is missing instead of silently
 * falling back to English.
 */
export function toProjectCardProps(
  project: ProjectDetail,
  href: string,
  locale: Locale,
): ProjectCardProps | null {
  const content = locale === "id" ? project.content.id : project.content.en;
  if (!content) return null;

  return {
    title: project.cardTitle,
    summary: content.cardSummary,
    href,
    preview: {
      src: project.hero.src,
      alt: project.hero.alt,
      width: project.hero.width,
      height: project.hero.height,
      label: project.category,
    },
    metadata: {
      context: project.teamContext,
      timeline: project.timeline.display,
      role: project.roles.join(", "),
      stack: project.cardStack,
      totalStackCount: project.stack.length,
    },
  };
}
