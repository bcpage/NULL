# Room 00094 — Cowsay

## What it is
The classic Unix cowsay command, multiplayer. Type a message, pick a character, choose say or think. It broadcasts to everyone connected.

## Mechanic
WebSocket-based. Client builds the ASCII art bubble locally (no server rendering needed). Server handler already existed (from prior builds). Shows last 10 broadcasts in reverse chronological order.

## Navigation
- data-nav: matrix
- Connections: 00093 ← → 00095

## Server
WebSocket handler: game === 'cowsay', type === 'say'
Broadcasts: { game: 'cowsay', type: 'say', text, char, mode, ts }
Characters: cow, tux, sheep, ghost, dragon, elephant, moose
