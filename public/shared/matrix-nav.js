(function () {
  const gameId = document.body.dataset.game;
  if (!gameId) return;

  const style = document.createElement('style');
  style.textContent = `
    #matrix-nav {
      display: flex; align-items: center; gap: 8px;
      flex-shrink: 0; align-self: center;
    }
    #matrix-nav-grid {
      display: grid; grid-template-columns: repeat(3, 28px); grid-template-rows: repeat(3, 28px);
      gap: 2px;
    }
    .mnav-btn {
      background: #0d0d1a; border: 1px solid #222; color: #444;
      font-size: 14px; width: 28px; height: 28px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: border-color 0.15s, color 0.15s;
      padding: 0; line-height: 1;
    }
    .mnav-btn:hover:not(:disabled) { border-color: #888; color: #ccc; }
    .mnav-btn:disabled { opacity: 0.12; cursor: default; }
    .mnav-btn.active { border-color: #e94560; color: #e94560; }
    .mnav-empty { width: 28px; height: 28px; }
    #matrix-nav-id { font-family: 'Fredoka One', cursive; font-size: 1rem; color: #444; letter-spacing: 3px; min-width: 56px; text-align: center; }
    #mnav-flash {
      position: fixed; inset: 0; background: rgba(233,69,96,0.06);
      pointer-events: none; opacity: 0; transition: opacity 0.3s;
      z-index: 9999;
    }
    #mnav-flash.show { opacity: 1; }
  `;
  document.head.appendChild(style);

  const flash = document.createElement('div');
  flash.id = 'mnav-flash';
  document.body.appendChild(flash);

  let exits = {};

  const nav = document.createElement('div');
  nav.id = 'matrix-nav';

  const idLabel = document.createElement('div');
  idLabel.id = 'matrix-nav-id';
  idLabel.textContent = gameId;

  const btnGrid = document.createElement('div');
  btnGrid.id = 'matrix-nav-grid';

  // 3×3 grid: corners empty, center empty, edges = directions
  const LAYOUT = [
    null, 'up',   null,
    'left', null, 'right',
    null, 'down', null,
  ];
  const ICONS = { up: '↑', down: '↓', left: '←', right: '→' };
  const dirBtns = {};

  LAYOUT.forEach(dir => {
    if (!dir) {
      const empty = document.createElement('div');
      empty.className = 'mnav-empty';
      btnGrid.appendChild(empty);
    } else {
      const btn = document.createElement('button');
      btn.className = 'mnav-btn';
      btn.textContent = ICONS[dir];
      btn.disabled = true;
      btn.title = dir;
      btn.addEventListener('click', () => move(dir));
      dirBtns[dir] = btn;
      btnGrid.appendChild(btn);
    }
  });

  nav.appendChild(idLabel);
  nav.appendChild(btnGrid);
  document.body.insertBefore(nav, document.body.firstChild);

  function updateButtons() {
    ['up','down','left','right'].forEach(dir => {
      dirBtns[dir].disabled = !exits[dir];
    });
  }

  function move(dir) {
    const dest = exits[dir];
    if (!dest) { noPassage(); return; }
    window.location.href = '/game/' + dest;
  }

  function noPassage() {
    flash.classList.add('show');
    setTimeout(() => flash.classList.remove('show'), 300);
  }

  // Keyboard support
  const KEY_MAP = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right',
    W: 'up', S: 'down', A: 'left', D: 'right',
  };
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const dir = KEY_MAP[e.key];
    if (dir) { e.preventDefault(); move(dir); }
  });

  // Load exits for this room
  fetch('/api/move?from=' + gameId + '&dir=up')
    .then(() => {}) // warm the connection
    .catch(() => {});

  function loadExits() {
    const dirs = ['up', 'down', 'left', 'right'];
    Promise.all(dirs.map(dir =>
      fetch('/api/move?from=' + gameId + '&dir=' + dir)
        .then(r => r.json())
        .then(data => ({ dir, dest: data.destination }))
    )).then(results => {
      exits = {};
      results.forEach(({ dir, dest }) => { if (dest) exits[dir] = dest; });
      updateButtons();
    });
  }

  loadExits();
})();
