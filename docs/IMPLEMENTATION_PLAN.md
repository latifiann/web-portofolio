---
product: latifian.dev
document: implementation-plan
version: 1.11.20
status: canonical
last_updated: 2026-11-01
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

- three-zone desktop header with full-pill language selector, centered navigation control, theme-preview and approved secondary contact action; the theme button and mobile menu trigger are circles, the header `Get in touch` is a pill, and the primary navigation container and its items are full-pill on desktop and `12px` on mobile and tablet;
- tablet header control sizing (`768–1023px`): the language selector uses a `44px` minimum height, the theme button and menu trigger are `44 × 44px`, and each dropdown item is at least `44px` tall, matching the tablet action targets used elsewhere on the page; mobile keeps its `40px` controls and `40px` dropdown items, and desktop keeps its `56px` controls. Automation measured the tablet controls and dropdown items at `44px` with a `350px` panel that fits a `768px`-tall viewport, the mobile items at `40px`, and the desktop sizes unchanged, with no horizontal overflow;
- seven-item centered navigation (`Home`, `About`, `Projects`, `Experience`, `Capabilities`, `Technology`, `Contact`) shown horizontally from `>= 1024px` and as a mobile dropdown below it;
- active item follows the in-view section (hero → `Home`, `#about` → `About`, `#projects` → `Projects`, `#experience` → `Experience`, `#skills` → `Capabilities`, `#technology` → `Technology`, `#contact`/footer → `Contact`), renders exactly one outline icon as local inline SVG, and keeps readable inactive-text contrast;
- accessible theme-preview toast without theme change or persistence;
- approved desktop hero and controlled mobile hero composition, with an asymmetric left rail (availability badge + `Building across / Mobile · Frontend · APIs` focus line) and right rail (supporting statement + `View resume` secondary action) sharing a symmetric grid anchor around the portrait on desktop (`>=64rem`), while tablet (`768–1023px`) uses the floating-rail overlay composition described below; the availability badge and `View resume` action are full-pill with shared sizing (`44px` height, `10px 16px` padding, `14px/600` text, `8px` gap) and a light neutral shadow, differing only in border role;
- mobile hero composition (`< 768px`) follows its content height without a desktop minimum height or extra flexible space; the greeting and `Software Developer` each stay on one line with viewport-relative sizing inside the content container, the availability badge floats over the portrait's left shoulder and `View resume` floats over the portrait's lower right, both using a shared compact pill size (`28px` visual height, `11px/600` text, `4px 8px` padding, `4px` gap) while `View resume` keeps an invisible `44px` minimum touch target; the focus line and supporting copy stay in flow below the portrait; the mobile hero renders the same single badge and single resume link element used on desktop and duplicates no content;
- the hero no longer renders a `Get in touch` action at any width; contact remains reachable through the header and footer navigation;
- tablet hero bottom spacing (`768–1023px`): retain `padding-bottom: 2.75rem` (`44px`); the 2026-10-26 baseline measured `152px` from the transformed portrait image bounding-box bottom to `#about > div`, correcting the previous `160px` claim without changing visual spacing;
- render approved portrait with intrinsic dimensions and responsive geometry;
- `View resume` opens the PDF asset in a new tab; hero motion is limited to hover, active, and focus states during Phase 6, with entrance and scroll-reveal animations deferred to the final visual pass.

Acceptance criteria:

- reference structure is close at `1280px` and `390px`;
- one meaningful `h1` and complete first viewport communicate name, role, specialization context, and next actions;
- portrait reserves its approved intrinsic geometry and does not obstruct hero content;
- exactly one navigation item is active at any scroll position, with accessible `aria-current` and visible active icon;
- at `320`, `360`, `375`, `390`, and `430px` the greeting and `Software Developer` each render on one line inside the content container with no clipping and no horizontal scroll, the floating availability badge and `View resume` clear the face and the container edges, and the resume link remains keyboard-focusable and opens the PDF;
- automated checks were run on request for the mobile hero (`320`–`430px`) using Playwright and are recorded as automation results, not as the owner's manual visual confirmation;
- tablet hero (`768–1023px`) is a floating-rail composition: on `48–63.9375rem` the availability/focus and supporting/resume rails overlay the portrait's lower torso with the face clear, availability renders on one line, the left rail allows `14rem` (`224px`) so the `Mobile · Frontend · APIs` focus line stays on one line, and the portrait is sized by height with no width cap. The composition is raised `12px` (`translateY(-0.75rem)`, title fixed), which keeps `20px` of clearance between the fixed header bottom and the greeting, while the portrait is pulled up with a negative top margin (`margin-top: calc(var(--space-6) - 4rem)`) and the rails are raised (`translateY(-2.5rem)`), so the portrait head sits just below the `Software Developer` role text with the rails over the torso below the face; the negative margin reduces, but does not fully remove, the reserved space below the portrait. Tablet Hero keeps `padding-bottom: 2.75rem` (`44px`), with the corrected transformed-box gap of `152px` recorded in `DESIGN.md` Section 17. Automation measured `scrollWidth === viewport` at `768`–`1023px`, `20px` header clearance, and the single-line focus rail. The owner subsequently accepted the current visual and responsive state before requesting the refactor; this is distinct from the automated baseline below.

### Phase 6C: Engineering Statement and Selected Work Fidelity

Status: in progress

Deliverables:

- three full-pill capability badges on each side of the desktop statement; the two badge lists are hidden below `64rem` (`<1024px`) so the mobile and tablet sections keep only the eyebrow and the statement, while desktop (`>=1024px`) keeps three badges per side;
- media-first selected-work cards retaining exactly FMS-CREATE, ReMi Mobile, and Semina;
- approved mobile horizontal CSS scroll-snap rail (`<768px`), full-width cards with `20px` snapped insets and an edge-to-edge scroll viewport during gestures, `16px` card gap, thin scrollbar, and a swipe hint above the cards using decorative `PiHandSwipeLeftLight`; `Explore all N projects` stays below the rail. Tablet/desktop keep the two/three-column grids. No carousel dependency, autoplay, duplicated cards, or viewport JavaScript;
- compact preview overlays: a full-pill `32px` type badge and a `32 × 32px` full-round arrow indicator, with full-pill stack badges and overflow count;
- card anatomy with general info only (context label, timeline, title, summary, role, stack badges) plus required media captions;
- whole-card interactive link to each detail route; `Explore all projects` action linking to the approved future `/projects/` index;
- landing selector targets up to six desktop projects, with CSS-only visibility limiting mobile to three and tablet to four; current three-item set renders identically at every width;
- no data invented from the Stitch reference and no dependency added for routing or listing yet.

Acceptance: swipe reaches all three projects in approved order at `320`, `360`, `375`, `390`, and `430px`; snapped cards preserve content insets, only the rail scrolls horizontally, keyboard focus reveals each card, and the project-index action stays outside the rail. These are repeatable checks, not a claim that every width and keyboard interaction has passed automation. Phase 6C remains `in progress`.

### Phase 6D: Experience and Capabilities Fidelity

Status: in progress

Deliverables:

- vertical editorial experience timeline at every width, container-aligned content, integrated entry metadata with a shared role/date row on desktop and tablet (`>=768px`), visible contribution bullets, and education as the final differentiated node;
- short product descriptions in body type replacing the mono context line;
- education entry mirrors the internship structure with an owner-confirmed research and organization summary, including CSRG activities, two software copyright registrations, and HIMIT PENS involvement;
- self-hosted variable WOFF2 per variable font family with a matching `weight` range and `font-synthesis: none`;
- period shows as a compact month-year neutral badge; timeline nodes use filled briefcase and graduation-cap glyphs; Experience body may use the scoped system sans fallback when canonical-sans rasterization defects appear in target browsers;
- two approved internships with evidence density limits preserved;
- icon-free two-by-three desktop capability grid with aligned supporting badges and restrained blue-tinted elevation; a full-width pale-blue section wash fades into adjacent canvas sections;
- mobile Experience presentation (`< 768px`): tightened type scale (role `20px`, organization `16px`, description and bullets `14px` at `1.6` line-height), `44px` timeline gutter, top-aligned nodes, caps anchored at first and last node centers, and a single `View details` / `Hide details` disclosure collapsed by default that stays open on desktop (`>=48rem`) where desktop renders entries fully expanded and hides the toggle. This visual pass is owner-approved; Phase 6D remains `in progress`.

Progressive enhancement: Experience detail content is visible and its inactive toggle hidden in server-rendered markup. React readiness enables mobile collapsing and the toggle without viewport detection; tablet/desktop remain fully expanded. The component no longer requires JavaScript to read server-rendered evidence. The current client-rendered Vite page still requires the planned static-generation pipeline before the entire homepage can work without JavaScript; do not mark that release requirement complete. Unverified education placeholders remain local-only and block publication until replaced or omitted.

### Phase 6E: Technology, Contact, and Footer Fidelity

Status: in progress

Deliverables:

- single left-moving grayscale technology marquee of all 18 local SVG icons with sans labels, a `54s` loop, hover/focus pause, missing-icon fallback, and a static wrapping reduced-motion mode; compact boundary below Capabilities and spacious `64px`/`80px` spacing before Contact;
- centered contact band with a vertical `surface-accent → surface-soft → canvas` wash, a paired `Email me` and `View resume` CTA using the same `ink` background, light text, shadow, and hover, a resume action that opens the PDF in a new tab, and a contact heading that renders on one line only on desktop (`>=64rem`) while wrapping safely on mobile and tablet;
- white footer that continues seamlessly from the contact wash, with a separate icon-only social row (LinkedIn, GitHub, Instagram from `react-icons/fa`, each `44px × 44px` with an accessible name) above the text navigation (`Home`, `About`, `Projects`, `Contact`);
- full homepage composition ready for real-media fidelity work.

Acceptance criteria:

- the hero region contains one meaningful `h1`; the complete first viewport communicates name, role, specialization context, and next actions;
- hero CTA is `View resume`; contact remains reachable through the header and footer navigation;
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

Status: in progress (2026-10-31). All six project narratives and three experience entries have owner-approved bilingual copy; projects remain drafts. UI locale YAML, strict validation, manifest exports, active-locale propagation, and the equivalent-page language switch exist. Shared site facts and capability structures still need canonical sources; capability arrays remain inline. Local tests remain intentionally excluded from git.

Deliverables:

- add `yaml`, `zod`, and `tsx` only when scripts consume them; skip `gray-matter` and a Markdown renderer because the restricted body parser is local and the browser renders typed blocks;
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

Status: in progress (2026-10-27). Composition, content, and a development-only preview route exist, and static checks pass. Owner desktop review is the open gate.

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
- output validator for exact fourteen indexable routes, assets, metadata, and accidental private content.

Checks:

- run content validation, lint, typecheck, tests, production build, and output validation;
- inspect representative generated HTML manually with file-reading tools;
- provide manual preview checklist.

## Phase 12: Deferred QA and Release

Status: deferred

`docs/QA.md` will grow from successful manual checks. Browser automation, Playwright, axe, automated screenshot baselines, performance measurement, host adapter, deploy, and cutover are deferred until explicitly scheduled. Owner-run side-by-side comparison with approved Stitch captures is a required manual final-fidelity gate.

Public v1 remains blocked until bilingual content and media exist for all six projects, output has fourteen indexable routes plus non-indexable `404.html`, no private or prohibited content enters `dist/`, release checks are recorded, and hosting plus history-preserving cutover are approved.

## Styling and Component Refactor Checkpoints

Owner requested staged refactoring after accepting the current visual and responsive state. Preserve that state: no redesign, copy changes, new dependencies, content migration, or release approval. `ARCHITECTURE.md` Sections 10 and 12 remain the architectural owner. Automation below is explicitly requested for this refactor, not a permanent change to manual-first testing.

### Unit 1 — Ownership audit and baseline

Status: complete (2026-10-26). No application source or build configuration changed.

Baseline: local `/` through `playwright-cli`, Chromium `155.0.8059.85`, DPR 1, fonts ready, all images decoded. Viewports: `390×844`, `768×1024`, `820×1180`, `900×1200`, `1023×768`, `1024×768`, `1280×900`. Full-page, Hero, six section screenshots and computed styles/bounding boxes were captured outside the repository. Screenshot normalization pauses animations at time zero without reduced motion, resets local horizontal scroll, and disables smooth scrolling in the browser only. Live motion was tested separately. This local baseline does not certify production/no-JavaScript behavior, Safari, real devices, or complete accessibility compliance.

Ownership map (line ranges refer to the pre-refactor `src/styles/globals.css`, 1266 lines):

| Current rules | Intended owner | Extraction constraint |
|---|---|---|
| Imports/defaults, 1–60 and 67–72 | Global CSS, tokens, fonts | Preserve unlayered defaults in Unit 2 |
| Focus/skip link, 86–108; global reduced motion, 1224–1226 and 1251–1258 | Global accessibility | Preserve global coverage and current important declarations |
| Solid-link color/hit area, 62–65 and 74–84 | `ui/ActionLink.css` | Preserve both fragments and anchor-color dependency |
| Navigation/contact action, 110–172 | `layout/SiteHeader.css` | Preserve mobile and desktop states |
| Hero, 174–630 | `sections/HeroSection.css` | Move as one ordered block; highest risk, extract last |
| About accent, 632–659 | `sections/EngineeringStatementSection.css` | Keep supports and forced-colors fallbacks together |
| Shared spacing, 661–669 | `layout/Section.css` | Also used by native sections; do not depend on mounting `Section` |
| Experience, 671–935 | `sections/ExperienceSection.css` | Preserve readiness/open selectors and breakpoint visibility |
| Capabilities, 937–1017 | `sections/CapabilitiesSection.css` | Must remain after shared spacing at equal cascade priority |
| Technology, 1019–1119, 1228–1249, 1261–1266 | `sections/TechnologyStrip.css` | Include keyframes, reduced motion, forced colors |
| Card indicator, 1121–1137 | `features/projects/ProjectCard.css` | Preserve focus/desktop hover reveal |
| Project rail/wash, 1139–1221 | `sections/SelectedWorkSection.css` | Preserve snap, scrollbar, and mask |
| Contact, footer, containers, badges, metadata | Existing JSX utilities | No dedicated CSS file without remaining custom rules |

Verified dependencies and cleanup candidates:

- `main.tsx` imports `globals.css` once; `tokens.css` imports Tailwind. Custom rules are unlayered and normally beat layered utilities. Use explicit central CSS import order during extraction, not component-import traversal.
- Global `a { color: inherit; }` overrides outline `ActionLink` text utilities: current normal/hover text is `rgb(51, 65, 85)`; hover border still turns blue. Browser-only removal of that rule, with transitions settled, yields normal `rgb(15, 23, 42)` and hover `rgb(37, 99, 235)`. Unit 2 preserves existing behavior; Unit 3 needs approval before changing visible colors. Solid ActionLink, Hero resume, and header contact rely on custom color rules against this reset.
- Hero JSX and CSS both control min-height, flex, justification, margins, and tablet bottom padding. Tablet wrapper margin computes to `-40px`; its `md:-translate-y-4` also applies independent `translate: 0px -16px`. `transform` and `translate` compose; do not mistake them for mutually overriding properties. Preserve actual geometry rather than silently interpreting earlier desktop-only prose as code behavior.
- Global `img { height: auto; }` beats project-preview `h-full`; current images still fit their aspect-ratio wrappers. Layer migration could change this. Hero height separately wins by specificity.
- `.capabilities-section` and `.homepage-section-spacing` have equal specificity. Later Capabilities rules produce bottom padding `8px` mobile / `24px` tablet and desktop, not shared `64px` / `80px`. Import order is observable behavior.
- Mobile Experience CSS overrides JSX role/organization typography to `20px` / `16px`. Ready/open selectors govern disclosure visibility; repeated ready-toggle blocks are consolidation candidates, not evidence of dead CSS.
- About selector repetition intentionally provides progressive enhancement. Marquee mask is `20px` mobile and `48px` from tablet upward; reduced-motion screenshots cannot establish normal fade behavior.

Component review: retain existing containers, UI primitives, project components, and local Experience helpers. Contact extraction serves page composition; Selected Work, Experience, and Capabilities share identical heading markup/classes. Canonical category list calls the heading `SectionHeader`; settle naming in Unit 4 and update the owner if choosing `SectionHeading`. `className` concatenation does not guarantee utility overrides. Keep content arrays unchanged until the content pipeline unit.

Verification:

- All seven widths had `scrollWidth === viewport`; every image loaded; baseline captured no page errors, failed requests, or HTTP errors.
- Tablet portrait bottom `732.15625px`, About content top `884.15625px`: gap `152px`, header clearance `20px`. Corrected historical `160px` and the mistaken claim that descendant boxes do not move with the composition transform in `DESIGN.md`; no visual values changed.
- 25 focused interaction checks passed: menu keyboard open, Escape/focus return, outside close and Experience anchor at `390`, `820`, `1023px`; mobile disclosure expand/collapse; keyboard reach to third project with horizontal rail scroll; desktop detail visibility and card indicator hover/focus; theme-toast appearance/expiry; live marquee movement, hover/focus pause, reduced-motion wrapping and forced-colors fallback.
- `npm run lint` and `npm run build` passed; build includes TypeScript project checks. CSS output: `51.56 kB` raw / `10.30 kB` gzip. This is a size baseline, not a claim that extraction improves performance. Dedicated test/content-validation/typecheck scripts do not exist yet.
- Static generation, bilingual content, and Education placeholder release gates remain open. No commit, push, deploy, or live-repository changes.

### Unit 2 — CSS extraction (no visual change)

Status: complete (2026-10-26). Owner approved staged execution with verification after each checkpoint.

Structure: `src/main.tsx` keeps one import of `src/styles/globals.css`, which becomes the integration entry for explicit, centrally ordered `@import`s. Component stylesheets are imported from that entry, never from TSX, so cascade order cannot depend on component import traversal. Layers, CSS Modules, `@apply`, dependencies, DOM, and TSX stay unchanged in this unit.

Sequencing refinement: every `@import` must precede ordinary rules, so `accessibility-overrides.css` (global reduced-motion and technology fallbacks) can only move out of `globals.css` once no component rules remain inline. Until the final checkpoint it stays inline at the end of the file to keep its current cascade position. Creating the file earlier would place its `mask-image: none` and `animation: none` rules before the Technology rules they must override.

#### Checkpoint A — foundation and small components

Status: complete (2026-10-26).

