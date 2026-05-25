# Room 00133 — Llama (2D Platformer)

## What it is
A 2D side-scrolling platformer starring a llama navigating the facility corridors. 3 levels of increasing difficulty. Collect gems, avoid falling, reach the EXIT. Moving platforms in levels 2 and 3. Pixel-art llama sprite with walking animation and long neck. Deaths tracked globally per session.

## Navigation
- data-nav: matrix
- Connections: 00132 ←

## Notes
- Fully client-side, canvas-based (560×320 logical pixels)
- WASD or arrow keys, Space to jump
- R to restart at spawn (costs a death)
- Gravity, jump physics, moving platform riding
- 3 levels: ENTRY CORRIDOR, LOWER DECKS, TERMINAL SECTOR
- Moving platforms: level 2 has 1, level 3 has 2 (different speeds)
- Canvas auto-scales to viewport
- Level clear / game complete overlays
- Gem pulse animation
