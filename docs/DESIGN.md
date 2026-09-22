---
name: Latifian Editorial Portfolio
version: 2.10.0
status: canonical
last_updated: 2026-09-22
description: Canonical UI/UX and implementation specification for latifian.dev.
fonts:
  sans: Geist
  serif: Instrument Serif
  mono: JetBrains Mono
colors:
  canvas: '#ffffff'
  surface: '#f8fafc'
  surface-soft: '#eff6ff'
  surface-accent: '#dbeafe'
  ink: '#0f172a'
  ink-secondary: '#334155'
  ink-muted: '#64748b'
  border: '#e2e8f0'
  border-strong: '#cbd5e1'
  primary: '#2563eb'
  primary-hover: '#1d4ed8'
  primary-active: '#1e40af'
  primary-soft: '#dbeafe'
  focus: '#2563eb'
  success: '#16a34a'
  warning: '#ca8a04'
  danger: '#dc2626'
radii:
  sm: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  1: 0.25rem
  2: 0.5rem
  3: 0.75rem
  4: 1rem
  6: 1.5rem
  8: 2rem
  12: 3rem
  16: 4rem
  24: 6rem
  32: 8rem
breakpoints:
  mobile: '< 768px'
  tablet: '768px–1023px'
  desktop: '>= 1024px'
---

# Latifian.dev Design System

This document is the single source of truth for the visual design, content presentation, responsive behavior, interaction, and visual implementation of `latifian.dev`. Build, rendering, routing, content-pipeline, and deployment decisions belong in `ARCHITECTURE.md`.

If the current implementation and this document disagree, fix the implementation or deliberately update this document. Do not create a second, competing set of tokens or component rules.

## 1. Design Direction

### Homepage visual reference

The owner-approved Google Stitch blue-editorial references are canonical homepage composition targets:

- desktop: `Latifian Iman — Portfolio (Clean White & Blue Gradient Theme)`, screen `d0f8478d38034d83ada70aa3d2415ef8`, `1280px` viewport;
- mobile: `Latifian Iman — Portfolio Mobile (Aligned with Desktop)`, screen `2f82af7f3af141018fad75b20c7a6e58`, `390px` viewport.

Reference captures belong in `docs/references/` and never enter the production bundle. They govern homepage hierarchy, proportions, alignment, whitespace, typography relationships, blue-surface placement, and component character. They do not govern copy, personal or project facts, URLs, section scope, localization, media rights, accessibility behavior, or technical implementation.

At the reference viewports, final homepage review targets pixel-level fidelity. Accessibility, content truth, required product evidence, responsive integrity, localization expansion, and approved media rights take precedence when literal matching conflicts. Record intentional deviations rather than deleting required content or weakening usability. Tablet, intermediate widths, interaction states, error states, and case-study pages derive from this system; the reference applies to homepage only.

The portfolio is **minimal, editorial, technical, interactive, and information-first**. It should communicate clarity, engineering discipline, product awareness, and personality without relying on developer clichés.

The experience should feel like:

> Editorial typography + engineering precision + restrained interaction.

The site is memorable through typography, composition, project presentation, and content hierarchy—not through visual effects.

### Experience goals

A visitor should understand within five seconds:

- who Latifian Iman is;
- that he is a software developer with a strong mobile-engineering focus;
- what kinds of products and systems he builds;
- where to inspect selected work;
- how to contact him.

### Decision priority

When requirements conflict, use this order:

1. Accessibility
2. Content clarity
3. Usability
4. Responsive integrity
5. Design-system consistency
6. Performance
7. Visual polish
8. Pixel-level reference fidelity
9. Novel interaction

## 2. Brand Principles

### Information before decoration

Every visual element must support hierarchy, navigation, comprehension, or feedback. Decoration must never postpone access to the name, role, work, or contact actions.

### Technical, not stereotypical

Technical identity comes from precise layout, structured metadata, engineering case studies, restrained monospace labels, and credible content. Do not use terminal windows, Matrix effects, excessive neon, or hacker imagery as a shortcut.

### Editorial, not ornamental

The serif italic is an expressive counterpoint to the structured sans-serif. Use it for short phrases, section eyebrows, and selected display words—not for body copy or controls.

### Calm interaction

Motion confirms relationships and state changes. It must not compete with reading, trap scrolling, or become the primary subject of the page.

## 3. Canonical Color System

The palette is a white and slate foundation with a disciplined blue accent. The values in the front matter and table below are canonical. Do not introduce alternative canvas, ink, or primary-blue values elsewhere.

