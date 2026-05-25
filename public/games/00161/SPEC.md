# Room 00161 — Cellular Automata

## What it is
1D elementary cellular automata (Wolfram). 520×360 canvas, CELL=3px, 173 cells wide. New generation appended at bottom; canvas scrolls up. Default rule 110 (Turing-complete). Rule display shows all 8 triplet patterns and their output bit. Three speed modes. Single-cell or random initial condition.

## Navigation
- data-nav: matrix
- Connections: 00160 ← → 00162

## Notes
- Fully client-side — no server, no persistence
- ruleBits: 8-element array extracted from rule number (bit i = (rule>>i)&1)
- Step: for each cell, compute (left<<2)|(center<<1)|right as 3-bit index into ruleBits
- Canvas: scroll via getImageData/putImageData trick — copies all but top CELL rows up by CELL
- New row: drawn at bottom (H-CELL) in hsl color shifting slowly with generation
- Rule display: 8 boxes showing triplet pattern → output bit (dark square = 1, empty = 0)
- Class label: maps known rules to Wolfram classes I–IV (others default to II)
- Rule 110 (Turing-complete), Rule 30 (RNG), Rule 90 (Sierpinski triangle)
- Note: "Rule 110 is Turing-complete. Rule 30 is used as a random number generator."
