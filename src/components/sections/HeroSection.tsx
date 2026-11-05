import PageContainer from "../layout/PageContainer";
import { animate } from "motion/mini";
import { useEffect, useRef, useState } from "react";
import portraitSrc from "../../../content/site/media/portrait/latifian-iman-portrait.webp";
import portraitColorSrc from "../../../content/site/media/portrait/latifian-iman-portrait-color.webp";
import type { SiteStrings } from "../../types/site";

const typeIntervalMs = 80;
const deleteIntervalMs = 25;
const betweenLabelsPauseMs = 120;
const initialFocusDwellMs = 250;
const focusDwellMs = 1250;
const focusFontTimeoutMs = 2000;

type FocusPhase = "dwell" | "deleting" | "pause" | "typing";

export default function HeroSection({ strings }: { strings: SiteStrings }) {
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const portraitEntranceReady = useRef(true);
  const initialDwell = useRef(true);
  const entranceText = useRef({
    greeting: strings.heroGreeting,
    role: strings.heroRole,
  });
  const focusValues = [
    strings.focusValue,
    strings.focusValueFrontend,
    strings.focusValueBackend,
  ];
  const [focusIndex, setFocusIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(strings.focusValue.length);
  const [focusPhase, setFocusPhase] = useState<FocusPhase>("dwell");
  const [motionReady, setMotionReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [documentHidden, setDocumentHidden] = useState(false);

  const activeFocusValue =
    focusValues[reducedMotion ? 0 : focusIndex] ?? strings.focusValue;
  const visibleFocusValue =
    motionReady && !reducedMotion
      ? activeFocusValue.slice(0, typedLength)
      : "Mobile · Frontend · Backend";
  const showCursor = motionReady && !reducedMotion;
  const cursorIdle = focusPhase === "dwell" || focusPhase === "pause";
  const focusTail = showCursor ? visibleFocusValue.slice(-1) : "";
  const focusHead = showCursor
    ? visibleFocusValue.slice(0, -1)
    : visibleFocusValue;

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (
      !hero ||
      reducedMotionQuery.matches ||
      (window.location.hash && window.location.hash !== "#home") ||
      window.scrollY > 1
    )
      return;

    portraitEntranceReady.current = false;
    let active = true;
    let cancelled = false;
    let timeout: number | undefined;
    let controls: (() => void)[] = [];
    const groups = [
      {
        selector: ".hero-title",
        distance: 20,
        duration: 0.55,
        delay: 0,
        startOpacity: 0.7,
      },
      {
        selector: ".hero-information-grid",
        distance: 16,
        duration: 0.5,
        delay: 0.24,
        startOpacity: 0.7,
      },
      {
        selector: ".hero-portrait",
        distance: 32,
        duration: 0.9,
        delay: 0.4,
        startOpacity: 0,
      },
    ];
    const targets = groups.flatMap(
      ({ selector, distance, duration, delay, startOpacity }) =>
        Array.from(hero.querySelectorAll<HTMLElement>(selector), (element) => ({
          element,
          distance,
          duration,
          delay,
          startOpacity,
        })),
    );
    const previousStyles = new Map(
      targets.map(({ element }) => [
        element,
        {
          transform: element.style.transform,
          opacity: element.style.opacity,
        },
      ]),
    );
    const restoreStyles = () => {
      previousStyles.forEach((style, element) => {
        element.style.transform = style.transform;
        element.style.opacity = style.opacity;
      });
    };
    const hideDelayedTargets = () => {
      targets.forEach(({ element, startOpacity }) => {
        if (startOpacity === 0) element.style.opacity = "0";
      });
    };
    const stopAnimations = () => {
      cancelled = true;
      portraitEntranceReady.current = true;
      if (timeout !== undefined) window.clearTimeout(timeout);
      controls.forEach((restore) => restore());
      restoreStyles();
    };
    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) stopAnimations();
    };
    reducedMotionQuery.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", stopAnimations);

    const startWhenFontsReady = async () => {
      if (!document.fonts) {
        portraitEntranceReady.current = true;
        return;
      }
      hideDelayedTargets();
      try {
        const loaded = await Promise.race([
          Promise.all([
            document.fonts.load(
              '600 1em "Geist"',
              entranceText.current.greeting,
            ),
            document.fonts.load(
              'italic 400 1em "Instrument Serif"',
              entranceText.current.role,
            ),
          ]).then((faces) => faces.every((face) => face.length > 0)),
          new Promise<false>((resolve) => {
            timeout = window.setTimeout(
              () => resolve(false),
              focusFontTimeoutMs,
            );
          }),
        ]);
        if (timeout !== undefined) window.clearTimeout(timeout);
        if (
          !loaded ||
          !active ||
          cancelled ||
          reducedMotionQuery.matches ||
          (window.location.hash && window.location.hash !== "#home") ||
          window.scrollY > 1
        ) {
          restoreStyles();
          portraitEntranceReady.current = true;
          return;
        }

        const completions: Promise<void>[] = [];
        controls = targets.map(
          ({ element, distance, duration, delay, startOpacity }) => {
            const previous = previousStyles.get(element);
            const originalTransform =
              window.getComputedStyle(element).transform;
            const baseTransform =
              originalTransform === "none" ? "" : originalTransform;
            const control = animate(
              element,
              {
                opacity: [startOpacity, 1],
                transform: [
                  `translateY(${distance}px) ${baseTransform}`,
                  baseTransform || "none",
                ],
              },
              {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
              },
            );
            let restored = false;
            const restore = () => {
              if (restored) return;
              restored = true;
              control.cancel();
              element.style.transform = previous?.transform ?? "";
              element.style.opacity = previous?.opacity ?? "";
              if (element === portraitRef.current) portraitEntranceReady.current = true;
            };
            completions.push(Promise.resolve(control).then(restore));
            return restore;
          },
        );

        await Promise.all(completions);
      } catch {
        if (timeout !== undefined) window.clearTimeout(timeout);
        restoreStyles();
        portraitEntranceReady.current = true;
      }
    };
    void startWhenFontsReady();
    return () => {
      active = false;
      reducedMotionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", stopAnimations);
      stopAnimations();
    };
  }, []);

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return;
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let x = 0;
    let y = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      portrait.removeAttribute("data-color-active");
    };
    const move = (event: PointerEvent) => {
      if (
        event.pointerType === "touch" ||
        !pointerQuery.matches ||
        motionQuery.matches ||
        !portraitEntranceReady.current ||
        document.hidden
      ) return;
      const bounds = portrait.getBoundingClientRect();
      x = event.clientX - bounds.left;
      y = event.clientY - bounds.top;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        portrait.style.setProperty("--portrait-x", `${x}px`);
        portrait.style.setProperty("--portrait-y", `${y}px`);
        portrait.setAttribute("data-color-active", "");
        frame = 0;
      });
    };
    portrait.addEventListener("pointermove", move);
    portrait.addEventListener("pointerleave", reset);
    portrait.addEventListener("pointercancel", reset);
    window.addEventListener("resize", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    pointerQuery.addEventListener("change", reset);
    motionQuery.addEventListener("change", reset);
    return () => {
      reset();
      portrait.removeEventListener("pointermove", move);
      portrait.removeEventListener("pointerleave", reset);
      portrait.removeEventListener("pointercancel", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
      pointerQuery.removeEventListener("change", reset);
      motionQuery.removeEventListener("change", reset);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(query.matches);
      setMotionReady(true);
      if (query.matches) {
        setFocusIndex(0);
        setTypedLength(strings.focusValue.length);
        setFocusPhase("dwell");
      }
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [strings.focusValue]);

  useEffect(() => {
    const update = () =>
      setDocumentHidden(document.visibilityState === "hidden");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    if (!motionReady || reducedMotion || documentHidden) return;

    if (focusPhase === "typing") {
      const timer = window.setTimeout(
        () =>
          typedLength >= activeFocusValue.length
            ? setFocusPhase("dwell")
            : setTypedLength((count) => count + 1),
        typedLength >= activeFocusValue.length ? 0 : typeIntervalMs,
      );
      return () => window.clearTimeout(timer);
    }

    if (focusPhase === "deleting") {
      const timer = window.setTimeout(
        () =>
          typedLength <= 0
            ? setFocusPhase("pause")
            : setTypedLength((count) => Math.max(0, count - 1)),
        typedLength <= 0 ? 0 : deleteIntervalMs,
      );
      return () => window.clearTimeout(timer);
    }

    if (focusPhase === "pause") {
      const timer = window.setTimeout(() => {
        setFocusIndex((index) => (index + 1) % focusValues.length);
        setFocusPhase("typing");
      }, betweenLabelsPauseMs);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(
      () => {
        initialDwell.current = false;
        setFocusPhase("deleting");
      },
      initialDwell.current ? initialFocusDwellMs : focusDwellMs,
    );
    return () => window.clearTimeout(timer);
  }, [
    activeFocusValue,
    documentHidden,
    focusPhase,
    focusValues.length,
    motionReady,
    reducedMotion,
    typedLength,
  ]);

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="hero-title"
      className="hero-section relative scroll-mt-(--anchor-offset) overflow-hidden bg-(--color-canvas) pt-(--hero-padding-top-mobile) pb-(--hero-padding-bottom-mobile) md:pt-(--hero-padding-top-desktop) md:pb-(--hero-padding-bottom-desktop)"
    >
      <div aria-hidden="true" className="hero-background absolute inset-0" />
      <PageContainer visual className="relative">
        <div className="hero-composition relative mx-auto flex min-h-[36rem] max-w-6xl flex-col items-center justify-between text-center md:min-h-[46.25rem]">
          <h1
            id="hero-title"
            className="hero-title relative z-(--z-raised) leading-none font-semibold tracking-tight text-(--color-ink) lg:translate-y-4"
          >
            {strings.heroGreeting}
            <span className="hero-role mt-2 block font-serif font-normal italic tracking-normal text-(--color-ink)">
              {strings.heroRole}
            </span>
          </h1>

          <div className="hero-portrait-wrapper relative z-(--z-raised) -mt-4 flex w-full flex-1 items-end justify-center md:-mt-16 md:-translate-y-4">
            <div ref={portraitRef} className="hero-portrait">
              <img src={portraitSrc} alt={strings.portraitAlt} width={1084} height={1451} fetchPriority="high" className="hero-portrait-base" />
              <img src={portraitColorSrc} alt="" aria-hidden="true" width={1084} height={1451} className="hero-portrait-color" />
            </div>
          </div>

          <div className="hero-information-grid">
            <div className="hero-left-rail">
              <span className="hero-availability inline-flex items-center rounded-full bg-(--color-canvas)/95 text-(--color-ink)">
                <span
                  aria-hidden="true"
                  className="hero-availability-dot rounded-full bg-(--color-primary)"
                />
                {strings.availability}
              </span>

              <p className="hero-focus-label">{strings.focusLabel}</p>
              <p className="hero-focus-value">
                <span className="hero-focus-active" aria-hidden="true">
                  <span className="hero-focus-value-text">
                    {focusHead}
                    {showCursor && (
                      <span className="hero-focus-value-tail">
                        {focusTail}
                        <span
                          className={`hero-focus-cursor${cursorIdle ? " hero-focus-cursor--blink" : ""}${documentHidden ? " hero-focus-cursor--paused" : ""}`}
                        />
                      </span>
                    )}
                  </span>
                  {showCursor && (
                    <span className="hero-focus-value-sizer">
                      {activeFocusValue}
                    </span>
                  )}
                </span>
                <span className="sr-only">{focusValues.join(" · ")}</span>
                {focusValues.map((value) => (
                  <span
                    className="hero-focus-value-sizer"
                    aria-hidden="true"
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </p>
            </div>

            <div aria-hidden="true" className="hero-information-grid-spacer" />

            <div className="hero-right-rail">
              <p className="hero-supporting-text leading-relaxed text-(--color-ink-secondary)">
                {strings.heroStatement}
              </p>
              <a
                href="/resume/latifian-iman-cv-ats.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-resume-link mt-(--space-4) inline-flex items-center rounded-full border border-(--color-border) bg-(--color-canvas) no-underline"
                aria-label={strings.resumeAccessible}
              >
                <span>{strings.resume}</span>
                <span aria-hidden="true" className="hero-resume-arrow">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
