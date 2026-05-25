# Room 00170 — Color Mixer

## What it is
Two-color mixer with RGB sliders and hex input for each. Mix result shows blended color with ratio slider (0–100%). Info panel shows HEX/RGB/HSL of the mix. 10-step gradient palette from A→B. Buttons: swap A↔B, complement (rotate hue 180°), triad (rotate hue 120°), random pair. Palette swatches are copy-to-clipboard.

## Navigation
- data-nav: matrix
- Connections: 00169 ← → 00171

## Notes
- Fully client-side — no APIs, pure JS color math
- RGB mix: linear interpolation at ratio t → floor(a*(1-t) + b*t)
- HSL conversion: standard formulas for complement and triad calculations
- Hex input applies on Enter or → button; strips # prefix; validates 6-char hex
- Gradient palette: 9 equal steps A→B, click any swatch to copy hex
- Note: "Light mixes by addition. Pigment by subtraction. This room uses neither."
