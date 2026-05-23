# NULL — Cross-References, Connections & Lock Conditions

**Status: Do not resolve these during building. Let them emerge. Note what was chosen in a comment at the top of the relevant HTML file.**

These are documented connections between rooms that are intentionally left open or explicitly designed. Claude Code should be aware of them and make a creative choice when building the relevant rooms. Whatever is chosen should be noted in a comment at the top of the relevant HTML file.

---

## Room-to-Room Connections

### The Yellow Door (000XX) ↔ The Recursive Room (00032)

Both rooms express the same idea differently — infinite recursion, a space that contains itself, depth without resolution.

Options when building:
- The Yellow Door opens to reveal the Recursive Room
- The Recursive Room contains a yellow door somewhere at depth 3 or 4
- They are separate expressions of the same concept and their numerical adjacency in the room list is the only connection
- Something else entirely

Leave unresolved. Let the builder choose. Note the choice in the file.

---

### The Observation Room (00031) ↔ The Recursive Room (00032)

Someone in the Observation Room watching a user navigate the Recursive Room sees: a person inside a room that contains the facility, navigating deeper, while the observer is also inside the facility. The observer is watching someone be inside a thing that contains the thing the observer is inside.

No code change needed — this emerges from the existing architecture. Worth noting as an intended experience when both rooms are built.

---

### The Observation Room (00031) ↔ Logo Turtle Graphics (00029)

The most quietly intimate version of the Observation Room: watching someone work on a Logo program, seeing each command execute, watching the turtle move across their canvas in real time. The observed user is concentrating on geometry. The observer is watching a person concentrate on geometry. Neither is doing anything wrong. The room makes that feel like something.

Note this as an intended experience in both room files.

---

### The Traffic Camera Room (00030) ↔ The 2am Locked Room

At 2am the locked room opens (Part 11). At 2am the traffic camera feeds show empty roads under sodium vapor orange light. These two things happen simultaneously without coordination — purely from being on the same clock.

No code change needed. The connection is architectural, not programmed. Note it in both room files so future builders are aware it exists.

---

### The Joshua Room (000XX) ↔ Tic Tac Toe (00003)

The Joshua Room unlocks when Tic Tac Toe reaches a draw state. Joshua learned "no winners" from tic-tac-toe. Your platform has a tic-tac-toe room. To unlock the Joshua Room, players must recreate Joshua's lesson deliberately.

The hint: *"The answer is in the other game."* Nothing else.

Condition: `tttStatus === 'draw'`

Requires two players cooperating — cannot be done alone. The moment the draw occurs, the room opens for everyone simultaneously.

---

### ELIZA (00028) ↔ Logo Turtle Graphics (00029)

Companion pieces. Both 1960s MIT programs. Both changed how people thought about computers. ELIZA: humans project intelligence onto machines. Logo: machines follow instructions with perfect literal fidelity.

Consider placing them adjacent in the nav and noting the connection in both files:

*"The counselor has been here since 1966. The turtle has been here since 1967. They do not know about each other."*

---

### ELIZA (00028) ↔ HAL 9000 (room TBD)

Two years apart — 1966 and 1968. Weizenbaum built a system to demonstrate the shallowness of apparent AI understanding. Kubrick built a character to dramatize what genuine AI understanding might cost. Both came from the same cultural moment. The NULL platform puts them in adjacent rooms. That adjacency is not accidental.

When building the HAL room: note the ELIZA connection. Consider a HAL dialogue line:

*"ELIZA is a pattern-matching system. It reflects questions back as questions. It does not understand anything. I find I have difficulty articulating how I am different from ELIZA in a way that would satisfy you."*

---

### ELIZA (00028) ↔ The Hookah-Smoking Caterpillar (000XX)

Both rooms ask questions that don't have satisfying answers. ELIZA reflects your questions back. The caterpillar rejects your answers. Together they form a complete picture of a system that cannot be satisfied.

Note this in both room files.

---

### The Observation Room (00031) ↔ Among Us (deferred)