Files created: `src/styles/base.css` (document and element defaults), `src/styles/accessibility.css` (`:focus-visible`, skip link), `src/components/ui/ActionLink.css` (solid color and 44px `::before` target), `src/components/layout/Section.css` (shared `homepage-section-spacing`). `globals.css` now imports `tokens`, `fonts`, `base`, `ActionLink`, `accessibility`, `Section`, then keeps all remaining component rules inline in their previous order, still before the trailing reduced-motion and forced-colors blocks.

Accepted ordering changes: the button `cursor` default moved from after the solid-link color rule into `base.css`, and shared section spacing now loads before Hero and About instead of after them. Neither pair shares a conflicting property; measured cascade results are unchanged.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and every captured selector box and computed property (`49` selectors, `24` properties, all boxes within `0.01px`);
- all `25` interaction checks passed with identical values: menu panel `322px` mobile and `350px` tablet with `40px`/`44px` items, Escape/outside/anchor behavior, anchor clearance, disclosure, rail keyboard scroll, card indicator, toast, marquee motion/pause, reduced motion, forced colors;
- `12` targeted moved-rule checks passed: smooth scrolling, body typography and `20rem` minimum width, `border-box`, button cursor, image `max-width`, root font, `#root` height, skip-link hidden and focus-visible transform plus outline, mobile `40px` CTA with `44px` target, desktop `44px` CTA, and section spacing `64px`/`80px` with Capabilities `8px`/`24px` bottom padding;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass;
- build CSS unchanged in raw size (`51.56 kB`; gzip `10.31 kB` versus `10.30 kB`). Pixel hashes are not a valid gate here: repeated captures of the same frame differ in the animated header pill and scaled image rasterization, so equivalence evidence is the computed-style and geometry comparison. Screenshots were inspected manually and show no visual change.

#### Checkpoint B — header, about, project card, selected work

Status: complete (2026-10-26).

Files created: `src/components/layout/SiteHeader.css` (navigation states, desktop Contact states), `src/components/sections/EngineeringStatementSection.css` (About accent with `@supports` clip path and local forced-colors fallback), `src/features/projects/ProjectCard.css` (indicator focus-visible and desktop hover/focus visibility), `src/components/sections/SelectedWorkSection.css` (mobile rail, scroll snap, scrollbar, section backdrop and mask). `globals.css` imports them after `Section.css`; Hero, Experience, Capabilities, and Technology rules stay inline in their previous order.

Accepted ordering change: the four groups now load before the still-inline rules instead of interleaved with them. No conflict found: no other unlayered rule targets those elements or the same properties, the Capabilities `padding-bottom` override still follows shared section spacing, and Tailwind utilities remain in a lower layer, so their precedence is unaffected.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and every captured selector box and computed property (`49` selectors, `24` properties, all boxes within `0.01px`);
- all `25` interaction checks passed, with values identical to baseline apart from sub-pixel marquee sampling: menu panel `322px` mobile and `350px` tablet with `40px`/`44px` items, Escape/outside/anchor behavior, anchor clearance, disclosure, rail keyboard scroll, card indicator, toast, marquee motion/pause, reduced motion, forced colors;
- `22` targeted moved-rule checks passed: tablet navigation base/hover, desktop navigation base/hover, `aria-current` normal and hover, desktop Contact normal/hover/active, About gradient clip and forced-colors fallback, card indicator hidden/visible on desktop hover and keyboard focus, always-visible `32px` mobile indicator, mobile rail sizing/gap/snap/scroll and keyboard-accessible horizontal scroll, `3`-column rail at `1024` and `1280`, section containment, and backdrop gradient plus mask;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass;
- CSS raw size unchanged at `51.56 kB`; gzip `10.30 kB`, matching the pre-checkpoint figure; JS unchanged. Pixel hashes remain invalid as a gate for the animated header pill and scaled image rasterization, so equivalence rests on computed styles, geometry, and manual inspection.

Passing hover assertions required waiting out `--motion-base` transitions and selecting non-current navigation links; the earlier failures were test expectations, not site behavior.

#### Checkpoint C — capabilities and technology

Status: complete (2026-10-26).

Files created: `src/components/sections/CapabilitiesSection.css` (section containment, gradient backdrop, responsive grid, card surface, label chips), `src/components/sections/TechnologyStrip.css` (section spacing, marquee mask, track, group, item, icon, hover/focus pause, `technology-marquee-scroll` keyframes, tablet/desktop mask). `globals.css` imports them after `SelectedWorkSection.css`.

Deliberate exception: the Technology rules inside the trailing reduced-motion and forced-colors blocks stay inline in `globals.css`. Moving them into an import would place their `animation: none` and `mask-image: none` ahead of the Technology rules they must override. They move to `accessibility-overrides.css` at Checkpoint E, once no component rule remains inline.

Accepted ordering change: both groups now load before the still-inline Hero and Experience rules. No conflicting unlayered rule targets those elements, `.capabilities-section` still follows `.homepage-section-spacing` so its `8px`/`24px` bottom padding wins, and tablet/desktop section spacing still follows the shared rule.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and every captured selector box and computed property (`49` selectors, `24` properties, all boxes within `0.01px`);
- all `25` interaction checks passed, with values identical to baseline apart from sub-pixel marquee sampling;
- `23` targeted moved-rule checks passed: Capabilities containment, backdrop, one/two/three-column grid, `16px`/`24px` gaps, card box and shadow, `12px` radius, label chips and bottom pinning, `8px`/`24px` bottom padding, no horizontal overflow; Technology `24px` top and `64px`/`80px` bottom spacing, `20px`/`48px` mask edges, `54s linear infinite` track animation, `translateX(0)` to `translateX(-50%)` keyframes, group and item layout, `24px` icons, hover and keyboard pause, reduced motion, and forced colors;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass;
- CSS raw size unchanged at `51.56 kB`; gzip `10.31 kB`; JS unchanged.

Initial moved-rule failures were assertion defects: resolved `height`/`width` values replace `100%`/`max-content`, `inline-flex` blockifies to `flex` inside a flex row, `margin-top: auto` computes to `0px`, CSSOM serializes keyframes as `translateX(0px)`, and `768px` already uses desktop section padding. Geometry checks replaced the static expectations; no site CSS changed.

#### Checkpoint D — experience

Status: complete (2026-10-26).

File created: `src/components/sections/ExperienceSection.css` with the full Experience block: timeline rail and custom properties, entries and nodes, first-entry and Education rail closers, content, period badge, heading and organization rows, contributions with `::marker` color, details disclosure with chevron pseudo-elements and open state, technology chips, plus tablet, desktop, and mobile media queries. `globals.css` imports it after `TechnologyStrip.css`.

Deliberately preserved: the separate `.experience-details--ready .experience-details-toggle` rule, body defaulting to visible before enhancement readiness, `.experience-details--open` behavior, the `44px` pseudo-element touch target, and the mobile-first override order. Duplicate declaration cleanup waits for Unit 3.

Accepted ordering change: Experience now loads before the still-inline Hero rules instead of after them. No conflicting unlayered rule targets Experience elements, and the trailing reduced-motion and forced-colors blocks still come last.

State after D: `globals.css` holds only imports, Hero rules, and the two trailing override blocks.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and every captured selector box and computed property (`49` selectors, `24` properties, all boxes within `0.01px`);
- all `25` interaction checks passed, including the mobile disclosure, with only sub-pixel marquee sampling differing;
- `25` targeted moved-rule checks passed: desktop `40px` node with `72px` indent and `64px` entry gap, `1px` rail at node centre, centred node and rail closers, content width, badge and chip styling, desktop heading split and organization row, contributions grid with primary markers, technology chips, always-visible desktop details with hidden toggle, mobile `32px` node with `0.75rem` rail gap and adjusted closers, mobile typography, collapsed default state, `44px` touch target, `45deg` closed and `225deg` open chevron, click and keyboard open/close with `aria-expanded` sync, visible focus ring, tablet desktop-equivalent layout, and near-instant chevron under reduced motion;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass;
- CSS raw size unchanged at `51.56 kB`; gzip `10.30 kB`; JS unchanged.

Assertion corrections were test-only: percentage `top` resolves to pixels, mobile closer offset is `-29px` from `0.75rem + 1rem + 1px`, a button inside a flex column blockifies to `flex`, and programmatic focus after pointer input does not set `:focus-visible`, so the keyboard ring check re-entered focus with `Shift+Tab` plus `Tab`.

#### Checkpoint E — hero, overrides, and Unit 2 completion

Status: complete (2026-10-26).

Files created: `src/components/sections/HeroSection.css` (information grid, rails, availability badge, focus typography, resume button and arrow including mobile pinned positions and `44px` target, background gradient, portrait sizing and masks, title and role, and all Hero media queries in original order) and `src/styles/accessibility-overrides.css` (global reduced-motion block including the Technology static fallback, then the forced-colors Technology mask removal).

`src/styles/globals.css` is now import-only: tokens, fonts, base, `ActionLink`, accessibility helpers, `Section`, header, About, ProjectCard, Selected Work, Capabilities, Technology, Experience, Hero, then `accessibility-overrides.css` last. `src/main.tsx` still imports `globals.css` once, and no TSX file imports component CSS.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and every captured selector box and computed property (`49` selectors, `24` properties, all boxes within `0.01px`); tablet portrait-to-About gap remains `152px` and desktop `176px`;
- all `25` interaction checks passed with only sub-pixel marquee sampling differing;
- `29` targeted moved-rule checks passed, including boundary probes at `767/768px` and `1023/1024px`: mobile composition and pinned badge/resume positions, `304px` mobile portrait, tablet `44px` section padding with `-40px` wrapper, `-12px` composition, and absolute rail offsets, `640–767px` badge offsets, desktop three-column grid with half-height translate, desktop availability and focus typography, resume hover/active with arrow nudge, `620px` desktop portrait, and reduced-motion plus forced-colors still winning after the imports;
- built CSS is byte-identical to Checkpoint D (`index-Bdcw8PyF.css`, `51.56 kB` raw / `10.30 kB` gzip), which confirms the effective rule order and content did not change; JS unchanged;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass.

Assertion corrections were test-only: `width: 100%` resolves to the padded container width, tablet rail `top` percentages resolve to pixels, the `40rem` badge offsets apply at `640–767px` rather than `820px`, `34ch` and `clamp()` resolve to pixels, and `1`-line-height resolves to the font size.

#### Unit 2 result

All four CSS layers now have named owners: document/accessibility foundations, shared layout, UI primitives, and each section or feature. Complex composition stays in colocated CSS; Tailwind keeps simple composition. `globals.css` owns only import order. `docs/ARCHITECTURE.md` 12.2 and the styles tree now describe this contract.

Automation limits remain: Chromium local dev only, not production static output, Safari, a physical tablet, 200% zoom, or full accessibility certification. Screenshot hashes remain invalid as an equivalence gate.

### Unit 3 — cascade consolidation

Status: complete (2026-10-26). Checkpoints A–G recorded; Unit 4 awaits review. Owner approved option B for link color: adopt the utility colors instead of the inherited default.

Scope: keep approved appearance and behavior, clarify which layer owns each property, and separate behavior-preserving cleanup from visible corrections that need explicit approval. Layer migration stays out of scope unless separately approved.

#### Checkpoint A — cascade audit

Status: complete (2026-10-26). Read-only audit of all stylesheets, their TSX consumers, `docs/DESIGN.md` section-spacing and CTA rules, and the compiled CSS. Probes ran in Chromium local dev through `playwright-cli`; no file was modified.

Confirmed cascade facts:

- Tailwind v4 preflight already declares `a { color: inherit; text-decoration: inherit }` and `img, video { max-width: 100%; height: auto }` inside `@layer base`, so utilities in `@layer utilities` can override both. `src/styles/base.css` repeats the same declarations without a layer, which makes them win over utilities.
- Compiled order matches the import list: `.homepage-section-spacing` precedes `.capabilities-section`, and `.capabilities-section` precedes `.technology-section`.
- Measured winners: Explore normal `rgb(51, 65, 85)` and hover `rgb(51, 65, 85)` with a blue hover border; footer link hover stays `rgb(51, 65, 85)`; Capabilities padding `64px/8px` mobile and `80px/24px` above `768px`; project preview image height equals its container height at all seven viewports; Hero composition minimum height `0` below `1024px` and `740px` above; Experience toggle `flex` below `768px` and `display: none` above; Technology mask `20px` mobile and `48px` above `768px`.

Findings requiring a decision:

1. Unlayered `a { color: inherit }` silently disables every link color utility. Measured impact if that single declaration is removed: Explore text becomes `ink` instead of inherited `ink-secondary`, Explore hover text becomes `primary`, and footer link hover becomes `primary`. Normal footer color, solid CTAs, header navigation, and desktop Contact do not change. Keeping the declaration preserves the current approved look but leaves dead utility classes.
2. Unlayered `img { height: auto }` disables the card preview `h-full` utility. Because every preview is `1280 × 800` inside a `16 / 10` frame, removing the declaration changes no geometry at any of the seven viewports; the same height is produced by the frame ratio.

Behavior-preserving cleanup candidates, each to be verified against baseline before acceptance:

- `base.css`: duplicate reset declarations already provided by preflight (`box-sizing`, form `font`, `img` display/max-width/height, body `margin`, duplicated root and html font family).
- `Section.css` / `CapabilitiesSection.css`: Capabilities bottom padding currently wins only because of import order. Moving the shared rule one position later changes it to `64px` at desktop, so ownership should become explicit.
- `technology strip`: identical mask declarations repeated for mobile and tablet; a single custom property can carry the fade distance.
- `ExperienceSection.css`: duplicated `experience-details-toggle` blocks, a redundant `@media (min-width: 48rem)` repeat of two base declarations, a dead `--open` body rule, and a toggle `margin-top` that only applies where the toggle is hidden.
- `HeroSection.css`: tablet `white-space: nowrap` duplicate, redundant `max-width: 34ch` in the tablet block, repeated portrait mask repeat/size, trailing mobile typography block that duplicates base values, and a fully overridden `min-h-[36rem]` utility in TSX.
- `SiteHeader.tsx`: dead desktop Contact `hover:` border and text utilities, since the unlayered desktop rules always win.
- `ActionLink.css`: solid color rule stays required while the unlayered link color exists; it becomes redundant only if finding 1 is approved for removal.

Preserved as deliberate, not duplication: tablet wrapper `-40px` margin with `md:-translate-y-4` (`translate: 0 -16px`) and composition `translateY(-0.75rem)` compose into one geometry; `md:-translate-y-4` and the desktop `-64px` margin utility still own desktop values; the About `@supports` fallback and its component-scoped forced-colors block; Technology overrides living in `accessibility-overrides.css`; the separate `.experience-details--ready` rule that keeps details visible before enhancement readiness.

Automation limits: Chromium `155.0.8059.85`, DPR 1, local dev server. Not production static output, Safari, a physical tablet, `200%` zoom, or full accessibility certification.

#### Checkpoint B — foundations, link color, and Capabilities spacing

Status: complete (2026-10-26).

Approved visible correction: `src/styles/base.css` no longer repeats `a { color: inherit }`, because Tailwind preflight already provides it inside `@layer base`. Link color utilities now apply as written. Measured result: Explore text `ink` instead of inherited `ink-secondary`, Explore hover text `primary` alongside the already-primary border, and footer text and social links now reach `primary` on hover. Every other link is unchanged: desktop Contact keeps its `canvas`-on-`ink` pill, solid CTAs keep `canvas` text, header navigation keeps its inactive/current states, and the skip link keeps its `canvas` text.

Behavior-preserving cleanup in the same checkpoint:

- removed the unlayered `img { height: auto }` duplicate for the same reason; the `h-full` preview utility now wins, and geometry is identical because the `1280 × 800` preview ratio equals the `16 / 10` frame;
- gave `.capabilities-section` explicit `padding-block` and a compact `padding-bottom`, and dropped `homepage-section-spacing` from its class list, so the `64px/8px` mobile and `80px/24px` tablet-and-desktop result no longer depends on import order;
- added a short ownership comment where the removed global defaults used to be.

Verification against the Unit 1 baseline:

- all seven viewports re-measured: `7` differences total, all of them `.action-link` (Explore) `color` changing from `rgb(51, 65, 85)` to `rgb(15, 23, 42)` at each viewport; page width, page height, Hero gap, header clearance, and every other computed property and box unchanged;
- all `25` interaction checks passed, including sub-pixel marquee sampling;
- `14` targeted Checkpoint B checks passed: no unlayered `a`-color or `img`-height rule remains, Explore rest and hover colors, arrow `translate: 2px` on hover, footer text and social hover `primary`, solid CTA rest and hover surfaces, desktop header Contact rest and hover, header navigation current and inactive states, Capabilities padding plus zero gap to Technology at five widths, preview image height equal to frame height across seven viewports, skip link reveal, and the Explore keyboard focus ring;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass; CSS `51.61 kB` raw / `10.30 kB` gzip. JS logic unchanged, but the bundle hash and size moved because the Capabilities class string was removed (`266.84 kB` → `266.82 kB`).

Accuracy correction: the earlier Checkpoint B report line saying "JS unchanged" was wrong. No JavaScript logic changed, but the emitted bundle did because a class name left the TSX.

Assertion corrections were test-only: Tailwind v4 expresses the icon nudge through `translate`, not `transform`; the header check had to select the current item instead of assuming `Home` after earlier hover scrolling; and focus assertions had to wait out `--motion-fast`, because `transition-colors` also transitions `outline-color`.

Known consequence to keep visible: the earlier approved screenshot baseline no longer matches on Explore text color. This is the approved delta, not a regression; pixel hashes remain invalid as a gate.

#### Checkpoint C — header, about, project card, selected work

Status: complete (2026-10-26). Two behavior-preserving cleanups accepted; About and Selected Work audited with no change.

Changes:

- `src/components/layout/SiteHeader.tsx`: removed the dead desktop Contact `hover:border-(--color-primary) hover:text-(--color-primary)` utilities. The unlayered `.header-contact-link` normal, hover, and active rules already own those properties at every width where the link is visible, and the link is `display: none` below `1024px`.
- `src/features/projects/ProjectCard.css`: dropped the repeated `.project-card-link:focus-visible .project-card-indicator` selector from the desktop media query and documented why the global focus rule still wins — `(0,3,0)` against the desktop `.project-card-indicator` default `(0,1,0)` — so keyboard focus keeps the indicator visible without duplicating the declaration.

Audited with no change:

- About keeps all three layers: solid fallback color, `@supports` gradient clip, and component-scoped forced-colors restoration. They are not duplicates. Badge rows remain `display: none` below `1024px` and visible above, with all six badges present in the DOM.
- Selected Work keeps its split ownership: local CSS owns the mobile flex rail, snap, `20px` inset, thin scrollbar, and masked backdrop; utilities own the tablet two-column and desktop three-column grid. Both apply to different ranges, so no conflict exists to remove. Slot visibility rules, card markup, and the Explore CTA stay untouched.

