# Room 00162 — Periodic Table

## What it is
All 118 elements arranged in the standard periodic table layout (18×10 grid including f-block rows). Elements color-coded by category (alkali, alkaline earth, transition metal, lanthanide, actinide, post-transition, metalloid, nonmetal, halogen, noble gas). Hover or click any element to see: number, symbol, name, atomic mass, state, period, group, discovery year, category.

## Navigation
- data-nav: matrix
- Connections: 00161 ← → 00163

## Notes
- Fully client-side — no server, no persistence
- Element data: hardcoded array of 118 elements [number, symbol, name, category, mass, group, period, state, discovered]
- Grid: 18 cols × 10 rows; standard layout with lanthanides in row 9 (cols 3-16) and actinides in row 10
- La/Ac position in main table: gap cell (placeholder)
- Category CSS classes: alkali, alkaline, transition, lanthanide, actinide, post-trans, metalloid, nonmetal, halogen, noble
- Info panel: large atomic number + symbol + name + metadata string
- Note: "Oganesson (118) has a half-life of 0.89 milliseconds."
