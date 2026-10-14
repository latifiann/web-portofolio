---
product: latifian.dev
document: content-specification
version: 1.10.2
status: canonical
last_updated: 2026-10-14
owner: Latifian Iman
default_locale: en
supported_locales:
  - en
  - id
---

# Latifian.dev Content Specification

This document defines editorial ownership, factual boundaries, approved global copy, terminology, and content-review rules for `latifian.dev`.

`PRODUCTS.md` owns product scope and audience. `DESIGN.md` owns visual presentation. `ARCHITECTURE.md` owns rendering, content schemas, and build validation. This file owns voice, terminology, approved global copy, attribution rules, and publication decisions. Executable strings belong in `content/site/*.yaml`; project facts and narratives belong under `content/projects/<slug>/`.

## 1. Content Authority

Use sources according to their domain of authority:

| Domain | Source of truth |
|---|---|
| Product scope, positioning, and CTA hierarchy | `docs/PRODUCTS.md` |
| Visual presentation and interaction | `docs/DESIGN.md` |
| Content file ownership and validation | `docs/ARCHITECTURE.md` |
| Voice, terminology, and approved global copy | This document |
| Personal history and experience | Final public section of `cv-latifianiman-master.md` |
| Project technical facts | Approved source code, tests, project documentation, and evidence |
| Publication decision | Explicit owner approval |
| Legacy portfolio | Comparison source only |
| Google Stitch reference | Presentation reference only; not authority for copy, facts, links, attribution, or media rights |
| Draft notes, internal paths, and private evidence | Internal only |

The legacy portfolio and CV may guide research but do not independently prove a repeated claim. Do not turn missing evidence into production copy.

Text, metrics, names, links, badges, project claims, and media visible in a design reference remain unapproved until independently supported by this document or a canonical project source.

## 2. Verification States

| State | Meaning |
|---|---|
| `verified` | Supported by a primary artifact or public source |
| `owner-approved` | Confirmed directly by Latifian |
| `approved-with-qualification` | Publishable only with stated wording boundary |
| `pending` | Not ready for production copy |
| `internal-only` | Useful for research but excluded from public artifacts |
| `prohibited` | Must not appear in public content |
| `stale` | Requires confirmation before release |

No component, generator, or writer may convert `pending`, `internal-only`, or `prohibited` information into a public claim.

## 3. Voice and Attribution

### Voice

- Use first person for homepage copy and reflection.
- Use active, concrete, evidence-led prose.
- Keep homepage paragraphs to two or three short sentences.
- Use sentence case.
- Explain product context, contribution, decision, and result before listing tools.
- Preserve professional titles in English in both locales.
- Avoid buzzwords, inflated seniority, and unsupported metrics.

### Attribution

Use personal and team subjects precisely:

- `I built`, `I developed`, and `I implemented` require clear individual ownership.
- `I contributed` is the default wording for shared team work.
- `I integrated` fits an API, SDK, or system boundary personally handled.
- `I designed` requires a documented design decision or artifact.
- `I led` requires explicit leadership evidence.
- Use `the team` for shared product outcomes, publication, and awards.

Do not call academic work a production system, describe design intent as measured impact, or infer current maintenance from a public listing.

## 4. Identity and Positioning

| Key | Approved value | State |
|---|---|---|
| `site.identity.fullName` | Latifian Iman | `verified` |
| `site.positioning.primaryRole` | Software Developer | `owner-approved` |
| `site.positioning.primarySpecialization` | Mobile Engineering | `owner-approved` |
| `site.identity.locality` | Surabaya, Indonesia | `owner-approved` |
| `site.origin` | https://latifian.dev | `owner-approved` |

Supporting capability signals are frontend engineering, REST API and backend integration, product-oriented engineering, database integration, software quality assurance, UI/UX awareness, and team collaboration. They must be supported by project or experience evidence.

Do not use `Mobile Developer` as the primary hero or metadata title. It remains valid as an approved project and internship role title.

