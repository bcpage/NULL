# Room 00088 — 2am Room

## What it is
Only open between 2:00am and 3:00am (local time). At all other hours, a clock and a countdown. For the one hour it is open, a quiet message about being awake at this hour.

## Mechanic
Client-side time check. Before 2am: shows current time and countdown to opening. During 2am hour: shows a quiet atmospheric text about being awake at this hour, plus a countdown to closing. At 3am: room locks again.

## Navigation
- data-nav: matrix
- Connections: 00087 ← → 00089

## Notes
- Uses client local time — can be visited by manipulating system clock
- No server-side logic
- The content doesn't judge. It just acknowledges.