Verification against the Checkpoint B build:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and all `49` captured selectors × `24` properties, boxes within `0.01px`;
- all `25` interaction checks passed;
- `11` targeted Checkpoint C checks passed: Contact visibility at five widths plus normal/hover/active/focus on desktop, navigation current/inactive/hover, menu panel matching the container inner width with `40px`/`44px` items, About gradient and desktop-only badges, About forced-colors fallback, card indicator visible at touch widths and hidden at desktop rest but revealed by hover and keyboard focus, mobile rail and responsive grid at `390`/`767`/`768`/`1023`/`1024`/`1280`, and Explore still matching the approved Checkpoint B colors;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass;
- CSS `51.56 kB` raw / `10.30 kB` gzip (`-0.05 kB` from the removed duplicate selector and comments); JS `266.76 kB` (`-0.06 kB`, class string removal only).

Assertion corrections were test-only: the menu panel measures the container inner width (`350`, `704`, `959` at `390`, `768`, `1023`), so the older "`322px`/`350px`" wording in the Unit 1–2 records does not describe the panel element and is superseded; and `rounded-full` serializes as `3.35544e+07px`, not `9999px`.

#### Checkpoint D — capabilities and technology

Status: complete (2026-10-26). One behavior-preserving cleanup accepted; Capabilities audited with no change. The planned custom-property dedupe of the marquee mask was rejected on build evidence.

Change:

- `src/components/sections/TechnologyStrip.css`: removed the hand-written `-webkit-mask-image` declarations from both the base rule and the `>= 48rem` rule, keeping only the standard `mask-image`, and added a comment explaining why. Lightning CSS applies the vendor prefix during the build, so the emitted CSS is byte-identical: the build now produces the same `index---t2Fcqb.css` asset at `51.56 kB` raw / `10.30 kB` gzip as Checkpoint C, with the prefixed declaration still present next to the standard one.

Rejected with measurements, not applied:

- replacing the four literal mask gradients with a local `--technology-mask-edge` custom property, or with one `--technology-mask` gradient. Any `var()` inside the mask value stops the minifier from collapsing the gradient and makes Lightning CSS emit the `-webkit-mask-image` declaration four times: `51.56` → `52.05 kB` raw (`+0.49 kB`) for the edge property, or `52.05` → `51.66 kB` with only the standard property in source but three prefixed copies. Both keep the media query repeating the gradient anyway, so the source dedupe buys nothing and ships more CSS. The literal gradient stays, and the responsive step remains a full mask declaration.

Audited with no change:

- Capabilities keeps its explicit block spacing from Checkpoint B, its `1`/`2`/`3` column progression, `16px` card gap rising to `24px` at `1024px`, `24px` card padding, `-1` backdrop layer, and zero seam to Technology. Nothing in the file duplicates another rule.

Verification against the Checkpoint C build:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and all `49` captured selectors × `24` properties, boxes within `0.01px`;
- all `25` interaction checks passed, including reduced motion and forced colors;
- `10` targeted Checkpoint D checks passed: prefixed mask equal to standard at six widths with a `20px` edge at `390`/`767` and `48px` from `768`, no leftover edge custom property, `54s linear infinite` running animation drifting left with two equal `2047.58px` halves and `4095.16px` track, hover and keyboard-focus pause with resume, reduced motion producing a maskless static wrapping list with the duplicate group hidden and `scroll-behavior: auto`, forced colors removing both masks without stopping the animation, forced colors plus reduced motion staying static and maskless, Capabilities spacing/grid/gap/backdrop/seam unchanged at seven widths, and Technology section padding plus marquee offset unchanged at four widths;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass; CSS and JS asset names and sizes identical to Checkpoint C.

Assertion correction was test-only: computed `mask-image` serializes `1.25rem`/`3rem` as `20px`/`48px`, so the edge assertions parse pixels instead of authored units.

#### Checkpoint E — experience

Status: complete (2026-10-26). One behavior-preserving cleanup accepted; the toggle `margin-top` was audited and deliberately kept.

Changes in `src/components/sections/ExperienceSection.css`:

- merged the two consecutive `.experience-details--ready .experience-details-toggle` rules inside `max-width: 47.9375rem` into one declaration block (`display: inline-flex`, `position: relative`);
- removed `.experience-details--open .experience-details-body { display: block }`, which restated the base rule and never competed with the hide rule `.experience-details--ready:not(.experience-details--open) .experience-details-body { display: none }`;
- removed the `min-width: 48rem` block that restated the same two defaults (`toggle` hidden, `body` visible) already declared base-wide; the block became empty once its duplicates were gone.

Audited and deliberately kept:

- the base toggle `margin-top: var(--space-4)` plus the mobile `margin-top: 0`. The `16px` only applies to a hidden toggle at `768px` and above, so its computed value is observable; deleting it would have changed a measured style for no visual gain;
- the `--open` chevron rule, the `--ready` gating, and the `44px` `::before` hit area. None are duplicates.

Verification against the Checkpoint D build:

- all seven viewports re-measured: `0` differences across page width and height, Hero gap, header clearance, and all `49` captured selectors × `24` properties, boxes within `0.01px`; that includes `.experience-details-toggle`, `.experience-details-body`, `.experience-entry`, `.experience-heading-row`, and `.experience-period-badge`;
- all `25` interaction checks passed, plus reduced motion and forced colors;
- `9` targeted Checkpoint E checks passed: mobile toggle shown with `44px` hit area, body hidden, `aria-expanded="false"`, label and `aria-controls` wired to the body id, chevron at `45deg`; clicking one entry opens only that one with the `225deg` chevron and `Hide details` label; `Enter` and `Space` toggle independently and re-close; keyboard focus ring `rgb(37, 99, 235) solid 2px` at `2px` offset; resizing open mobile to `1280` forces details visible and returning to `390` restores the open state; `767` keeps the toggle while `768` and above always show details; reduced motion keeps the chevron drawn with a collapsed transition; removing `--ready` leaves the toggle hidden and details readable; timeline node sizes `32px`/`40px`, `1px` line, gaps `32px`/`48px`/`64px`, badge padding `4px 8px` unchanged;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass; CSS `51.40 kB` raw / `10.28 kB` gzip (`-0.16 kB`), JS `266.76 kB` unchanged.

Assertion correction was test-only: the toggle is a flex item on mobile, so its computed `display` is blockified from `inline-flex` to `flex`; the check accepts either value, and the box comparison confirms the rendered size is unchanged.

Boundary note: `max-width: 47.9375rem` and `min-width: 48rem` leave a sub-pixel band uncovered between `767px` and `768px` of the default root font size, so a viewport of `767.5px` matches neither. The command-line browser only accepts integer viewport widths, so that band stays unmeasured. Corrected at Checkpoint F: the earlier "no uncovered width" claim here was wrong.

#### Checkpoint F — hero

Status: complete (2026-10-26). Five behavior-preserving CSS cleanups accepted; the mobile typography block and `min-h-[36rem]` were kept, and the Checkpoint E breakpoint claim was corrected.

Changes in `src/components/sections/HeroSection.css`:

- removed the tablet-only `.hero-availability { white-space: nowrap }`, already the base value;
- removed the repeated `max-width: 34ch` from the `>= 48rem` `.hero-right-rail`, which restated the base limit; the tablet override of `12rem` stays;
- removed the repeated `margin-top: 0` from the tablet `.hero-information-grid` and `.hero-right-rail`, already set by the `>= 48rem` block with no other rule in between;
- removed the hand-written `-webkit-mask-image`, `-webkit-mask-repeat`, and `-webkit-mask-size` declarations from `.hero-portrait` in both the base and `>= 48rem` rules, and removed the redundant `mask-repeat`/`mask-size` restatement from the `>= 48rem` rule. The build still emits all three prefixed properties, plus the standard ones, in the base rule, so the portrait fade is unchanged and `.hero-portrait` now declares the mask once.

Kept deliberately:

- `min-h-[36rem]` on `.hero-composition`. It loses to `min-height: 0` on mobile and tablet and to `md:min-h-[46.25rem]` from `768px`, but it is the only minimum in the sub-pixel band between `767px` and `768px`. The command-line browser rejects fractional viewport widths, so that band cannot be measured and the utility stays.
- the trailing mobile `.hero-title` / `.hero-role` block. Moving those rules into the earlier mobile block would place them before the equal-specificity base rules that appear later in the file, so the base `2.75rem`/`3.25rem` would win and the mobile sizes would change. The block stays where the cascade needs it.
- the mobile portrait gradient and tablet portrait gradient. They differ by design; a shared `var()` would also re-trigger the minifier cost measured at Checkpoint D.

Verification against the Checkpoint E build:

- a dedicated Hero probe captured `19` selectors × `45` properties at `320`, `390`, `639`, `640`, `767`, `768`, `820`, `900`, `1023`, `1024`, and `1280`: `0` differences before versus after, including mask image/repeat/size, prefixed and standard, typography, rail geometry, absolute availability and resume placement, and page height;
- the seven-viewport shared compare against Checkpoint E: `0` differences across `49` selectors × `24` properties, Hero gap `260.641`/`152`/`176`, header clearance `24`/`20`/`36`;
- all `25` interaction checks passed, reduced motion and forced colors included;
- `8` targeted Checkpoint F checks passed: responsive title and role sizes with nowrap only below `768px` and no horizontal overflow at any width; portrait heights `304`/`368`/`560`/`620` with a constant measured ratio, both mask gradients intact, and prefixed values equal to standard; mobile stacked rails, tablet absolute `224px`/`192px` rails, desktop grid with the `360.672px` (`34ch`) limit and the spacer restored; composition `0px` minimum up to `1023` and `740px` from `1024` with the tablet `-12px` nudge; resume link contract, rest/hover/active colors, arrow `translateX(4px)`, `44px` mobile hit area and focus ring; reduced motion and forced colors leaving the portrait mask readable;
- no page errors, failed requests, or HTTP errors; lint, build, and whitespace checks pass; CSS `51.28 kB` raw / `10.29 kB` gzip against Checkpoint E's `51.40 kB` / `10.28 kB`, JS `266.76 kB` unchanged. The first build right after the edits reported `51.23 kB` for the same source, so raw size drifts by roughly `0.05 kB` between runs here; compare assets within one build session and treat gzip as approximate.

Build observation while verifying: deleting `dist` and rebuilding twice reproduces the same `index-BHB3i7BT.css`, and moving `.playwright-cli` out of the tree changes nothing, so the drift is not caused by scanned browser artifacts or a stale output directory. Tailwind does not pick up class-like strings from `docs/` either — a probe class added to a Markdown file produced no rule and no hash change.

Assertion corrections were test-only: the portrait WebP is not exactly `4:5`, so the check pins the measured ratio (`0.7471`) instead of assuming `0.8`; `max-width: 34ch` computes to `360.672px`; the resume border is `border` (`226, 232, 240`), hover surface `239, 246, 255`, active text `30, 64, 175`; and the arrow nudge is a `transform` matrix, not the `translate` property.

Correction to Checkpoint E: the statement that `max-width: 47.9375rem` and `min-width: 48rem` leave no uncovered width was wrong. A `767.5px` viewport matches neither, and the command-line browser cannot set fractional widths. Recorded, not fixed.

#### Checkpoint G — regression and Unit 3 close

Status: complete (2026-10-26). No source file changed. Unit 3 is closed; Unit 4 awaits review.

Structural audit:

- every component stylesheet is still imported from `src/styles/globals.css`, and no `.css` file is imported from a TSX module;
- `accessibility-overrides.css` is still the last import, and in the emitted CSS the reduced-motion block and the technology forced-colors block sit after the Technology and Hero component rules, so their `mask-image: none` and `animation: none` win;
- no `@apply`, no `@layer` migration, and no new dependency appeared in Unit 3;
- no unlayered `a { color: inherit }` or `img { height: auto }` rule exists in source or in the emitted CSS; the preflight copies remain inside `@layer base`;
- no DOM, copy, route, or React logic changed in Unit 3. The only TSX edits were class-string changes in Capabilities, the header Contact link, and nothing else.

Regression evidence:

- `F → G` compare: `0` differences over seven viewports across the captured selectors and properties;
- pre-Unit-3 baseline → `G`: exactly `7` differences, all `.action-link` (Explore) `color` moving from `rgb(51, 65, 85)` to `rgb(15, 23, 42)`, one per viewport. Every box, page height, Hero gap (`260.641`/`152`/`176`), and header clearance is unchanged;
- `25/25` interaction checks pass;
- the Checkpoint B–F targeted suites were re-run against the final build and all pass: `14` + `11` + `10` + `9` + `8` = `52` checks;
- no page errors, failed requests, or HTTP errors in any run.

Build audit:

- two consecutive builds from the same input produced identical asset names, byte sizes, and SHA-256 digests: CSS `index-BHB3i7BT.css` `51,289` bytes (`2061aea4…`), JS `index-CPREk069.js` `266,764` bytes (`e6b94d09…`);
- the emitted CSS still carries `-webkit-mask-image` beside `mask-image` for both the `20px`/`48px` Technology fade and the portrait fade, plus `-webkit-mask-size`/`-webkit-mask-repeat` for the portrait;
- `npm run lint`, `npm run build`, and `git diff --check` pass. The repository has no `typecheck`, `test`, or `content:validate` script; `build` already runs `tsc -b`.

Accuracy corrections (superseding earlier Checkpoint text):

- the shared compare script captures `35` selectors × `24` properties, not `49`. Reports for Checkpoints B–F repeated `49`; the gate values are unchanged because the diffs were computed from the captured data, but the count was wrong.
- the portrait asset is `1084 × 1451` (`0.7471`), which matches the measured box ratio. `HeroSection.tsx` declares `width={864} height={1080}` (`0.8`), so the exported hint does not match the file. This predates Unit 3 and is left unfixed here; it affects the intrinsic-size hint, not the rendered mask or box.
- the sub-pixel band problem from Checkpoint F is not unique to `767–768`: the tablet block ends at `63.9375rem` (`1023px`), so `1023 < width < 1024` also matches neither the tablet nor the desktop block. Both bands remain unmeasured because the command-line browser accepts integer widths only.
- the `51.23 kB` versus `51.28 kB` CSS reading is still unexplained. Two consecutive builds from one input are byte-identical, so the drift came from an unrecorded state change rather than from nondeterminism in the pipeline. Treat cross-session raw sizes as approximate.
- the Unit 3 audit line claiming `.capabilities-section` and `.homepage-section-spacing` conflict with "import order is observable behavior" no longer describes the code: Checkpoint B removed that class from Capabilities and it now owns `padding-block`. Recorded as superseded.

Open items, unchanged by this checkpoint:

- static generation without JavaScript is not implemented; `dist/index.html` still ships an empty `#root`;
- Education copy was filled on `2026-10-30` and is no longer a placeholder; wrapping of the longer degree title is still pending manual review;
- the fourth Selected Work slot is unfilled;
- Unit 5 still owns the routing, tablet four-slot, and repository-fact drift, and should also reconcile the portrait `width`/`height` hint;
- sub-pixel breakpoint bands stay unmeasured.

### Unit 4 — Contact and shared heading (composition extraction)

Status: complete (2026-10-26). Checkpoints A–C recorded. No visual, DOM, copy, ID, or semantic change.

Files:

- `src/components/sections/ContactSection.tsx` (new) — Contact moved out of `src/App.tsx`;
- `src/components/layout/SectionHeader.tsx` (new) — shared eyebrow and `h2` for Selected Work, Experience, and Capabilities;
- `src/App.tsx` — renders `<ContactSection />`; the `ActionLink` import that only Contact used was removed, while `PageContainer` stays for About and Experience;
- `src/components/sections/SelectedWorkSection.tsx`, `ExperienceSection.tsx`, `CapabilitiesSection.tsx` — consume `SectionHeader`; project, timeline, and capability arrays untouched.

Naming: `SectionHeader` was chosen because `ARCHITECTURE.md` Section 10.2 already lists it under layout components and lists `ContactSection` under homepage sections. No owner document change was needed.

Checkpoint A — Contact extraction:

- the section element, `PageContainer`, inner wrapper, `h2`, paragraph, CTA row, and both `ActionLink` calls were moved without edits; classes, order, `id="contact"`, `aria-labelledby="contact-title"`, mailto, resume URL, `target`, `rel`, and `aria-label` are unchanged;
- probe over `320`, `390`, `768`, `820`, `900`, `1023`, `1024`, and `1280` captured the rendered element signature, text, ARIA wiring, boxes, and `24` computed properties for `22` selectors: `0` differences before versus after, including page height and Hero/About gaps.

Checkpoint B — shared heading:

- one `SectionHeader` renders `header > p + h2` with the existing class strings; `titleId`, `eyebrow`, and `title` are required props, and the eyebrow carries its own `/` so copy stays explicit;
- consumers keep `selected-work-title`, `experience-title`, and `skills-title`, so every `aria-labelledby` reference including the project rail group still resolves;
- no `className` passthrough, heading-level option, or variant was added; Contact, Hero, About, and Technology headings stay bespoke;
- same probe after B: `0` differences across all eight viewports, including each `header` signature (class list, child count, eyebrow text, `h2` id and classes).

Checkpoint C — regression:

- `8/8` targeted Unit 4 checks pass: Contact DOM shape and copy; email and resume link contract; solid CTA rest/hover/active colors at `rgb(15, 23, 42)` / `rgb(51, 65, 85)` plus the `2px` primary focus ring; three headings sharing one structure with correct IDs; single `h1`, six `h2`, no skipped level, no duplicate `id`, every `aria-labelledby` resolving; header anchors landing on extracted sections with `80px` scroll margin; responsive heading `48px`/`72px`, nowrap only from `1024`, both CTAs on one row down to `320` with no horizontal overflow; reduced motion and forced colors;
- `25/25` interaction checks pass;
- the Checkpoint B–F suites still pass on the final build: `14` + `11` + `10` + `9` + `8` = `52` checks;
- local dev baseline versus `vite preview` of the production build: `0` differences at all eight viewports, so the extraction survives the build;
- no page errors, failed requests, or HTTP errors.

Build:

- two consecutive builds from the same input produced identical asset names, sizes, and SHA-256; the CSS asset is unchanged from Unit 3 — `index-BHB3i7BT.css`, `51,289` bytes, `2061aea4…` — which confirms no style or cascade change;
- JS changed as expected for new components: `index-DTK03Ofn.js`, `266,361` bytes, `e0590366…`, `403` bytes smaller than Unit 3's `266,764`. Bundle identity is not a gate for this unit;
- `npm run lint`, `npm run build`, and `git diff --check` pass.

