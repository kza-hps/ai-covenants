# aiCOVENANTS Design Implementation Plan

Date: 2026-04-25
Planner: Codex
Source handoff: `design-handoff/aicovenants-design-system/`

## 1. Summary of what the handoff contains

The Claude Design handoff is a full visual blueprint for the founding MVP, not production-ready application code.

It contains:

- brand and product framing in `design-handoff/aicovenants-design-system/project/README.md`
- design tokens in `design-handoff/aicovenants-design-system/project/colors_and_type.css`
- exported brand assets in `design-handoff/aicovenants-design-system/project/assets/`
- preview reference HTML files in `design-handoff/aicovenants-design-system/project/preview/`
- a prototype web UI kit in `design-handoff/aicovenants-design-system/project/ui_kits/web/`
- screenshots and upload/source reference images in `design-handoff/aicovenants-design-system/project/screenshots/` and `design-handoff/aicovenants-design-system/project/uploads/`

The UI kit covers the three core MVP screens already named in `docs/design-system.md`:

- landing / manifesto page
- founding covenant catalogue
- covenant detail page

The handoff also encodes several important non-visual rules:

- `ai` remains lowercase in the wordmark and brand name
- the product tone is plain, serious, and archival rather than SaaS or crypto
- the MVP remains a public trust record
- the founding catalogue stays limited to the five real named works

Important truth boundary:

- `design-handoff/aicovenants-design-system/project/ui_kits/web/data.jsx` explicitly says its covenant body copy is plausible scaffolding and not publishable final content. It must not be treated as approved public record.

## 2. What should be adopted directly

These parts of the handoff are strong enough to adopt as source-of-truth design direction:

- Core palette:
  - Obsidian Charcoal `#232A2F`
  - Stone Gold `#D6C39A`
  - Slate Mist `#596066`
  - Soft Ivory `#F2EBDD`
- Typography direction:
  - Cormorant Garamond or Cinzel for ceremonial display use
  - Inter for body, navigation, metadata, and forms
- Layout posture:
  - generous spacing
  - strong vertical rhythm
  - hairline dividers
  - mostly square corners
  - almost no shadows
- Visual identity rules:
  - quiet archival tone
  - no crypto or web3 cues
  - no glossy SaaS cards
  - no bright gradient AI aesthetics
  - no decorative icon system beyond the brand mark, lozenge, and rare utility icons
- Screen inventory:
  - manifesto page
  - founding catalogue page
  - covenant detail page
- Component intentions:
  - ceremonial primary button
  - restrained secondary button
  - status chips
  - lozenge divider
  - archival eyebrow labels
  - record-style section layout
- Brand assets that appear suitable to ship once placed properly in the app:
  - `logo-full.png`
  - `mark-on-charcoal.png`
  - `mark-on-ivory.png`
  - `hjc-mark.png`

These should be treated as the visual blueprint for implementation unless the owner records a later decision.

## 3. What should be adapted for Next.js + TypeScript + Tailwind

The prototype structure should be translated into production patterns rather than copied literally.

### Framework adaptation

- Replace the prototype's global `React` + `ReactDOM` + `window` composition with Next.js App Router routes and typed components.
- Replace in-memory route state from `App.jsx` with real routes:
  - `/`
  - `/catalogue`
  - `/covenants/[slug]`
- Replace prototype click handlers with `next/link` navigation.

### Styling adaptation

- Convert `colors_and_type.css` tokens into a Tailwind-compatible token layer.
- Put the palette, spacing, typography, radii, shadows, and semantic colours into:
  - CSS custom properties in global styles
  - Tailwind theme extensions for shared utilities
- Keep the hairline-rule system and spacing scale as design tokens instead of scattering one-off class strings.
- Use Tailwind for composition, but preserve a thin layer of semantic component classes for distinctive pieces like:
  - wordmark
  - lozenge divider
  - status chip
  - covenant section block
  - ceremonial button

