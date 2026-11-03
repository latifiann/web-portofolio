import type { ReactNode, Ref } from "react";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLElement>;
};

function Section({ id, labelledBy, children, className = "", ref }: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-(--anchor-offset) ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
