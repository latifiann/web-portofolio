import PageContainer from "./components/layout/PageContainer";
import Section from "./components/layout/Section";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import SelectedWorkSection from "./components/sections/SelectedWorkSection";
import EngineeringStatementSection from "./components/sections/EngineeringStatementSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HeroSection from "./components/sections/HeroSection";

const capabilities = [
  {
    icon: "</>",
    title: "Frontend Engineering",
    description:
      "Build structured interfaces with React, JavaScript, and Tailwind CSS.",
    labels: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: "API",
    title: "Backend & REST API",
    description:
      "Integrate and develop REST API boundaries with validation and clear error handling.",
    labels: ["Node.js", "Express", "REST API", "JWT"],
  },
  {
    icon: "MOB",
    title: "Mobile Development",
    description:
      "Build Flutter applications with state management, navigation, and platform integrations.",
    labels: ["Flutter", "Dart", "Riverpod", "BLoC"],
  },
  {
    icon: "DB",
    title: "Databases",
    description:
      "Work with relational and document data models used by project backends.",
    labels: ["SQL", "PostgreSQL", "MongoDB", "Mongoose"],
  },
  {
    icon: "QA",
    title: "Software Quality Assurance",
    description:
      "Use manual and automated testing to check product behavior and architecture rules.",
    labels: ["Manual testing", "Automated testing", "Selenium", "Katalon"],
  },
  {
    icon: "COL",
    title: "Project & Collaboration",
    description:
      "Work through shared Git workflows, Figma handoff, and Agile delivery.",
    labels: ["Git", "GitHub", "Figma", "Agile"],
  },
];

const technologies = [
  "Flutter",
  "React",
  "TypeScript",
  "Dart",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "WebSocket",
  "Git",
  "Figma",
];

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="pt-16">
        <HeroSection />

        <PageContainer visual>
          <EngineeringStatementSection />
        </PageContainer>

        <SelectedWorkSection />

        <PageContainer visual>
          <ExperienceSection />

          <Section
            id="skills"
            labelledBy="skills-title"
            className="homepage-section-spacing"
          >
            <header className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-xl italic text-(--color-ink-muted)">
                / Technical Expertise
              </p>
              <h2
                id="skills-title"
                className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl"
              >
                Capabilities
              </h2>
              <p className="mt-(--space-6) text-lg text-(--color-ink-secondary)">
                Capabilities grounded in project and internship work, grouped by
                engineering function rather than tool count.
              </p>
            </header>
            <div className="mt-(--space-12) grid gap-(--space-4) md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="relative overflow-hidden rounded-xl border border-(--color-border) bg-(--color-canvas) p-(--space-6) shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-all duration-(--motion-fast) hover:-translate-y-0.5 hover:border-(--color-primary)"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 right-0 left-0 h-0.5 bg-(--color-primary)"
                  />
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-(--color-primary) font-mono text-xs font-semibold text-(--color-canvas)">
                    {capability.icon}
                  </span>
                  <h3 className="mt-(--space-4) text-xl font-semibold text-(--color-ink)">
                    {capability.title}
                  </h3>
                  <p className="mt-(--space-3) text-sm text-(--color-ink-secondary)">
                    {capability.description}
                  </p>
                  <ul className="mt-(--space-4) flex list-none flex-wrap gap-(--space-2) p-0">
                    {capability.labels.map((label) => (
                      <li
                        key={label}
                        className="font-mono text-xs text-(--color-ink-muted)"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>
        </PageContainer>

        <section
          id="technology"
          aria-labelledby="technology-title"
          className="mt-(--technology-margin-top-mobile) scroll-mt-(--anchor-offset) bg-(--color-canvas) py-(--technology-padding-block) md:mt-(--technology-margin-top-desktop)"
        >
          <PageContainer>
            <div className="flex items-center gap-(--space-3)">
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-(--color-border)"
              />
              <h2
                id="technology-title"
                className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-(--color-ink-muted)"
              >
                Core technologies & ecosystem
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-(--color-border)"
              />
            </div>
            <ul className="mt-(--space-6) flex list-none gap-(--space-6) overflow-x-auto pb-(--space-2) md:flex-wrap md:justify-center md:overflow-visible">
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="shrink-0 font-mono text-xs font-medium text-(--color-ink-secondary)"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </PageContainer>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative scroll-mt-(--anchor-offset) overflow-hidden bg-[linear-gradient(180deg,var(--color-canvas)_0%,var(--color-surface-soft)_45%,var(--color-surface-accent)_100%)] py-(--contact-padding-mobile) md:py-(--contact-padding-desktop)"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgb(186_230_253_/_0.6),transparent_75%)]"
          />
          <PageContainer>
            <div className="relative mx-auto max-w-3xl text-center">
              <h2
                id="contact-title"
                className="text-5xl leading-tight font-normal tracking-tight text-(--color-ink) md:text-7xl"
              >
                Let&apos;s build something useful.
              </h2>
              <p className="mt-(--space-6) text-lg text-(--color-ink-secondary)">
                I&apos;m open to employment opportunities, freelance projects,
                and professional collaboration. Email is the most direct way to
                start a conversation.
              </p>
              <div className="mt-(--space-8) flex flex-wrap justify-center gap-(--space-3)">
                <a
                  href="mailto:latifian.iman44@gmail.com"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(--color-primary) px-(--space-6) font-semibold text-(--color-canvas) no-underline shadow-[0_6px_16px_rgb(37_99_235_/_0.22)] transition-colors duration-(--motion-fast) hover:bg-(--color-primary-hover)"
                >
                  Email me
                </a>
                <a
                  href="https://www.linkedin.com/in/latifian-iman"
                  className="inline-flex min-h-11 items-center rounded-sm border border-(--color-border-strong) bg-(--color-canvas) px-(--space-4) font-semibold text-(--color-ink) no-underline transition-colors duration-(--motion-fast) hover:border-(--color-primary) hover:text-(--color-primary)"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/latifiann"
                  className="inline-flex min-h-11 items-center rounded-sm border border-(--color-border-strong) bg-(--color-canvas) px-(--space-4) font-semibold text-(--color-ink) no-underline transition-colors duration-(--motion-fast) hover:border-(--color-primary) hover:text-(--color-primary)"
                >
                  GitHub
                </a>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default App;
