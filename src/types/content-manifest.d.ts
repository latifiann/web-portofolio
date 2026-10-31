// Declared here so type-checking does not require both generated manifests to exist.
declare module "@content-manifest" {
  import type { ExperienceEntryDetail, ProjectDetail } from "./content";
  import type { SiteContent, SiteMetadataContent } from "./site";

  export const site: SiteContent;
  export const siteMetadata: SiteMetadataContent;

  export const projects: ProjectDetail[];

  export const experience: ExperienceEntryDetail[];

  export function findProject(slug: string): ProjectDetail | undefined;
}
