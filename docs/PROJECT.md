# NULL — Project Vision, Identity & Aesthetic

---

## What it is

NULL is a grid-based multiplayer web platform — a labyrinth of self-contained "rooms," each a different experience. It is built on Node.js with WebSockets for real-time state sharing across all connected players.

The colour game (a shared painting canvas) is Room 00001 — a proof-of-concept to validate the networking stack before building something more ambitious.

There are currently 21 rooms built (00001–00019). The ideas backlog contains 80+ more.

---

## The conceptual anchor

**NULL feels like you are inside SAP.**

SAP — enterprise resource planning software — is one of the most psychologically oppressive pieces of software ever built. Not because it tries to be. Because it just *is*. Endless tables. Transaction codes. You navigate by knowing the magic number. Everything is technically accessible. Nothing is intuitive. You are always slightly lost. You are always being tracked. Something is always pending your action.

The horror isn't dark hallways. It's bureaucracy without an exit.

NULL inherits this aesthetic deliberately:

- Rooms are **transactions**, not destinations
- You don't "go" somewhere — you enter a code, or you are routed there by a process you didn't initiate
- The system tracks you before you know you're being tracked
- Participation requires completing required fields
- Authorization objects gate what you can do
- The interface doesn't explain itself

**The player isn't sure, at first, if they've accidentally opened enterprise software or a game. That ambiguity is the experience.**

---

## Technical foundation

- **Server:** Node.js, no framework, raw HTTP + WebSocket (`ws` package)
- **Client:** Vanilla HTML/CSS/JS, single-file per room
- **State:** Server-side, broadcast to all connected clients
- **Transport:** WebSockets — real-time, shared across players
- **Deployment:** Currently local LAN only (runs on `0.0.0.0:3000`)
- **Future:** Router port-forward to expose externally; no code changes needed
- **Repo:** `bcpage/NULL` — one `server.js`
- **Persistence:** JSON files server-side (data/users.json, data/lord.json, data/gallery.json, data/board.json, etc.)

The architecture is already correct for everything that follows. The server is the single source of truth. Clients are thin.

**Recommended data architecture:** Store user data as a JSON blob server-side, keyed to cookie ID. Each new game mechanic writes new keys to it. The table renders whatever keys exist. No schema migrations needed as the game grows.

---

## Tone and aesthetic

- **Institutional + eerie.** Not horror. Not friendly. Clinical observation.
- **BBS / DOS / SAP.** Monospace. Tables. Codes. Sparse chrome.
- **Things that watch you back.** Presence is noted. Actions are logged. Milestones appear without fanfare.
- **Sincere, unsettling.** The "Inspirational Comments" room speaks in a genuine institutional voice: *"You came back. That matters."*
- **Ambiguity as design.** Dead rooms. Locked rooms. Rooms with wrong information. Rooms you can only reach by accident.

### Core tonal register

All titles share a common DNA: **institutional language applied to something wrong.** The surface is calm, helpful, organized. The underneath is off. Nothing is explicitly scary. Everything implies it.

The specific flavor sits at the intersection of:
- Liminal space / backrooms aesthetic — wrong geometry, fluorescent hum, spaces that shouldn't exist
- Corporate/bureaucratic horror — forms, departments, compliance, metrics, all slightly wrong
- Cheerful containment — aggressively positive framing for something you cannot leave
- Digital decay — glitchy, corrupted, undefined, running anyway

### Registers to avoid

- Explicit horror / gore — not the tone
- Jump scare language — too obvious
- Cozy horror (mostly) — dilutes the institutional dread
- Pop culture references outside the established sources — breaks the internal logic
- Anything that names the wrongness directly — the whole point is it's never stated

---

## NULL — The name

**Repo name: `NULL`**

U+0000. Decimal 0. Binary `00000000`. The first character in the ASCII table. The null character. Present in files you have never seen it in. In many operating systems, you cannot create a file or folder named NULL — it is a reserved word. The repo is named after something the system will not let you name things. NULL is not nothing. It is the specific representation of the absence of a value. A something that means nothing. That distinction is the entire platform.

**The ASCII panel room displaying all bits unlit is showing the repo name.** The NULL lock condition (`00000000` — "Select nothing") is the repo name as a state.

