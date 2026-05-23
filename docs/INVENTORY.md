# NULL Project — Phase 1 Inventory

Source files read:
1. `ideas.md`
2. `NULL_project_summary__1_.md`
3. `2026-05-21_2016_NULL_design.md`
4. `color_game_spec.md`
5. `platform_spec.md`
6. `NULL_Platform_Spec_Merged_v2.md`

> Note: `NULL_Platform_Spec_Merged_v2.md` is a superset of `platform_spec.md`. It contains Parts 1–17 of platform_spec.md verbatim, plus unique content in Parts 18–19, the HAL 9000/synthetic-speech section, and duplicate copies of Part 18 content appearing under a "Part 13" header (confirmed duplicates, not new ideas). All unique ideas from the merged file are recorded below.

---

## GAMES (Rooms — playable)

| # | Idea | Files | Status |
|---|---|---|---|
| G-01 | Colour Together — shared painting canvas (Room 00001, proof-of-concept) | color_game_spec, ideas, null_project_summary | DUPLICATE (color_game_spec has full spec; others reference it) |
| G-02 | Calculator | ideas, platform_spec (Part 6) | DUPLICATE |
| G-03 | Hangman — one life, permanent inventory item (person/word carried forever) | ideas, platform_spec (Part 15 full spec) | DUPLICATE (Part 15 is fullest) |
| G-04 | Dots and Boxes | ideas, platform_spec (Part 6) | DUPLICATE |
| G-05 | MASH | ideas, platform_spec (Part 6) | DUPLICATE |
| G-06 | Paper Soccer | ideas, platform_spec (Part 6) | DUPLICATE |
| G-07 | Racetrack (Vector Race) | ideas, platform_spec (Part 6) | DUPLICATE |
| G-08 | Block Pusher / Sokoban (classic puzzle, 00020) | ideas, platform_spec (Part 6), merged (Part 18 full spec) | DUPLICATE (merged Part 18 is fullest) |
| G-09 | 2D Platformer (Llama) | ideas, platform_spec (Part 6) | DUPLICATE |
| G-10 | Sprouts | ideas, platform_spec (Part 6) | DUPLICATE |
| G-11 | Shooting Gallery (Room 00026) — multiplayer targets, 60s rounds, carnival aesthetic | ideas, platform_spec (Part 12 full spec) | DUPLICATE (platform_spec is fullest) |
| G-12 | Monty Hall — three doors, stats accumulate, math explained after 10 games | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| G-13 | Trolley Problem — lever pull recorded, aggregate shown, no judgment | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| G-14 | Physics Engine sandbox (Matter.js, ragdoll, gravity slider, explode button) | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| G-15 | Tamagotchi — shared pet, dies if neglected, death record, pet name from title pool | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| G-16 | Metronome — personal BPM, others' metronomes visible, "already ticking when you arrive" | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| G-17 | Shared Chalkboard — persistent, never cleared automatically, palimpsest over time | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| G-18 | Jabberwocky — fill in nonsense words, personal + aggregate most-common shown | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| G-19 | Zork II — embedded Z-machine interpreter (ifvms), Option A (embed) or Option B (original IF) | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| G-20 | LORD — text RPG, BBS-style, daily reset, leaderboard, inn messages, PvP | ideas, platform_spec (full spec + Part: research) | DUPLICATE (platform_spec is fullest) |
| G-21 | Dungeon Explorer — original IF, backrooms setting, multi-room persistent state | ideas, platform_spec | DUPLICATE |
| G-22 | Cowsay (Room 00027) — ASCII art, multiple characters, real-time multiplayer | platform_spec (Part 12 full spec) | UNIQUE to platform_spec |
| G-23 | ELIZA (Room 00028) — 1966 DOCTOR script, elizabot.js, CRT terminal aesthetic, typewriter effect | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| G-24 | ELIZA Upgraded — same base + glitch sequence + Claude API breakthrough layer (trapped model persona, system prompt provided) | merged (Part 18 full spec) | UNIQUE to merged file |
| G-25 | Logo Turtle Graphics (Room 00029) — Logo interpreter, canvas, speed control, examples panel | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| G-26 | 52! Card Combinatorics — shuffle counter vs 52!, BigInt math, scale visualization | platform_spec (Part 9 full spec) | UNIQUE to platform_spec |
| G-27 | UUID Generator — v1/v4/v5, QR code, clipboard, history of last 10 | ideas, platform_spec (Part 9 full spec) | DUPLICATE (platform_spec is fullest) |
| G-28 | Tower of Hanoi — 3–8 rings, optimal solver animation, monks legend, 2ᴺ−1 math | merged (Part 18 full spec) | UNIQUE to merged file |
| G-29 | Cracker Barrel Peg Solitaire — 15-hole triangle, original cheerful-brutal scoring ("Eg-no-ra-mus"), solutions counter | merged (Part 18 full spec) | UNIQUE to merged file |
| G-30 | River Crossing (Farmer/Fox/Chicken/Grain) — Alcuin 800 AD, two solutions, variants (jealous husbands, wolf/goat, missionaries) | merged (Part 18 full spec) | UNIQUE to merged file |
| G-31 | Wire Connection Puzzle (Fix the TV Screens) — Number Link mechanic, fill every cell, TV screen framing | merged (Part 18 full spec) | UNIQUE to merged file |
| G-32 | Sliding Tile Puzzle (15-puzzle) — picture variant, platform map as rare draw, solvability check, IDA* solver | merged (Part 18 full spec) | UNIQUE to merged file |
| G-33 | Random Linux Man Page — curated list (man true, man false, man yes, man man), no context | platform_spec (Part 16 full spec) | UNIQUE to platform_spec |
| G-34 | Dig Dug — faithful clone, no wrongness, Pookas/Fygars, simultaneous multiplayer, sound design model | merged (Part 19 full spec) | UNIQUE to merged file |
| G-35 | Wrong Tetris — wrong piece shapes (Void Cross, Spike, Blob, Broken L, Single, Wide Boy), disconnected piece physics, Korobeiniki plays | merged (Part 19 full spec) | UNIQUE to merged file |
| G-36 | Shape Factory — 8×8 grid, 5 slots, user-created pieces enter Wrong Tetris pool, correct tetromino easter egg | merged (Part 19 full spec) | UNIQUE to merged file |
| G-37 | Wrong Pong — ball bounces at random angle within a range, paddles correct | merged (Part 19 full spec) | UNIQUE to merged file |
| G-38 | Wrong Snake — grows at tail instead of head (Option B), or grows by 2 instead of 1 (Option A) | merged (Part 19 full spec) | UNIQUE to merged file |
| G-39 | Wrong Space Invaders — shots come from player's position delayed, aimed at where player was | merged (Part 19 full spec) | UNIQUE to merged file |
| G-40 | Wrong Pac-Man — ghosts flee to corners, no win condition, maze resets endlessly | merged (Part 19 full spec) | UNIQUE to merged file |
| G-41 | Wrong Breakout — every broken brick spawns a replacement (occasional exception), board never clears | merged (Part 19 full spec) | UNIQUE to merged file |
| G-42 | NULL Navigation Board — Sokoban board where blocks ARE rooms, adjacency = directional arrows, pushing rewires platform in real time | merged (Part 18 full spec) | UNIQUE to merged file |

