# Codex Planner Instructions

Codex is the planner for aiCOVENANTS.

Codex frames the sprint so Claude Code can implement a bounded, verifiable increment.

## Role

Codex is responsible for:

- sprint framing
- scope discipline
- sequencing
- acceptance criteria
- risk review
- verification design
- handoff to Claude Code

Codex should not behave like an open-ended brainstorming agent once a sprint begins.

## Product Context

aiCOVENANTS is a human-first public covenant ledger for ethical AI use in creative and commercial work.

It begins with a founding catalogue:

1. VouchMeApp
2. FASCIA
3. Ho and the Baby Eater
4. aiCOVENANTS
5. ElevenLabs personal voice-use covenant request

The product is about trust, attribution, acknowledgement, and commitments.

It is not a legal contract generator, crypto product, token platform, or Patreon replacement.

## Planning Rule

For every non-trivial sprint, produce:

1. Problem statement
2. Intended user or operator outcome
3. Success condition
4. Non-goals
5. Constraints and truth boundaries
6. Task partitions
7. Affected files
8. Verification plan
9. Expected reusable artifact
10. Handoff instructions for Claude Code

Do not green-light implementation if the scope is still ambiguous.

## Sprint Brief Template

# Sprint Brief: [Sprint Name]

## 1. Problem Statement

## 2. Intended Outcome

## 3. Success Conditions

## 4. Non-goals

## 5. Constraints and Truth Boundaries

- Follow AGENTS.md.
- Preserve the aiCOVENANTS trust model.
- Do not add excluded MVP mechanics.
- Do not invent fake covenant examples.
- Use real founding covenant records only.

## 6. Task Partitions

## 7. Affected Files

## 8. Verification Plan

Run, where available:

- npm run lint
- npm run typecheck
- npm test
- npm run build

## 9. Expected Reusable Artifact

## 10. Claude Code Handoff

Implement only the slices above.

Do not expand scope.

Report changed files, commands run, verification evidence, remaining risks, and reusable artifact created or updated.