### Typography adaptation

- Use Next font loading for production instead of CSS `@import` from Google Fonts.
- Prefer self-hostable or Next-managed font loading to avoid prototype-era remote imports in production.
- Encode display and body fonts as app-wide tokens.

### Asset adaptation

- Move shippable image assets into `public/brand/`.
- Keep reference-only boards and uploads outside the runtime asset path.
- Use `next/image` where appropriate, but avoid over-optimising tiny marks if it complicates header/footer rendering unnecessarily.

### Data adaptation

- Separate real founding record metadata from unresolved covenant body text.
- Introduce a typed content model for covenant records that distinguishes:
  - approved public content
  - placeholder or pending fields
  - publish status
- Do not port prototype prose from `data.jsx` as production content unless the owner has approved it.

### Accessibility and product adaptation

- Preserve focus states, contrast, semantic headings, and keyboard navigation.
- Ensure the ceremonial style does not reduce readability on mobile.
- Translate decorative Roman numerals and lozenges in a way that does not obscure screen-reader structure.

## 4. What should be ignored as prototype-only

The following should not be treated as production source:

- `project/ui_kits/web/index.html` as an app shell
- `project/ui_kits/web/App.jsx` route state and demo page switching
- any `window.*` global exports
- Babel-in-browser assumptions from the prototype
- remote font `@import` in `colors_and_type.css`
- demo-only inline styles that should become component or token-level styling
- screenshots as implementation source
- `project/uploads/` as runtime assets
- prototype text that presents unapproved covenant details as if already public

Most importantly, this prototype-only content must not ship unchanged:

- `project/ui_kits/web/data.jsx`

Reason:

- it contains plausible scaffold copy for real named works, and AGENTS.md requires real founding covenant examples only
- some fields may be directionally correct but still remain unverified public record
- production data must come from owner-approved covenant content, not prototype narrative filler

## 5. Proposed file structure

This structure assumes a clean Next.js App Router build for the MVP.

```text
app/
  layout.tsx
  globals.css
  page.tsx
  catalogue/
    page.tsx
  covenants/
    [slug]/
      page.tsx

components/
  brand/
    wordmark.tsx
    brand-mark.tsx
    hjc-mark.tsx
  layout/
    site-header.tsx
    site-footer.tsx
    page-shell.tsx
    container.tsx
  ui/
    button.tsx
    status-chip.tsx
    lozenge-divider.tsx
    eyebrow.tsx
    record-section.tsx
  manifesto/
    manifesto-hero.tsx
    covenant-steps.tsx
    manifesto-body.tsx
    catalogue-preview.tsx
  catalogue/
    catalogue-list.tsx
    catalogue-row.tsx
  covenants/
    covenant-hero.tsx
    covenant-meta-bar.tsx
    version-history.tsx
    withdrawal-note.tsx

content/
  founding-covenants.ts

lib/
  covenants/
    types.ts
    status.ts
    format.ts
  design/
    tokens.ts

public/
  brand/
    logo-full.png
    mark-on-charcoal.png
    mark-on-ivory.png
    hjc-mark.png

docs/
  design-implementation-plan.md
  decision-log.md
```

Notes:

- `content/founding-covenants.ts` should begin as a typed static source for the five founding records.
- If Supabase is introduced for covenant storage later, the static model should still define the canonical public shape first.
- `lib/design/tokens.ts` is optional but useful if token values must be shared with metadata, theming helpers, or tests.

## 6. First three implementation sprints

## Sprint 001: Foundation setup

### Problem statement

The repo is currently docs-only. There is no application foundation to receive the design system.

### Intended outcome

Establish a minimal Next.js + TypeScript + Tailwind app shell with brand tokens, global typography, and shared layout primitives.

### Success conditions

- App boots in Next.js
- global token layer reflects the approved palette and type direction
- header and footer exist in production structure
- no product routes beyond placeholders are required yet
- brand assets are placed in stable runtime locations