## 5. Availability and Contact

### Availability

| Key | English | Indonesian | State |
|---|---|---|---|
| `site.availability.state` | Open to opportunities | Terbuka untuk peluang | `owner-approved` |

Availability includes employment opportunities, freelance or project work, and professional collaboration. It is not a real-time presence indicator. Review it before every production release; hide the badge when it has not been confirmed for that release.

### Public channels

| Key | Value | State |
|---|---|---|
| `site.contact.email` | `latifian.iman44@gmail.com` | `owner-approved` |
| `site.profiles.linkedin` | `https://www.linkedin.com/in/latifian-iman` | `owner-approved` |
| `site.profiles.github` | `https://github.com/latifiann` | `owner-approved` |
| `site.profiles.instagram` | `https://www.instagram.com/latifiann` | `owner-approved` |

Email is the primary direct-contact channel. LinkedIn, GitHub, and Instagram are supporting channels.

### Privacy

Public content may include full name, professional role, Surabaya, Indonesia, approved email, LinkedIn, GitHub, Instagram, approved resume, and approved project links.

The following are prohibited from public site content unless a future explicit decision changes this contract:

- phone number;
- street address;
- credentials, secrets, and private repository URLs;
- internal GitLab URLs;
- local filesystem paths;
- draft articles and internal evidence notes;
- unapproved screenshots and media;
- confidential employer or academic data.

## 6. Localization Contract

English is the default locale. Indonesian is a complete equivalent locale, not a partial translation layer.

- Every published key exists in both locales.
- Both locales preserve factual meaning and attribution boundaries.
- Brand, company, project, library, and technology names remain unchanged.
- Professional role titles remain English: `Software Developer`, `Mobile Developer`, and `Backend Developer`.
- Missing translated content for a published page blocks production.
- English-only content is a local draft state only.

## 7. UI Glossary

| English | Indonesian |
|---|---|
| Home | Beranda |
| About | Tentang |
| Projects | Proyek |
| Contact | Kontak |
| Selected Work | Karya Pilihan |
| Experience | Pengalaman |
| Capabilities | Keahlian |
| View selected work | Lihat karya pilihan |
| View case study | Lihat studi kasus |
| Contact me | Hubungi saya |
| Get in touch | Hubungi saya |
| View resume | Lihat CV |
| Email me | Kirim email |
| Open LinkedIn | Buka LinkedIn |
| Open GitHub | Buka GitHub |
| Skip to content | Lewati ke konten utama |
| Open menu | Buka menu |
| Close menu | Tutup menu |
| Theme switcher | Pengubah tema |
| Theme switcher is not available yet. | Pengubah tema belum tersedia. |
| Previous project | Proyek sebelumnya |
| Next project | Proyek berikutnya |
| Back to projects | Kembali ke proyek |

Preferred Indonesian technical terms include `tugas`, `pengingat`, `tenggat`, `pengujian manual`, `pemulihan sesi`, and `penyimpanan token yang aman`. Keep BLoC, Dio, REST API, SSE, Google Maps, Flutter, Clean Architecture, and BuildWithAngga unchanged.

## 8. CTA Hierarchy

| Context | English | Indonesian | Target |
|---|---|---|---|
| Header | Get in touch | Hubungi saya | `#contact` |
| Homepage hero | View resume | Lihat CV | Public resume asset |
| Homepage contact | Email me | Kirim email | `mailto:` |
| Homepage contact | View resume | Lihat CV | Public resume asset |
| Project | View case study | Lihat studi kasus | Project route |
| Resume | View resume | Lihat CV | Public resume asset |
| Email | Email me | Kirim email | `mailto:` |

Do not introduce a server-backed contact form in public v1.

### Theme-preview feedback

The approved theme-preview toast is non-blocking and does not claim that a theme changed.

| Locale | Accessible button label | Toast text |
|---|---|---|
| English | Theme switcher | Theme switcher is not available yet. |
| Indonesian | Pengubah tema | Pengubah tema belum tersedia. |

