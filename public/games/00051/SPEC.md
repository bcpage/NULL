# 00051 — PROCESS INTERRUPTED

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Name tag room. A SAP-style SUBJ-006 error screen that stops the player and demands a designation before navigation is restored. The player's real cookie UUID is displayed. This is the moment where a visitor becomes a named subject.

## How it works

Page loads with `class="nav-locked"` on `<body>`. CSS rule `body.nav-locked #matrix-nav { display: none !important; }` hides the nav completely. On load, `GET /api/user/me` is called: if the user already has a name, the "EXISTING DESIGNATION" notice appears and `nav-locked` is removed immediately. For new users, nav stays hidden until they submit. Input accepts up to 24 characters. Submit button reads "My name is my passport. Verify me." — disabled until input is non-empty. On submit, `POST /api/user/name` with `{ name }`. On success: button text transforms to "[Name] is your passport. You have been verified." (green, `.verified` class). After 1800ms, `nav-locked` is removed and navigation becomes available. If the user already had a name, the old name is pushed to their `aliases` array in data/users.json before the new name is saved. DEVICE field shows the real cookie UUID parsed from `document.cookie`. TIME field shows `firstSeen` Unix timestamp formatted as `YYYY-MM-DD HH:MM:SS`.

## Data files

- `data/users.json` — `name` field updated on submit; `aliases` array appended if name changes

## Navigation

Matrix: down → 00013 (Cowsay), up → 00029 (The Terminal). Both bidirectional. Primary discovery path: players navigate up from 00013 (Cowsay). Secondary path: players navigate down from 00029 (The Terminal).

## Locked content

The matrix nav itself is locked on arrival for unnamed users. Submitting a designation is the only exit condition.

## Notes for future development

The 24-character limit is enforced both client-side (maxlength) and server-side (slice). Aliases are stored silently — the player is never shown their alias history in this room. A future room could surface alias history without explanation.
