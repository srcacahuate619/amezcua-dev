'use client'

const projects = [
  {
    num: '01 · Logística',
    title: 'Motor de optimización de rutas con IA',
    desc: 'Reemplaza 2 horas de planeación manual por 60 segundos. Maneja flotas mixtas con restricciones físicas reales: peso máximo, altura de puentes y ventanas de tiempo.',
    tags: ['Python', 'Claude API', 'Mapbox', 'OR-Tools', 'Streamlit'],
    link: 'https://motor-logistico-ai.streamlit.app/',
    linkLabel: 'Ver demo →',
  },
  {
    num: '02 · HealthTech / Web3',
    title: 'BlackBox Medical — Seguridad para dispositivos médicos',
    desc: 'Arquitectura blockchain en Solana para auditoría inmutable de dispositivos implantables. Cumplimiento FDA Section 524B. Dos publicaciones científicas con DOI en Zenodo/CERN:',
    doiText1: 'https://zenodo.org/records/18668319',
    doiText2: 'https://zenodo.org/records/18905940',
    tags: ['Rust', 'Solana', 'Next.js', 'HIPAA', 'TypeScript'],
    link: 'https://blackbox-m1.vercel.app',
    linkLabel: 'Ver proyecto →',
    doi1: 'https://zenodo.org/records/18668319',
    doi1Label: 'Publicación DOI #1 →',
    doi2: 'https://zenodo.org/records/18905940',
    doi2Label: 'Publicación DOI #2 →',
   },
]

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Proyectos activos
      </p>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Código que ya está<br />funcionando 
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Son sistemas activos resolviendo problemas reales hoy.
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: '1px',
        background: 'var(--border)', border: '1px solid var(--border)',
        borderRadius: '16px', overflow: 'hidden',
      }}>
        {projects.map((p) => (
          <ProjectItem key={p.num} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectItem({ num, title, desc, tags, link, linkLabel, doiText1, doiText2, }: typeof projects[0]) {
  return (
    <div
      style={{
        background: '#111', padding: '2rem',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', gap: '2rem',
        transition: 'background 0.2s', flexWrap: 'wrap',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#181818')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#111')}
    >
      <div style={{ flex: 1, minWidth: 200 }}>
        <p style={{ fontFamily: 'var(--font-head)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
          {num}
        </p>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', maxWidth: 420 }}>
          {desc}
        </p>
        {doiText1 && (
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', marginTop: '0.5rem' }}>
        <a href={doiText1} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{doiText1}</a>
        {doiText2 && <><br /><a href={doiText2} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{doiText2}</a></>}
        </p>
     )}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.72rem', padding: '0.2rem 0.6rem',
              border: '1px solid var(--border)', borderRadius: '999px',
              color: 'rgba(245,242,236,0.4)',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={link} target="_blank" rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.8rem', color: 'var(--accent)',
          border: '1px solid rgba(200,240,74,0.3)', borderRadius: '999px',
          padding: '0.4rem 0.9rem', whiteSpace: 'nowrap', alignSelf: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(200,240,74,0.1)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
      >
        {linkLabel}
      </a>
    </div>
  )
}
