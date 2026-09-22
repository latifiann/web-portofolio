import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import ttf2woff2 from "ttf2woff2";

const fonts = [
  {
    source: "content/site/fonts/geist/source/Geist-VariableFont_wght.ttf",
    output: "public/generated/fonts/geist/geist-regular.woff2",
  },
  {
    source: "content/site/fonts/geist/source/Geist-VariableFont_wght.ttf",
    output: "public/generated/fonts/geist/geist-semibold.woff2",
  },
  {
    source: "content/site/fonts/instrument-serif/source/InstrumentSerif-Italic.ttf",
    output:
      "public/generated/fonts/instrument-serif/instrument-serif-italic.woff2",
  },
  {
    source:
      "content/site/fonts/jetbrains-mono/source/JetBrainsMono-VariableFont_wght.ttf",
    output: "public/generated/fonts/jetbrains-mono/jetbrains-mono-medium.woff2",
  },
];

for (const font of fonts) {
  const outputPath = resolve(font.output);
  const source = await readFile(resolve(font.source));
  const output = Buffer.from(ttf2woff2(source));

  if (output.subarray(0, 4).toString() !== "wOF2") {
    throw new Error(`Font conversion failed for ${font.source}`);
  }

  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, output);
}