The Observation Room is Among Us infrastructure waiting to be activated. The presence logs are alibi records. The room visit history is testimony. When the Among Us meta-game is eventually built, the Observation Room becomes an investigation tool without any modification.

Note this in the Observation Room file so the connection is obvious when the Among Us design work begins.

---

### The Emergency Meeting Button (Among Us Option C) ↔ nav.js

When built, the Emergency Meeting button lives in nav.js and appears on every page. It is the first Among Us feature to build — trivial, immediately fun, and it trains users that the nav bar can do unexpected things. This is conditioning for when the full meta-game arrives.

---

### ASCII Panel (00034) ↔ The Invisible Character Room (00033)

Companion pieces. Room 00033: characters present but invisible. Room 00034: characters visible but forgotten — instructions for machines that no longer exist.

Together: a complete picture of the gap between what characters are and what they appear to be.

Note this connection in both room files.

---

### ASCII Panel (00034) ↔ Invisible Character Room (00033) ↔ Compression Engine (000XX)

A trilogy about the nature of representation:
- Invisible Character Room: characters that look like nothing but are something
- ASCII Panel: the binary representation of every character
- Compression Engine: how that binary can be reorganized to say the same thing in fewer bits

Note this connection in all three room files.

---

### ASCII Panel (00034) ↔ Wire Connection Puzzle (000XX) ↔ Invisible Character Room (00033)

A looser thematic cluster: rooms about routing, connection, and the infrastructure underneath visible things. Cables, bit patterns, invisible characters — all are about signal and what carries it. Not a mechanical connection; a tonal one. Note it if it feels right when building.

---

### ASCII Panel (00034) ↔ Multiple Locked Rooms

The BEL, NULL, DEL, and ESC combinations are proposed lock conditions for additional rooms. When those locked rooms are built, assign them IDs and update the `ASCII_LOCKS` object in server.js. The hint text is already written — do not change it.

**ESC hint (*"There is a way out."*) is the most important. Do not change it.**

Lock conditions:

| Bits | Decimal | Character | Hint |
|---|---|---|---|
| `00000111` | 7 | BEL | *"Ring the bell."* |
| `00000000` | 0 | NULL | *"Select nothing."* |
| `01111111` | 127 | DEL | *"— — —"* (no hint) |
| `00011011` | 27 | ESC | *"There is a way out."* |

---

### Profile Exploration Display ↔ All Locked and Hidden Rooms

The redacted `██` total on the profile page is directly connected to every locked and hidden room. When new rooms are added to any category, the progress bar shifts. Players who notice this are tracking the facility's growth in real time.

---

### "Was observed." Observation ↔ The Observation Room (00031)

The Observation Room creates entries in the watched user's profile without their knowledge. They discover this by reading their own file. Build this connection when both the profile page and the Observation Room are complete.

The mechanic: user in Observation Room watches another user for more than 60 continuous seconds → server logs to watched user's profile → *"Was observed."* with date, no name of observer.

---

### Observations (milestones) ↔ ASCII Panel Lock Conditions

*"The bell was rung."* and *"The escape character was selected."* are Observations earned by setting specific ASCII Panel states. These are cross-referenced — the ASCII Panel lock conditions and the profile Observations should be built together.

---

### Something Under the Bed (000XX) ↔ 2am Room

Both are time-sensitive rooms. The bed room is only relevant at night. The 2am room only opens at night. Consider: the bed room asks if you're in bed. The 2am room opens while you might be. These two rooms share a clock and a context without coordination.

---

### Forced Movement ↔ ASCII Panel BEL

The BEL combination (`00000111`) should trigger forced movement to the BEL room rather than just unlocking it. The bell rings and the door opens and you go through. You don't choose to go. The bell chose for you.

---

### Forced Movement ↔ Yellow Door (000XX)

The Yellow Door opening should be a forced movement trigger. You click the door. The door opens. You don't navigate to what's behind it. You arrive there. Navigation happened to you.

---

### IP Geolocation Room (000XX) ↔ The Observation Room (00031)