| Token | Value | Role |
|---|---:|---|
| `canvas` | `#ffffff` | Page background and primary content surface |
| `surface` | `#f8fafc` | Subtle cards and alternating content areas |
| `surface-soft` | `#eff6ff` | Large pale-blue bands and quiet emphasis |
| `surface-accent` | `#dbeafe` | Hero portrait block and selected accent surfaces |
| `ink` | `#0f172a` | Display type, headings, and high-emphasis text |
| `ink-secondary` | `#334155` | Body copy and supporting labels |
| `ink-muted` | `#64748b` | Metadata, dates, captions, inactive states |
| `border` | `#e2e8f0` | Default dividers and card borders |
| `border-strong` | `#cbd5e1` | Hovered or structurally important borders |
| `primary` | `#2563eb` | Links, active states, CTA, focus, key accents |
| `primary-hover` | `#1d4ed8` | Hover state |
| `primary-active` | `#1e40af` | Pressed state |
| `primary-soft` | `#dbeafe` | Blue badges and highlighted backgrounds |

### Usage ratio

- 80–90% canvas, neutral surfaces, and slate text.
- 10–20% blue accent and pale-blue surfaces.
- Saturated blue is reserved for interaction, status, or deliberate emphasis.

### Semantic category accents

Orange, yellow, pink, cyan, and similar colors may appear only in small category badges around the engineering statement. They are contextual markers, not additional brand colors.

Rules:

- keep their area small;
- pair them with readable text and a neutral surface;
- do not reuse them for primary buttons, links, section backgrounds, or arbitrary decoration;
- do not rely on color alone to convey meaning.

### Gradients and glow

The default interface uses flat colors. A subtle blue wash may appear in the hero or contact band if it improves depth, but it must not become a reusable card effect.

- No gradient text as a general effect. One named exception exists: the closing accent phrase of the Engineering Statement (`experiences that solve real problems.`) renders as a restrained left-to-right blue gradient from navy `#172554` through `primary` `#2563eb` to bright blue `#3b82f6`, uses Geist sans (no italic), and applies only when `background-clip: text` is supported, falling back to a solid `primary-active` color otherwise. The rule must not generalize into a reusable gradient-text utility.
- No glowing borders.
- No atmospheric glow behind every card.
- No gradient primary button unless explicitly approved as a future brand change.

## 4. Typography

The type system has exactly three roles.

### Primary sans — Geist

Use for navigation, display headlines, section headings, card titles, body copy, buttons, and form controls. Geist carries clarity and structure.

### Editorial serif — Instrument Serif

Use in italic style for expressive display phrases such as `Software Developer` and section eyebrows such as `Selected Work`. Final localized wording belongs in `CONTENT.md`.

Constraints:

- maximum one serif phrase per composition or section header;
- do not use for paragraphs, buttons, metadata, technology tags, or form fields;
- preserve comfortable letterforms; do not apply extreme negative tracking;
- never introduce a second serif family.

### Technical mono — JetBrains Mono

Use only for compact technical metadata: dates, section indices, tags, categories, project years, and small system labels.

Do not use monospace for headings or long paragraphs.

### Font delivery

Licensed TTF files and notices may be retained as repository source assets. Generate self-hosted WOFF2 files for browser delivery, loading only the weights and styles used by the product with `font-display: swap`. Define stable fallback stacks and preload only files required above the fold. Remote font CDNs are not part of public v1.

### Type scale

| Role | Desktop | Mobile | Weight / style | Line height |
|---|---:|---:|---|---:|
| Hero sans | `72px` | `42px` | 600 | 0.96–1.0 |
| Hero serif | `72–84px` | `46–52px` | 400 italic | 0.9–0.96 |
| Section title | `44–52px` | `32–38px` | 500–600 | 1.05–1.15 |
| Section eyebrow | `22–28px` | `20–24px` | serif italic | 1.1 |
| Card title | `20–24px` | `18–22px` | 600 | 1.2–1.3 |
| Body large | `18px` | `17px` | 400 | 1.55–1.65 |
| Body | `16px` | `16px` | 400 | 1.55–1.65 |
| Body small | `14px` | `14px` | 400 | 1.5 |
| Metadata | `11–13px` | `11–12px` | mono 500–600 | 1.35–1.45 |

### Readability rules

- Paragraph measure: `55–72ch`; short hero supporting text: `28–42ch`.
- Do not set essential text below `12px`.
- Avoid more than two display sizes inside one section.
- Use sentence case for prose and headings. Uppercase is restricted to short mono labels.
- Use tabular numerals for aligned dates, years, and metrics.

## 5. Layout, Grid, and Rhythm

### Container

