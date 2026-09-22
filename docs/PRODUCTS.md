---
product: latifian.dev
document: product-specification
version: 1.1.1
status: canonical
last_updated: 2026-09-21
owner: Latifian Iman
primary_positioning: Software Developer
primary_goal: Balanced opportunities
initial_scope: Complete bilingual homepage and three project case studies
default_locale: en
supported_locales:
  - en
  - id
---

# Latifian.dev Product Specification

This document defines what `latifian.dev` is, who it serves, what it must accomplish, and what belongs in its initial release. It is the canonical product reference for people and AI agents working on the portfolio.

Visual decisions belong in `DESIGN.md`. Copy belongs in `CONTENT.md`. Verified project facts and narratives belong under `content/projects/<slug>/`. Technical implementation decisions belong in `ARCHITECTURE.md`.

The approved Google Stitch reference guides homepage presentation only. It cannot remove required product evidence, change project scope, or replace approved copy, facts, and media.

## 1. Product Summary

`latifian.dev` is Latifian Iman's professional software-development portfolio. It presents his identity, engineering capabilities, professional experience, and selected work through a concise homepage and evidence-led project case studies.

The portfolio has two equally important business outcomes:

1. help recruiters and engineering teams evaluate Latifian for employment opportunities;
2. help prospective clients and collaborators decide whether to start a professional conversation.

The site is not merely a personal gallery. It is a structured body of evidence showing how Latifian approaches software problems, contributes to products, makes technical decisions, and communicates his work.

## 2. Product Vision

Create a portfolio that makes Latifian's professional value understandable within seconds and credible through deeper inspection.

The product should leave visitors with this impression:

> Latifian is a thoughtful software developer who can build reliable mobile and web products, work across system boundaries, and communicate engineering decisions clearly.

## 3. Positioning

### Primary positioning

**Software Developer**

This is the public-facing role used in the hero and high-level metadata. It gives the portfolio enough breadth to represent mobile, frontend, backend integration, quality assurance, and cross-functional delivery.

### Strongest specialization signal

**Mobile Engineering**, particularly Flutter-based product development.

Mobile engineering should remain the strongest evidence in the portfolio, but it must not make the site imply that Latifian can only work on mobile interfaces.

### Supporting capability signals

- Frontend engineering
- REST API and backend integration
- Product-oriented engineering
- Database integration
- Software quality assurance
- UI/UX awareness
- Team and cross-functional collaboration

### Positioning boundaries

The portfolio must not position Latifian as a senior, staff, principal, architect, or specialist in a field unless the available evidence justifies it. It must distinguish professional production work, academic work, prototypes, freelance work, and personal projects accurately.

## 4. Product Goals

### G1 — Immediate professional clarity

Visitors should understand Latifian's name, role, general specialization, and type of work from the first viewport.

### G2 — Evidence-based credibility

Selected projects and experience should demonstrate contributions, reasoning, technologies, constraints, and outcomes rather than merely displaying screenshots and technology logos.

### G3 — Efficient evaluation

Recruiters, hiring managers, engineers, clients, and collaborators should be able to find relevant evidence without reading the entire site.

### G4 — Low-friction contact

Visitors should be able to reach Latifian through an appropriate professional channel without completing a complex form or navigating through multiple pages.

### G5 — Consistent personal identity

The website should establish a reusable professional identity that can align with Latifian's résumé, LinkedIn, GitHub, and future public work.

### G6 — Demonstrate frontend quality indirectly

The portfolio itself should demonstrate responsive design, accessibility, performance awareness, information architecture, and interaction restraint without explicitly claiming those qualities on every section.

## 5. Non-goals

The initial release is not intended to be:

- a social network or community platform;
- a complete résumé converted into a webpage;
- a comprehensive archive of every project Latifian has touched;
- a blogging or publishing platform;
- a CMS-driven marketing site;
- an authenticated user application;
- an online course or tutorial platform;
- a public analytics dashboard;
- a playground for heavy 3D, WebGL, or experimental scrolling effects;
- a terminal-themed or hacker-themed developer website;
- a replacement for GitHub source repositories or formal project documentation.

