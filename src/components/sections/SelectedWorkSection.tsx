import ProjectCard from "../../features/projects/ProjectCard";
import type { ProjectCardProps } from "../../features/projects/ProjectCard";
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
    },
    metadata: {
      category: "Fleet management",
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
    },
    metadata: {
      category: "Academic mobile productivity",
      timeline: "2024",
      role: "Mobile Developer",
      stack: ["Flutter", "BLoC", "REST API"],
    },
  },
  {
    title: "Semina",
    summary:
      "An ongoing backend learning project for event management and ticket checkout, extended from BuildWithAngga material.",
    href: "/projects/semina/",
    preview: {
      src: seminaPreview,
      alt: "Dark event-platform landing page promoting technology events with a green Browse Now button.",
      width: 1280,
      height: 800,
    },
    caption:
      "The visual represents the event-platform context from authorized learning material; this case study focuses on my backend API work, not frontend authorship.",
    metadata: {
      category: "Event-management backend API",
      timeline: "Aug-Sep 2026; ongoing",
      role: "Backend Developer",
      stack: [],
    },
  },
] satisfies ProjectCardProps[];

function SelectedWorkSection() {
  return (
    <section
      id="projects"
      aria-labelledby="selected-work-title"
      className="scroll-mt-(--anchor-offset)"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-serif text-xl italic text-(--color-ink-muted)">
          / Selected Work
        </p>

        <h2
          id="selected-work-title"
          className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl"
        >
          Selected work
        </h2>

        <p className="mt-(--space-6) text-lg text-(--color-ink-secondary)">
          Three projects showing how I contribute across mobile development,
          software architecture, backend APIs, and product delivery.
        </p>
      </header>

      <div className="mt-(--space-12) grid grid-cols-1 gap-(--space-8) md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWorkSection;
