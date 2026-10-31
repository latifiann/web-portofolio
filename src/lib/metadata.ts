import type { Locale } from "../types/content";
import type { SiteMetadataContent } from "../types/site";

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  locale: Locale;
  alternates: { locale: Locale | "x-default"; url: string }[];
  image: string;
  imageAlt: string;
}

export function resolvePageMetadata(
  site: SiteMetadataContent,
  locale: Locale,
  paths: Record<Locale, string | null>,
  image: string,
  imageAlt: string,
  project?: { title: string; seoDescription: string },
): PageMetadata {
  const path = paths[locale];
  if (!path) throw new Error("Metadata requires a resolvable route");
  const absolute = (value: string) => new URL(value, site.canonicalOrigin).href;
  const alternates: PageMetadata["alternates"] = [];
  for (const language of ["en", "id"] as const) {
    const destination = paths[language];
    if (destination) alternates.push({ locale: language, url: absolute(destination) });
  }
  if (paths.en) alternates.push({ locale: "x-default", url: absolute(paths.en) });
  return {
    title: project ? `Latifian Iman — ${project.title}` : site.home[locale].title,
    description: project ? project.seoDescription : site.home[locale].description,
    canonical: absolute(path), locale, alternates,
    image: absolute(image), imageAlt,
  };
}
