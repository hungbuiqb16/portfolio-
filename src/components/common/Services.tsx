import type { LucideIcon } from 'lucide-react'
import { Zap, ServerCog, Bot, CloudCog, Network, ChevronRight } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

type Service = { icon: LucideIcon; color: string; bg: string; border: string; title: string; desc: string }

const SERVICES: Service[] = [
  {
    icon: ServerCog,
    color: 'text-brand',
    bg: 'bg-brand/15',
    border: 'border-brand/25',
    title: 'Backend Development',
    desc: 'Laravel, FastAPI, RESTful API, Microservices',
  },
  {
    icon: Bot,
    color: 'text-purple',
    bg: 'bg-purple/15',
    border: 'border-purple/25',
    title: 'AI & Automation',
    desc: 'RAG, NLP, Chatbot, Workflow Automation',
  },
  {
    icon: CloudCog,
    color: 'text-sky-400',
    bg: 'bg-sky-400/15',
    border: 'border-sky-400/25',
    title: 'Cloud & DevOps',
    desc: 'AWS, Terraform, Docker, CI/CD Pipeline',
  },
  {
    icon: Network,
    color: 'text-grass',
    bg: 'bg-grass/15',
    border: 'border-grass/25',
    title: 'System Design',
    desc: 'Scalable Architecture, Performance Optimization',
  },
]

export function Services() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} className="reveal md:col-span-6 lg:col-span-3 glass glass-hover p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <Zap className="w-5 h-5 text-purple" />
        <h2 className="text-lg font-bold">Services</h2>
      </div>

      <div className="space-y-2.5">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <a
              key={service.title}
              href="#"
              className="group flex items-center gap-4 p-3.5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/18 transition-all"
            >
              <span
                className={`grid place-items-center w-11 h-11 rounded-xl ${service.bg} border ${service.border} ${service.color}`}
              >
                <Icon className="w-5 h-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-sm text-paper">{service.title}</p>
                <p className="text-xs text-muted truncate">{service.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-1 group-hover:text-paper transition-all" />
            </a>
          )
        })}
      </div>
    </section>
  )
}
