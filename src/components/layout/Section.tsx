import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
};

function Section({ id, labelledBy, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-(--anchor-offset) ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