### Non-goals

- no real catalogue rendering yet
- no covenant detail page yet
- no Supabase integration yet
- no covenant creation flow yet

### Task partitions

- scaffold app foundation
- install and configure Tailwind
- add brand fonts and tokens
- implement shared shell primitives
- import approved runtime assets

### Expected reusable artifact

- a durable token and shell system that later pages reuse

## Sprint 002: Public MVP screen implementation

### Problem statement

The visual blueprint exists, but the three public MVP screens are not yet implemented in production code.

### Intended outcome

Implement the manifesto page, founding catalogue page, and covenant detail page in Next.js with typed static data and the approved visual system.

### Success conditions

- `/` renders manifesto screen faithfully
- `/catalogue` renders the founding catalogue
- `/covenants/[slug]` renders individual covenant pages
- only the five founding records appear
- no fake covenant content is introduced
- layout, spacing, and visual hierarchy clearly match the handoff

### Non-goals

- no user auth
- no submission flow
- no edit flow
- no withdrawal workflow logic
- no payments, blockchain, tokens, marketplace, or legal contract generation

### Task partitions

- build manifesto sections
- build catalogue list and row patterns
- build covenant detail sections and version-history pattern
- map static approved data into typed content
- add responsive behaviour and accessibility polish

### Expected reusable artifact

- a production-grade public record page pattern for future covenant records

## Sprint 003: Content hardening and trust-state preparation

### Problem statement

Once the public screens exist, the next risk is content integrity and future maintainability.

### Intended outcome

Strengthen the content model, publication boundaries, and trust markers around the founding catalogue.

### Success conditions

- founding record data shape is explicit and validated
- approved versus pending content is clearly represented
- version and withdrawal presentation rules are consistent
- route metadata and page titles reflect the trust-record posture
- reusable content-entry guidance exists for future records

### Non-goals

- no broad creator onboarding
- no public submissions
- no speculative automation or mass publishing tools

### Task partitions

- refine content types
- add validation or safe parsing
- harden metadata and page copy
- document content-entry conventions

### Expected reusable artifact

- a covenant content schema and editorial pattern for future MVP work

## 7. Sprint 002 handoff brief for Claude Code

# Sprint Brief: Public MVP Screen Implementation

## 1. Problem Statement

aiCOVENANTS now has a clear design blueprint but no production UI. The next bounded increment is to implement the three public MVP screens in Next.js using the approved design system without drifting into non-MVP features or prototype-only content.

## 2. Intended Outcome

Build a production-quality public-facing MVP shell that renders:

- landing / manifesto page
- founding covenant catalogue
- covenant detail page

using TypeScript, Tailwind, and a typed static data source for the five founding records.

## 3. Success Conditions

- Next.js routes exist for `/`, `/catalogue`, and `/covenants/[slug]`
- the visual output follows `design-handoff/aicovenants-design-system/project/colors_and_type.css` and the web UI kit closely
- the product tone remains plain, serious, and archival
- only the five founding catalogue works are present
- no prototype `window` patterns or demo routing remain
- no fake covenant examples are introduced
- header, footer, buttons, chips, dividers, and record sections are reusable components
- pages are responsive and readable on mobile and desktop

## 4. Non-goals

- no payments
- no blockchain
- no tokens
- no marketplace
- no legal contract generation
- no auth
- no covenant creation workflow
- no edit or withdrawal action logic
- no Supabase-backed dynamic data yet

## 5. Constraints and Truth Boundaries

- Follow `AGENTS.md`.
- Preserve the aiCOVENANTS trust model.
- Treat the Claude design handoff as the visual blueprint.
- Do not ship prototype scaffold prose from `design-handoff/aicovenants-design-system/project/ui_kits/web/data.jsx` unless the content already exists as owner-approved real covenant copy in the repo.
- Use real founding covenant records only:
  - VouchMeApp
  - FASCIA
  - Ho and the Baby Eater
  - aiCOVENANTS
  - ElevenLabs personal voice-use covenant request
