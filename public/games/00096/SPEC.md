# Room 00096 — UUID Generator

## What it is
Generates version 4 UUIDs with each section color-coded and explained. Click to copy. Keeps a history of recent generations.

## Mechanic
Uses crypto.randomUUID() with manual fallback. Color codes: red=time_low, orange=time_mid, yellow=version+random, green=clock_seq, blue=node. Generates a new UUID on load. History shows last 7 UUIDs (current excluded). Click anywhere on UUID or Copy button to copy to clipboard.

## Navigation
- data-nav: matrix
- Connections: 00095 ← → 00097

## Notes
- No server-side logic
- Uses navigator.clipboard with execCommand fallback
- "2¹²² possible v4 UUIDs — roughly 5 undecillion" is accurate
