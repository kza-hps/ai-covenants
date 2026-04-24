# aiCOVENANTS Design System

> A human-first public covenant ledger for ethical AI use in creative and commercial work.

aiCOVENANTS records how AI helped create a work, what human labour may have been displaced or deferred, and what pledge or covenant the creator makes in return. It is a public trust record — not a legal contract generator, not a marketplace, not a crypto product.

The product is the work of **Kauri Tukere** under **Hero's Journey Creative**. The MVP exists to publish a small founding catalogue of real covenants:

1. VouchMeApp
2. FASCIA
3. Ho and the Baby Eater
4. aiCOVENANTS
5. ElevenLabs personal voice-use covenant request

---

## Sources consulted

| Source | Where |
| --- | --- |
| Brand foundations board (provided) | `assets/brand-foundations-1.png`, `assets/brand-foundations-2.png` (originals: `uploads/aiCOVENANTS.png`, `uploads/aiCOVENANTS_DESIGN.png`) |
| Primary logo (provided) | `assets/logo-full.png` (original: `uploads/Logo.png`) |
| Repo: `kza-hps/ai-covenants` (default branch `main`) | Read via GitHub. Currently a docs-only repo — no UI code exists yet. |
| ↳ `README.md` | Product positioning, founding catalogue, principles, non-goals |
| ↳ `AGENTS.md` | Highest-priority operating instructions for AI agents on the project |
| ↳ `CLAUDE.md` | Executor rules (build serious, restrained, no fake examples) |
| ↳ `docs/design-system.md` | Brand essence, palette, typography direction, layout principles, restrictions |
| ↳ `docs/agent-sprint-contract.md` | Sprint method; product guardrails (no payments, blockchain, tokens, marketplace) |

> **Note for the reader:** repo links above assume access to `https://github.com/kza-hps/ai-covenants`. The repo currently contains documentation only — no Next.js code, no components — so this design system is grounded in the brand-foundations boards, the design-system doc, and the logo image. If a UI codebase is added later, this design system should be reconciled against it.

---

## Index

| File | What it is |
| --- | --- |
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | CSS custom properties — palette, type scale, spacing, semantic tokens. |
| `SKILL.md` | Skill manifest — how an agent should use this design system. |
| `assets/` | Logos, brand marks, brand-foundation source boards. |
| `fonts/` | Web fonts (Cormorant Garamond, Inter — see *Visual Foundations* for substitution notes). |
| `preview/` | Design-system preview cards (one HTML per concept). Rendered in the Design System tab. |
| `ui_kits/web/` | Web UI kit — landing/manifesto, founding catalogue, covenant detail. JSX components + interactive `index.html`. |

---

## Content fundamentals

The voice is **plain, serious, and respectful**. Copy reads like a public archive entry or a printed declaration — not like a marketing site, not like a SaaS dashboard, not like a Patreon page. Restraint is the entire posture.

### Tone

- **Trust-first, not hype-first.** Never sell. State what is true, what was done, and what was promised.
- **Quiet authority.** Sentences are short. Claims are specific. No exclamation marks. No "powered by AI" superlatives.
- **Plain language before legal language.** A covenant should read like a thoughtful person speaking, not like terms of service.
- **Public-record cadence.** Use complete sentences. Punctuate fully. No telegraphic UX shorthand like "Add stuff →".

### Person & address

- The platform speaks in **third person** about works and creators ("This work used AI for…", "The creator pledges…").
- The creator speaks in **first person** inside their own covenant ("I declare…", "I commit to…").
- When addressing a viewer of the catalogue, use **second person sparingly** and only for action ("You are reading the founding covenant for…").
- Avoid "we" unless representing aiCOVENANTS as an institution making a public statement.

### Casing

- **Brand name:** always `aiCOVENANT` (or `aiCOVENANTS` plural). The lowercase `ai` is non-negotiable — it signals AI as the lesser partner. Never `AICOVENANT`, never `AiCovenant`, never `Ai Covenant`.
- **Headings:** Title Case for covenant titles ("The Hero's Journey Creative Covenant"). Sentence case for short utility headings ("Founding catalogue").
- **Archival labels** (eyebrow text above sections, status chips, page kickers): UPPERCASE with wide tracking — `BRAND FOUNDATIONS`, `WITHDRAWN`, `VERSION HISTORY`. Used like an inscription, not a shout.
- **Buttons:** UPPERCASE wide-tracked ("START A COVENANT", "VIEW EXAMPLE") for primary ceremonial actions; sentence case for secondary text links ("Read the manifesto").

