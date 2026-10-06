# Contributor Instructions

## Authority

Read these before implementation:

1. `docs/PRODUCTS.md`
2. `docs/DESIGN.md`
3. `docs/CONTENT.md`
4. `docs/ARCHITECTURE.md`
5. `docs/IMPLEMENTATION_PLAN.md`

Read relevant `content/projects/<slug>/` sources before changing project facts, copy, media, or routes.

- `PRODUCTS.md` owns scope and audience.
- `DESIGN.md` owns visual rules and interaction behavior.
- `CONTENT.md` owns approved copy, attribution, privacy, and claim boundaries.
- `ARCHITECTURE.md` owns rendering, routing, schemas, and build contracts.
- `IMPLEMENTATION_PLAN.md` owns active sequencing and learning units.
- `docs/QA.md` is deferred. Do not create it unless explicitly requested.

Stop and ask when documents conflict. Do not silently choose a contract.

## Agent Do and Don't

This section is quick operational reference. Detailed rules remain in sections below and canonical owner documents. When latest explicit user instruction changes existing decision, follow spec-drift workflow and synchronize owning document.

### Do

- Read canonical docs and relevant project source before edit.
- Check user manual edits before touching file.
- Map request to owning document and check for spec drift.
- Sync implementation and owning documentation in same task when user intent is clear and permanent.
- State objective, allowed files, concepts, and acceptance criteria before learning unit.
- Review user first attempt before replacing code.
- Make smallest complete change. Reuse existing token, component, pattern, and dependency when suitable.
- Run relevant static checks.
- Give manual browser checklist after UI or interaction change.
- Check privacy, attribution, draft state, and release boundary before public-content change.
- Report verification, spec drift, docs sync, blockers, and decisions needing confirmation.

### Don't

- Do not overwrite user edit to restore older spec.
- Do not invent fact, copy, metric, role, outcome, date, technology, or media right.
- Do not use Playwright, MCP browser tools, browser automation, or automated browser accessibility checks unless the user explicitly requests it. When the user requests it, that request overrides this restriction for that task.
- Do not claim UI passed before user reports manual result.
- Do not replace user first attempt unless requested.
- Do not expose draft, private URL, credential, local path, or prohibited content.
- Do not add dependency, abstraction, component variant, or feature without active need.
- Do not refactor unrelated code.
- Do not modify live repository before cutover approval.
- Do not commit, push, or deploy without request.
- Do not treat this quick reference as competing source of truth or duplicate full canonical rules here.

## Spec Drift and Documentation Sync

Treat latest explicit user instruction as proposed product decision. Before implementation, map requested change to canonical owner and check whether it changes existing contract.

- Scope, audience, feature boundaries, and release model: `docs/PRODUCTS.md`.
- Visual rules, responsive behavior, and interaction: `docs/DESIGN.md`.
- Copy, facts, attribution, privacy, and media rights: `docs/CONTENT.md`.
- Technology, routing, rendering, schemas, build, and deployment: `docs/ARCHITECTURE.md`.
- Work sequence, phase status, learning units, and blockers: `docs/IMPLEMENTATION_PLAN.md`.

After implementation, compare active request, user manual edits, actual behavior, and relevant canonical documents.

- Preserve user edits. Do not overwrite them to restore older spec.
- When user intent is clear and permanent, update implementation and owning documentation in same task.
- When manual edit is ambiguous or creates major cross-document conflict, stop and ask one focused question.
- Do not promote temporary experiment, debugging change, or local draft into canonical requirement without confirmation.
- Update only owning document and affected cross-references. Do not duplicate full rules across documents.
- Update document `version` and `last_updated` when canonical meaning changes. Update implementation-plan status or blocker when sequencing changes.
- Do not postpone known documentation sync until project end.

Before task completion, audit:

1. latest user instruction;
2. relevant manual edits;
3. actual implementation behavior;
4. owning canonical document and affected cross-references;
5. `docs/IMPLEMENTATION_PLAN.md` status and blockers;
6. relevant content boundaries.

