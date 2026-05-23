# 00013 — Cowsay

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Enter text. A cow says it. Classic Unix utility rendered in the browser. Output is broadcast to all connected players — everyone sees what everyone types.

## How it works

WebSocket-based. Player types text, client sends it over WebSocket. Server renders the cowsay ASCII art (built-in logic, not a system `cowsay` call) and broadcasts the result to all connected clients. Previous outputs accumulate in the feed until cleared or the session resets. SAP institutional aesthetic.

## Data files

None. Output feed is in-memory only.

## Navigation

Matrix: right → 00010 (Goldfish), down → 00029 (The Terminal), left → 00012 (The Yellow Door), up → 00051 (PROCESS INTERRUPTED). All bidirectional. The up exit to 00051 is the primary discovery path for the name tag room.

## Locked content

None.

## Notes for future development

The up→00051 connection is load-bearing for the narrative — players stumbling upward from Cowsay are the intended discovery path for the name tag room. The room's tone (whimsical Unix utility) deliberately contrasts with 00051's institutional horror.
