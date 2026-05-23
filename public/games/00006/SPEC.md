# 00006 — Connect Four

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Real-time multiplayer Connect Four via WebSocket. Two players share a board and take turns dropping discs to connect four in a row.

## How it works

Board state managed server-side and broadcast to all connected clients. Players pick a color (or are assigned one) before play. Each disc drop sends a move event over WebSocket; the server validates the move, updates state, checks win condition, and broadcasts to all. Fredoka One aesthetic, #1a1a2e background — part of the original game suite.

## Data files

None. Board state is in-memory only.

## Navigation

Matrix: up → 00005 (Pong), right → 00007 (Chat), left → 00016 (The Static, one-way out). 00016 has no return exit to 00006 — entering 00016 from here cuts off the path back.

## Locked content

None.

## Notes for future development

The one-way left exit to 00016 is intentional — players who wander left from here enter the static/atmospheric wing with no direct way back. The original game suite aesthetic differs markedly from later rooms.
