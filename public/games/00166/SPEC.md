# Room 00166 — π Digits

## What it is
1,000 digits of π displayed after the decimal. Search for any digit sequence (birthday, phone number, etc.) — shows position after decimal and highlights in the display. Digit frequency bar chart for 0–9 across all 1000 stored digits. Today's date pre-filled as search hint.

## Navigation
- data-nav: matrix
- Connections: 00165 ← → 00167

## Notes
- Fully client-side — no server, no persistence
- PI_DIGITS: 1,000 digits after decimal hardcoded as string
- Display: first 500 digits as individual <span> elements for highlighting
- Search: indexOf on PI_DIGITS; highlights matching spans; scrolls to first match
- Frequency chart: 10 bars (0–9), heights proportional to max frequency among digits
- Birthday hint: computes today's MMDD, searches in PI_DIGITS, shows result as placeholder
- Search strips non-digit characters; searches digits only
- Note: "Every finite sequence of digits appears. (Probably. It hasn't been proven.)"
