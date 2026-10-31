import { useEffect, useRef, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router";
import { experience, findProject, projects, site, siteMetadata } from "@content-manifest";
import portraitSrc from "../content/site/media/portrait/latifian-iman-portrait.webp";
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
  resolveLocalRoute,
} from "./lib/routes";
import type { AppRoute } from "./lib/routes";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function withHash(
  path: string | null,
  route: AppRoute,
  hash: string,
): string | null {
  if (!path || route.page !== "home" || !hash) return path;
  return `${path}${hash}`;
}

function subscribeToHydration() {
  return () => {};
}

function getHydratedSnapshot() {
  return true;
}

function getServerHydrationSnapshot() {
  return false;
}

function App() {
  const location = useLocation();
  const isHydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerHydrationSnapshot,
  );
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
        en: withHash(
          equivalentLocalePath(route, "en"),
          route,
          isHydrated ? location.hash : "",
        ),
        id: withHash(
          equivalentLocalePath(route, "id"),
          route,
          isHydrated ? location.hash : "",
        ),
      };

  const previousPath = useRef(location.pathname);
  const metadataProject =
    project && projectContent
      ? { title: project.cardTitle, seoDescription: projectContent.seoDescription }
      : undefined;
  const metadata = isNotFound
    ? null
    : resolvePageMetadata(
        siteMetadata,
        locale,
        { en: equivalentLocalePath(route, "en"), id: equivalentLocalePath(route, "id") },
        portraitSrc,
        strings.portraitAlt,
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

  useEffect(() => {
    const pathChanged = previousPath.current !== location.pathname;
    previousPath.current = location.pathname;

    if (pathChanged) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }

    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
      return;
    }
    if (pathChanged) window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

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
        activeNavigationHref={project && hasSelectedWork ? "#projects" : undefined}
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
      ) : project && projectContent ? (
        <ProjectPage
          key={`${locale}:${project.slug}`}
          project={project}
          content={projectContent}
          strings={strings}
          homePath={homePath}
          relatedProjects={relatedProjects}
        />
      ) : (
        <HomePage
          strings={strings}
          projectCards={projectCards}
          experienceEntries={timelineEntries}
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
