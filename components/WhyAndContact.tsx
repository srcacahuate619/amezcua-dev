'use client'

const reasons = [
  { title: 'Rigor clínico', desc: 'Tres años de formación en medicina aplicados al código: mismo enfoque de cero fallos, mismo diagnóstico de raíz. No entrego a medias.' },
  { title: 'Proyectos en producción', desc: 'Nada de teoría: sistemas reales corriendo hoy — un POS en una tienda, un despacho legal, un juego multijugador.' },
  { title: 'IA aplicada, no vendida', desc: "No te vendo 'IA' como palabra mágica: te muestro exactamente qué proceso automatizar y cuánto te ahorra." },
  { title: 'Sin intermediarios', desc: 'Tratas directo con quien hace el trabajo. Comunicación clara, precio justo, cero humo.' },
]

const credentials = [
  {
    title: 'Cisco — Soporte Técnico y Redes',
    desc: 'Certificación en soporte técnico y operación de redes, acreditada públicamente.',
    href: 'https://www.credly.com/badges/4a388978-e332-4aa0-9c05-866e95199f05/public_url',
    hrefLabel: 'Ver credencial →',
  },
  {
    title: 'IA aplicada (Nivel Intermedio) — INFOTEC',
    desc: 'Formación formal en IA aplicada, a nivel intermedio. Acreditada por el Centro de Investigación e Innovación en Tecnologías de la Información y Comunicación (INFOTEC).',
    href: 'https://www.epc.gob.mx/acreditacion/EDC-fjgvEC',
    hrefLabel: 'Ver constancia →',
  },
  {
    title: 'Curso Propedéutico — CPFIA',
    desc: 'Formación fundamental en IA del Centro Público de Formación en Inteligencia Artificial (TecNM · SEP · INFOTEC).',
    href: 'https://mooc.tecnm.mx/certificates/3885defc782049c08c60f1d6e3e7ddce',
    hrefLabel: 'Ver constancia →',
  },
  {
    title: 'Seminario "ABC de la Propiedad Industrial" — REDEPI',
    desc: 'Red para el Desarrollo de la Propiedad Industrial en Educación Superior.',
    folio: 'REDEPI-EDU-183',
  },
]

export function Why() {
  return (
    <section id="diferenciador" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        ¿Por qué yo?
      </p>
      <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Rigor clínico<br />aplicado al software
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Formación en medicina antes que software: el mismo rigor de diagnóstico y cero fallos, aplicado a que tu negocio funcione sin tropiezos.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
      }}>
        {reasons.map((r) => (
          <div
            key={r.title}
            style={{
              border: '1px solid var(--border)', borderRadius: 14, padding: '1.75rem',
              background: '#111', transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,240,74,0.3)'; el.style.background = '#181818'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.background = '#111'; }}
          >
            <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '0.5rem' }}>{r.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.5)' }}>{r.desc}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginTop: '2.5rem', marginBottom: '1rem' }}>Formación</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gridAutoRows: '1fr',
        gap: '1.5rem',
      }}>
        {credentials.map((c) => (
          <div
            key={c.title}
            style={{
              border: '1px solid var(--border)', borderRadius: 14, padding: '1.75rem',
              background: '#111', transition: 'border-color 0.2s, background 0.2s',
              position: 'relative',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,240,74,0.3)'; el.style.background = '#181818'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.background = '#111'; }}
          >
            <div style={{ paddingBottom: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, marginBottom: '0.5rem' }}>{c.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.5)' }}>{c.desc}</p>
            </div>
            {c.href && c.hrefLabel && (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  bottom: '1.75rem',
                  left: '1.75rem',
                  fontSize: '0.78rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
              >
                {c.hrefLabel}
              </a>
            )}
            {c.folio && (
              <p style={{
                position: 'absolute',
                bottom: '1.75rem',
                left: '1.75rem',
                margin: 0,
                fontSize: '0.75rem',
                color: 'rgba(245,242,236,0.35)',
              }}>
                Folio: <span style={{ fontFamily: 'var(--font-head)', color: 'rgba(245,242,236,0.5)' }}>{c.folio}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const WA_LINK =
  'https://wa.me/528211110863?text=Hola%20Johan%2C%20quiero%20automatizar%20un%20proceso%20de%20mi%20negocio'

export function Contact() {
  return (
    <section id="contacto" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid var(--border)', borderRadius: 20, padding: '3rem',
        background: '#111',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '2rem', flexWrap: 'wrap',
      }}>
        <div>
          <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            ¿Listo para<br className="br-desktop" />automatizar tu negocio?
          </h2>
          <p style={{ color: 'rgba(245,242,236,0.55)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Cuéntame qué proceso te quita más tiempo. Te digo con honestidad si la IA lo resuelve y cuánto cuesta.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: 200 }}>
          <a
            href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              background: '#25D366', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem',
              padding: '0.9rem 1.75rem', borderRadius: '999px',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1ebe5d'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#25D366'; el.style.transform = 'translateY(0)'; }}
          >
            <WaIcon />
            Hablemos por WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/johan-amezcua-11816b1bb/" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              background: '#0A66C2', color: '#fff',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.95rem',
              padding: '0.9rem 1.75rem', borderRadius: '999px',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#084d96'; el.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#0A66C2'; el.style.transform = 'translateY(0)'; }}
          >
            <LinkedInIcon />
            Conectar en LinkedIn
          </a>
          <p style={{ fontSize: '0.78rem', color: 'rgba(245,242,236,0.35)', textAlign: 'center' }}>
            821 111 0863
          </p>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.117 1.528 5.852L.057 23.986l6.284-1.646A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.006-1.369l-.36-.214-3.727.977.995-3.634-.235-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}
