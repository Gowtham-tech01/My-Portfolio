'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'

const projects = [
  {
    title: 'MERN E-Commerce',
    image: '/projects/mern-ecommerce.png',
    description:
      'A full-featured online store with product catalog, cart, secure checkout, order management, and an admin dashboard.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/gowtham-s',
    demo: '#',
  },
  {
    title: 'AI SaaS',
    image: '/projects/ai-saas.png',
    description:
      'A subscription-based AI platform for content generation with authentication, usage limits, and a polished dashboard.',
    tags: ['Next.js', 'Node.js', 'OpenAI', 'MongoDB'],
    github: 'https://github.com/gowtham-s',
    demo: '#',
  },
  {
    title: 'Smart Tourist Safety Monitoring',
    image: '/projects/tourist-safety.png',
    description:
      'A real-time monitoring system that tracks tourist locations, triggers safety alerts, and visualizes analytics on a live map.',
    tags: ['React', 'Node.js', 'Maps API', 'Socket.io'],
    github: 'https://github.com/gowtham-s',
    demo: '#',
  },
  {
    title: 'DriveMind AI',
    image: '/projects/drivemind-ai.png',
    description:
      'An intelligent driving assistant delivering route insights, trip analytics, and AI-powered recommendations to drivers.',
    tags: ['React', 'Python', 'AI/ML', 'REST API'],
    github: 'https://github.com/gowtham-s',
    demo: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="My Work"
        title="Featured Projects"
        description="A selection of full-stack applications I've designed and built."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source code`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={p.demo}
                      aria-label={`${p.title} live demo`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
