# Decision Log

## 2026-04-25 - Claude design handoff adopted as MVP visual blueprint

Status: Accepted

Context:

- The repository currently contains product and process documentation but no application UI code.
- A design handoff now exists under `design-handoff/aicovenants-design-system/`.
- The handoff includes design tokens, brand assets, and prototype web screens for the manifesto, founding catalogue, and covenant detail pages.

Decision:

- Treat the Claude design handoff as the visual blueprint for the aiCOVENANTS founding MVP.
- Implement the public MVP against that blueprint in Next.js, TypeScript, and Tailwind.
- Preserve MVP exclusions:
  - no payments
  - no blockchain
  - no tokens
  - no marketplace
  - no legal contract generation
- Do not treat prototype covenant prose in `design-handoff/aicovenants-design-system/project/ui_kits/web/data.jsx` as approved publishable content.
- Use real founding covenant records only, with owner-approved content.

Implications:

- The first implementation work should prioritise the three public screens already defined in the handoff and `docs/design-system.md`.
- Design tokens, layout posture, typography direction, and brand assets can be translated into production code.
- Prototype routing, browser globals, screenshots, uploads, and scaffold copy remain reference-only.
