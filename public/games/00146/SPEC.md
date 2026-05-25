# Room 00146 — Shared Pet

## What it is
One shared digital pet across all users. It gets hungry, sad, and sick if neglected. If health reaches 0 it dies. When it dies it is recorded in history and a new pet appears after 60 seconds. Players can feed it (reduces hunger) or play with it (increases happiness).

## Navigation
- data-nav: matrix
- Connections: 00145 ← → 00147

## Notes
- Server: decay loop every 2 minutes; hunger +4/hr, happiness -3/hr, health -5/hr if hunger>80
- API: GET /api/pet (state), POST /api/pet/feed, POST /api/pet/play
- WS: broadcasts { game:'pet', type:'state' } on every action and decay tick
- Data: public/games/00146/data/pet.json { pet: {...}, history: [...] }
- Pet names from pool: REDACT, THRESHOLD, LIMINAL, DATUM, SIGNAL, ANOMALY, VESTIBULE, RECURSIVE, FRAGMENT, TRANSIT, RESIDUAL, CATALYST
- On death: pet marked alive:false, history entry added, new pet spawns after 60s
- Client: canvas animation at 20fps, blink every 80 frames, bounce oscillation, mood-based face
- Feed button has 2s cooldown; play button has 2s cooldown
- Note: "If nobody feeds it, it gets sick. If nobody feeds it for two days, it dies. When it dies, it is recorded."
