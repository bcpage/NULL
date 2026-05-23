# 00011 — Number Dispenser

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Issues sequential tickets. Each visitor pulls the next number. The counter is persistent and shared — every player who takes a ticket gets a unique sequential number that holds across server restarts.

## How it works

`GET /api/ticket` returns the current counter state. `POST /api/ticket/take` increments the counter, saves to disk, and returns the issued number to the caller. No WebSocket — ticket number is fetched on load and updated after a take. SAP institutional aesthetic.

## Data files

- `public/games/00011/data/tickets.json` — current ticket counter value

## Navigation

Matrix: left → 00010 (Goldfish), right → 00021 (The Countdown), up → 00012 (The Yellow Door), down → 00014 (52!). All bidirectional. Four exits — a central hub room.

## Locked content

None.

## Notes for future development

No WebSocket means two visitors landing simultaneously could race on the counter. A server-side atomic increment or a lock would prevent duplicate ticket numbers under concurrent load.
