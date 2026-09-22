import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
  visual?: boolean;
};

function PageContainer({ children, className = "", visual = false }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${visual ? "max-w-(--visual-canvas-max)" : "max-w-(--container-max)"} px-(--container-padding-mobile) md:px-(--container-padding-tablet) lg:px-(--container-padding-desktop) ${className}`}
    >
      {children}
    </div>
  );
}

export default PageContainer;
