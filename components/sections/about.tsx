'use client'

import { Code2, GraduationCap, Rocket, Server } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Craft',
    text: 'Building responsive, accessible UIs with React and modern tooling.',
  },
  {
    icon: Server,
    title: 'Backend Logic',
    text: 'Designing REST APIs and data models with Node.js, Express & MongoDB.',
  },
  {
    icon: Rocket,
    title: 'Product Mindset',
    text: 'Shipping features end-to-end with an eye for performance and UX.',
  },
  {
    icon: GraduationCap,
    title: 'Always Learning',
    text: 'Exploring AI, system design, and clean architecture every day.',
  },
]

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '8+', label: 'Technologies' },
  { value: '500+', label: 'DSA Problems' },
  { value: '2027', label: 'Graduating' },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        eyebrow="Who I Am"
        title="About Me"
        description="A passionate developer turning ideas into robust, real-world web products."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass h-full rounded-3xl p-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I&apos;m{' '}
              <span className="font-medium text-foreground">Gowtham S</span>, a
              B.Tech Information Technology student and a MERN Stack Developer who
              loves building things for the web. My journey started with curiosity
              about how websites work, and it has grown into a deep passion for
              creating full-stack applications that are fast, scalable, and
              genuinely useful.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I specialize in the{' '}
              <span className="font-medium text-primary">MERN stack</span> —
              MongoDB, Express.js, React, and Node.js — and enjoy solving
              challenging problems, from designing clean APIs to crafting smooth,
              interactive interfaces. When I&apos;m not coding, you&apos;ll find me
              sharpening my data structures and algorithms on competitive
              programming platforms.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-muted/40 p-4 text-center">
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-5 transition-colors hover:border-primary/40">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
