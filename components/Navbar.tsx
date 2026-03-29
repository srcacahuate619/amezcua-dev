'use client'

import { useState, useEffect } from 'react'

const WA_LINK =
  'https://wa.me/528211110863?text=Hola%20Johan%2C%20quiero%20un%20diagn%C3%B3stico%20gratis%20para%20mi%20equipo%20o%20negocio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.2rem 2rem',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
      background: scrolled ? 'rgba(14,14,14,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div style={{
        fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem',
        letterSpacing: '-0.03em',
      }}>
        Amezcua<span style={{ color: 'var(--accent)' }}>.</span>dev
      </div>

      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: 'rgba(245,242,236,0.6)' }}
           className="nav-links">
        {[['#servicios', 'Servicios'], ['#proyectos', 'Proyectos'], ['#contacto', 'Contacto']].map(([href, label]) => (
          <a key={href} href={href} style={{ transition: 'color 0.2s' }}
             onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
             onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,242,236,0.6)')}>
            {label}
          </a>
        ))}
      </div>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
         style={{
           background: 'var(--accent)', color: 'var(--black)',
           fontWeight: 500, fontSize: '0.875rem',
           padding: '0.5rem 1.25rem', borderRadius: '999px',
           transition: 'background 0.2s',
           whiteSpace: 'nowrap',
         }}
         onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-dark)'; (e.currentTarget as HTMLElement).style.color = 'var(--white)'; }}
         onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--black)'; }}>
        WhatsApp 
      </a>

      <style>{`
        @media (max-width: 640px) { .nav-links { display: none !important; } }
      `}</style>
    </nav>
  )
}