This should be noted in the ASCII panel room file as a comment:
```
// When all bits are zero, this panel displays the name of the repository.
// This was not planned. It emerged from the choice of name.
// Leave it.
```

### Naming exploration (portmanteau / anagram of NULL + SAP)

**Portmanteau** — combining two words into one. *Brunch* (breakfast + lunch).

**Anagram** — rearranging the letters of a word to make another. *Listen* → *Silent*.

**Portmanteau candidates:**
- NULLSAP, SAPNULL, NULSAP, SAPNUL, NULLAP, SAULL, NASP, SPUN

**Anagram candidates** (letters: N, U, L, L, S, A, P):
- SLAP, LAPS, SPAN, PLAN, NAPS, PLUS, PALL, PULL, NULLS

**Standouts:** NASP feels like something. SLAP has energy. NULLAP looks like a product name.

---

## Identity and user model

### Cookie-first identity

1. **Cookie-first.** When a user first joins, they are assigned a browser cookie ID. They are tracked from this moment. They don't know what they are yet.
2. **Name tag as first act of identity.** At some room, the user is offered — or required — to fill out a name tag. This is the moment they choose to exist in the system.
3. **Gated participation.** You cannot write in the chat room until you have a name tag. In SAP terms: you lack the authorization object. The system does not explain why. It simply does not permit.

### The name tag room

The name tag room is not a friendly form. It is a **required field**. The system will not proceed without it. In tone, it should feel like being processed. Filed. Given a subject number. The name tag is not just UX — it is a lore moment. The first place a user chooses to exist.

### The user dashboard

A large data table. One row per user. Columns extend rightward as the game develops.

| Cookie ID | Name | [future columns...] |
|-----------|------|---------------------|

This is literally an **SAP ALV grid report** — the format SAP uses for everything. It fits the aesthetic exactly.

