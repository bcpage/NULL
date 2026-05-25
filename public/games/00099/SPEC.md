# Room 00099 — The Joshua Room

## What it is
WarGames reference. "JOSHUA" on a dark screen with a blinking cursor. Locked until someone achieves a draw in the Tic-Tac-Toe room (00003). When unlocked: "Greetings, Professor Falken."

## Mechanic
On load, checks GET /api/joshua. If unlocked: shows the WarGames greeting sequence. If locked: shows JOSHUA + blinking cursor, no explanation.

The unlock trigger: server detects TTT draw → sets joshuaUnlocked = true → persists to file.

## Navigation
- data-nav: matrix
- Connections: 00098 ← → 00100

## Server
- GET /api/joshua → { unlocked: bool }
- joshuaUnlocked flag set by TTT draw detection in WebSocket handler
- Data: public/games/00099/data/joshua.json

## Notes
- "A strange game. The only winning move is not to play." — WarGames (1983)
- The locked state shows nothing about how to unlock it
