import Section from "../layout/Section";
import CapabilityBadge from "../ui/CapabilityBadge";
import { animate } from "motion/mini";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import { FaServer } from "react-icons/fa";
import { FaFileCode, FaUsersGear } from "react-icons/fa6";
import { IoPhonePortrait, IoTimer } from "react-icons/io5";
import { MdFactCheck } from "react-icons/md";
import type { SiteStrings } from "../../types/site";

const revealRootMargin = "0px 0px -8% 0px";
const entranceStartOpacity = 0.35;
const entranceDistancePx = 40;
const entranceDurationSeconds = 0.75;
const entranceStaggerSeconds = 0.12;
const titleColorStartViewportRatio = 0.85;
const titleColorEndViewportRatio = 0.5;
const badgeFloatDistancePx = 8;
const badgeFloatDurationSeconds = 4;
const badgeFloatStaggerSeconds = 0.7;

type CapabilityBadgeData = {
  id: string;
  label: string;
  accent: string;
  icon: IconType;
};

function getCapabilityBadges(strings: SiteStrings): CapabilityBadgeData[] {
  return [
    {
      id: "mobile",
      label: strings.mobileDevelopment,
      accent: "#FF5F06",
      icon: IoPhonePortrait,
    },
    {
      id: "frontend",
      label: strings.frontendDevelopment,
      accent: "#07AAFD",
      icon: FaFileCode,
    },
    {
      id: "backend",
      label: strings.backendApi,
      accent: "#474747",
      icon: FaServer,
    },
    {
      id: "realtime",
      label: strings.realtimeIntegration,
      accent: "#dbbc02",
      icon: IoTimer,
    },
    {
      id: "quality",
      label: strings.qualityAssurance,
      accent: "#d6589e",
      icon: MdFactCheck,
    },
    {
      id: "collaboration",
      label: strings.teamCollaboration,
      accent: "#43cc55",
      icon: FaUsersGear,
    },
  ];
}

