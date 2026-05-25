# Room 00159 — Mandelbrot Set

## What it is
Interactive Mandelbrot set explorer. 520×380 canvas. Click to center, scroll to zoom, drag to pan, pinch-zoom on touch. Renders in tiles asynchronously (32px tiles, partial progress shown). Colors: dark blue-black inside set → blue → teal → yellow edge. Iteration count auto-increases with zoom depth (max 800).

## Navigation
- data-nav: matrix
- Connections: 00158 ← → 00160

## Notes
- Fully client-side — no server, no persistence
- Mandelbrot iteration: z_{n+1} = z_n² + c, escape radius 2, max iterations variable
- Smooth coloring: escape velocity = i + 1 - log2(log2(|z|²)/2) for non-integer gradient
- Tile rendering: 32px TILE, setTimeout between tiles to avoid blocking UI; partial progress visible
- Color palette: r=f*3*255, g=f*3*255-128 clamped, b=255-f*400 clamped (blue→teal→yellow)
- maxIter scaling: 100 + 50*log2(3/scale), capped at 800
- Controls: Reset (cx=-0.5, cy=0, scale=3), Zoom In ×2, Zoom Out ×2, Re-render
- Info row: center real, center imaginary, zoom level (3/scale rounded), current iterations
- Hover: shows c = re + imi in real-time (no re-render on hover)
- Note: "The boundary has infinite length."
