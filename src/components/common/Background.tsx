import { useEffect, useRef } from 'react'

export function Background() {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    function handleMouseMove(ev: MouseEvent) {
      const cx = ev.clientX / window.innerWidth - 0.5
      const cy = ev.clientY / window.innerHeight - 0.5
      const factors = [0.02, 0.035, 0.025]
      blobRefs.current.forEach((el, i) => {
        if (!el) return
        const f = factors[i] * 100
        el.style.transform = `translate(${cx * f}px, ${cy * f}px)`
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="bg-atmosphere" aria-hidden="true">
        <div ref={(el) => { blobRefs.current[0] = el }} className="blob blob-1" />
        <div ref={(el) => { blobRefs.current[1] = el }} className="blob blob-2" />
        <div ref={(el) => { blobRefs.current[2] = el }} className="blob blob-3" />
      </div>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />
    </>
  )
}