- Maximum content width: `1280px`; homepage reference compositions may use a centered `1440px` visual canvas while readable prose remains constrained.
- Desktop horizontal padding: `48–64px`.
- Tablet horizontal padding: `32px`.
- Mobile horizontal padding: `20px`.
- Full-width color bands may exceed the container; their content must not.

### Grid

- Desktop: 12 columns, `24px` gutter.
- Tablet: 8 columns, `20px` gutter.
- Mobile: 4 columns, `16px` gutter.

Asymmetry is allowed where it strengthens hierarchy, but every edge should visibly align to the grid.

### Spacing

Use only the canonical 4/8-based tokens: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.

- Major section separation: `96–128px` desktop, `72–96px` tablet, `64–80px` mobile.
- Section header to content: `40–64px` desktop, `32–40px` mobile.
- Card internal padding: `20–24px` desktop, `16–20px` mobile.
- Related metadata gaps: `8–12px`.

Do not create arbitrary values to make one isolated component look right. Adjust the nearest token or the parent layout.

### Section anatomy

Most homepage sections follow this composition:

1. optional serif eyebrow;
2. clear sans-serif section title;
3. optional one-sentence introduction;
4. primary content area;
5. optional restrained CTA.

Do not invent a completely different header treatment for each section. The hero and contact band are intentional exceptions.

## 6. Surfaces, Borders, Radius, and Elevation

### Radius roles

- `8px`: controls, small tags, tooltips.
- `12px`: standard cards, compact media, and small interactive surfaces.
- `16px`: project preview containers and large content cards.
- `24px`: rare large visual blocks.
- Full pill: circular indicators and shapes only (status dots, icon discs, and elements whose form is inherently round).

Corner radius is consistent at `12px` across the header controls (language selector, compact navigation container and items, theme button, `Get in touch`, mobile menu trigger), the hero availability badge, and the engineering-statement badges in the `#about` section. Do not reintroduce full-pill radius on those surfaces.

### Borders

- Default: `1px solid #e2e8f0`.
- Hover or emphasized: `#cbd5e1` or a low-opacity primary blue.
- Dividers remain 1px; do not simulate structure with shadows.

### Shadows

The default surface is flat. Floating elements may use:

```css
box-shadow:
  0 1px 2px rgb(15 23 42 / 0.04),
  0 8px 24px rgb(15 23 42 / 0.06);
```

Do not stack large diffuse shadows. Cards must not resemble floating SaaS dashboard widgets.

## 7. Navigation

Desktop navigation has three visual zones: a compact static `EN / ID` language control on the left during the English-only draft, a floating `12px`-radius control centered near the top, then a theme-preview icon button and `Get in touch` contact CTA on the right. Supporting actions remain visually quieter than primary navigation.

The floating navigation contains seven order: `Home`, `About`, `Projects`, `Experience`, `Capabilities`, `Technology`, `Contact`. `About` links to the engineering-statement section. `Experience`, `Capabilities`, and `Technology` expose the sections that previously had no dedicated navigation item. They do not introduce separate biography pages in public v1.

Rules:

- minimum interactive target: `44 × 44px` where possible;
- display the centered floating navigation as a horizontal row only from `>= 1024px` (`lg`, canonical desktop breakpoint); below that width it collapses to the mobile dropdown panel. The theme button and `Get in touch` expose on the same `lg` breakpoint, and the menu trigger appears below it;
- desktop controls are enlarged together so the three zones stay visually balanced: language selector, centered navigation, and right actions all reach `56px` tall at `>= 1024px`, with navigation text at `11px` and side-control text at `12px`;
- the right zone is two separate floating surfaces, not a shared container: the theme icon button is a `56px` `canvas` secondary surface, and `Get in touch` is a `56px` `ink` surface with `canvas` text (same base treatment as the inactive navigation container), using `ink-secondary` on hover and `ink` on active — no saturated-blue fill;
- the language selector, center navigation, and header `Get in touch` CTA all use the sans `Geist` family (not mono). The CTA desktop color states are authored as a named rule (`.header-contact-link`) inside the `>= 64rem` media query so the `canvas` text is not overridden by lower-specificity responsive utilities;
- the centered floating navigation container uses `8px` padding and `4px` spacing between items; each navigation item uses `8px` vertical padding with `24px` line height, keeping the background visually tight to the label instead of a tall full-height pill;
- active item has a clear background and text contrast;
- active state follows the section currently in view, not only the last item clicked: hero → `Home`, `#about` → `About`, `#projects` → `Projects`, `#experience` → `Experience`, `#skills` → `Capabilities`, `#technology` → `Technology`, and `#contact`/footer → `Contact`. Exactly one item is active at any time;
- the active item renders its matching outline icon before the label; inactive items render no icon. Icons are decorative, drawn as local inline SVG, use an outline (Linear) style, and are kept small;
- the homepage three-zone navigation is fixed at the viewport top and each floating control follows scroll without a full-width header surface;
- preserve a visible keyboard focus ring;
- do not hide primary navigation behind hover-only interactions.
- the theme-preview button is light-theme only in v1 and announces the approved unavailable-feature toast without changing tokens or persisting preference.

