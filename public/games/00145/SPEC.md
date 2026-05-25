# Room 00145 — Sorites Paradox

## What it is
Grain-of-sand paradox room. Users add grains (1, 10, 100 at a time) to a heap on canvas. When they decide it's a heap, they press "THIS IS A HEAP" — their threshold is recorded and submitted to the aggregate. The aggregate histogram shows when other users said heap. Users can add many more grains without penalty.

## Navigation
- data-nav: matrix
- Connections: 00144 ← → 00146

## Notes
- Server: GET /api/sorites (buckets, median, mean), POST /api/sorites (grains count)
- Data: public/games/00145/data/sorites.json
- Max stored votes: 10,000. Max displayable grains on canvas: 800 (pile physics).
- Aggregate buckets: 1-9, 10-49, 50-99, 100-249, 250-499, 500-999, 1000-2499, 2500+
- localStorage: 'sorites_answered' prevents re-answering (stores grain count)
- Canvas: grains placed in heap pile pattern using sqrt for spread and height
- Note: "The grain does not know it is in a heap. The heap does not know it is a heap. Language does not resolve this. Mathematics does not resolve this. Adding one more grain."
