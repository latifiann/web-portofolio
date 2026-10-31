import PageContainer from "../layout/PageContainer";
import portraitSrc from "../../../content/site/media/portrait/latifian-iman-portrait.webp";
import type { SiteStrings } from "../../types/site";

export default function HeroSection({ strings }: { strings: SiteStrings }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-section relative scroll-mt-(--anchor-offset) overflow-hidden bg-(--color-canvas) pt-(--hero-padding-top-mobile) pb-(--hero-padding-bottom-mobile) md:pt-(--hero-padding-top-desktop) md:pb-(--hero-padding-bottom-desktop)"
    >
      <div aria-hidden="true" className="hero-background absolute inset-0" />
      <PageContainer visual className="relative">
        <div className="hero-composition relative mx-auto flex min-h-[36rem] max-w-6xl flex-col items-center justify-between text-center md:min-h-[46.25rem]">
          <h1
            id="hero-title"
            className="hero-title relative z-(--z-raised) leading-none font-semibold tracking-tight text-(--color-ink) lg:translate-y-4"
          >
            {strings.heroGreeting}
            <span className="hero-role mt-2 block font-serif font-normal italic tracking-normal text-(--color-ink)">
              {strings.heroRole}
            </span>
          </h1>

          <div className="hero-portrait-wrapper relative z-(--z-raised) -mt-4 flex w-full flex-1 items-end justify-center md:-mt-16 md:-translate-y-4">
            <img
              src={portraitSrc}
              alt={strings.portraitAlt}
              width={1084}
              height={1451}
              fetchPriority="high"
              className="hero-portrait w-auto object-contain"
            />
          </div>

          <div className="hero-information-grid">
            <div className="hero-left-rail">
              <span className="hero-availability inline-flex items-center rounded-full bg-(--color-canvas)/95 text-(--color-ink)">
                <span
                  aria-hidden="true"
                  className="hero-availability-dot rounded-full bg-(--color-primary)"
                />
                {strings.availability}
              </span>

              <p className="hero-focus-label">{strings.focusLabel}</p>
              <p className="hero-focus-value">
                {strings.focusValue}
              </p>
            </div>

            <div aria-hidden="true" className="hero-information-grid-spacer" />

            <div className="hero-right-rail">
              <p className="hero-supporting-text leading-relaxed text-(--color-ink-secondary)">
                {strings.heroStatement}
              </p>
              <a
                href="/resume/latifian-iman-cv-ats.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-link mt-(--space-4) inline-flex items-center rounded-full border border-(--color-border) bg-(--color-canvas) no-underline"
                aria-label={strings.resumeAccessible}
              >
                <span>{strings.resume}</span>
                <span aria-hidden="true" className="hero-resume-arrow">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
