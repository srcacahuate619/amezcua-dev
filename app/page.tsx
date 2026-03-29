import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import { Why, Contact } from '@/components/WhyAndContact'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Why />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