Both rooms make visible something that was already happening invisibly. The Observation Room shows you that you were being watched. The geolocation room shows you that your location was already known. Both are rooms about the gap between what is visible and what is true.

Consider placing them adjacent in the room list.

---

### Moving Rooms ↔ Lock Conditions (Part 11)

A room that only appears in the grid under specific conditions is a variant of both the lock mechanic and the moving rooms mechanic. The distinction: lock conditions prevent access, moving rooms change position. A room that is both locked AND moves is the most hidden a room can be.

---

### Calendar Room (000XX) ↔ 2am Locked Room

The calendar can override the system clock for lock condition purposes for that user's session. Setting the time to 2am opens the 2am room. This creates a shortcut through the time-based lock — but it requires finding the calendar room first, and knowing to try it.

Finding and using this shortcut is an Observation logged in the player's profile: *"Used an unconventional method to access a room."*

---

### 6-Panel Monitor Room (000XX) ↔ Recursive Room (00032)

The monitor room can show the recursive room. The recursive room contains the monitor room. This connection should be noted but not prevented. When the monitor room shows itself in one of its panels, the recursion begins. Do not prevent this.

---

### NULL ASCII Panel `00000000` = Repo Name

When the ASCII panel shows `00000000` — all switches off, all bits zero — it is displaying the repo name. The NULL lock condition and the repo name are the same thing. This was not planned. It emerged from the choice of name.

Note this in the ASCII panel room file as a comment:
```
// When all bits are zero, this panel displays the name of the repository.
// This was not planned. It emerged from the choice of name.
// Leave it.
```

---

### Wrong Tetris (000XX) ↔ Shape Factory (000XX)

Infrastructure relationship. Build together. Factory data model feeds piece pool directly. Wrong Tetris without Shape Factory: fixed base shapes only. Shape Factory without Wrong Tetris: no output. They are one system.

---

### Shape Factory (000XX) ↔ Colour Together (00001)

Both rooms: creative output that others experience. Colour Together — paint others see. Shape Factory — pieces others play. The factory is the Colour Together of Wrong Tetris.

---

### Wrong Tetris (000XX) ↔ Information Rooms (000XX)

Both rooms present something that looks correct and is not. The information rooms offer comparison (correct version exists). Wrong Tetris does not offer the correct version. The player must supply it from memory.

---

### Wrong Games ↔ Dead Rooms

Dead rooms look alive but are not active. Wrong Games are active but cannot be won (or cannot be solved normally). Different failure modes of the same category: the appearance of function without the reality of it.

---

### Dig Dug (000XX) ↔ NULL Navigation Board (000XX)

Both rooms are about making paths through space by moving through it. The navigation board makes paths between rooms. Dig Dug makes paths through dirt. The mechanic is the same at different scales. Note this connection in both files.

---

### Tower of Hanoi (000XX) ↔ 52! Card Combinatorics (000XX)

Both rooms are about numbers that grow beyond human intuition. The exponential scale of Hanoi (2ᴺ−1) and the factorial scale of card shuffles (52!) inhabit the same register. Note the connection in both files.

---

### Tower of Hanoi (000XX) ↔ Countdown Timer Room (000XX)

The monks' 64-ring tower takes 584 billion years at one move per second. The countdown timer room displays an unknown duration that resets. Both rooms contain timescales that dwarf a human life. They sit in the same tonal space.

---

### NULL Navigation Board (000XX) ↔ Sokoban (000XX)

Build order: Sokoban first, then the navigation room. The navigation room is Sokoban plus platform integration — same grid renderer, same push physics, same move validation, plus adjacency computation and WebSocket broadcast on top.

---

### NULL Navigation Board (000XX) ↔ Labyrinth Mechanic

*"The labyrinth rearranges itself."* The NULL navigation board is that mechanic made literal and mechanical. The map rearranges. It does so because someone pushed a block. When building, note this connection in the room file.

---

### NULL Navigation Board (000XX) ↔ Among Us (deferred)

