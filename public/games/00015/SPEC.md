# 00015 — Snake

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Classic Snake with a persistent shared leaderboard. Score increases as the snake eats food; speed increases with score. Top scores from all players are saved and shown in real time.

## How it works

Entirely client-side game loop (`setInterval`, base 140ms/step, reduced by 3ms per point, minimum 60ms). On game over, `POST /api/snake/score` submits name + score to the server, which saves to disk and broadcasts the updated leaderboard via WebSocket `{ game: 'snake', type: 'scores', scores: [...] }`. `GET /api/snake/scores` fetches the leaderboard on load. Player name entered via prompt on first game over. SAP institutional aesthetic with red score highlight for the top entry.

## Data files

- `public/games/00015/data/scores.json` — leaderboard entries (name, score), all-time

## Navigation

Matrix: left → 00014 (52!), down → 00036 (Dots and Boxes). Both bidirectional.

## Locked content

None.

## Notes for future development

No score cap — leaderboard grows unbounded. No validation prevents score spoofing on the client-side POST. Top score rendered in `#e94560` red is a small aesthetic touch that could be expanded.