Contrast on the centered floating navigation:

- container background: `ink` (`#0f172a`);
- inactive item: transparent background, `canvas` text; hover keeps transparent background with a `15%` white surface and `canvas` text;
- active item: `canvas` background, `ink` text and icon.

On the mobile dropdown panel (light surface), inactive text is `ink-secondary`, and the active item becomes `ink` background with `canvas` text and icon.

Navigation link colors are authored as a named rule (`.primary-navigation-link`) keyed on `aria-current="location"`, so inactive `canvas` text on desktop is not overridden by lower-specificity responsive utilities.

Active-item icons are always present in the DOM but visibly shown only on the active item. Their appearance animates width, opacity, and scale over `200ms` with `ease-out` so the icon expands smoothly and the label does not jump. Inactive links animate the same properties in reverse. Reduced-motion rules collapse these to near-instant feedback.

On mobile, use a compact top bar with a dropdown panel beneath it. The menu trigger exposes an accessible name and `aria-expanded`; the panel closes on `Escape`, outside click, and route or anchor selection; focus returns to the trigger when it closes. The menu must not depend on hover, and the DOM reading order must remain meaningful without CSS. Do not use a sticky bottom navigation unless it is intentionally redesigned and tested; it is not part of the current canonical UI.

## 8. Hero Composition

The hero combines oversized editorial type, a grayscale portrait, a pale-blue structural block, a conditional status badge, and concise supporting copy.

### Required hierarchy

1. Localized hero greeting from `CONTENT.md` in Geist.
2. `Software Developer` in Instrument Serif italic.
3. Portrait as the central visual anchor.
4. Availability badge when the status is current and verified.
5. Short positioning statement.
6. Engineering-focus line under the availability badge (`Building across / Mobile · Frontend · APIs`) communicating general scope without replacing the role title.
7. On mobile and tablet, one compact `Get in touch` route to contact and a `View resume` secondary action, both visible. On desktop, `Get in touch` lives in the fixed header actions and the hero shows `View resume` only.

### Portrait treatment

- Grayscale or near-grayscale subject.
- Transparent background when possible.
- Natural white shirt; no artificial suit, tie, or costume-like styling.
- Crop approximately from head to waist.
- Preserve natural face and body proportions.
- Place over `surface-accent` or an extremely subtle blue wash.
- Do not apply heavy blur, glow, colored rim light, or dramatic retouching.

The approved public-v1 portrait source is an owner-provided grayscale WebP with a transparent background, `864 × 1080` intrinsic dimensions, and a head-to-waist crop. It must be imported into the documented media pipeline before implementation. Local source paths must not appear in canonical documents, the production manifest, or generated output. The older formal portrait is not a production fallback unless separately approved.

### Hero background and fade

The hero may render a restrained `radial-gradient` blue wash behind the title and portrait. The wash maximum opacity is `0.38` and must use the blue token family (`sky-300`-to-`blue-500` range), staying visible but not neon, glowy, or generic AI-gradient. The hero background also fades to `canvas` toward its bottom edge, and the portrait applies a bottom alpha mask so its lower edge dissolves into the white hero background instead of ending with a hard cut. Safari/WebKit prefixed `-webkit-mask-*` declarations are mandatory. The fade must never reach the face or reduce the legibility of the role text, availability badge, or supporting copy.

### Availability treatment

The initial verified status is `Open to opportunities`. It is a maintained professional statement, not a real-time presence indicator. Omit the badge when the status is stale or unverified, and review it before release. Indonesian wording belongs in `CONTENT.md`.

### Composition rules

- Text may overlap the portrait region but must remain legible and never cross important facial features.
- The portrait supports the name and role; it must not obscure them.
- Availability badge and supporting paragraph balance the portrait horizontally on desktop.
- Supporting copy should be direct and no longer than two or three short lines.
- On mobile, resolve overlaps into a controlled vertical stack; do not merely scale the desktop composition down.

