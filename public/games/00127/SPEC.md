# Room 00127 — Huffman Compression Engine

## What it is
Interactive Huffman coding visualizer. Type any text and watch: symbol frequency table builds, Huffman tree renders on canvas, encoded bitstream appears. Shows original bits, compressed bits, savings ratio, and per-symbol codes. Seeded with "the quick brown fox" on load.

## Navigation
- data-nav: matrix
- Connections: 00126 ← → 00128

## Notes
- Fully client-side, no server involvement
- Huffman algorithm: proper priority-queue via sorted array, handles single-symbol edge case
- Tree renders up to 5 depth levels on canvas; leaf nodes green, internal nodes blue
- Edge labels: 0 = left branch (dim green), 1 = right branch (bright green)
- Encoded output: first 800 bits shown with 0/1 color-coded; overflow noted
- Frequency table sorted by count descending, with mini bar chart
- 120ms debounce on input to avoid thrashing canvas
