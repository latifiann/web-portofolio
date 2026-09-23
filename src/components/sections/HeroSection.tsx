import PageContainer from "../layout/PageContainer";
import portraitSrc from "../../../content/site/media/portrait/latifian-iman-portrait.webp";

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative scroll-mt-(--anchor-offset) overflow-hidden border-b border-(--color-border) bg-(--color-canvas) pt-(--space-4) pb-(--space-12) md:pt-(--space-8) md:pb-28"
    >
      <div aria-hidden="true" className="hero-background absolute inset-0" />
      <PageContainer visual className="relative">
        <div className="relative mx-auto flex min-h-[36rem] max-w-6xl flex-col items-center justify-between text-center md:min-h-[46.25rem]">
          <h1
            id="hero-title"
            className="hero-title relative z-(--z-raised) leading-none font-semibold tracking-tight text-(--color-ink) lg:translate-y-4"
          >
            Hi, I&apos;m Latifian.
            <span className="hero-role mt-2 block font-serif font-normal italic tracking-normal text-(--color-ink)">
              Software Developer
            </span>
          </h1>

          <div className="relative z-(--z-raised) -mt-4 flex w-full flex-1 items-end justify-center md:-mt-16 md:-translate-y-4">
            <img
              src={portraitSrc}
              alt="Portrait of Latifian Iman"
              width={864}
              height={1080}
              fetchPriority="high"
              className="hero-portrait w-auto object-contain"
            />
          </div>

          <div className="hero-information-grid">
            <div className="hero-left-rail">
              <span className="hero-availability inline-flex items-center gap-2 rounded-md bg-(--color-canvas)/95 text-(--color-ink)">
                <span
                  aria-hidden="true"
                  className="hero-availability-dot rounded-full bg-(--color-primary)"
                />
                Open to new opportunities
              </span>

              <p className="hero-focus-label">Building across</p>
              <p className="hero-focus-value">
                Mobile&thinsp;&middot;&thinsp;Frontend&thinsp;&middot;&thinsp;APIs
              </p>
            </div>

            <div aria-hidden="true" className="hero-information-grid-spacer" />

            <div className="hero-right-rail">
              <p className="hero-supporting-text leading-relaxed text-(--color-ink-secondary)">
                Passionate about creating intuitive digital experiences and
                reliable software systems that connect people with meaningful
                value.
              </p>
              <a
                href="#contact"
                className="mt-(--space-4) inline-flex min-h-10 items-center gap-2 rounded-full bg-(--color-primary) px-(--space-4) text-sm font-semibold text-(--color-canvas) no-underline shadow-[0_6px_16px_rgb(37_99_235_/_0.22)] transition-colors hover:bg-(--color-primary-hover) lg:hidden"
              >
                Get in touch <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="/resume/latifian-iman-cv-ats.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-link mt-(--space-4) inline-flex min-h-11 items-center gap-2 rounded-md border border-(--color-border) bg-(--color-canvas) px-(--space-4) no-underline"
                aria-label="View resume (PDF, opens in a new tab)"
              >
                <span>View resume</span>
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
