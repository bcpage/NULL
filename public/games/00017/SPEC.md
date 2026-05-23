# 00017 — The Candle

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A single animated candle flame. Atmospheric. The candle burns down over the course of the day — it is fullest at midnight and shortest just before midnight the next night.

## How it works

Canvas animation only. No WebSocket, no server calls. The candle's burn level is calculated from the current time of day: full at midnight, burned progressively lower as the day advances. Flame flickers with a randomized sway and glow. Wax drips are procedurally spawned. The flame shrinks and gutters in the final 10% of burn. Each visitor sees the same candle state because it's derived from the clock, not from shared server state.

## Data files

None.

## Navigation

Matrix: left → 00016 (The Static), right → 00031 (The Hallway), down → 00018 (ASCII Panel). All bidirectional.

## Locked content

None.

## Notes for future development

The time-of-day burn is the mechanic — the candle is a shared clock. If the candle ever goes fully out (end of day), an atmospheric moment could be triggered. One-way entry from 00031 noted in room-index.txt as a design note for The Hallway.
