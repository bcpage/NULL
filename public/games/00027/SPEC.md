# 00027 — Calculator

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A calculator. Standard four-function with percentage and sign-toggle. Entirely local — each visitor has their own independent session.

## How it works

Fully client-side. No WebSocket, no server calls. 4×4 button grid: AC, +/-, %, ÷ / 7–9, × / 4–6, − / 1–3, + / 0, ., =. Expression line shows pending operation above the main result display. 12-digit cap on input. Division by zero and non-finite results show "Error" in red. Keyboard supported: digits, operators, Enter (=), Backspace/Escape (AC), * maps to ×, / maps to ÷. Fredoka One aesthetic, #1a1a2e background.

## Data files

None.

## Navigation

Matrix: left → 00026 (The Plant), right → 00028 (Galton Board). Both bidirectional.

## Locked content

None.

## Notes for future development

Room-index describes this as simply "A calculator." That is accurate. No shared state, no mechanic beyond the tool itself. Its placement between The Plant and Galton Board is the only context it gets.
