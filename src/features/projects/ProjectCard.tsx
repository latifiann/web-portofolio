import { FiArrowUpRight } from "react-icons/fi";
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
    label: string;
  };
  metadata: {
    context: string;
    timeline: string;
    role: string;
    stack: string[];
    totalStackCount: number;
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
    <article className="group h-full">
      <a
        href={href}
        className="project-card-link flex h-full flex-col rounded-lg border border-(--color-border) bg-(--color-canvas) p-(--space-4) shadow-[0_1px_2px_rgb(15_23_42_/_0.04),0_8px_24px_rgb(37_99_235_/_0.08)] transition-all duration-(--motion-base) hover:-translate-y-0.5 hover:border-(--color-border-strong) hover:shadow-[0_1px_2px_rgb(15_23_42_/_0.05),0_12px_30px_rgb(37_99_235_/_0.16)]"
      >
        <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-(--color-surface-soft)">
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
              className="flex h-full items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-xs uppercase tracking-wider text-(--color-ink-muted)">
                Project preview
              </span>
            </div>
          )}

          <span className="absolute top-(--space-3) left-(--space-3) z-(--z-raised) inline-flex min-h-8 items-center rounded-full border border-(--color-border-strong) bg-(--color-canvas) px-(--space-2) py-(--space-1) font-medium text-[0.625rem] uppercase tracking-wider text-(--color-ink-secondary) shadow-[0_1px_2px_rgb(15_23_42_/_0.08)]">
            {preview.label}
          </span>

          <span
            aria-hidden="true"
            className="project-card-indicator absolute top-(--space-3) right-(--space-3) z-(--z-raised) flex size-8 items-center justify-center rounded-full border border-(--color-border-strong) bg-(--color-canvas) text-(--color-ink) shadow-[0_1px_2px_rgb(15_23_42_/_0.08)] transition-opacity duration-(--motion-fast)"
          >
            <FiArrowUpRight className="size-3.5" />
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-(--space-4)">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl leading-tight font-semibold tracking-tight text-(--color-ink)">
              {title}
            </h3>
            <p className="whitespace-nowrap text-xs font-normal text-(--color-ink-muted)">
              {metadata.timeline}
            </p>
          </div>

          <p className="mt-(--space-2) text-sm leading-snug text-(--color-ink-muted)">
            {metadata.role} · {metadata.context}
          </p>

          <p className="mt-(--space-3) line-clamp-3 text-sm leading-relaxed text-(--color-ink-secondary)">
            {summary}
          </p>

          <div className="mt-auto pt-(--space-4)">
            <ProjectMetadata
              stack={metadata.stack}
              totalStackCount={metadata.totalStackCount}
            />
          </div>
        </div>
      </a>
    </article>
  );
}

export default ProjectCard;
