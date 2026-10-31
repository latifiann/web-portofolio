import PageContainer from "../components/layout/PageContainer";
import SelectedWorkSection from "../components/sections/SelectedWorkSection";
import EngineeringStatementSection from "../components/sections/EngineeringStatementSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import CapabilitiesSection from "../components/sections/CapabilitiesSection";
import TechnologyStrip from "../components/sections/TechnologyStrip";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
import type { ProjectCardProps } from "../features/projects/ProjectCard";
import type { TimelineEntry } from "../types/content";

type HomePageProps = {
  projectCards: ProjectCardProps[];
  experienceEntries: TimelineEntry[];
};

function HomePage({ projectCards, experienceEntries }: HomePageProps) {
  return (
    <main id="main-content" tabIndex={-1} className="pt-16">
      <HeroSection />

      <PageContainer visual>
        <EngineeringStatementSection />
      </PageContainer>

      <SelectedWorkSection cards={projectCards} />

      <PageContainer visual>
        <ExperienceSection entries={experienceEntries} />
      </PageContainer>

      <CapabilitiesSection />

      <TechnologyStrip />

      <ContactSection />
    </main>
  );
}

export default HomePage;
