# 00005 — Pong

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Single-player Pong with an AI opponent. One of the original eight game rooms.

## How it works

Canvas-based. Player controls left paddle via mouse or touch. AI controls right paddle — tracks ball with a speed cap to keep it beatable. Ball physics handled client-side. Score tracked per session. No server involvement — entirely local. Fredoka One aesthetic, #1a1a2e background.

## Data files

None.

## Navigation

Matrix: left → 00003 (Tic Tac Toe), down → 00006 (Connect Four), right → 00035 (Trolley Problem). All bidirectional.

## Locked content

None.

## Notes for future development

Room-index.txt describes this as "Single-player Pong with AI opponent" — the original design doc listed it as "Two-player paddle game." Current build is single-player vs AI. A two-player WebSocket version was apparently considered but not built.
