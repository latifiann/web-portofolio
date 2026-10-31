import type { ProjectDetail } from "../../src/types/content.ts";

export type Mode = "development" | "production" | "release";

export interface ParsedProject {
  detail: ProjectDetail;
  heroSourcePath: string;
  publication: "draft" | "published";
}

export interface LoadResult<T> {
  value: T;
  errors: string[];
}