## 9. Approved Homepage Copy

The copy below is `approved-with-qualification`: it is approved as the source for future locale YAML files, but remains editable through normal editorial review. It is not executable application data. Structured content may contain only facts and copy marked `verified`, `owner-approved`, or `approved-with-qualification`; `pending`, `internal-only`, and `prohibited` material remains outside production content.

### English

```text
Hero greeting: Hi, I'm Latifian.
Role: Software Developer
Supporting statement: Passionate about creating intuitive digital experiences and reliable software systems that connect people with meaningful value.
Availability: Open to opportunities
Hero focus label: Building across
Hero focus value: Mobile · Frontend · APIs
Hero CTA: View resume

Engineering eyebrow: Hello!
Engineering statement: My focus is on blending clear strategy, thoughtful engineering, and product empathy to craft experiences that solve real problems.

Selected work introduction: Three projects showing how I contribute across mobile development, software architecture, backend APIs, and product delivery.

Experience introduction: Professional internship experience and applied-informatics education that shaped how I work across product and engineering teams.

Capabilities introduction: Capabilities grounded in project and internship work, grouped by engineering function rather than tool count.

Contact heading: Let's build something useful.
Contact body: I'm open to employment opportunities, freelance projects, and professional collaboration. Email is the most direct way to start a conversation.
```

### Indonesian

```text
Hero greeting: Halo, saya Latifian.
Role: Software Developer
Supporting statement: Bersemangat membangun digital experience yang intuitif dan software system yang andal untuk memberikan manfaat nyata bagi pengguna.
Availability: Terbuka untuk peluang
Hero focus label: Membangun lintas bidang
Hero focus value: Mobile · Frontend · API
Hero CTA: Lihat CV

Engineering eyebrow: Halo!
Engineering statement: Fokus saya adalah memadukan strategi yang jelas, engineering yang matang, dan empati terhadap produk untuk menciptakan experience yang menyelesaikan masalah nyata.

Selected work introduction: Tiga proyek yang menunjukkan kontribusi saya dalam pengembangan mobile, arsitektur perangkat lunak, backend API, dan delivery produk.

Experience introduction: Pengalaman internship profesional dan pendidikan informatika terapan yang membentuk cara saya bekerja dalam tim produk dan engineering.

Capabilities introduction: Kapabilitas yang didukung pengalaman proyek dan internship, dikelompokkan berdasarkan fungsi engineering, bukan jumlah tools.

Contact heading: Mari membangun sesuatu yang bermanfaat.
Contact body: Saya terbuka untuk peluang kerja, proyek freelance, dan kolaborasi profesional. Email adalah cara paling langsung untuk memulai percakapan.
```

## 10. Homepage Metadata

| Locale | Title | Description |
|---|---|---|
| English | `Latifian Iman | Software Developer` | `Portfolio of Latifian Iman, a Software Developer focused on mobile engineering, frontend development, API integration, and software quality.` |
| Indonesian | `Latifian Iman | Software Developer` | `Portofolio Latifian Iman, Software Developer yang berfokus pada mobile engineering, pengembangan frontend, integrasi API, dan kualitas perangkat lunak.` |

Project-specific metadata is not approved until its local project facts and narratives are complete.

## 11. Experience and Education

Homepage experience contains only two internships, each with at most three contribution bullets:

| ID | Role | Organization | Period | State |
|---|---|---|---|---|
| `pt-piramida-mobile-developer-intern-2025` | Mobile Developer Intern | PT Piramida Teknologi Informasi | Jul 2025-Dec 2025 | `verified` |
| `mitra-informatika-mobile-developer-intern-2025` | Mobile Developer Intern | Mitra Informatika | Jan 2025-Jun 2025 | `verified` |

Homepage periods are display ranges in month/year form. Precise day-level dates remain available in the CV source when needed.

Education appears as a subsection inside Experience:

```text
Sarjana Terapan (D4) Teknik Informatika
Politeknik Elektronika Negeri Surabaya
2021-2026
```

