import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { Link, useLocation } from "react-router";
import PageContainer from "./PageContainer";
import type { Locale } from "../../types/content";
import type { SiteStringKey, SiteStrings } from "../../types/site";

interface NavigationDefinition {
  labelKey: SiteStringKey;
  href: string;
  icon: ReactNode;
}

const strokeIconProps = {
  "aria-hidden": true,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const navigationDefinitions: NavigationDefinition[] = [
  {
    labelKey: "home",
    href: "#home",
    icon: (
      <svg {...strokeIconProps}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M10 21v-6h4v6" />
      </svg>
    ),
  },
  {
    labelKey: "about",
    href: "#about",
    icon: (
      <svg {...strokeIconProps}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    labelKey: "projects",
    href: "#projects",
    icon: (
      <svg {...strokeIconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    labelKey: "experience",
    href: "#experience",
    icon: (
      <svg {...strokeIconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    labelKey: "capabilities",
    href: "#skills",
    icon: (
      <svg {...strokeIconProps}>
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13 5l-2 14" />
      </svg>
    ),
  },
  {
    labelKey: "technology",
    href: "#technology",
    icon: (
      <svg {...strokeIconProps}>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
  },
  {
    labelKey: "contact",
    href: "#contact",
    icon: (
      <svg {...strokeIconProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
      </svg>
    ),
  },
];

const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "skills",
  "technology",
  "contact",
];
const footerActiveHref = "#contact";

type SiteHeaderProps = {
  strings: SiteStrings;
  locale: Locale;
  languagePaths: { en: string | null; id: string | null };
  /** Prefix used for homepage anchors when the header renders on another page. */
  homePath?: string;
  activeNavigationHref?: string;
  hasSelectedWork: boolean;
  isNotFound: boolean;
  onLanguageSwitch: (target: string) => void;
};

function SiteHeader({
  strings,
  locale,
  languagePaths,
  homePath = "",
  activeNavigationHref,
  hasSelectedWork,
  isNotFound,
  onLanguageSwitch,
}: SiteHeaderProps) {
  const navigationItems = navigationDefinitions
    .filter((item) => hasSelectedWork || item.href !== "#projects")
    .map((item) => ({
      ...item,
      label: strings[item.labelKey],
    }));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeToastVisible, setIsThemeToastVisible] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(navigationItems[0].href);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const pillTransition = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 400, damping: 35 };

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeMenuAndReturnFocus() {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenuAndReturnFocus();
    }

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        closeMenuAndReturnFocus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isThemeToastVisible) return;
    const timeoutId = window.setTimeout(
      () => setIsThemeToastVisible(false),
      4000,
    );
    return () => window.clearTimeout(timeoutId);
  }, [isThemeToastVisible]);

  useEffect(() => {
    if (activeNavigationHref || isNotFound) return;

    const scrollPadding = 160;
    const hero = document.getElementById("home");

    function updateActiveSection() {
      const scrolledY = window.scrollY + scrollPadding;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        if (id === "projects" && !hasSelectedWork) continue;
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.offsetTop <= scrolledY) {
          current = id;
        }
      }

      if (
        footerActiveHref &&
        document.getElementById(footerActiveHref.slice(1))
      ) {
        const footer = document.getElementById(footerActiveHref.slice(1));
        const viewportBottom = window.scrollY + window.innerHeight;
        if (
          footer &&
          viewportBottom >= document.documentElement.scrollHeight - 24
        ) {
          current = footerActiveHref.slice(1);
        }
      }

      setActiveHref(`#${current}`);
    }

    updateActiveSection();

    if (hero) {
      const observer = new ResizeObserver(() => updateActiveSection());
      observer.observe(hero);
      window.addEventListener("scroll", updateActiveSection, { passive: true });
      window.addEventListener("resize", updateActiveSection);
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", updateActiveSection);
        window.removeEventListener("resize", updateActiveSection);
      };
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [activeNavigationHref, hasSelectedWork, isNotFound]);

  const resolvedActiveHref = isNotFound ? null : activeNavigationHref ?? activeHref;
  const languageTarget =
    locale === "en" ? languagePaths.id : languagePaths.en;

  function handleNavigation(hash: string) {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
    // Re-selecting the section already in the URL produces no route change, so
    // the route effect cannot scroll; bring the target back into view here.
    if (location.hash === hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }

  return (
    <motion.header
      data-site-header
      ref={headerRef}
      layoutRoot
      className="fixed top-0 right-0 left-0 z-(--z-sticky) pt-(--space-3)"
    >
      <PageContainer visual>
        <div
          data-header-row
          className="relative flex items-center justify-between"
        >
          {languagePaths.en !== null &&
            languagePaths.id !== null &&
            languageTarget !== null && (
              <Link
                to={languageTarget}
                aria-label={
                  locale === "en"
                    ? strings.switchToIndonesian
                    : strings.switchToEnglish
                }
                onClick={(event) => {
                  setIsMenuOpen(false);
                  if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                    event.preventDefault();
                    onLanguageSwitch(languageTarget);
                  }
                }}
                className="inline-flex min-h-10 items-center gap-1 rounded-full border border-(--color-border) bg-(--color-canvas)/95 px-(--space-3) font-sans text-xs font-medium tracking-wide no-underline shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] backdrop-blur-sm transition-colors hover:border-(--color-primary) hover:bg-(--color-surface-soft) md:min-h-11 lg:min-h-14 lg:px-(--space-4)"
              >
                <svg
                  aria-hidden="true"
                  className="size-3.5 text-(--color-ink-secondary) lg:size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21c-2.2-2.5-3.3-5.5-3.3-9S9.8 5.5 12 3Z" />
                </svg>
                <span
                  className={
                    locale === "en"
                      ? "font-bold text-(--color-primary)"
                      : "text-(--color-ink-muted)"
                  }
                >
                  EN
                </span>
                <span aria-hidden="true" className="text-(--color-ink-muted)">
                  /
                </span>
                <span
                  className={
                    locale === "id"
                      ? "font-bold text-(--color-primary)"
                      : "text-(--color-ink-muted)"
                  }
                >
                  ID
                </span>
              </Link>
            )}

          <nav
            id="primary-navigation"
            aria-label={strings.primaryNavigation}
            className={`absolute top-full right-0 left-0 z-(--z-dropdown) mt-(--space-2) max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-md border border-(--color-border) bg-(--color-canvas) p-(--space-2) shadow-[0_8px_24px_rgb(15_23_42_/_0.06)] lg:top-0 lg:left-1/2 lg:mt-0 lg:block lg:max-h-none lg:w-fit lg:-translate-x-1/2 lg:overflow-visible lg:rounded-full lg:bg-(--color-ink) lg:p-2 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <LayoutGroup id="site-navigation">
              <ul className="m-0 flex list-none flex-col gap-1 p-0 lg:flex-row lg:gap-1">
                {navigationItems.map((item) => {
                  const isActive = item.href === resolvedActiveHref;
                  const href = `${homePath}${item.href}`;
                  return (
                    <li key={item.href}>
                      <Link
                        to={href}
                        aria-current={isActive ? "location" : undefined}
                        className="primary-navigation-link flex min-h-10 items-center rounded-md px-(--space-3) text-sm font-medium no-underline md:min-h-11 lg:min-h-0 lg:rounded-full lg:px-3 lg:py-2 lg:leading-6 lg:text-xs lg:font-semibold"
                        onClick={() => handleNavigation(item.href)}
                      >
                        {isActive && (
                          <motion.span
                            aria-hidden="true"
                            layoutId="site-navigation-pill"
                            initial={false}
                            transition={pillTransition}
                            className="primary-navigation-indicator"
                          />
                        )}
                        <span
                          aria-hidden="true"
                          className={`overflow-hidden transition-[opacity,transform] duration-(--motion-base) ease-out [&>svg]:size-full [&>svg]:shrink-0 lg:[&>svg]:size-4 ${isActive ? "mr-2 w-4 scale-100 opacity-100" : "w-0 scale-75 opacity-0"}`}
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </LayoutGroup>
          </nav>

          <div className="ml-auto flex items-center gap-(--space-2)">
            <button
              type="button"
              aria-label={strings.theme}
              data-js-only
              data-header-control
              className="inline-flex size-10 items-center justify-center rounded-full border border-(--color-border) bg-(--color-canvas)/95 text-(--color-ink) shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] backdrop-blur-sm transition-colors hover:border-(--color-primary) hover:bg-(--color-surface-soft) hover:text-(--color-primary) md:size-11 lg:size-14"
              onClick={() => setIsThemeToastVisible(true)}
            >
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </button>
            <Link
              to={`${homePath}#contact`}
              onClick={() => handleNavigation("#contact")}
              className="header-contact-link hidden min-h-9 items-center rounded-full border border-(--color-border) bg-(--color-canvas)/95 px-(--space-3) font-sans text-[0.625rem] font-medium text-(--color-ink) no-underline shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] backdrop-blur-sm transition-colors lg:inline-flex lg:min-h-14 lg:px-5 lg:text-xs lg:font-semibold lg:shadow-[0_1px_2px_rgb(15_23_42_/_0.04),0_8px_24px_rgb(15_23_42_/_0.06)] lg:backdrop-blur-none"
            >
              {strings.getInTouch}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={isMenuOpen ? strings.closeMenu : strings.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              data-js-only
              data-header-control
              className="inline-flex size-10 items-center justify-center rounded-full bg-(--color-ink) text-(--color-canvas) shadow-[0_4px_12px_rgb(15_23_42_/_0.16)] md:size-11 lg:hidden"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              <span className="sr-only">{isMenuOpen ? strings.close : strings.open}</span>
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isMenuOpen ? (
                  <path d="m6 6 12 12M18 6 6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </PageContainer>

      {isThemeToastVisible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-(--space-4) bottom-(--space-4) z-(--z-toast) max-w-[calc(100vw-var(--space-8))] rounded-full bg-(--color-ink) px-(--space-4) py-(--space-3) text-sm font-medium text-(--color-canvas) shadow-[0_8px_24px_rgb(15_23_42_/_0.16)]"
        >
          {strings.themeUnavailable}
        </div>
      )}
    </motion.header>
  );
}

export default SiteHeader;
