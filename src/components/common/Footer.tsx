import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="glass rounded-3xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Hung Bui. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-sm text-muted hover:text-paper inline-flex items-center gap-1.5 transition-colors"
        >
          Back to top <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}