At desktop reference width, the greeting and serif role overlap the portrait region without crossing the face; the portrait remains a centered visual anchor over a pale-blue radial wash; availability and the engineering-focus line balance on the left; supporting copy and the resume action balance on the right. The two side rails form an intentional asymmetric grid: they share one vertical center anchor and sit in symmetric columns around a reserved portrait-safe center, so neither rail chases the portrait or uses independent offsets on desktop. Every gap and offset uses a canonical spacing token. The overlay grid sits above the portrait (`--z-raised`) so `View resume` and tablet `Get in touch` remain clickable, uses `pointer-events: none` on the grid with `pointer-events: auto` on the two rails so the center spacer does not block the portrait, and drops `24px` below the vertical center. The availability chip may carry one restrained blue accent shadow (neutral base shadow plus a `rgb(37 99 235 / 0.10)` halo) without gradient, glow border, neon, or heavy blur; it must not become a nested card. The right rail stays flat. `View resume` uses a functional `→` accent (primary blue, subtle glow) that translates `4px` on hover instead of a document icon. On desktop the availability badge renders at `14px` text with wider padding, the focus value at `24px`, and the supporting paragraph at `16px` with a `38ch` measure for readability. The title group is nudged `16px` lower and the supporting paragraph wrapper `16px` lower relative to its tablet position so the portrait floats slightly over `Software Developer` and the supporting text floats over the portrait while staying legible. The portrait wrapper is raised `16px` from tablet up to compensate for the wider role text gap, keeping the overlap consistent. At mobile reference width, resolve this into a legible vertical stack before adding decorative overlap.

Supporting copy is defined in `CONTENT.md`. Do not use an example phrase here as competing production copy.

## 9. Engineering Statement

This section introduces Latifian's working philosophy through a centered editorial statement and small capability badges.

The approved engineering statement is defined in `CONTENT.md`. This document defines its composition and presentation, not its final wording.

Render up to six approved engineering-statement badges from `CONTENT.md` or validated structured content. At desktop reference width, three badges align on each side of the centered statement. On mobile, preserve logical reading order and use a readable grid or wrap without crossing or covering the statement.

Each badge shows a distinct solid glyph matched to its label, supplied by the `react-icons` package (imported directly from its provider subpaths so the production bundle keeps only the used icons), rendered in white on a small rounded disc colored with one muted, medium-dark category tone. Badge surface, border, and text stay neutral; only the disc carries color. This badge set is an explicit category-color exception: it uses the exact approved tone list below and is not constrained by the general muted/desaturated disc rule, nor by white-glyph contrast targets, because the glyph is decorative and the visible label carries the meaning. These tones must not be neon-bordered, gradient, or repeated beyond this set, and must not be reused for cards, buttons, links, or section backgrounds. Sizing may be tuned per icon to balance differing optical weight across providers. The badge label, icon, and tone mapping:

| Capability | Provider / icon | Tone |
|---|---|---|
| Mobile Development | `io5/IoPhonePortrait` | `#FF5F06` |
| Frontend Development | `fa6/FaFileCode` | `#07AAFD` |
| Backend & REST API | `fa/FaServer` | `#474747` |
| Real-time Integration | `io5/IoTimer` | `#dbbc02` |
| Software Quality Assurance | `md/MdFactCheck` | `#d6589e` |
| Team Collaboration | `fa6/FaUsersGear` | `#43cc55` |

Do not reuse these tones for cards, buttons, links, or section backgrounds. The glyph is decorative (`aria-hidden`); the visible label carries meaning, and color never conveys meaning alone.

## 10. Selected Work

Selected Work is the primary evidence section. It must present projects as concise engineering case studies, not a screenshot gallery.

### Project selection

- Public v1 shows exactly three projects in this order: FMS-CREATE, ReMi Mobile, and Semina.
- Every public-v1 card links to a complete bilingual case study; card-only projects are not shown.
- Prioritize relevance, engineering depth, clear ownership, and credible outcomes.
- Do not fill space with weaker projects.

### Project card anatomy

Every card contains:

1. preview image;
2. category and approved year or timeline;
3. project name;
4. one-sentence product or problem description;
5. Latifian's role;
6. compact technology metadata;
7. `View case study` action.

The project name and contribution must be understandable without inspecting the image.

### Card layout

- Desktop: three-column grid with equal card hierarchy.
- Tablet: two columns.
- Mobile: one column.
- Card order comes from the validated content manifest, not CSS positioning.
- Keep metadata attached to its project when reflowing.
- Cards may vary in preview imagery but must share the same text hierarchy, padding, radius, and state behavior.

### Preview image treatment

