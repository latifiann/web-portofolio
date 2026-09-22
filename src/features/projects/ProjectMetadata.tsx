type ProjectMetadataProps = {
  category: string;
  timeline: string;
  role: string;
  stack: string[];
  showCategoryAndTimeline?: boolean;
};

function ProjectMetadata({
  category,
  timeline,
  role,
  stack,
  showCategoryAndTimeline = true,
}: ProjectMetadataProps) {
  return (
    <dl
      className={`mt-(--space-4) grid gap-(--space-3) border-t border-(--color-border) pt-(--space-4) ${
        showCategoryAndTimeline ? "md:grid-cols-3" : ""
      }`}
    >
      {showCategoryAndTimeline && (
        <>
          <div>
            <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-ink-muted)">
              Category
            </dt>
            <dd className="mt-(--space-2) text-sm text-(--color-ink)">
              {category}
            </dd>
          </div>

          <div>
            <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-ink-muted)">
              Timeline
            </dt>
            <dd className="mt-(--space-2) text-sm text-(--color-ink)">
              {timeline}
            </dd>
          </div>
        </>
      )}

      <div>
        <dt className="font-mono text-[0.625rem] font-semibold uppercase tracking-wider text-(--color-ink-muted)">
          Role
        </dt>
        <dd className="mt-1 text-sm text-(--color-ink)">{role}</dd>
      </div>

      {stack.length > 0 && (
        <div className={showCategoryAndTimeline ? "md:col-span-3" : ""}>
            <dt className="font-mono text-[0.625rem] font-semibold uppercase tracking-wider text-(--color-ink-muted)">
            Stack
          </dt>

          <dd className="mt-1">
            <ul
              className="flex list-none flex-wrap gap-(--space-2) p-0"
              aria-label="Technologies"
            >
              {stack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-sm border border-(--color-border) bg-(--color-canvas) px-(--space-3) py-(--space-2) font-mono text-xs text-(--color-ink-secondary)"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}

export default ProjectMetadata;