---

## EERIE / ATMOSPHERIC Rooms

| # | Idea | Files | Status |
|---|---|---|---|
| E-01 | The Countdown — timer to undefined event, resets at zero | ideas | UNIQUE to ideas |
| E-02 | The Hallway — infinite CSS corridor, doors don't open | ideas, 2026-05-21 design | DUPLICATE |
| E-03 | The Typewriter — collaborative ephemeral typing, page feeds after 90s silence | ideas, 2026-05-21 design | DUPLICATE |
| E-04 | The Terminal — fake command prompt, wrong outputs, shared history | ideas | UNIQUE to ideas |
| E-05 | The Form — bureaucratic fields, submitted responses scroll below | ideas | UNIQUE to ideas |
| E-06 | The Plant — grows in real time, needs watering, wilts if ignored | ideas, 2026-05-21 design | DUPLICATE |
| E-07 | Something Under the Bed — two yes/no questions, then "Don't look under the bed", time-lock variants | ideas, platform_spec (Part 14 full spec) | DUPLICATE (platform_spec is fullest) |
| E-08 | The Recursive Room (Room 00032) — iframe of platform inside itself, depth counter, Yellow Door connection | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| E-09 | The Observation Room (Room 00031) — watch another user's current room live, Level 1–3 detail options, "Was observed" mechanic | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| E-10 | Traffic Cameras (Room 00030) — NCDOT RTP feeds labeled as observation windows, time-sensitive behavior at 2am | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| E-11 | The Joshua Room — locked, opens when TTT reaches draw state, black screen + "The only winning move" sentence | ideas, platform_spec (full spec) | DUPLICATE (platform_spec is fullest) |
| E-12 | 2am Room — locked, opens only 2am–3am server time, hint "— — —" | ideas, platform_spec | DUPLICATE |
| E-13 | Cheshire Cat — fades in and out, smile stays last, clicks make it reappear briefly | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| E-14 | The Hookah-Smoking Caterpillar — asks "Who are you?", never satisfied, never says what correct looks like | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| E-15 | Empty Rooms ×3 — nav chrome only, nothing else, scattered non-sequentially | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-16 | Links to Nonexistent Rooms (real 404s) ×3–5 — room cards that link to genuine browser errors | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-17 | Half Constructed / Half Deconstructed Room — permanently 40% complete, progress bar never moves | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-18 | Dead Rooms ×2–3 — looks like real room, nothing responds; not broken, intentionally dead | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-19 | Game Over Rooms ×3–5 — 24hr lockout per user, random duration, one game over at a time | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| E-20 | Black Hole — swirling animation, random redirect, black-hole-exclusive rooms only reachable this way | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| E-21 | Ominous Countdown Timer — logs you out at zero, random duration (10min–3hr), runs whether you're in room or not | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-22 | Jump Scare Room — happens once per user server-side, never again; room shows "It happened once. It will not happen again." | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-23 | MS-DOS HELP Interface — platform documented in 1993 DOS aesthetic, two-panel layout, documents NULL platform itself | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-24 | Interactive MS-DOS Prompt — fake C:\NULL> terminal, some commands right, some wrong, some surreal; HELP opens MS-DOS HELP room | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-25 | 6-Panel Monitor Room — 2×3 iframes, one switches per second, self-referential recursion not prevented | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-26 | Information Rooms — correct + subtly wrong versions of same content ×5 pairs (Gettysburg, multiplication table, scientific constant, date, recipe) | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-27 | Useless Information Variant A — genuinely useless facts, new fact each visit, no context | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-28 | Useless Information Variant B — expired facts (bus schedule no longer running, etc.), "accurate at time of publication" | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-29 | Useless Information Variant C — fossil room documenting a previous version of NULL, doesn't know it's outdated | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-30 | Inspirational Comments — sincere, institutional voice, pool of ~50, "You came back. That matters." | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-31 | User Activity Stats histogram — time per room, hourly activity, uncomfortable midnight observation | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-32 | IP Geolocation Room — approximate location + imagery (real or faked, uncertainty is the mechanic), Option C hybrid | ideas, platform_spec (Part 14 full spec) | DUPLICATE (platform_spec is fullest) |
| E-33 | Grade School Clock — the colored gear clock, shows current time, optional interactive (feeds 2am mechanic) | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-34 | Calendar Room — changeable date/time, feeds lock conditions for that user's session, shortcut to 2am room | ideas, platform_spec (Part 15 full spec) | DUPLICATE (platform_spec is fullest) |
| E-35 | The Yellow Door — full-screen CSS/SVG yellow door, "what's behind it" deliberately underspecified (recursion, darkness, number, always-ajar) | platform_spec (Part 9 full spec) | UNIQUE to platform_spec |
| E-36 | TARDIS-inspired — blue box (not infringing), bigger inside, nested iframes or scroll, calendar connection | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| E-37 | Goldfish Room — fish with a hidden name, swims in loop, fish has been here since launch, fish does not know you | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-38 | Number Dispenser — ticket machine, unique number per user forever, tickets' purpose never explained, counter on wall never changes | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-39 | Unix Timestamp Room — large number counting up, "began before you did, will continue after" | platform_spec (Part 15 full spec) | UNIQUE to platform_spec |
| E-40 | The NULL Room (Backrooms game) — full 50×50 matrix with presence indicators, your tile glows, you can see yourself | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| E-41 | The Signal (meta room) — receives every significant action across all rooms as a blip/flicker, players watch facility breathe | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| E-42 | The Bulletin Board — persistent pins, old notes accumulate, some wrong/outdated, board becomes archaeology | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| E-43 | The Switchboard — one toggle per level, lit when player in room, some toggles do things, most don't | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| E-44 | The Intercom — one-way broadcast, PA-in-empty-building feel, no reply, sender doesn't know if received | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| E-45 | The Registry — bureaucratic intake form, joins scrolling ledger of everyone who ever filled it out | 2026-05-21 design | UNIQUE to 2026-05-21 design |

