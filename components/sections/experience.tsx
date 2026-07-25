'use client'

import { Reveal, SectionHeading } from '@/components/reveal'

const timeline = [
  {
    period: '2023 — Present',
    role: 'MERN Stack Developer (Freelance & Personal)',
    org: 'Self-Directed',
    points: [
      'Designed and shipped full-stack applications using MongoDB, Express, React and Node.js.',
      'Built reusable component libraries and RESTful APIs with authentication.',
      'Focused on performance, responsive design, and clean, maintainable code.',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Web Development Intern',
    org: 'Tech Startup',
    points: [
      'Contributed to production React features and integrated backend endpoints.',
      'Collaborated in an agile team using Git-based workflows and code reviews.',
      'Improved page load and UX for key user-facing flows.',
    ],
  },
  {
    period: '2022 — 2026',
    role: 'B.Tech, Information Technology',
    org: 'University',
    points: [
      'Coursework in Data Structures, Algorithms, DBMS, and Web Technologies.',
      'Active in coding contests and technical clubs.',
      'Maintaining a strong academic record while building side projects.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="My Journey"
        title="Experience & Education"
        description="Roles, internships, and studies that shaped how I build."
      />

      <div className="relative">
        <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.08}>
              <div
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? 'md:ml-auto md:pl-10'
                    : 'md:mr-auto md:pr-10 md:text-right'
                }`}
              >
                <span
                  className={`absolute top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background left-2.5 md:left-auto ${
                    i % 2 === 0 ? 'md:-left-2' : 'md:-right-2'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <ul
                    className={`mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground ${
                      i % 2 !== 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
