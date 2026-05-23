# 00038 — Shared Chalkboard

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A chalkboard all players draw on together. Marks accumulate across all visits and persist between server restarts. Every stroke by every visitor is preserved.

## How it works

WebSocket-based. Drawing sends `{ game: 'chalk', type: 'stroke', pts, color, width }` on pointer-up. Stroke points are normalized to 0–1 relative coordinates (fraction of canvas width/height), so the drawing scales correctly to any screen size. Server saves each stroke to disk and broadcasts it to all connected clients. On connect, server sends `{ game: 'chalk', type: 'init', strokes: [...] }` with all historical strokes, which are replayed on the canvas. A clear button sends a clear event. Color picker and line width controls available.

## Data files

- `public/games/00038/data/strokes.json` — all strokes ever drawn, persistent

## Navigation

Matrix: up → 00037 (Metronome), down → 00039 (The Recursive Room), left → 00007 (Chat), right → 00045 (Logo Turtle). All bidirectional. Four exits — a well-connected hub.

## Locked content

None.

## Notes for future development

Strokes accumulate unboundedly — no cap, no reset timer. The chalkboard will eventually become dense with accumulated marks from all visitors. No per-stroke attribution. Clear button is available to all visitors with no confirmation.