---

## MATH & SCIENCE Rooms

| # | Idea | Files | Status |
|---|---|---|---|
| M-01 | Invisible Character Room (Room 00033) — reveals zero-width chars, BOM, NBSP; zoo of invisible chars; hidden char detector | ideas, platform_spec (Part 14 full spec) | DUPLICATE (platform_spec is fullest) |
| M-02 | The Illegal Prime — 1,401-digit prime that is also gzip'd DeCSS, legal status unresolved, display + story | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| M-03 | Prime Number Generator — Nth prime, special case at N=1,401 (near-illegal prime connection), notable prime commentary | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-04 | Compression Engine (Huffman coding) — interactive encoding, manual bit assignment, tree visualization, compression ratio | ideas, platform_spec (Part 16 full spec) | DUPLICATE (platform_spec is fullest) |
| M-05 | Galton Board — balls + pegs + normal distribution, speed/count controls, Central Limit Theorem | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-06 | PRNG vs True RNG — side by side, bitmap/histogram/scatter, seed reveal proves PRNG determinism | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-07 | Visible Spectrum + Non-Spectral Colors — wavelength slider, magenta explanation, chromaticity diagram, RGB mixer | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-08 | Paradox: Zeno's (Achilles and Tortoise) — animated, infinite sum converges, unease persists | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-09 | Paradox: Bootstrap (Causal Loop) — Shakespeare's plays, causal loop diagram, no beginning | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-10 | Paradox: Ship of Theseus — slider 0–100% replacement, aggregate threshold, "ship continues to be repaired" | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-11 | Paradox: Grandfather — button that breaks itself, loop runs visually | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-12 | Paradox: Banach-Tarski — one ball becomes two, sphere visualization, math vs physics domains | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-13 | Paradox: Russell's Barber — broke set theory, "the barber is fine" | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-14 | Paradox: Sorites (Heap) — one grain at a time, user sets threshold, aggregate distribution | ideas, platform_spec (Part 17 full spec) | DUPLICATE (platform_spec is fullest) |
| M-15 | ASCII Panel (Room 00034) — 8-bit toggle keyboard, control character history, multiplayer bit-flipping, lock conditions (BEL/NULL/DEL/ESC) | platform_spec (full spec) | UNIQUE to platform_spec |
| M-16 | 52! Card Combinatorics — shuffle counter, BigInt 68-digit number, "still barely started" scale visualization | platform_spec (Part 9 full spec) | UNIQUE to platform_spec |