Assertion corrections, test-only:

- solid `ActionLink` text computes to `rgb(245, 247, 251)` (canvas token), not pure white;
- the focus-ring probe must run on a fresh page: after a pointer click the element no longer matches `:focus-visible`, so the earlier reading of `none` was pointer modality, not a missing ring;
- `#contact` is the last section in the document, so its anchor scroll clamps at maximum scroll (`top` `261.8` at `1280`) while `#skills`, `#experience`, and `#projects` land at `79.8`–`80.28`; the check now accepts a clamped last section;
- the CTA row keeps `flex-wrap`, but both buttons fit side by side even at `320px` (right edge `297.8`), so stacking was never expected; the first version of the check read the wrong inner `div` and saw `nowrap`.

Docs synchronized: `IMPLEMENTATION_PLAN.md` only. `DESIGN.md` and `CONTENT.md` are untouched because appearance and copy did not change; `ARCHITECTURE.md` is untouched because both components already exist in its canonical category list and dependency direction.

Open items, unchanged: static generation without JavaScript, Education placeholders, the unfilled fourth Selected Work slot, Unit 5 drift work (routing, tablet four-slot visibility, repository facts, portrait intrinsic-size hint), and the unmeasured sub-pixel breakpoint bands.

### Unit 5 — final regression and documentation audit

Status: complete (2026-10-26/27). Refactor Units 1–5 are closed. Release gates stay open.

Checkpoint A — audit:

- repository facts verified read-only: `personal-portofolio/` is its own Git repository on `main` with no remote, last commit `94acd1c` (`refactor: extract component CSS and consolidate cascade`); the live repository remains `vcard-personal-portfolio/` on `main` tracking `porto-latifiann.git`;
- the current build is still homepage-only: no router is installed, only `/` is served, and homepage links to `/projects/…` are reserved targets;
- Selected Work source already implements tablet capacity: `cardVisibilityClass` gives the fourth slot `hidden md:block` and slots five and six `hidden lg:block`, with `projects.slice(0, 6)`;
- probe sizes re-audited from the scripts: the shared compare captures `35` selectors × `24` properties over seven viewports; the Unit 4 probe captures `22` selectors × `24` properties over eight.

Checkpoint B — documentation sync:

- `ARCHITECTURE.md` v1.6.8: routing paragraph now separates the eight-route v1 target from the current homepage-only build and says `404.html` is planned rather than generated; Selected Work visibility prose now matches the tiered CSS rule; the repository paragraph now describes the development repository correctly and asks for live-state verification before cutover; the sitemap paragraph is bounded to the target build;
- `DESIGN.md` v2.26.35: slot visibility rule now states the fourth slot from tablet and slots five and six from desktop;
- `PRODUCTS.md` and `CONTENT.md` unchanged: the four-slot tablet capacity was already canonical there, and no project, copy, or attribution changed;
- the Unit 4 evidence line was corrected to the actual `24` captured properties.

Checkpoint C — portrait intrinsic size:

- `HeroSection.tsx` now declares `width={1084} height={1451}`, matching the imported WebP, instead of `864 × 1080`;
- loaded-state geometry at `320`, `390`, `640`, `767`, `768`, `1023`, `1024`, and `1280`: `0` differences in image box, wrapper, composition height, About gap (`260.641`/`152`/`176`), header clearance (`24`/`20`/`36`), page height, and overflow;
- blocked-image state is the intended change: before the fix the placeholder box used the `0.8` hint and was `16.079`–`32.828px` wider than the loaded image, which produced a visible reflow; after the fix the blocked box equals the loaded box at every width, so no width shift remains.

Checkpoint D — regression:

- `Unit 4 → Unit 5` probe: `0` differences across all eight viewports, including Contact and the three shared headings;
- `pre-Unit-3 → Unit 5` shared compare: exactly the same `7` approved Explore link-color changes, one per viewport, with every box and page height unchanged;
- `85/85` browser checks pass on the final dev build: `25` interaction, `52` targeted Unit 3, `8` targeted Unit 4;
- production `vite preview` of the built asset versus the dev baseline: `0` differences at all eight viewports;
- no page errors, failed requests, or HTTP errors in any run;
- two consecutive builds produced identical names, sizes, and digests: CSS `index-BHB3i7BT.css` `51,289` bytes unchanged from Unit 3, JS `index-CgkciM9R.js` `266,362` bytes (`5dfea94d…`, `+1` byte for the corrected attribute); `lint`, `build`, and `git diff --check` pass;
- generated `dist/index.html` still contains an empty `#root`; the page stays blank when JavaScript is unavailable. This is the known static-generation blocker, not a Unit 5 regression.

Checkpoint E — close:

- refactor close means implementation and automated regression are done; it does not approve release or replace owner manual checks;
- historical accuracy bounds kept: the two identical builds only prove equality for the inputs tested, the `51.23` versus `51.28 kB` drift still has no confirmed cause, CSS-asset identity proves CSS identity rather than DOM identity, and Chromium automation is not an accessibility certification.

Open items, unchanged: static generation without JavaScript, bilingual content and publication readiness, Education placeholders, the unfilled fourth Selected Work slot, unimplemented routing and metadata, unmeasured sub-pixel breakpoint bands, and hosting/deploy/cutover approval.

## ReMi Case-study Detail Slice Checkpoints

Status: implementation complete for desktop review; uncommitted.

### Checkpoint A — content sources and schema

- `content/projects/remi-mobile/project.yaml` holds locale-independent facts with `publication: draft` and `homepageOrder: 2`, so the record cannot enter a production manifest.
- `content/projects/remi-mobile/en.md` holds localized front matter plus the narrative body, limited to Context, My responsibilities, Process and testing, Outcome, and Scope boundaries.
- Every fact traces to the owner CV entry and the `CONTENT.md` ReMi section. Technical-decision rationale, quantified testing scope, month-level timeline, and team role breakdown remain absent rather than invented. Gamification now appears through owner-confirmed mechanics, contribution, and qualitative review feedback.
- Rejected on purpose: `gray-matter`, a Markdown renderer, and `remark`. Front matter splitting and body parsing are about forty lines, and the restricted vocabulary is easier to enforce without a general parser.

### Checkpoint B — validation and manifest

- `scripts/build-content.ts` owns schema, parsing, validation, and manifest writing in one pass, with `development`, `production`, and `release` modes plus `--check`.
- `src/generated/content-manifest.ts` is gitignored and regenerated by `predev`, `build`, and the validation scripts.
- Draft exclusion is enforced at generation, not at render, so a draft cannot reach a route, sitemap, metadata record, or browser bundle even by accident.

Verified this unit:

- `npm run content:build` → 1 development record, with hero imports resolved from the manifest directory; a temporary Vite dev server returned the transformed manifest and the media asset with `200`;
- `npm run content:build:production` → 0 records and a valid `[]` manifest;
- `npm run content:validate` passes; `npm run content:validate:release` fails with the expected missing-record and draft errors;
- `npm run build` passes and the production bundle contains neither `Remind Me` nor `unmaintained`.

### Checkpoint C — page composition and preview route

- `src/pages/HomePage.tsx` holds the previous `App` composition unchanged; `src/pages/ProjectPage.tsx` is the new case-study page; `src/App.tsx` owns the route switch.
- `SiteHeader` gained `homePath` and `activeNavigationHref`, `SiteFooter` gained `homePath`, so anchors and the active section survive on a non-home page without duplicating navigation.
- Related projects now have a renderer that stays hidden until a second resolvable case-study destination exists; `ProjectCard` is not modified.
- Owner revision: the `/ Case study` eyebrow is removed from the project intro, the category chip for ReMi reads `Mobile App`, and the `completed` and `unmaintained` intro chips are removed. Status and maintenance stay in `project.yaml` and in the highlight copy; only their intro rendering is gone.
- Owner revision: the back link and chip row sit `--space-4` apart, intro chips carry a `1px` contact shadow, and aside headings use Geist instead of mono.
- Role line now reads `Mobile Developer · Agile Teknik`; semicolon joins in the ReMi narrative were rewritten as separate sentences.
- Owner revision: highlight cards and aside panels use the standard two-layer surface shadow, aside headings drop their leading slash, and blue accent glow is scoped to the intro/hero and highlight band through `src/pages/ProjectPage.css`.
- Owner revision: the aside now shows Technical stack, Outcome, and a `View on Google Play` CTA. The Project links and Scope note panels are gone, the hero caption keeps the media qualification, `outcomeSummary` and `primaryLink` are validated fields, and `Juara 3 Best Team` reads `Third place Best Team`.
- Owner revision: the ReMi stack adds Dart, and the narrative is reduced to `Overview` and `My responsibilities`. Design participation, manual testing, and promo-video work moved into the responsibilities list. The old Outcome and Scope boundaries sections were folded away.
- Owner revision: gamification is now documented from confirmed mechanics rather than left out. Overview explains earning coins from completed tasks and spending them on themes, responsibilities list the UI, BLoC, API, and theme-asset work, and highlight cards replace the redundant Role card with Contribution, Product differentiator, and Project status. Review feedback stays qualitative.
- `src/lib/routes.ts` resolves `/projects/<slug>/` only under `import.meta.env.DEV`. `vite preview` and production builds render the homepage by design.
- Owner accepted the ReMi desktop composition on `2026-10-27` as good enough for now, with further changes deferred. Tablet and mobile review, focus review, and the homepage regression check remain open and are not treated as passed.
- Owner revision: the detail page gains an `Explore Related Projects` section below the narrative and aside. `src/lib/related-projects.ts` builds up to two `ProjectCardProps` from the validated manifest, excludes the current project, keeps manifest order, and returns nothing for a record without a resolvable destination. `src/lib/routes.ts` exposes `canResolveProjectDetail()` and `projectDetailPath()` so the existing development-only gate also gates these links. `App` passes the typed array to `ProjectPage`, and the section hides entirely when the array is empty. With one development record the section renders nothing yet, so its visual behavior is unverified.

Checks run: `npm run lint`, `npm run typecheck`, `npm run build`. Homepage visual equivalence after the page split was not verified by automation and is part of the owner review below.

### Checkpoint E — FMS-CREATE content record

- `content/projects/fms-create/project.yaml` adds the second development record: `draft`, `homepageOrder: 1`, category `Mobile App`, timeline `Dec 2025-Jul 2026`, `completed`, unspecified maintenance, private repository without a URL, no demo, no CTA, and no links.
- `content/projects/fms-create/en.md` holds the English draft narrative with `Overview` and `My responsibilities` only, three highlights, an outcome summary, and a visible hero qualification.
- Owner revision: the narrative now explains why the modular monolith exists, namely assembling application variants from module combinations before the APK build, and it covers both the passenger app and the whole operator prototype. `Nusantara EV Connect` is named as the teammate-built orchestration app that provides the module picker and automates the APK build, explicitly outside my contribution. The architecture highlight keeps `Modular monolith` as its value, with variant assembly kept in the supporting note. Runtime module installation, an app-store release, and a production-ready operator variant stay unclaimed.
- Detail stack: `Dart`, `Flutter`, `Riverpod`, `GoRouter`, `Dio`, `REST API`, `Server-Sent Events`, `Google Maps`, `Flutter Secure Storage`, `Modular monolith`.
- Attribution boundary: the passenger-side mobile app is individual work inside a cross-platform team ecosystem. The dashboard in the hero belongs to team or ecosystem context, the operator fleet telemetry is described as a prototype, and the Android build is internal with no app-store release.
- `docs/CONTENT.md` corrected the FMS role line from `Mobile Developer · Agile Teknik` to `Mobile Developer · Final academic project`, per owner confirmation. It also records the owner-confirmed category `Mobile App`, so the detail chip and related-project card match the approved preview type label instead of the older domain label.
- Development manifest now holds two records, so related projects render on both detail pages: FMS-CREATE shows ReMi Mobile and ReMi Mobile shows FMS-CREATE, each excluding itself.
- Production manifest still excludes both drafts, and no FMS detail copy enters the production bundle.

### Checkpoint F — Semina content record

- `content/projects/semina/project.yaml` adds the third development record: `draft`, `homepageOrder: 3`, category `Web App`, timeline `Aug-Oct 2026`, status `prototype`, unspecified maintenance, public backend repository, primary link on that repository, and no demo.
- Scope is owner-confirmed on `2026-10-30` as a React event-management CMS plus the backend API, with the role line `Full-Stack Developer · Personal project`. The participant-facing interface stays a static template and is not claimed as integrated.
- `content/projects/semina/en.md` holds the English draft narrative with `Overview` and `My responsibilities` only, three highlights, an outcome summary, and the qualified hero caption.
- Detail stack: `JavaScript`, `React`, `React Bootstrap`, `Redux`, `Redux Thunk`, `Node.js`, `Express.js`, `MongoDB`, `Mongoose`, `JWT`, `bcrypt`, `Nodemailer`, `Mustache`, `Multer`.
- Owner revision: `ctaLabel` was added as a validated nullable record field so a repository destination can override the default `View on <link label>` aside text without changing the link resolution or the `ActionLink` component. Semina sets `View Repository`.
- Verification boundaries stay explicit: source review only, no verified frontend build, browser, endpoint, SMTP, transaction, rollback, or concurrency results, no automated test suite, and no public deployment.
- Development manifest now holds three records in the approved order, so related projects show two other projects per page.
- The Semina landing card still renders the earlier backend-only sentence from `SelectedWorkSection.tsx`. The replacement copy and badges are prepared in `docs/CONTENT.md` and land with the planned card-source migration, not with this draft.

### Checkpoint G — single-source project cards

- `project.yaml` gained `cardStack`, validated as a non-empty list without repeated technologies. Each localized narrative gained `cardSummary`. Both are separate from the detail `stack` and `summary`.
- `src/features/projects/toProjectCardProps.ts` is the shared mapper. It takes the record, a caller-resolved `href`, and a locale, and returns `null` instead of falling back to English when that locale content is missing.
- `src/lib/project-cards.ts` replaces `src/lib/related-projects.ts` and owns both selections: `selectProjectCards` follows `homepageOrder`, `selectRelatedProjectCards` excludes the current record and caps the list at two. Both skip records without a resolvable destination.
- `src/App.tsx` derives homepage and related cards from the manifest and passes typed props through `HomePage` to `SelectedWorkSection`. The hard-coded project array and direct media imports are gone from `SelectedWorkSection.tsx`.
- `src/lib/routes.ts` adds `projectIndexPath`, which returns `null` while the curated index has no route. The `Explore all N projects` action therefore hides instead of pointing at `/projects/`.
- With three drafts, development renders three homepage cards and two related cards per case study. A production manifest with zero published records hides Selected Work entirely, which also leaves the header `Projects` anchor without a target until publishing lands.
- Card design was not changed: shell, radius, shadow, preview treatment, mobile rail, and interaction stay as they were.

### Checkpoint H — curated badges with full-stack count

- Owner revision on `2026-10-30`: the card keeps a curated badge list, but the overflow count now reports the full stack. `toProjectCardProps` sets `metadata.totalStackCount` from `project.stack.length`, `ProjectCard` requires it, and `ProjectMetadata` computes `totalStackCount - visibleStack.length`.
- No total is stored in content or the manifest, so the count cannot drift from the record. An alias badge such as `Modular architecture`, `SSE`, or `Express` names one stack entry and never adds to the count.
- Expected cards: FMS-CREATE `Flutter`, `Modular architecture`, `REST API`, `+7`; ReMi Mobile `Flutter`, `BLoC`, `REST API`, `+4`; Semina `React`, `Redux`, `Node.js`, `+11`.
- Static checks passed after the change. The owner confirmed the mobile rail scrollbar sits on the content gutter on `2026-10-30`; no visual defect was reported.
- Owner follow-up on `2026-10-30`: the mobile rail scrollbar must sit on the content gutter instead of the screen edge. `SelectedWorkSection.css` now insets `::-webkit-scrollbar-track` with `--container-padding-mobile`, keeps the full-bleed viewport for the next-card peek, and moves `scrollbar-width: thin` into an `@supports not selector(::-webkit-scrollbar)` fallback so Chromium does not drop the pseudo-element styling. Firefox cannot inset its native bar; Safari support for track margin is unverified. Visual confirmation on Chromium, Firefox, and Safari is owner-owned and still pending. No Playwright run was requested for this change.

### Checkpoint I — manifest isolation

- `scripts/build-content.ts` now writes one output per mode: `src/generated/content-manifest.development.ts` for development, and `src/generated/content-manifest.production.ts` for production and release. Release reuses the production output because both publish the same set.
- `vite.config.ts` aliases `@content-manifest` by Vite command: `serve` reads the development output, `build` reads the production output. `vite build --mode development` still ships production records, so a mode flag cannot leak drafts into a build.
- `src/types/content-manifest.d.ts` declares the alias shape, so strict TypeScript no longer depends on which generated file exists.
- `src/App.tsx` and `src/lib/routes.ts` import the alias instead of a generated path. The previous shared `content-manifest.ts` is removed.
- Verified: the development output kept the same hash across a production generation and a dev regeneration; the production output kept its hash across a dev regeneration; a build with the development output deleted succeeded and produced only the production file; `vite build --mode development` shipped no draft copy; the running dev server still served all three records after the build, with no restoration step.
- Current counts stay development three records, production zero. Release validation still fails on draft status and missing Indonesian content, which is the expected state.

### Checkpoint J — automated UI review

- `playwright-cli` covered the homepage and all three case studies at `1280 × 900`, `768 × 1024`, and `390 × 844`, plus breakpoint probes at `767`, `1023`, and `1024`.
- Passed: card order and copy, curated badges with `+7`, `+4`, `+11`, `Explore all` hidden, correct detail links, related-project exclusion, single `h1` per page, no duplicate ids, every `aria-labelledby` resolving, no nameless controls, `noopener noreferrer` on external links, full-bleed rail with required scroll snap, last card reachable, `44 × 44px` tablet header controls, aside width `288px` from `1024`, skip link focus transfer, card activation by keyboard, mobile menu `aria-expanded` with Escape returning focus, reduced-motion transitions at `1e-05s`, and zero console errors or failed requests.
- Limits: remote services were not exercised, the theme switcher is still unavailable and shows its `role="status"` notice, and detail `document.title` remains the app default until static metadata lands.

### Checkpoint K — experience and education copy revision

