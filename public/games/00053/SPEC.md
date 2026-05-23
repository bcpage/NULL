# [00053] — Random Linux Man Page

**Status:** Built
**Last updated:** 2026-05-23

## What it is
Displays a randomly selected man page from a curated list on each page load.
The curated set: true, false, yes, sleep, kill, wall, more, less, cat, head, tail, man.
These are the man pages that are genuinely interesting in isolation — either because the
commands are philosophically notable (true/false, yes) or because reading their names
together tells a story. Formatted in authentic terminal man-page style. Click body to
cycle to another page without reloading.

## How it works
Client-side only. Man page content is hardcoded in a JS array of structured objects.
Random page chosen on load. Click anywhere in the man body to re-randomize.
Format matches real man page layout: header bar, section headers in red, indented content,
footer with source and date.

## Data files
None.

## Navigation
Matrix nav. Connects: 00052 (left), 00054 (right).

## Locked content
None.

## Notes for future development
Could add: man ed (famous for producing no output), man true --help (ironic),
man kill -l (signal list). The curated selection is intentionally limited — these
are the man pages that earn their place aesthetically.
