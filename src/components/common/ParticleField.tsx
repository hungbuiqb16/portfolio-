import { useMemo } from 'react'

type ParticleFieldProps = {
  count?: number
  colors?: string[]
  className?: string
}

type Particle = {
  id: number
  left: number
  top: number
  size: number
  dx: number
  dy: number
  duration: number
  delay: number
  color: string
}

const DEFAULT_COLORS = ['#A78BFA', '#60A5FA', '#34D399']

function createParticles(count: number, colors: string[]): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 3,
    dx: (Math.random() - 0.5) * 40,
    dy: (Math.random() - 0.5) * 40,
    duration: 5 + Math.random() * 7,
    delay: Math.random() * -12,
    color: colors[id % colors.length],
  }))
}

export function ParticleField({ count = 10, colors = DEFAULT_COLORS, className = '' }: ParticleFieldProps) {
  const particles = useMemo(() => createParticles(count, colors), [count, colors])

  return (
    <div className={`particle-field ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.size * 0.6}px ${p.color}66`,
            ['--dx' as string]: `${p.dx}px`,
            ['--dy' as string]: `${p.dy}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
