# Room 00148 — Observation Room

## What it is
Live room occupancy display. Shows all 153 rooms as a grid of cells; each occupied room glows red and pulses. Room 00148 (this room) glows orange. Multiple visitors in one room show a count. You are watching others, probably without them knowing.

## Navigation
- data-nav: matrix
- Connections: 00147 ← → 00149

## Notes
- Presence tracking: matrix-nav.js opens a WS on every page, sends { game:'presence', room:'XXXXX' }
- Server maintains presenceMap (ws→roomId); broadcasts { game:'presence', type:'update', rooms:{...} } on any change
- GET /api/presence returns current room counts snapshot
- Grid: 15 columns × rows, CELL=32px, rooms 00001–00153
- Occupied cells: radial glow + pulsing fill; empty cells: near-black
- "You are here" cell (00148) glows orange instead of red
- Count label shown if >1 visitors in a room
- Active rooms list below canvas shows all occupied rooms with visitor counts
- Note: "You are watching. They may not know."
