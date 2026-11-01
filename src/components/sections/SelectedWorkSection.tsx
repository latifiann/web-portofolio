import { PiHandSwipeLeftLight } from "react-icons/pi";
import ProjectCard from "../../features/projects/ProjectCard";
import type { ProjectCardProps } from "../../features/projects/ProjectCard";
import PageContainer from "../layout/PageContainer";
import SectionHeader from "../layout/SectionHeader";
import ActionLink from "../ui/ActionLink";
import { projectIndexPath } from "../../lib/routes";
import type { SiteStrings } from "../../types/site";
import type { Locale } from "../../types/content";

type SelectedWorkSectionProps = {
  strings: SiteStrings;
  cards: ProjectCardProps[];
  locale: Locale;
};

const visibleProjectLimit = 6;

function cardVisibilityClass(index: number): string {
  if (index === 3) {
    return "hidden md:block";
  }

  if (index >= 4) {
    return "hidden lg:block";
  }

  return "";
}

function SelectedWorkSection({
  strings,
  cards,
  locale,
}: SelectedWorkSectionProps) {
  if (cards.length === 0) return null;

  const landingProjects = cards.slice(0, visibleProjectLimit);
  const projectCount = cards.length;
  const indexHref = projectIndexPath(locale);
  const exploreVisibility = projectCount <= 4 ? "md:hidden" : projectCount <= 6 ? "lg:hidden" : "";

  return (
    <section
      id="projects"
      aria-labelledby="selected-work-title"
      className="selected-work-section homepage-section-spacing scroll-mt-(--anchor-offset)"
    >
      <PageContainer visual>
        <SectionHeader
          titleId="selected-work-title"
          eyebrow={strings.selectedEyebrow}
          title={strings.selectedTitle}
        />

        <p className="mt-(--space-12) flex items-center justify-center gap-(--space-2) text-sm text-(--color-ink-secondary) md:hidden">
          {strings.swipeProjects}
          <PiHandSwipeLeftLight aria-hidden="true" className="size-5 shrink-0" />
        </p>

        <div
          role="group"
          aria-labelledby="selected-work-title"
          tabIndex={0}
          className="project-rail mt-(--space-3) md:mt-(--space-12) md:grid md:grid-cols-2 md:gap-(--space-8) lg:grid-cols-3"
        >
          {landingProjects.map((project, index) => (
            <div key={project.href} className={cardVisibilityClass(index)}>
              <ProjectCard {...project} strings={strings} />
            </div>
          ))}
        </div>

        {projectCount > 3 && (
          <div className={`mt-(--space-8) flex justify-center ${exploreVisibility}`}>
            <ActionLink
              href={indexHref}
              internal
              appearance="outline"
              trailingIcon={
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10" />
                  <path d="m9 4 4 4-4 4" />
                </svg>
              }
            >
              {strings.exploreProjects.replace("{count}", String(projectCount))}
            </ActionLink>
          </div>
        )}
      </PageContainer>
    </section>
  );
}

export default SelectedWorkSection;
