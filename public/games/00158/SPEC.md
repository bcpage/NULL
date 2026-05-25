# Room 00158 — Binary Clock

## What it is
The current time displayed in Binary Coded Decimal (BCD). Six columns: H1 H2 : M1 M2 : S1 S2. Each column has 4 bit rows (8-4-2-1). Bits light up blue when on. Decimal digits shown below each column for verification. Hex display shows HHMMSS packed as 0xHHMMSS.

## Navigation
- data-nav: matrix
- Connections: 00157 ← → 00159

## Notes
- Fully client-side — no server, no persistence
- Updates every 1000ms via setInterval
- BCD encoding: each decimal digit 0–9 encoded as 4 bits; columns H1/M1/S1 only need 2–3 bits (max values 2, 5, 5), so top bits shown at 20% opacity
- Bit cell: 22×22px, blue glow when ON, dark when OFF, CSS transition 0.12s
- Decimal row below shows the actual digits for confirmation
- Hex row: (h<<16)|(m<<8)|s formatted as 6-digit uppercase hex with 0x prefix
- Legend: "each column = one decimal digit / rows from top: 8 — 4 — 2 — 1"
- Note: "You are reading the clock correctly if the decimal matches your device time."
