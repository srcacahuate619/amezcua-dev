'use client'

type Publication = {
  title: string
  desc: string
  doiHref: string
  doiLabel: string
  repoHref?: string
  repoLabel?: string
}

const publications: Publication[] = [
  {
    title: 'The Simplest Signal Wins',
    desc: 'Benchmark honesto de cribado virtual de fármacos: demuestra que un detector simple y transparente supera a métodos complejos. Resultados 100% reproducibles con el repositorio público.',
    doiHref: 'https://doi.org/10.5281/zenodo.21820343',
    doiLabel: 'Publicación DOI #1 →',
    repoHref: 'https://github.com/srcacahuate619/moldesign-ums-paper',
    repoLabel: 'Repositorio →',
  },
  {
    title: 'BlackBox Medical — Publicación #1',
    desc: 'Arquitectura blockchain para auditoría inmutable de dispositivos médicos implantables.',
    doiHref: 'https://zenodo.org/records/18668319',
    doiLabel: 'Publicación DOI #2 →',
  },
  {
    title: 'BlackBox Medical — Publicación #2',
    desc: 'Seguridad y trazabilidad para dispositivos médicos sobre blockchain, con estándares internacionales.',
    doiHref: 'https://zenodo.org/records/18905940',
    doiLabel: 'Publicación DOI #3  →',
  },
]

export default function Publications() {
  return (
    <section id="publicaciones" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Publicaciones
      </p>
      <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Publicaciones<br />científicas
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Investigación publicada con DOI en Zenodo (CERN). Código abierto y 100% reproducible.
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: '3.5rem',
      }}>
        {publications.map((p, i) => (
          <PublicationItem key={p.title} revealIndex={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function PublicationItem({ title, desc, doiHref, doiLabel, repoHref, repoLabel, revealIndex }: Publication & { revealIndex: number }) {
  return (
    <div
      data-reveal
      data-reveal-index={revealIndex}
      style={{
        padding: '0',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '2rem',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: 1, minWidth: 200 }}>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', maxWidth: 420, lineHeight: 1.7 }}>
          {desc}
        </p>
        <span style={{
          display: 'inline-block', marginTop: '1rem',
          fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase',
          padding: '0.25rem 0.7rem', borderRadius: '999px',
          background: 'rgba(200,240,74,0.1)', color: 'var(--accent)',
          border: '1px solid rgba(200,240,74,0.2)',
        }}>
          Zenodo · CERN
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
        <a
          href={doiHref} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.8rem', color: 'var(--accent)',
            border: '1px solid rgba(200,240,74,0.3)', borderRadius: '999px',
            padding: '0.4rem 0.9rem', whiteSpace: 'nowrap',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(200,240,74,0.1)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
        >
          {doiLabel}
        </a>
        {repoHref && repoLabel && (
          <a
            href={repoHref} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.8rem', color: 'rgba(245,242,236,0.6)',
              border: '1px solid var(--border)', borderRadius: '999px',
              padding: '0.4rem 0.9rem', whiteSpace: 'nowrap',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(245,242,236,0.05)'; el.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'rgba(245,242,236,0.6)'; }}
          >
            {repoLabel}
          </a>
        )}
      </div>
    </div>
  )
}
