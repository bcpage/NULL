# 00034 — Hangman

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Classic Hangman. Guess the word letter by letter before the gallows fills. Each round includes a hint.

## How it works

Entirely client-side. Words drawn randomly from a hardcoded `WORDS` array of `[word, hint]` pairs — tech and general knowledge vocabulary (javascript, algorithm, python, database, keyboard, monitor, etc.). On-screen keyboard for clicking letters; physical keyboard also supported. Correct guesses reveal letters; wrong guesses add to the gallows drawing (canvas). Six wrong guesses = loss. On loss, the full word is revealed in red. "New Game" button starts a fresh round. No server calls, no WebSocket — each visitor plays independently.

## Data files

None.

## Navigation

Matrix: left → 00029 (The Terminal), down → 00046 (Cheshire Cat, one-way out). The down exit is a one-way convergence drain into 00046 — no return path up to 00034.

## Locked content

None.

## Notes for future development

Word list is baked into the HTML. Expanding it requires a code edit. A server-side word API would allow the list to grow without deploys. The one-way down→00046 is a narrative funnel alongside 00026 and 00042.
