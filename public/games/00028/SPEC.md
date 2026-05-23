# 00028 — Galton Board

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Animated Galton board (bean machine). Balls drop through a grid of pegs, deflecting left or right at each level, accumulating in bins at the bottom. Demonstrates the central limit theorem: random binary choices produce a normal distribution.

## How it works

Canvas animation only. No WebSocket, no server calls. Each ball follows a randomly-generated path (left/right at each peg row), lands in the corresponding bin, and increments that bin's counter. Bars grow in proportion to the max bin count. A reset button clears all bins and balls. Each visitor runs their own independent simulation.

## Data files

None.

## Navigation

Matrix: up → 00008 (Voice Notes), left → 00027 (Calculator), right → 00043 (PRNG vs True RNG). All bidirectional.

## Locked content

None.

## Notes for future development

The bin counts are local per session. A shared global Galton board (all visitors dropping balls into the same persistent histogram) would be a powerful collective version of the same mechanic.
