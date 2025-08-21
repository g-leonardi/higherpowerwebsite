import { useEffect, useState } from 'react'

export default function useAuroraMode() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.body.classList.contains('aurora-mode')
  })

  useEffect(() => {
    const onToggle = (e) => setEnabled(!!e.detail?.enabled)
    window.addEventListener('hp-aurora-toggle', onToggle)
    // Sync on mount in case of late load
    setEnabled(document.body.classList.contains('aurora-mode'))
    return () => window.removeEventListener('hp-aurora-toggle', onToggle)
  }, [])

  return enabled
}
