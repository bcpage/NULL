# Room 00137 — NULL Interactive Fiction

## What it is
A text-adventure parser game set inside the NULL facility itself. 12 rooms: entry, corridor, office, canteen, stairwell, admin, records, vault, B-wing junction, observation deck, server room, and transit bay. Items to find, read, and carry. The Wizard of Frobozz appears at random, unhelpfully.

## Navigation
- data-nav: matrix
- Connections: 00136 ← → 00138

## Notes
- Fully client-side — no server state
- Parser supports: N/S/E/W, GO, LOOK/L, EXAMINE/X, TAKE/GET, DROP, INVENTORY/I, READ, EAT, WAIT/Z, SCORE, HELP, QUIT (refused), WAVE, SAY, XYZZY/PLUGH
- Items: visitor badge, observation file, memo, C7 snack, empty folder, anomalous object, server log printout
- The hum in the server room cannot be taken
- SCORE tracks rooms visited and items found
- Command history with ↑/↓ arrow keys
- Wizard of Frobozz appears randomly (~8% per move); more often in admin room (~35%), and on WAIT (~30%)
- The observation file reads: "Was observed."
- The memo reads: "DISREGARD PREVIOUS MEMO"
- The server log shows the player's own most recent commands back at them
- Quitting is refused
