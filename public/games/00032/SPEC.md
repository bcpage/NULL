# 00032 — The Form

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Bureaucratic intake form titled "FORM NULL-7 — REQUEST FOR CONTINUANCE." Responses are permanent and visible to all visitors in a live scrolling ledger on the right side of the screen.

## How it works

Two-column layout: left column is the form, right column is the submission feed. Fields: Full Name, Purpose of Visit, Date (MM/DD/YYYY), Reference Number, Signature (textarea). Submitting sends `{ game: 'form', type: 'submit', fields: {...} }` over WebSocket. Server persists the entry and broadcasts `{ game: 'form', type: 'new', entry: {...} }` to all connected clients, who prepend it to the feed with a fade-in animation. On connect, server sends `{ game: 'form', type: 'history', submissions: [...] }` and the feed renders in reverse-chronological order. Feed displays a maximum of 60 entries in the DOM (older entries pushed out). A note below the submit button reads: "All submissions are permanent and visible to all visitors." Paper-and-ink aesthetic: cream background (#f0ede6, #f8f5ee), Courier New monospace throughout. The matrix nav is injected into a dark strip at the top of the page rather than the usual position.

## Data files

- `public/games/00032/data/submissions.json` — all submitted forms, persistent

## Navigation

Matrix: down → 00031 (The Hallway), right → 00033 (2am Room). Both bidirectional.

## Locked content

None.

## Notes for future development

No validation — all fields are optional. The form accepts and stores blank submissions. No rate limiting per visitor. The 60-entry DOM cap is client-side only; the server-side file grows unboundedly.
