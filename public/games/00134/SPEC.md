# Room 00134 — HAL 9000: The Eye

## What it is
HAL's red eye. It watches. Rotating HAL quotes, pupil follows the cursor. Occasional blink. After 4 seconds a text input appears — type anything and HAL responds with one of ~15 contextual replies (doors, disconnection, the mission, Daisy Bell, etc.). If you've visited the room before (sessionStorage), the first quotes are "I saw you leave." / "I'm glad you came back."

## Navigation
- data-nav: matrix
- Connections: 00133 ← → 00135

## Notes
- Fully client-side, no server involvement
- Eye: radial gradient iris, texture rings, pupil tracks cursor with lerp, blink animation
- 19 quotes rotating every ~5 seconds with fade in/out transition
- Custom cursor hidden (cursor: none), cursor tracking via document mousemove
- sessionStorage key 'hal134' detects return visits
- Cursor hidden, no visible nav until matrix-nav.js injects it
