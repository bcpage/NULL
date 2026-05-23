# 00026 — The Plant

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A shared plant that all visitors keep alive together. It wilts if neglected. Water it. Growth is persistent across server restarts.

## How it works

WebSocket-based. Server holds plant state: `{ growth, wilted, waterings, lastWatered }`. On connect, server sends `{ game: 'plant', type: 'state', ...state }`. Clicking the water button sends `{ game: 'plant', type: 'water' }`; server updates growth and broadcasts new state to all clients. Client enforces a 2-second cooldown between waterings per tab. Growth is visualized on a `<canvas>`: stem height, leaf count, and leaf size all scale with the `growth` percentage (0–100). Leaves appear at growth thresholds (15%, 25%, 40%, 55%, 70%, 85%). A yellow flower blooms at 80%+ when not wilted. When wilted, the stem droops (bezier curve shifts), colors desaturate, and soil darkens. Status line shows growth %, time since last watered, and cumulative watering count.

## Data files

- `public/games/00026/data/plant.json` — persistent plant state (growth, wilted flag, waterings count, lastWatered timestamp)

## Navigation

Matrix: left → 00022 (The Typewriter), right → 00027 (Calculator), down → 00046 (Cheshire Cat, one-way). The down exit is one-way into 00046 — the Cheshire Cat convergence drain. Visitors who go down cannot return directly.

## Locked content

None.

## Notes for future development

The wilting mechanic requires server-side decay logic (a timer or visit-based trigger) to reduce growth over time. The server must actively degrade the plant when no one waters it — this is not visible in the client code. The down→00046 one-way exit is a narrative funnel: visitors who follow the plant's decay may end up in the Cheshire Cat room.
