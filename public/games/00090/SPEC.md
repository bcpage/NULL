# Room 00090 — Cracker Barrel Peg Solitaire

## What it is
The classic 15-hole triangle peg puzzle from Cracker Barrel restaurants. Remove one peg, then jump pegs over each other to eliminate them. The fewer pegs left, the smarter you are — according to the official Cracker Barrel scoring.

## Mechanic
Click any starting peg to remove it. Then click a peg to select it (highlights red), then click a valid landing hole (glows) to jump. Valid moves highlight automatically. Game ends when no jumps remain.

Official Cracker Barrel verdicts:
- 1 peg left: "Genius"
- 2 pegs: "Purty Smart"  
- 3 pegs: "Just Plain Dumb"

## Navigation
- data-nav: matrix
- Connections: 00089 ← → 00091

## Notes
- Pure client-side, no server logic
- Triangle grid rendered as CSS grid
- Jump direction logic handles all 6 triangle directions
