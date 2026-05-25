# Room 00122 — MS-DOS Help Interface

## What it is
A fake MS-DOS Help system (version 6.22 aesthetic). Two-panel layout: topic sidebar on left, content area on right. 16 help topics covering real DOS commands (DIR, CD, COPY, FORMAT, MEM, PATH, NULL, CONFIG.SYS, AUTOEXEC.BAT, HIMEM.SYS) plus troubleshooting entries. All content subtly wrong or broken — memory always 0K free, CHKDSK finds 2 billion lost clusters, EXIT is "Bad command or file name," the NULL device description leaks facility lore.

## Navigation
- data-nav: matrix
- Connections: 00121 ← → 00123

## Notes
- Fully client-side, no server involvement
- Keyboard arrow keys navigate topics
- See-also links work within the help system
- NUL device help page contains subtle facility lore
- FORMAT and CHKDSK examples deliberately fail in strange ways
