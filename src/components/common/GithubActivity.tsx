import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'
import { GithubIcon } from '@/components/common/icons'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const LEVELS = ['', 'lvl1', 'lvl2', 'lvl3', 'lvl4']

function randomLevel() {
  const r = Math.random()
  if (r > 0.96) return 4
  if (r > 0.88) return 3
  if (r > 0.74) return 2
  if (r > 0.55) return 1
  return 0
}

export function GithubActivity() {
  const ref = useReveal<HTMLElement>()
  const cells = useMemo(() => Array.from({ length: 7 * 26 }, () => randomLevel()), [])

  return (
    <section
      id="blog"
      ref={ref}
      className="reveal md:col-span-6 lg:col-span-3 glass glass-hover p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <GithubIcon className="w-5 h-5 text-paper" />
          <h2 className="text-lg font-bold">GitHub Activity</h2>
        </div>
        <a
          href="#"
          className="text-sm text-brand hover:text-purple inline-flex items-center gap-1 transition-colors"
        >
          View GitHub <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-12 gap-1 text-[9px] text-muted/60 mb-1.5 pl-1">
        {MONTHS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] grid-rows-7 gap-1">
        {cells.map((lvl, i) => (
          <span key={i} className={`cell ${LEVELS[lvl]}`} />
        ))}
      </div>
    </section>
  )
}
