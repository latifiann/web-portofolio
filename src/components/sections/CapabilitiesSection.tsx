import PageContainer from "../layout/PageContainer";

type Capability = {
  title: string;
  description: string;
  labels: string[];
};

const capabilities: Capability[] = [
  {
    title: "Frontend Engineering",
    description:
      "Build structured interfaces with React, JavaScript, and Tailwind CSS.",
    labels: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend & REST API",
    description:
      "Integrate and develop REST API boundaries with validation and clear error handling.",
    labels: ["Node.js", "Express", "REST API", "JWT"],
  },
  {
    title: "Mobile Development",
    description:
      "Build Flutter applications with state management, navigation, and platform integrations.",
    labels: ["Flutter", "Dart", "Riverpod", "BLoC"],
  },
  {
    title: "Databases",
    description:
      "Work with relational and document data models used by project backends.",
    labels: ["SQL", "PostgreSQL", "MongoDB", "Mongoose"],
  },
  {
    title: "Software Quality Assurance",
    description:
      "Use manual and automated testing to check product behavior and architecture rules.",
    labels: ["Manual testing", "Automated testing", "Selenium", "Katalon"],
  },
  {
    title: "Project & Collaboration",
    description:
      "Work through shared Git workflows, Figma handoff, and Agile delivery.",
    labels: ["Git", "GitHub", "Figma", "Agile"],
  },
];

function CapabilitiesSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="capabilities-section homepage-section-spacing scroll-mt-(--anchor-offset)"
    >
      <PageContainer visual>
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
        </header>

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