import type { LucideIcon } from 'lucide-react'
import {
  Layers,
  ArrowRight,
  Server,
  Flame,
  Braces,
  Zap,
  Webhook,
  Atom,
  FileType2,
  FileCode2,
  Wind,
  LayoutGrid,
  Cloud,
  Boxes,
  Container,
  GitBranch,
  Workflow,
  Globe,
  Database,
  DatabaseZap,
} from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

type Pill = { icon: LucideIcon; color: string; glow: string; label: string }

const GROUPS: { title: string; pills: Pill[] }[] = [
  {
    title: 'Backend',
    pills: [
      { icon: Server, color: 'text-indigo-400', glow: 'rgba(99,102,241,.5)', label: 'PHP' },
      { icon: Flame, color: 'text-red-400', glow: 'rgba(239,68,68,.5)', label: 'Laravel' },
      { icon: Braces, color: 'text-yellow-300', glow: 'rgba(250,204,21,.5)', label: 'Python' },
      { icon: Zap, color: 'text-teal-300', glow: 'rgba(45,212,191,.5)', label: 'FastAPI' },
      { icon: Webhook, color: 'text-purple', glow: 'rgba(139,92,246,.5)', label: 'REST API' },
    ],
  },
  {
    title: 'Frontend',
    pills: [
      { icon: Atom, color: 'text-sky-400', glow: 'rgba(56,189,248,.5)', label: 'React' },
      { icon: FileType2, color: 'text-brand', glow: 'rgba(59,130,246,.5)', label: 'TypeScript' },
      { icon: FileCode2, color: 'text-yellow-300', glow: 'rgba(250,204,21,.5)', label: 'JavaScript' },
      { icon: Wind, color: 'text-teal-300', glow: 'rgba(45,212,191,.5)', label: 'TailwindCSS' },
      { icon: LayoutGrid, color: 'text-purple', glow: 'rgba(139,92,246,.5)', label: 'Bootstrap' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    pills: [
      { icon: Cloud, color: 'text-orange-400', glow: 'rgba(251,146,60,.5)', label: 'AWS' },
      { icon: Boxes, color: 'text-purple', glow: 'rgba(139,92,246,.5)', label: 'Terraform' },
      { icon: Container, color: 'text-sky-400', glow: 'rgba(56,189,248,.5)', label: 'Docker' },
      { icon: GitBranch, color: 'text-slate-300', glow: 'rgba(148,163,184,.5)', label: 'GitHub Actions' },
      { icon: Workflow, color: 'text-grass', glow: 'rgba(34,197,94,.5)', label: 'GitLab CI/CD' },
      { icon: Globe, color: 'text-emerald-400', glow: 'rgba(34,197,94,.5)', label: 'Nginx' },
    ],
  },
  {
    title: 'Database',
    pills: [
      { icon: Database, color: 'text-brand', glow: 'rgba(59,130,246,.5)', label: 'PostgreSQL' },
      { icon: Database, color: 'text-orange-400', glow: 'rgba(251,146,60,.5)', label: 'MySQL' },
      { icon: DatabaseZap, color: 'text-red-400', glow: 'rgba(239,68,68,.5)', label: 'Redis' },
    ],
  },
]

export function TechStack() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      className="reveal md:col-span-6 lg:col-span-6 glass glass-hover p-6 sm:p-7"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-purple" />
          <h2 className="text-lg font-bold">Tech Stack</h2>
        </div>
        <a
          href="#"
          className="text-sm text-brand hover:text-purple inline-flex items-center gap-1 transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {GROUPS.map((group, i) => (
        <div key={group.title}>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted/70 mb-2.5">
            {group.title}
          </p>
          <div className={`flex flex-wrap gap-2 ${i < GROUPS.length - 1 ? 'mb-5' : ''}`}>
            {group.pills.map((pill) => {
              const Icon = pill.icon
              return (
                <span
                  key={pill.label}
                  className="pill"
                  style={{ ['--_glow' as string]: pill.glow }}
                >
                  <Icon className={`w-4 h-4 ${pill.color}`} />
                  {pill.label}
                </span>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
