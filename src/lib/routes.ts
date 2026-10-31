import { findProject } from "@content-manifest";

export type AppRoute =
  | { page: "home" }
  | { page: "project"; slug: string };

const projectPathPattern = /^\/projects\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/;

export function canResolveProjectDetail(): boolean {
  return import.meta.env.DEV;
}

export function projectDetailPath(slug: string): string | null {
  return canResolveProjectDetail() ? `/projects/${slug}/` : null;
}

export function projectIndexPath(): string | null {
  return null;
}

export function resolveLocalRoute(pathname: string): AppRoute {
  if (!canResolveProjectDetail()) return { page: "home" };

  const match = projectPathPattern.exec(pathname);
  if (!match) return { page: "home" };

  const project = findProject(match[1]);
  if (!project) return { page: "home" };

  return { page: "project", slug: project.slug };
}
