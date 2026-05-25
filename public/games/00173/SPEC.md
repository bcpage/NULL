# Room 00173 — Lissajous

## What it is
Animated Lissajous figures on 440×440 canvas. Parameters: frequency A (x-axis, 1–10), frequency B (y-axis, 1–10), phase delta (0–2π), animation speed, trail persistence. Presets: 1:1, 1:2, 1:3, 2:3, 3:4, 3:5, 5:6. Color cycling (5 palettes). Trail effect gives neon/glow look.

## Navigation
- data-nav: matrix
- Connections: 00172 ← → 00174

## Notes
- Fully client-side — pure canvas animation
- Formula: x(t) = sin(a·t + δ), y(t) = sin(b·t); scaled to fit canvas
- Trail: fillRect with low alpha each frame
- Multiple steps per frame at high speed to keep curves smooth
- When a/b is rational, curve is closed; when irrational, fills square
- Equation displayed below canvas in facility notation
- Note: "When a/b is rational, the curve closes. When irrational, it fills the plane."
