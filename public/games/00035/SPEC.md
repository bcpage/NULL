# 00035 — Trolley Problem

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Pull the lever or don't. A runaway trolley is heading toward five people. The lever diverts it to one. Global running tally across all visitors. No judgment given.

## How it works

WebSocket-based. Canvas renders the trolley scene with the lever position animated to reflect the visitor's choice. Two buttons: "Pull the lever" and "Leave it." On click, sends `{ game: 'trolley', type: 'pull' }` or `{ game: 'trolley', type: 'leave' }`. Both buttons are disabled after a choice — one decision per session. Server increments the global counter and broadcasts `{ type: 'state', pull, leave }` to all clients. Stats show total decisions and percentage who pulled. Data persisted across server restarts.

## Data files

- `public/games/00035/data/pulls.json` — global pull and leave counts

## Navigation

Matrix: left → 00005 (Pong), right → 00040 (Zeno's Paradox). Both bidirectional.

## Locked content

None.

## Notes for future development

No attribution per vote — the tally is anonymous. No way to change your answer once submitted. The percentage display is the only feedback — no commentary on what the "right" answer is.
