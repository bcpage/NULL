# Room 00082 — The Signal

## What it is
A real-time facility activity monitor. Every action taken anywhere on the platform appears here as a cryptic log entry. The facility is always running. You are watching it breathe.

## Mechanic
Connects via WebSocket and receives all broadcast messages from the server. Translates them into human-readable log lines with source codes (GRID-01, LIFE-01, COMM-01, etc.) and timestamps. New events briefly highlight before dimming. A noise canvas in the corner flickers constantly — the signal is always alive even when quiet.

## Navigation
- data-nav: matrix
- Connections: 00081 ← → 00083

## Notes
- No server changes needed — receives the global broadcast stream
- Unknown game types are shown as SYS-XX events
- Capped at 60 visible events, oldest drop off the bottom
- Auto-reconnects on disconnect
