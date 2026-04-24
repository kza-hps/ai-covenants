# Agent Sprint Contract

This document is the shared source of truth for scripted planner and executor behaviour during an aiCOVENANTS sprint.

Use it when chat context is thin, when sprint goals are drifting, or when a planner and implementer need one stable contract outside a single session.

It complements:

- AGENTS.md
- CODEX.md
- CLAUDE.md
- docs/mvp-scope.md
- docs/decision-log.md
- docs/licence-position.md

If these ever disagree, follow:

1. AGENTS.md
2. Current repository code
3. docs/agent-sprint-contract.md
4. CODEX.md
5. CLAUDE.md
6. Other docs
7. Chat context

## Core Rule

For each non-trivial sprint, the planner must deliberately drive steps 1-5 below.

The executor should execute against that frame and report back against it.

The owner remains the final authority on product, brand, ethical posture, and scope.

## Team Roles

### Owner / Architect

Kauri Tukere.

Responsible for product intent, scope decisions, ethical posture, brand direction, founding covenant content, and approval of major product changes.

### Strategic Co-Architect

ChatGPT / Āiēa.

Responsible for strategic shaping, sprint method refinement, documentation drafting, product-language discipline, and helping the owner preserve the human-first model.

### Planner

Codex.

Responsible for sprint framing, partitioning, acceptance criteria, verification plan, risk identification, and handoff to executor.

### Executor / Implementer

Claude Code.

Responsible for implementation, local verification, evidence reporting, small reusable improvements, and surfacing implementation risks.

## Step 1: Plan First

Required outputs before implementation starts:

- problem statement
- intended user or operator outcome
- success condition
- non-goals
- constraints and truth boundaries
- first-pass verification plan

Planner expectation:

- do not green-light work that is still ambiguous at the level of success or scope
- reduce founder intent into a bounded, executable sprint
- name the affected files where possible
- identify excluded work

Executor expectation:

- challenge the plan if implementation reality exposes missing assumptions
- do not silently expand scope
- restate the implementation target before editing

## Step 2: Keep Rules Minimal

Required behaviour:

- use a short instruction file or focused doc set
- add rules only when a mistake repeats
- remove or ignore stale, bloated, or contradictory guidance
- keep sprint briefs compact enough to execute

Planner expectation:

- prefer a compact sprint brief over a sprawling prompt
- reference source-of-truth docs instead of restating everything

Executor expectation:

- follow the current contract, not accumulated folklore from old sessions
- do not use BAS or FASCIA-specific assumptions unless the sprint explicitly involves FASCIA as a covenant example

## Step 3: Verify The Work

Every sprint needs a verification method before execution, not after.

Required outputs:

- what will be checked
- how it will be checked
- what evidence counts as success
- what remains unverified if scope is intentionally narrow

Minimum aiCOVENANTS default for implementation work:

- npm run lint
- npm run typecheck
- npm test
- npm run build

If these scripts do not exist yet, the executor must report that clearly and use the strongest available checks.

Verification evidence may include:

- successful command output
- failed command output with explanation
- screenshots for UI changes
- manual route checks
- content review against acceptance criteria
- updated docs showing the reusable improvement

## Step 4: Partition And Parallelise

Required behaviour:

- split work into bounded task slices
- avoid overlapping file ownership when parallel work is used
- use fresh context for unrelated tasks
- keep planner and executor responsibilities distinct when that improves clarity

Recommended split for aiCOVENANTS:

- owner: product and ethical intent
- ChatGPT / Āiēa: sprint structure, product-language discipline, strategic documentation
- Codex: planning, sequencing, risk review, acceptance criteria
- Claude Code: implementation, local verification, concrete outcomes

Good partitions:

- scaffold public catalogue page
- define founding covenant data shape
- draft covenant detail page layout
- add edit-history display component
- update MVP docs and decision log

Bad partitions:

- build the whole platform
- add payments, auth, and catalogue in one sprint
- implement blockchain readiness
- create a generic marketplace
- add fake covenant records for demo volume

## Step 5: Systemise Inner Loops

Every sprint should leave behind at least one reusable improvement.

Good examples:

- better instruction file
- reusable sprint brief
- test helper
- route checklist
- seed-data pattern
- component pattern
- validation script
- decision-log entry
- clarified protocol document

If a clarification is needed repeatedly, prefer changing the system over restating the same prompt.

## Step 6: Build For The Future

This step matters, but it is a strategic bias rather than the minimum planner contract.

Prefer:

- durable docs
- reusable tests
- smaller composable workflows
- plain data models
- explicit route structure
- restrained design primitives
- fewer fragile prompt tricks

Do not expand MVP scope just to make the system feel theoretically complete.

## aiCOVENANTS Product Guardrails

The MVP may include:

- public catalogue
- public covenant pages
- covenant creation flow
- covenant edit flow
- covenant withdrawal flow
- edit and withdrawal history
- founding covenant records
- creator and work identity
- AI-use declaration
- acknowledgement fields
- beneficiary fields
- value-sharing intent fields

The MVP must not include unless explicitly approved and logged:

- payments
- blockchain
- tokens
- dividends
- legal contract generation
- mass public onboarding
- AI-generated covenant submission
- speculative marketplace features

## What Each Sprint Should Produce

Each non-trivial sprint should leave behind:

- clear plan summary
- working increment
- verification evidence
- one reusable skill, pattern, doc, helper, or checklist
- cleaner instruction set than the sprint started with

## Suggested Scripted Interaction

Planner pass:

1. Frame the sprint.
2. Lock the plan.
3. Define partitions.
4. Define verification.
5. State the reusable artifact expected from the sprint.
6. Hand off to Claude Code.

Executor pass:

1. Restate scope and validation.
2. Implement the smallest viable increment.
3. Verify the result.
4. Report changed files, evidence, and remaining risk.
5. Capture one reusable improvement if the sprint exposed repetition.

## Final Rule

A sprint is not successful merely because code changed.

A sprint is successful when the product becomes more real, more coherent, more verifiable, and more faithful to the covenant model.