GPA, PEPT score, certifications, organization experience, secondary-school education, and complete contribution history remain resume-only.

### Homepage experience copy

The following English copy is approved for the local Phase 6 homepage draft. It is derived from the owner CV source and remains subject to normal editorial review before publication.

#### PT Piramida Teknologi Informasi

Context: `Mooda App · Four-person cross-functional team`

Description: `Flutter ride-hailing prototype for Mooda App, built with a four-person team, covering authentication, booking, ratings, profiles, and trip history.`

1. Built the Flutter prototype running authentication, booking, ratings, profiles, and trip history.
2. Integrated the team backend REST APIs and real-time trip updates with Dio and Socket.IO.
3. Connected Google Maps, Riverpod, GoRouter, and Hive while manually testing customer and driver flows on Android.

Supporting labels: `Flutter`, `Riverpod`, `Socket.IO`, `Google Maps`, `Figma`.

#### Mitra Informatika

Context: `NKRI · Six-person cross-functional team`

Description: `Flutter real-time communication modules for NKRI, built with a six-person team, covering messaging, presence, WebRTC calls, search, and pagination.`

1. Contributed to Flutter real-time communication modules with Riverpod, Isar, Dio, and AutoRoute.
2. Helped migrate communication from Socket.IO to WebSocket with reconnect handling and user activity status.
3. Built WebRTC call prototypes and message search, filtering, and chat-room pagination flows.

Supporting labels: `Flutter`, `WebSocket`, `WebRTC`, `Riverpod`, `Isar`.

The education entry mirrors the experience layout, but only the program, institution, and period are verified:

```text
Title: Sarjana Terapan (D4) Teknik Informatika
Organization: Politeknik Elektronika Negeri Surabaya
Period: 2021-2026
```

Education description, contributions, and supporting labels remain local placeholders pending owner review; they are not approved public content and must be replaced before release.

## 12. Capability Taxonomy

Engineering-statement badges are concise signals:

1. Mobile Development
2. Frontend Development
3. Backend & REST API
4. Real-time Integration
5. Software Quality Assurance
6. Team Collaboration

Capability cards retain the canonical design taxonomy:

1. Frontend Engineering
2. Backend & REST API
3. Mobile Development
4. Databases
5. Software Quality Assurance
6. Project & Collaboration

Badges and cards have different purposes. Cards must reference real project or internship evidence; they are not proficiency ratings or logo walls.

### Homepage capability copy

| Capability | Description | Supporting labels |
|---|---|---|
| Frontend Engineering | Build structured interfaces with React, JavaScript, and Tailwind CSS. | `React`, `JavaScript`, `Tailwind CSS` |
| Backend & REST API | Integrate and develop REST API boundaries with validation and clear error handling. | `Node.js`, `Express`, `REST API`, `JWT` |
| Mobile Development | Build Flutter applications with state management, navigation, and platform integrations. | `Flutter`, `Dart`, `Riverpod`, `BLoC` |
| Databases | Work with relational and document data models used by project backends. | `SQL`, `PostgreSQL`, `MongoDB`, `Mongoose` |
| Software Quality Assurance | Use manual and automated testing to check product behavior and architecture rules. | `Manual testing`, `Automated testing`, `Selenium`, `Katalon` |
| Project & Collaboration | Work through shared Git workflows, Figma handoff, and Agile delivery. | `Git`, `GitHub`, `Figma`, `Agile` |

Technology strip: `Flutter`, `Dart`, `React`, `TypeScript`, `JavaScript`, `HTML5`, `CSS3`, `Tailwind CSS`, `Node.js`, `Express`, `Java`, `PostgreSQL`, `MySQL`, `MongoDB`, `Docker`, `Git`, `GitHub`, `Figma`.

## 13. Resume Policy

Approved source asset: `latifian-iman-cv-ats.pdf`.

