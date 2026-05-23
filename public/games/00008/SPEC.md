# 00008 — Voice Notes

**Status:** Built
**Last updated:** 2026-05-23

## What it is

Record and play back short voice clips. Recordings are shared across all visitors and persist between server restarts. Any player can record; any player can play back or delete any clip.

## How it works

`MediaRecorder` API captures audio from the microphone (`getUserMedia`). Supports webm/opus, webm, ogg/opus, and mp4 depending on browser. Blob posted via `fetch` to `POST /api/recordings`. Server saves the audio file to disk and appends metadata to `public/games/00008/data/recordings.json`. `GET /api/recordings` returns the clip list. Clips played back via `<Audio>` element from `GET /api/recordings/:filename`. `DELETE /api/recordings/:filename` removes clip and metadata entry. WebSocket notifies all connected clients when a new clip is posted. Display name from `localStorage` key `chat-name` (shared with Chat room).

## Data files

- `public/games/00008/data/recordings.json` — clip metadata array (filename, uploader name, timestamp, duration)
- Audio files saved alongside or in a subfolder — exact path determined by server.js recording logic

## Navigation

Matrix: left → 00004 (Game of Life), right → 00025 (ELIZA), up → 00009 (Dice Roller), down → 00028 (Galton Board). All bidirectional.

## Locked content

None.

## Notes for future development

No clip length limit is enforced client-side — could add a max duration. No moderation. Recordings accumulate indefinitely unless manually cleared.
