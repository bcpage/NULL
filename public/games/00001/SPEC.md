# 00001 — Colour Together

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Shared drawing canvas. All connected players paint on the same 30×20 grid in real time. The original proof-of-concept room — built first to validate the WebSocket networking stack before anything else.

## How it works

Canvas rendered via HTML5 `<canvas>`. Player picks a color from a 24-swatch palette and paints cells by clicking or dragging. Each paint action sends `{ type: 'paint', index, color }` over WebSocket. Server broadcasts to all clients and holds grid state in memory. New connections receive a full `{ type: 'init', grid: [...] }` sync. Clear button sends `{ type: 'clear' }` and resets all cells to white on all clients. Grid state is in-memory only — resets on server restart.

## Data files

None. Grid state lives in server memory, not persisted to disk.

## Navigation

Matrix: right → 00003 (Tic Tac Toe), down → 00004 (Game of Life). No other exits. Rooms 00003 and 00004 connect back.

## Locked content

None.

## Notes for future development

Grid state could be persisted to JSON on paint events so restarts preserve the canvas. Palette is hardcoded — a custom color picker could replace it. Current aesthetic (Fredoka One, #1a1a2e background) predates the SAP institutional aesthetic of later rooms.
