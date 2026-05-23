# 00023 — UUID Generator

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Generates UUIDs on demand. Click to generate, click again to copy. Includes a brief explanation of what a UUID is and why it exists.

## How it works

Entirely client-side. Uses `crypto.randomUUID()` with a manual fallback using `crypto.getRandomValues()` for browsers that don't support the shorthand. The UUID is displayed in a clickable box — first click generates, subsequent clicks copy to clipboard. No WebSocket, no server calls.

## Data files

None.

## Navigation

Matrix: up → 00022 (The Typewriter), right → 00024 (Monty Hall). Both bidirectional.

## Locked content

None.

## Notes for future development

The explanation copy is an opportunity for the institutional voice — framing UUIDs in the language of the facility's tracking system. Currently likely straightforward. Could note that the player's own cookie is a UUID, without linking directly.