### Punctuation & spelling

- **British / international English** ("labour", "acknowledgement", "behaviour", "centred"). The repo uses these spellings consistently.
- **Em dash** (—) for archival aside, not the word "but".
- **Curly quotes** ("…", '…'), curly apostrophes (creator's, not creator's). This matters — straight quotes feel typewriter-tech, curly quotes feel printed.
- **No emoji.** Ever. Not in copy, not in headings, not in status chips. The only graphic glyphs allowed are the lozenge (◆) used as an archival divider/bullet, and the brand mark itself.
- **Numbers** spelled out for one through nine in prose; numerals for ten and above and for all version/date metadata.

### Vocabulary

Use the project's chosen terms exactly. They are deliberate:

| Use | Don't use |
| --- | --- |
| covenant | contract, agreement, terms |
| pledge | promise, deal |
| declare / declaration | disclose, mention |
| public record / archive | dashboard, profile, page |
| AI contribution / AI-use declaration | AI-generated, AI-powered, AI-assisted |
| human labour displaced or deferred | jobs replaced, work automated |
| beneficiaries | stakeholders, shareholders, community |
| value-sharing intent | revenue share, payout, royalty |
| withdrawal recorded | deleted, removed |
| founding catalogue | featured projects, our portfolio |
| version history | changelog, edits |

### Voice examples

**Good (what we want):**

> aiCOVENANTS is a public covenant ledger.
>
> It records how AI helped create a work, what human labour may have been displaced or deferred, and what pledge or covenant the creator makes in return.
>
> It is not a legal contract generator. It is a public trust record.

**Good (covenant body):**

> I, Kauri Tukere, declare that the visual concept for this work was developed by hand. AI was used for transcript clean-up and for generating two background variations that were not used in the final cut. No human collaborator was displaced. If this work generates commercial value, ten percent of net proceeds will go to a kaupapa Māori storytelling fund, named at the time of distribution.

**Bad (what we never write):**

- "Welcome to the future of ethical AI! ✨"
- "Track your AI usage and build trust with your audience."
- "Sign your first covenant in under 60 seconds."
- "Join thousands of creators committing to ethical AI."
- "Powered by aiCOVENANT™"

### Copy length & density

- **Hero / manifesto:** one sentence of position, then one paragraph of definition. No bullet salad.
- **Catalogue card:** title, creator, status chip, one short descriptive line. Nothing else.
- **Detail page:** sectioned like a printed record — clearly labelled fields, prose answers, breathing room between sections. Long form is welcome where it serves the declaration; padding is not.

---

## Visual foundations

The interface should feel like a printed record on heavy paper: ivory ground, charcoal ink, gold marginalia. When the surface goes dark, it goes fully dark and ceremonial — a single hero band of obsidian, not striped sections.

### Colour

- **Two grounds, one accent.** Pages are either Soft Ivory `#F2EBDD` (catalogue, detail, forms) or Obsidian Charcoal `#232A2F` (hero/manifesto, ceremonial bands, identity surfaces). Stone Gold `#D6C39A` is the only true accent and is used sparingly: the wordmark, hairline rules, status indicators, and ceremonial buttons. Slate Mist `#596066` is a quieting grey for metadata and secondary text.
- **No bright colour anywhere.** No reds, blues, greens, or purples — including for warnings, links, or focus states. Status colours, when needed, are derived neutrals (a quiet green, a muted clay, a subdued gold) — never electric.
- **No gradients on UI surfaces.** The only acceptable gradients are extremely subtle hairline-fade rules around the lozenge divider.
- **Imagery vibe:** warm, slightly grainy, archival. Black-and-white with a faint ivory tint, or full charcoal. Never saturated, never glossy.

### Typography

