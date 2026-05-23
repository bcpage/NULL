# 00004 — Game of Life

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Conway's Game of Life with a pattern library and speed controls. One of the original eight game rooms.

## How it works

Grid rendered on HTML5 `<canvas>`. Player can click cells to toggle live/dead, then start the simulation. Speed control adjusts tick rate. Pattern library allows loading preset configurations (gliders, oscillators, etc.). All state is local to the browser — no server involvement, no WebSocket. Each visitor runs their own independent simulation.

## Data files

None.

## Navigation

Matrix: up → 00001 (Colour Together), right → 00008 (Voice Notes). Both bidirectional.

## Locked content

None.

## Notes for future development

Could become shared (server-synced grid) if multiplayer Game of Life is ever desired. Currently entirely client-side. Fredoka One aesthetic matches the original game suite.
