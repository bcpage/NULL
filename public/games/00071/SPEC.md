# [00071] — Dead Room B

**Status:** Built
**Last updated:** 2026-05-23

## What it is
A system status monitor. Seven status rows with colored indicators (green/yellow/red)
and values (NOMINAL/DEGRADED/OFFLINE/RUNNING). Four action buttons: Run diagnostic,
Refresh status, Export log, Escalate to facility management. The clock ticks.
Nothing else responds. The statuses never change. The buttons do nothing.
One row cross-references 00070's feedback queue as OFFLINE.

## How it works
Static HTML. Clock updates every second (one live element to establish that JS is
running, making the dead buttons more unsettling). Buttons have no listeners.
Status values are hardcoded. No server calls.

## Data files
None.

## Navigation
Matrix nav. Connects: 00070 (left), 00072 (right).

## Locked content
None.

## Notes for future development
Do not add functionality to the buttons. The ticking clock is the only thing that
should respond — it proves the room is alive, which makes the silence of everything
else more deliberate. The DEGRADED and OFFLINE rows should stay as-is permanently.
