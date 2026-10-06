import Section from "../layout/Section";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";

type TimelineEntry = {
  id: string;
  type: "experience" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  organizationNote?: string;
  contributions: string[];
  technologies: string[];
};

const timeline: TimelineEntry[] = [
  {
    id: "pt-piramida-mobile-developer-intern-2025",
    type: "experience",
    title: "Mobile Developer Intern",
    organization: "PT Piramida Teknologi Informasi",
    organizationNote: "Remote · Surabaya",
    period: "Jul 2025-Dec 2025",
    description:
      "Flutter ride-hailing prototype for Mooda App, built with a four-person team, covering authentication, booking, ratings, profiles, and trip history.",
    contributions: [
      "Built the Flutter prototype running authentication, booking, ratings, profiles, and trip history.",
      "Integrated the team backend REST APIs and real-time trip updates with Dio and Socket.IO.",
      "Connected Google Maps, Riverpod, GoRouter, and Hive while manually testing customer and driver flows on Android.",
    ],
    technologies: ["Flutter", "Riverpod", "Socket.IO", "Google Maps", "Figma"],
  },
  {
    id: "mitra-informatika-mobile-developer-intern-2025",
    type: "experience",
    title: "Mobile Developer Intern",
    organization: "Mitra Informatika",
    organizationNote: "On-site · Surabaya",
    period: "Jan 2025-Jun 2025",
    description:
      "Flutter real-time communication modules for NKRI, built with a six-person team, covering messaging, presence, WebRTC calls, search, and pagination.",
    contributions: [
      "Contributed to Flutter real-time communication modules with Riverpod, Isar, Dio, and AutoRoute.",
      "Helped migrate communication from Socket.IO to WebSocket with reconnect handling and user activity status.",
      "Built WebRTC call prototypes and message search, filtering, and chat-room pagination flows.",
    ],
    technologies: ["Flutter", "WebSocket", "WebRTC", "Riverpod", "Isar"],
  },
  {
    id: "education-d4-informatics",
    type: "education",
    title: "Sarjana Terapan (D4) Teknik Informatika",
    organization: "Politeknik Elektronika Negeri Surabaya",
    period: "2021-2026",
    description: "Academic focus and project summary pending owner review.",
    contributions: ["Academic highlight pending owner review."],
    technologies: ["Details pending"],
  },
];

function TimelineIcon({ type }: { type: TimelineEntry["type"] }) {
  return type === "education" ? (
    <FaGraduationCap className="experience-node-icon" />
  ) : (
    <BsFillBriefcaseFill className="experience-node-icon" />
  );
}

function ExperienceSection() {
  return (
    <Section
      id="experience"
      labelledBy="experience-title"
      className="homepage-section-spacing"
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
      </header>

      <ol className="experience-timeline">
        {timeline.map((entry) => (
          <li
            key={entry.id}
            className={`experience-entry ${
              entry.type === "education" ? "experience-entry--education" : ""
            }`}
          >
            <span aria-hidden="true" className="experience-node">
              <TimelineIcon type={entry.type} />
            </span>
            <article className="experience-content">
              <div className="experience-heading-row">
                <h3 className="text-2xl leading-tight font-semibold text-(--color-ink)">
                  {entry.title}
                </h3>
                <p className="experience-period-badge">{entry.period}</p>
              </div>

              <p className="experience-organization-row">
                <span className="text-lg text-(--color-ink-secondary)">
                  {entry.organization}
                </span>
                {entry.organizationNote && (
                  <span className="text-xs uppercase tracking-wider text-(--color-ink-muted)">
                    {entry.organizationNote}
                  </span>
                )}
              </p>

              <p className="mt-(--space-4) text-(--color-ink-secondary)">
                {entry.description}
              </p>

              <ul className="experience-contributions">
                {entry.contributions.map((contribution) => (
                  <li key={contribution} className="text-(--color-ink-secondary)">
                    {contribution}
                  </li>
                ))}
              </ul>

              <ul className="mt-(--space-6) flex list-none flex-wrap gap-(--space-2) p-0">
                {entry.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-(--color-chip) px-(--space-2) py-(--space-1) text-xs leading-[1.5] text-(--color-ink-secondary)"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ExperienceSection;