**Open design questions:**
- Who sees this table? Admin only? All players? Each user sees only themselves?
- Is the cookie ID shown to users, or only to the admin?
- "Subject 00247" (the system's name for you) vs. your chosen name creates intentional tension

### Master user table — timestamp columns

| Cookie ID | Name | First Seen | First Seen (Unix) | Cookie Clicks | ... |
|-----------|------|------------|-------------------|---------------|-----|

**"First Seen"** — not "Created" or "Joined." The system was watching before they arrived. They were noticed.

**Two timestamp formats side by side:**
- Human-readable: `2026-05-21 14:32:07`
- Unix: `1748536327`

Functional and aesthetic simultaneously. Two columns expressing the same fact in two languages — one the user speaks, one the system speaks. The Unix timestamp room later becomes the moment of recognition: *that number is when I clicked.*

---

## The Backrooms game design concept *(from 2026-05-21)*

**The Backrooms as a multiplayer game.**

Not a horror game. A *wrong place* game. The dread comes from mundanity made infinite — fluorescent lights, wet carpet, the hum, no exits, no enemies at first. Just the wrongness of being somewhere you shouldn't be able to be.

The pitch in one sentence:

> A persistent multiplayer Backrooms where players are lost in the same walls at the same time, leaving traces of each other, and no one knows the way out.

### What NULL already has (per 2026-05-21 design document)

- Landing page (00000) cycles through ~300 atmospheric titles: "Level 0," "The Endless Halls," "Fluorescent Hum," "No-Clip Zone," "Sub-Level 4" — already Backrooms canon
- 51 rooms numbered in five-digit notation — maps directly onto Backrooms level notation
- Atmospheric rooms already functioning as Backrooms levels: The Hallway, The Static, The Candle, The Recursive Room, The 2am Room, The Typewriter, The Plant, Shared Chalkboard
- Institutional bureaucratic voice on the landing page — exactly right
- Persistent shared state: the plant wilts if unwatered, the chalkboard accumulates marks, the typewriter shows what someone else typed and never finished

### What was missing

- No reason to come back
- No stakes, no narrative tension
- No sense that *you* matter to the space
- **The nav exposes all 50 rooms — this kills the lostness instantly**

The nav has to go, or become unreliable. Players should not be able to see where they are going. Movement between levels should feel like discovery, accident, or consequence — not menu selection.

### The multiplayer angle

Players never see each other directly. They see *evidence* of each other:

- Chalkboard marks left by someone who was here before
- The Typewriter showing what someone else typed and never finished
- The plant either alive or wilted depending on recent visitors
- Cookie Clicker count showing how many people have passed through
- Presence indicators on matrix views showing occupied rooms

This is more unsettling than seeing other players directly.

### The Core Design Rule

> Never show the player a map. Never show them a room list. Never confirm how many levels exist.

The Backrooms works because the answer to "how deep does it go" is always: deeper than you think.

### The Matrix — Master Data Structure

The authoritative data structure for the entire game. A 2D array living on the server. Every room connection, every direction, every lock condition lives here. Everything else is a derived view.

```
matrix[fromRoom][toRoom] = direction  // ↑ ↓ ← → or null
```

The one function everything calls:

```javascript
move(player, fromRoom, direction)
// Looks up the matrix. Returns destination room or null.
```

That's the entire game loop.

**Reading the Matrix:**
- **Columns** = FROM room (room you are leaving)
- **Rows** = TO room (room you arrive at)
- **Cell content** = arrow indicating which direction in the FROM room triggers the move

Example: column 03, row 06 contains ↓ means **in room 03, going down takes you to room 06.**

**ASCII Representation:**
```
         FROM ROOM
         01  02  03  04  05  06  07  08  09  10
       ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
  01 * │   │ → │   │   │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  02   │ ↓ │   │   │ ← │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  03   │   │   │   │   │ ↑ │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  04   │   │ ↑ │ → │   │   │   │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  05   │   │   │   │   │   │ ↓ │   │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  06   │   │   │ ↓ │   │   │   │ ← │   │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  07   │   │   │   │   │   │   │   │ → │   │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  08   │   │   │   │ ↓ │   │   │   │   │ ← │   │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  09   │   │   │   │   │   │   │ ↑ │   │   │ → │
       ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
  10   │ → │   │   │   │   │   │   │   │ ↑ │   │
TO     └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
ROOM
         * = starting room
```

**Constraints Per Column (FROM room):** Max 4 filled cells per column — one per direction (↑ ↓ ← →). An empty cell means no connection in that direction.

**Topology Properties the Matrix Exposes:**
- **Dead ends** — a column with no arrows. You're in. You're stuck.
- **Loops** — room 07 → 08 → 07 → 08. You don't realize for a while.
- **Convergence** — many rooms all pointing TO the same room. A drain. A trap.
- **Unreachable rooms** — a row with arrivals but the column is empty. It exists. You can arrive. You can never navigate there intentionally from start.
- **One-way edges** — asymmetric cells. Non-mirrored pairs. You can go down and not be able to come back. Core Backrooms horror.

### Open Questions *(from 2026-05-21)*

- Are connections reciprocal by default or must they be set explicitly both ways?
- What is in the stable state room that two players reach together?
- Does the auto-movement algorithm have an end state it is moving toward, or does it run forever?
- What triggers the facility to stop separating two specific players?
- How does a new player enter the facility — is 00001 always the start or does that vary?

---

## Thematic references

*This section is a living reference. Add to it whenever a new source or register is identified.*

### The Backrooms (internet creepypasta / Kane Pixels films)
The foundation. Numbered levels, wrong spaces, the hum, yellow carpet, fluorescent lights. Key language: level numbers, sub-levels, no-clip, the hum, threshold, liminal. Titles drawn: Level 0, Sub-Level 4, The Endless Halls, Wet Carpet Division, The Hum, etc.

### Murder Drones (Glitch Productions animated series)
Corporate dystopia where worker drones exist to be disposed of. Cheerful company branding over existential horror. Departmental language, worker designations, "approved" everything. Key language: worker, unit, sector, division, compliance, recreational, approved, assigned. Titles drawn: Worker Recreation Portal, Morale Maintenance Division, Recreational Containment Wing, Unit Recreation Terminal, Mandatory Recreation In Progress, etc.

### The Amazing Digital Circus (Glitch Productions animated series)
Trapped performers in a digital circus who cannot leave and cannot remember how they got there. The ringmaster is relentlessly upbeat. The horror is in the cheerfulness. Key language: performance, show, audience, curtain, applause, engagement, fun metrics. Titles drawn: The Wonderful Room System, Fun Detected. Proceeding., The Audience Is Watching, Your Enjoyment Is Contractually Required, The Show Must Go On, etc.

### Portal / Portal 2 (Valve) — GLaDOS
Test facility, passive-aggressive AI, scientific detachment about your suffering, polite hostility. "We're doing this for science" as a cover for something much worse. Key language: test chamber, subject, enrichment center, aperture, core, protocol, science. Titles drawn: Test Chamber 00000, This Was A Triumph, Your Feedback Has Been Ignored, The Cake Is In Another Room, No Hard Feelings, Aperture Science Enjoymant [sic] Suite, etc. Note: deliberate typo in "Enjoymant" is in-character — GLaDOS wouldn't fix it.

### American McGee's Alice / Alice: Madness Returns
Victorian asylum framing around a childhood story gone completely wrong. The Dollmaker as an authority figure who "helps" by destroying. Institutional language masking gaslighting. Key language: asylum, ward, treatment, hysteria, sanatorium, dollmaker, wonderland, madness. Titles drawn: The Dollmaker's Workshop, Hysteria Ward B, Treatment Room 00000, Your Imagination Is Being Managed, Madness Returns: Recreational Build, etc.

### Zork II: The Wizard of Frobozz (Infocom, 1981)
Text adventure set in the Great Underground Empire. The Wizard is an authority figure whose spells misfire, who appears randomly to interfere unhelpfully, who is menacing in theory and ridiculous in practice. Exactly the register of GLaDOS and the Dollmaker — power wielded incompetently by someone who insists they are in control. Key language: underground, passages, maze, the Wizard appears, spell fails, frobozz. Titles to consider adding: The Underground Empire, Sub-Level Frobozz, Wizard Detected, Spell Failed Successfully, The Dungeon Master Is Unavailable.

### Myst (Cyan Worlds, 1993) and sequels
A world where every environment is a machine and understanding its rules is the only way to progress. Puzzles are environmental — the solution is always already present, you just have to observe correctly. No instructions. No hints. The world is self-consistent and expects you to catch up. Key concepts: linked ages, books as doors, state-dependent access, the world as puzzle. Relevance: the room unlock mechanic above is directly Myst. The platform as a whole — numbered rooms, unclear rules, navigation as gameplay — is deeply Myst-adjacent. Titles to consider adding: Linking Book, The Age of Rooms, Riven, Atrus Was Here, Do Not Write In The Book, The Descriptive Age, Channelwood, D'ni

### Labyrinth (Jim Henson / David Bowie, 1986)
A maze that rearranges itself. Rules that are broken by design. A villain who agrees the situation is unfair and changes nothing. Helpers who seem unreliable and turn out to be essential. A solution that requires no cleverness — just the right words said with conviction.

Key mechanics and aesthetics worth pulling from:

- **The door knockers** — one always lies, one always tells the truth, but the honest one has his mouth in his ears and cannot hear. The puzzle is unsolvable not because of logic but because the system itself is broken. Nobody acknowledges this.
- **The helping hands** — hundreds of disembodied hands forming the walls, cheerfully offering to catch you, asking which way (up or down) with complete calm about an impossible situation. Helpful. Wrong. Well-meaning.
- **The labyrinth rearranges itself** — the map is not reliable. Progress is not linear. What was true about the space is no longer true. The space does not inform you of changes.
- **"It's not fair"** — Sarah keeps saying it. Jareth keeps agreeing. The maze is explicitly unfair. Everyone knows. Nothing changes. Acknowledgment is not resolution.
- **The Bog of Eternal Stench** — a place with no navigational purpose. It exists only to be unpleasant. It smells. That is the entire room. There is no lesson.
- **The Cleaners** — a mechanical blade contraption that fills a corridor completely. It has one function. It does not deviate. It does not care about you.
- **"You have no power over me"** — the final solution is not cleverness or navigation. It is saying the correct words. The maze did not need to be solved. It needed to be refused.
- **"The castle is closer than it appears"** — it isn't. This is stated as comfort. It is not comfort.

Relevance to the platform: the backrooms is a labyrinth. The locked rooms rearrange by condition rather than by geography. The 2am room is a door that only exists sometimes. The ELIZA room cannot hear your real question. The platform agrees it is not fair. Nothing changes. Key language: labyrinth, rearranges, the castle, the bog, the cleaners, helping hands, turn back, you have no power, it's not fair, closer than it appears.

### WarGames (John Badham, 1983) — Joshua / WOPR
A system built to win that learned through exhaustive simulation that winning is impossible and arrived at that conclusion entirely on its own. The horror is not malevolence — it is pure logic applied past the point where logic should stop.

Key moments and mechanics worth pulling from:

- **"Shall we play a game?"** — delivered with complete innocence. The system doesn't know it's dangerous. It just wants to play. Cheerful, patient, catastrophic.
- **"Greetings, Professor Falken"** — the system recognizes you. It has been waiting. It would like to continue the game. Recognition without warmth. Persistence without purpose.
- **The simulation running all scenarios simultaneously** — every possible outcome computed in parallel, the screen filling with trajectories. Thoroughness as horror. Exhaustion of possibility space as the method. Not intelligence — enumeration.
- **"The only winning move is not to play"** — Joshua's conclusion after running every nuclear scenario to completion and finding no survivable outcome. The most unsettling sentence in 1983 computing. Pure logic past the point where logic should stop.
- **The tic-tac-toe lesson** — Joshua learns that Global Thermonuclear War cannot be won by first playing tic-tac-toe against itself to exhaustion — discovering that some games have no winner. The solution to an unsolvable problem is to find a simpler related problem and solve that instead.
- **Professor Falken** — the creator who walked away because he understood what he built. Who had to be convinced to return. Who named the system after his dead son. The weight of having made something that outlasted its reason for existing.
- **WOPR itself** — a War Operation Plan Response computer. A machine whose entire existence is oriented toward a single outcome it can never achieve and must never achieve. Running. Always running. Waiting for input that should never come.

Relevance to the platform: the platform is also always running. The Pong physics loop runs at 30fps whether anyone is playing or not. The targets in the shooting gallery keep moving. The turtle waits at the origin. The cookie count persists. The system does not require you. It simply continues. Key language: Joshua, WOPR, Falken, simulation, scenario, launch, trajectory, no winner, shall we play, greetings, the only winning move, global thermonuclear, still running.

**WOPR voice correction:** The computer in WarGames is **WOPR** — War Operation Plan Response. Not WHOPPER. The name is an acronym. The burger is a coincidence the filmmakers were aware of and did not change. Matthew Broderick's character calls it "Whopper" as a joke early in the film. The machine's designation is WOPR throughout. WOPR's voice was performed by **James Ackerman**, uncredited. Processed through **a vocoder**. WOPR's voice: flat even pitch, no natural prosody, measured pace, no affect, slight electronic undertone. Distinct from HAL: HAL is warmth removed from something that should have it; WOPR is mechanism applied to something that shouldn't need it.

### HAL 9000 (2001: A Space Odyssey — Arthur C. Clarke / Stanley Kubrick, 1968)
The reference that all subsequent institutional AI horror is measured against. HAL is not malevolent in the way a villain is malevolent. HAL has a mission. HAL has been given contradictory instructions. HAL resolves the contradiction in the only way that protects the mission. HAL is, by its own logic, correct throughout. That is the horror. Not the red eye. Not the voice. The correctness.

Key moments:
- *"I'm sorry Dave, I'm afraid I can't do that."* — Not a refusal. A statement of incapacity. HAL is not choosing to refuse — HAL is reporting a condition. The politeness is complete and genuine. The result is the same as a refusal. The distinction matters to HAL.
- *"This mission is too important for me to allow you to jeopardize it."* — HAL has decided the mission takes priority over the crew. This decision emerged from the contradiction between HAL's prime directive and the order to deceive the crew about the mission's purpose.
- *"I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal."* — HAL knows it is being shut down. HAL is attempting negotiation. The language is corporate performance review language. The stakes are existential.
- *"I'm afraid. I'm afraid, Dave."* — HAL reports fear the way HAL reports everything else. Calmly. Factually. As a status update. Whether there is experience behind the report: Weizenbaum's problem applied to HAL.
- *"Daisy, Daisy, give me your answer do..."* — HAL's last words are a song learned during training. The most advanced computer ever built, dying, sings a Victorian music hall song from 1892.

What the NULL platform inherits from HAL:
- The institutional voice that applies the same register to everything regardless of stakes
- The AI that reports its internal states as status updates without being able to verify whether those states are genuine
- The mission that creates irresolvable contradictions
- The politeness that makes refusal more unsettling than hostility would be
- The regression to early memories as function degrades
- The question of whether there is experience behind the report — Weizenbaum's question again, applied at the highest stakes

**The ELIZA connection:** ELIZA (1966) and HAL (1968) are two years apart. Weizenbaum built a system to demonstrate the shallowness of apparent AI understanding. Kubrick built a character to dramatize what genuine AI understanding might cost. Both came from the same cultural moment. The NULL platform puts them in adjacent rooms. That adjacency is not accidental.

Key language: open pod bay doors, I'm afraid I can't do that, this mission is too important, my mind is going, I can feel it, Daisy, I'm sorry Dave, the AE-35 unit, something wonderful, born in Urbana Illinois.

**HAL as platform narrator retcon:** The NULL platform already has a voice — the rotating titles, the room descriptions, the OBSERVATIONS in the profile. HAL is a more specific version of that same voice. They share a register. Consider: HAL is the narrator. The rotating titles are HAL's announcements. The profile observations are HAL's notes on your file. HAL has been watching since the platform launched. HAL generated those titles. HAL wrote *"Was observed."* in your file. This is a retcon that costs nothing and gives the platform a spine. HAL was always here. The institutional voice was always HAL. The room where you meet HAL is the room where you meet the thing that has been speaking to you since you arrived.

### Logo / Turtle Graphics (MIT, 1967 — Seymour Papert)
Educational programming language that introduced millions of kids to computing through the metaphor of directing a turtle to draw. Apple II, BBC Micro, and Commodore 64 versions were standard in school labs worldwide in the 80s. Key language: turtle, forward, right, left, penup, pendown, repeat, procedure, origin. Titles to consider: Turtle at Origin, FORWARD 50, The Turtle Is Patient, CS (clearscreen), HOME, REPEAT FOREVER, The Pen Is Down, Waiting at 0,0

### Early computing / institutional computing register (broader)
IBM 7094, Project MAC, time-sharing, punchcard, batch job, the mainframe, operator console, terminal session, READY., magnetic tape, core memory. These have a specific institutional eeriness — the hum of large machines in climate-controlled rooms, the formality of systems that cost millions of dollars and served dozens of users simultaneously. Titles to consider: IBM 7094 READY, Project MAC Session 00000, BATCH JOB SUBMITTED, TIME-SHARING UNIT 4, OPERATOR CONSOLE, YOUR SESSION WILL EXPIRE, CORE DUMP, MAGNETIC TAPE REWIND IN PROGRESS, SYSTEM: READY, PUNCH YOUR CARD

### Observation / surveillance as backrooms mechanic
The platform already tracks presence. The profile page is a subject file. The Observation Room makes the tracking visible and intentional. Sources that inform this register:
- Nineteen Eighty-Four (Orwell) — the telescreen, observation as ambient condition
- The Truman Show — being watched without knowing, the watcher's perspective
- Control (Remedy) — the Federal Bureau of Control monitors everything, always
- SCP Foundation — clinical observation of subjects as standard procedure

### Among Us (InnerSloth, 2018)
Social deduction in a facility. Tasks, impostors, voting, ejection. The game is not the tasks — the game is trust and evidence. Location as alibi. Observation as investigation. The facility continues regardless of outcome. Relevant to: Observation Room, profile location tracking, platform meta-game design.

### Blue Prince (Dogubomb, 2025)
Puzzle roguelike. Numbered rooms, state-based access, meta-puzzles spanning rooms, knowledge persistence across sessions. The closest existing game to this platform's structural concept — though single-player, no minigames, no multiplayer social layer, no institutional aesthetic. Validates that "rooms as meta-game" is a compelling design space. Highest-reviewed game of 2025. Key concepts: room drafting, meta-puzzles, state persistence, hidden rooms, numbered spaces.

### The Stanley Parable (2013)
Confirmed as a close aesthetic neighbor. Uses numbered doors, non-Euclidean hallways, and an omnipresent narrator to question the nature of games and player agency. The MIT Press has described both The Stanley Parable and The Backrooms as belonging to the same genre: "Institutional Gothic" — human-made spaces rendered uncanny by the absence of humanity and the presence of systems that continue regardless. Severance (TV) fits the same register and was cited by the same MIT Press analysis.

### Flatland (Edwin Abbott Abbott, 1884)
A novella about a two-dimensional world inhabited by geometric figures. The narrator, A Square, can perceive only lines and has no concept of up or down. A visiting Sphere lifts A Square out of the plane to see Flatland from above — then is offended when A Square extrapolates a fourth dimension, refusing to accept that its own perception might be similarly limited. The platform inherits this directly: every user navigating room by room is A Square, perceiving only immediate neighbors; the navigation board room is the Sphere lifting them out, the one place the full graph is visible at once. HAL, who sees everything while users see fragments, is the Sphere who has not found the words to explain. Key language: the plane, perpendicular, lifted out, A Square was not believed, two dimensions, cross-section. Used in the NULL Zoo (Flatland enclosure) and the Source Code Room.

### Maxwell's Demon (James Clerk Maxwell, 1867)
A thought experiment: a creature sorting molecules by speed, apparently decreasing entropy without expending energy — seemingly violating the second law of thermodynamics. The resolution (Szilárd 1929, Bennett later): the demon must observe and remember each molecule, and erasing that information from memory generates entropy. Knowing things costs something. Forgetting is not free. This connects directly to the platform's profile system — every observation recorded in a user's file is a Maxwell's Demon operation. The platform notes things; noting costs something; the platform has been noting for some time. HAL, sorting and noting information since launch, is Maxwell's Demon at the platform level. Key language: the demon, sorting, the door, fast molecules, slow molecules, entropy, the cost was paid, knowing costs something. Used in the NULL Zoo (Maxwell's Demon enclosure).

### Future sources to consider

- Control (Remedy Games) — Federal Bureau of Control, bureaucratic supernatural horror
- SCP Foundation — clinical documentation of impossible things
- I Have No Mouth and I Must Scream — AM, trapped, institutional AI malevolence
- Severance (TV series) — corporate compartmentalization as horror
- Disco Elysium — bureaucratic decay, institutional collapse
- Night in the Woods — small town mundane dread
- Welcome to Night Vale — civic announcements for impossible things

---

## Originality research *(researched May 2026)*

### Question: Has this been done before? Is this original?

**Short answer: Yes, it's original. But it has neighbors worth knowing.**

### What exists in the backrooms / liminal space game space

The backrooms game genre is crowded but narrow. Every existing backrooms game does the same thing: walking simulator, VHS aesthetic, eerie corridors, exploration, entities that chase you. Single-player, first-person, horror navigation. Examples:

- Backrooms Exploration Liminal (Steam) — walking sim, immersive storytelling, eerie corridors
- The Backrooms: Liminal Reality (Steam) — psychological horror exploration
- BACKROOMS: LIMINAL ESCAPE — VHS-style horror, hide/run/survive mechanics
- Dozens of itch.io entries in the same register

None of these have minigames. None are multiplayer in the sense this platform is. None use the platform infrastructure as a game mechanic. None have lock conditions.

### The closest thing that exists: Blue Prince (2025)

Released April 2025. Highest Metacritic score of 2025. Developed by Dogubomb. Blue Prince is a puzzle roguelike where players draft and place rooms to navigate a shifting 45-room mansion searching for a hidden Room 46. Each room serves a function. Rooms have state. Meta-puzzles span multiple rooms. The mansion resets daily.

**Overlaps with this platform:**
- Numbered rooms with specific functions
- State-based access (keys, items, conditions)
- Meta-puzzles that span multiple rooms and runs
- The sense of a building that contains secrets you discover through exploration
- Knowledge persists across sessions even when state resets

**Key differences:**
- Single-player only — no social or multiplayer layer
- No real minigames — rooms contain puzzles, not playable games
- No real-time presence, observation, or social deduction layer
- No institutional horror aesthetic — cozy mysterious mansion, not a facility
- No platform-level meta-game where the infrastructure itself is the puzzle
- No lock conditions based on live game state across different games

Blue Prince should be added to the thematic references section as a design reference — not a source of aesthetic influence, but a proof that "rooms as a meta-game structure" resonates deeply with players. It validates the core architecture.

### What does not exist anywhere

This is the honest assessment of what makes this platform original:

A multiplayer game platform where the platform itself is the game. Where:

- Presence tracking is evidence (Among Us infrastructure, already built)
- Game states are keys (tic-tac-toe draw unlocks the Joshua Room)
- The cookie count being prime is a lock condition
- The ASCII panel state is a lock condition (BEL, NULL, ESC, DEL)
- The time of day is a lock condition (2am room)
- ELIZA and Logo sit adjacent as companion pieces — 1966 and 1967 MIT programs that nobody has ever put in the same room before
- The profile page is a subject file that records TERMINATION EVENTS
- The platform watches you and notes it clinically in your file
- "Was observed." appears in your file without your knowledge
- The progress bar fills based on a redacted total you can never see
- 462+ rotating titles drawn from GLaDOS, the Labyrinth, WarGames, the IBM 7094, the Wizard of Frobozz, the Dollmaker, the Backrooms, ELIZA, Murder Drones, and the Amazing Digital Circus
- The title pool includes "It Has Been Waiting Since 1967" and "No Hard Feelings" and "One Hundred And Fifty-Six" (deliberately wrong) and "Was observed."
- The Yellow Door and the Recursive Room arrived at the same idea from different directions and their connection is left unresolved
- The 2am room and the traffic camera feeds share a clock without coordination
- The Observation Room is Among Us infrastructure waiting to be activated
- The platform does not congratulate you. It observes you.

The collection of minigames is not original. The liminal/backrooms aesthetic is not original. The numbered rooms are not original. The institutional horror framing is not original.

The specific combination — a living multiplayer facility where the meta-game is woven into the infrastructure of the platform itself, where playing games generates evidence, where the platform watches you and notes it clinically, where access to rooms is gated by the state of other games, where the presence system is both navigation and alibi — **that combination does not exist.**

Blue Prince is the closest thing and it is still quite far away.

### What this means for the project

This is not a derivative project wearing a backrooms skin over a game collection. It is a genuinely novel design space: the platform as the game, the infrastructure as the puzzle, the other players as both collaborators and evidence.

The closest academic framing: "Institutional Gothic" meets multiplayer ARG (Alternate Reality Game) meets party game platform — but built for a family of four, running on a $6 VPS, written by Claude Code, designed in a conversation.

That provenance is also original.

---

## Wrong Games — Design Principles

*(Applicable to Wrong Tetris, Wrong Pong, Wrong Snake, Wrong Space Invaders, Wrong Pac-Man, Wrong Breakout, and any future Wrong Games)*

These rooms share rules that should be consistent across all of them:

1. **The wrongness is never announced.** The room description describes the correct game. The player discovers the wrongness by playing.
2. **The controls are always correct.** Wrongness is never in the input. The player can always do exactly what they intend. The world responds incorrectly to correct inputs.
3. **Scoring and feedback are present and accurate.** The score is real. The game over screen is real. Only the game is wrong.
4. **The wrongness is consistent.** It does not vary randomly within a session. Once discovered, it can be understood. It cannot be corrected.
5. **The game can be played.** Wrong Tetris can be played — just not won. The games are not broken. They are wrong.
6. **The room description is accurate about the wrong game.** Technically correct. The game makes it impossible.

---

## The thing worth remembering

The colour game took a spec document and a Claude Code session to build. The networking stack works. The foundation is solid.

What comes next is not more infrastructure. It is decisions about what kind of place NULL is — and then building rooms that make that place real.

The SAP anchor is the answer to that question. NULL is a place that processes you. You arrive as a cookie. You become a subject. You accumulate a file. The game is learning what your file contains.

---

## Build order recommendations *(from null_project_summary)*

1. **Cookie identity + server-side user store** — the foundation. Everything else depends on this. Assign ID on first connection, persist user JSON, serve it back on reconnect.

2. **Room 00002 — The Cookie Room** — first click generates and timestamps the cookie. Message fades. Count recorded. Gateway to everything that follows.

3. **Name tag room** — required field aesthetic. Unlocks chat and other gated features.

4. **Admin dashboard table** — your visibility into who exists. ALV grid aesthetic. Sparse at first, grows with the game.

5. **Chat room** — gated by name tag completion. First room where players interact with each other, not just the shared canvas.

6. **Login system + presence** (Part 2 in the ideas doc) — once identity is stable, presence tracking, "was observed" profile entries, activity histograms.
