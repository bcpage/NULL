# [00000] — NULL (Welcome Screen)

**Status:** Built
**Last updated:** 2026-05-23

## What it is
The entry point for the entire platform. Displays the title "NULL" with a rotating
list of ~300 atmospheric level titles cycling beneath it, plus rotating subtitle copy.
A single Enter button moves the player into the facility. This is the first thing every
visitor sees.

## How it works
Pure client-side animation. Title text cycles through a large hardcoded pool of
atmospheric room names at a slow interval. Subtitle copy rotates independently.
No WebSocket. No server-side logic beyond serving the HTML file.

The root URL `/` redirects to `/game/00000` server-side. Uncookied visitors who
try to access any other room are force-redirected back through 00002 (cookie gate),
not back to 00000.

## Data files
None.

## Navigation
Not in the matrix nav system. Has no nav bar. The Enter button links directly to
`/game/00002` (the cookie gate). `data-nav="none"` on body.

## Locked content
None.

## Notes for future development
The rotating title pool is the platform's primary aesthetic statement — these titles
set the institutional-horror tone for everything that follows. Adding new titles to
the pool is low-risk and encouraged as the platform grows.
