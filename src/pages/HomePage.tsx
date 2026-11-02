import PageContainer from "../components/layout/PageContainer";
import SelectedWorkSection from "../components/sections/SelectedWorkSection";
import EngineeringStatementSection from "../components/sections/EngineeringStatementSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import TechnologyStrip from "../components/sections/TechnologyStrip";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import type { ProjectCardProps } from "../features/projects/ProjectCard";
import type { Locale, TimelineEntry } from "../types/content";
import type { SiteStrings } from "../types/site";

type HomePageProps = {
  strings: SiteStrings;
  projectCards: ProjectCardProps[];
  experienceEntries: TimelineEntry[];
  locale: Locale;
};

function HomePage({ strings, projectCards, experienceEntries, locale }: HomePageProps) {
  return (
    <main id="main-content" tabIndex={-1} className="pt-16">
      <HeroSection key={locale} strings={strings} />

      <PageContainer visual>
        <EngineeringStatementSection strings={strings} />
      </PageContainer>

      <SelectedWorkSection strings={strings} cards={projectCards} locale={locale} />

      <PageContainer visual>
        <ExperienceSection strings={strings} entries={experienceEntries} />
      </PageContainer>

      <CapabilitiesSection strings={strings} />

      <TechnologyStrip strings={strings} />

      <ContactSection strings={strings} />
    </main>
  );
}

export default HomePage;
