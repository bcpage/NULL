# Room 00163 — Morse Code

## What it is
Bidirectional Morse code translator. Text → Morse (live, with colored dots/dashes) + Web Audio API playback at 700Hz. Morse → Text decoder (enter ·/- with spaces between letters, triple space between words). Clickable reference table for all letters and digits. SOS shortcut button.

## Navigation
- data-nav: matrix
- Connections: 00162 ← → 00164

## Notes
- Fully client-side — no server, no persistence
- MORSE dict: A-Z, 0-9, and punctuation (.,'!/?:;=+-_"$@)
- Text→Morse: live on input; colored output: · (bright blue), — (mid blue), / (dim separator)
- Morse→Text: normalizes • and — characters; splits by 3-space (word) and 1-space (letter)
- Audio: Web Audio API, sine wave 700Hz, DIT=80ms, DAH=3×DIT, gaps follow standard timing
- Smooth ramp: 5ms attack/release to avoid clicks
- Play button: toggles playing state; stop closes AudioContext
- Ref table: clickable cells — clicking a letter appends it to the text input
- Note: "SOS is · · · — — — · · · / It has no meaning. Only urgency."