Use `View resume` in English and `Lihat CV` in Indonesian. Import the PDF into a versioned public asset path during the media/content implementation batch. Do not use a local filesystem path in application code or production output. The resume link becomes active only after the copied asset exists in the production build.

The resume source may contain contact details that are not permitted elsewhere on the website. Its existence does not permit copying those details into webpage content.

## 14. Project Registry

| Slug | Card label | Case-study heading | Category | Timeline | Lifecycle | Role | Repository |
|---|---|---|---|---|---|---|---|
| `fms-create` | FMS-CREATE | FMS-CREATE | Fleet management | Dec 2025-Jul 2026 | Completed / Selesai | Mobile Developer | Private |
| `remi-mobile` | ReMi Mobile | ReMi - Remind Me | Academic mobile productivity | 2024 | Completed, unmaintained / Selesai, tidak dipelihara | Mobile Developer | Private team repository |
| `semina` | Semina | Semina | Event-management backend API | Aug-Sep 2026 | Ongoing learning project / Proyek pembelajaran aktif | Backend Developer | Public |

All three need complete English and Indonesian project content before `publication: published`.

### Project card context labels

Landing cards show a short context label identifying the project's company or type. Approved values:

| Project | Context (EN) | Context (origin) |
|---|---|---|
| FMS-CREATE | Final academic project | Tugas akhir perkuliahan |
| ReMi Mobile | Agile Teknik | Agile Teknik |
| Semina | Personal project | Proyek pribadi |

In-progress or project-status wording (for example `ongoing`) is internal card metadata, not public card copy. It may be stored in the content model but must not render on landing cards.

### Project preview type labels

Preview images carry a short neutral badge identifying the project type as shown on the card. Approved values:

| Project | Preview label |
|---|---|
| FMS-CREATE | Mobile App |
| ReMi Mobile | Mobile App |
| Semina | Backend API |

### Landing card technology badges

| Project | Approved stack badges |
|---|---|
| FMS-CREATE | Flutter, Modular architecture, REST API, SSE, Google Maps |
| ReMi Mobile | Flutter, BLoC, REST API |
| Semina | MongoDB, Express, React, Node.js |

Landing cards show at most three technology badges plus an overflow count (for example `Flutter`, `Modular architecture`, `REST API`, `+2`). The full stack remains in the project record and appears on the detail page. Landing cards do not render a media qualification note; contribution and media boundaries stay preserved through visible card copy, role, title, and alternative text, and full qualification belongs to the detail case study.

### Approved project card copy

| Project | English | Indonesian |
|---|---|---|
| FMS-CREATE | A passenger-side Flutter application for electric-vehicle fleet operations, built with modular architecture, REST APIs, SSE, and Google Maps. | Aplikasi Flutter sisi penumpang untuk operasional armada kendaraan listrik, dibangun dengan arsitektur modular, REST API, SSE, dan Google Maps. |
| ReMi Mobile | An academic task and reminder application for students, delivered as a mobile project and published by the team on Google Play. | Aplikasi pengelolaan tugas dan pengingat untuk mahasiswa, dikembangkan sebagai proyek akademik mobile dan dipublikasikan oleh tim di Google Play. |
| Semina | A backend learning project for event management and ticket checkout, extended from BuildWithAngga material. | Proyek pembelajaran backend untuk manajemen acara dan checkout tiket, berangkat dari materi BuildWithAngga. |

## 15. FMS-CREATE Content Boundary

### Approved facts

- It is a completed final project.
- Public role: Mobile Developer.
- I developed the passenger-side application individually within a collaborative FMS ecosystem.
- The mobile application uses Flutter, modular architecture, REST APIs, SSE, Google Maps, session restoration, and secure storage.
- Manual and automated testing informed implementation.
- The Android build is internal; the repository is private and no public demo is available.

### Approved-with-qualification

Existing hero media may be used with attribution. Any dashboard shown in the visual represents team or ecosystem context, not personal frontend ownership. Landing cards render the media without a visible qualification note; the card copy (`passenger-side Flutter application`) and alternative text preserve the boundary, and full qualification lives on the detail page. Testing remains qualitative; do not publish audit counts or dated architecture-test metrics.

