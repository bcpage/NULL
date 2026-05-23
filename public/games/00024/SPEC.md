# 00024 — Monty Hall

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Interactive Monty Hall problem. Pick a door, the host reveals a goat, decide whether to stay or switch. Running win statistics are tracked — per browser, not globally shared.

## How it works

Entirely client-side. Three doors rendered; one hides a car, two hide goats (assigned randomly each round). Player picks a door → host reveals a random non-chosen goat door → player chooses to Stay or Switch → result shown. Stats (switch wins/total, stay wins/total, percentages) saved to localStorage under `monty_stats`. No server calls, no WebSocket. Stats accumulate across sessions for the same browser but are not shared between visitors. Door states: default, selected (gold border), revealed (red, goat emoji), winner (green, car emoji).

## Data files

None. Stats in localStorage only.

## Navigation

Matrix: left → 00023 (UUID Generator), up → 00011 (Number Dispenser). Entries from 00021 (The Countdown) are one-way in — no exit back right toward 00021.

## Locked content

None.

## Notes for future development

Room-index.txt describes this as having "running statistics across all plays" — that is per-browser via localStorage, not a global shared counter. A global tally (total switches vs. stays across all visitors) would be a stronger collective mechanic and would require a server-side endpoint.