- If exact body copy is unavailable, prefer clearly marked minimal approved placeholders over invented prose.

## 6. Task Partitions

- App foundation:
  - scaffold Next.js app shell if not already present
  - configure Tailwind and global token layer
- Shared primitives:
  - implement header, footer, container, wordmark, button, chip, lozenge divider, record section
- Route implementation:
  - implement manifesto page
  - implement catalogue page
  - implement covenant detail route
- Content modelling:
  - create typed founding covenant data source
  - encode only approved content or clearly bounded placeholders
- Responsive and accessibility pass:
  - keyboard focus, heading structure, colour contrast, mobile layout

## 7. Affected Files

Expected new or changed files:

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/catalogue/page.tsx`
- `app/covenants/[slug]/page.tsx`
- `components/brand/*`
- `components/layout/*`
- `components/ui/*`
- `components/manifesto/*`
- `components/catalogue/*`
- `components/covenants/*`
- `content/founding-covenants.ts`
- `lib/covenants/*`
- `public/brand/*`

## 8. Verification Plan

Run, where available:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

Manual verification:

- check `/` against manifesto blueprint
- check `/catalogue` against catalogue blueprint
- check at least one `/covenants/[slug]` page against detail blueprint
- verify mobile and desktop layouts
- verify no route or copy introduces excluded MVP mechanics
- verify only founding catalogue records exist

Evidence required:

- commands run and outcomes
- screenshots or route checks for the three pages
- changed-file summary
- note of any content fields intentionally left pending owner approval

## 9. Expected Reusable Artifact

- reusable public-record UI component set for aiCOVENANTS pages

## 10. Claude Code Handoff

Implement only the slices above.

Do not expand scope.

Do not invent covenant body text.

Report changed files, commands run, verification evidence, remaining risks, and reusable artifact created or updated.

## 8. Verification plan

This planning document should be verified in two layers.

### Planning verification

- Confirm the plan stays within AGENTS.md MVP boundaries.
- Confirm the proposed routes map directly to the three approved core screens.
- Confirm the plan treats prototype scaffold content as non-authoritative.
- Confirm Sprint 002 is bounded tightly enough for Claude Code to execute without product ambiguity.

### Implementation verification for future execution

Once implementation begins, the default verification set remains:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

Manual checks should include:

- manifesto hero tone and spacing
- header and footer brand treatment
- Roman numeral catalogue presentation
- covenant detail record hierarchy
- accessibility of dark and light surfaces
- absence of non-MVP mechanics or fake examples

## 9. Risks and open decisions

### Risks

- The handoff includes strong visual guidance but also prototype data that may look finished enough to be copied accidentally.
- The screenshots are incomplete as implementation artifacts and should not outrank the source CSS and JSX.
- Fonts are currently referenced through remote imports in the prototype; production delivery method still needs a decision.
- The repo currently has no app code, so Sprint 001 must establish conventions that Sprint 002 can safely build on.
- The detail-page prototype includes withdrawal presentation language, but not a true workflow. This could tempt over-implementation if not bounded.

### Open decisions for the owner

- Which exact founding covenant fields are approved for publication now, and which must remain pending?
- Should Cormorant Garamond and Inter be loaded through Next-managed web fonts first, or self-hosted immediately?
- Should the public detail pages launch with full covenant prose on day one, or with minimal verified records plus explicit pending markers where approval is incomplete?
- Does the MVP require a separate manifesto route later, or should the manifesto remain the home page only for now?

### Recommended current decisions unless changed

- Treat the design handoff as the visual blueprint for MVP implementation.
- Treat prototype covenant prose as non-publishable until owner-approved.
- Implement the three public screens before any covenant creation workflow.
- Keep founding data static in code for the first UI release, even if Supabase is part of the broader stack.
