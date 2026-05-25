# Room 00157 — Fibonacci

## What it is
Three views into the Fibonacci sequence: (1) Spiral — classic Fibonacci rectangle tiling with golden spiral arcs overlaid; (2) Sequence — bar chart of F(1)–F(17); (3) Ratio — line plot of F(n+1)/F(n) converging to φ with dashed reference line. Sequence scrolls animating up to index 30 at 600ms intervals.

## Navigation
- data-nav: matrix
- Connections: 00156 ← → 00158

## Notes
- Fully client-side — no server, no persistence
- FIB array uses BigInt up to 10^60 for precision
- Spiral view: first 12 Fibonacci rectangles in classic tiling layout, auto-centered; golden spiral arc drawn per rectangle quadrant
- Bars view: F(1)–F(17) as proportional bars, current bar highlighted red in alternating flash
- Ratio view: F(n+1)/F(n) for n=2..24, converging to φ=1.6180339887...; dashed φ line; live display of ratio to 10 decimal places
- Sequence list: 40 terms shown as chips; current animating term highlighted red; BigInts over 10^15 truncated with ellipsis
- Tab controls: Spiral | Sequence | Ratio (no reload, just swaps draw function)
- Note: "The ratio of consecutive terms converges to φ. The spiral appears in shells, galaxies, and broccoli."
