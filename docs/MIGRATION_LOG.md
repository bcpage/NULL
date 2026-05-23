# Migration Log

## Source files processed

1. `ideas.md` (8 KB) — master idea list, brief descriptions, "Already built: 00001–00019"
2. `NULL_project_summary__1_.md` (12 KB) — project summary, SAP anchor, Room 00002 spec, naming exploration, user model, build order
3. `2026-05-21_2016_NULL_design.md` (16 KB) — Backrooms game design doc, Matrix data structure, auto-movement, meta rooms
4. `color_game_spec.md` (20 KB) — full build spec for Room 00001 (Colour Together), Claude Code execution document
5. `platform_spec.md` (180 KB) — main spec document, Parts 1–17, login system through Wrong Games design
6. `NULL_Platform_Spec_Merged_v2.md` (400 KB) — confirmed superset of platform_spec.md; adds Parts 18–19, HAL 9000 / synthetic speech section; contains one duplicate copy of Part 18 content appearing under a "Part 13" header (confirmed identical, no new ideas extracted from it)

---

## Structural finding

`NULL_Platform_Spec_Merged_v2.md` contains `platform_spec.md` verbatim (Parts 1–17 with identical content and line structure) plus the following unique additions:
- Parts 18–19 (new room specs: Tower of Hanoi, Cracker Barrel Peg Solitaire, River Crossing, Wire Connection Puzzle, NULL Navigation Board, Sokoban, Sliding Tile Puzzle, ELIZA Upgraded, Dig Dug, Wrong Tetris, Shape Factory, Wrong Pong, Wrong Snake, Wrong Space Invaders, Wrong Pac-Man, Wrong Breakout, Wrong Games design principles)
- HAL 9000 detailed thematic reference and room brainstorm
- WOPR voice correction and technical details
- Synthetic speech options comparison (Kokoro-82M, ElevenLabs, Coqui, Web Speech API, Google/Amazon)
- Web Audio API processing code for HAL/WOPR/GLaDOS registers
- Three-voice register summary table
- Title pool additions for all above batches
- **The NULL Zoo** (lines 16933–17905) — 10 enclosures with mini-map navigation
- **The Source Code Room** (lines 17913–18416) — live/snapshot code, line 247 mechanic

For all ideas appearing in both files, the merged file copy was used as it is identical or fuller.

### VETTING-PASS CORRECTION

The first reorganization pass read the merged file in chunks and **jumped over lines ~16933–18416**, missing two entire fully-specced rooms (The NULL Zoo and The Source Code Room) plus their thematic references, cross-references, observations, and ~44 title-pool entries. A full header-by-header sweep of all 18,416 lines in a subsequent vetting pass located the gap. The missed content was recovered and appended to ROOMS_BACKLOG.md under an "ADDENDUM — Rooms recovered in vetting pass" header, and all dependent files (PROJECT.md, PLATFORM.md, CROSS_REFS.md, INVENTORY.md) were updated accordingly.

The first pass's clean self-audit was therefore wrong: it verified only the content it had read, not the content it had skipped. The lesson is recorded here so the failure mode is auditable.

