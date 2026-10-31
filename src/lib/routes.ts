import { findProject } from "@content-manifest";
import type { Locale } from "../types/content";

export type AppRoute =
  | { page: "home"; locale: Locale }
  | { page: "project"; locale: Locale; slug: string }
  | { page: "not-found"; locale: "en" };

export function homePath(locale: Locale): string {
  return locale === "id" ? "/id/" : "/";
}

export function canResolveProjectDetail(): boolean {
  return import.meta.env.DEV;
}

export function projectDetailPath(slug: string, locale: Locale = "en"): string | null {
  const project = findProject(slug);
  if (!project || !project.content[locale]) return null;
  if (!canResolveProjectDetail() && project.publication !== "published") return null;
  return `${homePath(locale)}projects/${slug}/`;
}

export function projectIndexPath(): string | null {
  return null;
}

export function resolveLocalRoute(pathname: string): AppRoute {
  if (pathname === "/") return { page: "home", locale: "en" };
  if (pathname === "/id/" || pathname === "/id") return { page: "home", locale: "id" };
  const match = /^(\/id)?\/projects\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/.exec(pathname);
  if (match) {
    const locale = match[1] ? "id" : "en";
    const slug = match[2];
    if (projectDetailPath(slug, locale)) return { page: "project", locale, slug };
  }
  return { page: "not-found", locale: "en" };
}

export function equivalentLocalePath(route: AppRoute, locale: Locale): string | null {
  if (route.page === "not-found") return null;
  return route.page === "home" ? homePath(locale) : projectDetailPath(route.slug, locale);
}
