'use client'

import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-lg font-bold text-gradient">{'<GS/>'}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gowtham S. Built with Next.js &amp; Framer Motion.
          </p>
        </div>

        <a
          href="#home"
          className="flex items-center gap-2 rounded-xl glass px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
