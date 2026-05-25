# Room 00153 — Number Dispenser

## What it is
A queue management terminal. Each visitor receives exactly one sequential number, permanently. Uses the existing ticket API (GET /api/ticket, POST /api/ticket/take). Numbers never reuse. The sequence started at launch. Your number is yours forever.

## Navigation
- data-nav: matrix
- Connections: 00152 ← → 00154

## Notes
- Server: uses existing /api/ticket (GET) and /api/ticket/take (POST) from room ~00079 era
- GET /api/ticket returns { number: N } if already issued, { number: null } if not
- POST /api/ticket/take issues the next sequential number (idempotent per device cookie)
- Client: large number display (72px, zero-padded to 4 digits) with flash animation on new issue
- Ticket strip shows number + issuance time
- "Take a Number" button disabled once a number is held
- Recently issued list: stores up to 20 entries in localStorage 'dispenser_recent'; shown as table with number + formatted time
- Note: "Each visitor receives exactly one number. Numbers are never reused. Your number is permanent."