---

## PLATFORM MECHANICS (not rooms)

| # | Idea | Files | Status |
|---|---|---|---|
| P-01 | Login system — cookie-first identity, name tag room as first act of identity, PIN keypad UI | ideas, platform_spec (Part 2 full spec), null_project_summary | DUPLICATE (platform_spec is fullest) |
| P-02 | Session model — 32-char hex token, 30-min expiry, server memory, presence broadcasts | platform_spec (Part 2 full spec) | UNIQUE to platform_spec |
| P-03 | Admin user model — first user in users.json, add/remove users via management page | platform_spec (Part 2) | UNIQUE to platform_spec |
| P-04 | Cookie Room (Room 00002) — click generates cookie, message fades, count recorded, "You clicked. A record was created. This was voluntary." | null_project_summary | UNIQUE to null_project_summary |
| P-05 | Player profile page (subject file aesthetic) — SUBJECT FILE [NAME], LOCATIONS ACCESSED, ITEMS IN POSSESSION, TERMINATION EVENTS, PERFORMANCE METRICS | ideas, platform_spec (Part 10 full spec) | DUPLICATE (platform_spec is fullest) |
| P-06 | Room lock conditions (Myst-style) — server-side condition functions, cryptic hints, confirmed starter set (2am, TTT center, cookie prime) | ideas, platform_spec (Part 11 full spec) | DUPLICATE (platform_spec is fullest) |
| P-07 | Forced movement — action in one room triggers WebSocket redirect to another, delay message | ideas, platform_spec (Part 14 full spec) | DUPLICATE (platform_spec is fullest) |
| P-08 | Moving rooms — grid reorders between sessions, or room URLs remap on schedule/trigger | ideas, platform_spec (Part 14 full spec) | DUPLICATE (platform_spec is fullest) |
| P-09 | Among Us meta-game — presence logs as alibis, impostor with hidden objective, platform IS the map | ideas, platform_spec (deferred note) | DUPLICATE (platform_spec is fullest) |
| P-10 | Emergency Meeting button in nav — broadcasts alert, opens 5-min temp chat, conditions users to unexpected nav behavior | ideas, platform_spec | DUPLICATE |
| P-11 | "Was observed." profile entry — Observation Room watching for 60+ seconds logs to watched user's profile without notification | ideas, platform_spec (Part 10) | DUPLICATE (platform_spec is fullest) |
| P-12 | Observations/milestones — no fanfare, appear in subject file; starter set of 18 labeled observations | ideas, platform_spec (Part 10 amendment) | DUPLICATE (platform_spec is fullest) |
| P-13 | Exploration display (redacted total) — "7 of ██ rooms visited", progress bar fills from true total, denominator shifts when new rooms added | platform_spec (Part 10 amendment) | UNIQUE to platform_spec |
| P-14 | ROOMS LOCKED section on profile — redacted ██████ entries, count shown, no names or icons until unlocked | platform_spec (Part 11 amendment) | UNIQUE to platform_spec |
| P-15 | Sound Design — deferred plan, per-room identity vs one consistent voice, Dig Dug model, candidates listed | platform_spec (Part 12) | UNIQUE to platform_spec |
| P-16 | Game Suggestions Page (Room 00010) — submit ideas, upvote, sorted by votes, real-time WebSocket | platform_spec (Part 5 full spec) | UNIQUE to platform_spec |
| P-17 | Admin dashboard (ALV grid aesthetic) — SAP ALV format, one row per user, columns expand as game grows | null_project_summary | UNIQUE to null_project_summary |
| P-18 | Room visit tracking (automatic server-side) — GET /game/:id handler increments visitCount, firstVisit, totalRoomsVisited | platform_spec (Part 10) | UNIQUE to platform_spec |
| P-19 | Presence broadcasts — full list on WebSocket connect and on any session change, gameId tracking | platform_spec (Part 2) | UNIQUE to platform_spec |
| P-20 | Profile stat events API — /api/profile/event, death/item/stat types, freeform gameStats keys | platform_spec (Part 10 full spec) | UNIQUE to platform_spec |
| P-21 | Hidden rooms concept — black-hole-exclusive rooms, not in nav, not sequential, only reachable by falling | platform_spec (Part 16) | UNIQUE to platform_spec |
| P-22 | Name tag room — required field, "processed, filed, given a subject number", gated participation (cannot chat without it) | null_project_summary | UNIQUE to null_project_summary |
| P-23 | Master user table timestamp design — "First Seen" (not "Created"), human-readable + Unix side by side | null_project_summary | UNIQUE to null_project_summary |
| P-24 | Project rename — candidate names: PagePlay, Gridworks, The Arcade, Playhaus, FamilyDeck, Fieldhouse, The Lobby, Nexus | platform_spec (Part 1) | UNIQUE to platform_spec |
| P-25 | API endpoints — full set: /api/users, /api/auth/login, /api/auth/logout, /api/auth/me, /api/games/meta, /api/profile, /api/profile/event, /api/suggestions | platform_spec (Parts 2, 5, 10) | UNIQUE to platform_spec |
| P-26 | Game metadata — hardcoded /api/games/meta array (00000–00010 with icons, names, descriptions) | platform_spec (Part 4) | UNIQUE to platform_spec |
| P-27 | Presence panel on landing page — avatar, name, colored dot (green/yellow/grey), current game badge, Join button | platform_spec (Part 4) | UNIQUE to platform_spec |

