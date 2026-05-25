# Room 00174 — Noise Room

## What it is
Real-time Perlin noise generator with 5 color modes: Grayscale, Terrain (water/sand/grass/mountain/snow), Fire (red/orange gradient), Plasma (RGB sine wave), Digital (binary grid glow). Controls: scale (cell pixel size 1–20), octaves (1–6), persistence (0.1–0.9), animation speed (z-offset drift). Reseed button shuffles the permutation table.

## Navigation
- data-nav: matrix
- Connections: 00173 ← → 00175

## Notes
- Fully client-side — Perlin noise in JS (Ken Perlin's improved algorithm)
- 3D noise: x,y from canvas position, z from time offset (enables animation)
- FBM (fractal Brownian motion): sums octaves at 2x frequency, persistence amplitude decay
- Pixel upscaling: noise sampled at (W/scale) × (H/scale) resolution, each sample fills scale×scale pixels
- Terrain thresholds: <0.3 deep water, <0.42 water, <0.46 sand, <0.65 grass, <0.78 forest, <0.88 mountain, else snow
- Note: "Every terrain in every game begins with something like this."
