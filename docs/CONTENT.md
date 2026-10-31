---
product: latifian.dev
document: content-specification
version: 1.10.24
status: canonical
last_updated: 2026-10-31
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
- Do not use semicolons to join independent clauses. Split the sentence or use a comma, because semicolon-heavy prose reads as generated copy rather than natural writing.

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
| View details | Lihat detail |
| Hide details | Sembunyikan detail |
| Swipe to see more projects | Geser untuk melihat proyek lainnya |
| Explore Related Projects | Jelajahi Proyek Terkait |
| Back to selected work | Kembali ke karya pilihan |

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

Homepage experience contains only two internships. Each entry carries three to five contribution bullets, and the counts do not have to match: Piramida uses five, Mitra uses four, and education uses four. The range exists so one bullet can hold one clear contribution group instead of packing several unrelated responsibilities together. It is not a target to fill.

Entries lead with the role, team context, and responsibility rather than with the product the team was building:

| ID | Role | Organization | Period | State |
|---|---|---|---|---|
| `pt-piramida-mobile-developer-intern-2025` | Mobile Developer Intern | PT Piramida Teknologi Informasi | Jul 2025-Dec 2025 | `verified` |
| `mitra-informatika-mobile-developer-intern-2025` | Mobile Developer Intern | Mitra Informatika | Jan 2025-Jun 2025 | `verified` |

Homepage periods are display ranges in month/year form. Precise day-level dates remain available in the CV source when needed.

Education appears as a subsection inside Experience:

```text
Bachelor of Applied Computer Science (Informatics Engineering)
Politeknik Elektronika Negeri Surabaya
2021-2026
```

The English degree title is the owner's requested wording on `2026-10-30`. It is not confirmed as an official translation of the diploma, so it must not be presented as one.

GPA, PEPT score, professional certifications, secondary-school education, and complete contribution history remain resume-only. A short summary of academic research and student-organization activity is permitted in the education entry, as specified below. The longer organization history stays in the CV.

### Homepage experience copy

Live English copy for the timeline now lives in `content/experience.yaml`, and the build validates it before it can reach the page. This document owns the editorial rules and attribution boundaries; it does not duplicate the strings, so a copy edit happens in one place.

| Entry ID | Approved copy location |
|---|---|
| `pt-piramida-mobile-developer-intern-2025` | `entries[0].content.en` |
| `mitra-informatika-mobile-developer-intern-2025` | `entries[1].content.en` |
| `education-d4-informatics` | `entries[2].content.en` |

Editorial rules that the YAML must keep satisfying:

- each internship states the role, team context, and responsibility before any product detail;
- the product name, feature inventory, and team composition detail stay in the CV so the homepage does not read as a product case study;
- the WebRTC work stays labelled a prototype;
- three to five contribution bullets per entry, counts allowed to differ;
- supporting labels stay a curated short list, not the full CV technology inventory;
- no metric, outcome, or responsibility may be added beyond the owner-confirmed source.

The education entry mirrors the experience layout with the program, institution, and period plus a short research and organization summary. Its boundary claims are unchanged: `explored` and `basic VPS setup` mark learning scope, not professional proficiency or production infrastructure ownership, and the FMS-CREATE reference covers the passenger mobile app and an operator fleet-telemetry prototype, never the whole ecosystem.

The two copyright registrations remain supported by certificates, with Latifian Iman listed as one of ten creators and Politeknik Elektronika Negeri Surabaya as the copyright holder:

| Registration | Number | Subject | Application date | First published |
|---|---|---|---|---|
| Web operator control centre | `001492729` | Aplikasi Web Pusat Kendali Operator Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud | 17 September 2026 | 14 September 2026 |
| Mobile user service | `001071254` | Aplikasi Mobile Layanan Pengguna Kendaraan Listrik pada Ekosistem Fleet Management System Edge-to-Cloud | 2 Januari 2026 | 19 Desember 2025 |

