import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { Locale } from "../src/types/content.ts";
import { loadSiteMetadata } from "./content/site.ts";
import { createRobots, createSitemap } from "./crawl-files.ts";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = join(repositoryRoot, "dist");
const shellPath = join(clientRoot, "index.html");
const serverOutputRoot = join(repositoryRoot, "dist-ssr");
const serverBundlePath = join(serverOutputRoot, "entry-server.js");
const routeManifestPath = join(serverOutputRoot, "routes.json");
const shellLanguage = '<html lang="en">';
const shellRoot = '<div id="root"></div>';
const shellHeadClose = "</head>";
const preloadLinkPattern = /<link\b[^>]*\brel="preload"[^>]*\/>/g;
const metadataPattern = /<title\b[^>]*data-route-metadata="true"[^>]*>[\s\S]*?<\/title>|<(?:meta|link)\b[^>]*data-route-metadata="true"[^>]*\/>/g;

interface StaticRoute {
  path: string;
  lang: Locale;
}

interface ServerModule {
  listRoutes: () => StaticRoute[];
  render: (pathname: string) => string;
}

function isServerModule(value: unknown): value is ServerModule {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.listRoutes === "function" &&
    typeof record.render === "function"
  );
}

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "id";
}

function isStaticRoute(value: unknown): value is StaticRoute {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.path === "string" &&
    record.path.startsWith("/") &&
    record.path.endsWith("/") &&
    !record.path.includes("..") &&
    isLocale(record.lang)
  );
}

function readRoutes(server: ServerModule): StaticRoute[] {
  const routes: unknown = server.listRoutes();
  if (!Array.isArray(routes) || routes.length === 0) {
    throw new Error("Server entry returned no static routes");
  }
  return routes.map((route) => {
    if (!isStaticRoute(route)) {
      throw new Error(`Server entry returned an invalid route: ${String(route)}`);
    }
    return route;
  });
}

function outputFileFor(routePath: string): string {
  if (routePath === "/") return shellPath;
  return join(clientRoot, routePath.slice(1), "index.html");
}

function replaceOnce(html: string, search: string, replacement: string): string {
  const firstIndex = html.indexOf(search);
  if (firstIndex === -1) {
    throw new Error(`Static shell is missing required markup: ${search}`);
  }
  if (html.indexOf(search, firstIndex + search.length) !== -1) {
    throw new Error(`Static shell contains duplicate markup: ${search}`);
  }
  return html.replace(search, replacement);
}

async function main(): Promise<void> {
  const loaded: unknown = await import(pathToFileURL(serverBundlePath).href);
  if (!isServerModule(loaded)) {
    throw new Error(
      `Server bundle at ${serverBundlePath} does not export listRoutes() and render()`,
    );
  }

  const routes = readRoutes(loaded);
  const site = loadSiteMetadata(join(repositoryRoot, "content/site"));
  if (!site.value) throw new Error(site.errors.join("\n"));
  const shell = readFileSync(shellPath, "utf8").replace(/<title>[^<]*<\/title>/, "");

  if (!shell.includes(shellRoot)) {
    throw new Error(
      "dist/index.html already contains generated markup. Run the client build before static generation.",
    );
  }

  const outputs = [
    ...routes.map((route) => ({ ...route, outputFile: outputFileFor(route.path) })),
    { path: "/404.html", lang: "en", outputFile: join(clientRoot, "404.html") },
  ];

  for (const route of outputs) {
    const markup = loaded.render(route.path);
    if (markup.trim() === "") {
      throw new Error(`Server render returned empty markup for ${route.path}`);
    }

    // renderToString writes resource preloads inline. Hydration looks them up by
    // href, so move them into the document head where they belong.
    const preloadLinks = markup.match(preloadLinkPattern) ?? [];
    // React owns these tags after hydration. Static output needs them in head too.
    const metadataTags = markup.match(metadataPattern) ?? [];
    if (metadataTags.length === 0) throw new Error(`Missing metadata for ${route.path}`);
    const rootMarkup = markup.replace(preloadLinkPattern, "").replace(metadataPattern, "");

    const html = replaceOnce(
      replaceOnce(
        replaceOnce(
          shell,
          shellLanguage,
          `<html lang="${route.lang}">`,
        ),
        shellHeadClose,
        `${preloadLinks.join("")}${metadataTags.join("")}${shellHeadClose}`,
      ),
      shellRoot,
      `<div id="root">${rootMarkup}</div>`,
    );
    const outputFile = route.outputFile;

    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, html, "utf8");
  }

  writeFileSync(routeManifestPath, `${JSON.stringify(routes, null, 2)}\n`, "utf8");
  writeFileSync(join(clientRoot, "sitemap.xml"), createSitemap(site.value.canonicalOrigin, routes.map((route) => route.path)), "utf8");
  writeFileSync(join(clientRoot, "robots.txt"), createRobots(site.value.canonicalOrigin), "utf8");

  console.log(
    `Static HTML written: ${routes.length} indexable route(s) and 404.html at dist/ (${routes
      .map((route) => route.path)
      .join(", ")}).`,
  );
}

await main();
