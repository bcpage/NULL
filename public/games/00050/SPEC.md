# 00050 — Monitor Room

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Six-panel surveillance monitor. Iframes of other rooms cycle automatically every 12 seconds. "Feeds rotate every 12 seconds — you cannot change the channel."

## How it works

Client-side only. No WebSocket, no server calls. Six iframe panels arranged in a 2×3 or 3×2 grid, each showing a live `/game/XXXXX` room at reduced scale. Each panel has a scanline CSS overlay and a label. Every 12 seconds, one panel rotates to a new room — the rotation cycles through a curated list of rooms one slot at a time, so the six panels gradually cycle through the full set without all switching at once. Iframes are scaled down via CSS transform to appear as miniature feeds. Room content within each iframe is fully live.

## Data files

None.

## Navigation

Matrix: left → 00049 (MASH, bidirectional). Single exit.

## Locked content

None.

## Notes for future development

The content playing in each iframe is real — players in those rooms are visible in the monitors. Whether players in the monitored rooms know they're being watched is ambiguous by design. The room connects strongly to the facility's surveillance aesthetic established at /admin.
