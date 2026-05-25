# Room 00164 — Brainfuck

## What it is
A Brainfuck interpreter with 30,000 cell tape, stdin support, step mode, and 5 example programs (Hello World, Echo, Multiply). Tape visualization shows 24 cells around the current data pointer. Step mode executes one instruction at a time showing ip/dp/cell/command.

## Navigation
- data-nav: matrix
- Connections: 00163 ← → 00165

## Notes
- Fully client-side — no server, no persistence
- Interpreter: precomputes bracket pairs for O(1) jump; 1,000,000 step limit (prevents infinite loops)
- Tape: Uint8Array(30000), wrapping; cell values wrap 0–255
- Input: reads stdin char by char; returns 0 for EOF
- Output: String.fromCharCode per '.' instruction; displayed as text
- Tape display: shows cells around dp in 28px boxes; current cell highlighted green
- Step mode: single-instruction execution, shows ip/dp/cell/command state after each step
- Examples: Hello World (nested loops), single char, Echo (stdin), alt Hello World, 5×5 multiply
- Brainfuck code filter: strips non-BF chars before running (comments via any other char)
- Note: "Urban Müller, 1993. The language was designed to have the smallest possible compiler."
