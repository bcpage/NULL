# 00018 — ASCII Panel

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A shared interactive ASCII display panel. Players can flip individual bits on a shared board; all connected visitors see the same state in real time.

## How it works

WebSocket-based shared state. Each bit (cell) on the panel can be toggled by clicking. Client sends `{ game: 'ascii', type: 'flip', bit: i }` over WebSocket. Server updates the shared bits array and broadcasts `{ game: 'ascii', type: 'state', bits: [...] }` to all connected clients. The panel is a collective canvas — everyone draws on the same surface simultaneously.

## Data files

None confirmed. Bit state may be in-memory only (resets on server restart).

## Navigation

Matrix: up → 00017 (The Candle), down → 00019 (Unix Epoch). Both bidirectional.

## Locked content

None.

## Notes for future development

If bit state is in-memory only, persistent ASCII art created by players is lost on restart. A data file could preserve the panel state. The collective nature invites griefing vs. collaboration — no moderation mechanism exists.
