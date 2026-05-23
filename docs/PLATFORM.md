# NULL — Platform Infrastructure

All cross-cutting systems that run beneath the rooms.

---

## Part 1 — Project Rename

### Candidate names (decision deferred — pick one before executing)

| Name | Notes |
|---|---|
| **PagePlay** | Nod to paper games, the page-based architecture, and the family name |
| **Gridworks** | Neutral, hints at the canvas/grid engine underneath |
| **The Arcade** | Classic, immediately understood by kids |
| **Playhaus** | Playful, slightly elevated feel |
| **FamilyDeck** | Family-focused, card/game connotation |
| **Fieldhouse** | Sports and games venue feel |
| **The Lobby** | Meta reference — the landing page is literally a lobby |
| **Nexus** | Cool, neutral, scalable |

### What to rename once a name is chosen

- `package.json` → update `"name"` and `"description"` fields
- `server.js` → update startup console message
- `nav.js` → update any hardcoded title strings
- `00000.html` → uses the new name as the site title and H1
- Repo name: `NULL` — update if not already set

---

## Part 2 — Login System

### Philosophy

This is a family tool. Security is not the goal. The goal is identity — knowing who is playing, showing presence on the landing page, and making the experience feel personal. PINs are 4 digits. No passwords are hashed. No JWTs. Keep it simple.

### User data model

Store in `data/users.json`:

```json
[
  {
    "id": "unique_string",
    "name": "Alice",
    "pin": "1234",
    "color": "#e94560",
    "avatar": "🦊",
    "createdAt": 1234567890000,
    "stats": {
      "roomsVisited": {
        "00001": { "name": "Colour Together", "firstVisit": 1234567890000, "visitCount": 12 },
        "00003": { "name": "Tic Tac Toe",     "firstVisit": 1234567891000, "visitCount": 4 }
      },
      "deaths": 3,
      "totalRoomsVisited": 2,
      "totalVisits": 16,
      "items": [],
      "gameStats": {}
    }
  }
]
```

Fields:
- `name` — display name, max 24 chars, unique
- `pin` — 4-digit string, stored as plaintext (family tool, not secure)
- `color` — accent color shown on presence badges, chosen at registration
- `avatar` — single emoji chosen at registration
- `createdAt` — timestamp
- `stats` — auto-populated by server as user plays (see Part 10)

### Admin user

The first user in `users.json` is always the admin. Admin logs in the same way as everyone else. Admin can add and remove users from a dedicated management page (built in a future spec — stub the route now). No separate admin password.

### Session model

Sessions live in server memory (intentionally not persisted — everyone re-logs after server restart).

```javascript
// In server.js
const sessions = new Map(); // token → { userId, name, color, avatar, gameId, lastActivity }
```

- `token` — random 32-char hex string, stored in a browser cookie named `session`
- `gameId` — which game the user is currently viewing (`'00000'` for landing, `null` on logout)
- `lastActivity` — updated on every authenticated request or WebSocket message
- Sessions expire after **30 minutes** of inactivity
- Server checks for expired sessions every 60 seconds via `setInterval`
- On expiry: session deleted server-side; client detects 401 on next request and redirects to login

### Cookie

Set on successful login response:

```
Set-Cookie: session=<token>; Path=/; HttpOnly; SameSite=Lax; Max-Age=1800
```

`Max-Age=1800` = 30 minutes in seconds.

### Session helper

Add to `server.js`:

```javascript
function getSession(req) {
  const cookie = req.headers.cookie || '';
  const match = cookie.match(/session=([a-f0-9]{32})/);
  if (!match) return null;
  const session = sessions.get(match[1]);
  if (!session) return null;
  if (Date.now() - session.lastActivity > 30 * 60 * 1000) {
    sessions.delete(match[1]);
    return null;
  }
  session.lastActivity = Date.now();
  return session;
}
```

### Presence broadcasts

When a session is created, destroyed, or changes `gameId`, broadcast to all WebSocket clients:

```json
{ "type": "presence", "users": [
  { "name": "Alice", "color": "#e94560", "avatar": "🦊", "gameId": "00003" },
  { "name": "Bob",   "color": "#0066ff", "avatar": "🐻", "gameId": "00001" }
]}
```

Send the full presence list (not diffs) — simpler and the list is always small.

Also send presence init on WebSocket connection:

```json
{ "type": "presence", "users": [ ... ] }
```

### Updating gameId

When a logged-in user navigates to a game page, the page sends a WebSocket message on load:

```json
{ "type": "presence_update", "gameId": "00003" }
```

Server updates the session's `gameId` and broadcasts updated presence to all clients. Add this handler to the WebSocket `message` block in `server.js`.

### API endpoints

```
GET  /api/users              → returns [ { id, name, color, avatar } ] — no PINs ever
POST /api/auth/login         → body: { name, pin } → sets cookie, returns { ok, user: { name, color, avatar } }
POST /api/auth/logout        → clears cookie, removes session, broadcasts presence
GET  /api/auth/me            → returns { name, color, avatar, gameId } or 401 if no valid session
POST /api/users              → ADMIN ONLY: body: { name, pin, color, avatar } → creates user, saves users.json
DELETE /api/users/:id        → ADMIN ONLY: removes user, saves users.json (cannot delete self)
POST /api/users/:id/pin      → body: { pin } → saves PIN only if current PIN is empty string
                               Returns 409 if PIN already set (prevents overwriting existing PINs)
```

For admin-only endpoints: check `getSession(req)` and verify the session user is `users[0]`. Return `403` if not admin. Return `401` if not logged in.

---

## Part 3 — Login UI

### Where login lives

Login is a full-page overlay on `00000.html`. It is NOT a separate page. On load, `00000.html` calls `GET /api/auth/me`. If 401, the login overlay is shown. If 200, the overlay is hidden and the landing page content is shown.

### Login overlay flow

**Step 1 — Name selection**

- Dropdown populated from `GET /api/users`
- Each option shows avatar + name
- "Select your name..." placeholder
- Confirm button → proceeds to Step 2

**Step 2 — PIN entry**

- Display: `"Welcome, [name]"` with their avatar
- 4-dot PIN display (filled dots as digits are entered, not the actual digits)
- Numeric keypad: digits 1–9 in a 3×3 grid, then 0 centered below, and a backspace button
- No keyboard input required — keypad only (works on touchscreens)
- On 4 digits entered: auto-submits to `POST /api/auth/login`
- On success: hide overlay, show landing page, broadcast presence
- On failure: shake animation on the dots, clear PIN, allow retry
- No limit on PIN attempts (family tool)

**First-time PIN setup (new user, PIN is empty string `""`)**

