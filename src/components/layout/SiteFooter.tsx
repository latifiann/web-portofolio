import PageContainer from "./PageContainer";

function SiteFooter() {
  return (
    <footer className="bg-(--color-surface-accent) pb-(--space-8)">
      <PageContainer className="border-t border-(--color-border) pt-(--space-6)">

        <nav aria-label="Footer navigation">
          <ul className="m-0 flex list-none flex-wrap justify-center gap-1 p-0">
            <li>
              <a
                href="/"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/latifian-iman"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/latifiann"
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <p className="mt-(--space-4) text-center text-xs text-(--color-ink-muted)">&copy; 2026 Latifian Iman. All rights reserved.</p>
      </PageContainer>
    </footer>
  );
}

export default SiteFooter;
