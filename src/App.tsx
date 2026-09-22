import type { IconType } from "react-icons";
import { FaServer } from "react-icons/fa";
import { FaFileCode, FaUsersGear } from "react-icons/fa6";
import { IoPhonePortrait, IoTimer } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import PageContainer from "./components/layout/PageContainer";
import Section from "./components/layout/Section";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import SelectedWorkSection from "./components/sections/SelectedWorkSection";
import portraitSrc from "../content/site/media/portrait/latifian-iman-portrait.webp";

type CapabilityBadge = {
  label: string;
  accent: string;
  icon: IconType;
};

const capabilityBadges: CapabilityBadge[] = [
  {
    label: "Mobile Development",
    accent: "#FF5F06",
    icon: IoPhonePortrait,
  },
  {
    label: "Frontend Development",
    accent: "#07AAFD",
    icon: FaFileCode,
  },
  {
    label: "Backend & REST API",
    accent: "#474747",
    icon: FaServer,
  },
  {
    label: "Real-time Integration",
    accent: "#dbbc02",
    icon: IoTimer,
  },
  {
    label: "Software Quality Assurance",
    accent: "#d6589e",
    icon: MdFactCheck,
  },
  {
    label: "Team Collaboration",
    accent: "#43cc55",
    icon: FaUsersGear,
  },
];

