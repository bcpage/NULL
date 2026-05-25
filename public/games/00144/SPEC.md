# Room 00144 — Ship of Theseus

## What it is
Interactive paradox room. A ship rendered as planks; a slider controls what % have been replaced. Three answer choices: "still the same," "never same," "always same" — plus a threshold slider for those who think it changes at a specific %. Answer sent to server for aggregate tracking. Aggregate histogram of where all users drew the line is shown.

## Navigation
- data-nav: matrix
- Connections: 00143 ← → 00145

## Notes
- Server: POST /api/theseus (threshold 0–101), GET /api/theseus (aggregate buckets)
- Data: public/games/00144/data/theseus.json
- threshold=0: "never same (every replacement changes it)"; threshold=101: "always same"; 1–100: specific %
- Aggregate canvas: 10 buckets (0-10%, 11-20%, …, 91-101%), bar chart with count labels
- Mean threshold shown as orange dashed line on aggregate
- localStorage: prevents re-answering on same browser (shows "previously answered" if set)
- Ship canvas: 20 planks, original (dark wood) vs replaced (light wood), color-coded
- Note: "The ship does not know about the threshold. The ship continues to be repaired."
