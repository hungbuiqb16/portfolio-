import type { LucideIcon } from 'lucide-react'
import { Briefcase, Rocket, Star, CodeXml } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'
import { useCountUp } from '@/hooks/useCountUp'

type Stat = {
  icon: LucideIcon
  iconColor: string
  bg: string
  border: string
  value: string
  label: string
  spark: string
  sparkColor: string
}

const STATS: Stat[] = [
  {
    icon: Briefcase,
    iconColor: 'text-brand',
    bg: 'bg-brand/15',
    border: 'border-brand/25',
    value: '6+',
    label: 'Years Experience',
    spark: 'M0 24 L20 18 L40 22 L60 10 L80 16 L100 6 L120 12',
    sparkColor: '#8B5CF6',
  },
  {
    icon: Rocket,
    iconColor: 'text-grass',
    bg: 'bg-grass/15',
    border: 'border-grass/25',
    value: '25+',
    label: 'Projects Completed',
    spark: 'M0 26 L20 20 L40 24 L60 14 L80 18 L100 8 L120 4',
    sparkColor: '#22C55E',
  },
  {
    icon: Star,
    iconColor: 'text-amber-300',
    bg: 'bg-amber-400/15',
    border: 'border-amber-400/25',
    value: '15+',
    label: 'Technologies',
    spark: 'M0 20 L20 24 L40 16 L60 22 L80 12 L100 18 L120 10',
    sparkColor: '#F59E0B',
  },
  {
    icon: CodeXml,
    iconColor: 'text-brand',
    bg: 'bg-brand/15',
    border: 'border-brand/25',
    value: '2K+',
    label: 'GitHub Contributions',
    spark: 'M0 24 L20 20 L40 22 L60 16 L80 18 L100 10 L120 6',
    sparkColor: '#3B82F6',
  },
]

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useReveal<HTMLDivElement>(index * 90)
  const { ref: valueRef, display } = useCountUp<HTMLParagraphElement>(stat.value)
  const Icon = stat.icon

  return (
    <div
      ref={ref}
      className="reveal md:col-span-3 lg:col-span-3 glass glass-hover p-4 flex items-center gap-3"
    >
      <span
        className={`grid place-items-center w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} ${stat.iconColor} shrink-0`}
      >
        <Icon className="w-5 h-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p ref={valueRef} className="text-2xl font-extrabold tracking-tight">
          {display}
        </p>
        <p className="text-sm text-muted">{stat.label}</p>
      </div>
      <svg className="spark w-16 h-8 shrink-0" viewBox="0 0 120 32" fill="none">
        <path
          d={stat.spark}
          stroke={stat.sparkColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function StatsRow() {
  return (
    <>
      {STATS.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} />
      ))}
    </>
  )
}
