# 00043 — PRNG vs True RNG

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Side-by-side comparison of pseudorandom and true random number generation. One panel uses a seeded PRNG algorithm; the other uses `crypto.getRandomValues`. Can you tell which is which?

## How it works

Client-side only. Each round randomly assigns PRNG to Panel A or B. The PRNG uses the mulberry32 algorithm seeded with a random 32-bit value. True RNG fills the canvas via `crypto.getRandomValues`. Both panels render as noise fields. Player guesses which panel is PRNG; result is revealed after guessing. Running correct/total score tracked in memory. Panels labeled after the guess: "Panel A — PRNG" or "Panel A — True RNG." The point is visual indistinguishability. No WebSocket, no server calls.

## Data files

None.

## Navigation

Matrix: left → 00028 (Galton Board), down → 00044 (Visible Spectrum). Both bidirectional.

## Locked content

None.

## Notes for future development

Score is session-only — resets on page leave. The explanation copy below the panels states the answer directly: "Visually, they're indistinguishable — that's the point."
