# 00040 — Zeno's Paradox

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Interactive visualization of Zeno's dichotomy paradox. Achilles chases a tortoise — each step, he covers half the remaining gap. The destination is never theoretically reached. Until floating-point math says otherwise.

## How it works

Client-side canvas animation. Achilles starts at 0; tortoise starts with a head start (~35% of the track). Each "Next Step" click moves Achilles to where the tortoise was, and the tortoise advances by half of Achilles's movement. The gap halves each step. Step info shows the current gap as a fraction. Eventually floating-point precision collapses the gap to zero and the paradox resolves: "Achilles has caught the tortoise. The paradox resolves." No WebSocket, no server calls.

## Data files

None.

## Navigation

Matrix: up → 00039 (The Recursive Room), left → 00035 (Trolley Problem), right → 00041 (Ship of Theseus). All bidirectional. Part of the philosophy corridor: 00035 → 00040 → 00041 → 00042.

## Locked content

None.

## Notes for future development

The resolution is the punchline — the paradox dissolves not through mathematical proof but because the computer runs out of decimal places. Each visitor steps through independently; no shared state.
