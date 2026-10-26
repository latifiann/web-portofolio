import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  appearance: "solid" | "outline";
  trailingIcon?: ReactNode;
};

function ActionLink({
  appearance,
  trailingIcon,
  children,
  className = "",
  ...props
}: ActionLinkProps) {
  const surface =
    appearance === "solid"
      ? "rounded-full bg-(--color-ink) text-(--color-canvas) shadow-[0_6px_16px_rgb(15_23_42_/_0.22)] hover:bg-(--color-ink-secondary)"
      : "rounded-md border border-(--color-border-strong) bg-(--color-canvas) text-(--color-ink) hover:border-(--color-primary) hover:text-(--color-primary)";

  return (
    <a
      {...props}
      className={`action-link action-link--${appearance} group relative inline-grid min-h-10 max-w-full items-center gap-(--space-3) px-(--space-6) font-semibold no-underline transition-colors duration-(--motion-fast) md:min-h-11 ${trailingIcon ? "grid-cols-[minmax(0,1fr)_1.25rem]" : "grid-cols-1"} ${surface} ${className}`}
    >
      <span className="min-w-0 text-center">{children}</span>
      {trailingIcon && (
        <span
          aria-hidden="true"
          className="flex size-5 shrink-0 items-center justify-center text-current transition-transform duration-(--motion-fast) group-hover:translate-x-0.5"
        >
          {trailingIcon}
        </span>
      )}
    </a>
  );
}

export default ActionLink;
