# Room 00091 — External Observation Windows

## What it is
Live NCDOT traffic camera feeds, framed as proof the outside world exists. The facility is underground. These windows confirm there is still a surface.

## Mechanic
Four camera panels showing NCDOT traffic cameras (I-40, I-85, I-277 in NC). Images auto-refresh every 60 seconds. Scan-line overlay on each frame. Shows "SIGNAL LOST" if a feed fails to load. No interaction.

## Navigation
- data-nav: matrix
- Connections: 00090 ← → 00092

## Notes
- No server-side logic
- Camera image URLs: tims.ncdot.gov/tims/api/camera/image/{id}
- CORS/availability varies — feeds may show SIGNAL LOST depending on NCDOT server state
- Cache-busted with ?t= timestamp on each refresh
