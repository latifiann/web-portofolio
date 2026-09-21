type ProjectMetadataProps = {
  category: string;
  timeline: string;
  role: string;
  stack: string[];
};

function ProjectMetadata({
  category,
  timeline,
  role,
  stack,
}: ProjectMetadataProps) {
  return (
    <dl className="mt-(--space-6) grid gap-(--space-4) border-t border-(--color-border) pt-(--space-6) md:grid-cols-3">
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

      <div>
        <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-ink-muted)">
          Role
        </dt>
        <dd className="mt-(--space-2) text-sm text-(--color-ink)">{role}</dd>
      </div>

      {stack.length > 0 && (
        <div className="md:col-span-3">
          <dt className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-ink-muted)">
            Stack
          </dt>

          <dd className="mt-(--space-2)">
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
