'use client'

import Link from 'next/link'

const WA_LINK =
  'https://wa.me/528211110863?text=Hola%20Johan%2C%20quiero%20un%20diagn%C3%B3stico%20gratis%20para%20mi%20equipo%20o%20negocio'

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      maxWidth: '1000px', margin: '0 auto',
    }}>
      {/* Location tag */}
      <div className="animate-fade-up-d1" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.08em',
        color: 'var(--accent)', textTransform: 'uppercase',
        border: '1px solid rgba(200,240,74,0.3)',
        padding: '0.35rem 0.9rem', borderRadius: '999px',
        marginBottom: '2rem', width: 'fit-content',
      }}>
        <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', display: 'block', animation: 'pulse-dot 2s infinite' }} />
        Linares, Nuevo León · Disponible ahora
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up-d2" style={{
        fontFamily: 'var(--font-head)',
        fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.04em',
        marginBottom: '1rem',
      }}>
        Haz que tu computadora<br />
        y tu negocio trabajen<br />
        <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>más rápido, sin complicaciones.</em>
      </h1>

      {/* Hook line */}
      <p className="animate-fade-up-d3" style={{
        fontSize: '1.05rem',
        color: 'rgba(200,240,74,0.75)',
        fontStyle: 'italic',
        marginBottom: '1rem',
        maxWidth: '540px',
      }}>
        ¿Tu computadora está lenta o pierdes tiempo haciendo todo manualmente en tu negocio?
      </p>

      {/* Subtitle */}
      <p className="animate-fade-up-d3" style={{
        fontSize: '1.05rem',
        color: 'rgba(245,242,236,0.6)',
        maxWidth: '520px',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
      }}>
        Soporte técnico, mantenimiento de equipos y soluciones para mejorar la forma en que trabajas en tu negocio. Sin agencias, sin intermediarios — tratas directamente con quien hace el trabajo.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up-d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
           style={{
             display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
             background: 'var(--accent)', color: 'var(--black)',
             fontWeight: 600, fontFamily: 'var(--font-body)',
             padding: '0.9rem 1.85rem', borderRadius: '999px',
             fontSize: '1rem', transition: 'background 0.2s, transform 0.15s',
           }}
           onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent-dark)'; el.style.color = 'var(--white)'; el.style.transform = 'translateY(-2px)'; }}
           onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--accent)'; el.style.color = 'var(--black)'; el.style.transform = 'translateY(0)'; }}>
          <WaIcon />
          Diagnóstico GRATIS por WhatsApp
        </a>
        <a href="#faq"
           style={{
             display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
             border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(245,242,236,0.7)',
             fontFamily: 'var(--font-body)',
             padding: '0.9rem 1.85rem', borderRadius: '999px',
             fontSize: '1rem', transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
           }}
           onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--accent)'; el.style.color = 'var(--accent)'; el.style.transform = 'translateY(-2px)'; }}
           onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.color = 'rgba(245,242,236,0.7)'; el.style.transform = 'translateY(0)'; }}>
          Preguntas Frecuentes →
        </a>
      </div>

      {/* Stats */}
      <div className="animate-fade-up-d5" style={{
        display: 'flex', gap: '3rem', marginTop: '4rem',
        paddingTop: '2rem', borderTop: '1px solid var(--border)',
        flexWrap: 'wrap',
      }}>
        {[
          { num: '2', label: 'Proyectos en producción activa' },
          { num: '2', label: 'Publicaciones científicas con DOI' },
          { num: '60s', label: 'vs 2 hrs de proceso manual automatizado' },
        ].map(({ num, label }) => (
          <div key={label}>
            <span style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', display: 'block' }}>{num}</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.45)' }}>{label}</span>
          </div>
        ))}
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
