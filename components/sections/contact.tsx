'use client'

import { useState, useRef, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal, SectionHeading } from '@/components/reveal'

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gowthamsundarrajan2005@gmail.com',
    href: 'mailto:gowthamsundarrajan2005@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9688925060',
    href: 'tel:+919688925060',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: undefined,
  },
]

const socials = [
  {
    icon: GithubIcon,
    href: 'https://github.com/Gowtham-tech01',
    label: 'GitHub',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/gowtham-sundarrajan',
    label: 'LinkedIn',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useRef<HTMLFormElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        'service_mpz2anj',
        'template_stzzjq9',
        form.current,
        'hANNvINQsppFiSSQC'
      )
      .then(() => {
        setLoading(false)
        setSent(true)

        form.current?.reset()

        setTimeout(() => {
          setSent(false)
        }, 4000)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
        alert('Failed to send message. Please try again.')
      })
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl px-4 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Build Something"
        description="Have a project, role, or idea in mind? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
            <div className="space-y-5">
              {details.map((d) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {d.label}
                      </p>

                      <p className="font-medium">{d.value}</p>
                    </div>
                  </>
                )

                return d.href ? (
                  <a
                    key={d.label}
                    href={d.href}
                    className="flex items-center gap-4 transition-colors hover:text-primary"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={d.label} className="flex items-center gap-4">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground transition-all hover:scale-110 hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm text-muted-foreground"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-sm text-muted-foreground"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className="rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm text-muted-foreground"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity..."
                className="resize-none rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className="glow-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-80"
            >
              {loading ? (
                <>Sending...</>
              ) : sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}