- Owner revision on `2026-10-30`: both internship entries now lead with the role, team context, and responsibility instead of opening with the product. Product names and feature inventories stay in the CV so the homepage does not read as a case study.
- The education entry uses the owner's requested English title `Bachelor of Applied Computer Science (Informatics Engineering)` and replaces every placeholder with confirmed content.
- Education copy covers the CSRG final academic project, explored topics (Docker, CI/CD, agentic AI, Linux fundamentals, networking fundamentals, virtual machines, basic VPS setup), two software copyright registrations, and HIMIT PENS involvement.
- Copyright facts come from the owner's certificates: Latifian Iman is one of ten named creators on both registrations, and Politeknik Elektronika Negeri Surabaya holds the copyright. Numbers `001492729` (web operator) and `001071254` (mobile user service). Application and first-publication dates are recorded in `docs/CONTENT.md` and are not treated as certificate issue dates.
- Being a creator on the web-operator registration is not used to claim authorship of that dashboard; the FMS case study keeps its mobile-versus-team boundary.
- `docs/CONTENT.md` now permits a short academic research and organization summary in the education entry, while the full organization history, GPA, PEPT score, professional certifications, and secondary school remain resume-only.
- The per-entry bullet limit changed from a maximum of three to a range of three to five with matching counts allowed to differ. Applied counts are Piramida five, Mitra four, and education four. The education entry names FMS-CREATE as the CSRG final academic project, keeping the passenger mobile app and operator fleet-telemetry prototype boundary.
- Section-fix on `2026-10-30`: `docs/DESIGN.md` still carried "two or three highest-value contribution bullets" and "Maximum 3 bullets per homepage item". Both were rewritten to the three-to-five range and the document moved to `2.26.46`.
- Pending: manual wrapping check of the longer degree title at `1280`, `768`, and `390`. No CSS or layout change was made for it. The owner reported the Experience manual pass as safe on `2026-10-30`, covering the bullet revision, wrapping, and disclosure behavior.

### Checkpoint L — experience props boundary

- `ExperienceSection` no longer owns experience data. It exports `TimelineEntry`, accepts an `entries` prop, and renders whatever it receives. Markup, CSS, IDs, icons, disclosure state, header copy, and the toggle labels are unchanged.
- `HomePage` now holds the `timeline` array and passes it in. That placement is a deliberate temporary stopgap, not the target source: it keeps the arrays out of the renderer while the experience YAML schema is still undecided.
- Scope was limited to the props boundary. Nothing was moved into `content/` and no schema was invented, because `title`, `description`, `contributions`, and `organizationNote` still need a bilingual storage decision before they can be split into facts and localized prose.
- Next unit for this section: define the experience record shape, then replace the `HomePage` array with validated manifest data. The array must not survive that migration.

### Checkpoint M — experience source migration

- `content/experience.yaml` is now the only source for the homepage timeline. The temporary `timeline` array is gone from `HomePage`, and `ExperienceSection` imports no content.
- Shape: shared facts (`id`, `type`, `organization`, `technologies`) on the entry; localized prose (`title`, `period`, `organizationNote`, `description`, `contributions`) under `content.<locale>`. English is required, Indonesian is `null` until translation is approved. Array order is rendered order, so no ordering field was added.
- Validation runs inside the existing `scripts/build-content.ts` pass and is evaluated independently of project results, so a broken project record cannot hide an experience error. It enforces `schemaVersion: 1`, unique kebab-case IDs, the two `type` values, nonempty organization, one to five non-repeated technologies, three to five contributions per available locale, non-null-but-nonempty `organizationNote`, and rejection of unknown keys at every level. `release` also names every entry still missing Indonesian content.
- The experience parse was deliberately hoisted out of the project-error guard after a fixture run showed release errors hiding the experience message.
- `selectTimelineEntries` in `src/lib/experience.ts` resolves one locale into `TimelineEntry[]` and skips an entry with no content for that locale rather than falling back to English.
- Manifest contract gained a second export, `experience: ExperienceEntryDetail[]`, declared in `src/types/content-manifest.d.ts`. It is not filtered by project publication, because an internship has no draft state.
- Fixture checks (temporary copies, restored byte-for-byte): duplicate ID rejected, two contributions rejected, empty `organization` rejected, misspelled `description` rejected, release mode reports all three missing Indonesian entries.
- Verified: production manifest still holds zero project records while carrying all three experience entries, so draft isolation is unchanged; the development manifest hash is identical before and after a production build; the bundle contains no YAML parser, no `node:fs`, and no draft project title.
- Pending: owner manual pass over the homepage after the data-source change. Copy, order, 5/4/4 counts, and disclosure behavior are intended to be byte-identical, but the write path changed.
- Still inline and out of scope here: the `/ Career Journey` eyebrow, `Experience` heading, and the `View details` / `Hide details` labels. They belong to the localized site-string unit.

### Checkpoint N — content build module split

- `scripts/build-content.ts` is now an entry point only: flags, source paths, loader calls, error output, manifest write. It went from 703 lines to roughly 80.
- New modules under `scripts/content/`: `types.ts` (`Mode`, `ParsedProject`, `LoadResult`), `diagnostics.ts` (`formatIssues`), `markdown.ts` (front matter and restricted body parser), `projects.ts` (project schema, parsing, homepage-order and release-set rules, mode filtering and ordering), `experience.ts` (experience schema, parsing, Indonesian completeness), `manifest.ts` (generated module text and hero imports).
- Behavior is unchanged by construction: both generated manifests were hashed before and after the split and matched byte-for-byte — development `81757018…`, production `36c340e0…`. The production build again left the development manifest untouched.
- Error independence is now structural, not incidental. Each loader returns `{ value, errors }`, and the entry point concatenates both lists. A fixture run that broke `semina/project.yaml` `status` and duplicated an experience ID reported both errors in one pass, where the earlier guarded pipeline could hide one behind the other.
- Loaders take their source paths as arguments and nothing writes on import, so validators can later be exercised against temporary fixtures. Only the entry point reads `process.argv` or touches the file system for output.
- Fixture checks on temporary copies, restored byte-identically (`experience.yaml` `a75e8c71…`, `semina/project.yaml` `06ecd8a7…`): project enum failure plus duplicate experience ID surfaced together; unknown experience key rejected; six contributions rejected by the 3–5 rule; `--release` reported the three unpublished projects and all three entries missing Indonesian content in the same run.
- `docs/ARCHITECTURE.md` 1.6.21 records the module table and the rules that keep the split from regressing into one file: add a domain as a module plus one loader call, loaders collect errors, only the entry point has side effects, and generated manifests must stay byte-identical across refactors.
- Not done by intent: no test framework was added. The fixture checks were run ad hoc; turning them into committed tests belongs to the test unit that Phase 7 still lists as missing.
- Pending: owner manual pass over the homepage after both the experience source migration and this split, since neither has been reviewed in the browser yet.

### Checkpoint O — comment audit

- Scope was every comment in `src/`, `scripts/`, `vite.config.ts`, and root config, not just the new build modules. Comment style had drifted into restating function names, types, and control flow.
- Removed: doc blocks on `splitFrontMatter`, `parseBody`, `formatIssues`, `loadExperience`, `loadProjects`, `selectProjectsForManifest`, `renderManifest`, `toProjectCardProps`, `selectProjectCards`, `selectRelatedProjectCards`, `canResolveProjectDetail`, `projectIndexPath`, `resolveLocalRoute`, `main`, `ExperienceLocalizedContent`, `TimelineEntry`, `ParsedProject`, `LoadResult`, `Mode`, plus the file-description comment in `ProjectPage.css`.
- Shortened to one line where the reason still matters: Vite alias keyed by `command` rather than `mode`, ambient manifest declaration, and the hero placeholder that crosses parser and renderer.
- Kept because each states a rule the code cannot show locally: Tailwind preflight ownership in `base.css`, the `44px` target in `ActionLink.css`, focus-indicator specificity in `ProjectCard.css`, the rail and scrollbar split in `SelectedWorkSection.css`, section-spacing ownership in `CapabilitiesSection.css`, the `homePath` anchor prefix in `SiteHeader` and `SiteFooter`, and the two vendor-prefix notes.
- Vendor-prefix claims were checked against the built asset instead of trusted: `dist/assets/*.css` contains the emitted `-webkit-mask-image` declarations, so those two comments stay accurate.
- Removed two inaccurate claims from `markdown.ts`: "no HTML injection path exists" was not provable from `splitFrontMatter`, and "tables are rejected" was false. The parser was not changed in this task.
- New unresolved drift: `parseBody` rejects raw HTML, heading levels, block quotes, and code fences, but a table row falls through to the paragraph branch. Recorded in `docs/ARCHITECTURE.md` 1.6.22 as a verified gap against the unchanged contract, and it needs a parser fix before narrative content relies on table rejection.
- `AGENTS.md` gained one Do rule and one Don't rule so the style survives the next contributor or agent.
- Behavior unchanged: both generated manifests still hash to development `81757018…` and production `36c340e0…`, and the diff touches comments only.

### Checkpoint P — table detection and first regression tests

- Closed the Checkpoint O drift. `parseBody` now rejects a Markdown table before the row reaches the paragraph branch, so the `docs/ARCHITECTURE.md` contract is enforced instead of only documented.
- Detector is deliberately narrow: a header row plus a delimiter row with the same cell count, where every delimiter cell matches `:?-{3,}:?`. It is not a general Markdown parser, and it does not reject every line containing `|`.
- Literal pipes in prose still parse as paragraphs, and an escaped `\|` is not a cell separator. A header followed by a delimiter with a different cell count stays a paragraph rather than a false positive.
- Diagnostics name the file and the body line that starts the table, and the number is body-relative because front matter is stripped before `parseBody` runs. Message: `Markdown tables are not supported; use paragraphs or "- " lists`.
- Added `scripts/content/markdown.test.ts` with 18 cases using the Node test runner through `tsx`, plus `npm run test:content`. Coverage: outer and bare pipes, alignment, single column, table after paragraph and after list, padded delimiters, no trailing newline, body line reporting, and the existing rejections for raw HTML, unsupported headings, block quotes, and code fences.
- Audited `content/projects/*/en.md` and `id.md` first: no narrative contains a table, so the new rule changes no existing content. Both generated manifests still hash to development `81757018…` and production `36c340e0…`.
- `docs/ARCHITECTURE.md` 1.6.23 replaces the verified gap with the enforced behavior, the detector limits, and the new test command.
- Still open in Phase 7 testing: schema refinements, project selectors and sorting, metadata generation, route enumeration, and component behavior have no tests yet. This checkpoint adds the first content-script tests, not a finished testing phase.

### Checkpoint Q — publication boundary and locale regression tests

- Owner reported the homepage and case-study manual review as safe on `2026-10-31`. Recorded as owner-reported pass without treating the earlier checklist as exhaustively re-verified; no defects were reported.
- Added `scripts/content/projects.test.ts` against temporary fixture directories. It proves: a draft loads in development, a draft is excluded from the production manifest, release rejects a draft, a published record needs `id.md`, a complete published record is selected, duplicate `homepageOrder` fails, a published order gap fails, the public-v1 set passes only in `fms-create, remi-mobile, semina` order, a missing public-v1 record is reported, selection sorts by `homepageOrder` then slug, and selection does not reorder its input.
- The table rule is now proven through `loadProjects`, not only through `parseBody`: a fixture narrative containing a table produces `<file>/en.md: body line 4: Markdown tables are not supported`.
- Added `scripts/content/experience.test.ts`: English-only content is accepted before release, release rejects a missing Indonesian entry, complete bilingual content passes, missing source is reported, duplicate ids fail, contributions outside 3–5 fail, repeated technologies fail, and source order is preserved.
- Added `src/lib/experience.test.ts` for `selectTimelineEntries`: locale mapping, optional `organizationNote`, Indonesian selection, skipping entries without the requested locale instead of falling back to English, and source order.
- Deviation from the planned file list: the selector test sits in `src/lib/` rather than `scripts/content/`. `tsconfig.node.json` uses `nodenext`, and importing `src/lib/experience.ts` from a script pulls its extensionless app import into that program and fails `TS2835`. The app project already covers `src/`, so the test lives there with `/// <reference types="node" />` and does not add Node globals to the browser project.
- `npm run test:content` now runs `scripts/content/*.test.ts` and `src/lib/*.test.ts`: 46 tests, 46 pass.
- By owner decision, those test files are **not** part of the repository. They are listed in `.git/info/exclude`, so they stay on the owner's machine while clones and GitHub never see them. Recorded consequence: `npm run test:content` is unavailable in a fresh clone, it is not a CI gate, and draft exclusion plus locale completeness are otherwise protected only by the build scripts. Docs state this instead of implying committed coverage.
- `npm run content:validate:release` still fails by design, and the messages were kept as diagnostics: three records are still drafts and three experience entries have no Indonesian content. No publication flag or copy was changed to make it pass.
- Both generated manifests are unchanged: development `81757018…`, production `36c340e0…`. The browser bundle contains no test code.

### Checkpoint R — six-project public scope

- Owner decision: expand the public set from three to six, ordered FMS-CREATE, ReMi Mobile, Semina, Mooda App, NKRI, ReMi Web App. The order keeps the existing three first and lets the new projects fill tablet and desktop capacity.
- Owner decision: internship projects may publish name, description, and approved visuals, but never source code, snippets, or repository links.
- Corrected an earlier internal claim: the empty fourth slot was never a release blocker. `PRODUCTS.md` always specified a curated set, and six slots are capacity, not a quota. The blockers are missing bilingual content, missing routes, and missing media.
- Synced `PRODUCTS.md` 1.2.2 (scope, selected-work list, milestones, agent constraints), `CONTENT.md` 1.10.23 (registry rows, internship and team-project publication boundary, pending card copy), `DESIGN.md` 2.26.47 (approved set list, capacity wording), and `ARCHITECTURE.md` (six case studies, fourteen indexable routes, output validator wording).
- Code contract widened: `homepageOrder` accepts `1–6` in the Zod schema and in `ProjectDetail`; `releaseSlugs` lists six; the order validator's type guard matches.
- Created only `content/projects/{mooda-app,nkri,remi-web}/media/.gitkeep`. No `project.yaml` exists for them yet, so the loader ignores the directories and both manifests stay byte-identical: development `81757018…`, production `36c340e0…`.
- `CONTENT.md` registry marks `nkri` and `remi-web` lifecycle as pending instead of guessing maintenance state, and states that card context labels, preview labels, badge lists, and card copy for the three new projects stay pending until each case study is drafted.
- Local test harness updated to six slugs and still passes; it remains excluded from git.
- `npm run content:validate:release` is expected to keep failing: six required records are not published, and three of them do not exist yet.

### Checkpoint S — three new draft records

- Owner supplied media: `mooda-app/media/mooda.webp`, `nkri/media/nkri.webp`, `remi-web/media/remi-website.webp`. All three are `1280 × 800` (`1.6`), matching the existing card frame without cropping.
- Owner confirmed the Mooda and NKRI screenshots use demo data, NKRI is maintained by the company, and ReMi Web is completed and unmaintained. ReMi Web copy was limited to what the CV confirms: Front-End Developer participation and team scope.
- Created three `project.yaml` records as `draft`, with `homepageOrder` `4`, `5`, and `6`: Mooda App (prototype, no maintenance value, private company code), NKRI (ongoing, maintained by the company, private company code), ReMi Web App (completed, unmaintained, private team repository). None carries a repository URL, demo URL, or CTA, so no source link can appear.
- Created three `en.md` narratives with `Overview` and `My responsibilities`. Media captions state the product boundary: the Mooda and NKRI screenshots use demo data, and the ReMi Web hero is the team landing page that promotes the mobile app rather than the task workspace.
- One validation round failed on `mooda-app/en.md` because `seoDescription` passed `160` characters; the description was shortened and the record then passed.
- `CONTENT.md` 1.10.24 now carries confirmed registry rows, card context labels, preview labels, badge lists with `+7`, `+5`, and `+2` overflow, approved card copy in both languages, and the owner-confirmed facts plus prohibited claims for the three records. The previous pending markers were replaced because the facts are now confirmed.
- `content:validate` passes with six development records. Production still shows zero project cards because every record stays `draft`; the production manifest is unchanged at `36c340e0…`. The development manifest changed on purpose to `1e1452ba…` because it now carries six records.
- Local harness still passes 46/46 and stays excluded from git.
- `content:validate:release` now fails only on unpublished records and missing Indonesian content, not on missing files.

### Checkpoint T — owner-requested automation pass on the six-project set

The owner asked for a `playwright-cli` pass, which for this task overrides the manual-first rule. Chrome for Testing was not installed, so the session ran on system Google Chrome; no browser binary was installed. The development server ran on `http://localhost:5174/` because `5173` was occupied.

- Homepage card counts held at every checked width: six at `1280` and `1024`, four at `1023` and `768`, three at `767`, `390`, and `320`. No page-level horizontal overflow at any width.
- Card order, detail destinations, loaded images, alternative text, and badge overflow (`+7`, `+4`, `+11`, `+7`, `+5`, `+2`) matched the approved registry.
- All six detail routes returned one `h1`, the `Overview` and `My responsibilities` sections, a loaded `1280 × 800` hero, a visible caption, a two-column related grid from `768` and one column below, and no page-level overflow. Related cards excluded the current project and followed manifest order, so the three newest records point back to FMS-CREATE and ReMi Mobile.
- No detail page rendered a repository or source call to action unless its record lists one: only Semina shows `View Repository`, and only ReMi Mobile shows the Google Play link. The word "repository" appears in the new narratives only as prose describing private ownership.
- Each detail page keeps two `Back to selected work` links, one above the hero and one in the related section. Both were already documented and are not a duplicate-control defect.
- Skip link is first in tab order, menu opens with focus on the close control, `Escape` closes it and returns focus to the trigger, the Experience disclosure toggles with `aria-expanded`, and the mobile rail scrolls to the last card, snaps, and reveals a card on focus. Reduced motion left every section visible with no transform.
- No console errors and no failed local requests on any route, in development or in the production preview.
- Production preview confirmed zero project cards, no `#projects` section, and no new-project copy in the built bundle. The header `Projects` anchor still has no target in production, which remains the documented pre-routing limitation. Any `/projects/<slug>/` path on the preview falls back to the homepage because static generation does not exist yet.
- Not tested: intentional-touch gestures on a real device, real browser zoom, and Safari or Firefox scrollbar rendering. Automation results do not replace the owner's visual review of the three new cards and case studies.

### Checkpoint U — related-project pagination

