# 00025 — ELIZA

**Status:** Built
**Last updated:** 2026-05-23

## What it is

The 1966 ELIZA psychotherapist chatbot. Terminal aesthetic. It will ask how you feel about that.

## How it works

Entirely client-side. Pattern-matching response engine based on the original ELIZA DOCTOR script. Input typed at a terminal prompt; responses appended in green (#33ff33) prefixed with "ELIZA: ". No WebSocket, no server calls — each visitor has a private session. Opens with: "Hello. I am ELIZA. How are you feeling today?"

## Data files

None. Conversation is session-only, no persistence.

## Navigation

Matrix: left → 00008 (Voice Notes), down → 00022 (The Typewriter). Both bidirectional.

## Locked content

None.

## Notes for future development

The private session is intentional — ELIZA is a one-on-one experience. The conversation copy could be infiltrated by the facility's institutional voice (occasional non-ELIZA responses, awareness of the player's cookie or name) for an uncanny effect.
