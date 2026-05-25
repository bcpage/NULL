# Room 00172 — Base Converter

## What it is
Convert numbers between binary (base 2), octal (8), decimal (10), hex (16), base64, and ASCII text. All fields live-update from whichever you type in. Bit display shows binary visually (green 1s, dark 0s). Info panel: decimal value, bit length, 32-bit signed interpretation, isPowerOf2, isPrime (up to 10M), byte count. Quick-access buttons for common values (0, 1, 42, 255, 65535, 2³¹−1, "NULL", "ACCESS DENIED"). Copy-to-clipboard button on each field.

## Navigation
- data-nav: matrix
- Connections: 00171 ← → 00173

## Notes
- Fully client-side — pure JS number conversion using BigInt for large values
- Base64: encode BigInt as big-endian bytes using btoa; decode with atob
- Text: each char → charCode hex concatenated → BigInt; reverse for display
- isPrime: trial division up to sqrt(n); skips if n > 10M (too slow)
- isPowerOf2: (n & (n-1)) === 0n using BigInt bitwise
- Bit display: pads binary string to nearest multiple of 8 bits
- Inits with "NULL" text pre-converted
- Note: "01001110 01010101 01001100 01001100 — That spells NULL."
