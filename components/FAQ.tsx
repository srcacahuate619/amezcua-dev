'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Vienes a domicilio en Linares?',
    a: 'Sí, atiendo a domicilio en Linares y municipios cercanos. También puedes traer tu equipo si lo prefieres.',
  },
  {
    q: '¿Cuánto tarda una reparación?',
    a: 'Depende del problema, pero la mayoría de reparaciones comunes se resuelven el mismo día o en 48 horas. Te doy un estimado desde el diagnóstico.',
  },
  {
    q: '¿El diagnóstico realmente es gratis?',
    a: 'Sí, completamente gratis y sin compromiso. Si no hay solución que te convenga, no pagas nada.',
  },
  {
    q: '¿Trabajas con empresas o solo con personas?',
    a: 'Con ambos. Atiendo desde una computadora personal hasta negocios que necesitan automatizar procesos completos.',
  },
  {
    q: '¿Qué pasa si el problema regresa después de la reparación?',
    a: 'Todo mi trabajo tiene garantía. Si el mismo problema regresa, lo reviso sin costo adicional.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Preguntas frecuentes
      </p>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '3rem' }}>
        Lo que la gente<br />suele preguntar
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{ background: open === i ? '#181818' : '#111', transition: 'background 0.2s' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1.5rem 2rem', background: 'transparent', border: 'none', cursor: 'pointer',
                color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500,
                textAlign: 'left', gap: '1rem',
              }}
            >
              {faq.q}
              <span style={{ color: 'var(--accent)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0, transition: 'transform 0.2s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </button>
            {open === i && (
              <p style={{ padding: '0 2rem 1.5rem', fontSize: '0.9rem', color: 'rgba(245,242,236,0.6)', lineHeight: 1.7 }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}