The following are explicitly outside the first release unless separately approved:

- authentication and user accounts;
- admin dashboard;
- database-backed content management;
- comments and reactions;
- newsletter subscription;
- blog or article system;
- server-side contact form;
- complex content search;
- dark mode;
- automatic résumé generation;
- visitor personalization.

## 6. Target Audiences

### A1 — Recruiter or talent acquisition professional

**Needs**

- identify Latifian's role and experience quickly;
- understand his strongest technical areas;
- inspect employment and internship history;
- access a résumé and contact details;
- determine whether his profile matches an open role.

**Typical behavior**

- scans rather than reads linearly;
- spends limited time on the first visit;
- may use a mobile device or a narrow browser window;
- looks for recognizable evidence and concise language.

### A2 — Engineering hiring manager or technical reviewer

**Needs**

- understand Latifian's actual contribution to projects;
- evaluate technical judgment and trade-offs;
- distinguish implementation ownership from team outcomes;
- inspect technologies, architecture, constraints, and project maturity;
- find GitHub or other technical evidence where available.

**Typical behavior**

- opens one or two relevant case studies;
- looks for concrete technical details;
- notices inconsistencies or inflated claims;
- values clarity more than decorative presentation.

### A3 — Prospective client or project collaborator

**Needs**

- understand what kinds of products Latifian can help build;
- see evidence of delivery and collaboration;
- determine whether his skills fit the project;
- contact him easily to discuss context, availability, and scope.

**Typical behavior**

- evaluates outcomes and product relevance before implementation detail;
- may not recognize every technology term;
- benefits from plain-language project summaries.

### A4 — Peer developer or professional connection

**Needs**

- understand Latifian's interests and engineering direction;
- inspect projects, tools, and technical decisions;
- find GitHub, LinkedIn, or a direct contact route;
- identify possible collaboration or knowledge-sharing opportunities.

## 7. Audience Priority

The product serves employment and collaboration goals in balance. This does not mean every element receives equal visual weight.

Use this content priority:

1. identity and professional positioning;
2. selected work and contribution evidence;
3. professional experience;
4. capabilities and technology context;
5. contact actions for employment, freelance, or collaboration;
6. supporting social and résumé links.

The site must not split into separate recruiter and client experiences in the first release. A single coherent narrative should serve both.

### Public v1 selected work

Public v1 contains exactly three selected projects, in this homepage order:

1. FMS-CREATE;
2. ReMi Mobile;
3. Semina.

Every selected-work card in public v1 must link to a complete case study. Card-only projects and a fourth public project are outside the v1 scope. Additional projects may be prepared as drafts but must not appear in production navigation, routes, metadata, or generated artifacts.

## 8. Core Value Proposition

### For recruiters and hiring teams

`latifian.dev` provides a fast, credible overview of Latifian's software-development capabilities and links high-level experience to deeper project evidence.

### For clients and collaborators

`latifian.dev` demonstrates the kinds of products and technical problems Latifian can contribute to, while providing a direct path to start a conversation.

### Product promise

Every significant claim should be supported by a project, experience, artifact, or clearly stated area of ongoing learning.

## 9. Information Architecture

The initial product contains two primary page types.

```text
Homepage
├── Hero
├── About / engineering statement
├── Selected work
├── Experience
├── Skills and capabilities
├── Technology ecosystem
├── Contact
└── Footer

Project case study
├── Project introduction
├── Project metadata
├── Main visual
├── Context and problem
├── Role and responsibilities
├── Constraints
├── Approach and technical decisions
├── Implementation highlights
├── Challenges and trade-offs
├── Outcome or current status
├── Reflection
└── Related work / next action
```

### Routes

Required conceptual routes:

```text
/
/projects/:slug
```

