# [00054] — Inspirational Comments

**Status:** Built
**Last updated:** 2026-05-23

## What it is
Displays one message per visit in a sincere institutional voice. The message rotates
across ~50 affirmations that oscillate between genuine warmth and mild institutional
dread — "You came back. That matters." / "We see you." / "Good." The tone is earnest;
the facility means well; the framing is clinical.

## How it works
Client-side only. 50 messages hardcoded in a JS array. Message selected by a time-based
index (changes every 30 minutes) so it's stable within a session but rotates across
visits. Fades in over 1.2 seconds. No server calls.

## Data files
None.

## Navigation
Matrix nav. Connects: 00053 (left), 00055 (right).

## Locked content
None.

## Notes for future development
Could pull the message server-side and weight toward messages the user hasn't seen,
using their UUID to track history. For now the 30-minute rotation gives enough
variation. Adding to the message pool is low-cost and encouraged.
