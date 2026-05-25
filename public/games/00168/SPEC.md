# Room 00168 — ASCII Art

## What it is
Convert any image to ASCII art in the browser. Upload an image or use the procedural demo face. Drag-and-drop support. Charsets: dense (70-char ramp), standard (10), blocks (░▒▓█), minimal, hex. Controls: output width (40–160 chars), contrast, invert. Text→ASCII panel renders typed text via canvas then converts. Copy-to-clipboard.

## Navigation
- data-nav: matrix
- Connections: 00167 ← → 00169

## Notes
- Fully client-side — image never leaves the browser
- Render pipeline: drawImage to offscreen canvas at target char dimensions → getImageData → luma per pixel → map to charset index
- Aspect ratio: multiplied by 0.45 to compensate for monospace char aspect ratio (~2:1 h:w)
- Text-to-ASCII: renders text on canvas using selected font/size, then passes that canvas through same pipeline
- Demo image: procedurally drawn face with grid overlay on 200×200 canvas
- Charset ramp goes from space (darkest/lightest depending on invert) to dense chars
- Font size for display: 6px/1.0 line-height in #ascii-pre
- Note: "Every image reduced to characters. Every character a choice."