Locale routing strategy is a technical decision for `ARCHITECTURE.md`. The product requirement is that language state remains consistent during navigation.

The primary-navigation label `About` maps to the engineering-statement section. Public v1 does not add a separate long-form biography section.

### External destinations

The interface may link to:

- résumé;
- LinkedIn;
- GitHub;
- email;
- live product or demo, when publicly accessible;
- source repository, when public and appropriate.

External links must be clearly identified and must not imply that private or unavailable resources can be accessed.

## 10. Homepage Requirements

### 10.1 Hero

The hero must answer:

- Who is this?
- What does he do?
- What kind of software work does he focus on?
- What should the visitor do next?

Required content:

- Latifian Iman's name;
- `Software Developer` positioning;
- concise supporting statement;
- professional portrait or identity visual;
- availability status when accurate;
- route to selected work;
- route to contact.

Availability must never be displayed as active when it is outdated or unverified.

The verified public-v1 availability state is `Open to opportunities`. It is a maintained professional status, not a real-time presence indicator, and must be reviewed before release.

### 10.2 Engineering statement

This section briefly explains Latifian's approach to building software. It should connect product thinking, engineering quality, maintainability, and user experience without reading like a manifesto.

### 10.3 Selected work

Show only projects strong enough to support the positioning.

Each project preview must include:

- project name;
- category;
- concise problem or product description;
- Latifian's role;
- key technologies;
- year or period;
- representative visual;
- case-study link.

Public v1 must not display a selected-work card without a complete bilingual case study. Future releases may relax this rule only through an explicit product decision.

### 10.4 Experience

Show a concise professional timeline. The homepage is not expected to reproduce every résumé bullet.

Each entry includes:

- role;
- organization;
- period;
- concise context;
- two or three strongest contributions;
- relevant technologies.

### 10.5 Skills and capabilities

Capabilities should be grouped by engineering function, not displayed as an unstructured logo wall. Technology names support the capability narrative but do not replace it.

### 10.6 Contact

The section should welcome three types of conversation:

- employment opportunities;
- freelance or project work;
- professional collaboration.

Required channels:

- email;
- LinkedIn;
- GitHub.

A direct email action is preferred over a server-backed contact form in the first release.

## 11. Project Case Study Requirements

Each case study should help a reviewer understand both the product context and Latifian's contribution.

### Required fields

- project title;
- project type or category;
- status;
- year or timeline;
- short description;
- Latifian's role;
- team context when known;
- technology stack;
- problem or opportunity;
- responsibilities;
- implementation or approach;
- challenges or constraints;
- result, current status, or verified outcome;
- representative media.

### Recommended fields

- architecture overview;
- key technical decisions;
- trade-offs;
- testing or quality strategy;
- collaboration model;
- performance or reliability considerations;
- lessons learned;
- next steps.

### Evidence integrity

- Use only verifiable claims.
- Do not invent business impact, usage metrics, performance improvements, or team size.
- Clearly identify prototypes, academic work, internship work, freelance work, and production systems.
- Respect repository, client, employer, and academic confidentiality.
- If a result cannot be quantified, describe the verified functional outcome instead.
- Explain personal contribution separately from the overall team's work.

## 12. Primary User Journeys

### Journey A — Recruiter screening

```text
Landing on homepage
→ understands identity and role
→ scans selected work and experience
→ checks skills
→ opens résumé, LinkedIn, or contact action
```

The visitor should reach a professional contact or résumé action directly from the homepage.

### Journey B — Technical evaluation

```text
Landing on homepage or shared case-study URL
→ identifies project relevance
→ opens case study
→ inspects role, constraints, and decisions
→ reviews outcome and related evidence
→ opens GitHub, another case study, or contact action
```

The case study must not require reading generic biography content before reaching technical evidence.

### Journey C — Client or collaborator inquiry

```text
Landing on homepage
→ understands capabilities
→ reviews relevant project
→ evaluates role and delivery context
→ returns to contact section
→ initiates email or LinkedIn conversation
```

