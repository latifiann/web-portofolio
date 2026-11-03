import { useEffect, useLayoutEffect, useRef } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigationType,
} from "react-router";
import { animate } from "motion/mini";
import {
  experience,
  findProject,
  projects,
  site,
  siteMetadata,
} from "@content-manifest";
import RouteMetadata from "./components/RouteMetadata";
import { resolvePageMetadata } from "./lib/metadata";
import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import PageContainer from "./components/layout/PageContainer";
import { selectTimelineEntries } from "./lib/experience";
import {
  selectProjectCards,
  selectRelatedProjectCards,
} from "./lib/project-cards";
import {
  equivalentLocalePath,
  homePath as localeHomePath,
  projectIndexPath,
  resolveLocalRoute,
} from "./lib/routes";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectIndexPage from "./pages/ProjectIndexPage";

type ReadingPosition = { id: string; offset: number; scrollY: number };

function captureReadingPosition(): ReadingPosition {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id]"),
  );
  const section =
    sections
      .filter((element) => element.getBoundingClientRect().top <= 120)
      .at(-1) ??
    sections[0] ??
    document.getElementById("main-content");
  return {
    id: section?.id ?? "main-content",
    offset: section?.getBoundingClientRect().top ?? 0,
    scrollY: window.scrollY,
  };
}

function scrollStorageKey(path: string, key: string) {
  return `portfolio-scroll:${path}:${key}`;
}

function saveScrollPosition(key: string) {
  try {
    sessionStorage.setItem(key, String(window.scrollY));
  } catch {
    /* Storage may be disabled. */
  }
}

function readScrollPosition(key: string): number | null {
  try {
    const value = sessionStorage.getItem(key);
    if (value === null) return null;
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? number : null;
  } catch {
    return null;
  }
}

