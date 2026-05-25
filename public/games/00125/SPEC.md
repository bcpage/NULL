# Room 00125 — Sokoban: Block Pusher

## What it is
Classic Sokoban puzzle game. 5 hand-crafted levels of increasing difficulty themed around the facility. Push boxes (■) onto targets (✦) using WASD or arrow keys. Undo with Z/U. Restart level with R. Touch/swipe supported.

## Navigation
- data-nav: matrix
- Connections: 00124 ←

## Notes
- Fully client-side, canvas-based rendering
- 5 levels: CORRIDOR (1 move), TURN (2 moves), DETOUR (7 moves), TWIN PUSH (6 moves), DESCENT (5 moves)
- Unlimited undo
- Facility dark aesthetic (dark tiles, target crosshairs, green box-on-target)
- Move + push counters in HUD
- Win overlay between levels; "FACILITY BLOCK SEQUENCE COMPLETE" on all levels cleared
- Touch swipe support for mobile
