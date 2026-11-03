import PageContainer from "../layout/PageContainer";
import { animate } from "motion/mini";
import { useEffect, useRef, useState } from "react";
import portraitSrc from "../../../content/site/media/portrait/latifian-iman-portrait.webp";
import type { SiteStrings } from "../../types/site";

const typeIntervalMs = 40;
const initialFocusDwellMs = 250;
const focusDwellMs = 1250;
const focusFadeSeconds = 0.25;
const focusFontTimeoutMs = 2000;

type FocusPhase = "dwell" | "typing" | "fade";

export default function HeroSection({ strings }: { strings: SiteStrings }) {
  const heroRef = useRef<HTMLElement>(null);
  const focusTextRef = useRef<HTMLSpanElement>(null);
  const initialDwell = useRef(true);
  const entranceText = useRef({ greeting: strings.heroGreeting, role: strings.heroRole });
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

    let active = true;
    let cancelled = false;
    let timeout: number | undefined;
    let controls: (() => void)[] = [];
    const stopAnimations = () => {
      cancelled = true;
      if (timeout !== undefined) window.clearTimeout(timeout);
      controls.forEach((restore) => restore());
    };
    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) stopAnimations();
    };
    reducedMotionQuery.addEventListener("change", handleMotionChange);
    window.addEventListener("resize", stopAnimations);

    const startWhenFontsReady = async () => {
      if (!document.fonts) return;
      try {
        const loaded = await Promise.race([
          Promise.all([
            document.fonts.load('600 1em "Geist"', entranceText.current.greeting),
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
        )
          return;

        const groups = [
          { selector: ".hero-title", distance: 20, duration: 0.55, delay: 0 },
          {
            selector: ".hero-portrait",
            distance: 16,
            duration: 0.9,
            delay: 0.12,
          },
          {
            selector: ".hero-information-grid",
            distance: 16,
            duration: 0.5,
            delay: 0.24,
          },
        ];
        const completions: Promise<void>[] = [];
        controls = groups.flatMap(({ selector, distance, duration, delay }) =>
          Array.from(
            hero.querySelectorAll<HTMLElement>(selector),
            (element) => {
              const previousTransform = element.style.transform;
              const previousOpacity = element.style.opacity;
              const originalTransform =
                window.getComputedStyle(element).transform;
              const baseTransform =
                originalTransform === "none" ? "" : originalTransform;
              const control = animate(
                element,
                {
                  opacity: [0.7, 1],
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
                element.style.transform = previousTransform;
                element.style.opacity = previousOpacity;
              };
              completions.push(Promise.resolve(control).then(restore));
              return restore;
            },
          ),
        );

        await Promise.all(completions);
      } catch {
        if (timeout !== undefined) window.clearTimeout(timeout);
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
      const finished = typedLength >= activeFocusValue.length;
      const timer = window.setTimeout(
        () =>
          finished
            ? setFocusPhase("dwell")
            : setTypedLength((count) => count + 1),
        finished ? 0 : typeIntervalMs,
      );
      return () => window.clearTimeout(timer);
    }

    if (focusPhase === "dwell") {
      const timer = window.setTimeout(
        () => {
          initialDwell.current = false;
          setFocusPhase("fade");
        },
        initialDwell.current ? initialFocusDwellMs : focusDwellMs,
      );
      return () => window.clearTimeout(timer);
    }

    const element = focusTextRef.current;
    if (!element) return;
    const control = animate(
      element,
      { opacity: [1, 0] },
      { duration: focusFadeSeconds, ease: "easeOut" },
    );
    let cancelled = false;
    void control.then(() => {
      if (cancelled) return;
      setFocusIndex((index) => (index + 1) % focusValues.length);
      setTypedLength(0);
      setFocusPhase("typing");
    });
    return () => {
      cancelled = true;
      control.cancel();
      element.style.opacity = "";
    };
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
            <img
              src={portraitSrc}
              alt={strings.portraitAlt}
              width={1084}
              height={1451}
              fetchPriority="high"
              className="hero-portrait w-auto object-contain"
            />
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
                <span
                  ref={focusTextRef}
                  className="hero-focus-value-text"
                  aria-hidden="true"
                >
                  {visibleFocusValue}
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