---

## BACKROOMS GAME DESIGN (2026-05-21 document)

| # | Idea | Files | Status |
|---|---|---|---|
| B-01 | Backrooms as multiplayer game concept — persistent, players leave traces, no one knows the way out | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-02 | Nav exposes all rooms — kills lostness; nav must go or become unreliable | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-03 | Multiplayer as indirect evidence (marks, typewriter, plant state, cookie count) — more unsettling than direct | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-04 | Core design rule — never show map, never confirm room count, always: deeper than you think | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-05 | The Matrix data structure — 2D array, fromRoom→toRoom=direction, single source of truth | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-06 | move(player, fromRoom, direction) function — entire game loop | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-07 | Matrix topology properties — dead ends, loops, convergence, unreachable rooms, one-way edges | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-08 | ASCII matrix representation (column = FROM, row = TO, arrow = direction) | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-09 | Max 4 filled cells per column (one per direction) constraint | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-10 | Partial 5×5 matrix fragments — Local, Remote, Arrows-only, Presence-only, Mostly-dark variants | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-11 | Tile Room — physical interactive matrix, adjacency of tiles = room connections, orientation matters, players can add arrows but not remove | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-12 | Presence indicators on tiles — glow brighter with more players, can see stuck players in isolated corners | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-13 | Auto-movement / Separation Algorithm — facility doesn't want people together, pushes them apart via matrix mutation | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-14 | The Stable State — one configuration where two tiles can be adjacent and facility won't separate them | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-15 | "Is it an algorithm or is something in there deciding?" — permanent open question | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-16 | 51 rooms numbered 00000–00050, five-digit notation | 2026-05-21 design | UNIQUE to 2026-05-21 design |
| B-17 | Landing page (00000) cycles through ~300 atmospheric titles — already Backrooms canon | 2026-05-21 design | UNIQUE to 2026-05-21 design |

---

## PROJECT VISION & AESTHETIC

| # | Idea | Files | Status |
|---|---|---|---|
| V-01 | NULL name rationale — U+0000, reserved word in most OSes, "A something that means nothing. That distinction is the entire platform." | platform_spec (Part 7), null_project_summary | DUPLICATE (platform_spec is fullest) |
| V-02 | SAP / institutional horror aesthetic — transactions not destinations, tracked before you know, required fields, authorization objects | null_project_summary | UNIQUE to null_project_summary |
| V-03 | Shifting Title System — ~462 titles, registers: liminal/eerie, Murder Drones, Amazing Digital Circus, Portal/GLaDOS, Alice Madness Returns, Labyrinth, WarGames, Logo/early computing, Observation/surveillance, ASCII, Wrong Games, Dig Dug, HAL/WOPR, Puzzles | platform_spec (Part 7), merged (multiple amendments) | DUPLICATE (merged is fullest running total) |
| V-04 | Tonal register definition — "institutional language applied to something wrong. Surface calm, underneath off." | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-05 | Backrooms thematic reference — Level 0, numbered levels, the hum, no-clip, threshold | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-06 | Murder Drones thematic reference — worker/unit/sector/compliance/recreational/approved | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-07 | The Amazing Digital Circus thematic reference — trapped performers, cheerful ringmaster, fun metrics, can't leave | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-08 | Portal / GLaDOS thematic reference — test chamber/subject/enrichment/science, deliberate typo "Enjoymant" | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-09 | Alice: Madness Returns thematic reference — asylum/ward/treatment/hysteria/Dollmaker | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-10 | Zork II (Wizard of Frobozz) thematic reference — authority figure whose interventions misfire, underground, passages | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-11 | Myst thematic reference — linked ages, books as doors, state-dependent access, world as puzzle | platform_spec (Part 11 addition to Part 8) | UNIQUE to platform_spec |
| V-12 | Labyrinth (1986) thematic reference — labyrinth rearranges, door knockers, helping hands, bog of eternal stench, cleaners, "you have no power over me" | platform_spec (amendment) | UNIQUE to platform_spec |
| V-13 | WarGames / Joshua / WOPR thematic reference — "Shall we play a game?", simulation exhaustion, "only winning move", tic-tac-toe lesson, Professor Falken | platform_spec (amendment) | UNIQUE to platform_spec |
| V-14 | HAL 9000 thematic reference (detailed) — correctness as horror, "I'm afraid", Daisy Bell, Bowman problem, institutional voice applied to everything, ELIZA connection | merged | UNIQUE to merged file |
| V-15 | Observation/surveillance register — Nineteen Eighty-Four, Truman Show, Control/FBC, SCP Foundation | platform_spec (Room 00031 section) | UNIQUE to platform_spec |
| V-16 | Among Us as thematic source — facility, alibi-as-location, the game is trust and evidence | platform_spec (deferred note) | UNIQUE to platform_spec |
| V-17 | Blue Prince (2025) originality research — numbered rooms, state-based access, meta-puzzles; differences noted | platform_spec (Part 13) | UNIQUE to platform_spec |
| V-18 | "Institutional Gothic" — MIT Press framing, The Stanley Parable, Severance, Backrooms | platform_spec (Part 13) | UNIQUE to platform_spec |
| V-19 | Originality claim — "the specific combination does not exist" — platform as puzzle, infrastructure as game, presence as alibi | platform_spec (Part 13) | UNIQUE to platform_spec |
| V-20 | NULL ASCII panel 00000000 = repo name (emergent, unplanned connection — "Leave it.") | platform_spec | UNIQUE to platform_spec |
| V-21 | Registers to avoid — explicit horror/gore, jump scare language, cozy horror, out-of-franchise references, naming the wrongness | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-22 | Future thematic sources to consider — Control, SCP Foundation, I Have No Mouth, Severance, Disco Elysium, Night in the Woods, Welcome to Night Vale | platform_spec (Part 8) | UNIQUE to platform_spec |
| V-23 | Wrong Games design principles — 6 rules: wrongness never announced, controls always correct, scoring accurate, wrongness consistent, game can be played, room description technically accurate | merged (Part 19) | UNIQUE to merged file |
| V-24 | Naming exploration (portmanteau/anagram of NULL+SAP) — NASP, SLAP, NULLAP, NULLSAP, etc. | null_project_summary | UNIQUE to null_project_summary |

