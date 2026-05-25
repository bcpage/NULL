# Room 00160 — The Audit

## What it is
A searchable table of every room in the facility with live occupancy counts. Rows show room ID, current visitor count, a proportional bar, and a blinking live indicator for occupied rooms. Room 00160 is highlighted. Updates in real time via WebSocket presence broadcasts.

## Navigation
- data-nav: matrix
- Connections: 00159 ← → 00161

## Notes
- Client-side with WS; uses /api/games + /api/presence + WS presence broadcasts
- Summary row: total rooms, active now (sum of all counts), most occupied (room + count)
- Table: sortable columns (room ID, occupancy); sticky header; max-height 380px scrollable
- Bar column: proportional width bar, max=highest current occupancy; blue tint if occupied
- Live dot: blinking red circle (CSS animation) shown next to count when occupied
- Search: filters by room number (strips non-digits, pads to 5 chars)
- Row highlight: current room (00160) shown in green with ◄ indicator
- Note: "This room is also in the table."
