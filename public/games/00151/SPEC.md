# Room 00151 — Recursive Room

## What it is
A room containing itself. An iframe of room 00151 sits inside room 00151. The iframe contains another iframe. Depth is tracked via URL query param `?d=N`. Rendering stops at depth 5 (replaced with ∞ symbol); the recursion itself does not stop. Header elements are hidden at depth > 0 so the nested frames feel spatially compressed.

## Navigation
- data-nav: matrix
- Connections: 00150 ← → 00152

## Notes
- Fully client-side — no server, no persistence
- iframe src: /game/00151?d={depth+1}; at d≥5, src=about:blank with ∞ written in
- sandbox="allow-same-origin allow-scripts"; pointer-events disabled (user can't navigate inside)
- At depth > 0: hides room-id, title, subtitle, note, nav; reduces padding to 4px
- Depth label in top-right corner of each frame
- Note: "At some depth, the rendering stops. The recursion does not."