### Journey D — Returning visitor

```text
Opens known project URL or homepage
→ navigates directly to desired evidence
→ accesses updated project or contact information
```

Navigation and URLs should remain stable enough for projects to be shared independently.

## 13. Calls to Action

### Primary homepage CTA

**View selected work**

This supports every major audience and leads to evidence before asking for contact.

### Secondary homepage CTA

**Contact me** or a more natural equivalent defined in `CONTENT.md`.

### Supporting actions

- View case study
- View résumé
- Email me
- Open LinkedIn
- Open GitHub
- View live product or repository when available

Avoid placing several equally prominent buttons in the same viewport. Visual priority must remain clear.

### Theme-preview action

The homepage header includes an icon-only theme-preview button to match the approved visual reference. In public v1 it does not change the light-only theme. Activating it displays an approved, non-blocking unavailable-feature toast. Dark mode remains outside initial-release scope.

## 14. Localization

The product supports English and Indonesian.

### Requirements

- English is the default locale.
- The selected locale applies to the entire interface.
- A visitor must not encounter an accidental mixture of English and Indonesian.
- Project names, employer names, brand names, and technology names remain unchanged.
- Both locales must preserve the same factual meaning.
- Layout must support longer Indonesian translations without truncating essential content.
- Shared project URLs should preserve or resolve locale predictably.
- Every published project must contain complete English and Indonesian content.
- English-only work is an internal draft state and must not enter public routes, selected work, metadata, the sitemap, or the production artifact.
- Missing translated content for a published project is a build failure, not a runtime fallback.

Translation is not permission to rewrite or exaggerate project claims.

## 15. Functional Requirements

### Required for the initial release

- responsive homepage;
- reusable project-card presentation;
- dynamic or reusable project case-study template;
- working navigation to homepage sections;
- stable case-study URLs;
- EN/ID locale switching;
- persistent locale selection where technically practical;
- external links for professional profiles and contact;
- résumé link when a current résumé is available;
- accessible keyboard navigation;
- reduced-motion support;
- visible focus states;
- appropriate page metadata;
- social-sharing metadata for homepage and project pages;
- custom not-found experience;
- graceful handling of missing project media or optional links.

### Optional after the initial release

- project filtering;
- lightweight privacy-conscious analytics;
- downloadable project summary;
- writing or notes section;
- dark mode;
- richer architecture diagrams;
- additional project index page;
- contact form with validation and abuse protection.

Optional features must not delay the quality of the core homepage and case studies.

## 16. Content Requirements

The product depends on accurate, maintained content.

Required canonical content sources:

```text
CONTENT.md
content/site/site.yaml
content/site/en.yaml
content/site/id.yaml
content/experience.yaml
content/capabilities.yaml
content/projects/<slug>/project.yaml
content/projects/<slug>/en.md
content/projects/<slug>/id.md
content/projects/<slug>/media/
```

The content system should separate:

- global identity and contact information;
- navigation and interface labels;
- homepage copy;
- experience entries;
- capability groups;
- project facts and case-study narratives;
- localized strings.

No component should contain invented placeholder claims in a production build.

Draft content may be incomplete while it is developed locally. Published content must satisfy the complete bilingual production contract defined in `ARCHITECTURE.md`.

## 17. Trust and Privacy

- Publish only contact information Latifian intentionally makes public.
- Do not expose private phone numbers, addresses, credentials, internal URLs, or confidential documents.
- Do not publish private repository links as if visitors can open them.
- Avoid third-party trackers that collect more data than necessary.
- External embeds must not materially harm performance or privacy.
- Clearly label unavailable demos, private repositories, and ongoing work.
- Do not display a false real-time availability state.

## 18. Accessibility and Inclusive Use

Accessibility is a product requirement, not a polish phase.

The product must:

