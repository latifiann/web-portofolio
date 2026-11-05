import { useEffect, useRef } from "react";
import { animate } from "motion/mini";
import { PiHandSwipeLeftLight } from "react-icons/pi";
import ProjectCard from "../../features/projects/ProjectCard";
import type { ProjectCardProps } from "../../features/projects/ProjectCard";
import PageContainer from "../layout/PageContainer";
import SectionHeader from "../layout/SectionHeader";
import ActionLink from "../ui/ActionLink";
import { projectIndexPath } from "../../lib/routes";
import type { SiteStrings } from "../../types/site";
import type { Locale } from "../../types/content";

type SelectedWorkSectionProps = {
  strings: SiteStrings;
  cards: ProjectCardProps[];
  locale: Locale;
};

const visibleProjectLimit = 6;
const revealRootMargin = "0px 0px -8% 0px";
const entranceDistancePx = 40;
const entranceStartOpacity = 0.35;
const entranceDurationSeconds = 0.75;
const entranceStaggerSeconds = 0.12;
const entranceEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const swipeHintDistancePx = 8;
const swipeHintDurationSeconds = 1.2;

function cardVisibilityClass(index: number): string {
  if (index === 3) {
    return "hidden md:block";
  }

  if (index >= 4) {
    return "hidden lg:block";
  }

  return "";
}

