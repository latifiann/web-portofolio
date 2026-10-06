import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import PageContainer from "./PageContainer";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/latifian-iman",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/latifiann",
    Icon: FaGithubSquare,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/latifiann",
    Icon: FaInstagramSquare,
  },
];

function SiteFooter() {
  return (
    <footer className="bg-(--color-canvas) pb-(--footer-padding-bottom)">
      <PageContainer className="pt-(--footer-padding-top)">

        <nav aria-label="Social links">
          <ul className="m-0 flex list-none justify-center gap-(--space-2) p-0">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-sm text-(--color-ink-secondary) no-underline transition-colors duration-(--motion-fast) hover:text-(--color-primary)"
                >
                  <Icon aria-hidden="true" className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer navigation">
          <ul className="m-0 mt-(--space-3) flex list-none flex-wrap justify-center gap-1 p-0">
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
          </ul>
        </nav>
        <p className="mt-(--space-4) text-center text-xs text-(--color-ink-muted)">&copy; 2026 Latifian Iman. All rights reserved.</p>
      </PageContainer>
    </footer>
  );
}

export default SiteFooter;
