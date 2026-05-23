# 00003 — Tic Tac Toe

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Real-time multiplayer Tic Tac Toe. Two players share a board over WebSocket. One of the original eight game rooms.

## How it works

Player selects X or O before the game starts. Board state managed on the server and broadcast to all connected clients. Winning condition checked server-side after each move. Draw detection included. Board resets after a win or draw. Fredoka One aesthetic, #1a1a2e background — part of the original colorful game suite predating the institutional redesign.

## Data files

None. Board state is in-memory only.

## Navigation

Matrix: left → 00001 (Colour Together), right → 00005 (Pong). Both bidirectional.

## Locked content

None. (Note: the ROOMS_BUILT.md doc references a "Joshua Room lock condition" tied to Tic Tac Toe draw state — tttStatus === 'draw' — this lock was not implemented in the current build.)

## Notes for future development

The draw-state lock referenced in design docs (unlock a secret room when the game ends in a draw) was noted as a future mechanic. Not currently wired.
