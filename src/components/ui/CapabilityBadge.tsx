import type { IconType } from "react-icons";

type CapabilityBadgeProps = {
  label: string;
  accent: string;
  icon: IconType;
  className?: string;
};

function CapabilityBadge({
  label,
  accent,
  icon: Icon,
  className = "",
}: CapabilityBadgeProps) {
  return (
    <li
      className={`flex w-fit items-center gap-3 rounded-md border border-(--color-border) bg-(--color-canvas) px-(--space-4) py-(--space-3) text-[0.8125rem] text-(--color-ink-secondary) shadow-[0_4px_10px_rgb(15_23_42_/_0.1)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-7 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: accent }}
      >
        <Icon className="size-4" />
      </span>

      {label}
    </li>
  );
}

export default CapabilityBadge;
