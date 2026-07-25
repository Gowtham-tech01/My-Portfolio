'use client'

import { Award, ExternalLink } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const certificates = [
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    year: '2026',
    link: 'https://www.coursera.org/verify/YVBU1PG5EBBQ',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
    year: '2026',
    link: 'https://www.coursera.org/verify/V72VBV2JNII9',
  },
  {
    title: 'SQL Foundations',
    issuer: 'Microsoft',
    year: '2026',
    link: 'https://www.coursera.org/verify/O0P7N7D5F12Z',
  },
]

export function Certificates() {
  return (
    <section
      id="certificates"
      className="relative mx-auto max-w-6xl px-4 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Credentials"
        title="Certificates"
        description="Continuous learning through recognized courses and programs."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="glass flex h-full items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-110">
                  <Award className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.issuer} • {c.year}
                  </p>

                  <p className="mt-3 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View Certificate →
                  </p>
                </div>

                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:text-primary group-hover:opacity-100 opacity-50" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}