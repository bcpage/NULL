# 00048 — Useless Information

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Rotating display of accurate but useless facts. Click for another. A session counter tracks how many have been dispensed.

## How it works

Client-side only. No WebSocket, no server calls. Facts are drawn randomly from a hardcoded array on each click. A per-session counter increments and displays "N facts dispensed." The fact pool includes genuinely trivial facts alongside meta-observations that break the fourth wall: "This fact was written by someone who is no longer the same person who wrote it." / "You have now read 37 facts. Or fewer. You may have skipped some."

## Data files

None.

## Navigation

Matrix: left → 00046 (Cheshire Cat, bidirectional), right → 00049 (MASH, one-way). The right exit is one-way out — 00049 has no return exit left to 00048.

## Locked content

None.

## Notes for future development

The meta-facts are the best ones. The fact pool is hardcoded in the HTML — expanding it requires a code edit. A server-side fact API would allow additions without deploys.
