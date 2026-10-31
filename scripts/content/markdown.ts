import { parse as parseYaml } from "yaml";
import type { ProjectBlock, ProjectSection } from "../../src/types/content.ts";

export function splitFrontMatter(
  filePath: string,
  source: string,
): { data: unknown; body: string } {
  if (!source.startsWith("---\n")) {
    throw new Error(`${filePath}: front matter must start on the first line with ---`);
  }

  const end = source.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error(`${filePath}: front matter is not closed with ---`);
  }

  return {
    data: parseYaml(source.slice(4, end)),
    body: source.slice(end + 5),
  };
}

function splitRow(line: string): string[] | null {
  const cells: string[] = [];
  let cell = "";
  let sawSeparator = false;

  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    if (char === "\\" && line[index + 1] === "|") {
      cell += "|";
      index += 1;
      continue;
    }
    if (char === "|") {
      cells.push(cell.trim());
      cell = "";
      sawSeparator = true;
      continue;
    }
    cell += char;
  }

  cells.push(cell.trim());
  if (!sawSeparator) return null;
  if (cells[0] === "") cells.shift();
  if (cells.at(-1) === "") cells.pop();
  return cells;
}

function startsTable(lines: string[], index: number): boolean {
  const headerLine = lines[index];
  if (headerLine === undefined) return false;

  const header = splitRow(headerLine.trimEnd());
  if (!header) return false;

  const delimiter = splitRow((lines[index + 1] ?? "").trimEnd());
  if (!delimiter || delimiter.length !== header.length) return false;

  return delimiter.every((cell) => /^:?-{3,}:?$/.test(cell));
}

export function parseBody(filePath: string, body: string): ProjectSection[] {
  if (/<\s*[a-zA-Z!/]/.test(body)) {
    throw new Error(`${filePath}: raw HTML is not allowed in project narratives`);
  }

  const blocks = body.split("\n");
  const sections: ProjectSection[] = [];
  let current: ProjectSection | null = null;
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(" ").trim();
    paragraph = [];
    if (text.length === 0) return;
    if (!current) throw new Error(`${filePath}: body text must start under a "## " heading`);
    const block: ProjectBlock = { type: "paragraph", text };
    current.blocks.push(block);
  };

  for (let index = 0; index < blocks.length; index++) {
    const line = (blocks[index] ?? "").trimEnd();

    if (line.trim().length === 0) {
      flushParagraph();
      continue;
    }

    if (startsTable(blocks, index)) {
      throw new Error(
        `${filePath}: body line ${index + 1}: Markdown tables are not supported; use paragraphs or "- " lists`,
      );
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      current = { heading: line.slice(3).trim(), blocks: [] };
      sections.push(current);
      continue;
    }

    if (line.startsWith("#") || line.startsWith(">") || line.startsWith("```")) {
      throw new Error(
        `${filePath}: only "## " headings, paragraphs, and "- " lists are supported`,
      );
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      if (!current) throw new Error(`${filePath}: list items must start under a "## " heading`);
      const last = current.blocks.at(-1);
      const item = line.slice(2).trim();
      if (item.length === 0) throw new Error(`${filePath}: list item cannot be empty`);
      if (last && last.type === "list") {
        last.items.push(item);
      } else {
        current.blocks.push({ type: "list", items: [item] });
      }
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();

  if (sections.length === 0) {
    throw new Error(`${filePath}: narrative needs at least one "## " section`);
  }

  for (const section of sections) {
    if (section.blocks.length === 0) {
      throw new Error(`${filePath}: section "${section.heading}" has no content`);
    }
  }

  return sections;
}
