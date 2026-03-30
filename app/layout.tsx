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
  title: 'Amezcua — Soporte Técnico & Desarrollo · Linares, N.L.',
  description: 'Soporte técnico, mantenimiento de equipos y soluciones digitales para negocios en Linares, Nuevo León. Diagnóstico gratis por WhatsApp.',
  keywords: 'soporte técnico Linares, reparación computadoras Linares, desarrollo software Linares',
  openGraph: {
    title: 'Johan Amezcua — Soporte Técnico & Desarrollo · Linares, N.L.',
    description: '¿Tu computadora está lenta? Diagnóstico gratis por WhatsApp.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
