# aiCOVENANTS — Web UI kit

A high-fidelity recreation of the three core screens defined in the brand foundations:

1. **Landing / manifesto page** (`#manifesto`) — dark hero with full wordmark, statement of position, three-step covenant capture, founding catalogue preview.
2. **Founding covenant catalogue** (`#catalogue`) — printed-record list of the five founding covenants with Roman-numeral kickers, status chips, and metadata.
3. **Covenant detail page** (`#detail`) — full public declaration with Work, Creator, Status, AI-use declaration, Human labour displaced or deferred, Acknowledgements, Beneficiaries, Value-sharing intent, Version history, Withdrawal status.

The interactive `index.html` lets you click between all three views from the header navigation.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Loads React + Babel, mounts `App.jsx`, links design tokens. |
| `App.jsx` | Top-level shell, route state, page composition. |
| `Header.jsx` | Sticky header with brand lockup and nav. |
| `Footer.jsx` | Single dark band footer with HJC studio mark. |
| `Wordmark.jsx` | Reusable wordmark + brand mark. |
| `Manifesto.jsx` | Landing/manifesto page. |
| `Catalogue.jsx` | Founding catalogue list. |
| `CovenantDetail.jsx` | Covenant detail page (uses sample data). |
| `ui.jsx` | Buttons, chips, dividers, layout primitives. |
| `data.jsx` | The five founding covenants — real entries, no fabrications beyond plausible body copy that preserves the named projects' identities. |

## Notes

- All copy is restrained and uses the project's voice: British spelling, no emoji, no exclamation marks, "covenant"/"pledge"/"declare", lowercase `ai` always.
- The three founding catalogue entries beyond aiCOVENANTS itself (VouchMeApp, FASCIA, Ho and the Baby Eater, ElevenLabs voice-use covenant) use plausible body text drawn from the project documentation. **Real covenant content must come from Kauri Tukere** before publication — see `data.jsx` and the flag at the top of that file.
- The covenant detail page shown in `index.html` is "aiCOVENANTS itself" — a self-referential covenant whose creator is Kauri Tukere and whose declaration is about the building of aiCOVENANTS.
