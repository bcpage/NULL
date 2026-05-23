# 00047 — Something Under the Bed

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Dead end. Two questions. Yes or No. Nothing is explained. No exits.

## How it works

Client-side only. No WebSocket, no server calls. Two questions appear in sequence with 800ms fade transitions: "Did you hear that?" then "Are you alone right now?" Each answered Yes or No. The four possible answer combinations produce four distinct responses:
- No / No: "Good. Then there is nothing to worry about. Enjoy the rest of your visit."
- No / Yes: "That seems about right. Alone is fine. Alone is probably fine."
- Yes / No: "You heard it and you're not alone. So someone else heard it too. Ask them what it was. Don't."
- Yes / Yes: "You heard it. And you're alone. So it wasn't you."

After both answers, the buttons disappear and the response fades in slowly, then brightens after 3 seconds. Near-black background (#050508).

## Data files

None.

## Navigation

Matrix: No exits. One-way entry from 00031 (The Hallway, right). This is a true dead end — the matrix nav renders with all buttons disabled. Visitors can only leave by using the browser back button.

## Locked content

None — the room itself is the locked end.

## Notes for future development

The room works entirely through what it doesn't do. No mechanic, no reward, no explanation for why this room exists or why it is here. The nav being fully disabled is intentional and correct.