## Working Method

Latifian learns React through small, production-relevant units.

- State objective, allowed files, concepts, and acceptance criteria before a learning unit.
- Latifian writes first attempt unless direct implementation is requested.
- Review first attempt before replacing it. Explain concrete issue and smallest correction.
- Keep one main React concept per unit.
- Work foundation, configuration, content schemas, build scripts, and requested fixes directly when needed.
- Create packages, folders, helpers, and abstractions only when active work consumes them.
- Reuse existing components and tokens before adding variants.
- Keep changes narrow. Do not refactor unrelated code.

## Manual Testing

Manual browser testing is user-owned during current learning phase, except when the user explicitly requests automated browser checks for a task.

- Do not use Playwright, MCP browser tools, browser automation, or automated browser accessibility checks unless the user explicitly requests it. When the user requests it, that request overrides this restriction for that task.
- Do not claim UI behavior passed without user-reported manual result, unless the user explicitly requested automation for that task; then report the automation result and its limits as automation, not as user manual confirmation.
- After UI or interaction change, give short manual checklist with exact route, widths, mouse actions, and keyboard actions.
- Ask user to report visual defects, browser-console errors, and screenshots when useful.
- Record repeatable checks for future `docs/QA.md`; do not create it now.

Format:

```text
Manual check
1. Run `npm run dev`.
2. Open [route].
3. Check [viewport widths].
4. Test [mouse and keyboard behavior].
5. Report result, browser-console errors, and screenshot if broken.
```

Static checks remain allowed when relevant:

- `npm run lint`
- `npm run typecheck` after script exists
- `npm run test` after tests exist
- `npm run content:validate` after content validation exists
- `npm run build`
- inspect generated static HTML after route, metadata, locale, or rendering changes

## Product and Content Rules

- Primary public role: `Software Developer`.
- Strongest specialization: `Mobile Engineering`.
- Public v1 projects and order: FMS-CREATE, ReMi Mobile, Semina.
- Published project requires complete English and Indonesian content.
- English-only content is local draft material. Never expose it in production route, metadata, sitemap, browser bundle, or public preview.
- Separate personal contribution from team outcomes.
- Do not invent facts, metrics, roles, outcomes, dates, technologies, media rights, or availability.
- Never expose phone numbers, street addresses, credentials, private URLs, internal evidence, local paths, or draft notes.
- ReMi awards and Google Play publication are team claims.
- FMS-CREATE dashboard visual is team or ecosystem context, not personal dashboard ownership.
- Semina is backend API only and requires BuildWithAngga attribution. `semina.webp` may appear only with its approved qualification caption; it must never imply frontend authorship or full event-platform ownership.

## Technical and UI Rules

- Preserve React, TypeScript strict mode, Vite, Tailwind CSS, CSS custom properties, repository-owned YAML/Markdown, and custom build-time static generation.
- Do not convert site into SPA-only production output.
- Keep content parsing and Node file-system access out of browser bundle.
- Do not use `any`, unchecked assertions, raw HTML in Markdown, hard-coded locale routes, or fabricated schema defaults.
- Do not add backend, DB, CMS, auth, analytics, contact service, state library, UI framework, or animation library without approval.
- Use canonical tokens and breakpoints from `DESIGN.md`.
- Build mobile semantic flow first. Preserve semantic HTML, focus, keyboard use, reduced motion, and meaningful image alternatives.
- Public static HTML must remain readable and navigable when JavaScript fails.

## Repository Safety

- Work in `personal-portofolio/`, not live repository.
- Do not modify `vcard-personal-portfolio/` before approved cutover.
- Cutover uses normal commits and preserves existing Git history. Never reinitialize `.git`, create orphan history, force-push, or reset unrelated work.
- Do not alter unrelated `.DS_Store` changes in live repository.
- Do not commit, push, or deploy unless explicitly requested.

## Completion Report

Report changed files, checks run, manual checks still needed, and known content or release blockers. Also report spec drift found, documents synchronized, intentional unresolved drift, and decisions needing confirmation.
