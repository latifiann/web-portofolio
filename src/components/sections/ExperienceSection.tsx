import Section from "../layout/Section";
import SectionHeader from "../layout/SectionHeader";
import { useState, useSyncExternalStore } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import type { TimelineEntry } from "../../types/content";

function TimelineIcon({ type }: { type: TimelineEntry["type"] }) {
  return type === "education" ? (
    <FaGraduationCap className="experience-node-icon" />
  ) : (
    <BsFillBriefcaseFill className="experience-node-icon" />
  );
}

function subscribeToClientReady() {
  return () => {};
}

function getClientReady() {
  return true;
}

function getServerReady() {
  return false;
}

function ExperienceEntryDetails({ entry }: { entry: TimelineEntry }) {
  const [open, setOpen] = useState(false);
  const ready = useSyncExternalStore(
    subscribeToClientReady,
    getClientReady,
    getServerReady,
  );
  return (
    <div className={`experience-details ${ready ? "experience-details--ready" : ""} ${open ? "experience-details--open" : ""}`}>
      <div id={`${entry.id}-details`} className="experience-details-body">
        <ul className="experience-contributions">
          {entry.contributions.map((contribution) => (
            <li key={contribution} className="text-(--color-ink-secondary)">
              {contribution}
            </li>
          ))}
        </ul>
        <ul className="experience-details-tech">
          {entry.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        className="experience-details-toggle"
        aria-expanded={open}
        aria-controls={`${entry.id}-details`}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide details" : "View details"}
      </button>
    </div>
  );
}

type ExperienceSectionProps = {
  entries: TimelineEntry[];
};

function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <Section
      id="experience"
      labelledBy="experience-title"
      className="homepage-section-spacing"
    >
      <SectionHeader
        titleId="experience-title"
        eyebrow="/ Career Journey"
        title="Experience"
      />

      <ol className="experience-timeline">
        {entries.map((entry) => (
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

              <ExperienceEntryDetails entry={entry} />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ExperienceSection;
