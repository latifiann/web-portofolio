import { findProject } from "../generated/content-manifest";

export type AppRoute =
  | { page: "home" }
  | { page: "project"; slug: string };

const projectPathPattern = /^\/projects\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/;

/**
 * Case-study destinations exist only while the development-only route resolver
 * is active. Links to a project detail page must be gated on this check so the
 * production artifact never points at a route it cannot serve.
 */
export function canResolveProjectDetail(): boolean {
  return import.meta.env.DEV;
}

export function projectDetailPath(slug: string): string | null {
  return canResolveProjectDetail() ? `/projects/${slug}/` : null;
}

/**
 * The curated project index is approved future scope and has no route yet, so
 * navigational affordances that depend on it stay hidden instead of pointing at
 * a reserved but unreachable path.
 */
export function projectIndexPath(): string | null {
  return null;
}

/**
 * Local preview only. Project routes are unreachable until the routing and
 * static-generation phase lands, and production builds always render the
 * homepage so draft content cannot leak into the production artifact.
 */
export function resolveLocalRoute(pathname: string): AppRoute {
  if (!canResolveProjectDetail()) return { page: "home" };

  const match = projectPathPattern.exec(pathname);
  if (!match) return { page: "home" };

  const project = findProject(match[1]);
  if (!project) return { page: "home" };

  return { page: "project", slug: project.slug };
}
