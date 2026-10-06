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
    <ul
      className="flex list-none flex-wrap gap-(--space-2) p-0"
      aria-label="Technologies"
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
