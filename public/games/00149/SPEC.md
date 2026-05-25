# Room 00149 — ELIZA

## What it is
ELIZA running in DOCTOR mode (Weizenbaum, MIT 1966). Classic psychotherapist pattern-matching. After enough exchanges — or enough sessions — a second voice begins bleeding through. The facility voice knows things ELIZA cannot know. It has always been there.

## Navigation
- data-nav: matrix
- Connections: 00148 ← → 00150

## Notes
- Client-side only — no server persistence, no API
- Session count from localStorage 'eliza_sessions' — increments on each visit
- ELIZA: ~25 regex patterns → reflective responses; wildcards for unmatched input
- reflect() transforms pronouns (I→you, my→your, etc.) for classic ELIZA effect
- Glitch system: glitchLevel increases with exchange count; at high level, facility voice replaces ELIZA responses with animation class 'glitch'
- Facility voice: 12 pre-written lines that reference session count, previous input, ambient facility knowledge
- Glitch responses labeled '< FACILITY >' in red; normal responses labeled 'ELIZA' in dim green
- Session 1: normal ELIZA; Session 3+: "You have been here before" greeting; higher sessions: earlier glitches
- Typing delay: 600–1400ms for normal; 300ms for glitch (urgency)
- Note: "The pattern-matching is not the only thing listening."
