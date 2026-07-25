'use client'

import { motion } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/reveal'

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML & CSS', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'MongoDB', level: 84 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Languages & Tools',
    skills: [
      { name: 'Python', level: 82 },
      { name: 'Java', level: 78 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'REST APIs', level: 87 },
    ],
  },
]

const stack = [
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Python',
  'Java',
  'SQL',
]

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="What I Use"
        title="Skills & Tech Stack"
        description="The tools and technologies I reach for to bring products to life."
      />

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {stack.map((tech, i) => (
          <Reveal key={tech} delay={i * 0.04}>
            <span className="glass rounded-full px-5 py-2 font-mono text-sm transition-colors hover:border-primary/50 hover:text-primary">
              {tech}
            </span>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((cat, ci) => (
          <Reveal key={cat.title} delay={ci * 0.1}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                <span className="h-4 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted/50">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
