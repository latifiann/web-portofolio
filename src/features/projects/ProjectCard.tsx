import ProjectMetadata from "./ProjectMetadata";

export type ProjectCardProps = {
  title: string;
  summary: string;
  href: string;
  preview: {
    src: string | null;
    alt: string;
    width: number;
    height: number;
  };
  metadata: {
    category: string;
    timeline: string;
    role: string;
    stack: string[];
  };
};

function ProjectCard({
  title,
  summary,
  href,
  preview,
  metadata,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-md border border-(--color-border) bg-(--color-canvas) p-(--space-4) transition-colors duration-(--motion-base) hover:border-(--color-border-strong) md:p-(--space-6)">
      <div className="aspect-4/3 overflow-hidden rounded-lg bg-(--color-surface-soft)">
        {preview.src ? (
          <img
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-(--motion-base) group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full items-center justify-center bg-(--color-surface-soft)"
            aria-hidden="true"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-(--color-ink-muted)">
              Project preview
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-(--space-6)">
        <h2 className="text-xl leading-tight font-semibold text-(--color-ink) md:text-2xl">
          {title}
        </h2>

        <p className="mt-(--space-3) text-base text-(--color-ink-secondary)">
          {summary}
        </p>

        <ProjectMetadata {...metadata} />

        <div className="mt-auto pt-(--space-6)">
          <a
            href={href}
            className="inline-flex min-h-11 w-fit items-center gap-(--space-2) rounded-sm font-semibold text-(--color-primary) no-underline transition-colors duration-(--motion-fast) hover:text-(--color-primary-hover)"
          >
            View case study
            <span
              aria-hidden="true"
              className="transition-transform duration-(--motion-fast) group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
