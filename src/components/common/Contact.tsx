import type { ComponentType, SVGProps } from 'react'
import { Send, GitMerge, Mail, ChevronRight } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'
import { GithubIcon } from '@/components/common/icons'

type ContactLink = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  color: string
  bg: string
  border: string
  title: string
  value: string
  href: string
}

const LINKS: ContactLink[] = [
  {
    icon: GithubIcon,
    color: 'text-paper',
    bg: 'bg-white/5',
    border: 'border-white/10',
    title: 'GitHub',
    value: 'github.com/hungbuiqb16',
    href: 'https://github.com/hungbuiqb16',
  },
  {
    icon: GitMerge,
    color: 'text-orange-400',
    bg: 'bg-orange-400/15',
    border: 'border-orange-400/25',
    title: 'GitLab',
    value: 'gitlab.com/hungbuiqb16',
    href: 'https://gitlab.com/hungbuiqb16',
  },
  {
    icon: Mail,
    color: 'text-purple',
    bg: 'bg-purple/15',
    border: 'border-purple/25',
    title: 'Email',
    value: 'hungbuiqb16@gmail.com',
    href: 'mailto:hungbuiqb16@gmail.com',
  },
]

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="reveal md:col-span-6 lg:col-span-3 glass glass-hover p-6">
      <div className="flex items-center gap-2.5 mb-2">
        <Send className="w-5 h-5 text-brand" />
        <h2 className="text-lg font-bold">Let's Connect</h2>
      </div>
      <p className="text-[13px] text-muted leading-relaxed mb-5">
        I'm always open to discussing new opportunities and exciting projects.
      </p>

      <div className="space-y-2.5">
        {LINKS.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.title}
              href={link.href}
              className="group flex items-center gap-4 p-3.5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/18 transition-all"
            >
              <span
                className={`grid place-items-center w-11 h-11 rounded-xl ${link.bg} border ${link.border} ${link.color}`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm text-paper">{link.title}</p>
                <p className="text-xs text-muted truncate">{link.value}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-1 group-hover:text-paper transition-all" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
