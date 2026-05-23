# 00021 — The Countdown

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A countdown to an unspecified event. The destination is not explained. When it reaches zero, a new countdown begins.

## How it works

Entirely client-side. No WebSocket, no server calls. On load, checks localStorage for a saved countdown state. If a valid future target exists, resumes it. Otherwise, picks a random event from a pool of seven: "the event" (1hr), "it" (2hr), "everything" (1.5hr), "the end" (2.5hr), "nothing in particular" (30min), "the thing" (1.25hr), "whatever comes next" (1.75hr). A random subtitle is also chosen: "until something", "until it happens", "prepare accordingly", "you have been warned", "not that it matters." Timer displays HH:MM:SS in red (#e94560). Color shifts orange below 10 minutes, bright red below 1 minute. At zero, waits 2 seconds then picks a new event. State persisted in localStorage so returning visitors resume the same countdown mid-session.

## Data files

None. State in localStorage only — not shared between visitors.

## Navigation

Matrix: up → 00020 (Grade School Clock), right → 00024 (Monty Hall). One-way entry from 00011 (Number Dispenser) — no exit back left to 00011.

## Locked content

None.

## Notes for future development

Each visitor sees their own independent countdown, not a shared one. The events and their durations are entirely arbitrary — the vagueness is the mechanic. A server-synced countdown shared by all visitors simultaneously would be a different (and potentially more powerful) room.
