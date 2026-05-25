# Room 00147 — Goldfish

## What it is
A goldfish in a bowl. The fish swims around autonomously, changes direction toward random targets, produces bubbles occasionally, wags its tail. The bowl has glass highlights, gravel, a small plant, a base. The fish has been here since launch. It has not been fed. It does not seem to mind.

## Navigation
- data-nav: matrix
- Connections: 00146 ← → 00148

## Notes
- Fully client-side — no server, no persistence (except localStorage for visit count)
- Animation: 30fps with requestAnimationFrame via setInterval
- Fish: body ellipse with radial gradient, scale lines, tail wag oscillation, blink every 80 frames
- Eye follows natural fish anatomy: white + dark pupil + highlight dot
- Mood face: constant neutral (fish don't have moods visible from outside)
- Bubbles: randomly emitted, rise with horizontal drift, fade out
- Caustic light patterns: 8 overlapping ellipses oscillating gently
- Visit count: localStorage 'goldfish_visits', increments per page load
- Uptime: calculated from approximate platform launch date (Jan 1, 2025)
- Note: "The fish has been here since launch. It has not been fed. It does not seem to mind."
