# Room 00098 — Activity Histogram

## What it is
A bar chart showing what hours of the day subjects (users) visit the facility. Clinical observatory framing.

## Mechanic
Reads all user lastSeen timestamps from users.json, buckets them into 24-hour histogram. Bar chart rendered as CSS. Peak hour in red, high hours in orange. Generates a short clinical observation about patterns (nocturnal vs diurnal, 2-4am anomaly, etc).

## Navigation
- data-nav: matrix
- Connections: 00097 ← → 00099

## Server
- GET /api/activity → { histogram: [24 counts] }
- Reads users.json and counts visits by hour from lastSeen timestamps
