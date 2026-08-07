import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import { Why, Contact } from '@/components/WhyAndContact'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import LetterMotion from '@/components/LetterMotion'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Publications />
        <Why />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ScrollReveal />
      <LetterMotion />
    </>
  )
}
