# Room 00087 — Jabberwocky

## What it is
The full text of Lewis Carroll's Jabberwocky (1871) with all nonsense words replaced by fill-in-the-blank fields. Each user writes their own version. The aggregate of what everyone submitted shows under each blank.

## Mechanic
27 blank slots across 6 stanzas. Repeated words (Jabberwock, vorpal, etc.) share a single ID — fill one, all copies update. Submit to add your words to the aggregate. "See what others wrote" shows the 3 most common submissions per slot without submitting.

## Navigation
- data-nav: matrix
- Connections: 00086 ← → 00088

## Server
- GET /api/jabberwocky — returns { id: [word, word, ...] } aggregate
- POST /api/jabberwocky — records { words: {id: value} }, returns updated aggregate
- Data: public/games/00087/data/jabber.json