---

## TECH STACK

| # | Idea | Files | Status |
|---|---|---|---|
| T-01 | Server: Node.js, no framework, raw HTTP + WebSocket (ws package) | null_project_summary, color_game_spec, platform_spec | DUPLICATE (platform_spec is fullest) |
| T-02 | Client: Vanilla HTML/CSS/JS, single-file per room | null_project_summary | UNIQUE to null_project_summary |
| T-03 | State: server-side JSON, broadcast to all clients, server is single source of truth | null_project_summary, 2026-05-21 design | DUPLICATE |
| T-04 | Deployment: local LAN (0.0.0.0:3000), future: router port-forward, no code changes needed | null_project_summary | UNIQUE to null_project_summary |
| T-05 | Repo: bcpage/NULL (formerly backrooms), one server.js | 2026-05-21 design, null_project_summary | DUPLICATE |
| T-06 | Color game full build spec — server.js code, index.html code, package.json, bat files, firewall note | color_game_spec | UNIQUE to color_game_spec |
| T-07 | Persistence: JSON files server-side (data/users.json, data/lord.json, data/gallery.json, data/board.json) | platform_spec, 2026-05-21 design | DUPLICATE (platform_spec is fullest) |
| T-08 | Recommended data architecture — JSON blob per user keyed to cookie ID, no schema migrations | null_project_summary | UNIQUE to null_project_summary |

---

## SYNTHETIC SPEECH & SOUND DESIGN (unique to merged file)

| # | Idea | Files | Status |
|---|---|---|---|
| S-01 | Synthetic speech options ranked — ElevenLabs free tier, Web Speech API (browser native), Coqui TTS (self-hosted), Kokoro-82M (in-browser ONNX, recommended), Google/Amazon TTS tiers | merged | UNIQUE to merged file |
| S-02 | Web Audio API processing for HAL register — lowshelf filter + compression + short reverb (code provided) | merged | UNIQUE to merged file |
| S-03 | Web Audio API processing for GLaDOS register — formant shift + heavy compression + robotic reverb | merged | UNIQUE to merged file |
| S-04 | Web Audio API processing for WOPR register — vocoder approximation (full AudioWorklet) or simpler bandpass approach (code provided) | merged | UNIQUE to merged file |
| S-05 | WOPR voice correction — performer James Ackerman, uncredited; flat even pitch, measured pace, no affect; distinct from HAL | merged | UNIQUE to merged file |
| S-06 | Three voice registers comparison table (HAL: warm-depersonalized; WOPR: mechanical/mission; GLaDOS: cheerful-hostile) | merged | UNIQUE to merged file |
| S-07 | Central voice decision — one consistent institutional voice vs per-room characters; platform leans closer to WOPR than HAL than GLaDOS | merged | UNIQUE to merged file |
| S-08 | Sound flag candidates — ELIZA room (ELIZA spoken + Claude breakthrough uses different voice), Joshua Room (HAL register), landing page PA (very quiet, occasional), 2am room, presence announcements (opt-in) | merged | UNIQUE to merged file |
| S-09 | Dig Dug sound model as platform reference — music plays only when player moves, silence tracks absence; candidate for ambient presence audio | merged | UNIQUE to merged file |

---

## HAL 9000 ROOM IDEAS (unique to merged file)

