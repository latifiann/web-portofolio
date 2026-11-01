import { Link } from "react-router";
import PageContainer from "../components/layout/PageContainer";
import ProjectCard from "../features/projects/ProjectCard";
import type { ProjectCardProps } from "../features/projects/ProjectCard";
import type { SiteStrings } from "../types/site";

type ProjectIndexPageProps = {
  strings: SiteStrings;
  cards: ProjectCardProps[];
  homePath: string;
};

function ProjectIndexPage({ strings, cards, homePath }: ProjectIndexPageProps) {
  return (
    <main id="main-content" tabIndex={-1} className="pt-32 pb-24">
      <PageContainer visual>
        <Link to={homePath} className="text-sm text-(--color-ink-secondary) hover:text-(--color-primary)">
          ← {strings.notFoundHome}
        </Link>
        <div className="mt-(--space-8) flex flex-wrap items-baseline justify-between gap-(--space-3)">
          <h1 className="text-4xl font-semibold tracking-tight text-(--color-ink)">{strings.projects}</h1>
          <p className="text-sm text-(--color-ink-secondary)">{strings.projectCount.replace("{count}", String(cards.length))}</p>
        </div>
        <p className="mt-(--space-3) max-w-2xl text-base leading-relaxed text-(--color-ink-secondary)">
          {strings.projectIndexDescription}
        </p>
        <div className="mt-(--space-8) grid grid-cols-1 gap-(--space-8) md:grid-cols-2 lg:grid-cols-3">
          {cards.map((project) => <ProjectCard key={project.href} {...project} strings={strings} headingLevel={2} />)}
        </div>
      </PageContainer>
    </main>
  );
}

export default ProjectIndexPage;
