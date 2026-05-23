# 00037 — Metronome

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A metronome with adjustable tempo. All connected visitors can run their own metronomes simultaneously — each player's beat appears as a small indicator that other visitors can see in real time.

## How it works

WebSocket-based. Player sets BPM (20–300, default 120) via slider or ±1 buttons. Starting sends `{ game: 'metro', type: 'set', bpm, label }` to the server; stopping sends `{ game: 'metro', type: 'stop' }`. Server broadcasts active metronomes to all clients. Other visitors' metronomes appear as small pulsing dots with their name and BPM. The local pendulum animates client-side from the local BPM. Beat indicators for other players are driven by each client's own timer interpolated from the reported interval — not server-synchronized beat-by-beat.

## Data files

None. Active metronome state is in-memory only.

## Navigation

Matrix: up → 00036 (Dots and Boxes), down → 00038 (Shared Chalkboard). Both bidirectional.

## Locked content

None.

## Notes for future development

The multi-metronome display is the unexpected feature — discovering that other visitors have their own tempos running is the room's social moment. Beat sync between clients is approximate (timer-based, not server-pulsed).
