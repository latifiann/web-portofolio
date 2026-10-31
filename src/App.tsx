import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import { experience, findProject, projects } from "@content-manifest";
import { selectTimelineEntries } from "./lib/experience";
import {
  selectProjectCards,
  selectRelatedProjectCards,
} from "./lib/project-cards";
import { resolveLocalRoute } from "./lib/routes";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const activeLocale = "en";

function App() {
  const route = resolveLocalRoute(window.location.pathname);
  const project = route.page === "project" ? findProject(route.slug) : undefined;
  const homePath = project ? "/" : "";
  const projectCards = selectProjectCards(projects, activeLocale);
  const timelineEntries = selectTimelineEntries(experience, activeLocale);
  const relatedProjects = project
    ? selectRelatedProjectCards(projects, project.slug, activeLocale)
    : [];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <SiteHeader
        homePath={homePath}
        activeNavigationHref={project ? "#projects" : undefined}
      />

      {project ? (
        <ProjectPage
          project={project}
          homePath={homePath}
          relatedProjects={relatedProjects}
        />
      ) : (
        <HomePage
          projectCards={projectCards}
          experienceEntries={timelineEntries}
        />
      )}

      <SiteFooter homePath={homePath} />
    </>
  );
}

export default App;
