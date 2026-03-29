'use client'

const reasons = [
  { title: 'Local en Linares', desc: 'Sin tiempos de espera de agencias foráneas. Atención presencial cuando la necesitas.' },
  { title: 'Proyectos en producción', desc: 'No teoría. Sistemas reales corriendo hoy, con usuarios reales y empresas reales.' },
  { title: 'IA aplicada al negocio', desc: 'El único en la región que combina soporte técnico con automatización inteligente de procesos.' },
  { title: 'Sin intermediarios', desc: 'Tratas directamente con quien va a hacer el trabajo. Comunicación clara, precio justo.' },
]

export function Why() {
  return (
    <section id="diferenciador" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        ¿Por qué yo?
      </p>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Rigor clínico<br />aplicado al software
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Mis competidores arreglan computadoras. Yo también — pero además puedo automatizar el proceso que más tiempo te quita.
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
    </section>
  )
}

const WA_LINK =
  'https://wa.me/528211110863?text=Hola%20Johan%2C%20quiero%20un%20diagn%C3%B3stico%20gratis%20para%20mi%20equipo%20o%20negocio'

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
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
            ¿Listo para<br />empezar?
          </h2>
          <p style={{ color: 'rgba(245,242,236,0.55)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Cuéntame qué necesita tu negocio. El diagnóstico es gratis, sin compromiso.
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
            Diagnóstico GRATIS
          </a>
          <p style={{ fontSize: '0.78rem', color: 'rgba(245,242,236,0.35)', textAlign: 'center' }}>
            821 111 0863
          </p>
        </div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.117 1.528 5.852L.057 23.986l6.284-1.646A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.006-1.369l-.36-.214-3.727.977.995-3.634-.235-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}
