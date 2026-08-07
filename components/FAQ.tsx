'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Y si se rompe, quién lo arregla?',
    a: 'Yo. No vendí el sistema y desaparecí: doy soporte directo por WhatsApp y, si algo falla, lo reviso yo mismo. Para mí un bug no es "normal": es una falla que hay que encontrar de raíz.',
  },
  {
    q: '¿Tengo que cambiar mis computadoras?',
    a: 'No. La mayoría de mis sistemas corren en lo que ya tienes. Si necesitas algo más (más memoria, una computadora específica), te lo digo antes de empezar, con el costo claro.',
  },
  {
    q: '¿Mis datos salen de Linares?',
    a: 'Depende. Para información sensible (despachos, inventarios, inventos, datos de clientes) uso IA local: corre en tu propia computadora y nada viaja a la nube. Para tareas donde conviene un modelo pesado, usamos IA en la nube. Tú sabes en cada caso dónde vive tu información.',
  },
  {
    q: '¿Y si te vas de Linares?',
    a: 'Vivo acá, mis clientes están acá. Pero además el sistema es tuyo: el código queda documentado y puedes contratar a otro dev si un día quieres. No te amarro a mí.',
  },
  {
    q: '¿Cuánto cuesta un proyecto de IA?',
    a: 'Depende del alcance, pero siempre te doy una cotización clara ANTES de empezar, sin letras chiquitas. Hay proyectos desde una página web hasta sistemas completos. Y te digo con honestidad si la IA no es la solución — porque a veces no lo es.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'Para nada. Tú conoces tu negocio, yo conozco la tecnología. Te explico cada decisión en español, no en inglés técnico. Y si algo no te hace sentido, lo repito hasta que sí.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Preguntas frecuentes
      </p>
      <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '3rem' }}>
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