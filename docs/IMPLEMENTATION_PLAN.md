---
product: latifian.dev
document: implementation-plan
version: 1.9.1
status: canonical
last_updated: 2026-09-21
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

Status: completed

Deliverables:

- retain React, TypeScript, Vite, npm, and committed lockfile;
- remove Vite starter screen and assets when first real UI replaces them;
- update `README.md` only when setup or commands become real;
- keep this workspace separate from live repository.

Checks: `npm run lint` and `npm run build`.

## Phase 1: Styling Foundation

Status: completed

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

Status: completed

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

Status: completed

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

Status: completed

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

Status: completed

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

## Phase 6: Screenshot-aligned English Homepage Vertical Slice

Status: in progress

Deliverables:

- Hero, engineering statement, selected work, experience, capabilities, technology strip, contact, and footer;
- approved English copy from `CONTENT.md`;
- local typed data until structured content phase;
- approved portrait only after media import; no invented media.
- pixel-level homepage fidelity against approved Stitch references at desktop `1280px` and mobile `390px` after real fonts and media are available;
- preserve approved content, accessibility, localization, and media boundaries when they require intentional reference deviations.

### Phase 6A: Visual Reference Contract

Status: completed

Deliverables:

- record homepage-only Stitch reference screens and desktop/mobile fidelity viewports in canonical documentation;
- define screenshot content and media as presentation-only, never production approval;
- define v1 theme-preview icon button with a non-blocking unavailable-feature toast;
- create source folders for reference captures, portrait, fonts, project media, and resume asset.

### Phase 6B: Header and Hero Fidelity

Status: in progress

Deliverables:

- three-zone desktop header: language pill, centered navigation control, theme-preview and approved secondary contact action;
- seven-item centered navigation (`Home`, `About`, `Projects`, `Experience`, `Capabilities`, `Technology`, `Contact`) shown horizontally from `>= 1024px` and as a mobile dropdown below it;
- active item follows the in-view section (hero → `Home`, `#about` → `About`, `#projects` → `Projects`, `#experience` → `Experience`, `#skills` → `Capabilities`, `#technology` → `Technology`, `#contact`/footer → `Contact`), renders exactly one outline icon as local inline SVG, and keeps readable inactive-text contrast;
- accessible theme-preview toast without theme change or persistence;
- overlapping desktop hero and controlled mobile hero stack matching approved composition, with an asymmetric left rail (availability + `Building across / Mobile · Frontend · APIs` focus line) and right rail (supporting statement + `View resume` secondary action) sharing a symmetric grid anchor around the portrait;
- render approved portrait with intrinsic dimensions and responsive geometry;
- `View resume` opens the PDF asset in a new tab; hero motion is limited to hover, active, and focus states during Phase 6, with entrance and scroll-reveal animations deferred to the final visual pass.

Acceptance criteria:

- reference structure is close at `1280px` and `390px`;
- one meaningful `h1` and complete first viewport communicate name, role, specialization context, and next actions;
- portrait reserves its approved intrinsic geometry and does not obstruct hero content;
- exactly one navigation item is active at any scroll position, with accessible `aria-current` and visible active icon.

### Phase 6C: Engineering Statement and Selected Work Fidelity

Status: in progress

Deliverables:

- three badges on each side of the desktop statement, with responsive logical reading order;
- media-first selected-work cards retaining exactly FMS-CREATE, ReMi Mobile, and Semina;
- compact reference-aligned card hierarchy without generated Stitch content.

### Phase 6D: Experience and Capabilities Fidelity

Status: in progress

Deliverables:

- desktop horizontal experience rail with vertical tablet/mobile flow;
- two approved internships, education, and evidence density limits preserved;
- two-by-three desktop capability grid using one outline icon family.

### Phase 6E: Technology, Contact, and Footer Fidelity

Status: in progress

Deliverables:

- thin technology rail with clear mobile overflow affordance;
- centered pale-blue contact band and compact footer;
- full homepage composition ready for real-media fidelity work.

Acceptance criteria:

- the hero region contains one meaningful `h1`; the complete first viewport communicates name, role, specialization context, and next actions;
- hero CTA targets contact;
- content remains meaningful when image fails;
- phase cannot claim final pixel-level completion while approved portrait, project media, and canonical fonts are absent.
- homepage is local-only and non-releaseable.

Manual check:

1. Run `npm run dev`.
2. Open `/` at `360`, `390`, `768`, `1024`, `1280`, and `1440px`.
3. Check reading order, CTA targets, reserved portrait region or approved portrait overlap, grid, timeline, and contact links.
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
- portrait, resume, licensed TTF source fonts, generated WOFF2 files, licenses, alt text, captions, and social images;
- final side-by-side fidelity pass with approved desktop and mobile Stitch reference captures;
- responsive AVIF/WebP generation;
- qualified Semina media with approved caption, alternative text, BuildWithAngga attribution, and backend-only framing.

Publication requires complete bilingual content. FMS and ReMi keep existing qualifications. Semina keeps its approved qualified media caption, BuildWithAngga attribution, and backend-only boundary.

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

`docs/QA.md` will grow from successful manual checks. Browser automation, Playwright, axe, automated screenshot baselines, performance measurement, host adapter, deploy, and cutover are deferred until explicitly scheduled. Owner-run side-by-side comparison with approved Stitch captures is a required manual final-fidelity gate.

Public v1 remains blocked until bilingual content and media exist for all three projects, output has eight indexable routes plus non-indexable `404.html`, no private or prohibited content enters `dist/`, release checks are recorded, and hosting plus history-preserving cutover are approved.

## Current Next Unit

Phase 6 manual reference-fidelity review: compare the rebuilt homepage against approved Stitch desktop and mobile captures, then record intentional content, accessibility, and media deviations.
