# [00052] — The Illegal Prime

**Status:** Built
**Last updated:** 2026-05-23

## What it is
Displays a 1,401-digit prime number and its historical account. The prime, when its
hexadecimal representation is gzip-decompressed, produces DeCSS source code. Phil Carmody
computed it in January 2001 as a mathematical challenge to MPAA DMCA injunctions. The room
asks: can a number be illegal?

## How it works
Static display. The prime is hardcoded in a JS constant, rendered in a monospace block
in groups of 50 digits. The historical account below covers Carmody, the MPAA, Slashdot,
and the unanswered legal question.

**DIGITS ARE UNVERIFIED PLACEHOLDER.** The number in the JS constant is wrong —
it diverges from the correct prime at digit 21. The correct prime is confirmed to:
  - Start with: 48565...
  - End with: ...29443
  - Have exactly 1,401 digits
  - Source: fatphil.org/maths/illegal/ (Phil Carmody's original page)
  - Also listed at: t5k.org/curios/page.php?number_id=953 (Prime Curios)

To fix: fetch the number from either source when accessible, replace the PRIME
constant in the JS block, verify digit count is 1401. The room displays a red
"UNVERIFIED" notice until this is done.

## Data files
None.

## Navigation
Matrix nav. Connects: 00051 (left).

## Locked content
None.

## Notes for future development
The prime digits should be verified against the original source. The room is otherwise
complete. A small "verify this prime" link in the footer (opening fatphil.org) would be
appropriate to the room's spirit of distributing contraband mathematics.