- Use a consistent aspect ratio within the same card tier; default `4:3`, featured `16:10`.
- Use `object-fit: cover` only when the crop does not remove essential UI.
- Prefer `object-fit: contain` for dashboards, mobile-screen compilations, and screenshots with critical edges.
- Use a pale neutral or blue-tinted backing surface.
- Avoid mockups whose device chrome overwhelms the actual product.
- Provide meaningful alt text; decorative backgrounds use empty alt text.

### Card interaction

- Image scale: maximum `1.03`.
- Border becomes slightly stronger.
- Link arrow moves `2–4px`.
- Optional card translation: maximum `-2px`.
- No 3D tilt, rotation, cursor-follow effects, or large glow.
- Do not create nested interactive elements. Use a semantically clear title or case-study action instead of invalid link-button combinations.

## 11. Project Case Study Pages

Project detail pages use the same global system and should communicate engineering reasoning.

Recommended order:

1. Project title and concise product description
2. Role, timeline, team, status, and stack
3. Hero visual
4. Context and problem
5. Constraints and responsibilities
6. Approach or architecture
7. Important technical decisions
8. Key implementation details
9. Challenges and trade-offs
10. Outcome or evidence
11. Reflection and next steps

Do not invent outcomes, metrics, responsibilities, clients, or technologies. Mark unavailable evidence honestly or omit it.

The representative hero visual is required for every published case study. Galleries, videos, architecture diagrams, and additional media are optional. Missing optional media must not hide project text or leave empty controls. Prefer a normal external video link when an embed does not add essential understanding.

## 12. Experience

The experience section uses a compact horizontal editorial rail with hollow blue nodes at desktop reference width. Tablet and mobile use a vertical spine. It should be faster to scan than a résumé.

### Item anatomy

- role;
- company or organization;
- employment type when relevant;
- date range and location;
- one-line context;
- two or three highest-value contribution bullets;
- compact technology tags.

### Density limits

- Maximum 3 bullets per homepage item.
- Target 12–22 words per bullet.
- Maximum 5 technology tags per item.
- Use the CV or LinkedIn for complete history.

On mobile, dates move above or below the role/company block. They must not compress the main text into a narrow column.

## 13. Skills and Capabilities

Present capabilities as grouped engineering areas rather than a wall of logos.

Canonical groups:

- Frontend Engineering
- Backend & REST API
- Mobile Development
- Databases
- Software Quality Assurance
- Project & Collaboration

Each card contains an icon, capability title, one concise description, and up to four supporting labels. Capability and evidence are more important than logo count.

### Technology strip

The `Core Technologies & Ecosystem` strip is secondary evidence.

- Prefer a static, wrapping list on desktop.
- On narrow screens, allow horizontal overflow with visible affordance.
- If a marquee is used, it must move slowly, pause on hover/focus, stop under reduced-motion, and retain access to every item without waiting.

## 14. Contact and Footer

The contact section may use a stronger pale-blue band but remains minimal.

At reference widths, center the contact heading, body, and primary action within the pale-blue band. Secondary profile actions remain available without competing with email.

The approved contact heading is defined in `CONTENT.md`.

Include a short collaboration statement and one clear primary action. Email, LinkedIn, and GitHub may appear as secondary actions.

The footer contains only essential navigation, social links, name, copyright year, and an optional implementation note. Do not create a multi-column corporate footer.

## 15. Components

### Buttons

**Primary**

- background: `primary`;
- text: white;
- radius: `8px` or full pill only when matching the existing compact CTA language;
- hover: `primary-hover`;
- active: `primary-active`;
- focus: visible `2px` ring with `2px` offset;
- minimum height: `44px`.

**Secondary**

- white or transparent background;
- `1px` border;
- `ink` text;
- subtle neutral or `surface-soft` hover.

**Text link**

- clear underline or directional icon;
- never depend on color alone;
- arrow translation is optional and limited to `4px`.

External destinations use one consistent visual indicator and descriptive text or accessible naming. Do not open every external link in a new tab. When a new tab is justified, communicate that behavior where needed and use safe link attributes.

### Chips and badges

- 8px or full-pill radius according to role;
- compact mono text;
- neutral fill for technology tags;
- color accents are reserved for status/category semantics;
- no chip may contain a long sentence.

### Icons

- Use one outline icon family throughout, such as Lucide.
- Standard sizes: `16px`, `20px`, `24px`.
- Default stroke: `1.5–2px`.
- Do not mix filled, outlined, 3D, and emoji icon styles.
- Every icon-only control requires an accessible label.
- Exception: the engineering-statement badges in `#about` (`Section 9`) use solid glyphs from `react-icons` (mixed providers, imported by direct subpath) on muted single-color discs. This exception is scoped to that badge set only; the rest of the site keeps the outline family.

