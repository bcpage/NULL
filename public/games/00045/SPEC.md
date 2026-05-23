# 00045 — Logo Turtle

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Logo turtle graphics. Draw with movement commands. 1967 MIT aesthetic. A turtle moves around the canvas leaving a trail.

## How it works

Client-side only. No WebSocket, no server calls. Commands entered in a text input and executed: `fd`/`forward N` (move forward N pixels), `bk`/`back`/`backward N`, `rt`/`right N` (rotate right N degrees), `lt`/`left N` (rotate left), `pu`/`penup` (stop drawing), `pd`/`pendown` (resume drawing), `home` (return to center), `cs`/`clearscreen` (clear and home), `color NAME`, `setwidth`/`width N`. Default pen color is #33ff33 (green-on-black terminal aesthetic). Drawing rendered on an offscreen canvas that persists between commands. Turtle sprite overlaid on the main canvas showing current position and heading.

## Data files

None.

## Navigation

Matrix: left → 00038 (Shared Chalkboard). Single exit — a dead end in the right direction.

## Locked content

None.

## Notes for future development

Each visitor has their own private canvas — drawings are not shared. A shared turtle canvas (like the Shared Chalkboard) would be a natural extension. Currently a terminus room with one exit.
