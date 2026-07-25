'use client'

import { Award, ExternalLink } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const certificates = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2024',
  },
  {
    title: 'MongoDB for Developers',
    issuer: 'MongoDB University',
    year: '2024',
  },
  {
    title: 'React — The Complete Guide',
    issuer: 'Udemy',
    year: '2023',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Coursera',
    year: '2023',
  },
  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    year: '2023',
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    year: '2024',
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Credentials"
        title="Certificates"
        description="Continuous learning through recognized courses and programs."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="glass group flex h-full items-start gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-110">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
