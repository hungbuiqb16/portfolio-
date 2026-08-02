import { useEffect } from 'react'

export function SpotlightEffect() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    function handlePointerMove(ev: PointerEvent) {
      if (ev.pointerType === 'touch') return
      const card = (ev.target as HTMLElement).closest<HTMLElement>('.glass-hover')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${ev.clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${ev.clientY - rect.top}px`)
      card.dataset.spotlight = '1'
    }

    function handlePointerOut(ev: PointerEvent) {
      const card = (ev.target as HTMLElement).closest<HTMLElement>('.glass-hover')
      if (!card) return
      const related = ev.relatedTarget as HTMLElement | null
      if (related && card.contains(related)) return
      delete card.dataset.spotlight
    }

    document.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerout', handlePointerOut, { passive: true })
    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  return null
}
