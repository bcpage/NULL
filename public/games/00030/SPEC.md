# 00030 — Shooting Gallery

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Shoot the targets. Duck hunt aesthetic. Targets appear and disappear on a shared board — all visitors shoot the same targets.

## How it works

WebSocket-based shared state. Server manages target positions, spawn timing, and alive/dead state. Clicking a target sends `{ game: 'gallery', type: 'shoot', id }`. Server marks it dead and broadcasts the update. New targets are spawned server-side on a timer and broadcast to all clients. On connect, server sends `{ game: 'gallery', type: 'init', targets: [...] }` with all current targets. Multiple visitors can shoot simultaneously; whoever fires first claims the hit.

## Data files

None. Target state is in-memory only.

## Navigation

Matrix: left → 00036 (Dots and Boxes). One exit. Dead end in the right direction — no right exit.

## Locked content

None.

## Notes for future development

Score tracking per visitor (hits, misses) would require server-side attribution by cookie ID. Currently no per-player scoring — the targets just die when hit by anyone.