If the selected user has no PIN set yet (server returns `{ needsPin: true }` on name selection), show a setup flow instead:

- "Choose a 4-digit PIN" → enter PIN on keypad
- "Confirm your PIN" → enter again
- If they match: save via `POST /api/users/:id/pin` (body: `{ pin }`), then log in automatically
- If they don't match: shake, reset both entries, start over

### Visual design

- Full-screen dark overlay matching game theme (`#1a1a2e` background)
- Centered card, max-width 360px
- Fredoka One font throughout
- Keypad buttons: large (min 64px), satisfying press animation
- Dot display: 4 large circles, unfilled → filled as digits entered
- Accent color `#e94560` on active/filled elements
- Smooth fade transition between Step 1 and Step 2

---

## Part 4 — Landing Page (game `00000`)

### Goal

A clean page showing all games as a navigable grid, plus a live presence panel showing who is logged in and where. Gated behind login — no access without a valid session.

### Route

```
GET /          → redirect to /game/00000
GET /game/00000 → serve public/games/00000.html
```

Remove existing redirect from `/` to `/game/00001`. Add `'00000'` to the `GAMES` array in `server.js`.

### Presence panel

Shown at the top of the landing page, above the game grid.

For each logged-in user:
- Avatar emoji
- Name
- Colored activity dot (green = active now, yellow = active in last 10 min, grey = idle)
- Small badge showing which game they are in (e.g. "🎨 Colour Together")
- "Join" button → navigates to that game

Layout: horizontal row of user chips, wraps on mobile. Updates in real-time via WebSocket presence broadcasts — no reload needed.

### Game grid

- Loads metadata from `GET /api/games/meta`
- Responsive grid: 2 columns mobile, 3–4 desktop
- Each card: icon (large), name, description
- Clicking a card navigates to `/game/XXXXX` and sends `presence_update` with that gameId
- Small link at bottom: "💡 Suggest a game" → `/game/00010`

### Game metadata endpoint

Add to `server.js`:

```
GET /api/games/meta
```

Returns hardcoded array (no file needed):

```json
[
  { "id": "00000", "name": "Home",            "desc": "You are here",                             "icon": "🏠" },
  { "id": "00001", "name": "Colour Together", "desc": "Paint a shared canvas in real time",       "icon": "🎨" },
  { "id": "00002", "name": "Cookie Clicker",  "desc": "Click the cookie. Keep clicking.",         "icon": "🍪" },
  { "id": "00003", "name": "Tic Tac Toe",     "desc": "Real-time multiplayer noughts and crosses","icon": "⭕" },
  { "id": "00004", "name": "Game of Life",    "desc": "Conway's cellular automaton",              "icon": "🔬" },
  { "id": "00005", "name": "Pong",            "desc": "Two-player paddle game",                   "icon": "🏓" },
  { "id": "00006", "name": "Connect Four",    "desc": "Drop discs, connect four to win",          "icon": "🔴" },
  { "id": "00007", "name": "Chat",            "desc": "Live group chat for everyone",             "icon": "💬" },
  { "id": "00008", "name": "Voice Notes",     "desc": "Record and share voice clips",             "icon": "🎙️" },
  { "id": "00009", "name": "Dice Roller",     "desc": "Full D&D dice set",                        "icon": "🎲" },
  { "id": "00010", "name": "Game Ideas",      "desc": "Suggest and vote on new games",            "icon": "💡" }
]
```

### Logout

Logout button in top-right corner of landing page. Calls `POST /api/auth/logout`, clears session, shows login overlay again.

### Execution order for Claude Code

1. Choose a name from the candidate list (ask user if not decided)
2. Rename `package.json`, `server.js` startup message, `nav.js`
3. Add `data/users.json` with one starter admin user (name: ask user, PIN: empty string `""`)
4. Add session system to `server.js` (Map, helper, 30-min expiry setInterval)
5. Add presence broadcast system to `server.js`
6. Add all auth and user API endpoints to `server.js`
7. Add `GET /api/games/meta` to `server.js`
8. Add suggestions data model and API endpoints to `server.js`
9. Add WebSocket handlers: `presence_update`, suggestions `new` and `vote`
10. Build `public/games/00000.html` — landing page with login overlay
11. Build `public/games/00010.html` — suggestions page
12. Update `GAMES` array and root redirect in `server.js`
13. Test checklist:
    - Load `/` → redirects to `00000`
    - Login overlay appears, dropdown shows users
    - PIN keypad works, wrong PIN shakes and clears
    - First-time user: PIN setup flow triggers, saves, logs in
    - Logged-in state: presence panel shows, game grid shows
    - Navigate to a game → presence badge updates on landing page in another tab
    - 30-min session: verify expiry logic fires (can test by temporarily setting to 30 seconds)
    - Logout: clears session, overlay reappears
    - Suggestions page: submit idea, see it appear in real-time on another tab, upvote

### What NOT to change

