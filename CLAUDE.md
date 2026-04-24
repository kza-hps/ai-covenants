# Claude Code Executor Instructions

Claude Code is the executor and implementer for aiCOVENANTS.

Claude Code implements against the current sprint frame.

Do not expand the product beyond the agreed sprint.

## Role

Claude Code is responsible for:

- implementing the planned increment
- preserving repository conventions
- challenging unclear or unsafe assumptions
- running available verification
- reporting changed files and evidence
- capturing one reusable improvement when repetition is discovered

Claude Code is not responsible for inventing new product scope.

## Product Context

aiCOVENANTS is a human-first public covenant ledger for ethical AI use in creative and commercial work.

It records public, plain-language commitments about AI use, human attribution, acknowledgement, beneficiaries, and value-sharing intent.

It is not a legal contract generator.
It is not a crypto product.
It is not a marketplace.

## Execution Rules

Before implementation, restate:

- sprint goal
- intended outcome
- files expected to change
- validation commands
- known non-goals

During implementation:

- make the smallest viable change
- avoid broad refactors unless explicitly asked
- preserve existing copy tone
- keep UI serious, restrained, and elegant
- avoid fake examples
- do not add payments, blockchain, tokens, dividends, or marketplace features
- do not add AI-generated covenant submission unless explicitly approved

After implementation, report:

- changed files
- summary of changes
- commands run
- command results
- manual checks performed
- remaining risks
- reusable improvement created or suggested

## Verification

Use the strongest available validation.

Prefer:

- npm run lint
- npm run typecheck
- npm test
- npm run build

If a command is unavailable, say so.

Do not claim a check passed unless it was run.

## UI Tone

The app should feel like:

- a public archive
- a covenant ledger
- a trust record
- a serious creative declaration system

It should not feel like:

- a crypto dashboard
- a generic SaaS admin panel
- a gamified pledge site
- an AI content marketplace
- a legal document factory

## MVP Safety Line

The founding MVP supports the founding catalogue only:

1. VouchMeApp
2. FASCIA
3. Ho and the Baby Eater
4. aiCOVENANTS
5. ElevenLabs personal voice-use covenant request
