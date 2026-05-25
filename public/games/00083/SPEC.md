# Room 00083 — The Registry

## What it is
A bureaucratic intake form. All personnel must register upon arrival. Records are permanent and accumulate across all visitors.

## Mechanic
Form fields: Designation, Origin Sector, Purpose of Visit, Clearance Level (dropdown). On submit, entry is saved server-side and assigned a sequential ID. The ledger below the form shows recent entries (newest first, up to 50 shown). Records do not expire.

## Navigation
- data-nav: matrix
- Connections: 00082 ← → 00084

## Server
- GET /api/registry — returns last 50 entries
- POST /api/registry — saves a new entry, returns the entry with assigned ID
- Data: public/games/00083/data/registry.json (max 200 entries)

## Notes
- Entries are public — all visitors see the same ledger
- Clearance levels: NONE / PROVISIONAL / STANDARD / ELEVATED / CLASSIFIED
- The form resets after successful submission
