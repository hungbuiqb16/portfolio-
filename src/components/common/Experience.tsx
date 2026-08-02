import { Milestone, ArrowRight } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

const TIMELINE = [
  {
    dotColor: 'bg-brand ring-brand/20',
    period: '2020 – Present',
    role: 'Fullstack Developer',
    company: 'GMO-Z.Com Tech VN NTA',
    companyColor: 'text-brand',
    description:
      'Developing an AI FAQ system, chat widget and internal tools with clean, distributed architecture.',
    tags: ['Laravel', 'Python', 'FastAPI', 'AWS', 'PostgreSQL'],
  },
  {
    dotColor: 'bg-purple ring-purple/20',
    period: '2020 – 2020',
    role: 'Backend Developer',
    company: 'NCC Asia',
    companyColor: 'text-purple',
    description: 'Built and maintained multiple SaaS products serving thousands of daily users.',
    tags: ['Laravel', 'Vue', 'MySQL'],
  },
  {
    dotColor: 'bg-grass ring-grass/20',
    period: '2019 – 2019',
    role: 'Web Developer',
    company: 'Independent',
    companyColor: 'text-grass',
    description: 'Delivered custom websites and web apps for clients across various industries.',
    tags: ['PHP', 'Laravel', 'WordPress'],
  },
]

export function Experience() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="experience"
      ref={ref}
      className="reveal md:col-span-6 lg:col-span-3 glass glass-hover p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <Milestone className="w-5 h-5 text-brand" />
          <h2 className="text-lg font-bold">Experience</h2>
        </div>
        <a
          href="#"
          className="text-sm text-brand hover:text-purple inline-flex items-center gap-1 transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <ol className="relative border-l border-white/10 ml-1 space-y-5">
        {TIMELINE.map((item) => (
          <li key={item.role + item.period} className="pl-6">
            <span
              className={`absolute -left-[7px] mt-1 w-3.5 h-3.5 rounded-full ring-4 ${item.dotColor}`}
            />
            <p className="text-xs text-muted">{item.period}</p>
            <h3 className="font-semibold text-paper mt-0.5">{item.role}</h3>
            <p className={`text-sm ${item.companyColor}`}>{item.company}</p>
            <p className="mt-1.5 text-[13px] text-muted leading-snug">{item.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