- work with keyboard-only navigation;
- provide visible focus indication;
- use semantic headings and landmarks;
- provide alternatives for meaningful images;
- preserve comprehension without animation;
- avoid color-only communication;
- maintain readable contrast and type size;
- tolerate browser zoom and text enlargement;
- use descriptive link text;
- keep language metadata accurate for each locale.

Detailed visual and interaction rules are defined in `DESIGN.md`.

## 19. Performance Expectations

The first viewport should prioritize identity and readable text over decorative assets.

Product expectations:

- no essential text waits for animation or large image downloads;
- hero media is optimized and does not cause major layout shift;
- below-the-fold project media loads progressively;
- interaction remains responsive on typical mobile hardware;
- third-party scripts are minimized;
- failed media does not make project information inaccessible;
- production builds avoid unnecessary JavaScript for static content.

Performance targets and verification commands belong in `ARCHITECTURE.md` and `QA.md`.

## 20. Search and Sharing Requirements

Each public page should provide:

- unique document title;
- concise meta description;
- canonical URL strategy;
- Open Graph title, description, and image;
- meaningful page heading;
- crawlable project summary;
- stable slug;
- appropriate structured data when justified.

Case-study pages should remain understandable when opened directly from search results, social media, or a shared link.

The canonical production origin is `https://latifian.dev`. The product requires HTTPS, stable URLs, direct route entry, and a graceful not-found experience. Hosting-provider selection, response headers, redirects, caching, and deployment workflows are technical decisions owned by `ARCHITECTURE.md`.

## 21. Success Criteria

The first release is successful when:

### Comprehension

- the first viewport clearly communicates name, role, specialization context, and next action;
- representative users can explain what Latifian does after a short scan;
- projects communicate Latifian's contribution, not only product appearance.

### Navigation

- selected work is reachable immediately from the hero or primary navigation;
- any featured case study is reachable within two intentional interactions from the homepage;
- contact, LinkedIn, GitHub, and résumé actions are easy to find;
- every case study provides a clear next step.

### Content integrity

- no mixed-language interface appears within one locale;
- no unverified claim or fabricated metric appears;
- project status and confidentiality are represented accurately;
- all public contact and profile links are current.

### Quality

- layouts work at the validation widths defined in `DESIGN.md`;
- keyboard navigation and focus states work;
- reduced-motion behavior works;
- no unintended horizontal overflow exists;
- project imagery has appropriate alternative text and dimensions;
- production build and quality checks pass.

### Business outcome

- a qualified visitor can understand whether Latifian may fit an employment, freelance, or collaboration opportunity;
- that visitor can initiate a professional conversation without unnecessary friction.

Success criteria describe the intended product outcome. They must not be reported as achieved metrics until they have actually been tested or measured.

## 22. Release Model and Scope

Public v1 is one complete bilingual release. The numbered milestones below are internal delivery increments, not separately publishable product versions. The existing public portfolio remains live until all three milestones are complete and the release quality gates pass.

### Milestone 1 — Foundation

- design tokens and typography;
- global layout and navigation;
- responsive homepage structure;
- real identity and contact content;
- initial EN/ID localization foundation;
- accessibility baseline;
- metadata baseline.

### Milestone 2 — Evidence

- exactly three selected project cards using verified content: FMS-CREATE, ReMi Mobile, and Semina;
- reusable case-study template;
- complete English and Indonesian case studies for all three selected projects;
- experience and capability content;
- résumé and professional-profile links.

### Milestone 3 — Quality

- responsive visual review;
- accessibility review;
- motion and reduced-motion review;
- image and font optimization;
- metadata and sharing previews;
- broken-link and content-integrity review;

These are internal product increments, not strict release dates or public releases. English-first implementation is allowed only as a local learning milestone. `IMPLEMENTATION_PLAN.md` owns task status and sequencing. Public v1 may replace the existing portfolio only after all milestones and release checks are complete.

