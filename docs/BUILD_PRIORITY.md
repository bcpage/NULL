# NULL — Build Priority & Room Ratings
Last updated: 2026-05-25 (session 2)

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
| ~~Info Room pairs ×2 remaining~~ | 3% | **BUILT → 00118–00121** (2026-05-25). Planck constant pair + Euler's number pair. All 5 pairs complete. |
| ~~MS-DOS HELP Interface~~ | 6% | **BUILT → 00122** (2026-05-25). 16 topics, two-panel DOS help UI, all content subtly broken. |
| ~~Interactive MS-DOS Prompt~~ | 8% | **BUILT → 00123** (2026-05-25). C:\NULL> terminal, ~20 commands, FORMAT stalls at 99%, CHKDSK finds 2B lost clusters, EXIT fails. |
| ~~Alternate Hangman — One Life~~ | 9% | **BUILT → 00124** (2026-05-25). One shared global game, permanent outcome, ASCII gallows, /api/hangman routes. |
| ~~Sokoban — Block Pusher~~ | 10% | **BUILT → 00125** (2026-05-25). 5 levels, canvas, unlimited undo, touch swipe. NULL Navigation Board can now use this engine. |
| ~~Source Code Room~~ | 9% | **BUILT → 00126** (2026-05-25). Live server.js viewer, syntax highlighting, Ctrl+F search, line jump. Narrative comments added to server.js. |
| ~~Compression Engine~~ | 10% | **BUILT → 00127** (2026-05-25). Interactive Huffman tree, frequency table, color-coded bitstream. Seeded with pangram. |
| ~~Partial Matrix Fragments ×5~~ | 8% | **BUILT → 00128–00132** (2026-05-25). Five sector printouts A–E. Fragment C has corrupt node 00070. Fragment D flags JOSHUA/gameover rooms. Fragment E contains itself. |
| ~~2D Platformer (Llama)~~ | 11% | **BUILT → 00133** (2026-05-25). 3 levels, moving platforms, gem collection, llama sprite with walking animation. |
| Shape Factory | 7% | Draw custom tetromino-like pieces → they enter the Wrong Tetris piece pool (00107). Wrong Tetris is built but hardcoded client-side. Needs: server persistence for custom pieces + 00107 updated to load them. Small lift. |
| Racetrack / Vector Race | 10% | Grid vector physics, 2-player turn-based racing. WebSocket multiplayer. Spec says "strong candidate." Clean, well-understood mechanic. |
| Paper Soccer | 10% | Same pattern as Racetrack: grid graph, 2-player WS, bounce rules, goal detection. Build after or alongside Racetrack — shared WS pattern. |

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

### ~~Session A — ~30% budget, all READY~~ ✅ DONE (2026-05-25)
~~MS-DOS HELP + MS-DOS Prompt + Info pairs ×2 + Alternate Hangman + Sokoban~~
Built: 00118–00125 (8 rooms)

### ~~Session B — ~30% budget, mostly READY~~ ✅ DONE (2026-05-25 session 2)
~~Source Code Room + Compression Engine + Partial Matrix Fragments ×5 + Llama~~
Built: 00126–00133 (8 rooms). Warm session ~1.5 pts/room.

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
| Info Room pairs ×2 (Planck + Euler) | 00118–00121 | 2026-05-25 |
| MS-DOS HELP Interface | 00122 | 2026-05-25 |
| Interactive MS-DOS Prompt | 00123 | 2026-05-25 |
| Alternate Hangman — One Life | 00124 | 2026-05-25 |
| Sokoban — Block Pusher | 00125 | 2026-05-25 |
| Source Code Room | 00126 | 2026-05-25 |
| Huffman Compression Engine | 00127 | 2026-05-25 |
| Matrix Fragments ×5 | 00128–00132 | 2026-05-25 |
| Llama (2D Platformer) | 00133 | 2026-05-25 |