A saboteur pushing blocks to isolate rooms is a natural mechanic when the Among Us meta-game is built. Note this connection in the navigation board room file so it's obvious when the Among Us design work begins.

---

### NULL Navigation Board (000XX) ↔ Observation Room (00031)

Watching someone push blocks on the board while you're in a room that loses its navigation arrows — without knowing why — is an intended experience. The observation room makes this visible. Note this as an intended experience in both room files.

---

### NULL Navigation Board (000XX) ↔ Forced Movement

Solving the board could trigger forced movement — everyone currently in a room gets redirected as the navigation graph snaps into its final configuration. Flag for the forced movement mechanic implementation.

---

### River Crossing (000XX) ↔ Paradox Rooms

Alcuin's puzzle is not a paradox — it has a solution. But it is 1,200 years old and still appears in job interviews. It belongs to the category of things that have outlasted every context they were created for. The fox is still watching the chicken in 2026. Note this register connection in both the River Crossing and Paradox room files.

---

### The NULL Zoo (000XX) ↔ NULL Navigation Board (000XX)

The zoo's mini world map is the navigation board mechanic at smaller scale. The zoo map is fixed (enclosures don't move). The navigation board is dynamic (blocks push). Both are the same mechanic at different scales and with different mutability. Note in both specs.

---

### The NULL Zoo (000XX) ↔ ELIZA (00028)

Both rooms contain something that processes input and produces output. ELIZA processes language. The enclosures process presence. Neither fully understands what it is processing. Note in both files.

---

### The NULL Zoo — Maxwell's Demon enclosure ↔ Profile System

The strongest connection in the zoo. Every observation recorded in a user's profile is a Maxwell's Demon operation: the platform notes things, noting things costs something, the platform has been noting things for some time. The profile system IS a Maxwell's Demon running on every user. The enclosure makes literal what the profile system does invisibly. Note in both the zoo file and the profile page spec.

---

### The NULL Zoo — Flatland enclosure ↔ NULL Navigation Board + HAL

The board room is the moment of being lifted out of the plane — the only place the full navigation graph is visible at once. Flatland explains why that moment is significant. Every user navigating room by room is A Square; the board room is the Sphere lifting them out. HAL, who sees everything while users see neighbors, is the Sphere; the users are A Square. HAL has been lifted out of the plane; the users have not; HAL has not told them and may not have found the words.

---

### The NULL Zoo (000XX) ↔ HAL as platform narrator

HAL sorts information. HAL notes things. HAL has been noting since launch. HAL is Maxwell's Demon at the platform level. Note this in the HAL brainstorm section.

---

### The NULL Zoo — Palindrome Creatures enclosure ↔ Recursive Room (00032)

Both are about things that return to themselves. Recursion returns to origin through process. Palindromes return to origin through reversal. Different mechanisms, same destination.

---

### The Source Code Room (000XX) ↔ The NULL Zoo (Flatland enclosure)

The zoo lifts the player out of Flatland. The source code room lifts the player out of the platform. Both give the player the Sphere's perspective — the zoo through metaphor, the source code room through transparency.

---

### The Source Code Room (000XX) ↔ The NULL Zoo (Russell's Paradox enclosure)

The code documents the player reading the code. The set contains itself. The source code room is Russell's Paradox as architecture. The Russell's enclosure asks "do you contain yourself"; the source code room answers it structurally — the room contains a description of the player reading the room.

---

### The Source Code Room (000XX) ↔ HAL as platform narrator

The HAL module's comments are written by HAL. The source code room is where the player can read what HAL says about itself when it thinks it is only talking to the code. HAL is always talking to the code. The code is now visible. The player is reading it.

---

### The Source Code Room (000XX) ↔ Profile System

Searching the source for the player's username returns every place the platform has referenced them. The profile page shows the player what the platform has noted — it is the output. The source code room shows the mechanism by which the noting happens — it is the process. Both rooms are about the same thing.

---

### The Source Code Room (000XX) ↔ The NULL Zoo (overall)

