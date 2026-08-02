import { Server, Cloud, Sparkles } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'
import { ParticleField } from '@/components/common/ParticleField'

export function AvatarCard() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="reveal md:col-span-3 lg:col-span-4 glass glass-hover p-5 flex flex-col">
      <div className="relative mx-auto w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand/20 via-purple/15 to-transparent">
        <div className="avatar-glow" style={{ inset: '-20px' }} />
        <ParticleField count={2} />
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative w-44 h-44 group">
            <div className="avatar-ring" />
            <div className="particle p1" />
            <div className="particle p2" />
            <div className="particle p3" />
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/15 bg-gradient-to-br from-brand/30 to-purple/30 transition-transform duration-300 ease-out group-hover:scale-110">
              <img src="/avt.jpg" alt="Hung Bui" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <span className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 text-xs font-medium text-grass border border-grass/25 bg-ink/70 backdrop-blur rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-grass" /> Available
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-2 flex items-center justify-center gap-1.5">
          <Server className="w-4 h-4 text-brand shrink-0" />
          <p className="text-[11px] leading-tight text-muted text-left">Backend Developer</p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-2 flex items-center justify-center gap-1.5">
          <Cloud className="w-4 h-4 text-purple shrink-0" />
          <p className="text-[11px] leading-tight text-muted text-left">Cloud Engineer</p>
        </div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] px-2 py-2 flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-grass shrink-0" />
          <p className="text-[11px] leading-tight text-muted text-left">AI Enthusiast</p>
        </div>
      </div>
    </section>
  )
}