const experiences = [
  {
    organization: "PT Piramida Teknologi Informasi",
    mode: "Remote",
    period: "Jul 21-Dec 5, 2025",
    context: "Mooda App · Four-person cross-functional team",
    bullets: [
      "Built a Flutter ride-hailing prototype covering authentication, booking, ratings, profiles, and trip history.",
      "Integrated team backend REST APIs and real-time trip updates with Dio and Socket.IO.",
      "Connected Google Maps, Riverpod, GoRouter, and Hive while manually testing customer and driver flows on Android.",
    ],
    tags: ["Flutter", "Riverpod", "Socket.IO", "Google Maps", "Figma"],
  },
  {
    organization: "Mitra Informatika",
    mode: "On-site",
    period: "Jan 13-Jun 6, 2025",
    context: "NKRI · Six-person cross-functional team",
    bullets: [
      "Contributed to Flutter real-time communication modules with Riverpod, Isar, Dio, and AutoRoute.",
      "Helped migrate communication from Socket.IO to WebSocket with reconnect handling and user activity status.",
      "Built WebRTC call prototypes and message search, filtering, and chat-room pagination flows.",
    ],
    tags: ["Flutter", "WebSocket", "WebRTC", "Riverpod", "Isar"],
  },
];

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
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative scroll-mt-(--anchor-offset) overflow-hidden border-b border-(--color-border) bg-(--color-canvas) pt-(--space-4) pb-(--space-12) md:pt-(--space-8) md:pb-28"
        >
          <div
            aria-hidden="true"
            className="hero-background absolute inset-0"
          />
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

                <div
                  aria-hidden="true"
                  className="hero-information-grid-spacer"
                />

                <div className="hero-right-rail">
                  <p className="hero-supporting-text leading-relaxed text-(--color-ink-secondary)">
                    Passionate about creating intuitive digital experiences and
                    reliable software systems that connect people with
                    meaningful value.
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

        <PageContainer visual>
          <Section
            id="about"
            labelledBy="about-title"
            className="border-b border-(--color-border) py-20 md:py-28"
          >
            <div className="relative grid gap-(--space-6) lg:grid-cols-12 lg:items-center lg:gap-(--space-8)">
              <div className="order-2 lg:order-1 lg:col-span-3">
                <ul className="m-0 grid list-none gap-(--space-3) p-0">
                  {capabilityBadges.slice(0, 3).map((badge) => (
                    <li
                      key={badge.label}
                      className="flex w-fit items-center gap-3 rounded-md border border-(--color-border) bg-(--color-canvas) px-(--space-4) py-(--space-3) text-[0.8125rem] text-(--color-ink-secondary) shadow-[0_4px_10px_rgb(15_23_42_/_0.1)] first:lg:-rotate-2 first:lg:-translate-x-3"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex size-7 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: badge.accent }}
                      >
                        <badge.icon aria-hidden="true" className="size-4" />
                      </span>
                      {badge.label}
                    </li>
                  ))}
                </ul>
              </div>

              <header className="order-1 mx-auto max-w-[50rem] text-center lg:order-2 lg:col-span-6">
                <p className="font-serif text-[clamp(2rem,2.4vw,2.5rem)] italic text-(--color-ink)">
                  Hello!
                </p>
                <h2
                  id="about-title"
                  className="mt-(--space-6) text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.08] font-normal tracking-tight text-(--color-ink)"
                >
                  My focus is on blending clear strategy, thoughtful
                  engineering, and product empathy to craft{" "}
                  <span className="about-title-accent">
                    experiences that solve real problems.
                  </span>
                </h2>
              </header>

              <div className="order-3 lg:col-span-3">
                <ul className="m-0 grid list-none gap-(--space-3) p-0 lg:justify-items-end">
                  {capabilityBadges.slice(3).map((badge) => (
                    <li
                      key={badge.label}
                      className="flex w-fit items-center gap-3 rounded-md border border-(--color-border) bg-(--color-canvas) px-(--space-4) py-(--space-3) text-[0.8125rem] text-(--color-ink-secondary) shadow-[0_4px_10px_rgb(15_23_42_/_0.1)] first:lg:rotate-2 first:lg:translate-x-3"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex size-7 items-center justify-center rounded-full text-white"
                        style={{ backgroundColor: badge.accent }}
                      >
                        <badge.icon aria-hidden="true" className="size-4" />
                      </span>
                      {badge.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <div className="py-20 md:py-28">
            <SelectedWorkSection />
          </div>

          <Section
            id="experience"
            labelledBy="experience-title"
            className="border-t border-(--color-border) py-20 md:py-28"
          >
            <header className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-xl italic text-(--color-ink-muted)">
                / Career Journey
              </p>
              <h2
                id="experience-title"
                className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl"
              >
                Experience
              </h2>
              <p className="mt-(--space-6) text-lg text-(--color-ink-secondary)">
                Professional internship experience and applied-informatics
                education that shaped how I work across product and engineering
                teams.
              </p>
            </header>
            <ol className="mx-auto mt-(--space-12) max-w-6xl list-none border-l border-(--color-border) p-0">
              {experiences.map((experience) => (
                <li
                  key={experience.organization}
                  className="relative ml-(--space-6) pb-(--space-12) last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-(--space-2) -left-[1.8125rem] size-4 rounded-full border-2 border-(--color-primary) bg-(--color-canvas)"
                  />
                  <article className="grid gap-(--space-4) lg:grid-cols-12 lg:gap-(--space-8)">
                    <div className="lg:col-span-4">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-primary)">
                        {experience.mode} · Surabaya
                      </p>
                      <p className="mt-(--space-2) font-mono text-sm text-(--color-ink-muted)">
                        {experience.period}
                      </p>
                    </div>
                    <div className="lg:col-span-8">
                      <h3 className="text-2xl leading-tight font-semibold text-(--color-ink)">
                        Mobile Developer Intern
                      </h3>
                      <p className="mt-(--space-2) text-lg text-(--color-ink-secondary)">
                        {experience.organization}
                      </p>
                      <p className="mt-(--space-4) font-mono text-xs text-(--color-ink-muted)">
                        {experience.context}
                      </p>
                      <ul className="mt-(--space-4) grid gap-(--space-3) pl-(--space-4) text-(--color-ink-secondary)">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                      <ul className="mt-(--space-6) flex list-none flex-wrap gap-(--space-2) p-0">
                        {experience.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-sm border border-(--color-border) bg-(--color-surface) px-(--space-3) py-(--space-2) font-mono text-xs text-(--color-ink-secondary)"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
            <div className="mt-(--space-8) border-t border-(--color-border) pt-(--space-6)">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-primary)">
                Education
              </p>
              <h3 className="mt-(--space-3) text-xl font-semibold text-(--color-ink)">
                Sarjana Terapan (D4) Teknik Informatika
              </h3>
              <p className="mt-(--space-2) text-(--color-ink-secondary)">
                Politeknik Elektronika Negeri Surabaya · 2021-2026
              </p>
            </div>
          </Section>

          <Section
            id="skills"
            labelledBy="skills-title"
            className="border-t border-(--color-border) py-20 md:py-28"
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
          className="mt-(--space-16) scroll-mt-(--anchor-offset) border-y border-(--color-border) bg-(--color-canvas) py-(--space-8) md:mt-(--space-24)"
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
          className="relative scroll-mt-(--anchor-offset) overflow-hidden bg-[linear-gradient(180deg,var(--color-canvas)_0%,var(--color-surface-soft)_45%,var(--color-surface-accent)_100%)] py-24 md:py-36"
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
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(--color-primary) px-(--space-5) font-semibold text-(--color-canvas) no-underline shadow-[0_6px_16px_rgb(37_99_235_/_0.22)] transition-colors duration-(--motion-fast) hover:bg-(--color-primary-hover)"
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
