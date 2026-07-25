import { Loader } from '@/components/loader'
import { CustomCursor } from '@/components/custom-cursor'
import { AnimatedBackground } from '@/components/animated-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Certificates } from '@/components/sections/certificates'
import { CodingProfiles } from '@/components/sections/coding-profiles'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