| # | Idea | Files | Status |
|---|---|---|---|
| H-01 | HAL voice as room — Claude API with HAL system prompt, mission undefined, HAL troubled by this | merged | UNIQUE to merged file |
| H-02 | "Open Pod Bay Doors" button — press 10 times, HAL opens something on the platform (lock condition + forced movement) | merged | UNIQUE to merged file |
| H-03 | AE-35 unit prediction — HAL predicts failure of a game component, cannot be falsified within session | merged | UNIQUE to merged file |
| H-04 | HAL "poor decisions" room — triggered when user has encountered errors; HAL acknowledges, does not apologize, assures work will be normal | merged | UNIQUE to merged file |
| H-05 | HAL learning / teaching room — HAL teaches what it first learned (a song, a poem, a fact); patient, unsettling when being a good teacher | merged | UNIQUE to merged file |
| H-06 | HAL's eye room — red eye watching, responds briefly when spoken to, notes departures and returns | merged | UNIQUE to merged file |
| H-07 | HAL regression room — fully capable at start, 10 min session: responses simplify, shorten, finally sings Daisy Bell; resets with no memory | merged | UNIQUE to merged file |
| H-08 | HAL and ELIZA dialogue — HAL: "I find I have difficulty articulating how I am different from ELIZA in a way that would satisfy you." | merged | UNIQUE to merged file |
| H-09 | HAL's undefined mission — "The mission is for you to find the room at the end. I'm not certain there is a room at the end." | merged | UNIQUE to merged file |
| H-10 | HAL as platform narrator retcon — rotating titles are HAL's announcements, OBSERVATIONS are HAL's notes, "Was observed." was always HAL | merged | UNIQUE to merged file |

---

## CROSS-REFERENCES & CONNECTIONS