function App() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate();
  const readingPosition = useRef<ReadingPosition | null>(null);
  const languageTransition = useRef<{
    target: string;
    cancel: () => void;
  } | null>(null);
  const route = resolveLocalRoute(location.pathname);
  const project =
    route.page === "project" ? findProject(route.slug) : undefined;
  const projectContent = project ? project.content[route.locale] : null;
  const isNotFound =
    route.page === "not-found" ||
    (project !== undefined && projectContent === null);
  const locale = isNotFound ? "en" : route.locale;
  const strings = site[locale];
  const homePath = localeHomePath(locale);
  const projectCards = selectProjectCards(projects, locale);
  const hasSelectedWork = projectCards.length > 0;
  const timelineEntries = selectTimelineEntries(experience, locale);
  const relatedProjects = project
    ? selectRelatedProjectCards(projects, project.slug, locale)
    : [];
  const languagePaths = isNotFound
    ? { en: null, id: null }
    : {
        en: equivalentLocalePath(route, "en"),
        id: equivalentLocalePath(route, "id"),
      };

  const previousLocation = useRef<{ key: string; pathname: string } | null>(
    null,
  );
  const storageKey = scrollStorageKey(location.pathname, location.key);
  const switchLanguage = (target: string) => {
    if (languageTransition.current) return;
    languageTransition.current = { target, cancel: () => {} };
    readingPosition.current = captureReadingPosition();
    void navigate(target);
  };
  const metadataProject =
    route.page === "project-index"
      ? {
          title: strings.projects,
          seoDescription: siteMetadata.home[locale].description,
        }
      : project && projectContent
        ? {
            title: project.cardTitle,
            seoDescription: projectContent.seoDescription,
          }
        : undefined;
  const metadata = isNotFound
    ? null
    : resolvePageMetadata(
        siteMetadata,
        locale,
        {
          en: equivalentLocalePath(route, "en"),
          id: equivalentLocalePath(route, "id"),
        },
        "/social/portfolio-preview-v1.jpg",
        strings.socialPreviewAlt,
        metadataProject,
      );

  useEffect(() => {
    document.documentElement.dataset.reactReady = "true";
    return () => {
      delete document.documentElement.dataset.reactReady;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useLayoutEffect(() => {
    const previous = previousLocation.current;
    if (previous?.key === location.key) return;
    previousLocation.current = {
      key: location.key,
      pathname: location.pathname,
    };
    const position = readingPosition.current;
    readingPosition.current = null;
    if (previous && previous.pathname !== location.pathname) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    if (position) {
      const element = document.getElementById(position.id);
      const top = element
        ? window.scrollY + element.getBoundingClientRect().top - position.offset
        : position.scrollY;
      window.scrollTo({ top, behavior: "instant" });
      return;
    }
    const entry = performance.getEntriesByType("navigation")[0];
    const reload =
      entry !== undefined && "type" in entry && entry.type === "reload";
    const saved =
      navigationType === "POP" && (previous || reload)
        ? readScrollPosition(storageKey)
        : null;
    if (saved !== null) {
      window.scrollTo({ top: saved, behavior: "instant" });
    } else if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else if (previous) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [
    location.key,
    location.pathname,
    location.hash,
    navigationType,
    storageKey,
  ]);

  useLayoutEffect(() => {
    const transition = languageTransition.current;
    if (!transition) return;
    if (location.pathname !== transition.target) {
      transition.cancel();
      languageTransition.current = null;
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const main = document.getElementById("main-content");
    if (reduced.matches || !main) {
      languageTransition.current = null;
      return;
    }
    const previousTransform = main.style.transform;
    const previousOpacity = main.style.opacity;
    const computedTransform = window.getComputedStyle(main).transform;
    const baseTransform = computedTransform === "none" ? "" : computedTransform;
    const control = animate(
      main,
      {
        opacity: [0.7, 1],
        transform: [
          `translateY(24px) ${baseTransform}`,
          baseTransform || "none",
        ],
      },
      { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    );
    const cleanup = () => {
      reduced.removeEventListener("change", onMotionChange);
      control.cancel();
      main.style.transform = previousTransform;
      main.style.opacity = previousOpacity;
      if (languageTransition.current === transition)
        languageTransition.current = null;
    };
    const onMotionChange = () => {
      if (reduced.matches) cleanup();
    };
    transition.cancel = cleanup;
    reduced.addEventListener("change", onMotionChange);
    void Promise.resolve(control).then(cleanup, cleanup);
    return cleanup;
  }, [location.key, location.pathname]);

  useEffect(
    () => () => {
      languageTransition.current?.cancel();
      languageTransition.current = null;
    },
    [],
  );

  useEffect(() => {
    const save = () => saveScrollPosition(storageKey);
    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("pagehide", save);
    return () => {
      window.removeEventListener("scroll", save);
      window.removeEventListener("pagehide", save);
    };
  }, [storageKey]);

  return (
    <>
      <RouteMetadata metadata={metadata} />
      <div className={isNotFound ? "flex min-h-screen flex-col" : undefined}>
        <a className="skip-link" href="#main-content">
          {strings.skip}
        </a>

        <SiteHeader
          strings={strings}
          locale={locale}
          languagePaths={languagePaths}
          homePath={homePath}
          hasSelectedWork={hasSelectedWork}
          isNotFound={isNotFound}
          onLanguageSwitch={switchLanguage}
          activeNavigationHref={
            (project || route.page === "project-index") && hasSelectedWork
              ? "#projects"
              : undefined
          }
        />

        {isNotFound ? (
          <main id="main-content" tabIndex={-1} className="flex-1 pt-32 pb-24">
            <PageContainer>
              <h1 className="text-4xl">{site.en.notFoundTitle}</h1>
              <p className="mt-4">{site.en.notFoundBody}</p>
              <Link to={localeHomePath("en")} className="mt-4 inline-block">
                {site.en.notFoundHome}
              </Link>
            </PageContainer>
          </main>
        ) : route.page === "project-index" ? (
          <ProjectIndexPage
            strings={strings}
            cards={projectCards}
            homePath={homePath}
          />
        ) : project && projectContent ? (
          <ProjectPage
            key={`${locale}:${project.slug}`}
            project={project}
            content={projectContent}
            strings={strings}
            indexPath={projectIndexPath(locale)}
            relatedProjects={relatedProjects}
          />
        ) : (
          <HomePage
            strings={strings}
            projectCards={projectCards}
            experienceEntries={timelineEntries}
            locale={locale}
          />
        )}

        <SiteFooter
          strings={strings}
          homePath={homePath}
          hasSelectedWork={hasSelectedWork}
        />
      </div>
    </>
  );
}

export default App;
