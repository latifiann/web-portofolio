import { PiHandSwipeLeftLight } from "react-icons/pi";
import ProjectCard from "../../features/projects/ProjectCard";
import type { ProjectCardProps } from "../../features/projects/ProjectCard";
import PageContainer from "../layout/PageContainer";
import ActionLink from "../ui/ActionLink";
import fmsCreatePreview from "../../../content/projects/fms-create/media/fms-create.webp";
import remiMobilePreview from "../../../content/projects/remi-mobile/media/remi-mobile.webp";
import seminaPreview from "../../../content/projects/semina/media/semina.webp";

const projects = [
  {
    title: "FMS-CREATE",
    summary:
      "A passenger-side Flutter application for electric-vehicle fleet operations, built with modular architecture, REST APIs, SSE, and Google Maps.",
    href: "/projects/fms-create/",
    preview: {
      src: fmsCreatePreview,
      alt: "FMS-CREATE fleet-management ecosystem showing passenger mobile screens and team dashboard context.",
      width: 1280,
      height: 800,
      label: "Mobile App",
    },
    metadata: {
      context: "Final academic project",
      timeline: "Dec 2025-Jul 2026",
      role: "Mobile Developer",
      stack: [
        "Flutter",
        "Modular architecture",
        "REST API",
        "SSE",
        "Google Maps",
      ],
    },
  },
  {
    title: "ReMi Mobile",
    summary:
      "An academic task and reminder application for students, delivered as a mobile project and published by the team on Google Play.",
    href: "/projects/remi-mobile/",
    preview: {
      src: remiMobilePreview,
      alt: "ReMi Mobile task and reminder screens beside a separate ReMi Web laptop interface.",
      width: 1280,
      height: 800,
      label: "Mobile App",
    },
    metadata: {
      context: "Agile Teknik",
      timeline: "2024",
      role: "Mobile Developer",
      stack: ["Flutter", "BLoC", "REST API"],
    },
  },
  {
    title: "Semina",
    summary:
      "A backend learning project for event management and ticket checkout, extended from BuildWithAngga material.",
    href: "/projects/semina/",
    preview: {
      src: seminaPreview,
      alt: "Dark event-platform landing page promoting technology events with a green Browse Now button.",
      width: 1280,
      height: 800,
      label: "Backend API",
    },
    metadata: {
      context: "Personal project",
      timeline: "Aug-Sep 2026",
      role: "Backend Developer",
      stack: ["MongoDB", "Express", "React", "Node.js"],
    },
  },
] satisfies ProjectCardProps[];

const landingProjects = projects.slice(0, 6);
const projectCount = projects.length;

function cardVisibilityClass(index: number): string {
  if (index === 3) {
    return "hidden md:block";
  }

  if (index >= 4) {
    return "hidden lg:block";
  }

  return "";
}

function SelectedWorkSection() {
  return (
    <section
      id="projects"
      aria-labelledby="selected-work-title"
      className="selected-work-section homepage-section-spacing scroll-mt-(--anchor-offset)"
    >
      <PageContainer visual>
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-xl italic text-(--color-ink-muted)">
            / Best Projects
          </p>

          <h2
            id="selected-work-title"
            className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl"
          >
            Selected Works
          </h2>
        </header>

        <p className="mt-(--space-12) flex items-center justify-center gap-(--space-2) text-sm text-(--color-ink-secondary) md:hidden">
          Swipe to see more projects
          <PiHandSwipeLeftLight aria-hidden="true" className="size-5 shrink-0" />
        </p>

        <div
          role="group"
          aria-labelledby="selected-work-title"
          tabIndex={0}
          className="project-rail mt-(--space-3) md:mt-(--space-12) md:grid md:grid-cols-2 md:gap-(--space-8) lg:grid-cols-3"
        >
          {landingProjects.map((project, index) => (
            <div
              key={project.href}
              className={cardVisibilityClass(index)}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-(--space-8) flex justify-center">
          <ActionLink
            href="/projects/"
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
            Explore all {projectCount} projects
          </ActionLink>
        </div>
      </PageContainer>
    </section>
  );
}

export default SelectedWorkSection;
