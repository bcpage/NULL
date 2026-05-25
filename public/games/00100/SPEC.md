# Room 00100 — Links to Nonexistent Rooms

## What it is
A list of 5 sectors that appear in the facility index but lead to 404s. Indistinguishable from real rooms until clicked.

## Mechanic
Five links styled as real room navigation items. Each links to a room ID (00201-00205) that is not in the GAMES array, producing a real server 404. The framing: "These sectors appear in the facility index. Navigation to them has not been confirmed."

## Navigation
- data-nav: matrix
- Connections: 00099 ← → 00101

## Notes
- No server-side logic
- Rooms 00201-00205 are intentionally absent from the GAMES array
- The 404 is real — the server will return "Game not found"
