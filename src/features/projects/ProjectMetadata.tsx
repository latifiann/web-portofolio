type ProjectMetadataProps = {
  /** Highlighted badges for the card, not the full project stack. */
  stack: string[];
  /** Length of the full project stack, used for the overflow count. */
  totalStackCount: number;
  technologiesLabel: string;
};

function ProjectMetadata({
  stack,
  totalStackCount,
  technologiesLabel,
}: ProjectMetadataProps) {
  if (stack.length === 0) {
    return null;
  }

  const visibleStack = stack.slice(0, 3);
  const remainingCount = totalStackCount - visibleStack.length;

  return (
    <ul
      className="flex list-none flex-wrap gap-(--space-2) p-0"
      aria-label={technologiesLabel}
    >
      {visibleStack.map((technology) => (
        <li
          key={technology}
          className="rounded-full bg-(--color-chip) px-(--space-2) py-(--space-1) text-xs leading-[1.5] font-normal text-(--color-ink-secondary)"
        >
          {technology}
        </li>
      ))}

      {remainingCount > 0 && (
        <li className="rounded-full bg-(--color-chip) px-(--space-2) py-(--space-1) text-xs leading-[1.5] font-normal text-(--color-ink-secondary)">
          +{remainingCount}
        </li>
      )}
    </ul>
  );
}

export default ProjectMetadata;