Application and first-publication dates are not certificate issue dates. Being named as a creator on the web-operator registration does not establish personal authorship of that web dashboard, and the FMS case study keeps the mobile contribution and team dashboard context separate. Certificate files, addresses, and the creator appendix remain internal evidence and are never published as site assets.

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
| `fms-create` | FMS-CREATE | FMS-CREATE | Mobile App | Dec 2025-Jul 2026 | Completed / Selesai | Mobile Developer | Private |
| `remi-mobile` | ReMi Mobile | ReMi - Remind Me | Mobile App | 2024 | Completed, unmaintained / Selesai, tidak dipelihara | Mobile Developer | Private team repository |
| `semina` | Semina | Semina | Web App | Aug-Oct 2026 | Prototype learning project / Prototipe proyek pembelajaran | Full-Stack Developer | Public backend |
| `mooda-app` | Mooda App | Mooda App | Mobile App | Jul-Dec 2025 | Prototype / Prototipe | Mobile Developer | Private company code |
| `nkri` | NKRI | NKRI | Mobile App | Jan-Jun 2025 | Active, maintained by the company / Aktif, dipelihara perusahaan | Mobile Developer | Private company code |
| `remi-web` | ReMi Web App | ReMi - Remind Me (Web) | Web App | Aug-Nov 2024 | Completed, unmaintained / Selesai, tidak dipelihara | Front-End Developer | Private team repository |

All six need complete English and Indonesian project content before `publication: published`. `mooda-app` is a prototype and was never released to an app store. `nkri` is maintained by the company, not by Latifian; the timeline covers only the internship. `remi-web` is a separate deliverable from `remi-mobile`.

### Internship and team project publication boundary

- Mooda App and NKRI may publish their names, descriptions, contribution boundaries, and owner-approved visuals. Their source code, code snippets, and repository links must never appear on the website, in card data, or in generated output.
- Mooda App is described as a prototype built by the only Mobile Developer in a four-person cross-role team. The mobile app is personal work; the team's backend and web frontend are not.
- NKRI is described from the position of one of two Mobile Developers in a six-person cross-role team. Voice and video calling were a prototype, not a shipped calling platform.
- ReMi Web App is a separate academic deliverable from ReMi Mobile. The Front-End Developer role is owner-confirmed; product scope remains team scope, and individual feature ownership is not claimed unless supporting evidence exists.
- No internship screenshot may show credentials, customer data, internal URLs, or unreviewed internal information.

Owner-confirmed facts for the three records:

- **Mooda App** — internship at PT Piramida Teknologi Informasi, July to December 2025, hybrid Agile-Waterfall, four-person team. Personal scope: the passenger mobile app, including authentication, booking and cancellation, real-time trip status, rating, profile, driver status, and trip history, with REST API, Socket.IO, Google Maps, Riverpod, GoRouter, and Hive. It was never published to an app store and the source stays with the company. The features match the owner's CV; no usage metric, store rating, or release claim is allowed.
- **NKRI** — internship at Mitra Informatika, January to June 2025, six-person cross-role team. Personal scope: the real-time communication module, Socket.IO to WebSocket migration, reconnection and activity status, message search and filtering, chat-room pagination, attachment flows, and a WebRTC voice and video calling prototype. The company maintains the product; Latifian's contribution ends with the internship, and no current maintenance or ongoing development is claimed. No user count, uptime, or production-quality claim is allowed.
- **ReMi Web App** — academic Agile Product Based Learning deliverable, August to November 2024, separate from `remi-mobile`. Personal scope stays at the level the CV confirms: participation as Front-End Developer on a responsive React, TypeScript, Vite, and Tailwind CSS product, covering authentication, task management, deadline search and filters, and API-based reminders as team scope. Deployment and end-to-end browser notifications remain unverified. The repository carries no personal commit identity, so no source link is published.
- Screenshots for Mooda App and NKRI use demo data; the approved captions must say so. The ReMi Web hero comes from the team landing page that promotes the mobile app, and its caption must state that the image is product context rather than the task workspace.

### Project card context labels

Landing cards show a short context label identifying the project's company or type. Approved values:

