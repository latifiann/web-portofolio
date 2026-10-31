// Declared here so type-checking does not require both generated manifests to exist.
declare module "@content-manifest" {
  import type { ExperienceEntryDetail, ProjectDetail } from "./content";

  export const projects: ProjectDetail[];

  export const experience: ExperienceEntryDetail[];

  export function findProject(slug: string): ProjectDetail | undefined;
}
