---
product: latifian.dev
document: implementation-plan
version: 1.0.0
status: canonical
last_updated: 2026-09-20
owner: Latifian Iman
testing_mode: manual-first
---

# Latifian.dev Implementation Plan

This plan sequences small, production-relevant learning units. It does not authorize public release before complete bilingual content and release gates in `ARCHITECTURE.md` are met.

`docs/QA.md` is deferred. Latifian runs manual browser checks after every UI unit. Playwright, MCP browser tooling, and automated browser accessibility checks are out of current learning scope.

## Working Loop

1. Agent states objective, allowed files, concepts, and acceptance criteria.
2. Latifian writes first attempt.
3. Agent reviews correctness and proposes smallest fix.
4. Agent runs applicable static checks.
5. Latifian completes manual browser checklist and reports result.
6. Repeatable checks become input for future `docs/QA.md`.

Foundation, configuration, build scripts, content schemas, and explicitly requested fixes may be implemented directly.

## Phase 0: Workspace Baseline

Status: next

Deliverables:

- retain React, TypeScript, Vite, npm, and committed lockfile;
- remove Vite starter screen and assets when first real UI replaces them;
- update `README.md` only when setup or commands become real;
- keep this workspace separate from live repository.

Checks: `npm run lint` and `npm run build`.

## Phase 1: Styling Foundation

Status: pending

Deliverables:

- install Tailwind through supported Vite path when first consumed;
- create `src/styles/tokens.css`, `fonts.css`, and `globals.css` only when used;
- implement canonical CSS custom-property tokens;
- add reset, fallback type stacks, skip-link style, focus-visible style, and reduced-motion baseline;
- use system fallback fonts until licensed WOFF2 files and notices exist;
- remove starter dark-mode behavior and conflicting tokens.

Acceptance criteria:

- `DESIGN.md` colors, spacing, radii, and breakpoints have one implementation source;
- no remote font CDN;
- focus is visible;
- reduced motion makes nonessential transitions near-instant.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `360`, `768`, and `1280px`.
3. Press `Tab` until focus ring appears.
4. Enable OS reduced motion and reload.
5. Report focus visibility, dark styling, overflow, and console errors.

## Phase 2: React Unit 1 - Project Metadata

Status: pending

Latifian first attempt:

- create typed local project metadata and `ProjectMetadata`;
- render category, timeline, role, and stack with temporary verified values.

Concepts: TypeScript object types, typed props, array rendering, stable `key`, semantic lists.

Acceptance criteria:

- component receives data through props;
- no `any` or duplicated project facts inside component;
- metadata remains readable on mobile.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `360px` and `1024px`.
3. Confirm every metadata label matches its value.
4. Zoom to `200%`.
5. Report clipping, overlap, or console errors.

## Phase 3: React Unit 2 - Project Card

Status: pending

Latifian first attempt:

- create `ProjectCard` from typed local data;
- show preview, category, timeline, title, summary, role, stack, and one case-study link;
- use FMS-CREATE, ReMi Mobile, and Semina only.

Concepts: composition, typed props, link versus button semantics, image alt and dimensions.

Acceptance criteria:

- no nested interactive elements;
- content remains understandable without image;
- source order stays FMS-CREATE, ReMi Mobile, Semina;
- no private repository URL or prohibited asset appears.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `360px` and `1024px`.
3. Tab through every case-study link and press `Enter`.
4. Hover each card on desktop.
5. Report bad link, missing focus, crop issue, or overflow.

## Phase 4: React Unit 3 - Selected Work

Status: pending

Latifian first attempt:

- create `SelectedWorkSection` which maps project data into cards;
- render approved English introduction;
- create one-, two-, and three-column responsive grid.

Concepts: parent-child composition, list rendering, data-driven order, responsive utility styling.

Acceptance criteria:

- one column below `768px`, two columns at `768-1023px`, three columns at `1024px` and above;
- source and visual order match;
- no horizontal scrolling.

Manual check:

1. Run `npm run dev`.
2. Open `/#projects` at `360`, `768`, and `1024px`.
3. Confirm one, two, then three columns.
4. Tab through links in visual order.
5. Report overflow, unequal hierarchy, or order mismatch.

## Phase 5: Semantic Shell and Navigation

Status: pending

Deliverables:

- `header`, `nav`, `main`, `footer`, page container, section wrapper, and skip link;
- desktop navigation: Home, About, Projects, Contact;
- mobile dropdown with `aria-expanded`, `Escape`, outside click, route or anchor close, and focus return;
- anchors: `#about`, `#projects`, `#experience`, `#skills`, `#contact`.

Acceptance criteria:

- links navigate; buttons only control menu state;
- DOM reading order remains meaningful without CSS;
- mobile menu works without hover;
- targets meet `44 x 44px` where practical.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `390px` and `1280px`.
3. Use `Tab`, `Shift+Tab`, `Enter`, and `Escape` only.
4. On mobile, open menu, click outside, select link, and confirm focus returns to trigger.
5. Report focus trap, hidden focus, anchor obstruction, or console errors.

