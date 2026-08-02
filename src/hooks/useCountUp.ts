import { useEffect, useRef, useState } from 'react'

/** Parses "2K+" / "25+" / "6+" into a numeric target and the surrounding prefix/suffix. */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(K)?([^\d]*)$/i)
  if (!match) return { prefix: '', target: 0, isK: false, suffix: raw }
  const [, prefix, num, k, suffix] = match
  return { prefix, target: Number(num), isK: Boolean(k), suffix }
}

export function useCountUp<T extends HTMLElement>(value: string, duration = 1400) {
  const ref = useRef<T | null>(null)
  const [display, setDisplay] = useState(() => parseValue(value).prefix + '0' + parseValue(value).suffix)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const { prefix, target, isK, suffix } = parseValue(value)

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          io.unobserve(el)
          const start = performance.now()
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(target * eased)
            setDisplay(`${prefix}${current}${isK ? 'K' : ''}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return { ref, display }
}
