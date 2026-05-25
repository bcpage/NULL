# NULL — Build Priority & Room Ratings
Last updated: 2026-05-26

This file is the working reference for all unbuilt rooms.
It replaces re-generating assessments from scratch each session.

**Update this file** when:
- A room is built (mark ~~strikethrough~~ + **BUILT → XXXXX**)
- A design decision is made for a "needs design" room
- An external blocker is resolved (e.g. API key added)
- Estimated cost needs revision based on calibration data

---

## How to read the table

| Column | Meaning |
|--------|---------|
| Est. % | Quota cost in percentage points. Based on calibration: ~1.5–2 pts/room warm session, ~3–5 pts server-heavy, ~8–12 pts complex canvas game. Fresh session adds ~5 pts overhead. |
| Status | **READY** = build now, no blockers. **DESIGN** = concept unclear, needs a planning pass first. **BLOCKED** = external dependency (API key, prior room, etc.). **COMPLEX** = save for dedicated session, high risk. |

---

## 🟢 READY — Build now, no blockers

| Room | Est. % | Notes |
|------|--------|-------|
| Info Room pairs ×2 remaining | 3% | 3 of 5 pairs built (00110–00115). Two more to complete the set. Copy the pattern, pick two new facts with subtle errors. Trivial. |
| MS-DOS HELP Interface | 6% | Atmospheric fake DOS help screens. NULL platform rendered in 1993 DOS aesthetic. No logic needed — static content pages. Client-side only. |
| Interactive MS-DOS Prompt | 8% | Fake `C:\NULL>` terminal. Canned responses per command. FORMAT C: runs indefinitely (never completes). More commands = more fun. Client-side only. |
| Alternate Hangman — One Life | 9% | One game ever, shared across ALL users. Server state: word, guessed letters, win/loss outcome (permanent). Once the game ends the room changes forever. Needs server persistence + API routes. |
| Sokoban — Block Pusher | 10% | Standard Sokoban. Canvas, multi-level, box-pushing. Pure client-side. **Build this before NULL Navigation Board** — that room reuses the Sokoban engine. |
| Compression Engine | 10% | Huffman coding with interactive tree visualization. Enter text → see tree build → compressed output. Pure client-side canvas. Interesting and self-contained. |
| Source Code Room | 9% | Serve `server.js` via `/api/source`, display with syntax highlighting. Narrative comments baked into the source file become the room's story. Line 247 is noted in the spec as significant. |
| Partial Matrix Fragments ×5 | 8% | Five rooms, each showing a different fragment of the full matrix graph. Atmospheric static display. ~1.5 pts/room. Compare them to find patterns. |
| Shape Factory | 7% | Draw custom tetromino-like pieces → they enter the Wrong Tetris piece pool (00107). Wrong Tetris is built but hardcoded client-side. Needs: server persistence for custom pieces + 00107 updated to load them. Small lift. |
| Racetrack / Vector Race | 10% | Grid vector physics, 2-player turn-based racing. WebSocket multiplayer. Spec says "strong candidate." Clean, well-understood mechanic. |
| Paper Soccer | 10% | Same pattern as Racetrack: grid graph, 2-player WS, bounce rules, goal detection. Build after or alongside Racetrack — shared WS pattern. |
| 2D Platformer (Llama) | 11% | Canvas, gravity, jump physics, moving platforms. Pure client-side. Standard platformer implementation. Named "Llama" in spec — visual TBD. |

---

## 🟡 DESIGN — Needs a planning pass before building

| Room | Est. % | What needs deciding |
|------|--------|---------------------|
| Zork II: Wizard of Frobozz | 8% | **Option A** (embed a JS Z-machine + Zork II data file) has copyright issues. **Option B** (write original IF inspired by Zork II) is clear. Decision needed: which path? Option B is recommended — write the rooms, then build the IF engine around them. |
| HAL 9000 Room(s) | 8–15% | Three ideas in spec: (1) blinking red eye + quotes (easy, ~5%), (2) AE-35 unit fault diagnostic (medium, ~8%), (3) HAL regressing to simpler states over time (hard, ~15%). Pick one. The eye version is an immediate build. |
| TARDIS | 12% | Blue box exterior → step inside → much larger interior. The inside layout (what's in there? how many sub-rooms? what's the nav mechanic?) needs to be defined before writing a line of code. Visually interesting once specced. |
| The Tile Room | 20%+ | Players mutate the live nav map in real time. Auto-separation algorithm prevents everyone ending up in the same room. The algorithm is the design unknown. Not ready. |
| The NULL Zoo | 22%+ | 10 themed enclosures with a custom mini-map nav. Each enclosure has a creature (palindromes, uncomputable things, etc.). Needs: enclosure list, creature descriptions, nav layout. Heavy design before any code. |

