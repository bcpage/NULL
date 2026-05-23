# 00033 — 2am Room

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Fully accessible only between 2:00am and 2:59am local time. Outside that window the room is dim and closed, showing a countdown to when it opens. The content: "You found it. Most people don't come here at this hour. Or maybe they do — you wouldn't know. There's no way to tell who else is here right now. This room doesn't do anything. It's just open."

## How it works

Client-side time check only. No WebSocket, no server calls. `new Date().getHours() === 2` determines open state. When open: content visible, clock shown in lighter color, countdown shows "closes in MM:SS." When closed: content hidden/dimmed, message says "this room is closed," subtitle shows time until 2am (hours, or MM:SS countdown if less than an hour away). Ticks every second.

## Data files

None.

## Navigation

Matrix: left → 00032 (The Form, bidirectional). One-way entry from 00031 (The Hallway) via down — no exit back up to 00031.

## Locked content

The room content is time-locked — visible only 2:00–2:59am local time. The nav itself is not locked; players can leave at any time.

## Notes for future development

Time check is client-side, trivially bypassable by changing system clock. That's fine — the room's purpose is to reward players who are actually awake at 2am, not to enforce access control. No shared state means players have no way to know who else visited at 2am, which the copy acknowledges directly.