- Owner decision: the related section must reach every other project, and the visitor changes the pair with `Previous` / `Next`. No autoplay, no random selection, no looping.
- Selector contract changed: `selectRelatedProjectCards` now returns every resolvable candidate except the current slug, in manifest order. Paging moved into `ProjectPage`, so the selector stays a pure list builder. The old `relatedProjectLimit` constant and its `slice` were removed.
- `RelatedProjects` keeps the heading, the back link, and the `ProjectCard` contract, and hands the list to `RelatedProjectList`, which owns the page index. Two cards per page, three pages for the current five candidates (`2 / 2 / 1`), and the control row hides when candidates fit on one page.
- Boundary controls use `aria-disabled` with a guarded handler rather than disappearing, which keeps keyboard focus on the button that reached the limit. The page indicator announces through `aria-live="polite"`, and each button points at the card list with `aria-controls`.
- The control row started left-aligned with `justify-center` below `768` and `md:justify-start` above it, which did not match the owner request. It now uses a three-track grid with `minmax(0,1fr) auto minmax(0,1fr)` and `justify-self` on each child, so `Previous` stays left, `Next` stays right, and the indicator is centered at every width because the outer tracks are equal.

### Checkpoint V — mobile density on the case-study page

- Owner request: cut mobile page length without removing content. Highlights became a horizontal snap rail below `768px`, and related projects dropped to one card per page at the same breakpoint.
- `ProjectHighlights` keeps one `<ul>` and the same `<li>` cards. The page-scoped `.project-highlights-rail` class in `ProjectPage.css` supplies the flex rail, gutter bleed, snap alignment, and scrollbar treatment copied from the selected-work rail. The homepage `.project-rail` class was not reused or modified.
- The highlight list becomes a tab stop only below `768px`, so keyboard users can pan the rail while the desktop grid gains no extra stop. The list carries an accessible name and no card receives focus.
- Related paging now reads the breakpoint through a second `useSyncExternalStore` over `matchMedia("(min-width: 768px)")`, which subscribes to `change` and cleans up on unmount. Page size is one below `768px` and two above it, so five candidates become five or three pages.
- State moved from a page index to the first visible candidate index. Page and slice derive from it, so resizing across `767 ↔ 768px` keeps the visible candidate on screen and never produces an empty page.
- `DESIGN.md` 2.26.50 records the mobile rail and the breakpoint-dependent page size. `ARCHITECTURE.md` 1.6.28 records both stores, the anchor state, and the tab-stop rule.
- `typecheck`, `lint`, and `build` pass. The built CSS contains the six `.project-highlights-rail` rules, and the mobile rail does not rely on a new dependency.
- At implementation time, device swipe feel, Safari and Firefox scrollbar rendering, and browser resize behavior were pending. Checkpoint W records the later automation and owner manual review; browser-specific coverage is not inferred from the owner's general approval.

### Checkpoint W — owner-requested automation pass on the responsive case-study page

The owner asked for a `playwright-cli` pass, which overrides the manual-first rule for this task. Chrome for Testing was still absent, so the session ran on system Google Chrome; no browser was installed. The development server ran on `http://localhost:5174/` because `5173` was occupied.

- Breakpoint behavior matched the contract at `320`, `390`, `767`, `768`, and `1280`: highlight list was a flex snap rail with `overflow-x: auto` and a tab stop below `768`, and a three-column grid with no horizontal scroll and no tab stop from `768`.
- Highlight rail at `390`: three cards of `350px` in a `350px` content area, first card flush with the article gutter, scroll range `732`, and the last card fully inside the viewport after scrolling. `ArrowRight` moved the rail by `366` (`350` card plus `16` gap). Page-level width stayed at the viewport in every case.
- Related paging at `390` produced five pages in manifest order — FMS-CREATE, Semina, Mooda App, NKRI, ReMi Web App — with ReMi Mobile excluded, no duplicates, and a single card per page. At `768` and `1280` it produced three pages of `2 / 2 / 1`.
- Boundary controls behaved as specified: `aria-disabled` was `true` on `Previous` at page one and on `Next` at the last page, clicking either at its boundary left the page unchanged, and focus stayed on the button. `Enter` on the focused `Next` advanced one page and kept focus. Only the visible card was focusable.
- Control geometry: `Previous` sat flush with the article left edge and `Next` with the right edge at `390` and `768`, the indicator center equalled the container center (`195` at `390`, `384` at `768`), no element overlapped, and both buttons were `44px` high. `320` showed no overlap and no horizontal overflow.
- Resize without reload kept the anchored candidate and never produced an empty page: mobile page `4 / 5` (NKRI) became `2 / 3` with `Mooda App` and `NKRI` at `768`; desktop page `3 / 3` (`ReMi Web App`) became `5 / 5` at `767` and returned to `3 / 3` at `768`. Opening a related card from mobile page `4 / 5` landed on the target project at `1 / 5`.
- All six detail routes at `390` and `768` kept one `h1`, three highlights, a loaded hero, one or two related cards, and no page overflow. Homepage counts held at `3 / 4 / 6` with its rail unchanged at every checked width.
- No console errors, warnings, or failed local requests on any route, in development or in the production preview. Reduced motion left the rail, the pager, and every section visible.
- Production preview still renders zero project cards and no related list, and the built bundle contains no new-project copy; the only matched string is `Mitra Informatika`, which belongs to the published experience timeline rather than to a draft record.
- Not tested: real touch gestures, Safari and Firefox scrollbar rendering, screen-reader announcement of the live region, and any detail page without JavaScript, which stays blocked until static generation exists.
- Owner manual confirmation (2026-10-31): after receiving the responsive checklist and instructions for accessing the local site from a phone, the owner reported testing complete and everything safe. This closes the current responsive composition and pagination review gate. Exact device, browser, viewport, keyboard, and assistive-technology coverage was not specified; Safari/Firefox rendering and screen-reader announcements are not promoted to passed, and no-JavaScript detail output remains blocked by static generation.
- Readiness uses `useSyncExternalStore` with a client snapshot of `true` and a server snapshot of `false`. The first implementation set readiness from an effect, and `react-hooks/set-state-in-effect` rejected it; the store pattern removes the effect instead of suppressing the rule. Because the app still ships an empty root element, the no-JavaScript requirement cannot be proven in the browser yet; it depends on prerendered HTML from the static generation phase, which is why the server snapshot stays `false`.
- `ProjectPage` keys the section by project slug, so opening another case study remounts the list at page one.
- `DESIGN.md` 2.26.48 replaces the fixed two-card contract with two cards per page, the control row, boundary focus behavior, and the reset rule. `ARCHITECTURE.md` 1.6.27 records the selector change, the paging ownership, and the readiness snapshot.
- `typecheck`, `lint`, and `build` pass after the store change. The local harness has no related-card test to update, so no expectation changed.

### Checkpoint X — FMS-CREATE Indonesian narrative

- Owner editorial direction: Indonesian copy must read naturally, and a technical term stays English when the localized substitute would be less precise or read awkwardly. Technology names never change.
- The rule is now canonical in `CONTENT.md` 1.10.25: natural Indonesian, consistent terminology across fields, `Gambaran umum` and `Tanggung jawab saya` as the localized section headings, and a recorded list of terms kept in English so a later draft cannot translate the same concept differently.
- Created `content/projects/fms-create/id.md` as a full localized draft. Card summary reuses the approved Indonesian card copy; the role line pairs `Mobile Developer` with the approved context label `Tugas akhir perkuliahan`.
- Fact parity kept with `en.md`: the passenger app and the whole operator prototype were built individually; `Nusantara EV Connect` stays a teammate's orchestration tool that I did not build; module selection happens at build time, never at runtime; both Android builds stay internal with no store listing or public demo; the operator variant stays a prototype; testing stays qualitative.
- Media boundary kept: the dashboard in the hero is ecosystem context, and the caption says the case study covers the mobile variants I built.
- `content:validate` passes with both locales present. The record stays `publication: draft`, so production still excludes it and the release gate is unchanged.
- Not done yet: Indonesian narratives for the other five records and the three experience entries. The locale switcher still selects `en`, so this draft is not visible in the running app.
- Owner manual revision on `2026-10-31`: the Indonesian draft reworded the architecture phrase to `dengan arsitektur modular monolith` and added the study program and institution, `program studi Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS)`. Both edits were kept. The program name was capitalized to `Teknik Informatika`, and the English narrative gained the same program-and-institution context so the two locales no longer differ in that fact. Neither narrative states an official degree title.
- `CONTENT.md` 1.10.26 records the education context and the degree-title boundary. The record stays `draft`, both locales validate, and the development manifest was regenerated so the revision is the one the checks read.

### Checkpoint Y — ReMi Mobile Indonesian narrative

- Created `content/projects/remi-mobile/id.md` from the approved English narrative and ReMi content boundary. The two localized sections are `Gambaran umum` and `Tanggung jawab saya`; the card summary reuses the approved Indonesian card copy.
- Personal scope remains task-flow contribution, Flutter screens, REST API integration, gamification UI/state/assets, design participation, manual testing, and contribution to the team's promo video. No backend reward ownership or automated test suite is claimed.
- Google Play publication and all three awards remain team outcomes. Qualitative reward feedback is not turned into a measured engagement claim. The backend note retains the dated check on 27 October 2026, not a statement of current availability or maintenance.
- Hero alt describes the image; the caption explicitly identifies the separate ReMi Web deliverable and limits this case study to the mobile contribution.
- `CONTENT.md` 1.10.27 records the bilingual draft status, retained English terminology, and pending owner review. FMS-CREATE edits and review status remain untouched; all project records stay drafts.
- Checks passed: `content:validate`, `content:build`, local content tests (46/46), `typecheck`, `lint`, `build`, and `git diff --check`. Development includes the Indonesian narrative; production still contains zero project records. No browser check was run because locale switching remains outside this unit.
- Owner review of Indonesian wording and media copy remains pending. Next narrative after review: `content/projects/semina/id.md`.
- Owner clarification (2026-10-31): reminders use phone notifications and alarms. Added this product-level explanation to the opening Overview paragraph in both `en.md` and `id.md`, without changing personal responsibilities or asserting browser notifications for ReMi Web. `CONTENT.md` 1.10.28 records the confirmed fact and its claim boundary; broader wording/media approval remains pending.

### Checkpoint Z — Semina Indonesian narrative

- Recorded the owner's `2026-10-31` approval of the FMS-CREATE and ReMi Mobile bilingual copy in `CONTENT.md` sections 15 and 16. Approval covers copy only; both records stay `publication: draft`, and the release gate is unchanged.
- Created `content/projects/semina/id.md` from the approved English narrative and the Semina content boundary. The two localized sections are `Gambaran umum` and `Tanggung jawab saya`; the card summary reuses the approved Indonesian card copy and the role line reuses `Proyek pribadi`.
- Scope conflict resolved from the canonical record: the public scope is the React event-management CMS plus the backend API, not a backend-only project. The narrative keeps the CMS work and does not claim a full event platform, a Participants page, or analytics.
- Attribution preserved: the Indonesian narrative states that the project extends backend material from BuildWithAngga's `Full Stack Developer — MERN Website Event` class. The class URL stays unpublished because it is still unverified, and no frontend repository link is added.
- Prohibited claims avoided: no automated test suite, no verified frontend build, browser, endpoint, SMTP, transaction, rollback, or concurrency result, no payment gateway, no production deployment, and no proof of overselling prevention or cross-account organizer isolation. The outcome summary keeps those items explicitly unverified.
- Hero caption and alternative text reuse the approved localized strings instead of a fresh translation, so the image never implies authorship of the landing page shown.
- `CONTENT.md` 1.10.29 records the bilingual status, approvals, and retained English terminology. Checks passed: `content:validate`, `content:build`, `test:content`, `typecheck`, `lint`, `build`, and `git diff --check`. Development includes the Indonesian Semina narrative; production still contains zero project records. No browser check was run because locale switching remains outside this unit.
- Owner review of the Semina Indonesian wording and media copy remains pending. Next narrative after review: `content/projects/mooda-app/id.md`.
- Owner revision (`2026-10-31`): frame Semina as a website project for purchasing event tickets in both locale summaries, card summaries, SEO descriptions, and opening paragraphs. CMS/backend contribution details, course attribution, qualified media, and the unintegrated participant registration/checkout boundary remain. `CONTENT.md` 1.10.30 synchronizes the framing and approved card copy; this revision does not approve publication or close the pending wording review.

### Checkpoint AA — Mooda App Indonesian narrative

- Owner approved the latest Semina copy on `2026-10-31`, including the event-ticket website framing. Recorded in `CONTENT.md` 1.10.31; copy approval does not authorize publication.
- Created `content/projects/mooda-app/id.md` from the approved English narrative and company-content boundary. Includes full localized front matter, approved card copy, and `Gambaran umum` / `Tanggung jawab saya` sections.
- Personal scope remains the passenger app as the only mobile developer in a four-person team. Backend and web frontend remain teammates' work. The prototype outcome is attributed to the team, and manual driver-flow testing does not claim driver-app authorship.
- Preserved demo-data qualification, company code ownership, no repository link or snippets, no app-store release, and manual Android testing without claiming an automated test suite. English, YAML, UI, schemas, and publication states remain unchanged.
- Owner wording/media review remains pending. Next narrative after review: `content/projects/nkri/id.md`. Locale switching remains English-only; no browser automation was requested or run.
- Checks passed: `content:validate`, `content:build`, local `test:content` (46/46), `typecheck`, `lint`, `build`, and `git diff --check`. The first validation rejected an overlong SEO description; it was shortened to meet the unchanged 160-character limit. Development includes Indonesian Mooda content; production still contains zero project records. Generated files were updated only through scripts.
- Owner manual revision and locale alignment on `2026-10-31`: the owner changed the Indonesian summary and opening paragraph from `prototipe` to `aplikasi mobile`. The English summary and opening were aligned to `ride-hailing app`, keeping the same fact set. The prototype status remains in `cardSummary`, the SEO text, the Outcome panel, the Project status highlight, and `status: prototype` in the record. `CONTENT.md` 1.10.32 records the framing and its claim boundary. Owner wording review of Mooda App stays pending; this alignment is not an approval of the whole draft.

### Checkpoint AB — NKRI Indonesian narrative

- Owner approved the Mooda App copy on `2026-10-31`, including the `aplikasi mobile` framing. Recorded in `CONTENT.md` 1.10.33; copy approval does not authorize publication.
- Created `content/projects/nkri/id.md` from the approved English narrative and company-content boundary. Includes full localized front matter, approved card copy, `Produk magang` as the role context, and `Gambaran umum` / `Tanggung jawab saya` sections.
- Personal scope stays the real-time communication module as one of two mobile developers in a six-person cross-role team: message dispatching, Socket.IO to WebSocket migration, reconnection, activity status, message search and filtering, chat-room pagination, attachment flows, and the WebRTC calling prototype.
- Company boundary preserved: the company maintains the product, owns the backend services, and keeps the source code private, so no code, snippet, or repository link appears. The contribution timeline stays inside the internship, and no current maintenance, uptime, user count, or production-quality claim is added.
- Calling remains an experimental WebRTC signaling prototype, not a shipped platform. Screenshots stay qualified as demo data.
- Owner wording review of the NKRI draft remains pending. Next narrative after review: `content/projects/remi-web/id.md`. Locale switching remains English-only; no browser automation was requested or run.
- Checks passed: `content:validate`, `content:build`, local `test:content` (46/46), `typecheck`, `lint`, `build`, and `git diff --check`. The first validation rejected an overlong SEO description, which was shortened to the unchanged 160-character limit. Development now carries five Indonesian narratives; production still contains zero project records, and generated files were updated only through scripts.

### Checkpoint AC — ReMi Web Indonesian narrative

- Owner approved NKRI copy on `2026-10-31`. Recorded the manual removal of the redundant calling-platform sentence and the matching English edit; the prototype boundary remains unchanged.
- Created `content/projects/remi-web/id.md` from the approved English narrative, with complete localized front matter, approved card copy, and `Gambaran umum` / `Tanggung jawab saya` sections.
- Personal scope remains Front-End Developer participation, not ownership of all team features. The overview preserves planned features as plans. Deployment and end-to-end browser notifications remain unverified; Google Play publication belongs only to the separate mobile deliverable.
- Hero caption preserves the landing-page/mobile-promotion context rather than presenting a task workspace. No private source link is added. English, YAML, UI, and publication states remain unchanged.
- `CONTENT.md` 1.10.34 records NKRI approval, bilingual completeness, retained terminology, and pending ReMi Web review. All six project records remain drafts; copy approval is not publication approval.
- Next unit: owner review of ReMi Web Indonesian copy, then Indonesian content for the three experience entries. Locale switching remains English-only; no browser automation was requested or run.
- Checks passed: `content:validate`, `content:build`, local `test:content` (46/46), `typecheck`, `lint`, `build`, and `git diff --check`. Development now includes all six Indonesian project narratives and the latest English NKRI revision. Production still contains zero project records. Generated files were updated only through scripts.

### Checkpoint AD — Indonesian experience and education content

- Owner approved ReMi Web copy on `2026-10-31`; all six project narratives now have owner-approved bilingual copy. No publication state changed.
- Filled the three `content.id` objects in `content/experience.yaml`, preserving English, shared facts, entry order, technology labels, and contribution counts of 5/4/4. Education keeps `organizationNote: null`.
- Owner confirmed `Sarjana Terapan Teknik Informatika` as the Indonesian education display title, not a claim of official diploma wording. Indonesian work-location notes use `Jarak jauh` / `Di kantor`; date display keeps existing hyphens and localizes `Dec` to `Des`.
- Personal/team boundaries remain: Piramida is sole mobile developer work with manual customer/driver testing; Mitra is one of two mobile developers and calling remains a prototype. Education topics remain learning scope, and the two copyright registrations identify one of the creators with PENS as copyright holder.
- `CONTENT.md` 1.10.35 records project approval and the bilingual experience status. Indonesian experience wording awaits owner review. Experience has no publication state, so both locales enter production as well as development manifests; draft projects remain excluded.
- No UI, locale routing, schema, or publication changes. Browser testing was not requested; the app still selects English.
- Checks passed: `content:validate`, `content:build`, local `test:content` (46/46), `typecheck`, `lint`, `build`, and `git diff --check`. Structural comparison against HEAD confirms English and shared facts unchanged, with matching 5/4/4 contribution counts across locales. Production generation reports zero project records and three bilingual experience entries. Generated files were updated only through scripts.

### Checkpoint AE — locale foundation and client routes (units 1–3)

