function escapeXml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export function createSitemap(origin: string, paths: string[]): string {
  const entries = paths.map((path) => `  <url><loc>${escapeXml(`${origin}${path}`)}</loc></url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

export function createRobots(origin: string): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}

export function validateCrawlFiles(
  origin: string,
  paths: string[],
  sitemap: string | null,
  robots: string | null,
): string[] {
  const problems: string[] = [];
  if (sitemap !== createSitemap(origin, paths)) {
    problems.push("sitemap.xml missing or does not match the indexable route manifest");
  }
  if (robots !== createRobots(origin)) {
    problems.push("robots.txt missing or does not match the approved crawling policy");
  }
  return problems;
}
