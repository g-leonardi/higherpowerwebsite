import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Console hello (one-time)
if (typeof window !== 'undefined' && !window.__HP_CONSOLE_HELLO__) {
  window.__HP_CONSOLE_HELLO__ = true
  const banner = `\n%c   _   _ _       _               ____                        \n  | | | (_) __ _| | _____ _ __  |  _ \ ___  _ __  _   _ ___ \n  | |_| | |/ _\\/ |/ / _ \\ '__| | |_) / _ \\| '_ \\| | | / __|\n  |  _  | | (_| |   <  __/ |    |  __/ (_) | |_) | |_| \\__ \\\n  |_| |_|_|\\__,_|_|\\_\\___|_|    |_|   \\___/| .__/ \\__,_|___/\n                                            |_|               \n\n`
  console.log(banner, 'color: #38bdf8; font-weight: bold;')
  console.log('%cHint:', 'color:#facc15; font-weight:bold;', 'Try the Konami Code and choose your destiny: ↑↑↓↓←→←→BA')
}

// Fun console pixel art for Konami activation
const printMortalKonsole = () => {
  try {
    const header = [
      { s: '┌──────────────────────────────┐', c: 'color:#f59e0b' },
      { s: '│   MORTAL  KONSOLE  ONLINE   │', c: 'color:#fbbf24; font-weight:bold' },
      { s: '├──────────────────────────────┤', c: 'color:#f59e0b' },
    ]
    const art = [
      { s: '│        ▄▄      ▄▄     ⚔     │', c: 'color:#ef4444' },
      { s: '│       ▐██▌ ▄█▄ ▐██▌  VS     │', c: 'color:#f43f5e' },
      { s: '│     ▄██████▌█▀█▐██████▄     │', c: 'color:#fb7185' },
      { s: '│       ▐██▌ ▀█▀ ▐██▌         │', c: 'color:#fca5a5' },
      { s: '│        ▀▀          FINISH!  │', c: 'color:#f87171; font-weight:bold' },
    ]
    const footer = [
      { s: '├──────────────────────────────┤', c: 'color:#f59e0b' },
      { s: '│  Tip: Auto-off in 60s. BA to │', c: 'color:#fbbf24' },
      { s: '│  toggle again.               │', c: 'color:#fbbf24' },
      { s: '└──────────────────────────────┘', c: 'color:#f59e0b' },
    ]
    ;[...header, ...art, ...footer].forEach(l => console.log('%c' + l.s, l.c + '; font-family:monospace'))
  } catch (e) {
    // noop
  }
}

// Konami Code: toggles aurora mode on body
if (typeof window !== 'undefined' && !window.__HP_KONAMI__) {
  window.__HP_KONAMI__ = true
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
  let buffer = []
  const AURORA_TIMEOUT_MS = 60000 // auto-off after 60s

  const setAurora = (enabled, reason = 'manual') => {
    // Apply class
    document.body.classList.toggle('aurora-mode', enabled)
    document.body.setAttribute('data-aurora', enabled ? '1' : '0')
    // Persist
    localStorage.setItem('hp-aurora-mode', enabled ? '1' : '0')
    console.log('%cAurora Mode', 'color:#00ffff; font-weight:bold;', enabled ? 'ON' : 'OFF', reason === 'auto' ? '(auto)' : '')
    // Broadcast event
    window.dispatchEvent(new CustomEvent('hp-aurora-toggle', { detail: { enabled, reason } }))

    // Print console pixel art when activated via Konami
    if (enabled && reason === 'konami') {
      printMortalKonsole()
    }

    // Badge
    const id = 'aurora-badge'
    let badge = document.getElementById(id)
    if (enabled) {
      if (!badge) {
        badge = document.createElement('div')
        badge.id = id
        badge.className = 'aurora-badge'
        badge.innerHTML = 'Aurora Mode <small>(Konami)</small>'
        document.body.appendChild(badge)
      }
      // Timer reset
      if (window.__HP_AURORA_TIMER__) clearTimeout(window.__HP_AURORA_TIMER__)
      window.__HP_AURORA_TIMER__ = setTimeout(() => setAurora(false, 'auto'), AURORA_TIMEOUT_MS)
    } else {
      if (window.__HP_AURORA_TIMER__) {
        clearTimeout(window.__HP_AURORA_TIMER__)
        window.__HP_AURORA_TIMER__ = null
      }
      if (badge) badge.remove()
    }
  }
  const onKey = (e) => {
    buffer.push(e.key)
    if (buffer.length > seq.length) buffer.shift()
    if (seq.every((k, i) => buffer[i] === k)) {
      const enabled = !document.body.classList.contains('aurora-mode')
      setAurora(enabled, 'konami')
    }
  }
  window.addEventListener('keydown', onKey)
  // Restore persisted state
  if (localStorage.getItem('hp-aurora-mode') === '1') {
    setAurora(true, 'restore')
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
