# Room 00142 — PRNG vs TRNG

## What it is
Side-by-side comparison of a pseudo-random number generator (seeded LCG) and a true random number generator (Web Crypto API). Both generate bit streams in real time. Both produce identical-looking visualizations: bit bitmap, value histogram, sequential pair scatter plot. The room demonstrates that appearance doesn't reveal nature.

## Navigation
- data-nav: matrix
- Connections: 00141 ← → 00143

## Notes
- Fully client-side — no server, no persistence
- PRNG: Linear Congruential Generator (a=1664525, c=1013904223, m=2^32). User can change seed and observe same sequence reproduced exactly.
- TRNG: `crypto.getRandomValues()` — unreproducible
- Generates 1 byte per column per 100ms
- Displays: 512-bit bitmap (1=light pixel), 16-bucket value histogram with expected-value dashed line, 100×100 scatter plot of sequential byte pairs
- The room reveals which is which below the columns — knowing doesn't help you see it
- Reseed button: same seed → same sequence. The identity of the PRNG sequence is demonstrated, not just claimed.
- Connection to Galton Board (00138): both rooms explore randomness; different angles.
