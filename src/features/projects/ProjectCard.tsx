import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router";
import type { SiteStrings } from "../../types/site";
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

const maxTiltDegrees = 6;
const tiltPerspectivePx = 1000;
const tiltSpring = { stiffness: 220, damping: 26 };
const tiltQuery = "(hover: hover) and (pointer: fine) and (min-width: 48rem)";

function ProjectCard({
  title,
  summary,
  href,
  preview,
  metadata,
  strings,
  headingLevel = 3,
  tilt = false,
}: ProjectCardProps & {
  strings: SiteStrings;
  headingLevel?: 2 | 3;
  tilt?: boolean;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, tiltSpring);
  const rotateY = useSpring(0, tiltSpring);
  const tiltAllowed = useRef(false);

  useEffect(() => {
    const query = window.matchMedia(tiltQuery);
    const update = () => {
      tiltAllowed.current = query.matches;
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!tilt) return;
    const reset = () => {
      rotateX.jump(0);
      rotateY.jump(0);
    };
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, [tilt, rotateX, rotateY]);

  useEffect(() => {
    if (!reducedMotion) return;
    rotateX.jump(0);
    rotateY.jump(0);
  }, [reducedMotion, rotateX, rotateY]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!tilt || reducedMotion || event.pointerType !== "mouse") return;
    if (!tiltAllowed.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const horizontal = (event.clientX - rect.left) / rect.width - 0.5;
    const vertical = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(horizontal * maxTiltDegrees * 2);
    rotateX.set(-vertical * maxTiltDegrees * 2);
  };

  const resetTilt = () => {
    rotateY.set(0);
    rotateX.set(0);
  };

  const linkClassName = `project-card-link flex h-full flex-col rounded-lg border border-(--color-border) bg-(--color-canvas) p-(--space-4) shadow-[0_1px_2px_rgb(15_23_42_/_0.04),0_8px_24px_rgb(37_99_235_/_0.08)] duration-(--motion-base) hover:border-(--color-border-strong) hover:shadow-[0_1px_2px_rgb(15_23_42_/_0.05),0_12px_30px_rgb(37_99_235_/_0.16)] ${
    tilt
      ? "transition-[border-color,box-shadow]"
      : "transition-all hover:-translate-y-0.5"
  }`;

  const content = (
    <Link to={href} className={linkClassName}>
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
              {strings.projectPreview}
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
          <Heading className="text-xl leading-tight font-semibold tracking-tight text-(--color-ink)">
            {title}
          </Heading>
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
            technologiesLabel={strings.technologies}
          />
        </div>
      </div>
    </Link>
  );

  if (!tilt) {
    return <article className="group h-full">{content}</article>;
  }

  return (
    <article
      className="group h-full"
      style={{ perspective: `${tiltPerspectivePx}px` }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      onBlur={resetTilt}
    >
      <motion.div className="h-full" style={{ rotateX, rotateY }}>
        {content}
      </motion.div>
    </article>
  );
}

export default ProjectCard;
