# 00042 — The Heap

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Sorites paradox. Add or remove grains of sand one at a time. The verdict updates as grains accumulate. When does the heap stop being a heap?

## How it works

Client-side canvas visualization. Grains range 0–300. The heap shape (canvas bezier curve) grows in height and width proportional to grain count. Up to 80 individual grain dots rendered inside the heap. Verdict label updates at thresholds: 0 → "no grains", 1 → "one grain — definitely not a heap", <5 → "a few grains", <15 → "several grains", <HEAP_THRESHOLD → "getting there — is this a heap yet?", then "a heap!", "definitely a heap", "a very large heap." The threshold at which "a heap!" appears is the paradox — there is no single grain that makes the difference. Hold +/− buttons for rapid add/remove. No WebSocket, no server calls.

## Data files

None.

## Navigation

Matrix: left → 00041 (Ship of Theseus), down → 00046 (Cheshire Cat, one-way). The down exit is a one-way convergence drain — no return from 00046 to 00042. Third and final funnel path into the Cheshire Cat room (alongside 00026 and 00034).

## Locked content

None.

## Notes for future development

The HEAP_THRESHOLD value is the hidden answer to the paradox — wherever it's set in the code, that's the grain that "made the difference," which is exactly what the paradox says doesn't exist. Each visitor's grain count is entirely local and session-only.
