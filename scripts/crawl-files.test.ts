import { strict as assert } from "node:assert";
import { test } from "node:test";
import { createRobots, createSitemap, validateCrawlFiles } from "./crawl-files.ts";

const origin = "https://latifian.dev";
const paths = ["/", "/id/"];
const sitemap = createSitemap(origin, paths);
const robots = createRobots(origin);

test("crawl files include exactly the approved public routes", () => {
  assert.equal(sitemap, '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://latifian.dev/</loc></url>\n  <url><loc>https://latifian.dev/id/</loc></url>\n</urlset>\n');
  assert.equal(robots, "User-agent: *\nAllow: /\n\nSitemap: https://latifian.dev/sitemap.xml\n");
  assert.deepEqual(validateCrawlFiles(origin, paths, sitemap, robots), []);
});

test("crawl validator rejects missing, draft, duplicate, and foreign URLs", () => {
  for (const invalid of [
    null,
    createSitemap(origin, ["/"]),
    createSitemap(origin, [...paths, "/projects/draft/"]),
    createSitemap(origin, [...paths, "/"]),
    createSitemap("https://example.com", paths),
  ]) {
    assert.ok(validateCrawlFiles(origin, paths, invalid, robots).length > 0);
  }
});

test("crawl validator rejects missing or blocking robots policy", () => {
  assert.ok(validateCrawlFiles(origin, paths, sitemap, null).length > 0);
  assert.ok(validateCrawlFiles(origin, paths, sitemap, `${robots}Disallow: /\n`).length > 0);
  assert.ok(validateCrawlFiles(origin, paths, sitemap, robots.replace(origin, "https://example.com")).length > 0);
});
