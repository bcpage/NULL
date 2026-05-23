# 00046 — Cheshire Cat

**Status:** Built
**Last updated:** 2026-05-23

## What it is

The Cheshire Cat fades in and out. The smile stays last. Quotes from Alice in Wonderland appear when the cat is nearly invisible. Convergence drain — three separate one-way paths lead here.

## How it works

Canvas animation only. No WebSocket, no server calls. Opacity oscillates sinusoidally via `phase += 0.003` (slow, full cycle ~35 seconds). The cat — body, head, stripes, ears, eyes, nose, whiskers — fades with the opacity. The smile is rendered last with a separate alpha calculation: it persists visibly until opacity drops below 0.05, outlasting every other feature. When opacity drops below 0.1, a quote appears from a pool of six ("We're all mad here.", "I'm not crazy. My reality is just different than yours.", etc.). Quote fades back out when opacity rises above 0.3. Near-black background (#050508).

## Data files

None.

## Navigation

Matrix: right → 00048 (Useless Information, bidirectional). Three one-way entries: from 00026 (The Plant, down), 00034 (Hangman, down), 00042 (The Heap, down). No exit back toward any entry point.

## Locked content

None.

## Notes for future development

The convergence drain design is intentional — three separate narrative threads (neglect, loss, paradox) funnel here. The room is a destination, not a waypoint. The smile-last mechanic is the implementation of the Carroll original.