### Forms

- Minimum field height: `44px`.
- Visible label; placeholder is not a label.
- Default border: `border`; focus ring: `primary`.
- Error states include text plus an icon or label, not color alone.

### Loading, empty, and error states

Static text and repository-owned content do not use skeleton screens. Add loading or error treatment only for genuine asynchronous behavior or progressive image enhancement. A failed optional image uses a quiet fallback while preserving the associated title, metadata, and description.

### Toast feedback

The theme-preview button uses a non-blocking toast. It is exposed through an appropriate live region, does not move focus, disappears after a short functional duration, and remains visible long enough to read. It must not impersonate a theme change or persist state.

## 16. Interaction and Motion

Motion is functional, short, and interruptible.

### Timing

- Micro feedback: `120–180ms`.
- Hover and control state: `160–220ms`.
- Section reveal: `320–500ms`.
- Avoid transitions longer than `600ms`.

### Easing

- Entrances: `cubic-bezier(0.22, 1, 0.36, 1)`.
- State changes: `ease-out`.
- Exits: `ease-in` where necessary.

### Scroll reveal

- Opacity `0 → 1`.
- Translate Y `12–24px → 0`.
- Animate logical groups, not every word, icon, and chip independently.
- Content remains present and usable if JavaScript fails.

### Reduced motion

Under `prefers-reduced-motion: reduce`:

- remove parallax and scroll-linked transforms;
- disable marquees and nonessential looping animation;
- show revealed content immediately;
- reduce transitions to near-instant feedback;
- preserve state clarity without movement.

## 17. Responsive Behavior

Responsive design changes composition, not just dimensions.

Implement responsive composition in this order: mobile semantic flow, tablet grid, then desktop overlap and editorial composition. Do not add desktop hero overlap before the mobile reading order and controls work.

### Desktop (`>= 1024px`)

- 12-column layout.
- Editorial overlap is allowed in the hero.
- Project grid uses three columns for public v1.
- Experience date and role may share a row.
- Floating navigation remains compact.

### Tablet (`768–1023px`)

- 8-column layout.
- Reduce hero overlap and keep supporting copy wider than `28ch`.
- Project and skill grids use two columns.
- Avoid edge-positioned badges that collide with central copy.

### Mobile (`< 768px`)

- 4-column, single-reading-stream layout.
- Stack hero title, portrait, status, copy, and CTA deliberately.
- Keep the role legible; do not allow the serif display to clip.
- Project and skill cards become one column.
- Timeline metadata stacks without narrowing body copy.
- Minimum touch target is `44 × 44px`.
- Never require horizontal scrolling except the explicitly designed technology strip.
- Preserve major whitespace, but reduce section gaps to `64–80px`.

### Validation widths

At minimum, visually test `360`, `390`, `768`, `1024`, `1280`, and `1440px` widths.

## 18. Language and Localization

The portfolio supports English and Indonesian as complete locale states.

- English is the default public locale unless product requirements change.
- When `EN` is active, all navigation, headings, body text, metadata, button labels, alt text, and accessibility labels are English.
- When `ID` is active, translate the entire interface.
- Brand names, company names, product names, and technology names remain unchanged.
- Do not mix `Pengalaman Kerja` with English section content in the same locale.
- Layout must tolerate Indonesian strings that are longer than English equivalents.
- Locale selection persists across navigation when technically feasible.
- Published case studies exist in both locales. English-only drafts are local authoring states and are not public design states.

## 19. Content Voice

Copy is concrete, concise, and evidence-led.

Prefer:

> I build reliable mobile and web products with thoughtful architecture and clear user experience.

Avoid:

> I am a passionate developer who loves creating amazing digital experiences.

### Writing rules

- Lead with what was built, why it mattered, and Latifian's contribution.
- Use active voice.
- Avoid unexplained buzzwords and inflated seniority.
- Do not call unfinished prototypes production systems.
- Do not invent metrics or claims.
- Keep homepage paragraphs to two or three short sentences.
- Use sentence case consistently.

## 20. Accessibility

- Meet WCAG 2.2 AA contrast for text and essential UI.
- Provide a visible `:focus-visible` state for every interactive element.
- Maintain logical heading order with one page-level `h1`.
- Provide a skip-to-content link.
- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Associate all form labels and error messages correctly.
- Add meaningful alternative text to content imagery.
- Do not encode information only by color, position, or motion.
- Ensure zoom at 200% does not hide content or actions.
- Respect reduced motion and OS contrast preferences where practical.
- Keep reading order meaningful when CSS is removed.

## 21. Performance