function EngineeringStatementSection({ strings }: { strings: SiteStrings }) {
  const capabilityBadges = getCapabilityBadges(strings);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [resetDrag, setResetDrag] = useState(0);
  const floatingControls = useRef(
    new Map<string, { pause: () => void; play: () => void }>(),
  );
  const activeDrag = useRef<string | null>(null);
  const floatingAllowed = useRef(false);

  useEffect(() => {
    const content = contentRef.current;
    const title = content?.querySelector<HTMLElement>("#about-title");
    const header = title?.parentElement;
    if (
      !title ||
      !header ||
      !CSS.supports("color", "color-mix(in srgb, red, blue)")
    )
      return;

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
      const offset =
        transform === "none" ? 0 : new DOMMatrixReadOnly(transform).m42;
      const rect = title.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - offset;
      const position = center / window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (titleColorStartViewportRatio - position) /
            (titleColorStartViewportRatio - titleColorEndViewportRatio),
        ),
      );
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
  }, [
    strings.engineeringGreeting,
    strings.engineeringStatement,
    strings.engineeringAccent,
  ]);

  useEffect(() => {
    const content = contentRef.current;
    const section = content?.closest("section");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!content || !section || !("IntersectionObserver" in window)) return;

    let active = true;
    let stopped = false;
    let revealed = false;
    let entranceRunning = false;
    let visible = false;
    let floating: {
      id: string;
      pause: () => void;
      play: () => void;
      restore: () => void;
    }[] = [];
    const restorers: (() => void)[] = [];
    const originals = new Map<
      HTMLElement,
      { opacity: string; transform: string }
    >();
    if (!reducedMotion.matches) {
      content
        .querySelectorAll<HTMLElement>(".about-reveal-group")
        .forEach((element) => {
          originals.set(element, {
            opacity: element.style.opacity,
            transform: element.style.transform,
          });
          element.style.opacity = String(entranceStartOpacity);
          element.style.transform = `translateY(${entranceDistancePx}px)`;
        });
    }
    const stop = () => {
      stopped = true;
      originals.forEach((original, element) => {
        element.style.opacity = original.opacity;
        element.style.transform = original.transform;
      });
      restorers.forEach((restore) => restore());
      floating.forEach(({ restore }) => restore());
      floating = [];
      floatingControls.current.clear();
    };
    const run = (
      element: HTMLElement,
      properties: {
        opacity?: number[];
        transform?: string[];
        color?: string[];
      },
      options: {
        duration: number;
        delay?: number;
        ease: [number, number, number, number];
      },
    ) => {
      const previous = {
        opacity: originals.get(element)?.opacity ?? element.style.opacity,
        transform: originals.get(element)?.transform ?? element.style.transform,
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
      if (
        !active ||
        stopped ||
        entranceRunning ||
        reducedMotion.matches ||
        !visible ||
        document.hidden
      ) {
        floatingAllowed.current = false;
        floating.forEach(({ pause }) => pause());
        return;
      }
      floatingAllowed.current = true;
      if (floating.length) {
        floating.forEach(({ id, play }) => {
          if (activeDrag.current !== id) play();
        });
        return;
      }
      content
        .querySelectorAll<HTMLElement>(".about-reveal-group ul > li")
        .forEach((badge, index) => {
          if (badge.getClientRects().length === 0) return;
          const previous = badge.style.transform;
          const id = badge.dataset.badgeId;
          if (!id) return;
          const base = window.getComputedStyle(badge).transform;
          const transform = base === "none" ? "" : base;
          const control = animate(
            badge,
            {
              transform: [
                transform || "none",
                `translateY(-${badgeFloatDistancePx}px) ${transform}`,
                transform || "none",
              ],
            },
            {
              duration: badgeFloatDurationSeconds,
              delay: index * badgeFloatStaggerSeconds,
              ease: "easeInOut",
              repeat: Infinity,
            },
          );
          const item = {
            id,
            pause: () => control.pause(),
            play: () => control.play(),
            restore: () => {
              control.cancel();
              badge.style.transform = previous;
            },
          };
          floating.push(item);
          floatingControls.current.set(id, item);
        });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (!active) return;
        const entry = entries[entries.length - 1];
        if (!entry) return;
        visible = entry.isIntersecting;
        updateFloating();
      },
      { threshold: [0] },
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        if (!active || revealed || reducedMotion.matches) return;
        if (!entries.some((entry) => entry.isIntersecting)) return;
        revealed = true;
        revealObserver.disconnect();
        entranceRunning = true;
        updateFloating();
        const groups = Array.from(
          content.querySelectorAll<HTMLElement>(".about-reveal-group"),
        ).filter(
          (element) => window.getComputedStyle(element).display !== "none",
        );
        const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];
        const entrances = groups.map((element, index) =>
          run(
            element,
            {
              opacity: [entranceStartOpacity, 1],
              transform: [
                `translateY(${entranceDistancePx}px)`,
                "translateY(0px)",
              ],
            },
            {
              duration: entranceDurationSeconds,
              delay: index * entranceStaggerSeconds,
              ease: easing,
            },
          ),
        );
        void Promise.all(entrances).then(() => {
          if (!active || stopped || reducedMotion.matches) return;
          entranceRunning = false;
          updateFloating();
        });
      },
      { rootMargin: revealRootMargin, threshold: 0 },
    );
    let desktop = window.matchMedia("(min-width: 64rem)").matches;
    const handleResize = () => {
      setResetDrag((value) => value + 1);
      const nextDesktop = window.matchMedia("(min-width: 64rem)").matches;
      if (desktop === nextDesktop) return;
      desktop = nextDesktop;
      floating.forEach(({ restore }) => restore());
      floating = [];
      floatingControls.current.clear();
      updateFloating();
    };
    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        stop();
        entranceRunning = false;
      } else {
        stopped = false;
        updateFloating();
      }
    };
    observer.observe(section);
    revealObserver.observe(section);
    reducedMotion.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", handleResize);
    const handleVisibility = () => {
      if (document.hidden) setResetDrag((value) => value + 1);
      updateFloating();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      active = false;
      observer.disconnect();
      revealObserver.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      stop();
    };
  }, []);

  return (
    <Section
      id="about"
      labelledBy="about-title"
      className="homepage-section-spacing"
      ref={sectionRef}
    >
      <div
        ref={contentRef}
        className="relative grid gap-(--space-6) lg:grid-cols-12 lg:items-center lg:gap-(--space-8)"
      >
        <div className="about-reveal-group order-2 hidden lg:block lg:order-1 lg:col-span-3">
          <ul className="m-0 grid list-none gap-(--space-3) p-0">
            {capabilityBadges.slice(0, 3).map(({ id, ...badge }, index) => (
              <CapabilityBadge
                key={id}
                badgeId={id}
                {...badge}
                dragConstraints={sectionRef}
                resetDrag={`${resetDrag}:${badge.label}`}
                onDragActiveChange={(dragging) => {
                  activeDrag.current = dragging
                    ? id
                    : activeDrag.current === id
                      ? null
                      : activeDrag.current;
                  const control = floatingControls.current.get(id);
                  if (dragging) control?.pause();
                  else if (floatingAllowed.current) control?.play();
                }}
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
            {capabilityBadges.slice(3).map(({ id, ...badge }, index) => (
              <CapabilityBadge
                key={id}
                badgeId={id}
                {...badge}
                dragConstraints={sectionRef}
                resetDrag={`${resetDrag}:${badge.label}`}
                onDragActiveChange={(dragging) => {
                  activeDrag.current = dragging
                    ? id
                    : activeDrag.current === id
                      ? null
                      : activeDrag.current;
                  const control = floatingControls.current.get(id);
                  if (dragging) control?.pause();
                  else if (floatingAllowed.current) control?.play();
                }}
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