- **Display / wordmark:** Cormorant Garamond (default) or Cinzel for ceremonial uppercase inscriptions. High contrast strokes, light tracking. The `ai` glyph is always lowercase.
- **Body / UI:** Inter — calm, neutral, functional.
- **Type pairing:** serif for everything ceremonial (headings, covenant titles, leads, the manifesto body if long-form), sans for everything functional (forms, navigation, metadata, buttons, body in dense lists).
- **Tracking:** display set tight (`-0.01em`), uppercase archival labels set wide (`+0.18em`).
- **Long-form prose** uses `text-wrap: pretty` to keep widow lines tidy.

### Spacing & layout

- **Generous spacing.** The vertical rhythm leans toward 32 / 48 / 64 / 96 px between major blocks. Whitespace is the design.
- **Reading column** caps at ~720px for prose, ~1080px for the catalogue, 1280px for full layouts.
- **Strong vertical rhythm with thin horizontal rules.** A 1px charcoal-at-18%-alpha rule is the workhorse divider — never a 4px coloured bar.
- **Archival composition.** Pages feel set on a page rather than laid out on a screen — page numbers, eyebrow labels, and field labels sit in the margin or above content with deliberate space.
- **No decorative excess.** No background patterns, no textures, no illustrations beyond the brand mark. The page is the texture.

### Backgrounds

- Plain Soft Ivory or Obsidian. No images behind text.
- One acceptable subtle treatment: a barely-there warm noise on Soft Ivory at very low opacity to suggest paper. Optional and easy to disable.
- The brand mark may appear large and faded as a watermark on a covenant detail's hero panel — at very low opacity, never as a "logo wallpaper".

### Borders & rules

- **Hairlines (1px) only.** No 2px+ borders except the optional `--bw-frame` used to ceremonially frame a single hero block.
- **Card edges** are hairline rules, not shadows.
- **Dividers** between sections are full-width hairlines or the `divider-lozenge` (centred ◆ glyph between two fading rules).

### Corner radii

- **Mostly square.** Buttons, chips, and inputs use `2px` (`--r-1`) or `4px` (`--r-2`) — just enough to avoid hard digital edges, far short of SaaS roundedness.
- **Status chips** use `--r-pill` only because pill chips read as "stamp on a record". Use sparingly.
- **Cards have no radius** — they are framed by hairlines.

### Shadows / elevation

- **Effectively none.** Elevation is conveyed by hairline rules and ground-tone shifts, not shadows.
- A single page-level `0 1px 0 rgba(35,42,47,0.05)` is permitted under the sticky header to anchor it to the page. That is the only shadow in the system.

### Hover & press states

- **Hover:** primary gold buttons darken from `#D6C39A` to `#C2AE83` (`--gold-300`). Text links pick up a gold underline. Cards reveal their hairline rule slightly darker. No lifts, no glows, no scale.
- **Press:** primary buttons gain a 1px inset hairline; no scale-down, no shadow.
- **Focus:** a 2px Stone Gold outline offset by 2px — visible, dignified, accessible.
- **Disabled:** 50% opacity, no special tint.

### Transparency & blur

- Used **only** for the sticky header on the dark hero, where the hero band fades to obsidian-90% with a 12px backdrop blur as the page scrolls behind it. Nowhere else.

### Animation

- **Restrained.** Page elements fade in at `240ms` with `cubic-bezier(0.2, 0.6, 0.2, 1)` ("archival" easing) and a subtle 4–8px upward translation. No spring, no bounce, no parallax.
- Hover transitions are `140ms` for colour properties only.
- The lozenge divider may animate a 480ms ink-spread on first paint of the manifesto page; nowhere else.
- No skeletons. Loading is a centred 1px Stone Gold rule that pulses opacity.

### Cards

A card is a hairline-ruled rectangle on Soft Ivory (or a slightly raised obsidian rectangle on the dark hero). It has:

- 1px `--rule` border, no radius beyond `--r-2`
- 32px internal padding
- Title in serif, metadata in sans uppercase eyebrow above
- A single Stone Gold hairline accent under the title (optional, used to mark "active" or selected catalogue cards)
- No shadow, no fill change on hover — only the border darkens.

### Forms

- Inputs are a 1px hairline open underneath the label, not a boxed field. The whole form should read like a printed declaration form.
- Labels are archival-uppercase eyebrows.
- Helper text in Slate Mist below.
- Required fields are marked with a small Stone Gold lozenge, not a red asterisk.

### Buttons

