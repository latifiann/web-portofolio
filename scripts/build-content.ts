import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadExperience } from "./content/experience.ts";
import { renderManifest } from "./content/manifest.ts";
import { loadProjects, selectProjectsForManifest } from "./content/projects.ts";
import type { Mode } from "./content/types.ts";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const projectsRoot = join(repositoryRoot, "content", "projects");
const experienceFile = join(repositoryRoot, "content", "experience.yaml");
const generatedRoot = join(repositoryRoot, "src", "generated");
const developmentManifestPath = join(generatedRoot, "content-manifest.development.ts");
const productionManifestPath = join(generatedRoot, "content-manifest.production.ts");

interface BuildOptions {
  mode: Mode;
  checkOnly: boolean;
}

function manifestPathFor(mode: Mode): string {
  return mode === "development" ? developmentManifestPath : productionManifestPath;
}

function readOptions(argv: string[]): BuildOptions {
  const flags = new Set(argv.slice(2));
  const isRelease = flags.has("--release");
  const isProduction = flags.has("--production") || isRelease;
  return {
    mode: isRelease ? "release" : isProduction ? "production" : "development",
    checkOnly: flags.has("--check"),
  };
}

function main(): void {
  const options = readOptions(process.argv);

  const projectResult = loadProjects(projectsRoot, options.mode);
  const experienceResult = loadExperience(experienceFile, options.mode);

  const errors = [...projectResult.errors, ...experienceResult.errors];

  if (errors.length > 0) {
    console.error(`Content validation failed (${options.mode}):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  const included = selectProjectsForManifest(projectResult.value, options.mode);
  const experience = experienceResult.value;
  const experienceLabel = `${experience.length} experience entr${experience.length === 1 ? "y" : "ies"}`;

  if (options.checkOnly) {
    console.log(
      `Content valid (${options.mode}): ${included.length} project record(s), ${experienceLabel} in manifest.`,
    );
    return;
  }

  const manifestPath = manifestPathFor(options.mode);
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, renderManifest(included, experience, manifestPath), "utf8");
  console.log(
    `Content manifest written (${options.mode}): ${included.length} project record(s), ${experienceLabel} at ${relative(repositoryRoot, manifestPath)}.`,
  );
}

main();
