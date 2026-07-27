'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const socials = [
  { icon: GithubIcon, href: 'https://github.com/Gowtham-tech01', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/in/gowtham-sundarrajan', label: 'LinkedIn' },
  { icon: Mail, href: '#contact', label: 'Email' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center px-4 pt-28 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.05 }}
        className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>

        <span className="font-mono text-xs text-muted-foreground">
          Available for opportunities
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.15 }}
        className="font-mono text-sm text-muted-foreground sm:text-base"
      >
        {'> Hi, I am'}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.25 }}
        className="mt-2 text-balance text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl"
      >
        Gowtham <span className="text-gradient">S</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.35 }}
        className="mt-5 text-balance text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl"
      >
        MERN Stack Developer{' '}
        <span className="text-foreground">&amp;</span> B.Tech IT Student
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.45 }}
        className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
      >
        I craft fast, scalable, and delightful full-stack web applications with
        React, Node.js, and everything in between.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.55 }}
        className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#projects"
          className="glow-primary flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          View My Work
          <ArrowDown className="h-4 w-4" />
        </a>

        <a
          href="/resume.pdf"
          download="Gowtham-S-Resume.pdf"
          className="flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium transition-colors hover:bg-muted/50"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 2.65 }}
        className="relative z-20 mt-10 flex items-center gap-3"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            aria-label={s.label}
            className="relative z-20 flex h-11 w-11 items-center justify-center rounded-xl glass text-muted-foreground transition-all hover:scale-110 hover:text-primary"
          >
            <s.icon className="h-5 w-5" />
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}