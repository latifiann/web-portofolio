import Section from "../layout/Section";
import CapabilityBadge from "../ui/CapabilityBadge";
import { animate } from "motion/mini";
import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { FaServer } from "react-icons/fa";
import { FaFileCode, FaUsersGear } from "react-icons/fa6";
import { IoPhonePortrait, IoTimer } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import type { SiteStrings } from "../../types/site";

const revealThreshold = 0.8;
const entranceDistancePx = 12;
const entranceDurationSeconds = 0.5;
const entranceStaggerSeconds = 0.08;
const titleColorStartViewportRatio = 0.85;
const titleColorEndViewportRatio = 0.5;
const badgeFloatDistancePx = 3;
const badgeFloatDurationSeconds = 3.2;
const badgeFloatStaggerSeconds = 0.08;

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const title = content?.querySelector<HTMLElement>("#about-title");
    const header = title?.parentElement;
    if (!title || !header || !CSS.supports("color", "color-mix(in srgb, red, blue)")) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const forcedColors = window.matchMedia("(forced-colors: active)");
    let frame: number | undefined;
    const update = () => {
      frame = undefined;
      if (reducedMotion.matches || forcedColors.matches) {
        title.classList.remove("about-title-scroll-color");
        title.style.removeProperty("--about-color-progress");
        return;
      }
      const transform = window.getComputedStyle(header).transform;
      const offset = transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;
      const rect = title.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - offset;
      const position = center / window.innerHeight;
      const progress = Math.max(0, Math.min(1, (titleColorStartViewportRatio - position) / (titleColorStartViewportRatio - titleColorEndViewportRatio)));
      title.style.setProperty("--about-color-progress", `${progress * 100}%`);
      title.classList.add("about-title-scroll-color");
    };
    const schedule = () => {
      if (frame === undefined) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    forcedColors.addEventListener("change", schedule);
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      forcedColors.removeEventListener("change", schedule);
      title.classList.remove("about-title-scroll-color");
      title.style.removeProperty("--about-color-progress");
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const section = content?.closest("section");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!content || !section || reducedMotion.matches || !("IntersectionObserver" in window)) return;

    let active = true;
    let stopped = false;
    let revealed = false;
    let entranceFinished = false;
    let visible = false;
    let floating: { pause: () => void; play: () => void; restore: () => void }[] = [];
    const restorers: (() => void)[] = [];
    const stop = () => {
      stopped = true;
      restorers.forEach((restore) => restore());
      floating.forEach(({ restore }) => restore());
      floating = [];
    };
    const run = (element: HTMLElement, properties: { opacity?: number[]; transform?: string[]; color?: string[] }, options: { duration: number; delay?: number; ease: [number, number, number, number] }) => {
      const previous = {
        opacity: element.style.opacity,
        transform: element.style.transform,
        color: element.style.color,
      };
      const control = animate(element, properties, options);
      let restored = false;
      const restore = () => {
        if (restored) return;
        restored = true;
        control.cancel();
        element.style.opacity = previous.opacity;
        element.style.transform = previous.transform;
        element.style.color = previous.color;
      };
      restorers.push(restore);
      return Promise.resolve(control).then(restore);
    };
    const updateFloating = () => {
      if (!active || stopped || !entranceFinished || reducedMotion.matches || !visible || document.hidden) {
        floating.forEach(({ pause }) => pause());
        return;
      }
      if (floating.length) {
        floating.forEach(({ play }) => play());
        return;
      }
      content.querySelectorAll<HTMLElement>(".about-reveal-group ul > li").forEach((badge, index) => {
        if (badge.getClientRects().length === 0) return;
        const previous = badge.style.transform;
        const base = window.getComputedStyle(badge).transform;
        const transform = base === "none" ? "" : base;
        const control = animate(badge, { transform: [transform || "none", `translateY(-${badgeFloatDistancePx}px) ${transform}`, transform || "none", `translateY(${badgeFloatDistancePx}px) ${transform}`, transform || "none"] }, {
          duration: badgeFloatDurationSeconds, delay: index * badgeFloatStaggerSeconds, ease: "easeInOut", repeat: Infinity,
        });
        floating.push({
          pause: () => control.pause(),
          play: () => control.play(),
          restore: () => { control.cancel(); badge.style.transform = previous; },
        });
      });
    };
    const observer = new IntersectionObserver((entries) => {
      if (!active || stopped || reducedMotion.matches) return;
      const entry = entries[entries.length - 1];
      if (!entry) return;
      visible = entry.isIntersecting;
      updateFloating();
      if (revealed || !visible || entry.intersectionRatio < revealThreshold) return;
      revealed = true;
      const groups = Array.from(content.querySelectorAll<HTMLElement>(".about-reveal-group"))
        .filter((element) => window.getComputedStyle(element).display !== "none");
      const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
      const entrances = groups.map((element, index) => run(element, {
        opacity: [0.7, 1], transform: [`translateY(${entranceDistancePx}px)`, "translateY(0px)"],
      }, { duration: entranceDurationSeconds, delay: index * entranceStaggerSeconds, ease: easing }));
      void Promise.all(entrances).then(() => {
        if (!active || stopped || reducedMotion.matches) return;
        entranceFinished = true;
        updateFloating();
      });
    }, { threshold: [0, revealThreshold] });
    const handleResize = () => {
      floating.forEach(({ restore }) => restore());
      floating = [];
      updateFloating();
    };
    const handleMotionChange = (event: MediaQueryListEvent) => { if (event.matches) stop(); };
    observer.observe(section);
    reducedMotion.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", updateFloating);
    return () => {
      active = false;
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", updateFloating);
      stop();
    };
  }, []);

  return (
    <Section
      id="about"
      labelledBy="about-title"
      className="homepage-section-spacing"
    >
      <div ref={contentRef} className="relative grid gap-(--space-6) lg:grid-cols-12 lg:items-center lg:gap-(--space-8)">
        <div className="about-reveal-group order-2 hidden lg:block lg:order-1 lg:col-span-3">
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

        <header className="about-reveal-group order-1 mx-auto max-w-[50rem] text-center lg:order-2 lg:col-span-6">
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

        <div className="about-reveal-group order-3 hidden lg:block lg:col-span-3">
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
