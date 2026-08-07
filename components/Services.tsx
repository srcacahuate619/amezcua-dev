/* Hallmark · section: services-index · genre: atmospheric · theme: existing (dark+lime) */
'use client'

import { useState } from 'react'
import { CpuBolt, Flask, Desktop, ChartBarTrendUp, CodeSquare, Globe } from 'reicon-react'
import type { IconComponent } from 'reicon-react'

type Service = {
  Icon: IconComponent
  title: string
  desc: string
  badge: string
}

const services: Service[] = [
  {
    Icon: CpuBolt,
    title: 'Chatbots con IA',
    desc: 'Atienden a tus clientes en WhatsApp y web a toda hora: responden preguntas, toman pedidos, agendan citas. Nunca duermen, nunca se enojan, nunca dejan un mensaje sin responder.',
    badge: 'WhatsApp · Web · 24/7',
  },
  {
    Icon: Flask,
    title: 'Agentes de IA',
    desc: 'No solo responden: ejecutan. Leen tus correos, generan reportes, mueven datos entre tus sistemas, cotizan automáticamente. Tareas completas de punta a punta, sin tu intervención.',
    badge: 'Autonomía operativa',
  },
  {
    Icon: Desktop,
    title: 'IA local para datos sensibles',
    desc: 'Modelos que corren dentro de tu propia computadora o red. Tus datos no salen a la nube: ideal para despachos legales, inventarios, salud e información confidencial.',
    badge: 'Offline · Privacidad total',
  },
  {
    Icon: ChartBarTrendUp,
    title: 'IA en la nube',
    desc: 'Cuando conviene el poder de los modelos grandes (Gemini, Claude, DeepSeek): para tareas que sí necesitan un motor pesado y donde la información puede viajar.',
    badge: 'Gemini · Claude · DeepSeek',
  },
  {
    Icon: CodeSquare,
    title: 'Digitalización de procesos',
    desc: 'Sistemas a la medida que reemplazan lo que hoy haces en Excel y cuadernos: POS, control de inventario, citas, facturación, gestión de clientes.',
    badge: 'Python · TypeScript',
  },
  {
    Icon: Globe,
    title: 'Páginas web con IA integrada',
    desc: 'Sitios que no son folleto: llevan el chatbot adentro, toman pedidos, muestran catálogos, derivan a WhatsApp. Tu página trabaja mientras duermes.',
    badge: 'Next.js · Vercel',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <style>{`
        .sv-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
        }
        .sv-row.is-active .sv-iconbox { border-color: var(--accent); }
        .sv-lead {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }
        .sv-index {
          font-family: var(--font-head);
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 700;
          width: 3rem;
          flex-shrink: 0;
        }
        .sv-iconbox {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sv-content { flex: 1; min-width: 0; }
        .sv-title {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          overflow-wrap: anywhere;
        }
        .sv-desc {
          font-size: 0.875rem;
          color: rgba(245,242,236,0.55);
          max-width: 520px;
          line-height: 1.7;
        }
        .sv-side {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .sv-badge {
          display: inline-block;
          font-size: 0.72rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.25rem 0.7rem;
          border-radius: 999px;
          background: rgba(200,240,74,0.1);
          color: var(--accent);
          border: 1px solid rgba(200,240,74,0.2);
        }
        @media (max-width: 640px) {
          .sv-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.5rem;
          }
          .sv-side { align-self: flex-start; }
        }
      `}</style>

      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Servicios
      </p>
      <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Servicios de IA<br />para negocios
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        IA aplicada a problemas reales. Chico a chico, de Linares para acá.
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: '2.5rem',
      }}>
        {services.map((s, i) => (
          <ServiceRow key={s.title} index={`0${i + 1}`} revealIndex={i} {...s} />
        ))}
      </div>
    </section>
  )
}

function ServiceRow({ index, title, desc, badge, Icon, revealIndex }: Service & { index: string; revealIndex: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      data-reveal
      data-reveal-index={revealIndex}
      className={`sv-row${hovered ? ' is-active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sv-lead">
        <span className="sv-index">{index}</span>
        <span className="sv-iconbox">
          <Icon size={24} weight="Outline" color="var(--accent)" />
        </span>
      </div>
      <div className="sv-content">
        <h3 className="sv-title">{title}</h3>
        <p className="sv-desc">{desc}</p>
      </div>
      <div className="sv-side">
        <span className="sv-badge">{badge}</span>
      </div>
    </div>
  )
}