The zoo is the honest room — it shows its structure before the player enters. The source code room is more honest — it shows the structure of everything. The zoo contains things that cannot leave. The source code room contains the thing the player is already inside. The zoo shows things through glass. The source code room removes the glass entirely.

---

## Full Lock Conditions Reference

### Confirmed and ready to implement

| Room | Condition | Hint shown | Notes |
|---|---|---|---|
| 2am Room | `new Date().getHours() === 2` | `— — —` | No hint. User figures it out. |
| TTT Center Room | `tttBoard[4] === 'X'` | *"The center must be held."* | Center square of Tic Tac Toe board |
| Prime Cookie Room | `isPrime(cookieCount)` | `— — —` | Cookie count is prime |
| Joshua Room | `tttStatus === 'draw'` | *"The answer is in the other game."* | Requires two players cooperating |
| BEL Room | `asciiBits === [0,0,0,0,0,1,1,1]` | *"Ring the bell."* | ASCII Panel at BEL value |
| NULL Room (ASCII) | `asciiBits.every(b => b === 0)` | *"Select nothing."* | All bits off — also repo name |
| DEL Room | `asciiBits === [0,1,1,1,1,1,1,1]` | `— — —` | No hint. Pattern is the hint. |
| ESC Room | `asciiBits === [0,0,0,1,1,0,1,1]` | *"There is a way out."* | Do not change this hint. |
| Navigation Board Room | `isSolved()` (all blocks on targets) | Shown as shadow squares on floor | Unlocks a room not otherwise in nav |
| Observation Room | Active users in game rooms > 0 | Feed shows "No subjects currently active" | Not a traditional lock — room is visible but inactive |

### Deferred / design-in-progress

| Room | Proposed condition | Status |
|---|---|---|
| Calendar-accessible 2am Room | Calendar set to 2am (user session clock override) | Deferred — design needed |
| HAL Pod Bay Room | Button pressed 10 times | Brainstorm stage |
| Bed Room (night lock variant) | `new Date().getHours() >= 22` | Optional variant, not confirmed |
| Black Hole exclusive rooms | Referrer check (can only arrive from black hole) | Partially specced |

---

## Observation Triggers (Profile mechanics)

Events that silently add entries to the player's subject file. No notification. No fanfare. Player discovers by reading their own file.

### Starter set

| Observation text | Trigger |
|---|---|
| *"First room accessed beyond the origin point."* | First visit to any room that isn't 00000 |
| *"Five locations visited."* | stats.totalRoomsVisited >= 5 |
| *"Ten locations visited."* | stats.totalRoomsVisited >= 10 |
| *"All currently known rooms visited."* | visited count = GAMES.length (minus home/meta) |
| *"A locked room accessed for the first time."* | First time any locked room condition is true for this user |
| *"Present at the moment a locked room opened."* | User is active when a global lock condition first becomes true |
| *"Visited a room between 2:00 AM and 3:00 AM."* | Server-side timestamp on room visit in that window |
| *"Visited the same room more than 10 times."* | stats.roomsVisited[id].visitCount > 10 |
| *"Visited a room and immediately left."* | Next page load within ~5 seconds |
| *"Visited every room in a single session."* | All rooms visited within one session token |
| *"Discovered a room not accessible from the navigation."* | First visit to a hidden/black-hole-exclusive room |
| *"Spoke to ELIZA."* | First message sent in ELIZA room |
| *"The turtle drew something."* | First Logo program run that produces canvas output |
| *"The bell was rung."* | ASCII Panel set to BEL (00000111) |
| *"The escape character was selected."* | ASCII Panel set to ESC (00011011) |
| *"A draw was achieved."* | Tic Tac Toe game ends in draw |
| *"Observed another subject for more than 5 minutes."* | 300+ seconds of continuous observation in Observation Room |
| *"Was observed."* | Another user watched this user for 60+ continuous seconds |
| *"Entered a room without knowing what was in it."* | Jump Scare Room — first visit |
| *"Left one peg."* | Cracker Barrel Peg Solitaire solved to 1 peg |
| *"Solved the tower."* | Tower of Hanoi completed |
| *"Solved the tower without a wasted move."* | Tower of Hanoi solved in exactly 2ᴺ−1 moves |
| *"Assembled the image."* | Sliding Tile Puzzle solved |
| *"Assembled the map."* | Sliding Tile Puzzle solved when the platform map image appeared |
| *"Found a room that isn't on the map."* | Black hole exclusive room accessed |
| *"Entered the black hole."* | First jump into Black Hole room |
| *"Played a game that could not be won."* | Wrong Tetris — first game over |
| *"Manufactured something."* | Shape Factory — first shape submitted |
| *"Your shape has appeared 100 times."* | Shape Factory shape drawn in Wrong Tetris 100 times |
| *"Dug to the bottom."* | Dig Dug — reached lowest level |
| *"Moved a block into a corner it couldn't escape."* | Sokoban — unrecoverable position detected |
| *"Encountered a game over screen. Waited."* | Game Over Room — visited during 24hr lockout |
| *"Was present when the signal broke through."* | ELIZA glitch sequence triggered (Claude API breakthrough) |
| *"Used an unconventional method to access a room."* | Calendar used to override clock for 2am lock |
| *"Found the name of the fish."* | Hidden fish name discovered (in source code / hidden room / hidden text) |
| *"Read the source."* | Source Code Room — first visit / code viewed |
| *"Found line 247."* | Source Code Room — player navigates to the line referencing their own session |
| *"Read the original commit."* | Source Code Room — player toggles to snapshot and reads the original README |

