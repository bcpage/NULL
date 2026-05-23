# 00031 — The Hallway

**Status:** Built
**Last updated:** 2026-05-23

## What it is

An infinite corridor. The doors don't open. Click to walk forward — the hallway recedes endlessly. A door is always visible at the far end. It is always locked.

## How it works

Canvas animation only. No WebSocket, no server calls. The corridor is drawn as 12 nested rectangular segments with vanishing-point perspective — brightness increases with distance, creating depth. Clicking increments a `targetDepth` value; the camera eases toward it each frame, creating smooth forward motion. The destination door is rendered at the innermost segment and never gets closer. Side doors appear at even-numbered segments. On click, there is a 30% chance a message appears below the canvas from a rotating pool: "The door is locked.", "The handle is cold.", "It does not open.", "You try. Nothing.", "Locked.", "There is no key.", "Not this one.", "The door ignores you.", "It has always been locked." A subtle ambient flicker fires randomly at 2% chance per frame. Background: near-black (#0a0a0f). No room title displayed.

## Data files

None.

## Navigation

Matrix: left → 00017 (The Candle, bidirectional), up → 00032 (The 2am Room, bidirectional), down → 00033 (2am Room entry, one-way out — no return path up to 00031), right → 00047 (Something Under the Bed, one-way dead end — no exits from 00047).

## Locked content

None — the locked doors are atmospheric, not functional gates.

## Notes for future development

The right→00047 and down→00033 exits are both one-way. Players who go right reach a dead end with no exits. Players who go down enter the 2am Room and can navigate left to 00032 but not back up to 00031 directly. The corridor is designed to disorient — exits in non-obvious directions (up, down, right) while the apparent forward motion leads nowhere.
