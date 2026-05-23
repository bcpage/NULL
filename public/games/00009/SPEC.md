# 00009 — Dice Roller

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Full D&D dice set: d4, d6, d8, d10, d12, d20, d100. Animated rolls. Each visitor rolls independently — no shared state.

## How it works

Entirely client-side. No WebSocket, no server calls. Player clicks a die, an animation plays, and a random result in the correct range is displayed. Fredoka One aesthetic, #1a1a2e background — part of the original game suite.

## Data files

None.

## Navigation

Matrix: down → 00008 (Voice Notes), right → 00010 (Goldfish). Both bidirectional.

## Locked content

None.

## Notes for future development

Could be wired to broadcast roll results to all connected players via WebSocket if shared rolling is ever desired. Currently isolated per visitor.
