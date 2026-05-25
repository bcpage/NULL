# Room 00089 — The Invisible Character Room

## What it is
Text contains characters that cannot be seen. This room finds them. 13 invisible Unicode characters detected and explained, plus a tool to copy them into your clipboard.

## Mechanic
Paste any text into the scanner. It identifies every invisible character by Unicode code point, name, count, and a plain-language description of what it does and why it matters. Also provides a panel to copy each invisible character directly to clipboard.

## Navigation
- data-nav: matrix
- Connections: 00088 ← → 00090

## Notes
- No server-side logic
- Characters detected: U+200B, U+200C, U+200D, U+200E, U+200F, U+00AD, U+00A0, U+FEFF, U+2060, U+180E, U+034F, U+2062, U+2063
- Copy function uses navigator.clipboard with execCommand fallback