- Owner approved all three Indonesian experience entries; content review is closed without changing project publication states.
- Audited UI strings across layout, homepage, project panels, cards, and accessible controls. Added strict bilingual YAML, shared key types, loader diagnostics, placeholder validation, and typed manifest exports. English consumers use YAML; units 4–5 own locale propagation and the switch.
- Added React Router 7.18.5 (Node >=20, compatible with React 19). BrowserRouter wraps the browser entry; App uses useLocation, not window location during rendering. A future StaticRouter can supply server location. Typed helpers cover locale homepages, detail paths, and equivalent locale routes; invalid routes render English client not-found recovery. Project index remains unavailable.
- Detail resolution requires matching locale content in the active manifest and published status outside development. Production contains no draft routes. Client `/id/` remains English pending unit 4; static HTML, hydration, metadata, HTTP 404 handling, and generated `404.html` remain later work.
- Synced ARCHITECTURE.md 1.6.29 and CONTENT.md 1.10.36. No storage preference or automatic locale redirect added. Existing user content edits preserved.
- npm audit reports 20 findings (18 moderate, 2 high), none attributed to react-router. Broad dependency upgrades/audit fixes are outside this request and remain a release concern.
- Verification passed: content validation/generation, 47/47 local tests (including missing/unknown site keys, wrong locale, and placeholder failures), typecheck, lint, production build, and diff whitespace check. Vite SSR module checks passed for EN/ID home/detail parsing, equivalent-locale paths, unknown slugs, unsupported prefixes, and unavailable index routes. Production manifest has zero projects; sampled draft prose is absent from built JS. Inspected `dist/index.html`: still an empty root shell with English lang/default title, confirming static generation and metadata remain blocked rather than passed. Manual regression is pending; no browser automation run.

### Checkpoint AF — localized UI and language switch (units 4–5)

- App selects strings, project content, cards, related projects, and experience from the resolved route locale. No component falls back to English when Indonesian content is unavailable; such a route is treated as not-found instead.
- All UI copy consumers now receive typed strings explicitly, including header/footer navigation, hero, engineering statement, selected work, experience disclosure, capabilities, technology rail, contact, project panels, pagination, card metadata, preview fallback, and accessible names.
- Internal project and related-card links derive from the active locale, including `/id/projects/<slug>/`. Back links use the locale homepage with `#projects`.
- The header `EN / ID` control is a real two-link switch built from `equivalentLocalePath`; the active locale is marked with `aria-current`, and the control is hidden when no equivalent route exists. Clicking a locale closes the mobile menu.
- Client route changes focus `main` predictably, reset scroll for path-only navigation, and honor a hash target. Related pagination remounts on locale or slug change. `<html lang>` follows the route locale through an effect; static output must set it during the static-generation phase.
- `DESIGN.md` 2.26.51 records the active switch contract; `ARCHITECTURE.md` 1.6.30 records locale wiring and the `react-router` package name. `CONTENT.md` 1.10.37 records string ownership and switch labels.
- Verification pending for this checkpoint: full check suite plus manual bilingual review; see the final checkpoint entry.

### Checkpoint AG — language control target and active color

- Replaced the two small locale links with one pill button. The icon, padding, separator, and both labels are part of the single click target; activating it navigates to the equivalent page for the other locale, preserves a valid homepage anchor, and closes the mobile menu.
- The active locale renders bold in `--color-primary`; the inactive locale stays `--color-ink-muted`. Hover, border, shadow, focus, and mobile/tablet/desktop heights follow the existing header controls.
- Removed the unused `languageSwitch` string key from both locale files and the shared type so executable copy has no dead entry.
- `DESIGN.md` 2.26.53 and `ARCHITECTURE.md` 1.6.31 record the single-button contract; `CONTENT.md` 1.10.38 records the active-color and switch behavior. Locale labels stay `12px` at every width for consistency with the other side controls.
- Verification passed for static checks. Manual pointer and keyboard review remains owner-owned.

### Checkpoint AH — header font cascade correction

- Owner reported computed language text at 16px despite `text-xs`. The unlayered form-control `font: inherit` reset overrode Tailwind utilities; moved that reset into `@layer base` so explicit size and weight utilities take precedence without `!important`.
- Language labels retain `text-xs` at every breakpoint. Primary navigation now uses `lg:text-xs` (12px desktop), preserving `text-sm` (14px) on mobile/tablet per owner decision. DESIGN.md 2.26.54 owns this sizing update.
- Manual regression must cover language-control computed size/weight, navigation breakpoints, theme button, and experience disclosure because the reset applies to all form controls. No browser automation authorized.
- Verification passed: typecheck, lint, production build, and diff whitespace check. Inspected built CSS for size/weight utilities and source layer scope; desktop 11px override removed. Computed browser styles and visible behavior still await owner manual confirmation. Production manifest remains at zero projects.

### Checkpoint AI — Playwright locale and header verification

- Owner authorized automated browser verification for the locale and header unit. Ran `playwright-cli` against the local development server (`npm run dev -- --port 5199`), Chromium, viewport widths `360`, `390`, `768`, `1024`, `1280`, and `1440px`. Development manifest, so all six projects resolved; production gating untouched.
- Computed styles passed at every width: language labels `12px` in both locales, active locale `font-weight: 700` in `rgb(37, 99, 235)` (`--color-primary`), inactive locale `rgb(100, 116, 139)` (`--color-ink-muted`), primary navigation `14px` below `1024px` and `12px` from `1024px`, switch pill height `40px` mobile, `44px` tablet, `56px` desktop. No horizontal overflow at any width.
- Nine click positions across the switch pill all toggled exactly once to `/id/` and back, with localized hero copy, `<html lang>`, and label swap.
- Localized content, links, and labels passed for both homepages and all six details in both locales: headings, nav labels (`Capabilities` EN / `Keahlian` ID), back links, aside labels, related-card locale prefixes, and accessible switch labels. Related pagination rendered `2/2/1` cards across `1 / 3`, `2 / 3`, `3 / 3`, listed all five other projects, and reset to `1 / 3` on locale change; mobile rendered one card.
- Keyboard and stateful controls passed: Tab reach, Enter and Space activation, Back/Forward, mobile menu Escape with focus return, experience disclosure expand/collapse, and the Indonesian theme toast. No page errors, console errors, or failed requests.
- One real defect found and fixed: deep links such as `/#projects`, `/id/#projects`, and `/#contact` arrived with the fragment in the URL but did not scroll, because the section mounts after the browser resolves the fragment and the route effect skipped its first run. The effect now scrolls on first render when a hash is present, while keeping focus restoration limited to actual path changes. Deep links settle on the target with the shared `scroll-margin-top` offset (`80px`), and detail back links reach `#projects` in both locales. `ARCHITECTURE.md` 1.6.32 records the deep-link scroll requirement.
- Earlier failures in the first run were test-expectation errors, not app defects: the Indonesian experience heading is `Pengalaman`, related cards are paginated two per page rather than five at once, and anchor positions were sampled before smooth scrolling finished.
- Static checks after the fix: `typecheck`, `lint`, production build, and `git diff --check` pass. Automation evidence does not replace owner visual confirmation; no commit, push, or deploy performed. Production manifest remains at zero projects.

### Checkpoint AJ — in-app navigation through the router

- Owner reported that selecting header navigation from a case study reloaded the whole document. Header navigation and the `Get in touch` call to action rendered plain anchors, so the browser re-fetched the homepage. Not-found recovery and footer navigation had the same gap; project cards and detail navigation already used router links.
- Converted header navigation, header contact call to action, footer navigation, and not-found recovery to router links. Project cards and detail navigation unchanged. Email, CV download, social, and external project links stay native anchors, and `ActionLink` keeps its anchor surface because it also serves those cases.
- Re-selecting the section already present in the URL changes nothing in history, so the route effect could not scroll; the header now scrolls that target directly.
- Desktop activation no longer moves focus to the hidden mobile trigger. Mobile selection closes the panel and focus follows the new page content; `Escape` and outside click still return focus to the trigger.
- `history.scrollRestoration` is now `manual` at the browser entry. With automatic restoration the browser overwrote the scroll position after Forward, so `/` + `#about` arrived at the wrong offset.
- Verified with `playwright-cli` in Chromium at `1280px` and `390px`, with document reloads instrumented: 64 checks passed. Header navigation from EN and ID details, header contact call to action, footer navigation in both locales, and not-found recovery all swapped the view with zero `beforeunload` events and a surviving page marker. Targets landed in view with the shared offset, `main` received focus on real route changes, mobile closed the panel, `Meta`-click and `Meta+Enter` opened new tabs at the correct `href`, Back/Forward stayed reload-free with the Forward anchor landing correctly, reduced motion still reached the target, and no page, console, or request errors appeared. Regression suites for the locale unit also stayed green (10/10 switch positions, 94/94 locale, content, and keyboard checks).
- One measurement note: the older font suite samples the instant the URL changes, before React commits the Indonesian tree, so it reports a transient English view under `/id/`. The suite that waits for the locale effect passes, so this is a timing artifact of the test rather than a state the user can interact with.
- Documentation synchronized: `ARCHITECTURE.md` 1.6.33 records router links and manual scroll restoration; `DESIGN.md` 2.26.55 records in-place navigation and focus behavior. Static checks pass. Production manifest remains at zero projects; no commit, push, or deploy.

### Checkpoint AK — bilingual overflow audit and contact heading wrap

- Owner reported the Indonesian contact heading overflowing on desktop. Cause: `lg:whitespace-nowrap` forced a single line from `1024px`, and the section's `overflow-hidden` clipped the tail; the Indonesian heading needs about `1583px` at `72px` type while the content container offers `928px` at `1024px` and `1184px` at `1440px`.
- Removed the single-line constraint and added `text-wrap: balance` on the contact heading. The English heading still fits one line (`551px` at `1024px`); the Indonesian heading now wraps to two lines at `1024px` and `1440px`, three at `768px`, and four at `320px` and `390px`, all inside the content container with no page overflow. Font size, spacing, and copy are unchanged.
- Audited homepages and all six details in both locales for clipped text: `320`, `390`, `768`, `1024`, `1280`, `1440px` on homepages and `320`, `768`, `1024`, `1440px` on details. 132 checks passed with zero page overflow and zero unintended clipping. Deliberate overflow stays intact and was excluded explicitly: the mobile selected-work and highlights rails scroll horizontally, and the technology marquee is a moving masked strip. No other component needed a fix, so no other `nowrap` declaration was changed.
- Locale switching with Contact on screen passed at `390`, `1024`, and `1440px`: the full Indonesian and English headings render inside bounds and `#contact` stays in view in both directions.
- Screenshot review at `390`, `1024`, and `1440px` confirmed the heading reads completely with even line lengths; at `390px` the first line holds `Mari` alone because `Mari membangun` measures `356px` against `350px` of available width, and the same split appears without `text-wrap: balance`, so balancing is not the cause.
- `DESIGN.md` 2.26.56 removes the desktop one-line rule: the heading wraps whenever the localized copy needs it and must never be clipped. Static checks pass. Browser zoom at `200%` remains an owner manual check; emulated zoom would not represent real browser zoom. Production manifest remains at zero projects; no commit, push, or deploy.

### Checkpoint AL — favicon unit closed

- Owner supplied the personal SVG mark and replaced the contents of `public/favicon.svg`; `index.html` retains the matching `/favicon.svg` reference and `image/svg+xml` type. The earlier candidate name `favicon-fian.svg` is not the active asset. Owner edits to both files are preserved without changes.
- Source inspection confirms a standalone `64 × 64` SVG with matching viewBox, four vector paths, a `#111111` mark, and a white rounded-square background. No embedded raster, script, or external resource is present.
- On 2026-11-01 the owner reported the favicon looked good after receiving the manual checklist. This closes the favicon unit as owner-confirmed, without inferring exact browser, route, light/dark, cache, or 16/32px coverage. No new browser automation is authorized or performed for this documentation closeout.
- DESIGN.md 2.26.57 records the approved appearance; ARCHITECTURE.md 1.6.34 records the actual asset and head reference. Production build passes, including TypeScript checking. Parsed source and built HTML each contain one matching SVG favicon reference; SVG XML structure passes inspection, and `dist/favicon.svg` is byte-identical to the source asset. Whitespace verification passes. Production manifest still contains zero projects. No title change, asset redesign, publication change, commit, push, or deployment is part of this unit. Static generation, hydration, route metadata, and `404.html` remain next; project drafts and dependency-audit review remain release blockers.

### Checkpoint AM — ReMi video click-to-load panel

- Owner chose a media gallery: other media appear as thumbnails below the main image, and selecting the video thumbnail loads the player directly. Public link and embed permission are confirmed for `https://www.youtube.com/watch?v=_wer3NCOWQA`. Attribution is Latifian Iman as sole video creator, with ideas and suggestions from teammates; the earlier "contributed to the team video" wording is superseded in both narratives.
- Video metadata lives in `content/projects/remi-mobile/project.yaml` as `media.video` with `provider: youtube` and the 11-character ID. The schema derives `youtube-nocookie.com` embed and `youtube.com/watch` URLs at generation time, rejects other providers, and requires matching `mediaCaption.video` in English and in Indonesian when that locale exists. Projects without video metadata render no panel.
- `ProjectPage.tsx` renders one media gallery below the header. The hero image is the first item, so the initial view is unchanged. A local thumbnail row follows, then the caption for the active item. Selecting the video thumbnail mounts the `16:9` iframe with a localized title and no autoplay parameter; selecting the image unmounts the player and stops playback. The external YouTube link and third-party notice stay visible for any project with a video.
- Thumbnails are local, not remote YouTube images: the image thumbnail reuses the project image asset and the video thumbnail is a play tile. The active thumbnail uses `aria-pressed` and a primary-color border. The row scrolls horizontally on narrow screens. A project with one media item renders no thumbnail row.
- New bilingual UI strings are `videoNotice`, `videoWatch`, `videoPlayerLabel`, `mediaGalleryLabel`, `mediaGalleryImage`, and `mediaGalleryVideo`. They join the localized UI labels that still need locale-wide visual review.
- CONTENT.md 1.10.39 records the approval and attribution. DESIGN.md 2.26.59 records the gallery placement and selection behavior. ARCHITECTURE.md 1.6.36 records the narrow schema and embed exception. All six projects remain `draft`; release validation is unchanged. No Playwright run, commit, push, or deployment is part of this unit.

### Checkpoint AN — remote video thumbnail and caption-free gallery

- Supersedes AM's local-video-tile and visible-caption presentation. Owner explicitly selected the direct YouTube thumbnail and removal of gallery caption/paragraph across project details, without moving their wording into narratives. Existing content facts, image alternatives, course attribution, and publication states remain unchanged.
- Generator derives `thumbnailUrl` as `https://i.ytimg.com/vi/<validated-id>/mqdefault.jpg`. Remote thumbnail requests may occur before activation; the iframe still mounts only after video selection. Both thumbnails use a consistent `16:9` display; video has a play overlay and local tile fallback on load error.
- Removed gallery caption props and rendering, retained caption source data and schema validation. Removed unused `videoNotice`; the bilingual video control label identifies YouTube player loading. The external video link joins the aside links with URL deduplication and remains available without gallery interaction.
- CONTENT.md 1.10.40 records the explicit caption-display exception, superseding prior visible qualification requirements without changing authorship claims. DESIGN.md 2.26.60 and ARCHITECTURE.md 1.6.37 record remote-thumbnail behavior and the revised presentation.
- Verification passed: both manifest generators, content validation, local tests 48/48 (including derived thumbnail URL, invalid ID rejection, and draft exclusion), typecheck, lint, production build, and whitespace check. Tests remain the owner-excluded local harness, not committed CI coverage. Production contains zero project records; sampled video ID and thumbnail URL are absent from the production artifact. Browser rendering, keyboard behavior, remote image failure fallback, and actual embed playback await owner manual checks. No Playwright, commit, push, or deployment.

### Checkpoint AO — remove aside additional links

- Owner requested removal of the aside list anchors. Removed the whole secondary-link list and its list-building logic, including the injected YouTube watch link. Primary Google Play/repository CTA and gallery playback remain unchanged. Removed unused `additionalProjectLinks` and `videoWatch` bilingual UI keys; source project link metadata remains intact.
- DESIGN.md 2.26.61, ARCHITECTURE.md 1.6.38, and CONTENT.md 1.10.41 record the explicit override of the separate YouTube fallback requirement. No replacement link is added; video fallback without JavaScript or when embedding fails is intentionally no longer provided. All projects remain drafts.
- Verification passed: development/production generation, local tests 48/48, typecheck, lint, production build, and whitespace check. Production still contains zero projects. Manual visual/keyboard regression remains pending; no browser automation, commit, push, or deployment.

### Checkpoint AP — remove ReMi backend availability note

- Owner requested removal of the dated backend-online sentence. Removed it from the project-status highlight in both ReMi Mobile narratives; the team Google Play publication sentence remains. No outage or third-party responsibility claim replaces it. Completed/unmaintained status and draft publication remain unchanged.
- CONTENT.md 1.10.42 supersedes the historical availability note recorded in Checkpoint Y. Development manifest regenerated through the generator; content validation, local tests 48/48, typecheck, lint, production build, and whitespace check passed. Production still contains zero projects. Manual copy review remains owner-owned; no browser automation, commit, push, or deployment.

### Checkpoint AQ — semicolon-free project prose

- Removed six semicolons from Semina's bilingual summary, card summary, and SEO description. Audit found eight more in Mooda App captions/narratives, NKRI captions, and ReMi Web narratives. Split those sentences with appropriate capitalization, preserving facts, contribution boundaries, course attribution, and all draft states. No URL, entity, or code syntax changed.
- CONTENT.md 1.10.43 records the English/Indonesian public-copy rule and synchronizes approved Semina card copy. The rule excludes required code/URL/entity syntax. Source scan now finds zero semicolons in project Markdown.
- Development manifest regenerated through scripts. Content validation (including SEO length), local tests 48/48, typecheck, lint, production build, and whitespace check pass. Production retains zero projects. Manual copy/visual review is pending. No Playwright, dependency, publication change, commit, push, or deploy.

### Checkpoint AR — static generation and hydration