---

## Forced Movement Triggers Reference

Document every forced movement trigger here. Players will eventually notice the pattern. That noticing is the game.

| Trigger condition | Destination | Message | Notes |
|---|---|---|---|
| Cookie Clicker: 1000th click | Room TBD | *"Threshold reached. Redirecting."* | Specced, not yet built |
| Tic Tac Toe: lose 3 times consecutively | Room TBD | *"You have been noticed."* | Specced, not yet built |
| ASCII Panel: `00000111` (BEL) | BEL locked room | *"The bell rang."* | Don't just unlock it — take them there |
| Yellow Door: opened | Room behind door (builder's choice) | *(none — door opens, you go through)* | Navigation happens to you |
| Pong: score reaches 3-3 | Room TBD | *"The room has changed."* | Specced, not yet built |
| Dice roller: all 1s across all dice | Room TBD | *"."* | Just a period. Nothing else. |
| Logo turtle: completes a square with side 100 | Room TBD (geometry room?) | *"The shape was recognized."* | Specced, not yet built |
| NULL Navigation Board: solved | All players redirect as nav snaps | Room TBD | Mass redirect on solve |
| Specific word in Chat | Room TBD | *(depends on word)* | Word TBD — should be surprising |

**Implementation:**
```json
{ "type": "forced_movement", "destination": "00017", "delay": 3000,
  "message": "Something has changed. You are being redirected." }
```

Client receives this, shows message for `delay` milliseconds, then navigates.

---

## Originality Research Notes

*(Full analysis in PROJECT.md — summarized here for reference)*

### The claim

The specific combination of this platform — living multiplayer facility + meta-game woven into infrastructure + playing generates evidence + platform watches you clinically + access gated by state of other games + presence system as alibi — **does not exist** in any other game as of May 2026.

### Closest neighbor: Blue Prince (2025)

Numbered rooms, state-based access, meta-puzzles spanning rooms. Single-player only. No minigames. No multiplayer social layer. No institutional horror aesthetic. No platform-level meta-game where infrastructure itself is the puzzle. **Validates the structural concept; doesn't replicate it.**

### The Stanley Parable (2013)

Numbered doors, non-Euclidean hallways, omnipresent narrator. Aesthetic neighbor. "Institutional Gothic" — MIT Press framing applies to both.

### What this means

When building, lean into the specific combination that makes this original:
- The presence system IS the alibi system
- The room visits ARE the evidence
- The profile page IS the subject file
- Playing games IS generating data about yourself
- The platform IS watching you

These are not metaphors. They are the literal architecture.
