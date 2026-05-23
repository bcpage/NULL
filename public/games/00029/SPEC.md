# 00029 — The Terminal

**Status:** Built
**Last updated:** 2026-05-23

## What it is

A fake DOS terminal. Outputs are wrong. It knows things it shouldn't — or rather, it knows nothing and says so in the wrong way. Prompt: `C:\NULL>`.

## How it works

Entirely client-side. No WebSocket, no server calls. Opens with a fake MS-DOS 6.22 header. Commands are matched against a fixed WRONG table; unrecognized commands get a random FALLBACK response. Responses are deliberately incorrect or unsettling: `date` always returns "Thu 03-14-2012"; `whoami` returns "unknown", "you", or "irrelevant"; `exit` says "Please remain."; `ipconfig` shows IP `0.0.0.0`; `echo` eventually says "Please stop." `dir` shows a directory containing only `nothing.txt` with 0 bytes. Up/down arrows cycle command history. Response arrives after a 120–320ms fake delay.

## Data files

None.

## Navigation

Matrix: up → 00013 (Cowsay), right → 00034 (Hangman), down → 00051 (PROCESS INTERRUPTED). All bidirectional. The down→00051 connection is the second discovery path for the name tag room (after the up exit from 00013).

## Locked content

None.

## Notes for future development

The terminal currently has no actual knowledge of the visitor — it's entirely scripted. Wiring it to `GET /api/user/me` so it could respond to `whoami` with the player's actual cookie UUID or name would make it genuinely uncanny. The room description ("it knows things it shouldn't") is currently aspirational.
