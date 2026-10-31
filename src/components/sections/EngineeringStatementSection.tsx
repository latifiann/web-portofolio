import Section from "../layout/Section";
import CapabilityBadge from "../ui/CapabilityBadge";
import type { IconType } from "react-icons";
import { FaServer } from "react-icons/fa";
import { FaFileCode, FaUsersGear } from "react-icons/fa6";
import { IoPhonePortrait, IoTimer } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import type { SiteStrings } from "../../types/site";

type CapabilityBadgeData = {
  label: string;
  accent: string;
  icon: IconType;
};

function getCapabilityBadges(
  strings: SiteStrings,
): CapabilityBadgeData[] {
  return [
    {
      label: strings.mobileDevelopment,
      accent: "#FF5F06",
      icon: IoPhonePortrait,
    },
    {
      label: strings.frontendDevelopment,
      accent: "#07AAFD",
      icon: FaFileCode,
    },
    {
      label: strings.backendApi,
      accent: "#474747",
      icon: FaServer,
    },
    {
      label: strings.realtimeIntegration,
      accent: "#dbbc02",
      icon: IoTimer,
    },
    {
      label: strings.qualityAssurance,
      accent: "#d6589e",
      icon: MdFactCheck,
    },
    {
      label: strings.teamCollaboration,
      accent: "#43cc55",
      icon: FaUsersGear,
    },
  ];
}

function EngineeringStatementSection({ strings }: { strings: SiteStrings }) {
  const capabilityBadges = getCapabilityBadges(strings);

  return (
    <Section
      id="about"
      labelledBy="about-title"
      className="homepage-section-spacing"
    >
      <div className="relative grid gap-(--space-6) lg:grid-cols-12 lg:items-center lg:gap-(--space-8)">
        <div className="order-2 hidden lg:block lg:order-1 lg:col-span-3">
          <ul className="m-0 grid list-none gap-(--space-3) p-0">
            {capabilityBadges.slice(0, 3).map((badge, index) => (
              <CapabilityBadge
                key={badge.label}
                {...badge}
                className={index === 0 ? "lg:translate-x-3 lg:-rotate-2" : ""}
              />
            ))}
          </ul>
        </div>

        <header className="order-1 mx-auto max-w-[50rem] text-center lg:order-2 lg:col-span-6">
          <p className="font-serif text-[clamp(2rem,2.4vw,2.5rem)] italic text-(--color-ink)">
            {strings.engineeringGreeting}
          </p>
          <h2
            id="about-title"
            className="mt-(--space-6) text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.08] font-normal tracking-tight text-(--color-ink)"
          >
            {strings.engineeringStatement}{" "}
            <span className="about-title-accent">
              {strings.engineeringAccent}
            </span>
          </h2>
        </header>

        <div className="order-3 hidden lg:block lg:col-span-3">
          <ul className="m-0 grid list-none gap-(--space-3) p-0 lg:justify-items-end">
            {capabilityBadges.slice(3).map((badge, index) => (
              <CapabilityBadge
                key={badge.label}
                {...badge}
                className={index === 0 ? "lg:-translate-x-3 lg:rotate-2" : ""}
              />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default EngineeringStatementSection;
