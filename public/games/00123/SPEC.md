# Room 00123 — Interactive MS-DOS Prompt

## What it is
A fully interactive fake MS-DOS terminal (C:\NULL>). Users can type real DOS commands that respond believably but with facility-appropriate errors: MEM always shows 0K free, FORMAT never completes (stalls at 99%), CHKDSK finds 2 billion lost clusters, EXIT/QUIT/LEAVE/ESCAPE are all "bad command or file name," DIR shows a real-ish fake filesystem. Command history with arrow keys.

## Navigation
- data-nav: matrix
- Connections: 00122 ← → 00124

## Notes
- Fully client-side, no server involvement
- Supported commands: DIR, CD, TYPE, COPY, DEL/ERASE, MEM, CLS, ECHO, VER, PATH, DATE, TIME, CHKDSK, FORMAT, ATTRIB, HELP, TREE, and all exit-attempt aliases
- FORMAT runs animated progress up to 99%, then fails
- CHKDSK animates finding/writing lost cluster files, then "Disk full"
- Command history (up/down arrows)
- Scanline overlay for CRT aesthetic
