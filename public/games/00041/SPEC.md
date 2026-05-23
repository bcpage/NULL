# 00041 — Ship of Theseus

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Replaces the ship plank by plank. A slider moves from 0% to 100% replaced. At what point does it stop being the same ship? Two buttons let the visitor take a personal stance.

## How it works

Client-side only. No WebSocket, no server calls. A grid of planks visualizes the replacement percentage — replaced planks shown in green. A slider (or animated auto-advance) drives the percentage. Contextual copy updates at thresholds: 0% "All original. Definitely the same ship." → 25% → 40% → 50% → 75% → 100% "Every plank is new. The original ship no longer exists — or does it?" Two vote buttons ("Still the same ship" / "A different ship") toggle a local highlight — the choice is recorded nowhere, shared with no one.

## Data files

None.

## Navigation

Matrix: left → 00040 (Zeno's Paradox), right → 00042 (The Heap). Both bidirectional. Part of the philosophy corridor: 00035 → 00040 → 00041 → 00042.

## Locked content

None.

## Notes for future development

The vote buttons are currently cosmetic — no tally is kept. A global shared count of how many visitors said "same" vs. "different" at each percentage threshold would turn this into a collective experiment.