## 23. Product Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Positioning becomes too broad | Visitors cannot identify a clear strength | Keep Software Developer as the role while using Mobile Engineering as the strongest specialization evidence |
| Portfolio becomes a visual gallery | Technical contribution remains unclear | Require role, context, decision, and outcome fields in project content |
| Homepage becomes a copied résumé | Scanning becomes slow and repetitive | Limit experience detail and link to the résumé for full history |
| Content is exaggerated by an AI agent | Professional credibility is damaged | Require canonical project sources and prohibit invented claims |
| English and Indonesian drift | Visitors receive inconsistent information | Require both locales for every published project and fail production builds on incomplete translations |
| Effects harm usability or performance | Core information becomes harder to access | Follow `DESIGN.md`, reduced-motion rules, and performance expectations |
| Too many audiences dilute the CTA | No obvious next action exists | Keep `View selected work` primary and professional contact secondary |
| Project content becomes stale | Availability, links, and status become misleading | Review content before releases and whenever professional status changes |

## 24. Product Decision Rules

When deciding whether to add a feature, ask:

1. Does it help a target visitor understand Latifian or evaluate his work?
2. Does it provide evidence unavailable in the current experience?
3. Can it be maintained accurately?
4. Does it preserve clarity, accessibility, and performance?
5. Is it more valuable than improving existing project content?

If the answer to the first two questions is no, the feature should usually not be added.

When uncertain, prioritize:

> clearer professional evidence, lower visitor effort, and more credible content.

## 25. Document Ownership and Change Control

This document owns product intent and scope. It does not own visual tokens, final copy, project evidence, or implementation details.

Changes requiring an update to this document include:

- changing the primary professional positioning;
- changing the balance between employment and client goals;
- adding a new primary audience;
- adding or removing a page type;
- introducing a major feature such as a blog, CMS, or contact backend;
- changing the default locale or localization scope;
- changing the primary conversion path;
- expanding the first-release non-goals;
- changing the three-project public-v1 set or its order;
- allowing a published project without both supported locales.

Small visual refinements belong in `DESIGN.md`. Copy edits belong in `CONTENT.md`. Technical choices belong in `ARCHITECTURE.md`.

## 26. AI Agent Product Constraints

An AI agent working on this product MUST:

- preserve `Software Developer` as the primary positioning unless explicitly instructed otherwise;
- keep employment, freelance, and collaboration opportunities supported without creating separate fragmented experiences;
- treat selected work as the primary proof of capability;
- use verified project sources before writing project content;
- distinguish personal contribution from team outcomes;
- preserve the homepage plus case-study scope;
- preserve the public-v1 project set and order: FMS-CREATE, ReMi Mobile, and Semina;
- make contact actions direct and professional;
- keep locale content complete and internally consistent;
- follow `DESIGN.md` for visual and interaction decisions;
- ask for missing factual information instead of inventing it.

An AI agent MUST NOT:

- add major product features solely because they are common in portfolio templates;
- turn the homepage into a full résumé dump;
- hide identity or work behind decorative interaction;
- create unsupported claims, metrics, testimonials, clients, or employment history;
- imply public access to private repositories or confidential work;
- introduce authentication, CMS, blog, or server-side contact functionality without an explicit scope change;
- change the primary CTA hierarchy without a product decision;
- mix English and Indonesian within one active locale;
- publish an English-only project or expose a draft through production routes, metadata, sitemap, or client bundles;
- treat optional future features as initial-release requirements.

## 27. Open Content Dependencies

The following information must be supplied or verified in subsequent documents before final production content is complete:

- current résumé asset import;
- approved English and Indonesian narratives for all three public-v1 projects;
- unresolved project-specific facts, attribution, dates, outcomes, and links listed in `CONTENT.md`;
- release-time verification for availability, public contact URLs, repository status, and live-demo availability;
- social-sharing image assets;
- approved project media, captions, locale-specific alternative text, and media-pipeline import for the approved portrait source;
- self-hosted font files and their required license notices.

These are content dependencies, not reasons to change the product direction defined here.
