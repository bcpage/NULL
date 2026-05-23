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

**TODO:** Prime digits need verification. The number in the JS constant diverges from
the correct prime at digit ~21. Correct number: starts 48565, ends 29443, 1401 digits.
Source when accessible: fatphil.org/maths/illegal/ or t5k.org/curios/page.php?number_id=953

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
