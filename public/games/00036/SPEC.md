# 00036 — Dots and Boxes

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Two-player Dots and Boxes on a shared 5×5 grid. All connected visitors share the same board — whoever clicks takes the current turn. No assigned player identities.

## How it works

WebSocket-based shared state. Server holds `{ hLines, vLines, boxes, scores, turn, status, winner }`. Clicking near a line segment sends `{ game: 'dots', type: 'line', axis: 'h'|'v', idx }`. Server validates the move, checks if any box was completed (awards the point and keeps the turn if so), advances turn if not, and broadcasts the full updated state to all clients. On game end (all boxes claimed), server broadcasts the winner or draw announcement with `status: 'done'`, then auto-resets to a new game. Player 1 is red (#e94560), Player 2 is blue (#4488ff). Active player's score badge is highlighted; inactive is dimmed. Canvas-based rendering with hit-detection threshold of 22% of cell size. Status message below board shows current turn or game result. "shared board — all visitors play together."

## Data files

None. Board state is in-memory only.

## Navigation

Matrix: up → 00015 (Snake), down → 00037 (Metronome), right → 00030 (Shooting Gallery). All bidirectional.

## Locked content

None.

## Notes for future development

Player assignment is entirely first-come-first-click — any visitor can play either side at any time. A turn-claim system would make it a true two-player game. No persistence means scores reset on server restart or on each new game.
