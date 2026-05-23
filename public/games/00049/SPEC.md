# 00049 — MASH

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Classic paper fortune-telling game. Mansion, Apartment, Shack, House. Fill in your options across six categories, draw the spiral, and receive your fate.

## How it works

Entirely client-side. No WebSocket, no server calls. Six categories: Where You'll Live (MASH letters), Spouse, Job, City, Kids (defaults: 0/2/5/10), Car, Pet (defaults: Dog/Cat/Snake/Ferret). Player fills in up to 4 options per category, then clicks "Draw Spiral." A spiral animates on a small canvas over ~40 frames; the count (3–11, random) appears at the center. Once animation completes, a Josephus-style elimination algorithm counts n positions around all active items in a ring, eliminates the item at position n−1, and repeats until one winner per category remains. Eliminated inputs get struck through and disabled; winners turn gold (#ffcc00). The surviving MASH letter determines the result: "You will live in a Mansion/Apartment/Shack/House." Phase hint changes to "your fate is sealed." Reset clears everything.

## Data files

None. All state is local and session-only.

## Navigation

Matrix: right → 00050 (Monitor Room, bidirectional). One-way entry from 00048 (Useless Information) via right — no exit back left to 00048.

## Locked content

None.

## Notes for future development

Fully private per visitor — no shared fate, no record of outcomes. Could log results to a ledger (like The Form) if collective MASH outcomes are ever desired. The Kids category defaults are a small joke (0, 2, 5, 10).