| Project | Context (EN) | Context (origin) |
|---|---|---|
| FMS-CREATE | Final academic project | Tugas akhir perkuliahan |
| ReMi Mobile | Agile Teknik | Agile Teknik |
| Semina | Personal project | Proyek pribadi |
| Mooda App | Internship prototype | Prototipe magang |
| NKRI | Internship product | Produk magang |
| ReMi Web App | Agile Teknik | Agile Teknik |

In-progress or project-status wording (for example `ongoing`) is internal card metadata, not public card copy. It may be stored in the content model but must not render on landing cards.

Category values are the visible project-type label on detail intro chips and on related-project cards, so they match the preview type label for that project.

### Project preview type labels

Preview images carry a short neutral badge identifying the project type as shown on the card. Approved values:

| Project | Preview label |
|---|---|
| FMS-CREATE | Mobile App |
| ReMi Mobile | Mobile App |
| Semina | Web App |
| Mooda App | Mobile App |
| NKRI | Mobile App |
| ReMi Web App | Web App |

### Landing card technology badges

| Project | Approved stack badges |
|---|---|
| FMS-CREATE | Flutter, Modular architecture, REST API, SSE, Google Maps |
| ReMi Mobile | Flutter, BLoC, REST API |
| Semina | React, Redux, Node.js, Express, MongoDB |
| Mooda App | Flutter, Riverpod, Google Maps |
| NKRI | Flutter, Riverpod, WebSocket |
| ReMi Web App | React, TypeScript, Tailwind CSS |

Landing cards show at most three curated technology badges plus an overflow count, and the count is derived from the full stack rather than from the badge list. FMS-CREATE shows `Flutter`, `Modular architecture`, `REST API`, and `+7`, because its record lists ten stack entries and three badges are visible. ReMi Mobile shows `Flutter`, `BLoC`, `REST API`, and `+4`. Semina shows `React`, `Redux`, `Node.js`, and `+11`. Mooda App shows `Flutter`, `Riverpod`, `Google Maps`, and `+7`. NKRI shows `Flutter`, `Riverpod`, `WebSocket`, and `+5`. ReMi Web App shows `React`, `TypeScript`, `Tailwind CSS`, and `+2`. The visible card summary lives in the localized `cardSummary` field and the visible badges live in the record's `cardStack`. Both are separate from the detail `summary` and `stack`, so the preview stays short while the case study keeps its full evidence, and the homepage and related-project cards cannot drift apart. A badge may use a card-friendly alias for a stack entry, such as `Modular architecture` for `Modular monolith`, `SSE` for `Server-Sent Events`, or `Express` for `Express.js`. An alias never adds to the count. The full stack remains in the project record and appears on the detail page. Landing cards do not render a media qualification note; contribution and media boundaries stay preserved through visible card copy, role, title, and alternative text, and full qualification belongs to the detail case study.

### Approved project card copy

| Project | English | Indonesian |
|---|---|---|
| FMS-CREATE | A passenger-side Flutter application for electric-vehicle fleet operations, built with modular architecture, REST APIs, SSE, and Google Maps. | Aplikasi Flutter sisi penumpang untuk operasional armada kendaraan listrik, dibangun dengan arsitektur modular, REST API, SSE, dan Google Maps. |
| ReMi Mobile | An academic task and reminder application for students, delivered as a mobile project and published by the team on Google Play. | Aplikasi pengelolaan tugas dan pengingat untuk mahasiswa, dikembangkan sebagai proyek akademik mobile dan dipublikasikan oleh tim di Google Play. |
| Semina | A learning project combining a React event-management CMS with a backend ticket checkout API, extended from BuildWithAngga MERN course material. | Proyek pembelajaran yang menggabungkan CMS manajemen event berbasis React dengan API checkout tiket, dikembangkan dari materi kelas MERN BuildWithAngga. |
| Mooda App | A Flutter ride-hailing prototype for passengers, built during an internship as the team's only mobile developer. | Prototipe ride-hailing berbasis Flutter untuk penumpang, dikembangkan selama magang sebagai satu-satunya mobile developer di tim. |
| NKRI | A real-time messaging application for chat, file sharing, and calling, built during an internship by a six-person cross-role team. | Aplikasi perpesanan real-time untuk chat, berbagi berkas, dan panggilan, dikembangkan selama magang oleh tim lintas peran beranggotakan enam orang. |
| ReMi Web App | A React and TypeScript web deliverable for the ReMi task and reminder product, built by an academic team. | Produk web berbasis React dan TypeScript untuk aplikasi tugas dan pengingat ReMi, dikembangkan oleh tim akademik. |

