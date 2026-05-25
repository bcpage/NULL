# Room 00136 — Paper Soccer

## What it is
Two-player WebSocket paper soccer game on a 9×13 node grid. Players move the ball by clicking adjacent nodes, drawing edges between them. Land on a node with existing connections → bounce (same player moves again). Score by reaching the opponent's goal row (top/bottom, cols 3-5). Spectators see live state.

## Navigation
- data-nav: matrix
- Connections: 00135 ← → 00137

## Notes
- Server: `game:'soccer'` WS protocol, shared state, seat assigned privately
- 9×13 node grid. Goals: rows 0 and 12, columns 3-5 (3-cell wide goal)
- Edges stored as sorted coordinate pairs; used edges cannot be reused
- Bounce rule: landing on a node with degree >1 (already has edges) = same turn
- Valid moves highlighted on canvas (clickable nodes near ball)
- Hover highlight on valid nodes
- Pitch outline rendered with goal boxes and center line
- Seats vacated on disconnect, game pauses to waiting
