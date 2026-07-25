import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gowtham S — MERN Stack Developer',
  description:
    'Portfolio of Gowtham S, a B.Tech Information Technology student and MERN Stack Developer building modern, futuristic web experiences.',
  generator: 'v0.app',
  keywords: [
    'Gowtham S',
    'MERN Stack Developer',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Gowtham S' }],
  openGraph: {
    title: 'Gowtham S — MERN Stack Developer',
    description:
      'B.Tech IT student & MERN Stack Developer. Explore my projects, skills, and coding profiles.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1020',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
