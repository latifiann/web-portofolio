import PageContainer from "../layout/PageContainer";
import SectionHeader from "../layout/SectionHeader";
import type { SiteStrings } from "../../types/site";

type Capability = {
  title: string;
  description: string;
  labels: string[];
};

function getCapabilities(strings: SiteStrings): Capability[] {
  return [
    {
      title: strings.frontendEngineering,
      description:
        strings.frontendDescription,
      labels: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: strings.backendApi,
      description:
        strings.backendDescription,
      labels: ["Node.js", "Express", "REST API", "JWT"],
    },
    {
      title: strings.mobileDevelopment,
      description:
        strings.mobileDescription,
      labels: ["Flutter", "Dart", "Riverpod", "BLoC"],
    },
    {
      title: strings.databases,
      description:
        strings.databaseDescription,
      labels: ["SQL", "PostgreSQL", "MongoDB", "Mongoose"],
    },
    {
      title: strings.qualityAssurance,
      description:
        strings.qualityDescription,
      labels: [strings.manualTesting, strings.automatedTesting, "Selenium", "Katalon"],
    },
    {
      title: strings.projectCollaboration,
      description:
        strings.collaborationDescription,
      labels: ["Git", "GitHub", "Figma", "Agile"],
    },
  ];
}

function CapabilitiesSection({ strings }: { strings: SiteStrings }) {
  const capabilities = getCapabilities(strings);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="capabilities-section scroll-mt-(--anchor-offset)"
    >
      <PageContainer visual>
        <SectionHeader
          titleId="skills-title"
          eyebrow={strings.capabilitiesEyebrow}
          title={strings.capabilities}
        />

        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <h3 className="text-xl leading-tight font-semibold text-(--color-ink)">
                {capability.title}
              </h3>
              <p className="mt-(--space-3) text-sm text-(--color-ink-secondary)">
                {capability.description}
              </p>
              <ul className="capability-labels">
                {capability.labels.map((label) => (
                  <li key={label} className="capability-label">
                    {label}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export default CapabilitiesSection;
