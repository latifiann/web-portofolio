import ProjectCard from "../../features/projects/ProjectCard";
import type { ProjectCardProps } from "../../features/projects/ProjectCard";

const projects = [
  {
    title: "FMS-CREATE",
    summary:
      "A passenger-side Flutter application for electric-vehicle fleet operations, built with modular architecture, REST APIs, SSE, and Google Maps.",
    href: "/projects/fms-create/",
    preview: {
      src: null,
      alt: "",
      width: 1200,
      height: 900,
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
      src: null,
      alt: "",
      width: 1200,
      height: 900,
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
      src: null,
      alt: "",
      width: 1200,
      height: 900,
    },
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
    <section id="projects" aria-labelledby="selected-work-title">
      <header className="max-w-3xl">
        <p className="font-serif text-lg italic text-(--color-primary)">
          Selected Work
        </p>

        <h2
          id="selected-work-title"
          className="mt-(--space-3) text-3xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-4xl"
        >
          Things I've shipped
        </h2>

        <p className="mt-(--space-4) text-base text-(--color-ink-secondary) md:text-lg">
          Three projects showing how I contribute across mobile development,
          software architecture, backend APIs, and product delivery.
        </p>
      </header>

      <div className="mt-(--space-12) grid grid-cols-1 gap-(--space-6) md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWorkSection;
