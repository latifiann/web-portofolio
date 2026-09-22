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
  caption?: string;
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
  caption,
  metadata,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col gap-(--space-3)">
      <div className="aspect-4/3 overflow-hidden rounded-xl border border-(--color-border) bg-(--color-canvas) p-2 shadow-[0_8px_24px_rgb(37_99_235_/_0.1)] transition-shadow duration-(--motion-base) group-hover:shadow-[0_10px_30px_rgb(37_99_235_/_0.16)]">
        {preview.src ? (
          <img
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            loading="lazy"
            decoding="async"
            className="h-full w-full rounded-lg object-contain transition-transform duration-(--motion-base) group-hover:scale-[1.03]"
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

      <div className="flex flex-1 flex-col px-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xl leading-tight font-semibold text-(--color-ink)">{title}</h3>
          <div className="flex flex-wrap justify-end gap-1">
            <span className="rounded-full border border-(--color-border) bg-(--color-surface) px-2 py-0.5 font-mono text-[0.625rem] text-(--color-ink-muted)">{metadata.category}</span>
            <span className="rounded-full border border-(--color-border) bg-(--color-surface) px-2 py-0.5 font-mono text-[0.625rem] text-(--color-ink-muted)">{metadata.timeline}</span>
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-(--color-ink-secondary)">
          {summary}
        </p>

        <ProjectMetadata {...metadata} showCategoryAndTimeline={false} />

        {caption && (
          <p className="mt-(--space-4) text-sm text-(--color-ink-muted)">
            {caption}
          </p>
        )}

        <div className="mt-auto pt-(--space-4)">
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
