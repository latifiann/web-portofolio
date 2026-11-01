import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";
import { siteStringKeys } from "../../src/types/site.ts";
import type { SiteContent, SiteStrings, SiteMetadataContent } from "../../src/types/site.ts";
import type { LoadResult } from "./types.ts";

const stringsSchema = z.record(z.enum(siteStringKeys), z.string().trim().min(1));
const placeholders = {
  exploreProjects: ["count"],
  projectCount: ["count"],
  pageIndicator: ["page", "total"],
  viewLink: ["label"],
};

function readLocale(root: string, locale: "en" | "id"): SiteStrings {
  const source = join(root, `${locale}.yaml`);
  const schema = z.strictObject({
    schemaVersion: z.literal(1),
    locale: z.literal(locale),
    strings: stringsSchema,
  });
  const result = schema.parse(parse(readFileSync(source, "utf8")));
  for (const [key, value] of Object.entries(result.strings)) {
    const expected = Object.entries(placeholders).find(([name]) => name === key)?.[1] ?? [];
    const actual = [...value.matchAll(/\{([^{}]+)\}/g)].map((match) => match[1]);
    if (actual.sort().join(",") !== [...expected].sort().join(",")) {
      throw new Error(`${source}: strings.${key}: invalid placeholders`);
    }
  }
  return result.strings;
}

export function loadSite(root: string): LoadResult<SiteContent | null> {
  const errors: string[] = [];
  function load(locale: "en" | "id") {
    try {
      return readLocale(root, locale);
    } catch (error) {
      errors.push(`${join(root, `${locale}.yaml`)}: ${error instanceof Error ? error.message : String(error)}`);
      return null;
    }
  }
  const en = load("en");
  const id = load("id");
  return { value: en && id ? { en, id } : null, errors };
}

export function loadSiteMetadata(root: string): LoadResult<SiteMetadataContent | null> {
  const localized = z.strictObject({
    title: z.string().trim().min(1).max(80),
    description: z.string().trim().min(1).max(160),
  });
  try {
    const { canonicalOrigin, home } = z.strictObject({
      schemaVersion: z.literal(1),
      canonicalOrigin: z.literal("https://latifian.dev"),
      home: z.strictObject({ en: localized, id: localized }),
    }).parse(parse(readFileSync(join(root, "site.yaml"), "utf8")));
    return { value: { canonicalOrigin, home }, errors: [] };
  } catch (error) {
    return { value: null, errors: [`${join(root, "site.yaml")}: ${error instanceof Error ? error.message : String(error)}`] };
  }
}
