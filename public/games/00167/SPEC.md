# Room 00167 — Mirror Room

## What it is
Webcam feed rendered to canvas with live pixel effects: normal, invert, grayscale, pixelate (12px blocks), edge detection (Sobel), and horizontal flip. Three sliders: brightness, contrast, and frame delay (0–30 frames). Vignette overlay on all modes. Canvas is 440×330.

## Navigation
- data-nav: matrix
- Connections: 00166 ← → 00168

## Notes
- Fully client-side — getUserMedia, no data leaves the browser
- Effect pipeline: CSS filter (brightness/contrast) on drawImage, then getImageData pixel ops
- Edge detection: Sobel operator (Gx/Gy kernels), magnitude = sqrt(Gx²+Gy²), grayscale output
- Frame delay: frameBuffer array of ImageData objects; shift/push for temporal offset
- Pixelate: 12×12 block average (samples top-left pixel of each block)
- Mirror (flip H): ctx.translate(W,0) + ctx.scale(-1,1) before drawImage
- On camera denied: hides button, shows message panel
- Note: "The mirror has no memory. The camera might."
