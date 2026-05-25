# Room 00086 — The Bulletin Board

## What it is
A persistent community notice board. Pin anything. It stays.

## Mechanic
Free-text field (280 chars) + optional author name. Posted notices persist indefinitely, shown newest-first. Refreshes every 30s. Accumulates across all visitors.

## Navigation
- data-nav: matrix
- Connections: 00085 ← → 00087

## Server
- GET /api/bulletin — returns all pins (newest first)
- POST /api/bulletin — adds a pin { text, author }, returns updated list
- Data: public/games/00086/data/bulletin.json (max 200 pins)
