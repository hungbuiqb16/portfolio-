import { Hand, ArrowUpRight, ArrowRight, MapPin, Mail } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'
import { useMagnetic } from '@/hooks/useMagnetic'
import { Button } from '@/components/ui/button'

export function Hero() {
  const ref = useReveal<HTMLElement>()
  const connectRef = useMagnetic<HTMLAnchorElement>(0.25)
  const projectsRef = useMagnetic<HTMLAnchorElement>(0.25)

  return (
    <section
      id="home"
      ref={ref}
      className="reveal md:col-span-6 lg:col-span-5 glass glass-hover p-6 sm:p-7 overflow-hidden"
    >
      <span className="inline-flex items-center gap-2 text-sm font-medium text-muted border border-white/10 rounded-full px-3 py-1 bg-white/5">
        <Hand className="w-4 h-4 text-amber-300" /> Hello, I'm
      </span>

      <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.02]">
        Hung <span className="text-gradient-bp">Bui</span>
      </h1>

      <p className="mt-2 text-lg font-semibold text-paper/90">Fullstack Developer</p>

      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
        Building scalable web applications, AI-powered systems, cloud infrastructure and modern
        backend architecture that solve real-world problems.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a ref={connectRef} href="#contact">
            Let's Connect <ArrowUpRight className="w-4 h-4" />
          </a>
        </Button>
        <Button asChild variant="outline">
          <a ref={projectsRef} href="#projects">
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand" /> Vietnam
        </span>
        <span className="inline-flex items-center gap-2">
          <Mail className="w-4 h-4 text-purple" /> hungbuiqb16@gmail.com
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-grass shadow-[0_0_8px] shadow-grass" /> Available
          for work
        </span>
      </div>
    </section>
  )
}
