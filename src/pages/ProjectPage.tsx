import { useState, useSyncExternalStore } from "react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import PageContainer from "../components/layout/PageContainer";
import ActionLink from "../components/ui/ActionLink";
import ProjectCard from "../features/projects/ProjectCard";
import type { ProjectCardProps } from "../features/projects/ProjectCard";
import type { ProjectBlock, ProjectDetail } from "../types/content";

const relatedPageSizeDesktop = 2;
const relatedPageSizeMobile = 1;
const desktopLayoutQuery = "(min-width: 768px)";

function subscribeToNothing() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function subscribeToLayout(onChange: () => void) {
  const query = window.matchMedia(desktopLayoutQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getDesktopLayoutSnapshot() {
  return window.matchMedia(desktopLayoutQuery).matches;
}

function getMobileLayoutSnapshot() {
  return false;
}

function useIsDesktopLayout() {
  return useSyncExternalStore(
    subscribeToLayout,
    getDesktopLayoutSnapshot,
    getMobileLayoutSnapshot,
  );
}

type ProjectPageProps = {
  project: ProjectDetail;
  homePath: string;
  relatedProjects: ProjectCardProps[];
};

function ProjectHighlights({ project }: { project: ProjectDetail }) {
  const isDesktop = useIsDesktopLayout();

  return (
    <ul
      aria-label="Project highlights"
      tabIndex={isDesktop ? undefined : 0}
      className="project-highlights-rail m-0 grid list-none gap-(--space-4) p-0 md:grid-cols-3"
    >
      {project.content.en.highlights.map((highlight) => (
        <li
          key={highlight.label}
          className="project-panel flex flex-col rounded-lg border border-(--color-border) bg-(--color-canvas) p-(--space-6)"
        >
          <span className="text-xs font-semibold tracking-wider text-(--color-primary) uppercase">
            {highlight.label}
          </span>
          <span className="mt-(--space-2) text-xl font-semibold tracking-tight text-(--color-ink)">
            {highlight.value}
          </span>
          <span className="mt-(--space-3) text-sm leading-relaxed text-(--color-ink-secondary)">
            {highlight.note}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ProjectBlockContent({ block }: { block: ProjectBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base leading-relaxed text-(--color-ink-secondary)">
        {block.text}
      </p>
    );
  }

  return (
    <ul className="m-0 list-disc space-y-(--space-2) pl-5 text-base leading-relaxed text-(--color-ink-secondary) marker:text-(--color-primary)">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function RelatedProjectList({ projects }: { projects: ProjectCardProps[] }) {
  const [anchorIndex, setAnchorIndex] = useState(0);
  const isDesktop = useIsDesktopLayout();
  const isEnhanced = useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot,
  );

  const pageSize = isDesktop ? relatedPageSizeDesktop : relatedPageSizeMobile;
  const pageCount = Math.ceil(projects.length / pageSize);
  const isPaged = isEnhanced && projects.length > pageSize;
  const activePageIndex = Math.min(
    Math.floor(anchorIndex / pageSize),
    pageCount - 1,
  );
  const startIndex = activePageIndex * pageSize;
  const visibleProjects = isPaged
    ? projects.slice(startIndex, startIndex + pageSize)
    : projects;

  return (
    <>
      <ul
        id="related-projects-list"
        className="m-0 mt-(--space-6) grid list-none gap-(--space-4) p-0 md:grid-cols-2"
      >
        {visibleProjects.map((project) => (
          <li key={project.href}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>

      {isPaged && (
        <nav
          aria-label="Related projects pages"
          className="mt-(--space-6) grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-(--space-2)"
        >
          <button
            type="button"
            aria-controls="related-projects-list"
            aria-disabled={activePageIndex === 0}
            onClick={() => setAnchorIndex(Math.max(0, startIndex - pageSize))}
            className="inline-flex min-h-11 items-center justify-self-start gap-(--space-2) rounded-md border border-(--color-border-strong) bg-(--color-canvas) px-(--space-4) text-sm font-medium text-(--color-ink) transition-colors duration-(--motion-fast) hover:border-(--color-primary) hover:text-(--color-primary) aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-(--color-border-strong) aria-disabled:hover:text-(--color-ink)"
          >
            <FiChevronLeft aria-hidden="true" className="size-4" />
            Previous
          </button>

          <p
            aria-live="polite"
            aria-atomic="true"
            className="m-0 min-w-14 justify-self-center text-center text-sm font-medium text-(--color-ink-muted)"
          >
            <span className="sr-only">Related projects page </span>
            {activePageIndex + 1} / {pageCount}
          </p>

          <button
            type="button"
            aria-controls="related-projects-list"
            aria-disabled={activePageIndex === pageCount - 1}
            onClick={() =>
              setAnchorIndex(
                Math.min(projects.length - 1, startIndex + pageSize),
              )
            }
            className="inline-flex min-h-11 items-center justify-self-end gap-(--space-2) rounded-md border border-(--color-border-strong) bg-(--color-canvas) px-(--space-4) text-sm font-medium text-(--color-ink) transition-colors duration-(--motion-fast) hover:border-(--color-primary) hover:text-(--color-primary) aria-disabled:cursor-not-allowed aria-disabled:opacity-40 aria-disabled:hover:border-(--color-border-strong) aria-disabled:hover:text-(--color-ink)"
          >
            Next
            <FiChevronRight aria-hidden="true" className="size-4" />
          </button>
        </nav>
      )}
    </>
  );
}

function RelatedProjects({
  projects,
  homePath,
}: {
  projects: ProjectCardProps[];
  homePath: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section
      aria-labelledby="related-projects-title"
      className="mt-(--space-16) border-t border-(--color-border) pt-(--space-8)"
    >
      <div className="flex flex-wrap items-center justify-between gap-(--space-4)">
        <h2
          id="related-projects-title"
          className="text-2xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-3xl"
        >
          Explore Related Projects
        </h2>
        <a
          href={`${homePath}#projects`}
          className="inline-flex min-h-11 items-center gap-(--space-2) rounded-sm text-sm font-medium text-(--color-ink-muted) no-underline transition-colors duration-(--motion-fast) hover:text-(--color-primary)"
        >
          <FiArrowLeft aria-hidden="true" className="size-4" />
          Back to selected work
        </a>
      </div>

      <RelatedProjectList projects={projects} />
    </section>
  );
}

function ProjectPage({ project, homePath, relatedProjects }: ProjectPageProps) {
  const content = project.content.en;
  const { hero, primaryLink } = project;
  const secondaryLinks = project.links.filter(
    (link) => link.url !== primaryLink?.url,
  );

  return (
    <main id="main-content" tabIndex={-1} className="project-page pt-16">
      <PageContainer>
        <article className="mx-auto max-w-5xl pt-(--space-6) pb-(--space-24)">
          <a
            href={`${homePath}#projects`}
            className="group inline-flex min-h-11 items-center gap-(--space-2) rounded-sm text-sm font-medium text-(--color-ink-muted) no-underline transition-colors duration-(--motion-fast) hover:text-(--color-primary)"
          >
            <FiArrowLeft aria-hidden="true" className="size-4" />
            Back to selected work
          </a>

          <header className="mt-(--space-4)">
            <ul className="m-0 flex list-none flex-wrap items-center gap-(--space-2) p-0">
              <li className="inline-flex min-h-8 items-center rounded-full border border-(--color-primary-soft) bg-(--color-surface-soft) px-(--space-3) text-xs font-medium tracking-wide text-(--color-primary) uppercase shadow-[0_1px_2px_rgb(15_23_42_/_0.08)]">
                {project.category}
              </li>
              <li className="inline-flex min-h-8 items-center rounded-full border border-(--color-border) bg-(--color-canvas) px-(--space-3) text-xs font-medium tracking-wide text-(--color-ink-secondary) uppercase shadow-[0_1px_2px_rgb(15_23_42_/_0.08)]">
                {project.timeline.display}
              </li>
            </ul>

            <h1 className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl">
              {content.title}
            </h1>

            <p className="mt-(--space-2) text-base font-medium text-(--color-primary)">
              {content.roleSummary}
            </p>

            <p className="mt-(--space-4) max-w-3xl text-base leading-relaxed text-(--color-ink-secondary)">
              {content.summary}
            </p>
          </header>

          <figure className="m-0 mt-(--space-8)">
            <div className="overflow-hidden rounded-lg border border-(--color-border) bg-(--color-surface-soft) p-(--space-2)">
              <img
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                fetchPriority="high"
                className="h-auto w-full rounded-md"
              />
            </div>
            <figcaption className="mt-(--space-3) max-w-3xl text-sm leading-relaxed text-(--color-ink-muted)">
              {content.heroCaption}
            </figcaption>
          </figure>

          <div className="project-highlights-band mt-(--space-8)">
            <ProjectHighlights project={project} />
          </div>

          <div className="mt-(--space-16) grid items-start gap-(--space-8) lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-(--space-12)">
            <div className="flex flex-col gap-(--space-12)">
              {content.sections.map((section) => (
                <section
                  key={section.heading}
                  className="border-t border-(--color-border) pt-(--space-6)"
                >
                  <h2 className="text-2xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-(--space-4) flex flex-col gap-(--space-4)">
                    {section.blocks.map((block, index) => (
                      <ProjectBlockContent key={index} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside className="flex flex-col gap-(--space-4) lg:sticky lg:top-(--space-24)">
              <section
                aria-labelledby="project-stack-title"
                className="project-panel rounded-lg border border-(--color-border) bg-(--color-canvas) p-(--space-6)"
              >
                <h2
                  id="project-stack-title"
                  className="text-xs font-semibold tracking-wider text-(--color-primary) uppercase"
                >
                  Technical stack
                </h2>
                <ul className="m-0 mt-(--space-4) flex list-none flex-wrap gap-(--space-2) p-0">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="inline-flex items-center rounded-full bg-(--color-chip) px-(--space-3) py-(--space-1) text-xs font-normal text-(--color-ink-secondary)"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="project-outcome-title"
                className="project-panel rounded-lg border border-(--color-border) bg-(--color-canvas) p-(--space-6)"
              >
                <h2
                  id="project-outcome-title"
                  className="text-xs font-semibold tracking-wider text-(--color-primary) uppercase"
                >
                  Outcome
                </h2>
                <p className="mt-(--space-3) text-sm leading-relaxed text-(--color-ink-secondary)">
                  {content.outcomeSummary}
                </p>
              </section>

              {primaryLink && (
                <ActionLink
                  appearance="solid"
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  trailingIcon={<FiArrowUpRight />}
                  className="w-full"
                >
                  {project.ctaLabel ?? `View on ${primaryLink.label}`}
                  <span className="sr-only"> (opens in a new tab)</span>
                </ActionLink>
              )}

              {secondaryLinks.length > 0 && (
                <ul
                  aria-label="Additional project links"
                  className="m-0 flex list-none flex-col gap-(--space-2) p-0"
                >
                  {secondaryLinks.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-(--space-2) rounded-sm text-sm font-medium text-(--color-ink) no-underline transition-colors duration-(--motion-fast) hover:text-(--color-primary)"
                      >
                        {link.label}
                        <FiArrowUpRight aria-hidden="true" className="size-4" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </aside>
          </div>

          <RelatedProjects
            key={project.slug}
            projects={relatedProjects}
            homePath={homePath}
          />
        </article>
      </PageContainer>
    </main>
  );
}

export default ProjectPage;