---

## 🔴 BLOCKED — External dependency or major prerequisite

| Room | Est. % | Blocker | Resolution |
|------|--------|---------|------------|
| ELIZA — Upgraded | 10–20% | **Anthropic API key** required for the "Claude API breakthrough layer." The spec calls for real LLM responses breaking through ELIZA's pattern-matching. Needs: API key in environment, server-side proxy endpoint (`POST /api/eliza`), billing. **Without API key:** can build a very convincing simulation — facility voice that slowly corrupts ELIZA's responses using sophisticated pattern matching. Simulation costs ~10% and has zero deps. **Decision needed: real AI or convincing simulation?** | Add `ANTHROPIC_API_KEY` to server env, or decide to simulate. |
| The Observation Room | 12% | Requires **server-side room presence tracking**. Currently the server has no idea which room a connected WebSocket client is in. Fix: update `matrix-nav.js` (or `nav.js`) to send `{ game: 'presence', room: 'XXXXX' }` on load; server maintains a presence map and broadcasts it. Once that infrastructure exists, the Observation Room is just a canvas renderer. Also unblocks The NULL Room. | Add presence WS message to nav scripts. |
| The NULL Room (full matrix) | 11% | Same blocker as Observation Room — needs room presence tracking. Also needs: room coordinates as a 2D spatial layout (currently matrix.json is a graph, not a grid — need to define x,y positions for each room so they can be rendered spatially). | Resolve presence tracking first. Then define room coordinates. |
| NULL Navigation Board | 25%+ | Depends on Sokoban engine being built first (reuses it). Also the most complex server interaction on the list — boxes ARE rooms, pushing them writes to matrix.json. | Build Sokoban first. Then design this carefully. |

---

## ⛔ COMPLEX — Save for a dedicated session, high cost/risk

| Room | Est. % | Notes |
|------|--------|-------|
| Dig Dug | 20–25% | Faithful 1982 Namco clone. Sprite animation, digging through earth layer by layer, two enemy types (Pooka + Fygar with different AI), pump-to-inflate mechanic, music that plays ONLY when the player moves. Largest single game build on the list. |
| Tamagotchi — Shared Pet | 14% | Server-side pet with hunger/happiness/health, decay timers, death state, revival mechanic. One shared pet, all users responsible. Neglect kills it. The death/neglect mechanic needs to feel right — design matters as much as code. |
| Dungeon Explorer | 18% | Original IF (interactive fiction) in a backrooms setting. Parser + room graph is the easy part. The content — room descriptions, items, puzzles, branches — is the bulk of the work. Budget time for writing, not just coding. |
| Sprouts | 20%+ | Free-form curve drawing + topological intersection detection. The math (are two drawn curves intersecting? how many lives does each point have?) is genuinely difficult. Canvas drawing is easy; the game logic is not. |
| The NULL Zoo | 22%+ | See DESIGN section. Moved here because even after designing it, the build is large: 10 enclosures + custom mini-map nav + creature content. |
| LORD — Red Dragon | 35%+ | Full RPG loop: stats, combat, inventory, multiple rooms, level progression. Needs a dedicated spec session before any code. Largest single item on the entire backlog. Do last. |

---

## Recommended build order (next 3 sessions)

### Session A — ~30% budget, all READY
MS-DOS HELP + MS-DOS Prompt + Info pairs ×2 + Alternate Hangman + Sokoban

### Session B — ~30% budget, mostly READY
Source Code Room + Compression Engine + Partial Matrix Fragments ×5 + Racetrack + Paper Soccer

### Session C — ~25% budget, READY + resolve one BLOCKED
Shape Factory + 2D Platformer + resolve presence tracking → build Observation Room + NULL Room

---

## Already built — remove from active tracking

These appear in BACKLOG_INDEX.md but are done:

| Backlog Entry | Room | Built |
|---|---|---|
| Binary Control Panel | 00102 | 2026-05-25 |
| IP Geolocation Room | 00103 | 2026-05-25 |
| Game Over Rooms ×3–5 | 00104–00106 | 2026-05-25 |
| Wrong Tetris | 00107 | 2026-05-25 |
| Wrong Pac-Man | 00108 | 2026-05-25 |
| Physics Engine | 00109 | 2026-05-25 |
| Information Rooms pairs ×3 of ×5 | 00110–00115 | 2026-05-25 |
| Calendar Room | 00116 | 2026-05-25 |
| Wire Connection Puzzle | 00117 | 2026-05-25 |