- **Primary (ceremonial):** Stone Gold fill, Obsidian text, uppercase wide-tracked label, 2px square corners, no shadow. Used for "START A COVENANT", "VIEW EXAMPLE", "PUBLISH".
- **Secondary:** Obsidian text on transparent ground with a 1px Obsidian hairline border, same dimensions as primary.
- **Tertiary / text:** sentence-cased gold text link with hairline gold underline.

### Layout rules / fixed elements

- Header is sticky on long pages but goes transparent on the dark hero so the wordmark sits with the hero, then resolves to ivory ground after scroll.
- Footer is a single dark band with the wordmark on the left, the founding catalogue links centre, and the small Hero's Journey Creative mark bottom-right.
- The Hero's Journey Creative mark is **always small, always bottom-right or in the footer**, never adjacent to the wordmark in the header.

---

## Iconography

aiCOVENANTS deliberately avoids iconography as decoration. The visual system carries meaning through type, rules, and the brand mark — not through a UI icon family.

### What's used

- **The brand mark** (tablet + chisel) is the one expressive figurative element. Used as:
  - small mark in the header lockup (`assets/mark-on-charcoal.png`, `assets/mark-on-ivory.png`)
  - large faded watermark behind the covenant detail hero (low opacity)
  - favicon
- **The lozenge `◆`** (Unicode `U+25C6`) is the only repeating ornamental glyph. Used as:
  - an inline bullet inside ceremonial lists
  - the centred ornament in the `divider-lozenge` rule
  - a small required-field marker on forms
- **Roman numerals** (I, II, III, IV, V) are used to number the founding catalogue — they read like inscriptions on a record, not like list items. Never Arabic numerals for catalogue ordering.
- **The Hero's Journey Creative mark** (`assets/hjc-mark.png`) appears only as a small, unobtrusive studio/copyright mark — bottom-right or in the footer. Never near the primary wordmark.

### Functional UI icons (sparingly)

When a small functional icon is unavoidable (close, external link, copy, chevron, search), use **Lucide** via CDN at:

- 1.5px stroke
- `currentColor` (so they take the surrounding text colour)
- 16–18px in inline contexts, 20px in buttons
- Never filled. Never coloured. Never as a primary visual element.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="chevron-right"></i>
```

This is a pragmatic substitution — the source repo doesn't yet ship its own icon set, so Lucide stands in for the few utility glyphs we need. If a custom set is added later, swap one-for-one. **Do not** use Heroicons solid, Material, FontAwesome, or any icon set with a heavier or more SaaS-style stroke.

### What's never used

- **Emoji** — never, in any context, including status, success, errors, or decoration.
- **Hand-drawn SVGs** of locks, shields, scrolls, gavels, badges, or seals. The covenant has weight because of restraint and language, not because of a graphic seal.
- **Animated icons** of any kind.
- **AI sparkles** — particles, stars, "magic" wands, gradient orbs. Strictly forbidden.
- **Country flags, social-media glyphs in colour, brand logos as content.** Social links, if needed, use Lucide outline glyphs in `currentColor`.

### Brand mark assets in this system

| File | Purpose |
| --- | --- |
| `assets/logo-full.png` | Original 1254×1254 logo on charcoal — provided by Kauri Tukere. |
| `assets/lockup-on-charcoal.png` | Mark + wordmark on Obsidian — for hero/dark surfaces. |
| `assets/mark-on-charcoal.png` | Mark only on Obsidian — for header lockup on dark. |
| `assets/mark-on-ivory.png` | Mark only on Soft Ivory — for header lockup on light. |
| `assets/hjc-mark.png` | Hero's Journey Creative studio mark — footer/bottom-right only. |
| `assets/brand-foundations-1.png` | Original brand foundations board — reference for tone & layout. |
| `assets/brand-foundations-2.png` | Second brand foundations board — same. |

> **Font substitution flag for the user:** the brand foundations specify Cinzel and Cormorant Garamond (display/wordmark) and Inter or Manrope (body/UI). All four are loaded via Google Fonts in `colors_and_type.css`. No local `.ttf`/`.woff` files were provided, so the design system uses Google Fonts CDN delivery. If you'd like the fonts self-hosted (recommended for production — fewer third-party requests, fully archival offline), please provide the font files and I'll move them into `fonts/` and switch the `@import` to `@font-face` declarations.
