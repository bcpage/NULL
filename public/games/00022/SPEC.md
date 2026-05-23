# 00022 — The Typewriter

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A shared typewriter page. Every visitor types on the same surface — keystrokes appear in real time for everyone connected. The page clears itself after 90 seconds of silence.

## How it works

WebSocket-based. Keystrokes send `{ game: 'type', type: 'key', char }`. Backspace sends `{ game: 'type', type: 'backspace' }`. Server broadcasts each keystroke to all clients, who append or remove from their local text element. On connect, server sends `{ game: 'type', type: 'page', text }` to sync the full current text. After any keystroke, a 90-second silence timer starts. If no key is pressed for 90 seconds, server sends `{ game: 'type', type: 'clear' }` and the page resets. A countdown displays once the silence period begins ("page feeds in Xs of silence"). The input field is offscreen — click the page to focus it, then type.

## Data files

None. Page text is in-memory only; a server restart wipes it immediately without waiting for the silence timer.

## Navigation

Matrix: up → 00025 (ELIZA), right → 00026 (The Plant), down → 00023 (UUID Generator). All bidirectional.

## Locked content

None.

## Notes for future development

The silence-clear mechanic is the defining behavior — the page is inherently ephemeral. No attribution per keystroke; there's no way to know who typed what. Could persist the last page state across restarts without violating the room's intent.
