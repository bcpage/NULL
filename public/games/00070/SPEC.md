# [00070] — Dead Room A

**Status:** Built
**Last updated:** 2026-05-23

## What it is
A facility feedback form. Subject field, two dropdowns, a textarea, three buttons
(Submit, Clear, Save Draft). Everything looks functional. Nothing responds. Clicking
Submit does nothing. Clear does nothing. Save Draft does nothing. The inputs accept
text. This is not broken. The room is working as designed.

## How it works
Static HTML. Buttons have no event listeners. Inputs accept text (browser default
behavior) but nothing reads them. No server calls. No JS beyond nav injection.
The HTML comment at the bottom says: "Nothing responds. This is not broken."

## Data files
None.

## Navigation
Matrix nav. Connects: 00069 (left), 00071 (right).

## Locked content
None.

## Notes for future development
Do not add functionality. The room's meaning depends entirely on the silence.
The feedback form is a plausible institutional surface — the kind of thing that
might exist in a real facility and accomplish nothing.
