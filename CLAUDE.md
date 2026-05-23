# NULL — CLAUDE.md

## What this is

NULL is a multiplayer web platform with ~52 "rooms," each a separate HTML page with its own mechanic. No framework. No build step. Raw Node.js HTTP + WebSocket (`ws` package), vanilla HTML/CSS/JS per room, JSON files for all persistence.

The platform has an institutional "backrooms facility" aesthetic. Rooms range from games to philosophical thought experiments to atmospheric dead ends.

---

## Running the server

```
node server.js
```

Runs on port 3000. `start_color_game.bat` and `stop_color_game.bat` are Windows batch wrappers.

---

## Project structure

```
server.js                        Single server file — all HTTP routes + WebSocket logic
data/
  matrix.json                    Navigation graph (see below)
  users.json                     All user records keyed by device UUID
public/
  games/
    00001/ … 00051/
      index.html                 The room
      data/                      Room-specific JSON (only some rooms have this)
      SPEC.md                    Room spec — what it is, how it works, nav, notes
    00000/index.html             Welcome / lobby screen
  shared/
    nav.js                       Navigation bar injected into every room
    matrix-nav.js                Matrix nav variant (up/down/left/right buttons)
  admin/index.html               Admin dashboard — users, room stats
  matrix/index.html              Visual matrix editor
docs/
  ROOMS_BUILT.md                 Human-readable list of all built rooms
  ROOMS_BACKLOG.md               Full specs for all unbuilt room ideas
  BACKLOG_INDEX.md               Quick-reference index of unbuilt ideas (scannable)
  PLATFORM.md                    Platform design document
  CROSS_REFS.md                  Cross-room connections and thematic notes
  INVENTORY.md                   Item/observation system design
```

---

## Adding a new room

1. **Create `public/games/XXXXX/index.html`** — the room HTML.

2. **Add to GAMES array** in `server.js` line 10:
   ```js
   const GAMES = ['00001', ..., 'XXXXX'];
   ```

3. **Add matrix connections** in `data/matrix.json`:
   ```json
   "XXXXX|00013": "right",
   "00013|XXXXX": "left"
   ```
   Key format: `"fromRoom|toRoom": "direction"`. Direction is the direction you travel FROM fromRoom.

4. **Add server-side logic** if the room needs WebSocket or API routes — see patterns below.

5. **Write `public/games/XXXXX/SPEC.md`** — use the standard format (see any existing SPEC.md).

---

## Navigation system

Every room's `<body>` needs two data attributes:
```html
<body data-game="00013" data-nav="matrix">
```

- `data-nav="matrix"` — up/down/left/right buttons, destinations from matrix.json
- `data-nav="arrows"` — simple ◀ ▶ buttons using the GAMES array order
- `data-nav="none"` — no nav injected

`nav.js` is loaded by every room and reads these attributes. `matrix-nav.js` handles the matrix variant.

**Nav-locking a room** (user cannot leave until condition met):
```css
.nav-locked #matrix-nav { display: none !important; }
```
```html
<body class="nav-locked" data-game="XXXXX" data-nav="matrix">
```
Remove the class via JS when the condition is satisfied.

---

## WebSocket messages

All WebSocket messages are JSON with a `game` field for routing:

```js
// Client sends:
ws.send(JSON.stringify({ game: 'plant', type: 'water' }));

// Server routes by game field, broadcasts back:
broadcast({ game: 'plant', type: 'state', growth: 45, wilted: false, ... });
```

**`broadcast(msg)`** — sends to all connected clients. Defined in server.js, sends to every `ws.clients` member whose `readyState === WebSocket.OPEN`.

For room-specific state sync, the pattern is: client connects → server sends current state immediately → client listens for subsequent broadcasts.

---

## Data persistence

All persistence is synchronous `fs.writeFileSync` to JSON files. No database.

**CRITICAL — Windows BOM issue:** Never use PowerShell `Set-Content` or `Out-File` to write JSON files — they write UTF-16 LE with BOM, which breaks `JSON.parse`. Use:
```powershell
[System.IO.File]::WriteAllText($path, $content, (New-Object System.Text.UTF8Encoding $false))
```
Or write from Node.js directly.

**Pattern for a new persistent data file:**
```js
const FOO_FILE = path.join(__dirname, 'public', 'games', 'XXXXX', 'data', 'foo.json');
let fooData = { count: 0 };
try { fooData = JSON.parse(fs.readFileSync(FOO_FILE, 'utf8')); } catch (e) {}
function saveFoo() { fs.writeFileSync(FOO_FILE, JSON.stringify(fooData)); }
```
Create the data dir at startup with `fs.mkdirSync(dir, { recursive: true })`.

---

## User / cookie system

Every visitor gets a UUID device cookie on first request (1-year expiry, set server-side). Cookie name: `device`.

`data/users.json` — keyed by device UUID. Fields:
- `firstSeen`, `lastSeen` — timestamps (ms)
- `visits` — total page loads
- `cookieClicks` — clicks in room 00002 (gate condition)
- `name` — designation from room 00051 (null until set)
- `aliases` — array of previous names
- `ip`, `browser`, `os`, `device`, `language` — from request headers
- `rooms` — array of room IDs visited

**Gate condition:** Users who haven't clicked the cookie (room 00002) are redirected to `/game/00000`. Room 00002 itself is exempt from this gate.

**Getting the current user in a room:**
```js
fetch('/api/user/me').then(r => r.json()).then(user => { ... });
```

---

## Key API endpoints

| Method | Path | Description |
|---|---|---|
| GET | `/api/user/me` | Current user record |
| POST | `/api/user/name` | Set designation; saves aliases; 24-char max |
| GET | `/api/users` | All users (admin) |
| GET | `/api/games` | GAMES array |
| GET | `/api/cookie` | Global cookie count |
| POST | `/api/cookie/click` | Increment cookie + user record |
| GET | `/api/ticket` | Current ticket state |
| POST | `/api/ticket/take` | Issue ticket to this user |
| GET | `/api/cards/state` | Current deck |
| POST | `/api/cards/shuffle` | Shuffle deck |
| GET/POST | `/api/recordings` | Voice notes (GET=list, POST=upload binary) |
| POST | `/api/snake/score` | Submit snake score |

---

## Admin + debug

- `/admin` — user dashboard: all cookies, names, rooms visited, browser info
- `/matrix` — visual matrix editor: add/remove/flip room connections

---

## Conventions

- Room numbers are zero-padded 5 digits: `00001`, `00013`, `00051`
- Each room is self-contained: one HTML file, inline `<style>`, inline `<script>`
- Shared fonts loaded from Google Fonts where needed (Fredoka One for old rooms, monospace for atmospheric rooms)
- Near-black background `#050508` is the facility aesthetic for atmospheric rooms
- Red accent `#e94560` is the platform's primary color
- SPEC.md files are under 60 lines; follow the format in any existing SPEC.md
- Do not write BOM into JSON files (see persistence section above)
