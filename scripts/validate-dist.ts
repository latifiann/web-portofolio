import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import type { Locale } from "../src/types/content.ts";
import { loadSiteMetadata } from "./content/site.ts";
import { validateCrawlFiles } from "./crawl-files.ts";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientRoot = join(repositoryRoot, "dist");
const routeManifestPath = join(repositoryRoot, "dist-ssr", "routes.json");

interface StaticRoute {
  path: string;
  lang: Locale;
}

const problems: string[] = [];

function fail(message: string): void {
  problems.push(message);
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

function readRoutes(): StaticRoute[] {
  if (!existsSync(routeManifestPath)) {
    throw new Error(`Route manifest is missing: ${routeManifestPath}`);
  }
  const parsed: unknown = JSON.parse(readFileSync(routeManifestPath, "utf8"));
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Route manifest contains no routes");
  }
  const routes = parsed.filter(isStaticRoute);
  if (routes.length !== parsed.length) {
    throw new Error("Route manifest contains an invalid route entry");
  }
  return routes;
}

function outputFileFor(routePath: string): string {
  if (routePath === "/") return join(clientRoot, "index.html");
  return join(clientRoot, routePath.slice(1), "index.html");
}

function routePathForFile(filePath: string): string {
  const relativePath = relative(clientRoot, filePath).split(sep).join("/");
  if (relativePath === "index.html") return "/";
  return `/${relativePath.slice(0, -"index.html".length)}`;
}

function listHtmlFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) return listHtmlFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
  });
}

function extractRootMarkup(html: string): string {
  const start = html.indexOf('<div id="root">');
  if (start === -1) return "";
  const end = html.lastIndexOf("</div>");
  if (end <= start) return "";
  return html.slice(start + '<div id="root">'.length, end).trim();
}

