# NULL

> A multiplayer web platform with 77 rooms — each a separate experience with its own mechanic.

No framework. No build step. Raw Node.js HTTP + WebSocket, vanilla HTML/CSS/JS per room, JSON files for all persistence. The platform has an institutional "backrooms facility" aesthetic. Rooms range from games to philosophical thought experiments to atmospheric dead ends.

---

## Quick Start

```bash
npm install
node server.js
```

Runs on **http://localhost:3000**

---

## What It Is

NULL is a collection of browser-based rooms connected by a navigable grid. Each room is a self-contained HTML page. Players share a single real-time server state — draw on the same canvas, read the same chat, play the same game.

A device UUID cookie identifies each visitor. First-timers are gated at the lobby until they voluntarily click through room **00002**.

---

## Rooms (77 total)

| Room | Name | Type |
|------|------|------|
| 00000 | NULL Welcome Screen | Lobby |
| 00001 | Colour Together | Shared pixel canvas |
| 00002 | The Cookie Room | Consent gate |
| 00003 | Tic Tac Toe | Multiplayer game |
| 00004 | Game of Life | Conway's automaton |
| 00005 | Pong | Two-player paddle |
| 00006 | Connect Four | Drop-disc game |
| 00007 | Chat | Live group chat |
| 00008 | Voice Notes | Record & share audio |
| 00009 | Dice Roller | Full D&D dice set |
| 00010 | Game Suggestions | Community voting |
| 00011 | Ticket Dispenser | Incremental ticketing |
| 00014 | Card Counter | 52! shuffle counter |
| 00015 | Snake | Leaderboard snake |
| 00016–00077 | … | Games, puzzles, atmospheric rooms |

Full specs live in each room's `SPEC.md` and in [`docs/ROOMS_BUILT.md`](docs/ROOMS_BUILT.md).

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Server | Node.js (`http` module) |
| Real-time | `ws` (WebSocket) |
| Client | Vanilla HTML / CSS / JS |
| Persistence | JSON files (no database) |
| Dependencies | `ws` only |

---

## Project Structure

```
server.js                   All HTTP routes + WebSocket logic (~1,100 lines)
package.json
data/
  matrix.json               Navigation graph (room connections)
  users.json                All user records keyed by device UUID
public/
  games/
    00000/ … 00077/
      index.html            The room
      SPEC.md               Room spec
      data/                 Room-specific JSON (where needed)
  shared/
    nav.js                  Navigation bar injected into every room
    matrix-nav.js           Matrix nav variant (↑ ↓ ← →)
  admin/index.html          Admin dashboard
  matrix/index.html         Visual matrix editor
docs/
  ROOMS_BUILT.md            All built rooms
  ROOMS_BACKLOG.md          Unbuilt room ideas
  PLATFORM.md               Platform design document
  CROSS_REFS.md             Cross-room thematic notes
```

---

## Navigation

Rooms are connected in a spatial grid. Each room's `<body>` declares its nav style:

```html
<body data-game="00013" data-nav="matrix">
```

- **`matrix`** — directional buttons (↑ ↓ ← →) from `data/matrix.json`
- **`arrows`** — simple ◀ ▶ using the `GAMES` array order
- **`none`** — no nav injected

The visual matrix editor at `/matrix` lets you add, remove, and flip connections between rooms.

---

## WebSocket Protocol

All messages are JSON with a `game` field for routing:

```js
// Client → Server
ws.send(JSON.stringify({ game: 'plant', type: 'water' }));

// Server → All clients
broadcast({ game: 'plant', type: 'state', growth: 45, wilted: false });
```

On connection, the server immediately sends current state so late-joiners sync up.

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/user/me` | Current user record |
| `POST` | `/api/user/name` | Set designation (24-char max) |
| `GET` | `/api/users` | All users (admin) |
| `GET` | `/api/games` | Room list |
| `GET` | `/api/cookie` | Global cookie count |
| `POST` | `/api/cookie/click` | Increment cookie count |
| `GET` | `/api/ticket` | Current ticket state |
| `POST` | `/api/ticket/take` | Issue ticket to user |
| `GET` | `/api/cards/state` | Current deck state |
| `POST` | `/api/cards/shuffle` | Shuffle deck |
| `GET/POST` | `/api/recordings` | Voice notes (list / upload) |
| `POST` | `/api/snake/score` | Submit snake score |

---

## Adding a Room

1. Create `public/games/XXXXX/index.html`
2. Add `'XXXXX'` to the `GAMES` array in `server.js` (line 10)
3. Add matrix connections in `data/matrix.json`:
   ```json
   "XXXXX|00013": "right",
   "00013|XXXXX": "left"
   ```
4. Add server-side WebSocket/API logic if needed
5. Write `public/games/XXXXX/SPEC.md`

---

## Admin

| Path | Purpose |
|------|---------|
| `/admin` | User dashboard — cookies, names, rooms visited, device info |
| `/matrix` | Visual room connection editor |

---

## Design Notes

- Background: near-black `#050508`
- Accent: red `#e94560`
- Room IDs: zero-padded 5 digits (`00001`, `00051`)
- Each room is fully self-contained — inline `<style>` and `<script>`, no shared JS beyond nav
- JSON files are written with `fs.writeFileSync` — **never** use PowerShell `Set-Content` (writes UTF-16 BOM, breaks `JSON.parse`)

---

## License

Private project.
