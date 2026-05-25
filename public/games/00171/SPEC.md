# Room 00171 — Typing Test

## What it is
Timed typing speed test. 60-second default (30/60/120s modes). Two word pools: "FACILITY" (NULL-lore vocabulary: null, access, void, sector, etc.) and "STANDARD" (common English words). Live WPM and accuracy display. Character-level highlighting (green=correct, red=wrong). Timer bar shrinks as time passes. Results panel shows WPM, accuracy, keystrokes, errors.

## Navigation
- data-nav: matrix
- Connections: 00170 ← → 00172

## Notes
- Fully client-side — no data sent anywhere
- Word pool: 80 random words from pool, displayed as spans with per-char class
- Timer starts on first keystroke; 100ms update interval
- WPM = (correct chars / 5) / minutes elapsed — standard gross WPM formula
- Accuracy = correct keystrokes / total keystrokes × 100
- Backspace supported: removes correct/wrong class from last char, adjusts counters
- Current position: thin underline on current char
- Paste blocked (preventDefault on paste event)
- Note: "The test records nothing. But you will remember."
