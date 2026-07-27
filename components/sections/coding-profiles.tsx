'use client'

import { motion } from 'framer-motion'
import { Code, Trophy, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'

const profiles = [
  {
    name: 'GitHub',
    handle: '@gowtham-s',
    icon: GithubIcon,
    href: 'https://github.com/Gowtham-tech01',
    accent: 'from-primary to-accent',
    stats: [
      { label: 'Repositories', value: '40+' },
      { label: 'Contributions', value: '900+' },
      { label: 'Stars', value: '120+' },
    ],
  },
  {
    name: 'LeetCode',
    handle: '@gowtham_s',
    icon: Code,
    href: 'https://leetcode.com/u/Gowtham__55/',
    accent: 'from-chart-3 to-primary',
    stats: [
      { label: 'Problems Solved', value: '250+' },
      { label: 'Contest Rating', value: '1750' },
      { label: 'Global Rank', value: 'Top 15%' },
    ],
  },
  {
    name: 'CodeChef',
    handle: '@gowtham_s',
    icon: Trophy,
    href: 'https://www.codechef.com/users/gowtham_555',
    accent: 'from-accent to-chart-4',
    stats: [
      { label: 'Rating', value: '1650' },
      { label: 'Stars', value: '3★' },
      { label: 'Problems', value: '200+' },
    ],
  },
]

export function CodingProfiles() {
  return (
    <section id="profiles" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Beyond The Code"
        title="Coding Profiles"
        description="Where I sharpen my problem-solving skills and share my work."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {profiles.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <motion.a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass group relative block h-full overflow-hidden rounded-3xl p-6"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-primary-foreground`}
                  >
                    <p.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>

              <div className="relative mt-6 grid grid-cols-3 gap-2">
                {p.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-muted/40 p-3 text-center"
                  >
                    <p className="text-lg font-bold text-gradient">{s.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
