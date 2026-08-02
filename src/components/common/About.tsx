import { UserRound, Briefcase, MapPin, FolderCheck, Mail } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="about"
      ref={ref}
      className="reveal md:col-span-3 lg:col-span-3 glass glass-hover p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-brand">
          <UserRound className="w-5 h-5" />
        </span>
        <h2 className="text-lg font-bold">About Me</h2>
      </div>

      <p className="text-[13px] leading-relaxed text-muted">
        Backend developer with 6+ years of experience in building robust web applications and
        distributed systems. Passionate about AI, Cloud and Clean Code.
      </p>

      <div className="mt-4 pt-4 border-t border-white/8 grid grid-cols-2 gap-x-3 gap-y-3 text-[13px]">
        <div className="flex items-start gap-2 text-muted">
          <Briefcase className="w-4 h-4 text-brand mt-0.5" />
          <span>
            Experience
            <br />
            <span className="text-paper font-semibold">6+ Years</span>
          </span>
        </div>
        <div className="flex items-start gap-2 text-muted">
          <MapPin className="w-4 h-4 text-purple mt-0.5" />
          <span>
            Location
            <br />
            <span className="text-paper font-semibold">Da Nang, Vietnam</span>
          </span>
        </div>
        <div className="flex items-start gap-2 text-muted">
          <FolderCheck className="w-4 h-4 text-grass mt-0.5" />
          <span>
            Projects
            <br />
            <span className="text-paper font-semibold">25+ Completed</span>
          </span>
        </div>
        <div className="flex items-start gap-2 text-muted">
          <Mail className="w-4 h-4 text-brand mt-0.5" />
          <span>
            Email
            <br />
            <span className="text-paper font-semibold break-all">hungbuiqb16@gmail.com</span>
          </span>
        </div>
      </div>
    </section>
  )
}
