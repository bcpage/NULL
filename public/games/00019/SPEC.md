# 00019 — Unix Epoch

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Live Unix timestamp counter. Displays the current Unix epoch (seconds since 1970-01-01 00:00:00 UTC) and ticks every second.

## How it works

Entirely client-side. `Math.floor(Date.now() / 1000)` updated via `setInterval` every 1000ms. No server calls, no WebSocket. The number just runs.

## Data files

None.

## Navigation

Matrix: up → 00018 (ASCII Panel), down → 00020 (Grade School Clock). Both bidirectional. Part of a vertical chain: 00017 → 00018 → 00019 → 00020 → 00021.

## Locked content

None.

## Notes for future development

The timestamp could be used as a mechanic in another room — referencing the player's `firstSeen` Unix time from their user record and showing how long ago they arrived. The number itself is the content.
