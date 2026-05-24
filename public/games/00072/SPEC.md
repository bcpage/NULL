# [00072] — The Hookah-Smoking Caterpillar

**Status:** Built
**Last updated:** 2026-05-23

## What it is
"Who are you?" A text input. Every answer is rejected. The rejections cycle through
30 variations — "That is not an answer.", "I did not ask what you do.", "You are
stalling.", "Again." — then repeat. The question never changes. No answer is ever
accepted. The room ends when the player navigates away.

## How it works
Text input + submit button. On submit: clears input, briefly fades out rejection
text, fades in new rejection from the pool. Rejections cycle in order (not random)
so the full pool is exhausted before repeating. Enter key works. Input auto-focused.
No server calls. Reference: the Caterpillar in Alice's Adventures in Wonderland (1865).

## Data files
None.

## Navigation
Matrix nav. Connects: 00071 (left).

## Locked content
None.

## Notes for future development
Could make rejections randomized instead of sequential — currently sequential so
that repeat visitors see the full pool in order. Could add a counter showing how
many times the question has been asked in this session. Both would alter the tone;
consider carefully before adding either.
