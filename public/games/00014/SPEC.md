# 00014 — 52!

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Displays the number of possible ways to shuffle a standard 52-card deck (8.065 × 10⁶⁷ — a number so large it defies comprehension). A shared shuffle counter increments for all players each time anyone clicks shuffle.

## How it works

`GET /api/cards/state` returns the current shuffle count and last shuffle timestamp. `POST /api/cards/shuffle` increments the counter, saves to disk, and broadcasts the new count via WebSocket to all connected clients. The astronomical number is rendered with full precision in the UI. SAP institutional aesthetic.

## Data files

- `public/games/00014/data/cards.json` — global shuffle counter and last shuffle timestamp

## Navigation

Matrix: up → 00011 (Number Dispenser), right → 00015 (Snake). Both bidirectional.

## Locked content

None.

## Notes for future development

The counter is the collective action — every shuffle across every visitor adds to the same running total. The gap between the counter and 52! is the point.
