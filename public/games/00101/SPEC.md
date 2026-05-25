# Room 00101 — Sliding Tile Puzzle (15-Puzzle)

## What it is
The classic 4×4 sliding tile puzzle. 15 numbered tiles, one blank space. Slide tiles into the blank to arrange them 1-15.

## Mechanic
Click any tile adjacent to the blank to slide it. Arrow keys also work (inverted — arrow direction moves tile into blank). Move counter tracks progress. Solvability check ensures scramble is always solvable. Detects solved state.

## Navigation
- data-nav: matrix
- Connections: 00100 ← (dead end for now)

## Notes
- Pure client-side, no server logic
- Solvability algorithm: count inversions + blank row position (standard 15-puzzle check)
- Keyboard: arrow keys slide the tile adjacent to blank in that direction
