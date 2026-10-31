import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// Keyed by Vite command, not mode: `vite build --mode development` must still
// resolve production records.
const manifestFiles = {
  serve: "src/generated/content-manifest.development.ts",
  build: "src/generated/content-manifest.production.ts",
} as const;

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@content-manifest": fileURLToPath(
        new URL(manifestFiles[command], import.meta.url),
      ),
    },
  },
  plugins: [react(), tailwindcss()],
}));