function SelectedWorkSection({
  strings,
  cards,
  locale,
}: SelectedWorkSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cursor = document.createElement("span");
    cursor.className = "project-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.textContent = strings.viewProject;
    document.body.appendChild(cursor);
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const forced = window.matchMedia("(forced-colors: active)");
    let frame = 0;
    let x = 0;
    let y = 0;
    let activeLink: Element | null = null;
    let pendingLink: Element | null = null;
    const hide = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      activeLink?.removeAttribute("data-cursor-active");
      activeLink = null;
      pendingLink = null;
      cursor.removeAttribute("data-active");
    };
    const move = (event: PointerEvent) => {
      const link = event.target instanceof Element
        ? event.target.closest("[data-project-cursor] .project-card-link")
        : null;
      if (!link || !pointer.matches || reduced.matches || forced.matches || event.pointerType !== "mouse" || document.hidden) {
        hide();
        return;
      }
      if (activeLink && activeLink !== link) {
        activeLink.removeAttribute("data-cursor-active");
        activeLink = null;
      }
      pendingLink = link;
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const width = cursor.offsetWidth;
        const height = cursor.offsetHeight;
        const left = Math.max(0, Math.min(x - width / 2, window.innerWidth - width));
        const top = Math.max(0, Math.min(y - height / 2, window.innerHeight - height));
        cursor.style.left = `${left}px`;
        cursor.style.top = `${top}px`;
        cursor.setAttribute("data-active", "");
        activeLink = pendingLink;
        activeLink?.setAttribute("data-cursor-active", "");
        frame = 0;
      });
    };
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", hide);
    section.addEventListener("pointercancel", hide);
    section.addEventListener("click", hide);
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", hide);
    pointer.addEventListener("change", hide);
    reduced.addEventListener("change", hide);
    forced.addEventListener("change", hide);
    return () => {
      hide();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", hide);
      section.removeEventListener("pointercancel", hide);
      section.removeEventListener("click", hide);
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", hide);
      pointer.removeEventListener("change", hide);
      reduced.removeEventListener("change", hide);
      forced.removeEventListener("change", hide);
      cursor.remove();
    };
  }, [locale, strings.viewProject]);

  useEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (
      !section ||
      reducedMotion.matches ||
      !("IntersectionObserver" in window)
    )
      return;

    const originals = new Map<
      HTMLElement,
      { opacity: string; transform: string }
    >();
    const running: { cancel: () => void }[] = [];
    const swipeHint = section.querySelector<HTMLElement>("[data-swipe-hint]");
    const swipeIcon = swipeHint?.querySelector<HTMLElement>("svg") ?? null;
    const mobileQuery = window.matchMedia("(max-width: 47.9375rem)");

    const distanceFor = (element: HTMLElement) =>
      mobileQuery.matches && element.closest(".project-rail")
        ? 12
        : entranceDistancePx;

    const restore = (element: HTMLElement) => {
      const original = originals.get(element);
      if (!original) return;
      element.style.opacity = original.opacity;
      element.style.transform = original.transform;
    };

    const revealItems = Array.from(
      section.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    revealItems.forEach((element) => {
      originals.set(element, {
        opacity: element.style.opacity,
        transform: element.style.transform,
      });
      element.style.opacity = String(entranceStartOpacity);
      element.style.transform = `translateY(${distanceFor(element)}px)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) =>
            a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1,
          );

        let staggerIndex = 0;
        visible.forEach((element) => {
          observer.unobserve(element);

          if (element === swipeHint) {
            if (!swipeIcon) return;
            const iconTransform = swipeIcon.style.transform;
            const control = animate(
              swipeIcon,
              {
                transform: [
                  "translateX(0px)",
                  `translateX(-${swipeHintDistancePx}px)`,
                  "translateX(0px)",
                  `translateX(-${swipeHintDistancePx}px)`,
                  "translateX(0px)",
                ],
              },
              { duration: swipeHintDurationSeconds, ease: "easeInOut" },
            );
            running.push(control);
            void Promise.resolve(control).then(() => {
              control.cancel();
              swipeIcon.style.transform = iconTransform;
            });
            return;
          }

          const control = animate(
            element,
            {
              opacity: [entranceStartOpacity, 1],
              transform: [
                `translateY(${distanceFor(element)}px)`,
                "translateY(0px)",
              ],
            },
            {
              duration: entranceDurationSeconds,
              delay: staggerIndex * entranceStaggerSeconds,
              ease: entranceEase,
            },
          );
          staggerIndex += 1;
          running.push(control);
          void Promise.resolve(control).then(() => {
            control.cancel();
            restore(element);
          });
        });
      },
      { rootMargin: revealRootMargin, threshold: 0 },
    );

    revealItems.forEach((element) => observer.observe(element));
    if (swipeHint) observer.observe(swipeHint);

    return () => {
      observer.disconnect();
      running.forEach((control) => control.cancel());
      revealItems.forEach(restore);
    };
  }, []);

  if (cards.length === 0) return null;

  const landingProjects = cards.slice(0, visibleProjectLimit);
  const projectCount = cards.length;
  const indexHref = projectIndexPath(locale);
  const exploreVisibility =
    projectCount <= 4 ? "md:hidden" : projectCount <= 6 ? "lg:hidden" : "";

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="selected-work-title"
      className="selected-work-section homepage-section-spacing scroll-mt-(--anchor-offset)"
    >
      <PageContainer visual>
        <div data-reveal>
          <SectionHeader
            titleId="selected-work-title"
            eyebrow={strings.selectedEyebrow}
            title={strings.selectedTitle}
          />
        </div>

        <p
          data-swipe-hint
          className="mt-(--space-12) flex items-center justify-center gap-(--space-2) text-sm text-(--color-ink-secondary) md:hidden"
        >
          {strings.swipeProjects}
          <PiHandSwipeLeftLight
            aria-hidden="true"
            className="size-5 shrink-0"
          />
        </p>

        <div
          role="group"
          aria-labelledby="selected-work-title"
          tabIndex={0}
          className="project-rail mt-(--space-3) md:mt-(--space-12) md:grid md:grid-cols-2 md:gap-(--space-8) lg:grid-cols-3"
        >
          {landingProjects.map((project, index) => (
            <div
              key={project.href}
              data-reveal
              data-project-cursor
              className={cardVisibilityClass(index)}
            >
              <ProjectCard {...project} strings={strings} tilt />
            </div>
          ))}
        </div>

        {projectCount > 3 && (
          <div
            className={`mt-(--space-8) flex justify-center ${exploreVisibility}`}
          >
            <ActionLink
              href={indexHref}
              internal
              appearance="outline"
              trailingIcon={
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10" />
                  <path d="m9 4 4 4-4 4" />
                </svg>
              }
            >
              {strings.exploreProjects.replace("{count}", String(projectCount))}
            </ActionLink>
          </div>
        )}
      </PageContainer>
    </section>
  );
}

export default SelectedWorkSection;
