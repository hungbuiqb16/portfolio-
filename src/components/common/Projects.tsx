import type { LucideIcon } from 'lucide-react'
import {
  FolderGit2,
  ArrowRight,
  MessageSquareMore,
  BookOpenText,
  AudioLines,
  ExternalLink,
} from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

type Project = {
  icon: LucideIcon
  iconColor: string
  gradient: string
  featuredClass?: string
  title: string
  description: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    icon: MessageSquareMore,
    iconColor: 'text-brand',
    gradient: 'from-brand/25 to-purple/25',
    featuredClass: '!text-purple !border-purple/30 !bg-purple/10',
    title: 'Ekiten AI FAQ',
    description: 'AI-powered FAQ system with RAG, FastAPI, PostgreSQL, pgvector, and AWS ECS.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    icon: BookOpenText,
    iconColor: 'text-grass',
    gradient: 'from-grass/25 to-brand/25',
    featuredClass: '!text-grass !border-grass/30 !bg-grass/10',
    title: 'AI Story',
    description:
      'AI story generation platform for Vietnamese folktales with beautiful illustrations.',
    tags: ['Python', 'React', 'FastAPI', 'AWS S3'],
  },
  {
    icon: AudioLines,
    iconColor: 'text-purple',
    gradient: 'from-purple/25 to-brand/25',
    title: 'Video Transcriber',
    description: 'Transcribe video/audio to text with speaker diarization and translation support.',
    tags: ['Python', 'Whisper', 'FastAPI', 'Docker'],
  },
]

export function Projects() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal md:col-span-6 lg:col-span-6 glass glass-hover p-6 sm:p-7"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <FolderGit2 className="w-5 h-5 text-brand" />
          <h2 className="text-lg font-bold">Featured Projects</h2>
        </div>
        <a
          href="#"
          className="text-sm text-brand hover:text-purple inline-flex items-center gap-1 transition-colors"
        >
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLElement>(index * 100)
  const Icon = project.icon

  return (
    <article
      ref={ref}
      className="reveal group relative flex flex-col p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/18 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`shrink-0 grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 ${project.iconColor}`}
        >
          <Icon className="w-5 h-5" />
        </span>
        {project.featuredClass && <span className={`tag ${project.featuredClass}`}>Featured</span>}
      </div>
      <h3 className="font-semibold text-paper text-sm">{project.title}</h3>
      <p className="mt-1 text-[12px] text-muted leading-snug">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href="#"
        aria-label="Open project"
        className="absolute top-3 right-3 grid place-items-center w-7 h-7 rounded-lg border border-white/10 text-muted group-hover:text-paper group-hover:border-white/25 transition-colors"
      >
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </article>
  )
}
