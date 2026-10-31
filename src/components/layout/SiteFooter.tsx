import { Link } from "react-router";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import PageContainer from "./PageContainer";
import type { SiteStrings } from "../../types/site";

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

type SiteFooterProps = {
  strings: SiteStrings;
  /** Prefix used for homepage anchors when the footer renders on another page. */
  homePath?: string;
  hasSelectedWork: boolean;
};

function SiteFooter({ strings, homePath = "", hasSelectedWork }: SiteFooterProps) {
  return (
    <footer className="bg-(--color-canvas) pb-(--footer-padding-bottom)">
      <PageContainer className="pt-(--footer-padding-top)">

        <nav aria-label={strings.socialLinks}>
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

        <nav aria-label={strings.footerNavigation}>
          <ul className="m-0 mt-(--space-3) flex list-none flex-wrap justify-center gap-1 p-0">
            <li>
              <Link
                to={homePath || "/"}
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                {strings.home}
              </Link>
            </li>

            <li>
              <Link
                to={`${homePath}#about`}
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                {strings.about}
              </Link>
            </li>

            {hasSelectedWork && <li>
              <Link
                to={`${homePath}#projects`}
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                {strings.projects}
              </Link>
            </li>}

            <li>
              <Link
                to={`${homePath}#contact`}
                className="inline-flex min-h-9 items-center rounded-sm px-(--space-2) text-xs font-medium text-(--color-ink-secondary) no-underline hover:text-(--color-primary)"
              >
                {strings.contact}
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-(--space-4) text-center text-xs text-(--color-ink-muted)">{strings.copyright}</p>
      </PageContainer>
    </footer>
  );
}

export default SiteFooter;
