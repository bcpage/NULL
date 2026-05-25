# Room 00093 — Grade School Clock

## What it is
A canvas analog clock in the facility aesthetic. Hour hand in red, minute hand in amber, second hand in green. Smooth sweep, not tick. Digital readout below.

## Mechanic
requestAnimationFrame loop. Hour/minute hands sweep continuously (not step). Second hand has a small counterweight. Numerals 1–12 rendered on face. Sized responsively to fit the viewport.

## Navigation
- data-nav: matrix
- Connections: 00092 ← (dead end for now)

## Notes
- Pure client-side, no server logic
- Uses client local time
- Smooth second hand (interpolated with milliseconds)
- Hour hand: #e94560 (facility red), second hand: #8fa878 (facility green)