function checkAttributes(
  route: StaticRoute,
  html: string,
  routePaths: Set<string>,
  isNotFound = false,
): void {
  if (!html.includes(`<html lang="${route.lang}">`)) {
    fail(`${route.path} does not start with lang="${route.lang}"`);
  }

  const headingCount = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (headingCount !== 1) {
    fail(`${route.path} has ${headingCount} h1 elements instead of one`);
  }

  if (extractRootMarkup(html) === "") {
    fail(`${route.path} has no server-rendered markup inside #root`);
  }

  const rootMarkup = extractRootMarkup(html);
  if (isNotFound) {
    const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
    const titles = [...head.matchAll(/<title\b[^>]*>([^<]+)<\/title>/g)];
    if (titles.length !== 1 || titles[0][1] !== "Page not found — Latifian Iman") {
      fail("404.html requires one recovery title");
    }
    if ((head.match(/name="robots" content="noindex"/g) ?? []).length !== 1) {
      fail("404.html requires one noindex directive");
    }
    if (/rel="(?:canonical|alternate)"|property="og:|name="twitter:/.test(head)) {
      fail("404.html must not contain indexable route or sharing metadata");
    }
    const main = rootMarkup.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
    if (!main.includes('href="/"') || main.includes('href="/id/"')) {
      fail("404.html requires English-only homepage recovery");
    }
  } else {
    checkMetadata(route, html, routePaths);
  }
  if (rootMarkup.includes('rel="preload"')) {
    fail(`${route.path} still has inline preload links inside #root`);
  }

  if (html.includes('src="/src/main.tsx"')) {
    fail(`${route.path} still references the development entry script`);
  }

  if (html.includes("dist-ssr")) {
    fail(`${route.path} leaks a reference to the server bundle`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (target.startsWith("#") || (target.startsWith("/") && !target.startsWith("//"))) {
      const url = new URL(target.replaceAll("&amp;", "&"), `https://latifian.dev${route.path}`);
      if (url.hash && routePaths.has(url.pathname)) {
        const destination = outputFileFor(url.pathname);
        if (existsSync(destination)) {
          const fragment = decodeURIComponent(url.hash.slice(1));
          const ids = new Set([...readFileSync(destination, "utf8").matchAll(/\bid="([^"]+)"/g)].map((entry) => entry[1]));
          if (!ids.has(fragment)) {
            fail(`${route.path} links to a missing fragment: ${target}`);
          }
        }
      }
    }
    if (!target.startsWith("/") || target.startsWith("//")) continue;

    const targetPath = target.split(/[?#]/, 1)[0];
    if (targetPath === "") continue;

    const isRouteLike = targetPath.endsWith("/");
    if (isRouteLike) {
      if (!routePaths.has(targetPath)) {
        fail(`${route.path} links to an ungenerated route: ${targetPath}`);
      }
      continue;
    }

    const filePath = join(clientRoot, targetPath.slice(1));
    if (!existsSync(filePath) || !statSync(filePath).isFile()) {
      fail(`${route.path} references a missing asset: ${targetPath}`);
    }
  }
}

function checkMetadata(route: StaticRoute, html: string, routePaths: Set<string>): void {
  const origin = "https://latifian.dev";
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
  const titles = [...html.matchAll(/<title\b[^>]*>([^<]*)<\/title>/g)];
  if (titles.length !== 1 || !titles[0][1].trim() || titles[0][1] === "personal-portofolio") {
    fail(`${route.path} requires one non-placeholder title`);
  }
  if (extractRootMarkup(html).includes('data-route-metadata="true"')) {
    fail(`${route.path} has route metadata outside head`);
  }
  function attribute(tag: string, name: string): string {
    return new RegExp(`\\b${name}="([^"]*)"`, "i").exec(tag)?.[1] ?? "";
  }
  const tags = [...head.matchAll(/<(?:meta|link)\b[^>]*>/g)].map((match) => match[0]);
  function value(key: string, name = "name"): string {
    const matches = tags.filter((tag) => attribute(tag, name) === key);
    if (matches.length !== 1 || !attribute(matches[0], "content").trim()) {
      fail(`${route.path} requires one non-empty ${key}`);
      return "";
    }
    return attribute(matches[0], "content");
  }
  const description = value("description");
  const canonical = tags.filter((tag) => attribute(tag, "rel") === "canonical");
  if (canonical.length !== 1 || attribute(canonical[0], "href") !== `${origin}${route.path}`) {
    fail(`${route.path} has an invalid canonical`);
  }
  const alternates = tags.filter((tag) => attribute(tag, "rel") === "alternate");
  const languages = new Set<string>();
  for (const alternate of alternates) {
    const language = attribute(alternate, "hrefLang");
    const href = attribute(alternate, "href");
    if (languages.has(language) || !["en", "id", "x-default"].includes(language)) {
      fail(`${route.path} has duplicate or invalid hreflang`);
    }
    languages.add(language);
    let url: URL;
    try { url = new URL(href); } catch { fail(`${route.path} has invalid alternate URL`); continue; }
    if (url.origin !== origin || url.search || url.hash || !routePaths.has(url.pathname)) {
      fail(`${route.path} alternate points outside eligible routes: ${href}`);
      continue;
    }
    const destination = outputFileFor(url.pathname);
    if (!existsSync(destination)) { fail(`${route.path} alternate has missing HTML`); continue; }
    const other = readFileSync(destination, "utf8");
    if (language !== "x-default" && (!other.includes(`<html lang="${language}">`) ||
        !other.includes(`hrefLang="${route.lang}" href="${origin}${route.path}"`))) {
      fail(`${route.path} alternate is not locale-correct and reciprocal`);
    }
    if (language === "x-default" && !other.includes('<html lang="en">')) {
      fail(`${route.path} x-default must resolve to English`);
    }
  }
  if (!["en", "id", "x-default"].every((language) => languages.has(language))) {
    fail(`${route.path} is missing bilingual alternates or x-default`);
  }
  const ogTitle = value("og:title", "property");
  if (ogTitle !== titles[0]?.[1] || value("twitter:title") !== ogTitle ||
      value("og:description", "property") !== description || value("twitter:description") !== description) {
    fail(`${route.path} has inconsistent sharing copy`);
  }
  if (value("og:url", "property") !== `${origin}${route.path}` ||
      value("og:type", "property") !== "website" ||
      value("og:locale", "property") !== (route.lang === "id" ? "id_ID" : "en_US") ||
      value("og:locale:alternate", "property") !== (route.lang === "id" ? "en_US" : "id_ID")) {
    fail(`${route.path} has invalid Open Graph identity`);
  }
  if (value("twitter:card") !== "summary_large_image") fail(`${route.path} has invalid Twitter card`);
  const image = value("og:image", "property");
  const alt = value("og:image:alt", "property");
  if (value("twitter:image") !== image || value("twitter:image:alt") !== alt) {
    fail(`${route.path} has inconsistent sharing image`);
  }
  try {
    const url = new URL(image);
    const file = join(clientRoot, url.pathname.slice(1));
    if (url.origin !== origin || url.search || url.hash || !existsSync(file) || !statSync(file).isFile()) {
      fail(`${route.path} has a missing or non-canonical sharing image`);
    }
  } catch { fail(`${route.path} sharing image must be absolute`); }
}

function main(): void {
  if (!existsSync(clientRoot)) {
    throw new Error("dist/ does not exist. Run the client build first.");
  }

  const routes = readRoutes();
  const routePaths = new Set(routes.map((route) => route.path));
  const site = loadSiteMetadata(join(repositoryRoot, "content/site"));
  if (!site.value) throw new Error(site.errors.join("\n"));
  const readOptional = (name: string): string | null => {
    const file = join(clientRoot, name);
    return existsSync(file) && statSync(file).isFile() ? readFileSync(file, "utf8") : null;
  };
  for (const problem of validateCrawlFiles(site.value.canonicalOrigin, routes.map((route) => route.path), readOptional("sitemap.xml"), readOptional("robots.txt"))) {
    fail(problem);
  }

  if (routePaths.size !== routes.length) {
    fail("Route manifest contains duplicate paths");
  }

  for (const route of routes) {
    const filePath = outputFileFor(route.path);
    if (!existsSync(filePath)) {
      fail(`Missing static output for ${route.path}`);
      continue;
    }
    checkAttributes(route, readFileSync(filePath, "utf8"), routePaths);
  }

  const notFoundFile = join(clientRoot, "404.html");
  if (!existsSync(notFoundFile)) {
    fail("Missing static 404.html");
  } else {
    checkAttributes({ path: "/404.html", lang: "en" }, readFileSync(notFoundFile, "utf8"), routePaths, true);
  }

  const generatedFiles = new Set(
    listHtmlFiles(clientRoot)
      .filter((filePath) => filePath !== notFoundFile)
      .map((filePath) => routePathForFile(filePath)),
  );
  for (const generatedPath of generatedFiles) {
    if (!routePaths.has(generatedPath)) {
      fail(`dist/ contains an unexpected HTML route: ${generatedPath}`);
    }
  }

  if (problems.length > 0) {
    console.error(`Static output validation failed (${problems.length} problem(s)):`);
    for (const problem of problems) console.error(`- ${problem}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Static output valid: ${routes.length} route(s), assets resolved, no draft routes at dist/.`,
  );
}

main();