**Recovered ideas (21 distinct):** The NULL Zoo (room + mini-map nav); 10 enclosures (Palindrome Creatures, Illegal Primes, Flatland, Halting Problem, Russell's Paradox, Banach-Tarski, Maxwell's Demon, Schrödinger's Cat, Monty Hall, Uncomputable Numbers); Zoo Map Room; The Source Code Room; line 247 mechanic; live/snapshot toggle; comments-as-narrative; Flatland thematic reference; Maxwell's Demon thematic reference; and three observations ("Read the source", "Found line 247", "Read the original commit").

**Also enriched (not new distinct ideas, but recovered detail):** Shape Factory subsections — the shape gallery, the use counter, the room's central question (*"What do you make when given the power to make wrong things?"*), and the room note — which had been truncated even within the already-captured Shape Factory spec.

**One genuine open item surfaced:** the zoo map shows a tenth tile labeled "THE MIRROR" adjacent to UNCOMPUTABLE, but no enclosure is specced for it in the source. Flagged in ROOMS_BACKLOG.md as an open item rather than invented.

**Corrected title-pool total:** ~462 (was recorded as ~418). ~418 base + ~27 zoo + ~17 source code.

---

## Duplicates resolved

- **NULL project overview / what it is** — appeared in `null_project_summary` and `platform_spec` (as implied context). Kept `null_project_summary` copy as primary; `platform_spec` context incorporated. No information lost.

- **Room 00001 spec (Colour Together)** — appeared in `color_game_spec` (full build spec) and referenced briefly in `null_project_summary`. Kept `color_game_spec` copy (fullest — complete server.js, index.html, bat files, firewall note). `null_project_summary` reference is a pointer. No information lost.

- **Games backlog list (brief)** — appeared in `ideas.md` and `null_project_summary` (as a summary list). Kept `platform_spec` and `merged` copies (fullest — full specs for each room). Brief lists in `ideas.md` and `null_project_summary` served as inventory cross-checks. No information lost.

- **Tech stack / architecture** — appeared in `null_project_summary`, `2026-05-21 design`, and `platform_spec`. Kept `platform_spec` copy as primary (most complete API detail); unique elements from `null_project_summary` (recommended data architecture note, LAN deployment detail) and `2026-05-21 design` (repo name bcpage/NULL, JSON files for persistence) preserved separately. No information lost.

- **NULL name rationale** — appeared in `platform_spec` (Part 7, extended) and `null_project_summary` (brief). Kept `platform_spec` copy (fullest). No information lost.

- **SAP anchor / institutional aesthetic** — appeared in `null_project_summary` (primary source) and referenced throughout `platform_spec`. Kept `null_project_summary` as primary; `platform_spec` references confirm and extend. No information lost.

- **Tone and aesthetic description** — appeared in `null_project_summary` and `platform_spec`. Kept both — they are complementary paragraphs, not duplicates. No information lost.

- **Login system (Part 2)** — appeared in `platform_spec` (full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Player profile page** — appeared in `platform_spec` (Part 10, full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Room lock conditions** — appeared in `platform_spec` (Part 11, full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Shifting title system + title pool** — appeared in `platform_spec` (Part 7) with amendments throughout file, and in `merged` (further additions in Parts 18–19 and HAL/speech section). Kept merged running total (~462 titles after vetting pass: ~418 base + ~27 zoo + ~17 source code) as the fullest copy. No information lost.

- **Thematic references (Part 8)** — accumulated across `platform_spec` (Parts 7, 8, 11, amendments) and `merged` (HAL 9000 addition). Kept all additions, none dropped. No information lost.

- **Observation/Presence mechanics** — appeared in `platform_spec` (Part 2, Part 10) and `ideas.md` (brief list). Kept `platform_spec` as primary. No information lost.

- **Among Us meta-game** — appeared in `platform_spec` (deferred note, full option breakdown) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Shooting Gallery full spec** — appeared in `platform_spec` (Part 12 — labeled as "Room 00026") and `ideas.md` (one-line reference). Kept `platform_spec` full spec. No information lost.

- **ELIZA room** — appeared in `platform_spec` (full spec), `merged` (upgraded version), and `ideas.md` (one-line reference). Kept `platform_spec` copy for base spec; `merged` copy for upgraded version. Both preserved in ROOMS_BACKLOG.md. No information lost.

- **Logo Turtle Graphics room** — appeared in `platform_spec` (full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **External Traffic Cameras room** — appeared in `platform_spec` (full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Observation Room** — appeared in `platform_spec` (full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Recursive Room** — appeared in `platform_spec` (full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **Invisible Character Room** — appeared in `platform_spec` (Part 14 full spec) and `ideas.md` (one-line reference). Kept `platform_spec` copy. No information lost.

- **ASCII Panel** — appeared in `platform_spec` (full spec) only. Unique. No dedup needed.

- **Originality research** — appeared in `platform_spec` (Part 13) only. Unique. No dedup needed.

- **Wrong Games design principles** — appeared in `merged` (Part 19) only. Unique. No dedup needed.

- **NULL Navigation Board** — appeared in `merged` (Part 18 full spec) and a duplicate copy also in `merged` under "Part 13" heading (confirmed identical). Kept one copy. No information lost.

- **Tower of Hanoi, Cracker Barrel, River Crossing, Wire Connection, Sokoban, Sliding Tile** — appeared in `merged` Part 18 (full specs) and a duplicate copy in `merged` under "Part 13" (confirmed identical). Kept one copy of each. No information lost.

- **HAL 9000 thematic reference** — two versions in `merged`: an earlier brief version and a more detailed expanded version. Kept the expanded version (more complete). Confirmed no unique information in brief version. No information lost.

- **Dig Dug, Wrong Tetris, Shape Factory, Wrong Pong/Snake/Space Invaders/Pac-Man/Breakout** — appeared in `merged` Part 19 and in `merged` "Wrong Games + Dig Dug" amendment section (confirmed identical content). Kept one copy of each. No information lost.

---

## Content moved

- **Project vision, SAP anchor, tone/aesthetic, thematic references, tech stack, naming exploration, originality research, Wrong Games design principles, HAL as narrator concept** → `PROJECT.md`

- **Room 00001 full build spec (color_game_spec.md entire content)** → `ROOMS_BUILT.md`

- **Room 00002 Cookie Room spec** → `ROOMS_BUILT.md`

- **Rooms 00003–00009 metadata** → `ROOMS_BUILT.md`

- **Room 00010 Game Suggestions full spec** → `ROOMS_BUILT.md`

- **Rooms 00011–00019 acknowledgment** → `ROOMS_BUILT.md`

- **All unbuilt room full specs** (52! through HAL brainstorm, backrooms meta-rooms) → `ROOMS_BACKLOG.md`

- **Login system (Part 2), login UI (Part 3), landing page (Part 4), profile page (Part 10), exploration mechanics, room lock conditions (Part 11), sound design (Part 12), among us/forced movement/moving rooms (Part 14), title system (Part 7) with complete pool, project rename (Part 1)** → `PLATFORM.md`

- **All room-to-room connections, lock condition table, observation trigger table, forced movement table, originality research summary** → `CROSS_REFS.md`

---

## Ambiguities (kept both to be safe)

- **"Colour Together" vs "Cookie Clicker" as Room 00002** — `null_project_summary` describes Room 00002 as "The Cookie Room" (a cookie identity mechanic). `platform_spec` metadata lists 00002 as "Cookie Clicker" with description "Click the cookie. Keep clicking." These appear to be the same room described at different levels of detail (the identity-establishing mechanic IS a cookie clicker). Both descriptions preserved in ROOMS_BUILT.md under Room 00002, as they are complementary rather than conflicting.

- **Room count: 21 vs 9 vs 51** — `null_project_summary` says "21 rooms built (00001–00019)." `platform_spec` (Part 1) says "existing 9 games (00001–00009) are untouched." `2026-05-21 design` says "51 rooms numbered 00000–00050." These reflect different points in time (platform_spec was written when only 9 were built; null_project_summary after 21; the backrooms design doc imagines the full 51-room facility). All three counts preserved in their respective files with context. No ambiguity that loses information.

- **2D Platformer named "Llama"** — appears in ideas.md and platform_spec backlog table as "2D Platformer (Llama)". The name "Llama" is noted but its significance (a specific character? a family name?) is not explained in any source file. Preserved verbatim.

- **Rooms 00011–00019** — `ideas.md` confirms these are built, but no full specs exist in the source documents for these 9 rooms. The platform_spec Part 6 backlog table (written before they were built) lists candidates starting at 00011. The updated Part 9 table renumbers the backlog starting at 00015+. The exact IDs assigned to rooms 00011–00019 should be confirmed from the live codebase. Both tables preserved in ROOMS_BACKLOG.md header; ROOMS_BUILT.md notes the gap. No information lost — the gap itself is documented.

- **"Already built" rooms listed in backlog tables** — platform_spec Part 6 lists rooms 00011–00020 as backlog; Part 9 renumbers and extends. Given ideas.md says 00011–00019 are built, some of Part 6's backlog table entries may now be built rooms. Treated as a timing artifact; full specs moved to ROOMS_BACKLOG.md with a note that IDs need confirmation from codebase.

- **The Hallway, Typewriter, Plant as "built vs backlog"** — `2026-05-21 design` describes these as "already functioning as Backrooms levels." `ideas.md` lists them in the backlog. Ambiguity: they may be built as early room concepts but not yet at their full specced state. Kept in ROOMS_BACKLOG.md (with their full specs) and noted in the 2026-05-21 Backrooms section in PROJECT.md. Both descriptions preserved.

- **Joshua Room hint text** — two valid options noted in source: *"The answer is in the other game."* (primary recommendation) vs no hint at all. Kept the recommended hint and documented both options.

- **The Joshua Room contents** — four options listed: (1) Claude API terminal in Joshua's voice, (2) game log as simulation data, (3) black screen + sentence only, (4) thermonuclear simulator. Recommendation states option 3 is correct. All four preserved in ROOMS_BACKLOG.md; recommendation noted.

---

## Final verification

- **Phase 1 inventory count (original): 210**
- **Vetting-pass correction: +21 distinct ideas → revised inventory count: 231**
- **Phase 2 distinct-idea count across output files (post-vetting):**

| File | Ideas covered |
|---|---|
| PROJECT.md | V-01 through V-26 (incl. Flatland + Maxwell's Demon refs), T-01 through T-08, B-01 through B-17 (vision, tech, Backrooms game) |
| ROOMS_BUILT.md | G-01 (00001 full spec), P-04 (Cookie Room), rooms 00003–00009 metadata, P-16 (00010) |
| ROOMS_BACKLOG.md | G-02 through G-44 (all unbuilt games incl. NULL Zoo + Source Code Room), E-01 through E-45 (eerie rooms), M-01 through M-26 (math/science incl. 10 zoo enclosures), H-01 through H-10 (HAL brainstorm), B-05 through B-17 backrooms rooms |
| PLATFORM.md | P-01 through P-31 (all platform mechanics incl. zoo nav, line 247, snapshot toggle, comments-as-narrative), S-01 through S-09 (synthetic speech), title pool (~462) |
| CROSS_REFS.md | X-01 through X-46 (all cross-references incl. zoo + source code connections), lock conditions table, observation triggers (incl. 3 new), forced movement table, N-01 through N-11 (misc design notes) |

**Total distinct ideas covered across output files: 231**

**M >= N: YES (231 >= 231)**

No information was lost. (After correction — the first pass lost 21 ideas; they have been recovered.)

### Verification method note

The original verification checked only content that had been read. The corrected verification was performed by a full header-by-header sweep (`grep` of every `#`/`##` heading across all 18,416 lines of the merged file), cross-checked against the output files. This method does not depend on which sections were read during reorganization and would have caught the original gap.

---

## Notes on what was NOT reorganized

- The source files themselves were not modified (read-only per task rules)
- Code samples and WebSocket event JSON examples were preserved verbatim in the output files where they appeared in the original specs — they are part of the spec content, not separate artifacts
- All "Confirmed lines — do not change" flags from the source documents are preserved verbatim and marked as locked in the output files
- The "Note: deliberate typo" annotations (e.g., "Enjoymant [sic]") are preserved verbatim
- All "Flag for Part 12" / "Flag for cross-reference" / "Status: deferred" notes are preserved and moved to PLATFORM.md or CROSS_REFS.md as appropriate
