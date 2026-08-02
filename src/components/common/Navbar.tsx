import { useState } from 'react'
import { CodeXml, MoonStar, Sun, Download, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/common/icons'
import { useMagnetic } from '@/hooks/useMagnetic'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [light, setLight] = useState(false)
  const githubRef = useMagnetic<HTMLAnchorElement>()
  const linkedinRef = useMagnetic<HTMLAnchorElement>()
  const themeRef = useMagnetic<HTMLButtonElement>()

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="glass px-4 sm:px-6 py-3 flex items-center justify-between rounded-3xl">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand to-purple text-white shadow-lg shadow-brand/30 group-hover:scale-105 transition-transform">
              <CodeXml className="w-5 h-5" />
            </span>
            <span className="font-bold text-[15px] tracking-tight">
              Hung <span className="text-gradient-bp">Bui</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm text-muted font-medium">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navlink hover:text-paper transition-colors ${i === 0 ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              ref={githubRef}
              href="#"
              aria-label="GitHub"
              className="hidden sm:grid place-items-center w-9 h-9 rounded-xl border border-white/10 text-muted hover:text-paper hover:border-white/25 transition-colors"
            >
              <GithubIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              ref={linkedinRef}
              href="#"
              aria-label="LinkedIn"
              className="hidden sm:grid place-items-center w-9 h-9 rounded-xl border border-white/10 text-muted hover:text-brand hover:border-white/25 transition-colors"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <button
              ref={themeRef}
              aria-label="Toggle theme"
              onClick={() => setLight((v) => !v)}
              className="grid place-items-center w-9 h-9 rounded-xl border border-white/10 text-muted hover:text-paper hover:border-white/25 transition-colors"
            >
              {light ? <Sun className="w-[18px] h-[18px]" /> : <MoonStar className="w-[18px] h-[18px]" />}
            </button>
            <Button asChild size="default" className="hidden sm:inline-flex text-sm">
              <a href="#">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </Button>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-9 h-9 rounded-xl border border-white/10 text-paper"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3">
            <ul className="flex flex-col text-sm text-muted font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand to-purple"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