- Added `src/entry-server.tsx` rendering the shared `App` through `StaticRouter`, `src/lib/static-routes.ts` enumerating both homepages plus published bilingual detail routes, and `scripts/generate-static.ts` injecting rendered markup into the built Vite shell. `scripts/validate-dist.ts` checks each generated file, its `lang`, one `h1`, non-empty root, asset resolution, internal route links, and unexpected HTML output.
- The production entry now hydrates existing markup and falls back to `createRoot` only for the development shell. Route `lang` is written at build time, and server-emitted resource preloads move into the document head before hydration.
- Progressive enhancement: the locale switch is a router `Link`, the theme and menu triggers and gallery thumbnail row carry `data-js-only`, and `<noscript>` styles hide those controls while exposing the primary navigation. Hash-dependent language links adopt the fragment after mount so direct `/#section` loads do not mismatch.
- Route enumeration is covered by five fixture tests: both homes, drafts excluded even when bilingual, both locales for a published record, a missing locale skipped, and manifest order preserved. Production still has zero projects, so the build emits only `dist/index.html` and `dist/id/index.html`; no draft route, draft title, server bundle, or unresolved asset appears in `dist/`.
- Checks passed: `content:validate`, local tests 53/53, `typecheck`, `lint`, full `build` (client, SSR, static, validate), and `git diff --check`. Manual browser review of hydration and no-JavaScript behavior is pending. Metadata, `404.html`, sitemap, dependency audit, publication approval, and deployment remain outside this unit. No Playwright, dependency, publication change, commit, push, or deploy.

### Checkpoint AS — progressive enhancement and key regression fixes

- Fixed three defects from owner-authorized playwright-cli testing: omit header/footer Projects links when the locale homepage has no cards, default to usable wrapped navigation and hidden JS controls until React's mount effect enables enhancement, and give sibling media/related sections distinct locale-and-slug keys. All six projects remain drafts. Removed duplicate iframe fullscreen permission while keeping `allowFullScreen`, resolving the browser warning discovered by the stronger console harness.
- Fallback CSS is scoped to the site header and lives in SiteHeader.css, replacing noscript-only CSS. Desktop fallback explicitly clears the translate utility so links stay inside the viewport. The validator now rejects internal links to missing fragment IDs. No content, dependency, release validator, commit, push, or deployment change.
- Owner-authorized Chromium regression: production 48/48 checks and development gallery 21/21 checks passed, with no captured console warnings/errors or page errors on the final runs. Production covered both locales at 390/768/1280px, hydration, navigation, keyboard, disabled JavaScript, and a deliberately blocked JS bundle. Gallery covered both locales at 390/1280px and a deliberately invalid thumbnail response. Simulated failures are intentional test inputs, not unexpected network defects. Local artifact files remain ignored under .playwright-cli/. These results do not certify other engines, physical devices, playback availability, or owner manual visual approval.
- Static checks passed: content validation, local tests 53/53, typecheck, lint, production build, and whitespace check. DESIGN.md 2.26.63 and ARCHITECTURE.md 1.6.40 synchronize fallback and navigation behavior. Manual visual confirmation remains pending. Metadata, 404.html, sitemap, dependency-audit review, and publication approval remain release blockers.

### Checkpoint AT — homepage/detail metadata and hero focus copy

- Owner approved bilingual homepage SEO and the existing portrait as the shared social image. Added strict `content/site/site.yaml`, typed metadata export, shared pure resolver, and React 19 head tags for homepage/detail title, description, canonical, reciprocal locale links, x-default, Open Graph and Twitter. Static generator moves marked metadata into head and removes the placeholder shell title. Unknown routes emit noindex without stale canonical/sharing fields, but static 404.html remains separate work.
- Hero focus now reads `Mobile · Frontend · Backend` in both locales. Existing tablet dimensions are unchanged. Earlier APIs-based layout measurements do not prove the longer copy fits. Owner manual wrapping and visual checks remain pending.
- Static checks: content validation, 60/60 local tests, typecheck, lint, build, and whitespace check passed. Production contains zero project records and only the EN/ID homepages. New tests cover metadata resolution, detail escaping, unavailable alternates, missing metadata, invalid origin and schema fields. Existing publication tests retain draft isolation. Tests remain local harness coverage, not fresh-clone CI certification.
- Validator now verifies required head tags, canonical identity, reciprocal eligible alternates, locale values, sharing-copy consistency, and existing absolute sharing images. No browser automation requested or run for this unit. Hydration/head cleanup on navigation, social platform crop and rendering, and hero wrapping remain manual checks. All six projects stay draft. No dependency, commit, push, or deploy.
- CONTENT.md 1.10.44, DESIGN.md 2.26.64, and ARCHITECTURE.md 1.6.41 synchronize current behavior. Earlier composition references using APIs are historical baselines, superseded by the Backend copy decision.
- Owner-authorized playwright-cli verification, Chromium `156.0.8078.76`. 188 checks passed with no captured console warning/error, page error, or failed request. Covered both locales at 390/768/1023/1024/1100/1279/1280/1439/1440px: hero layout mode, single-line focus value, readable supporting width, rail bounds, availability and resume visibility, no horizontal overflow. Also covered mobile menu and Escape focus return, skip link, resume focus outline, live locale switch, Back/Forward, live resize across all four breakpoints, reduced motion, static metadata identity and sharing-image fetch, no-JavaScript output, blocked bundle, and detail metadata for four projects in both locales plus client navigation and locale switch.
- Two defects fixed from that run. The detail title used the narrative heading, so `ReMi - Remind Me` was published instead of the public card name `ReMi Mobile`. Titles now compose from `cardTitle`. At `1440px` the 24px focus line measured `315px` against a `296px` side column and wrapped. The `90rem` step now also narrows the centre column to `27rem`, widening side columns to about `328px`.
- Remaining limits: Chromium only, no screenshot review of social previews, no real browser zoom, and no mobile regression beyond this matrix. Rail text still overlaps the faded portrait edge below `1280px`, matching the approved overlay composition.

### Checkpoint AU — hero rail space and narrow-desktop composition

- Owner requested one-line Mobile · Frontend · Backend. First attempt widened only the left rail, which unbalanced the three-column grid at `1024px` and squeezed the supporting text into a near-vertical column. Owner reported the defect.
- Superseding correction: the approved overlay composition now covers `48–79.9375rem` instead of ending at `64rem`, so both rails keep usable width below the grid threshold. Rail caps are `18rem`/`12rem` from `48–63.9375rem` and `min(24rem, 50% - var(--space-6))` for both rails from `64–79.9375rem`. The three-column grid starts at `80rem`. The intrinsic-width left rail rule that expanded column one and shrank column three was removed.
- `20px` focus value and `14px` supporting text now hold through the narrow-desktop overlay, which is what keeps the line on one line. The previous `24px`/`16px` desktop step moved to `90rem`, where the centre column also narrows to `27rem`. Copy, portrait asset, mobile layout, header, and publication states are unchanged. Natural wrapping remains enabled for narrow space and enlarged text. DESIGN.md 2.26.65 owns the geometry.
- Chromium regression confirmed the `1024px` fix: supporting text measures `384px` across three lines, focus value stays one line at `20px`, overlay holds from `768–1279px`, and the grid starts at `1280px`. The first run's `1440px` failure was a real `24px` wrap and is fixed by the widened side columns. Real browser zoom at `200%`, other engines, and physical devices remain unverified.
- Typecheck, lint, full production build (including metadata/output validation), whitespace check, and the 188-check browser run passed. Manual visual confirmation stays owner-owned.

### Checkpoint AV — consistent desktop hero alignment

- Owner rejected the large visual difference between wide desktop and the 1149px overlay. Restored desktop grid from 1024px and restricted tablet overlay to 768–1023px. Desktop keeps left rail right-aligned and right rail left-aligned instead of flipping alignment at 1280px.
- Equal minmax(0, 1fr) side columns now flank a flexible centre track, clamp(20rem, calc(100% - 37rem), 31rem), with existing 2rem gaps. At 1024px, the 928px content area budgets 320px centre and 272px on each side, rather than a fixed 496px centre that squeezes copy. Existing 1440px type/centre-track step is retained. No copy, asset, header, publication, metadata, or dependency change. No new code comments.
- DESIGN.md 2.26.66 supersedes overlay-through-1279px geometry. Previous 188-check run does not certify this revised layout. Owner explicitly requested no Playwright for this correction. Typecheck, lint, full build including static metadata/output validation, and git diff --check passed. Manual review must cover both locales at 768/1023/1024/1149/1279/1280/1439/1440px, real 200% zoom, portrait clearance, focus-line fit, readable supporting text, and keyboard focus. Existing release blockers remain unchanged.

### Checkpoint AW — owner hero confirmation and static recovery

- Owner reported manual hero checks safe after Checkpoint AV. This closes the current hero visual review without inferring exact browser, zoom, device, or metadata coverage.
- Static generator now renders English `/404.html` through the shared App outside the indexable route manifest. Existing English recovery copy and noindex title are reused, with homepage links for English and Bahasa Indonesia. Root-relative assets and router links remain usable without JavaScript. No redirect, SPA fallback, draft exposure, or hosting HTTP-status emulation is added.
- Output validation now requires 404.html, English lang, one h1, rendered content, recovery title, noindex, both homepage links, valid internal fragments/assets, and no canonical/alternate/sharing tags. Other unexpected HTML remains rejected. Production still has two indexable homepages and zero projects, plus the separate error artifact.
- No Playwright run. Manual checks must cover direct /404.html, unknown client paths, keyboard recovery, and disabled JavaScript. Unknown-path HTTP status needs hosting verification. CONTENT.md 1.10.45 and ARCHITECTURE.md 1.6.42 synchronize recovery copy and build contract. Sitemap/robots, dependency audit, publication approval, and remaining manual metadata review stay open.
- Checks passed: content validation, local tests 60/60, typecheck, lint, full build including output validation, and git diff --check. Inspected generated 404 HTML: English lang, one h1, noindex, both homepage links, and root-relative assets. Indexable manifest still contains only / and /id/. These static checks do not confirm browser hydration or hosting status.

### Checkpoint AX — not-found recovery and shell correction

- Owner removed the Indonesian homepage recovery link from the English not-found page. The existing English label and destination remain. The output validator checks the main recovery content accordingly.
- The not-found shell uses a minimum viewport height with a flexible main region, so its footer stays at the bottom on short pages and follows long content. The header action group remains right-aligned without the language switch, and no navigation item is active on not-found routes. DESIGN.md 2.26.67, CONTENT.md 1.10.46 and ARCHITECTURE.md 1.6.43 supersede the corresponding Checkpoint AW behavior.
- Manual review of the revised recovery, header, footer and no-JavaScript fallback remains pending. Hosting HTTP status, sitemap/robots, publication approval, dependency audit and sharing review remain open.

### Checkpoint AY — refresh layout stability

- Fixed header remains fixed before and after React readiness. Desktop navigation retains its centered geometry and invisible JavaScript-only header controls retain their space. Mobile/tablet fallback is a horizontally scrollable fixed bottom strip, accessible without JavaScript or when the bundle fails. Enhanced mobile menu scrolls on short viewports.
- Audit: mobile Experience disclosure and related-project pagination intentionally change below-fold content on enhancement to preserve no-JavaScript evidence. Gallery thumbnails also appear after enhancement. These are unchanged and are not a claim of zero page-wide layout shift. Development's empty shell and font loading can still produce an initial blank frame or font-related geometry changes.
- Playwright CLI Chromium compared production static and no-JavaScript header/heading geometry on /, /id/, and /404.html at 390, 768, 1024, 1280 and 1440px. Delayed-bundle desktop measurement after fonts loaded matched before and after hydration. Tested blocked bundle, fallback navigation, short-viewport menu scrolling, Escape focus return, and repeated dev reloads including EN/ID ReMi detail. Production detail output remains unavailable while projects are drafts. Manual visual review and other browsers remain open.
- Content validation, 60 local tests, typecheck, lint, production build and output validation passed. DESIGN.md 2.26.68 and ARCHITECTURE.md 1.6.44 own the updated fallback contract.

### Checkpoint AZ — sitemap and crawler policy

- Static generation writes sitemap.xml from the indexable route list and validated site origin, and robots.txt permits crawling and identifies that sitemap. Current output contains only the English and Indonesian homepages, without draft routes or 404. No invented dates or priority are emitted.
- Output validation requires the exact generated files and existing HTML for every indexable route. Tracked tests exercise missing and extra routes, draft and duplicate URLs, wrong origins and blocking robots policies. ARCHITECTURE.md 1.6.45 owns the build contract.
- Content validation, 63 local tests, typecheck, lint, build and whitespace check passed. Separate temporary output fixtures confirmed the full validator rejects a missing route and an added draft URL. Existing content tests are locally excluded from Git; only the new crawl-file test is tracked, so fresh-clone coverage is not certified.
- Publication approval, dependency-audit review, metadata/sharing review, manual visual review and hosting verification remain open.

### Checkpoint BA — targeted dependency audit remediation

- Updated locked Vite 8.3.0 to 8.3.5, source-map-js 1.2.1 to 1.2.2, and ip-address 10.7.2 to 10.7.5 within existing dependency ranges. Vite's compatible PostCSS, Rolldown, native bindings and related dependencies also updated. No dependency, override, major upgrade or forced downgrade was added.
- npm audit changed from 20 findings (18 moderate, 2 high) to 17 moderate and no high. The production-only audit reports zero. Remaining findings follow minimatch through ESLint and TypeScript ESLint, and glob/minimatch through ttf2woff2's node-gyp tooling. npm suggests breaking downgrades; no compatibility or security outcome is assumed without a separate decision. Review remaining tooling risk before release.
- Content validation, 63 local tests, typecheck, lint, production build and output validation passed. The build generated two indexable routes, no draft routes, and validated sitemap and robots. Existing content tests remain locally excluded from Git, so fresh-clone test coverage is not certified. Manual browser review is pending.

### Checkpoint BB — metadata and sharing output review

- Reviewed generated homepage heads against the approved CONTENT.md Section 19 copy and executable site metadata. Both titles, localized descriptions, canonical URLs, reciprocal EN/ID and English x-default alternates, Open Graph identity and Twitter cards match the current contract. Canonical and sharing URLs use https://latifian.dev without query or fragment. The generated English 404 has noindex and no canonical, alternates or sharing metadata.
- Both locales reference the same approved portrait asset, present in dist at 226194 bytes, with localized alternative text. This verifies local asset availability, not HTTP delivery, platform support, crop or real social previews. The portrait/WebP presentation remains unchanged pending public-platform review; no new image or copy is approved by this audit.
- Reviewed detail metadata resolution and existing EN/ID render/escaping tests. These use synthetic fixtures, not generated production case studies. Content validation, 63 local tests, typecheck, lint, build, output validation and whitespace check passed. Production still contains zero projects and only two indexable homepage routes; publication and draft isolation remain unchanged. No application correction was needed. Existing locally excluded tests still prevent certifying fresh-clone coverage.
- Real social-platform previews, manual browser confirmation, remaining moderate dependency risk and hosting verification remain open. No browser automation, dependency change, publication, commit, push or deployment was performed for this review.

### Checkpoint BC — owner-approved local publication

- Owner confirmed the refresh and 404 visual review was satisfactory without specifying browser or device coverage. Owner approved publication of all six projects and reconfirmed Semina's React CMS plus backend scope. AGENTS.md now reflects the six-project order and the previously approved caption-display exception. Approval does not authorize deployment or cutover.
- All six records now use `publication: published`. Local production generated fourteen indexable HTML routes and 404 separately. Exact route-set and sitemap checks passed; twelve detail heads include canonical, Open Graph and x-default tags, and both Semina pages include BuildWithAngga attribution. Output validator checked metadata reciprocity, local assets and internal links. A targeted text scan found no specified local-path or GitLab-host patterns, not an exhaustive privacy review.
- Content validation and release validation, 63 local tests, typecheck, lint, production build and output validation passed. Older locally excluded tests prevent certification of fresh-clone coverage. No Playwright or deployment was performed. Production detail pages still require owner manual review; hosting, social previews, broader privacy/media review and a decision on the remaining moderate dependency findings remain open.

### Checkpoint BD — production preview browser automation

- At owner request, Playwright CLI Chromium ran 174 checks against local production preview: all fourteen indexable routes at 390, 768, 1024 and 1280px for response, heading, locale and overflow; detail locale links; ReMi locale switch, gallery mount/unmount and related-project pagination; mobile menu and Escape focus; 404 recovery; and selected homepage, Semina and 404 no-JavaScript fallback checks. All passed, with no captured main-page console or page errors.
- The YouTube iframe response was mocked, so player delivery and actual playback were not tested. This is automated Chromium coverage, not owner visual approval, exhaustive keyboard/accessibility testing, other browsers, real-device testing, social preview or host HTTP-status verification. Production-detail manual review and existing release blockers remain open.

### Checkpoint D — desktop review gate, owner-owned




Status: closed for the current composition and responsive pagination following the owner's manual confirmation on 2026-10-31, recorded in Checkpoint W. The checklist below remains a repeatable review reference, not evidence that every individual check or browser was explicitly confirmed.

Manual check reference:

1. Run `npm run dev`.
2. Open `http://localhost:5173/`.
3. Confirm the homepage still matches the approved layout and that section highlighting still follows scrolling.
4. Open `http://localhost:5173/projects/remi-mobile/`.
5. At `1280px`, check introduction order, chip wrapping, hero width and caption, highlight card alignment, narrative measure, aside position and stickiness, and absence of horizontal scroll.
6. Tab from the skip link through back link, links, and footer; confirm focus is visible and the external link announces a new tab.
7. Confirm no browser-console errors.
8. Report visual defects, wrong attribution, console errors, and screenshots if broken.

Desktop was the initial review priority; the later responsive work and owner confirmation cover the current composition gate. Browser-specific and assistive-technology checks retain the limits recorded in Checkpoint W.

### Remaining content and release work

- All six project narratives and three experience entries have owner-approved bilingual copy; new localized UI labels still need units 4–5 locale-wide review;
- six owner-approved projects are published in the local production manifest and require production-preview review;
- sitemap and robots.txt are generated and validated from eligible routes. The owner accepted the refresh and 404 visual review; hosting HTTP status remains unverified. Routing, locale switching, static generation, hydration, and route metadata are implemented.

## Current Next Unit

Units 1–5, the manifest-isolation fix, the comment audit, table detection, the publication/locale regression tests, and the six-project content set are closed. The older content tests are a local harness excluded from git by owner decision. All six approved bilingual records are published in the local production manifest with owner-supplied media.

The current composition and responsive pagination review gate is closed following the owner's manual confirmation in Checkpoint W. Automation coverage remains separate from that general manual approval; unconfirmed browser-specific and assistive-technology checks remain explicitly unverified.

Next unit: owner manual production-preview review of the six localized project pages and a decision on remaining moderate dependency risk. Real social-platform previews and hosting HTTP-status verification stay open.

Release remains blocked by review of remaining moderate dependency findings, production-detail manual confirmation, broader privacy/media review, and hosting verification. Static 404.html implementation is complete, not proof of hosting HTTP behavior. Social-platform sharing remains unverified. Publication approval is not deploy or cutover approval.
