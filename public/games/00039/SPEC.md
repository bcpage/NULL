# 00039 — The Recursive Room

**Status:** Built
**Last updated:** 2026-05-23

## What it is

An iframe of the platform inside itself. The room contains itself, which contains itself, which contains itself. Goes 7 levels deep before hitting the bottom.

## How it works

Each level renders `/game/00039?d=N` inside an `<iframe>`. The depth parameter `d` increments with each nesting level. At depth 6 (the 7th level), the iframe is replaced with a `srcdoc` message: "you have reached the bottom." A depth counter at the bottom of each level shows the current nesting depth. Sandboxed with `allow-scripts allow-same-origin`. No WebSocket, no server calls beyond the normal page serve.

## Data files

None.

## Navigation

Matrix: up → 00038 (Shared Chalkboard), down → 00040 (Zeno's Paradox). Both bidirectional.

## Locked content

None.

## Notes for future development

The hard depth cap at 7 levels is necessary to prevent browser resource exhaustion. The bottom message "you have reached the bottom" is the payoff for drilling all the way in.