### Prohibited claims

- I built the entire FMS platform alone.
- Public app-store release.
- Production-ready fleet system.
- Proven ETA accuracy, long-duration SSE reliability, or complete offline resilience.
- Dynamic plugin architecture.
- Ownership of the web dashboard.

### Pending narrative inputs

- reconciled project timeline phases;
- team role breakdown;
- one concrete technical challenge and trade-off;
- one public limitation;
- reflection and next step;
- final EN/ID hero caption and alternative text.

## 16. ReMi - Remind Me Content Boundary

### Approved facts

- `ReMi - Remind Me` is the case-study heading; `ReMi Mobile` is the card label.
- ReMi Mobile and ReMi Web are separate academic deliverables.
- Lifecycle: completed and unmaintained.
- Public role: Mobile Developer.
- The mobile repository is private and team-owned.
- The team published the mobile application on Google Play.
- My approved contribution scope includes task flow, BLoC-related work, Flutter UI screens, REST API integration, and the coin-and-theme gamification flow.
- The following are team awards, not individual awards: `Top 1 Best Mobile`, `Top 3 Best UX`, and `Juara 3 Best Team`.

### Media qualification

The existing ReMi image is used to distinguish the separate web deliverable. Landing cards render the media without a visible qualification note; card copy (`mobile project`), role, title, and alternative text preserve that the work covers ReMi Mobile, and full qualification lives on the detail page:

> The visual presents the broader ReMi product context. The laptop interface belongs to the separate ReMi Web deliverable; this case study focuses on my ReMi Mobile contribution.

### Prohibited claims

- Sole ownership of ReMi.
- iOS availability inferred from device mockups.
- Gamification improved user consistency or productivity.
- Awards were independently verified by the PENS event article.
- Active maintenance inferred from the Google Play listing.
- Automated testing without direct evidence.
- Personal ownership of every architecture decision.

### Pending narrative inputs

- exact development months;
- eight-person team role breakdown;
- problem-discovery evidence;
- rationale for BLoC and architecture choices;
- concrete challenge, trade-off, and manual-test scope;
- current backend functionality;
- final bilingual media caption and alternative text.

## 17. Semina Content Boundary

### Approved facts

- Public scope is backend API only.
- Lifecycle: ongoing learning project.
- Public role: Backend Developer.
- Public repository: `https://github.com/latifiann/backend-semina`.
- There is no public deployment and the project is not production-ready.
- Scope includes participant authentication, CMS-facing APIs, transactional checkout, email workflows, uploads, and centralized error handling.
- The project is derived from BuildWithAngga learning material.

### Mandatory attribution

```text
EN: This learning project extends backend material from BuildWithAngga.
ID: Proyek pembelajaran ini dikembangkan dari materi backend BuildWithAngga.
```

The class title and URL remain pending and must be added when found.

### Media rule

`semina.webp` is owner-approved for publication with qualification. It represents event-platform context from authorized learning material; it is not evidence of personal frontend authorship. The Semina case study remains limited to backend API work. Landing cards render the media without a visible qualification note; card copy (`backend learning project ... BuildWithAngga material`), role (`Backend Developer`), and alternative text preserve the boundary, and full qualification lives on the detail page.

Detail-page caption:

> EN: The visual represents the event-platform context from authorized learning material; this case study focuses on my backend API work, not frontend authorship.
>
> ID: Visual ini merepresentasikan konteks platform acara dari materi pembelajaran yang penggunaannya telah diizinkan; studi kasus ini berfokus pada pekerjaan backend API saya, bukan karya frontend saya.

Approved alternative text:

> EN: Dark event-platform landing page promoting technology events with a green Browse Now button.
>
> ID: Halaman utama platform acara bertema gelap yang mempromosikan acara teknologi dengan tombol hijau Browse Now.

