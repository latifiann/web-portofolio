import type { Locale, PublicationState } from "../types/content";

export type StaticRoute = {
  path: string;
  lang: Locale;
};

export type RouteProject = {
  slug: string;
  publication: PublicationState;
  content: { en: unknown; id: unknown };
};

function localizedHomePath(locale: Locale): string {
  return locale === "id" ? "/id/" : "/";
}

export function listStaticRoutes(projects: RouteProject[]): StaticRoute[] {
  const routes: StaticRoute[] = [
    { path: "/", lang: "en" },
    { path: "/id/", lang: "id" },
  ];

  for (const project of projects) {
    if (project.publication !== "published") continue;
    for (const locale of ["en", "id"] as const) {
      if (!project.content[locale]) continue;
      routes.push({
        path: `${localizedHomePath(locale)}projects/${project.slug}/`,
        lang: locale,
      });
    }
  }

  return routes;
}
