import PageContainer from "./components/layout/PageContainer";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import SelectedWorkSection from "./components/sections/SelectedWorkSection";
import EngineeringStatementSection from "./components/sections/EngineeringStatementSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CapabilitiesSection from "./components/sections/CapabilitiesSection";
import TechnologyStrip from "./components/sections/TechnologyStrip";
import HeroSection from "./components/sections/HeroSection";
import ActionLink from "./components/ui/ActionLink";

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
        </PageContainer>

        <CapabilitiesSection />

        <TechnologyStrip />

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative scroll-mt-(--anchor-offset) overflow-hidden bg-[linear-gradient(180deg,var(--color-surface-accent)_0%,var(--color-surface-soft)_45%,var(--color-canvas)_100%)] py-(--contact-padding-mobile) md:py-(--contact-padding-desktop)"
        >
          <PageContainer>
            <div className="relative mx-auto text-center">
              <h2
                id="contact-title"
                className="text-5xl leading-tight font-normal tracking-tight text-(--color-ink) md:text-7xl lg:whitespace-nowrap"
              >
                Let&apos;s build something useful.
              </h2>
              <p className="mx-auto mt-(--space-6) max-w-lg text-lg text-(--color-ink-secondary)">
                I&apos;m open to employment opportunities, freelance projects,
                and professional collaboration. Email is the most direct way to
                start a conversation.
              </p>
              <div className="mt-(--space-8) flex flex-wrap justify-center gap-(--space-3)">
                <ActionLink
                  href="mailto:latifian.iman44@gmail.com"
                  appearance="solid"
                >
                  Email me
                </ActionLink>
                <ActionLink
                  href="/resume/latifian-iman-cv-ats.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume (PDF, opens in a new tab)"
                  appearance="solid"
                >
                  View resume
                </ActionLink>
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