## 15. FMS-CREATE Content Boundary

### Approved facts

- It is a completed final project.
- Public role: Mobile Developer. The detail-page role line pairs it with the project context: `Mobile Developer · Final academic project`.
- I developed the passenger-side application individually within a collaborative FMS ecosystem.
- The mobile application uses Flutter, modular architecture, REST APIs, SSE, Google Maps, session restoration, and secure storage.
- Manual and automated testing informed implementation.
- The Android build is internal; the repository is private and no public demo is available.
- Detail-page stack: `Dart`, `Flutter`, `Riverpod`, `GoRouter`, `Dio`, `REST API`, `Server-Sent Events`, `Google Maps`, `Flutter Secure Storage`, `Modular monolith`. This is the confirmed application stack, not a claim about every dependency in the private repository.
- Confirmed architecture shape: one runner module, five feature modules, and four core modules, composed through module registration at build time and at initialization.
- Confirmed contribution scope: the passenger mobile application and the whole operator variant prototype. Shared implementation covers OTP authentication, session recovery, mobile dashboard, vehicle tracking with Google Maps, REST API integration for initial loading, SSE for live location updates, stream lifecycle handling, exponential backoff, secure storage, network-aware connection recovery, shared infrastructure, and reusable UI components.
- Architecture purpose, owner-confirmed: the modular monolith allows several application variants to be assembled from module combinations. Selection happens before the APK build and at initialization, never as runtime module installation.
- `Nusantara EV Connect` is the orchestration application: a teammate's tool that offers the module picker and automates the APK build. It is team work and not part of my contribution.
- The operator variant is a prototype. Neither variant has an app-store release.
- Maintenance state is unconfirmed, so the record leaves it unspecified instead of reusing the ReMi `unmaintained` label.

### Approved-with-qualification

Existing hero media may be used with attribution. Any dashboard shown in the visual represents team or ecosystem context, not personal frontend ownership. Landing cards render the media without a visible qualification note; the card copy (`passenger-side Flutter application`) and alternative text preserve the boundary, and full qualification lives on the detail page. Testing remains qualitative; do not publish audit counts or dated architecture-test metrics.

### Prohibited claims

- I built the entire FMS platform alone.
- Public app-store release.
- Production-ready fleet system.
- Proven ETA accuracy, long-duration SSE reliability, or complete offline resilience.
- Dynamic plugin architecture or runtime module installation.
- Ownership of the `Nusantara EV Connect` orchestration tool.
- Ownership of the web dashboard.
- A production-ready operator variant.

### Pending narrative inputs

- reconciled project timeline phases;
- team role breakdown;
- one concrete technical challenge and trade-off;
- one public limitation;
- reflection and next step;
- final EN/ID hero caption and alternative text.

### Detail draft status (local)

A local English detail draft exists at `content/projects/fms-create/` as `project.yaml` plus `en.md` with `publication: draft`. It is derived only from the owner CV entry, the approved facts above, and the project's architecture documentation.

- Rendered sections: two only, `Overview` and `My responsibilities`.
- Highlights cover the two mobile variants, the modular monolith architecture with module selection before the APK build, and the internal build status. No metric card is added.
- Approved detail aside outcome summary: `The passenger app and the operator prototype were completed as the final academic project, with manual and automated checks for app behaviour and architecture rules. Both Android builds stay internal.`
- Approved visible hero caption: `The visual presents the broader FMS-CREATE ecosystem. The dashboard interface belongs to the team's fleet operations context. This case study focuses on the mobile variants I built.`
- The orchestration tool `Nusantara EV Connect` appears only as team context, because a teammate built it.
- The record has no public CTA, demo, or repository link, so the aside renders stack and outcome panels only.
- The draft is local: it must not enter a production manifest, route, metadata record, or browser bundle before the bilingual contract is satisfied.