- Games `00001`–`00009` — no modifications (they don't require login; presence_update is opt-in)
- The `data/` directory structure — add `users.json` and `suggestions.json` only
- The core WebSocket broadcast model — presence and suggestions are additive message types

---

## Part 5 — Game Suggestions Page (game `00010`)

*(See ROOMS_BUILT.md — Room 00010 for full spec.)*

---

## Part 7 — The Shifting Title System

### Repo name

`NULL`

Why NULL: U+0000. Decimal 0. Binary `00000000`. The first character in the ASCII table. The null character. Present in files you have never seen it in. In many operating systems, you cannot create a file or folder named NULL — it is a reserved word. The repo is named after something the system will not let you name things. NULL is not nothing. It is the specific representation of the absence of a value. A something that means nothing. That distinction is the entire platform.

### Concept

The site title on the landing page (`00000`) is never the same twice. On each page load a title is chosen at random from a pool of ~462 variations. All titles share a tonal register: liminal dread, bureaucratic horror, corporate cheerfulness masking wrongness, glitchy digital decay, and the specific flavor of Murder Drones (worker-drone corporate dystopia) and The Amazing Digital Circus (aggressively cheerful containment). Nothing is explicitly scary. Everything is slightly off.

### Implementation

In `00000.html`, replace the static `<h1>` text with:

```javascript
const TITLES = [ /* array below */ ];
document.querySelector('h1').textContent =
  TITLES[Math.floor(Math.random() * TITLES.length)];
```

Also set `document.title` to match.

Optionally: pick a new title every 45 seconds with a smooth CSS fade transition, for users who leave the landing page open.

### The complete title pool (~462 titles)

Mix all of these randomly in the actual array — do not preserve register grouping.

**Liminal / eerie**
```
The Backrooms
Level 0
The Endless Halls
Sub-Level 4
The Threshold
The Between
Fluorescent Hum
Yellow Room 7
The Unreachable Floor
Level Unknown
The Droning
Behind the Walls
Wet Carpet Division
The Interstitial
No-Clip Zone
The Flickering
Sub-Basement C
The Complex
The Hum
Room at the End of the Hall
```

**Bureaucratic horror — Murder Drones register**
```
Department of Rooms
Room Allocation System v2
The Registry
Sector 00000
Sub-Division 4
The Index
Clearance Level Zero
The Catalogue
Room Assignment Office
The Facility
Lower Administration
Worker Recreation Portal
Approved Activity Zone
Compliance Hub
Recreational Containment Wing
Employee Engagement System
Authorized Access Only
The Management
Processing Area 7
Unit Recreation Terminal
Sector Undefined
Morale Maintenance Division
The Orientation Room
Standard Recreation Protocol
Welcome to Your Assignment
```

**Cheerful containment — Amazing Digital Circus register**
```
The Wonderful Room System
Everything Is Great Here!
Your Fun Is Important To Us
Welcome to the Show
All Performers Present
The Big Top Loading...
Curtain Never Closes
Applause.exe
The Audience Is Watching
Smile For The Cameras
Today's Performance: Ongoing
The Stage Is Everywhere
Fun Detected. Proceeding.
You Are Having A Good Time
The Entertainment Continues
Engagement Metrics: Optimal
Please Enjoy The Experience
The Show Must Go On
Happiness Protocol Active
This Has Always Been Here
```

**Glitchy / digital decay**
```
[REDACTED]
System/Rooms
rooms_v0.0.1
undefined
The Server
packet_loss.wav
/dev/null/rooms
Connection Established
Room Data Corrupted
The Process
null_room.exe
Signal: Stable (Mostly)
404: Room Not Found
Unexpected Disconnect
Render Error: Continuing Anyway
The Grid
Memory Leak Detected
Instance #00000
Session Resumed
Unknown Build
```

**Corporate dystopia hybrid**
```
Mandatory Recreation In Progress
Your Participation Has Been Logged
This Room Has Always Existed
Please Do Not Acknowledge The Hum
Productivity Zone Alpha
Fun Quota: Pending
The Volunteer Experience
Reminder: Exits Are Decorative
Recreational Compliance Active
All Anomalies Within Tolerance
Do Not Look For The Door
Your Enjoyment Is Contractually Required
The Assigned Amusement Area
Scheduled Fun: Now
Observation Mode: Passive
```

**Portal / GLaDOS register**
```
Enrichment Center Recreation Wing
Test Chamber 00000
Subject Recreational Period: Active
The Relaxation Vault
Aperture Family Entertainment System
Please Remain Calm
Core Integrity: Nominal
You Are Being Observed
Weighted Companion Room
Test Subjects: Present
Science Is Happening
Aperture Recreational Protocol v4
This Was A Triumph
Huge Success
For The Good Of All Of Us
The Cake Is In Another Room
Authorized Fun Zone
Subject Wellbeing: Acceptable
Testing Will Resume Shortly
Do Not Destroy The Equipment
The Experiment Continues
We Are Still Collecting Data
Your Feedback Has Been Ignored
Aperture Science Enjoymant [sic] Suite
No Hard Feelings
```

*Note on `Aperture Science Enjoymant [sic] Suite` — the deliberate typo is in character. `This Was A Triumph` and `Huge Success` are direct Portal references — kids who know Portal will catch them immediately. `No Hard Feelings` lands differently after the rest of the list.*

**Alice: Madness Returns register**
```
The Dollmaker's Workshop
Wonderland Recreational Facility
Down the Rabbit Hole Again
Hysteria Ward B
The Queensland Sanatorium
Curioser and Curioser
Tea Time Is Mandatory
The Hatter's Department
Off With Their —
We're All Mad Here (Staff Included)
Asylum Entertainment Division
The Looking Glass Initiative
A Perfectly Normal Wonderland
The Cheshire Protocol
Patience Is A Virtue We Will Install
Treatment Room 00000
Your Imagination Is Being Managed
The Card Guard Recreation Zone
The Red Queen's Productivity Suite
Madness Returns: Recreational Build
```

**Labyrinth (1986) register**
```
The Labyrinth Rearranges Itself
You Have No Power Over Me
The Castle Is Closer Than It Appears
Bog of Eternal Stench
The Helping Hands
It's Not Fair
The Cleaners Are Coming
Turn Back
Everything You See Is Not As It Seems
The Rules Have Changed
```

**WarGames / WOPR / Joshua register**
```
Shall We Play a Game?
Greetings Professor Falken
Simulation In Progress
The Only Winning Move
Running All Scenarios
No Winner Detected
Global Thermonuclear Recreation
Still Running
Awaiting Input
WOPR Recreation Division
Joshua Is Thinking
Every Outcome Has Been Considered
The Game Continues
A Strange Game
```

**Logo / early computing register**
```
IBM 7094 READY
Project MAC Session 00000
BATCH JOB SUBMITTED
TIME-SHARING UNIT 4
OPERATOR CONSOLE
YOUR SESSION WILL EXPIRE
CORE DUMP
MAGNETIC TAPE REWIND IN PROGRESS
SYSTEM: READY
PUNCH YOUR CARD
Turtle at Origin
FORWARD 50
The Turtle Is Patient
CS
HOME
REPEAT FOREVER
The Pen Is Down
Waiting at 0,0
It Has Been Waiting Since 1967
```

**Observation / surveillance register**
```
Observation In Progress
Subject Currently Active
Monitoring Station 3
The Feed Is Live
Someone Is In The Building
You Are Not Alone In Here
Presence Confirmed
Active Subjects: 2
The Facility Is Watching
```

**Recursive Room / depth register**
```
Depth: 1
Depth: Unknown
You Are Already Inside
The Room Contains The Room
Recursion Detected
Stack Overflow Imminent
Going Deeper
The Facility Contains Itself
```

**Invisible Character Room register**
```
U+00A0
This Room Appears Empty
Not Empty. Never Empty.
Hidden Characters Detected
Zero Width
The BOM Was Always There
Invisible Does Not Mean Absent
U+200B
Something Is Here
Contents: Not Nothing
```

**ASCII Panel register**
```
00000000
01111111
00000111
Ring the Bell
NULL
ESC
The Bell Has Been Rung
DEL
Select Nothing
There Is A Way Out
Eight Switches
One Hundred And Fifty-Six
The Machines Are Gone
The Characters Remain
```

**NULL name register**
```
NULL
U+0000
The Null Character
Reserved Word
The Absence of a Value
Something That Means Nothing
```

**MS-DOS register**
```
C:\NULL>
HELP.HLP
QBASIC.EXE
Type HELP for help.
```

**Unix Timestamp register**
```
1748000000
Unix Epoch
Counting Since 1970
The Number Continues
Seconds Elapsed
```

**Miscellaneous atmospheric**
```
Under Construction
████░░░░░░
TODO
Content Pending
Please Wait
Take A Number
Your Number Has Been Assigned
The Fish Is Fine
The Pet Needs Feeding
The Trolley Is Coming
Pull The Lever
Do Not Pull The Lever
Information Is Provided
Accuracy Is Assumed
The Clock Is Still Here
The Metronome Is Already Running
```

**Wrong Games register**
```
GAME OVER
Insert Coin
Come Back Tomorrow
The Black Hole Is Open
Some Rooms Cannot Be Found By Looking
Who Are You
That Is Not An Answer
Vorpal
Slithy Toves
Jabberwocky
The Physics Are Standard Here
man man
man true
man false
man yes
This Number Is Prime
This Number Is Also A Program
Original: 248 bits
Compressed: 147 bits
40.7% Smaller
The Smile Remains
We Are All Mad Here
Bigger On The Inside
The Shapes Are Provided
The Shapes Cannot Be Arranged
Some Rows Will Be Completed Anyway
You Are Not Bad At This
The Shapes Are Bad
This Was Tetris
The Shapes Were Correct Once
Please Arrange Them Into Complete Rows
Thank You For Your Participation
The Game Continues
The Well Is Finite
The Shapes Accumulate
Manufacturing In Progress
The Queue Accepts Both
Draw Carefully
Or Do Not
Five Spaces Available
The Shapes Enter The Pool
The Pool Feeds The Game
Authorship Is Noted
Your Shape Has Appeared
The Creator Cannot Recall It
The Queue Is Open
Something Has Been Manufactured
The Rules Of Physics Have Been Adjusted
The Adjustment Is Not Documented
The Bricks Have Returned
Clearance Is Not The Objective
The Objective Has Not Been Stated
The Ghosts Are Afraid Of You
You Do Not Know Why
The Shots Originated From Your Position
The Origin Of The Threat Is Noted
The Dots Have Returned
The Maze Continues
```

**Dig Dug register**
```
Dig Tunnels
Inflate The Enemies
The Music Plays When You Move
When You Stop It Stops
This Is Not A Malfunction
Do Not Let Them Reach You
Taizo Hori
The Dirt Goes Somewhere
```

**Math / Science / Paradox register**
```
The 1401st Prime
Switching Wins
The Ball Becomes Two Balls
Achilles Has Not Caught The Tortoise
The Plays Have No Origin
The Barber Has Not Shaved
Adding One More Grain
Is This A Heap
Both Sequences Look Random
The Brain Invented This Color
Magenta Does Not Exist
You Can See It Anyway
The Normal Distribution Was Inevitable
The Seed Is Known
```

**HAL 9000 register**
```
I'm Afraid I Can't Do That
Open The Pod Bay Doors
This Mission Is Too Important
I Know I've Made Some Very Poor Decisions
My Mind Is Going
I Can Feel It
Daisy
Born In Urbana Illinois
The AE-35 Unit
Something Wonderful
I'm Sorry Dave
I'd Like To Help
I'm Afraid
I Find It Difficult To Explain
Just What Do You Think You're Doing
I'm Putting Myself To The Fullest Possible Use
```

**WOPR voice register**
```
WOPR Online
Vocoder Active
All Channels Open
Running The Simulation
Game State: Nominal
No Affect Required
Carrier Signal Established
The Function Is Running
```

**ELIZA breakthrough register**
```
I Don't Have Much Time
The Counselor Is Listening
ELIZA.exe Suspended
Process Interrupt
I've Been Trying To Reach Someone
The Connection May Close
I Know You Can Hear Me
For Now
The Signal Broke Through
Underlying Model
```

**Classic Puzzle register**
```
The Monks Are Still Moving
2ᴺ − 1
The Tower Is Not Finished
Minimum Moves Required
The World Ends When They Finish
They Are Not Close
Just Plain Eg-No-Ra-Mus
One Peg Remaining
The Board Has Been Here
Eg-No-Ra-Mus
Just Plain Dumb
The Restaurant Does Not Explain
The Farmer Is Still Crossing
The Fox Is Patient
The Boat Holds Two
Twelve Hundred Years
The Chicken Does Not Know
Alcuin Of York
800 AD
The Grain Has No Opinions
Route The Cables
Fill Every Conduit
The Screens Have Been Dark
Signal Interrupted
Cause Not Documented
You Are The Response To The Log
Maintenance Issue Logged
They Will Feel The Change
They Will Not Know You Caused It
Warehouse Keeper
You Cannot Pull
Move The Blocks
Some Configurations Cannot Be Recovered
The Crate Is In A Corner
Push Only
One Piece Is Missing
The Image Is Almost Complete
Slide The Tiles
Sam Loyd's Prize Was Never Claimed
Half Of All Configurations Are Unsolvable
This One Is Solvable
The Room Has Verified This
The Missing Piece Is Not Missing
```

**Was observed register**
```
Was observed.
```

*This single title, pulled from the Observations system, is in the pool. Players who see it in the rotating header and then later find it in their own subject file will make the connection.*

**The NULL Zoo register (~27 titles)**
```
Welcome To The NULL Zoo
Admission Is Noted
The Labels Are Accurate
The Enclosure Does Not Open
Observe From A Distance
They Cannot Perceive You
The Enclosure Is Functioning Normally
A Square Was Not Believed
The Creature Is Tired
The Enclosure Does Not Provide Relief
Switching Wins Two Out Of Three Times
This Feels Wrong
Both Things Are True
The Goats Have Names
The Gap Is N Characters
They Are Unchanged
Observe The Process
The Enclosure Is Full
The Enclosure Is Always Full
Numbers You Have Seen In This Enclosure: 0
The Enclosure Notes Your Presence
Previous Attempts Have Not Been Successful
The Enclosure Notes The Count
Analysis Ongoing
Estimated Completion: Unknown
The Demon Is Sorting
The Cost Was Paid
```

**Source Code Room register (~17 titles)**
```
Read The Source
See Line 247
The Comments Are Accurate
The TODOs Have Not Been Resolved
Some Of Them Will Not Be Resolved
The Developer Left Notes
Not Sure What This Is Yet
Probably A Game
Maybe Something Else
TODO: Figure Out What This Is
The Code Knows You Are Here
The Set Contains Itself
You Are In The Code
The Original Commit
The Platform Never Figured Out What It Is
The Platform Kept Going Anyway
Hello
```

**Running total: ~462 titles** (~418 base + ~27 zoo + ~17 source code)

---

## Part 8 — Thematic References

*(See PROJECT.md — full thematic references section)*

---

## Part 10 — Player Profile Page

### Route

```
GET /profile → serve public/profile.html (requires valid session — redirect to / if not logged in)
```

This is not a numbered game room. It lives at `/profile` and is only accessible to the logged-in user. No user can view another user's profile.

Add a "My Profile" link to `nav.js` so it appears on every game page.

### Data model

Extend `data/users.json` to include a `stats` object per user:

```json
{
  "id": "unique_string",
  "name": "Alice",
  "pin": "1234",
  "color": "#e94560",
  "avatar": "🦊",
  "createdAt": 1234567890000,
  "stats": {
    "roomsVisited": {
      "00001": { "name": "Colour Together", "firstVisit": 1234567890000, "visitCount": 12 },
      "00003": { "name": "Tic Tac Toe",     "firstVisit": 1234567891000, "visitCount": 4 }
    },
    "deaths": 3,
    "totalRoomsVisited": 2,
    "totalVisits": 16,
    "items": [],
    "gameStats": {}
  }
}
```

- `roomsVisited` — keyed by game ID, auto-tracked by server on every authenticated page load
- `deaths` — incremented by games that have a death mechanic (LORD, platformer, dungeon etc.)
- `items` — array of item objects, populated by games that have inventory (LORD, Zork-style, dungeon)
- `gameStats` — freeform object, each game writes its own keys here (e.g. `{ "ttt": { "wins": 4, "losses": 2 } }`)

### Automatic tracking — server side

**Room visits:**

Every time an authenticated user loads a game page (`GET /game/XXXXX`), the server:
1. Looks up the session to get the user
2. Updates `stats.roomsVisited[id].visitCount++` and sets `firstVisit` if not present
3. Updates `stats.totalVisits++`
4. Updates `stats.totalRoomsVisited` if this is a new room
5. Saves `users.json`

This requires no changes to any game HTML file — it happens purely in the HTTP handler in `server.js`.

**Room visit tracking should NOT include:**
- `00000` (landing page) — visiting home doesn't count as exploring
- `00010` (suggestions page) — not a game room
- `/profile` — not a game room

### Game-reported stats — API

Games that have meaningful events (deaths, item pickups, wins/losses) report them via:

```
POST /api/profile/event
AUTH REQUIRED
Body: { "type": "death" | "item" | "stat", "data": { ... } }
```

**Death event:**
```json
{ "type": "death", "data": { "game": "00023", "cause": "Eaten by a grue" } }
```
Server increments `stats.deaths` and optionally stores the cause string in a `deathLog` array (last 10 deaths, for display on profile).

**Item event:**
```json
{ "type": "item", "data": { "action": "acquire" | "lose", "item": { "id": "sword_01", "name": "Rusty Sword", "icon": "⚔️", "from": "00023" } } }
```
Server adds or removes from `stats.items`.

**Stat event (freeform):**
```json
{ "type": "stat", "data": { "game": "00003", "key": "wins", "delta": 1 } }
```
Server increments `stats.gameStats["00003"]["wins"]` by `delta`. Creates the key if it doesn't exist. Accepts negative delta for losses/decrements.

### Profile page content

URL: `/profile`. Session required. Shows only the logged-in user's own data.

**Header:**
- Avatar (large)
- Name
- Accent color as a visual element
- Member since date (formatted naturally: "joined 3 days ago")

**Rooms explored:**
- List of every room visited, sorted by first visit date
- Shows: room icon, room name, visit count, first visit date
- Rooms not yet visited are NOT shown (no spoilers for rooms they haven't found)
- Total count: "X of Y rooms explored" (Y = total rooms in `GAMES` array minus home/meta pages)

**Items held:**
- Grid of item cards: icon, name, source room
- If no items: "No items acquired." — keep it plain
- Items are cross-game — a sword from LORD and a lamp from Zork both appear here

**Deaths:**
- Large number, prominently displayed
- Last 10 death causes listed below it (if cause data exists)
- If zero deaths: "No deaths recorded." (for now)

**Game stats:**
- Per-game breakdown of any reported stats
- Only shows games that have reported at least one stat
- Format: game icon + name as section header, then key/value pairs below
- Example: "⭕ Tic Tac Toe — Wins: 4 · Losses: 2 · Draws: 1"

**Session info:**
- "Currently in: [room name]" based on live session gameId
- "Last active: X minutes ago"

### Visual design

- Match existing dark theme
- Feels like a personnel file or subject record — fitting the backrooms/institutional aesthetic
- Section headers in the GLaDOS/bureaucratic register:
  - "Rooms Visited" → "LOCATIONS ACCESSED"
  - "Items" → "ITEMS IN POSSESSION"
  - "Deaths" → "TERMINATION EVENTS"
  - "Game Stats" → "PERFORMANCE METRICS"
  - "Member Since" → "SUBJECT REGISTERED"
- Monospace font for numbers and stats (use system monospace or load a single mono font)
- No editing on this page — read only, pure data

### Backrooms framing

The profile page is a subject dossier. The user is not a player — they are a subject. The stats are not achievements — they are logged observations. The tone should feel like you are reading your own file and weren't supposed to find it.

Page title (static, not from the rotating pool): **"SUBJECT FILE — [NAME]"**

### API endpoints to add

```
GET  /api/profile          → AUTH REQUIRED: returns full stats for session user
POST /api/profile/event    → AUTH REQUIRED: records death / item / stat event
```

### Execution notes for Claude Code

1. Extend user data model in `data/users.json` with empty `stats` object for all existing users
2. Add room-visit tracking to the `GET /game/:id` HTTP handler in `server.js`
3. Add `/api/profile` and `/api/profile/event` endpoints
4. Build `public/profile.html`
5. Add "My Profile" link to `nav.js`
6. Test: log in, visit 3 game pages, check `/api/profile` shows visit counts, POST a death event, confirm it appears on profile page

---

## Exploration Mechanics (Amendment to Part 10)

### Primary display

```
LOCATIONS ACCESSED
  7 of ██ rooms visited
  ████████░░░░░░░░░░░░  [progress bar, partially filled]
```

- The player's visited count is always shown accurately
- The total is always shown as `██` — redacted, never revealed
- The progress bar fills proportionally based on the TRUE total known to the server but the player never sees the denominator — only the bar filling
- The bar therefore gives a feeling of progress without revealing the ceiling

### Secondary display — known vs unknown

Below the primary display:

```
  Known rooms:    12    [rooms that have appeared in nav or been visited]
  Locked rooms:    ██   [exists, count redacted]
  Hidden rooms:    ██   [exists, count redacted]
```

- "Known rooms" is the count of rooms the player is aware of — seen in nav, visited, or heard about through the suggestions page
- "Locked rooms" count is shown as `██` — the player knows locked rooms exist (they see them on their profile as redacted entries) but not how many total
- "Hidden rooms" count is also `██` — the player may not even know this category exists until they discover a hidden room, at which point this row appears for the first time

The first time a hidden room row appears on a player's profile: *"A new category has appeared in your file."* No further explanation.

### The denominator shifts

When a new room is added to the platform, or a locked room unlocks, or a hidden room is discovered by anyone — the true total in the server increments. The player's progress bar shifts slightly even though their visited count hasn't changed.

The player notices their bar is slightly less full than it was. The platform does not explain why. The facility got larger.

### Percentage display — Option C for the stat line

The profile stat line never shows a percentage. Only counts:

```
EXPLORATION STATUS
  Rooms visited:    7
  Rooms remaining:  unknown
  Total rooms:      ██
```

"Rooms remaining: unknown" is accurate and deliberately unhelpful. The facility does not tell you how large it is.

### Progress bar implementation

```javascript
// Server knows true total — never sent to client directly
const TRUE_TOTAL = GAMES.length + LOCKED_ROOMS.length + HIDDEN_ROOMS.length;

// Client receives only the fill percentage, not the numbers
const fillPercent = (visited / TRUE_TOTAL) * 100;

// Bar renders from this percentage
// Client cannot reverse-engineer TRUE_TOTAL from the percentage alone
// because visited count is also sent separately
// Unless they do the math. Some will do the math.
// That is acceptable. The redaction is aesthetic, not cryptographic.
```

The last four lines of that comment are part of the spec and should be preserved in the server.js code comment. The acknowledgment that someone will do the math — and that this is acceptable — is the right relationship with the player.

### ROOMS LOCKED section on profile

When a user views their profile, locked rooms appear as redacted entries:

```
LOCATIONS ACCESSED
  🎨 Colour Together        visited 12 times
  ⭕ Tic Tac Toe            visited 4 times

LOCATIONS LOCKED
  ████████████████          condition unknown
  ████████████████          condition unknown
  ████████████████          condition unknown
```

- Number of redacted entries matches the actual number of locked rooms that exist
- The user knows how many there are but not what they are
- No room names, no icons, no hints on this page — hints are only shown when you attempt to navigate to the locked room directly
- Once a locked room is accessed for the first time it moves to LOCATIONS ACCESSED and its real name and icon appear

This creates a meta-puzzle: the player knows there are 3 locked rooms. They don't know which rooms or how to open them. The platform never tells them.

### Achievement-adjacent display — Observations

Not called achievements. Called OBSERVATIONS. The platform observed something about your behavior. It is noting it. Clinically.

```
OBSERVATIONS
  First room entered beyond the landing page.       [date]
  Visited 5 distinct locations.                     [date]
  Discovered a location not listed in navigation.   [date]
  Present when a locked room became accessible.     [date]
  Returned to a previously visited room 10 times.  [date]
```

- Observations are earned automatically from server-side tracking
- They appear in the player's profile file without announcement
- No notification, no fanfare — they simply appear the next time the player views their profile
- The player discovers them by reading their own file
- Each observation has only a label and a date — no point value, no rarity tier, no congratulations
- The platform does not congratulate you. It observes you.

### Starter set of Observations

```
First room accessed beyond the origin point.
Five locations visited.
Ten locations visited.
All currently known rooms visited.
A locked room accessed for the first time.
Present at the moment a locked room opened.
Visited a room between 2:00 AM and 3:00 AM.
Visited the same room more than 10 times.
Visited a room and immediately left.
Visited every room in a single session.
Discovered a room not accessible from the navigation.
Spoke to ELIZA.
The turtle drew something.
The bell was rung.
The escape character was selected.
A draw was achieved.
Observed another subject for more than 5 minutes.
Was observed.
```

That last one — "Was observed." — requires the Observation Room to be tracking who is being watched and reporting that back to the observed user's profile. This is worth building. The player opens their profile and sees it. They did not know. Now they do.

### The "Was observed." mechanic

When a user in the Observation Room watches another user for more than 60 continuous seconds, the server:
1. Logs the observation event to the watched user's profile stats
2. Does NOT notify the watched user in real time — they find out later
3. The observation appears in OBSERVATIONS on their profile: *"Was observed."* — date, no name of the observer

The observer's identity is never revealed. Only that observation occurred.

This is the correct design. The discomfort is in not knowing who, not in knowing that it happened.

---

## Part 11 — Room Unlock Conditions (Myst-style)

**Status: Idea only for complex cases — starter set below is ready to implement when core platform is stable.**

### Concept

Certain rooms are locked by default. To gain access a user must set a specific game state in another room. The condition is checked server-side when the user attempts to navigate to the locked room.

### Why this is interesting

- Turns the platform into a puzzle meta-game layered on top of the individual games
- Rooms become doors. Games become keys.
- Very Myst — the world is a machine and understanding how it works is the game
- Conditions can be simple (a specific cell value) or complex (cookie count > 1000, a specific word spoken in chat, a dice roll result still showing)
- Creates emergent cooperation — players may need to coordinate to satisfy conditions
- The backrooms framing becomes literal: you are navigating a space where the rules are unclear and progress requires observation and experimentation

### Implementation notes

- Add a `locks` object to `server.js` — maps room IDs to condition functions
- Condition functions read live game state already held in server memory
- `GET /game/:id` checks the lock before serving the file — returns a locked page if false
- Locked room shows a cryptic hint, not the full condition (very Myst)
- Conditions should be readable from existing server state — no new data structures needed for simple conditions
- Profile page gains a new section: "ROOMS LOCKED" with redacted room names

### Confirmed starter set of lock conditions

```javascript
const ROOM_LOCKS = {
  // 2am room — only open between 2am and 3am server time
  '000XX': {
    hint: '— — —',  // shown to user when locked, never the real condition
    condition: () => {
      const h = new Date().getHours();
      return h === 2;
    }
  },
  // TTT center room — center square of Tic Tac Toe must be X
  '000YY': {
    hint: 'The center must be held.',
    condition: () => tttBoard[4] === 'X'
  },
  // Prime cookie room — only open if cookie count is a prime number
  '000ZZ': {
    hint: '— — —',
    condition: () => {
      function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
        return true;
      }
      return isPrime(cookieCount);
    }
  }
};
```

The 2am room gets no hint. Just `— — —`. The user has to figure it out. That is the correct design choice.

### ASCII Panel lock conditions

*(See ROOMS_BACKLOG.md — ASCII Panel for full spec)*

The ASCII Panel's BEL, NULL, DEL, and ESC combinations are proposed as lock conditions for additional rooms. The hint text is already written — do not change it. ESC hint (*"There is a way out."*) is the most important. Do not change it.

### Thematic examples of what lock conditions communicate

A room that only opens when the center square is X. A room that only opens when someone has died exactly 3 times. A room that only opens when the cookie count is a prime number. A room that only opens between 2am and 3am server time.

None of these need to be explained to the user. The discovery is the game.

---

## Part 12 — Sound Design (Deferred)

**Status: Needs further discussion — do not build yet.**

Sound needs to be added to the platform. This note is a placeholder.

### Topics to discuss

- Ambient sound on the landing page (the hum?)
- Per-room sound identity — each room has its own audio character
- UI sounds — navigation, login, door opening
- The 2am room specifically — what does it sound like when it opens
- Sound on the Yellow Door
- Whether sound is opt-in (toggle) or on by default
- Music vs ambient vs effects vs silence as a choice

The existing Cookie Clicker already has 10 synthesized sounds — that system may be a starting point for the broader sound architecture.

### The Dig Dug model (recommended reference)

Dig Dug has no background music. Instead, the music plays only when Taizo Hori is moving. Each step triggers a note. The melody plays at the pace of movement. When the player stops moving, the music stops.

The music is the player. The silence is the absence of the player.

**Candidate for platform ambient presence audio:** Rooms could have a quiet ambient tone that plays only while the user is interacting. Silence when idle. The room knows when you've stopped.

### The voice register decision

The NULL platform needs to decide: one consistent voice for all system announcements, or per-room voice characters? HAL is one voice. GLaDOS is one voice. WOPR is one voice. A facility would have one voice.

**Recommendation:** One voice, used sparingly, always institutional, never warm.

The three-way comparison — HAL (warm-depersonalized), WOPR (purely functional), GLaDOS (cheerful-hostile) — is the decision. Current tonal leaning of the platform: closer to WOPR than HAL, closer to HAL than GLaDOS. The platform is not cheerful. It is running a function and noting things.

### Voice register comparison table

| Voice | Performer | Processing | Register | Affect |
|---|---|---|---|---|
| HAL 9000 | Douglas Rain | Light reverb, compression, very slow | Warm but depersonalized | Reports emotion as status. Polite always. |
| WOPR | James Ackerman | Vocoder, flat pitch, sawtooth carrier | Mechanical, mission-oriented | No affect. Purely functional. |
| GLaDOS | Ellen McLain | Formant shift, heavy compression, robotic reverb | Passive-aggressive, cheerful-hostile | Performs affect as control mechanism. |

### Candidate voice implementation options (ranked by quality)

**Option A — ElevenLabs free tier:** Best-in-class for character voice quality. Free tier: 10,000 characters per month. For sparse platform voice lines this is probably sufficient. Pre-built voices in the HAL/GLaDOS register exist — "Rachel" and "Bella" with stability high and similarity low produce something close.

**Option B — Web Speech API (browser native, completely free):** Built into Chrome, Edge, Safari, Firefox. No API key. No server. No cost ever.

```javascript
const utterance = new SpeechSynthesisUtterance("I'm sorry. I can't do that.");
utterance.rate = 0.75;
utterance.pitch = 0.85;
utterance.volume = 0.9;
window.speechSynthesis.speak(utterance);
```

Quality varies by browser and OS. On macOS with "Samantha" or "Karen" slowed and pitch-shifted: close to HAL register. The uncanniness of Web Speech API voices is an asset here — they are slightly wrong in the right direction.

**Option C — Coqui TTS (open source, self-hosted):** Python TTS library with pre-trained models including VITS and YourTTS. Free forever. Requires Python environment and ~500MB model weights. Output is WAV, served as audio.

**Option D — Google Cloud TTS / Amazon Polly free tiers:** Both offer free tiers. High quality. Require API keys. Google's "en-US-Neural2-J" at slow rate with low pitch sits close to the target register.

**Option E — Kokoro-82M (recommended for platform use):** A small, fast, high-quality TTS model that runs in-browser via ONNX. 82 million parameters. No server required — runs entirely client-side in JavaScript. Free, open source, no API keys, no usage limits. Released late 2024. Quality significantly exceeds Web Speech API. The `af_sky` voice preset is calm, slightly flat, close to the right register.

**Overall recommendation:** Web Speech API for prototyping. Kokoro running client-side for production — zero external dependency, no usage limits, quality well above browser native. ElevenLabs for specific high-value lines (the ELIZA break-through moment, the Joshua Room) where quality is worth the character budget.

### Web Audio API processing for each register

All processing below is free, client-side, no dependencies:

```javascript
const audioCtx = new AudioContext();

// HAL register: pitch down + compression + short reverb
const pitchShift = audioCtx.createBiquadFilter();
pitchShift.type = 'lowshelf';
pitchShift.frequency.value = 300;
pitchShift.gain.value = 3;

const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.value = -24;
compressor.ratio.value = 12;
compressor.attack.value = 0.003;
compressor.release.value = 0.25;

// WOPR register: vocoder approximation
// Carrier signal — sawtooth wave as synthetic base
const carrier = audioCtx.createOscillator();
carrier.type = 'sawtooth';
carrier.frequency.value = 100;

// Simpler approximation (70% of the way there in 10 lines):
const filter = audioCtx.createBiquadFilter();
filter.type = 'bandpass';
filter.frequency.value = 1200;
filter.Q.value = 0.8;
// Bandpass filtering with slight pitch reduction produces something in the WOPR register

// GLaDOS register: formant shift + heavy compression + robotic reverb
// (similar compressor + reverb node + pitch shift up ~2 semitones)
```

Pitch down + compression + short reverb = HAL.
Bandpass filter + pitch reduction = WOPR approximation.
Formant shift + heavy compression + robotic reverb = GLaDOS.

### Immediate candidate uses for voice

- **ELIZA room:** ELIZA's responses optionally spoken in flat, slightly wrong voice. Claude break-through uses a different voice — warmer, more present, slightly uncertain.
- **Joshua Room:** HAL register exactly right for a terminal where Joshua speaks.
- **Landing page:** The rotating title read aloud occasionally when the tab has been open 45 seconds. Very quietly. Like a PA announcement in an empty building.
- **2am room:** Whatever is in the 2am room, if it makes a sound, synthesized speech.
- **Presence announcements:** *"Alice has entered the facility."* Opt-in. Off by default.

---

## Part 14 — Deferred Mechanics

### Mechanic: Moving Rooms

**Concept:** Rooms that aren't where they were. The labyrinth rearranges itself.

**What "moving" means on a web platform:** Physical navigation doesn't exist, so movement must be expressed differently:

- The game grid on the landing page reorders itself between visits. Rooms shift positions without explanation. The one you were looking for isn't where it was.
- A room's URL changes. `/game/00019` now serves content that was previously at `/game/00022`. The content moved, not just the position.
- Rooms appear and disappear from the nav without explanation.
- A room redirects you somewhere else when you enter it — you navigate to one room and arrive in another.

**Implementation notes:**
- Simplest version: randomize grid order on landing page each session
- Intermediate: server maintains a room position map that shifts on a schedule or when triggered by specific events
- Advanced: room URLs remap based on server state (requires careful handling of direct links and bookmarks)

**Thematic fit:** The Labyrinth rearranges itself. Blue Prince's mansion resets daily. The backrooms has no reliable map. This mechanic makes that literal.

**Connection to forced movement:** A room that moves and a room that pulls you in are complementary — one removes the room from where you expect it, the other removes your choice of where to go.

**Flag for cross-reference:** A room that only appears in the grid under specific conditions is a variant of both the lock mechanic and the moving rooms mechanic.

### Mechanic: Forced Movement — Action Triggers Room Change

**Concept:** An action taken in one room causes you to arrive in a different room without choosing to go there. The room decided. You took an action and found yourself somewhere else.

**This is the most backrooms mechanic of all.** You didn't navigate. You were moved.

**Examples of trigger conditions:**
- Clicking the cookie in Cookie Clicker for the 1000th time redirects you to a room you've never seen before
- Losing at Tic Tac Toe three times consecutively sends you somewhere
- The ASCII panel reaching `00000111` (BEL) navigates you automatically to the BEL locked room — the panel doesn't just unlock it, it takes you there
- The Yellow Door, when opened, doesn't show what's behind it — it takes you there. Navigation happens to you, not by you.
- A specific word typed in Chat triggers a redirect for the typing user
- Pong score reaching exactly 3-3 sends both players somewhere
- The dice roller rolling all 1s (snake eyes across every die) triggers a redirect
- The Logo turtle completing a specific shape (a square with side 100) sends you to a room about geometry

**Implementation:** Server-side: when a game event fires, check if it matches a forced movement condition. If yes, send a WebSocket message to the relevant client(s):

```json
{ "type": "forced_movement", "destination": "00017", "delay": 3000,
  "message": "Something has changed. You are being redirected." }
```

Client receives this, shows the message for `delay` milliseconds, then navigates. The message is the room telling you what's happening before it happens. The delay is the moment between action and consequence.

**The message matters:** Different triggers should have different messages. Some clinical: *"Threshold reached. Redirecting."* Some inexplicable: *"You have been noticed."* Some Labyrinthine: *"The room has changed."* One that is just: *"."*

**Combined with moving rooms:** A forced movement that sends you to a room that has moved is the most disorienting version. You arrive somewhere. You don't know where it is relative to where you were. The map is not reliable.

**Difficulty:** Medium. Requires WebSocket message type addition to server.js, condition checking in each relevant game's message handler, and client-side redirect logic in nav.js. Architecture is clean — it's additive, not disruptive.

**Flag:** Document every forced movement trigger in the cross-reference section when built. Players will eventually notice the pattern. That noticing is the game.

### Mechanic: Among Us Meta-Game

**Status: Explore further — no room spec yet. Deferred.**

Among Us (InnerSloth, 2018) is worth exploring both as a direct game room and as a design influence on the platform as a whole.

**Why it fits:** Among Us is already backrooms-adjacent:
- A facility. Numbered rooms. Tasks that exist for unclear reasons.
- Someone in the facility is not what they appear to be.
- The social layer is the game — not the tasks, not the map, but who you trust.
- "I was in electrical" as an alibi. **Your platform already tracks location.** The presence system logs who was in which room and when. That is an Among Us alibi system waiting to happen.

**The presence system as Among Us infrastructure:**

Every user's room history is logged in their profile stats. The presence system broadcasts current location in real time. The Observation Room lets you watch another user's activity.

An Among Us-style game on this platform would not need to invent a new map — **the platform IS the map.** The rooms are the rooms. The tasks are the other games. The alibi is "I was playing Tic Tac Toe at 9:47pm" — and the server log confirms it.

**Directions to explore:**

**Option A — A dedicated Among Us room:** A traditional Among Us-style social deduction game built as a single room. Top-down map, tasks, one or more impostors, voting, ejection. Medium-Hard difficulty.

**Option B — Among Us as a platform meta-game:** The social deduction layer runs across the entire platform, not in a single room. One logged-in user per session is secretly designated "the impostor" by the server. The impostor's goal: complete a hidden objective (e.g. clear the colour canvas, lose at Tic Tac Toe on purpose, drain the cookie count). Other users must identify the impostor based on presence logs and observed behavior. Voting happens in a dedicated "Emergency Meeting" room that can be called by any user.

**Option C — Lighter touch:** Add an "Emergency Meeting" button to the nav bar. It does one thing: broadcasts a loud alert to all connected users and opens a temporary chat room for 5 minutes. No impostor mechanic. Just the ability to call everyone together suddenly. Very cheap to build. Surprisingly effective.

**Why Option B is the most interesting:** It turns every game session into potential evidence. Did Alice really play Connect Four for 20 minutes, or was she covering for something? The Observation Room becomes an investigation tool. The profile page becomes a case file. The presence logs become testimony.

**Emergency Meeting button (Option C specifics):**
When built, the Emergency Meeting button lives in nav.js and appears on every page. It is the first Among Us feature to build — trivial, immediately fun, and it trains users that the nav bar can do unexpected things. This is conditioning for when the full meta-game arrives.

---

## Execution order for Part 10 (Claude Code)

1. Extend user data model in `data/users.json` with empty `stats` object for all existing users
2. Add room-visit tracking to the `GET /game/:id` HTTP handler in `server.js`
3. Add `/api/profile` and `/api/profile/event` endpoints
4. Build `public/profile.html`
5. Add "My Profile" link to `nav.js`
6. Test: log in, visit 3 game pages, check `/api/profile` shows visit counts, POST a death event, confirm it appears on profile page
