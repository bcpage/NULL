# 00020 — Grade School Clock

**Status:** Built
**Last updated:** 2026-05-23

## What it is

An analog clock with a classroom aesthetic. Twelve colored sectors divide the face by hour in a full rainbow sequence. Footer reads: "This clock was used to teach you something. You learned it. The clock is still here."

## How it works

Canvas-only. No WebSocket, no server calls. The clock face has 12 pie-sector color overlays at 22% opacity (red through pink, one per hour segment). Standard hour, minute, and second hands animate from the system clock. Entirely client-side.

## Data files

None.

## Navigation

Matrix: up → 00019 (Unix Epoch), down → 00021 (The Countdown). Both bidirectional. Part of a vertical time-themed chain: 00017 → 00018 → 00019 → 00020 → 00021.

## Locked content

None.

## Notes for future development

The footer copy is the whole point. The clock is inert — the observation about it is the content.
