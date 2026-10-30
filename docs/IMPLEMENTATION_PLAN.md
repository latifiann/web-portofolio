---
product: latifian.dev
document: implementation-plan
version: 1.10.62
status: canonical
last_updated: 2026-10-30
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
- education entry mirrors the internship structure; unverified education detail remains an explicit local placeholder pending owner review;
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

Status: in progress (2026-10-27). Project records, localized front matter, schema validation, and the deterministic manifest exist for the ReMi draft. Site, locale-string, experience, and capability sources are still inline in components, and no tests exist yet.

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
- output validator for exact eight indexable routes, assets, metadata, and accidental private content.

Checks:

- run content validation, lint, typecheck, tests, production build, and output validation;
- inspect representative generated HTML manually with file-reading tools;
- provide manual preview checklist.

## Phase 12: Deferred QA and Release

Status: deferred

`docs/QA.md` will grow from successful manual checks. Browser automation, Playwright, axe, automated screenshot baselines, performance measurement, host adapter, deploy, and cutover are deferred until explicitly scheduled. Owner-run side-by-side comparison with approved Stitch captures is a required manual final-fidelity gate.

Public v1 remains blocked until bilingual content and media exist for all three projects, output has eight indexable routes plus non-indexable `404.html`, no private or prohibited content enters `dist/`, release checks are recorded, and hosting plus history-preserving cutover are approved.

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
- Education entries are placeholders pending owner review;
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
- Static checks passed after the change. Visual review of the homepage and related cards is still owner-owned.

### Checkpoint D — desktop review gate, owner-owned

Manual check:

1. Run `npm run dev`.
2. Open `http://localhost:5173/`.
3. Confirm the homepage still matches the approved layout and that section highlighting still follows scrolling.
4. Open `http://localhost:5173/projects/remi-mobile/`.
5. At `1280px`, check introduction order, chip wrapping, hero width and caption, highlight card alignment, narrative measure, aside position and stickiness, and absence of horizontal scroll.
6. Tab from the skip link through back link, links, and footer; confirm focus is visible and the external link announces a new tab.
7. Confirm no browser-console errors.
8. Report visual defects, wrong attribution, console errors, and screenshots if broken.

Tablet and mobile widths follow only after desktop approval, because desktop is the owner's review priority; the composition itself was written mobile-first.

### Deferred behind this gate

- Indonesian narrative, which is required before `publication` may become `published`;
- Indonesian narratives for every record, including the FMS-CREATE and Semina drafts;
- publishing, which is required before Selected Work can render in a production manifest and before the header `Projects` anchor has a target;
- related-project tablet and mobile review, which now has two development destinations but has not been checked at those widths;
- routing, locale switching, static generation, metadata, and `404.html`, which belong to Phase 9;
- manifest isolation: development and production currently share `src/generated/content-manifest.ts`, so running a production build while a dev server is live leaves that server with zero records and it falls back to the homepage until restarted. Split the generated files and select by Vite mode before routing work.

## Current Next Unit

Units 1–5 are closed. Three detail records now exist in the development manifest: FMS-CREATE, ReMi Mobile, and Semina. All three are drafts built from owner-confirmed sources. Next: owner review of `/projects/semina/` at `1280px`, then the still-open tablet and mobile review for all three pages and the homepage regression check. The single-source card migration is complete, so homepage and related cards now share one mapper and cannot drift. Next is owner review of the homepage cards against the three detail pages, then the still-open tablet and mobile review. Do not add routing, locale switching, or static generation before those reviews, because the layout may still change. Release remains blocked by static generation, missing Indonesian narratives, the card-source migration, and the unfilled fourth Selected Work slot.
