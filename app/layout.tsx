import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-head',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Johan Amezcua — Implementador de IA · Linares, N.L.',
  description: 'Implemento inteligencia artificial y software a la medida para negocios reales: automatización, páginas web, aplicaciones de escritorio y sistemas que trabajan solos. Linares, Nuevo León.',
  keywords: 'implementación IA Linares, automatización con IA, desarrollo de software Linares, páginas web con IA',
  openGraph: {
    title: 'Johan Amezcua — Implementador de IA',
    description: 'Automatizo procesos con inteligencia artificial. Proyectos reales, resultados reales.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Johan Amezcua — Implementador de IA',
              description: 'Implemento IA, chatbots, agentes y software a la medida para negocios. IA local y en la nube.',
              areaServed: 'Linares, Nuevo León, México',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Linares',
                addressRegion: 'Nuevo León',
                addressCountry: 'MX',
              },
              telephone: '+52 821 111 0863',
              url: 'https://amezcua-dev.vercel.app',
              priceRange: '$$',
              knowsAbout: ['Inteligencia Artificial', 'Chatbots', 'Agentes de IA', 'IA local', 'Automatización de procesos'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
