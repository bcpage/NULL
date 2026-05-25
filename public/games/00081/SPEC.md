# Room 00081 — Tower of Hanoi

## What it is
The classic ring puzzle. Move all rings from peg 1 to peg 3. A larger ring can never sit on a smaller one.

## Mechanic
Canvas-rendered pegs and rings. Click a peg to pick up its top ring, click another peg to place it. Selectable ring count 3–8. Move counter tracks progress vs. optimal (2^n - 1). Auto-resets on solve.

The monks legend: 64 golden rings, one move per second since the dawn of time. When finished, the universe ends. At optimal play, that is 585 billion years.

## Navigation
- data-nav: matrix
- Connections: 00080 ← → 00082

## Notes
- No server-side logic
- Ring colors shade from red (large) to dark (small)
- Optimal move count displayed at start and compared at solve