## 16. ReMi - Remind Me Content Boundary

### Approved facts

- `ReMi - Remind Me` is the case-study heading; `ReMi Mobile` is the card label.
- ReMi Mobile and ReMi Web are separate academic deliverables.
- Lifecycle: completed and unmaintained.
- Public role: Mobile Developer.
- The mobile repository is private and team-owned.
- The team published the mobile application on Google Play.
- My approved contribution scope includes task flow, BLoC-related work, Flutter UI screens, REST API integration, and the coin-and-theme gamification flow.
- Confirmed gamification mechanics: users earn coins by completing tasks and spend them on in-app assets such as themes.
- Confirmed personal gamification contribution: UI, BLoC state management, API integration, and theme assets with colors matched to each theme. Backend reward logic is not claimed.
- Confirmed review feedback is qualitative: some users said the coin rewards made the app more interesting and encouraged task completion. This is not evidence of measured engagement, retention, or productivity gains.
- Detail-page stack: `Dart`, `Flutter`, `BLoC`, `Dio`, `REST API`, `Clean Architecture`, `Lottie`. This is the confirmed application stack, not a claim about every dependency in the private repository.
- The following are team awards, not individual awards: `Top 1 Best Mobile`, `Top 3 Best UX`, and `Third place Best Team`.
- Approved detail aside outcome summary: `The team published ReMi on Google Play and received Top 1 Best Mobile, Top 3 Best UX, and Third place Best Team at AT Fest End Year 2024.`
- Approved public CTA label: `View on Google Play`, pointing at the approved Play listing URL. It is a navigation link, not a claim that every app flow still works.
- On `2026-10-27` the owner confirmed that the team's backend was still online. This is a single point-in-time confirmation: it does not prove that every flow works end to end, that the app is maintained, or that the Play listing still describes current behaviour.

### Media qualification

The existing ReMi image is used to distinguish the separate web deliverable. Landing cards render the media without a visible qualification note; card copy (`mobile project`), role, title, and alternative text preserve that the work covers ReMi Mobile, and full qualification lives on the detail page:

> The visual presents the broader ReMi product context. The laptop interface belongs to the separate ReMi Web deliverable. This case study focuses on my ReMi Mobile contribution.

### Prohibited claims

- Sole ownership of ReMi.
- iOS availability inferred from device mockups.
- Gamification produced measured engagement, retention, productivity, or completion gains.
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
- final bilingual media caption and alternative text.

`current backend functionality` is no longer open as a status question; the `2026-10-27` owner confirmation replaces it and is bounded as described above.

### Detail draft status (local)

A local English detail draft exists at `content/projects/remi-mobile/` as `project.yaml` plus `en.md` with `publication: draft`. It is derived only from the owner CV entry for ReMi Mobile and the approved facts above.

- Rendered sections: two only, `Overview` and `My responsibilities`. Publication and awards live in the aside Outcome panel and in the intro summary. Scope boundaries are folded into the two sections.
- Deferred: technical decisions and rationale, quantified testing scope and device matrix, month-level timeline, team role breakdown, review participant count and method, Indonesian narrative.
- The hero reuses `remi-mobile.webp` with the approved cross-deliverable caption and a non-duplicating alternative text.
- Google Play publication and the three awards remain team outcomes.
- The draft is local: it must not enter a production manifest, route, metadata record, or browser bundle before the bilingual contract is satisfied.

## 17. Semina Content Boundary

### Approved facts

