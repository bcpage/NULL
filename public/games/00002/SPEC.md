# 00002 — Cookie

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Identity gate. Any visitor without the `device` cookie is force-redirected here before they can access any room. They must click at least once to proceed. The click timestamps their record and generates their UUID. The room is honest about what just happened — the user still won't fully register it.

## How it works

Server checks for `device` cookie on every request. Missing cookie → 302 redirect to `/game/00002`. On click: POST to `/api/user/click` (or similar), server sets the cookie with a 1-year expiry, increments `cookieClicks` in the user record, saves to data/users.json. Cycling message copy acknowledges the action with deliberate discomfort. After the beat, player can navigate freely.

## Data files

- `public/games/00002/data/cookie.json` — global click counter across all visitors

## Navigation

Not in the matrix nav system. No `data-nav="matrix"` on body. Hard redirect target only — players cannot navigate here intentionally via matrix buttons.

## Locked content

None — the room itself is the lock mechanism for all other rooms.

## Notes for future development

The `cookieClicks` count per user is stored in data/users.json and could be surfaced in a later room without explanation. The cycling copy lines are the main atmospheric lever here; they can be expanded.