## Phase 6: English Homepage Vertical Slice

Status: pending

Deliverables:

- Hero, engineering statement, selected work, experience, capabilities, technology strip, contact, and footer;
- approved English copy from `CONTENT.md`;
- local typed data until structured content phase;
- approved portrait only after media import; no invented media.

Acceptance criteria:

- one `h1` communicates name, role, specialization, and next action;
- hero CTA targets selected work and contact;
- content remains meaningful when image fails;
- homepage is local-only and non-releaseable.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `360`, `390`, `768`, `1024`, `1280`, and `1440px`.
3. Check reading order, CTA targets, portrait overlap, grid, timeline, and contact links.
4. Zoom to `200%` and use keyboard navigation.
5. Report clipping, overlap, overflow, unreadable text, broken links, and console errors.

## Phase 7: Structured Content and Validation

Status: pending

Deliverables:

- add `yaml`, `gray-matter`, `zod`, and `tsx` only when scripts consume them;
- create schemas and source files for site, locale strings, experience, capabilities, and projects;
- add deterministic content-manifest generator;
- distinguish `draft` from `published`, facts from localized prose;
- add focused unit tests for schema refinements, sorting, and locale completeness.

Acceptance criteria:

- development accepts incomplete English draft;
- production rejects incomplete published locale content;
- production manifest excludes drafts, private URLs, filesystem paths, and internal notes;
- public-v1 validation enforces exact project set and order.

Checks: `npm run content:validate`, `npm run test`, `npm run lint`, `npm run typecheck`, and `npm run build` after each script exists.

## Phase 8: ReMi Case-study Vertical Slice

Status: pending

Deliverables:

- reusable project page using ReMi as local draft;
- `ReMi Mobile` card label and `ReMi - Remind Me` case-study heading;
- approved contribution and team-attribution boundary;
- cross-deliverable caption when qualifying image is used.

Acceptance criteria:

- private repository link omitted;
- Google Play publication and awards remain team claims;
- pending facts remain absent;
- direct route has logical heading hierarchy.

Manual check:

1. Run `npm run dev`.
2. Open local ReMi route.
3. Read title, role, lifecycle, caption, and links.
4. Tab through page and zoom to `200%`.
5. Report wrong attribution, missing heading, clipping, or console errors.

## Phase 9: Localization, Routing, and Static Generation

Status: pending

Deliverables:

- add React Router, locale provider, locale-aware links, browser entry, server entry, and static generator when consumed;
- English routes stay unprefixed; Indonesian routes use `/id/`;
- switch maps equivalent route without browser-locale redirect;
- generated HTML includes primary content and route metadata before hydration.

Acceptance criteria:

- no EN/ID mixture;
- direct route and client navigation resolve same content;
- generated output uses directory-index routes;
- inspect generated HTML after route, metadata, locale, or rendering changes.

Manual check:

1. Run available production build and preview command.
2. Open `/`, `/id/`, and equivalent ReMi routes.
3. Switch language on each page.
4. Reload direct project URL.
5. Report wrong locale, route mapping, blank content, or console errors.

## Phase 10: Complete Public Content and Media

Status: blocked by content dependencies

Needs:

- complete EN/ID narratives for FMS-CREATE, ReMi Mobile, and Semina;
- portrait, resume, WOFF2 files, licenses, alt text, captions, and social images;
- responsive AVIF/WebP generation;
- original Semina API media replacing prohibited `semina.webp`.

Publication requires complete bilingual content. FMS and ReMi keep existing qualifications. Semina keeps BuildWithAngga attribution and backend-only boundary.

## Phase 11: Metadata and Output Validation

Status: pending

Deliverables:

- per-route title, description, canonical, alternate-language links, Open Graph, Twitter metadata, sitemap, robots, and truthful structured data;
- `404.html` with recovery links and `noindex`;
- output validator for exact eight indexable routes, assets, metadata, and accidental private content.

Checks:

- run content validation, lint, typecheck, tests, production build, and output validation;
- inspect representative generated HTML manually with file-reading tools;
- provide manual preview checklist.

## Phase 12: Deferred QA and Release

Status: deferred

`docs/QA.md` will grow from successful manual checks. Browser automation, Playwright, axe, screenshot baselines, performance measurement, host adapter, deploy, and cutover are deferred until explicitly scheduled.

Public v1 remains blocked until bilingual content and media exist for all three projects, output has eight indexable routes plus non-indexable `404.html`, no private or prohibited content enters `dist/`, release checks are recorded, and hosting plus history-preserving cutover are approved.

## Current Next Unit

Phase 1: Styling Foundation. Start after user asks for implementation or receives learning-unit objective.
