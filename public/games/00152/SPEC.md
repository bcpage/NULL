# Room 00152 — Game of Life

## What it is
Conway's Game of Life. 520×360 canvas, CELL=8px, 65×45 grid. Draw cells by clicking/dragging. Loads with random 15% fill. 10 classic patterns: Glider, Blinker, Toad, Beacon, Pulsar, Gosper Glider Gun, LWSS, R-Pentomino, Diehard, Acorn. Four speed modes. Cells colored by neighbor count (brightness varies with liveliness).

## Navigation
- data-nav: matrix
- Connections: 00151 ← → 00153

## Notes
- Fully client-side — no server, no persistence
- Grid: toroidal (wraps at edges) using ((x+COLS)%COLS) indexing
- Two Uint8Array buffers swapped each generation for performance
- Cell colors: base brightness 40 + neighbor_count × 20, RGB shifted toward green (organic feel)
- Grid lines: very dark (#06060e) for subtle cell delineation
- Controls: Play/Stop toggle, Step, Clear, Pattern dropdown (centers pattern in grid), Speed dropdown
- Stats: generation, population, peak population, running/paused status
- Mouse: click+drag draws cells; clicking live cell sets erase mode for drag
- Touch: preventDefault on touchstart/touchmove for draw support
- Note: "Three rules. Underpopulation kills the lonely. Overpopulation kills the crowded. John Conway, 1970."
