# 00007 — Chat

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Shared live chat. All connected players see the same message feed in real time. Anyone can post; no account required beyond the name stored in localStorage.

## How it works

WebSocket-based. Messages broadcast server-side to all connected clients and appended to the feed in the order received. Display name stored in `localStorage` under `chat-name` — the same key used by Voice Notes, so names persist across both rooms. No message history persistence — feed resets on server restart. Fredoka One aesthetic, #1a1a2e background.

## Data files

None. Message history is in-memory only.

## Navigation

Matrix: left → 00006 (Connect Four), down → 00010 (Goldfish), right → 00038 (Shared Chalkboard). All bidirectional.

## Locked content

None.

## Notes for future development

Message history could be persisted to a JSON file with a rolling cap. The localStorage name key (`chat-name`) is shared with Voice Notes — coordinated or intentional depending on design direction.
