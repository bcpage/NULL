# Room 00169 — Starfield

## What it is
Animated canvas starfield with perspective simulation. Stars grouped into depth layers (1–5), each layer moving at proportional speed. Three modes: Forward (stars stream from vanishing point), Rotate (orbital), Radial (burst). Mouse moves the vanishing point in Forward mode. Controls: speed, star count (up to 600), depth layers, trail persistence. Warp button 5× speed multiplier.

## Navigation
- data-nav: matrix
- Connections: 00168 ← → 00170

## Notes
- Fully client-side — pure canvas animation
- Trail effect: fillRect with low alpha each frame (1 - trailAlpha) over canvas
- Forward mode: each star moves radially away from (cx, cy) at layer-proportional speed
- Rotate mode: rotate each star around origin by small angle per frame
- Stars wrap back to origin when off-canvas (forward mode) or random position (others)
- Crosshair drawn at vanishing point origin
- Note: "The stars are not stars. They are facility nodes."