- Public scope: a React event-management CMS plus a backend API for participant authentication, orders, and ticket checkout. Accepted on `2026-10-30`.
- Case-study role line: `Full-Stack Developer · Personal project`.
- Timeline: `Aug-Oct 2026`, taken from Git history. The end month is the last recorded work, not a confirmed completion or active-development state.
- Record status is `prototype`, with maintenance unspecified, because completion and maintenance are both unconfirmed.
- Public repository destination: `https://github.com/latifiann/backend-semina`. The frontend repository has no configured remote, so no frontend link is published.
- Approved aside CTA label: `View Repository`, pointing at that backend repository. It is a navigation link, not a claim that the frontend source is public.
- There is no verified public deployment and the project is not production-ready.
- CMS scope includes category, speaker, payment-method, and event CRUD, search with debounce plus category and speaker filters, image upload, dynamic event forms, ticket pricing, stock, active status, and Draft or Published state, session persistence, role-based route guards, and the order list with pagination and date-range filtering.
- Backend scope includes separate CMS and participant tokens, bcrypt hashing, role-based authorization for owner, organizer, and admin, organizer-scoped data access, MongoDB transactional checkout with server-side pricing, OTP and checkout email, uploads, and centralized error handling.
- The participant-facing interface remains a static HTML template. Registration and checkout through a participant web interface are not integrated.
- The project is derived from BuildWithAngga course material, `Full Stack Developer — MERN Website Event`. The class URL stays unverified.

### Mandatory attribution

```text
EN: This learning project extends backend material from BuildWithAngga.
ID: Proyek pembelajaran ini dikembangkan dari materi backend BuildWithAngga.
```

The class title and URL remain pending and must be added when found.

### Media rule

`semina.webp` is owner-approved for publication with qualification. It represents event-platform context from authorized learning material, not the CMS interface built for this project. The case study covers the React CMS and backend API, and the image must never imply authorship of the landing page shown. Landing cards render the media without a visible qualification note; card copy, role (`Full-Stack Developer`), and alternative text preserve the boundary, and full qualification lives on the detail page.

Detail-page caption:

> EN: The visual represents the event-platform context from authorized learning material. It is not a screenshot of the CMS I built. This case study focuses on my React CMS and backend API work.
>
> ID: Visual ini merepresentasikan konteks platform acara dari materi pembelajaran yang penggunaannya telah diizinkan. Ini bukan tangkapan layar CMS yang saya bangun. Studi kasus ini berfokus pada pekerjaan CMS React dan backend API saya.

Approved alternative text:

> EN: Dark event-platform landing page promoting technology events with a green Browse Now button.
>
> ID: Halaman utama platform acara bertema gelap yang mempromosikan acara teknologi dengan tombol hijau Browse Now.

### Prohibited claims

- Full event-platform ownership.
- Complete CMS product, including a Participants page, dashboard analytics, or every route from the course scope.
- Participant event search, or participant registration and checkout through a web interface.
- Production-ready API or public deployment.
- Automated test suite, or verified frontend build, browser, endpoint, SMTP, transaction, rollback, and concurrency results.
- Payment gateway or online payment processing.
- Proven overselling prevention.
- Secure OTP controls or organizer isolation proven across accounts. The organizer scope fix is a code change, not a passed cross-account test.
- All CMS endpoints authenticated, or frontend route guards treated as a security boundary.
- Frontend-template authorship.
- A verified public frontend repository link.

### Pending narrative inputs

- BuildWithAngga class URL;
- starter-code boundary, beyond the course-scope attribution;
- concrete challenge, trade-off, verified outcome, reflection, and next step;
- completion and maintenance confirmation.

### Detail draft status (local)

A local English detail draft exists at `content/projects/semina/` as `project.yaml` plus `en.md` with `publication: draft`.

- Rendered sections: two only, `Overview` and `My responsibilities`.
- Highlights cover the CMS and checkout API contribution, the implemented workflows, and the learning-project context. No metric card is added.
- The intro and aside reuse the approved role line, timeline, and outcome summary. The backend repository CTA uses the approved override label `View Repository`, because a GitHub destination should not read as a store or demo action.
- The visible hero caption states that the image is not a screenshot of the built CMS.
- The draft is local: it must not enter a production manifest, route, metadata record, or browser bundle before the bilingual contract is satisfied.

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
