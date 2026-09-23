type ProjectMetadataProps = {
  stack: string[];
};

function ProjectMetadata({ stack }: ProjectMetadataProps) {
  if (stack.length === 0) {
    return null;
  }

  const visibleStack = stack.slice(0, 3);
  const remainingCount = stack.length - visibleStack.length;

  return (
    <ul className="flex list-none flex-wrap gap-(--space-2) p-0" aria-label="Technologies">
      {visibleStack.map((technology) => (
        <li
          key={technology}
          className="rounded-sm border border-(--color-border) bg-(--color-surface) px-(--space-2) py-(--space-1) font-mono text-xs text-(--color-ink-secondary)"
        >
          {technology}
        </li>
      ))}

      {remainingCount > 0 && (
        <li className="rounded-sm border border-(--color-border) bg-(--color-surface) px-(--space-2) py-(--space-1) font-mono text-xs text-(--color-ink-muted)">
          +{remainingCount}
        </li>
      )}
    </ul>
  );
}

export default ProjectMetadata;