### Prohibited claims

- Full event-platform ownership.
- Complete CMS product.
- Participant event search.
- Production-ready API or public deployment.
- Automated test suite.
- Payment gateway or online payment processing.
- Proven overselling prevention.
- Secure OTP controls or complete organizer isolation.
- All CMS endpoints authenticated.
- Frontend-template authorship.

### Pending narrative inputs

- BuildWithAngga class title and URL;
- starter-code boundary;
- source commit represented by the case study;
- publication-safe media;
- concrete challenge, trade-off, verified outcome, reflection, and next step.

## 18. Media and Attribution Policy

| Asset | State | Publication rule |
|---|---|---|
| Hero portrait | `owner-approved` | Import through media pipeline; never expose source path |
| `fms-create.webp` | `approved-with-qualification` | Attribute dashboard as team/ecosystem context |
| `remi-mobile.webp` | `approved-with-qualification` | Include approved cross-deliverable caption |
| `semina.webp` | `owner-approved-with-qualification` | Use approved caption and alt text; never imply frontend authorship or full platform ownership |
| ReMi YouTube video | `pending` | Prefer external link; never autoplay |
| Google Play screenshots | `pending` | Require reuse confirmation |
| Private-source screenshots | `pending` | Require redaction and explicit approval |

The Google Stitch homepage references are design-only artifacts. They must not be published as portfolio media, reused as project screenshots, or treated as approval for generated text, metrics, logos, portraits, links, or claims.

Every meaningful image needs locale-specific alternative text. Captions establish attribution or context; alternative text explains visible content. Do not mechanically duplicate them.

## 19. SEO and Accessibility Copy

Structured production content must provide approved values for:

```text
seo.home.title
seo.home.description
seo.home.ogTitle
seo.home.ogDescription
seo.home.ogImage
seo.home.ogImageAlt
accessibility.skipToContent
accessibility.openMenu
accessibility.closeMenu
accessibility.languageSwitcher
accessibility.externalLinkIndicator
accessibility.portraitAlt
accessibility.projectImageAlt
```

Do not write project SEO descriptions or image alternative text until each project narrative and media record are complete.

## 20. Freshness and Release Review

Review before every production release:

- availability;
- email, LinkedIn, and GitHub;
- resume asset;
- Google Play and Semina repository URLs;
- project lifecycle status;
- media rights and captions;
- public-demo availability;
- English and Indonesian completeness.

Google Play rating, review count, and download count are omitted by default. If later used, record an observation date and verify them again at release time.

## 21. Open Content Dependencies

Before public v1, resolve or deliberately omit:

- current resume asset import;
- full EN/ID project narratives for FMS-CREATE, ReMi Mobile, and Semina;
- project-specific metadata and alternative text;
- social-sharing images;
- FMS timeline, challenge, trade-off, limitation, and reflection;
- ReMi timeline, team roles, technical rationale, testing, and current backend state;
- Semina course title, source boundary, commit baseline, media, challenge, trade-off, outcome, and reflection;
- font files and required license notices.

## 22. AI Editorial Contract

An AI agent working on public content MUST:

- follow the source-authority and verification rules in this document;
- preserve `Software Developer` as the primary role;
- keep personal contribution separate from team outcome;
- preserve English and Indonesian factual equivalence;
- use approved terms and CTA hierarchy;
- omit or label pending facts rather than inventing them;
- keep prohibited content out of production files and artifacts.

An AI agent MUST NOT:

- publish phone numbers, private URLs, paths, credentials, or internal evidence;
- turn current design recommendations into personal facts without approval;
- present Semina as a production platform or full frontend product;
- overstate FMS-CREATE ownership or testing evidence;
- infer ReMi maintenance, iOS support, user impact, or individual awards;
- remove mandatory BuildWithAngga attribution from Semina;
- reuse `semina.webp` without its approved caption, alternative text, BuildWithAngga attribution, and backend-only framing;
- write incomplete locale content as published production copy.