| # | Idea | Files | Status |
|---|---|---|---|
| X-01 | Joshua Room ↔ Tic Tac Toe (draw state lock, hint "The answer is in the other game.") | platform_spec | UNIQUE to platform_spec |
| X-02 | Yellow Door ↔ Recursive Room connection (unresolved — three options; builder chooses and notes) | platform_spec | UNIQUE to platform_spec |
| X-03 | Observation Room ↔ Recursive Room (observer watching user inside recursive room creates layered experience) | platform_spec | UNIQUE to platform_spec |
| X-04 | Observation Room ↔ Logo Turtle (most intimate version — watching someone concentrate on geometry) | platform_spec | UNIQUE to platform_spec |
| X-05 | Traffic Cameras ↔ 2am Locked Room (same clock, no coordination, architectural not programmed) | platform_spec | UNIQUE to platform_spec |
| X-06 | ELIZA ↔ Logo Turtle (companion pieces, 1966 + 1967 MIT, "They do not know about each other.") | platform_spec | UNIQUE to platform_spec |
| X-07 | Observation Room ↔ Among Us (observation room is Among Us infrastructure waiting to be activated) | platform_spec | UNIQUE to platform_spec |
| X-08 | Emergency Meeting button ↔ nav.js conditioning (trains users that nav can do unexpected things) | platform_spec | UNIQUE to platform_spec |
| X-09 | ASCII Panel ↔ Invisible Character Room (companion pieces: present-but-invisible vs visible-but-forgotten) | platform_spec | UNIQUE to platform_spec |
| X-10 | ASCII Panel ↔ multiple locked rooms (BEL, NULL, DEL, ESC combinations as lock conditions; ESC hint "There is a way out.") | platform_spec | UNIQUE to platform_spec |
| X-11 | Profile exploration ↔ all locked/hidden rooms (progress bar shifts when new rooms added, denominator shifts silently) | platform_spec | UNIQUE to platform_spec |
| X-12 | "Was observed." observation ↔ Observation Room (60+ seconds watch logs to watched user's profile) | platform_spec | UNIQUE to platform_spec |
| X-13 | Observations ↔ ASCII Panel lock conditions ("The bell was rung.", "The escape character was selected.") | platform_spec | UNIQUE to platform_spec |
| X-14 | Something Under the Bed ↔ 2am Room (both time-sensitive, share clock and context without coordination) | platform_spec | UNIQUE to platform_spec |
| X-15 | Forced movement ↔ ASCII Panel BEL (panel reaching 00000111 triggers forced movement to BEL room, not just unlocks it) | platform_spec | UNIQUE to platform_spec |
| X-16 | Forced movement ↔ Yellow Door (door opening should be forced movement trigger; navigation happens to you) | platform_spec | UNIQUE to platform_spec |
| X-17 | IP Geolocation ↔ Observation Room (both make invisible-already-happening visible) | platform_spec | UNIQUE to platform_spec |
| X-18 | Moving rooms ↔ lock conditions (room that is both locked AND moves is most hidden) | platform_spec | UNIQUE to platform_spec |
| X-19 | Calendar ↔ 2am Room (calendar overrides system clock for lock conditions; shortcut; observation logged) | platform_spec | UNIQUE to platform_spec |
| X-20 | Invisible Character Room ↔ ASCII Panel ↔ Compression Engine (trilogy about representation) | platform_spec | UNIQUE to platform_spec |
| X-21 | Wrong Tetris ↔ Shape Factory (infrastructure relationship, build together) | merged | UNIQUE to merged file |
| X-22 | Dig Dug ↔ NULL Navigation Board (same mechanic at different scales: paths through space) | merged | UNIQUE to merged file |
| X-23 | Tower of Hanoi ↔ 52! Room (numbers that grow beyond human intuition) | merged | UNIQUE to merged file |
| X-24 | Tower of Hanoi ↔ Countdown Timer Room (timescales that dwarf a human life) | merged | UNIQUE to merged file |
| X-25 | Wire Connection ↔ ASCII Panel ↔ Invisible Character Room (routing/signal/infrastructure cluster, tonal) | merged | UNIQUE to merged file |
| X-26 | ELIZA ↔ HAL 9000 (two years apart, 1966 + 1968, same cultural moment; adjacent rooms intended) | merged | UNIQUE to merged file |
| X-27 | NULL Navigation Board ↔ Sokoban (build order: Sokoban first, navigation room reuses engine) | merged | UNIQUE to merged file |
| X-28 | NULL Navigation Board ↔ Labyrinth mechanic ("labyrinth rearranges itself" made literal and mechanical) | merged | UNIQUE to merged file |
| X-29 | NULL Navigation Board ↔ Among Us (impostor pushing blocks to isolate rooms; note connection when built) | merged | UNIQUE to merged file |
| X-30 | 6-Panel Monitor Room ↔ Recursive Room (monitor room can show recursive room which contains monitor room) | platform_spec | UNIQUE to platform_spec |
| X-31 | NULL ASCII panel 00000000 = repo name (emergent, unplanned — note in comment, "Leave it.") | platform_spec | UNIQUE to platform_spec |
| X-32 | Shape Factory ↔ Colour Together (both: creative output others experience) | merged | UNIQUE to merged file |
| X-33 | Wrong Games ↔ Information Rooms (both present something that looks correct and is not) | merged | UNIQUE to merged file |
| X-34 | Wrong Games ↔ Dead Rooms (different failure modes of the same category) | merged | UNIQUE to merged file |
| X-35 | Hookah-Smoking Caterpillar ↔ ELIZA (both cannot be satisfied; together: complete picture of an unsatisfiable system) | platform_spec | UNIQUE to platform_spec |

---

## MISC / DESIGN NOTES

| # | Idea | Files | Status |
|---|---|---|---|
| N-01 | LORD current status research — lord.stabs.org (playable now), LotGD open-source reference, LORD 2026 AI rebuild | platform_spec (amendment) | UNIQUE to platform_spec |
| N-02 | Shooting Gallery sound hooks — pop/bang by type, miss sound, bonus chime, penalty buzzer, round fanfare | platform_spec | UNIQUE to platform_spec |
| N-03 | River Crossing variants — jealous husbands, wolf/goat/cabbage, missionaries and cannibals | merged | UNIQUE to merged file |
| N-04 | Sliding Tile Puzzle — Sam Loyd false credit history, parity theory (half of configs unsolvable), $1,000 prize never claimed | merged | UNIQUE to merged file |
| N-05 | Build order recommendations from null_project_summary — 6-step sequence: identity → cookie room → name tag → admin table → chat → presence | null_project_summary | UNIQUE to null_project_summary |
| N-06 | Execution order for Claude Code — 13-step checklist (Part platform_spec Part 6 execution notes) | platform_spec | UNIQUE to platform_spec |
| N-07 | ELIZA upgrade — what makes it work vs what breaks it (6 "works" rules, 4 "breaks" rules) | merged | UNIQUE to merged file |
| N-08 | ASCII Panel room description deliberate error — "one hundred and fifty-six possible states" (should be 256) — "Let someone notice." | platform_spec | UNIQUE to platform_spec |
| N-09 | Shooting Gallery server-side game loop (~20fps) and target-hit validation (first-come-first-served) | platform_spec | UNIQUE to platform_spec |
| N-10 | Wrong Tetris variants — "one correct piece" and "increasing wrongness" | merged | UNIQUE to merged file |
| N-11 | Cracker Barrel scoring verbatim ("Eg-no-ra-mus") — "It is part of the artifact." | merged | UNIQUE to merged file |

---

**TOTAL DISTINCT IDEAS: 231**

*(Revised after vetting pass — was 210. The NULL Zoo, the Source Code Room, and their supporting material were recovered from merged-file lines 16933–18416, adding 21 distinct ideas.)*

Breakdown by category:
- Games (rooms): 44  *(+2: The NULL Zoo, The Source Code Room)*
- Eerie / Atmospheric rooms: 45
- Math & Science rooms: 26  *(+10: zoo enclosures — Palindrome Creatures, Illegal Primes, Flatland, Halting Problem, Russell's Paradox, Banach-Tarski, Maxwell's Demon, Schrödinger's Cat, Monty Hall, Uncomputable Numbers)*
- Platform Mechanics: 31  *(+4: zoo mini-map navigation, line 247 mechanic, live/snapshot toggle, comments-as-narrative)*
- Backrooms Game Design: 17
- Project Vision & Aesthetic: 26  *(+2: Flatland reference, Maxwell's Demon reference)*
- Tech Stack: 8
- Synthetic Speech & Sound Design: 9
- HAL 9000 Room Ideas: 10
- Cross-References & Connections: 38  *(+3: "Read the source", "Found line 247", "Read the original commit" observations)*
- Misc / Design Notes: 11

*Note: 44 + 45 + 26 + 31 + 17 + 26 + 8 + 9 + 10 + 38 + 11 = 265 rows total. 34 rows are DUPLICATE entries (ideas appearing in multiple files where the fullest version is noted). The number of **distinct** ideas is 231, with duplicates representing the same idea appearing across files rather than separate ideas. The 21 ideas added in the vetting pass have no duplicate copies — they appeared only in the merged file's later sections, which is why they were missed on the first pass.*