- Prefer AVIF or WebP for raster project visuals, with responsive `srcset`.
- Lazy-load below-the-fold imagery; prioritize the hero portrait appropriately.
- Set width and height or aspect ratio to prevent layout shift.
- Retain licensed TTF source fonts and notices, then subset and self-host generated WOFF2 browser assets.
- Limit font weights and load only the three canonical families.
- Avoid animation libraries for effects achievable with small CSS transitions.
- Do not autoplay decorative video.
- Target a fast first viewport and avoid delaying text behind client-side animation.

## 22. Layering

Use a small, predictable z-index scale:

| Token | Value | Use |
|---|---:|---|
| `base` | `0` | Normal document flow |
| `raised` | `10` | Local decorative overlap |
| `sticky` | `30` | Sticky navigation |
| `dropdown` | `50` | Menus and popovers |
| `overlay` | `70` | Backdrops |
| `modal` | `80` | Dialogs |
| `toast` | `90` | Temporary system feedback |

Do not use arbitrary values such as `9999` unless integrating a third-party component that cannot be configured otherwise.

## 23. Do and Don't

### Do

- preserve generous whitespace and strong alignment;
- use the portrait and typography as the hero's main identity;
- show role and contribution on project cards;
- reuse established component patterns;
- keep experience concise on the homepage;
- use blue primarily for interaction and emphasis;
- make every responsive state intentional.

### Don't

- introduce random accent colors;
- use multiple unrelated card styles;
- turn every section into a bordered container;
- add glassmorphism, glowing cards, or heavy gradients;
- use 3D tilt, particles, custom cursors, or scroll hijacking;
- add terminal or hacker clichés;
- shrink body text to fit more content;
- use a logo wall as a substitute for capability evidence;
- mix languages within the active locale;
- invent project data, employers, outcomes, or metrics.

## 24. AI Coding Agent Contract

An AI agent working on `latifian.dev` MUST:

- treat this file as the canonical design specification;
- reuse the defined colors, spacing, radii, type roles, and z-index scale;
- preserve the three-font system: Geist, Instrument Serif, JetBrains Mono;
- preserve self-hosted font delivery and required license notices;
- preserve the existing section rhythm and information hierarchy;
- use blue as the primary interaction accent;
- keep serif usage expressive and limited;
- reuse existing components before creating variants;
- implement desktop, tablet, and mobile behavior together;
- include hover, active, focus-visible, loading, empty, and error states only where relevant;
- use semantic HTML and accessible labels;
- respect reduced motion;
- verify new content against real project evidence;
- change the smallest relevant scope when fulfilling a request.

An AI agent MUST NOT:

- create another token set or hard-code near-duplicate colors;
- add arbitrary spacing, radius, shadow, breakpoint, or z-index values;
- introduce new fonts or visual styles without explicit approval;
- add gradients or glass effects as generic decoration;
- redesign unrelated sections while implementing a focused change;
- add animation that delays access to information;
- hide essential content behind hover;
- create desktop-only layouts and defer responsive behavior;
- replace real content with generic portfolio copy;
- fabricate project facts, impact metrics, roles, or technologies.

When a requested feature is not covered here, the agent should choose the option that creates **less visual noise, stronger hierarchy, clearer information, and more deliberate interaction**, then document any new reusable rule in this file.

## 25. Definition of Done

A UI change is complete only when:

- it uses canonical tokens and existing component patterns;
- it works at all validation widths;
- keyboard navigation and focus states work;
- the mobile menu supports `Escape`, outside click, route close, and focus return;
- text remains readable at 200% zoom;
- reduced-motion behavior is verified;
- the active locale is internally consistent;
- images have correct sizing and alternative text;
- required-image failure preserves project comprehension and optional media leaves no empty controls;
- the hero portrait does not obscure the heading, status, supporting copy, or CTA;
- Indonesian string expansion does not clip or truncate essential content;
- primary content and navigation links remain readable without JavaScript;
- no unintended horizontal overflow exists;
- no unrelated visual drift was introduced;
- content claims are grounded in real evidence;
- visual review confirms alignment, spacing, hierarchy, and overflow.
- final homepage review compares desktop `1280px` and mobile `390px` against the approved Stitch references for region heights, container edges, hero baselines, portrait scale and crop, blue-panel dimensions, badge positions, card proportions, experience rail, capability dimensions, technology density, contact band, and footer placement;
- any reference deviation caused by approved content length, accessibility, localization, responsive behavior, or media rights is recorded and accepted explicitly.

This system should evolve deliberately. New rules belong here only when they solve a repeated need; one-off exceptions should remain rare and explicitly justified.
