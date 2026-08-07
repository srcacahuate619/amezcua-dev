'use client'

type Project = {
  num: string
  title: string
  desc: string
  tags: string[]
  link?: string
  linkLabel?: string
  link2?: string
  link2Label?: string
  dois?: { href: string; label: string }[]
  status?: string
}

const projects: Project[] = [
  {
    num: '01 · Estrella',
    title: 'MolDesign AI — Desktop',
    desc: 'Software que simula cómo las moléculas se unen a las proteínas del cuerpo para predecir —antes de gastar años en laboratorio— qué fármacos tienen más probabilidad de funcionar. Publicado en CERN/Zenodo con DOI.',
    tags: ['Tauri', 'FastAPI', 'Next.js', 'Machine Learning', 'Blockchain'],
    link: 'https://www.linkedin.com/posts/johan-amezcua-11816b1bb_drugdiscovery-computationalchemistry-cheminformatics-ugcPost-7490514699982295040-Xx1B/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMabOQBms_UGygmrJnACpBn11-hXeYzNnU',
    linkLabel: 'Ver publicación →',
  },
  {
    num: '02 · Logística',
    title: 'Motor de optimización de rutas con IA',
    desc: 'Reemplaza horas de planeación manual de rutas de reparto por segundos. Maneja flotas reales con restricciones físicas: peso máximo, altura de puentes y horarios de entrega.',
    tags: ['Python', 'IA', 'Mapbox', 'Optimización'],
    link: 'https://motor-logistico-ai.streamlit.app/',
    linkLabel: 'Ver demo →',
  },
  {
    num: '03 · Salud / Web3',
    title: 'BlackBox Medical',
    desc: 'Arquitectura blockchain para auditoría inmutable de dispositivos médicos implantables. Seguridad que cumple estándares internacionales, con dos publicaciones científicas con DOI.',
    tags: ['Blockchain', 'Solana', 'Seguridad', 'Salud'],
    link: 'https://blackbox-m1.vercel.app',
    linkLabel: 'Ver proyecto →',
    dois: [
      { href: 'https://zenodo.org/records/18668319', label: 'Publicación DOI #1 →' },
      { href: 'https://zenodo.org/records/18905940', label: 'Publicación DOI #2 →' },
    ],
  },
  {
    num: '04 · Videojuegos',
    title: 'RossyZombi',
    desc: 'Un shooter de zombies estilo Call of Duty que vive en UN SOLO archivo HTML: mapas generados proceduralmente, caja misteriosa, 6 perks, jefes y desmembramiento. Además es multijugador online: hasta 4 personas en co-op con servidor propio. Sin instalación, se juega en el navegador.',
    tags: ['Canvas 2D', 'Multiplayer', 'Web Audio', 'Node.js'],
    link: 'https://rossyzombie.vercel.app/',
    linkLabel: 'Jugar ahora →',
    link2: 'https://github.com/srcacahuate619/RossyZombi',
    link2Label: 'Repositorio →',
  },
  {
    num: '05 · Negocio local',
    title: 'POS para tienda de abarrotes — Desktop',
    desc: 'Sistema de punto de venta hecho a la medida para una tienda de abarrotes: cobros rápidos con teclado de billetes mexicanos, control de inventario, crédito y fiado, y cortes de caja conciliados. Funciona sin internet, en Windows.',
    tags: ['Python', 'FastAPI', 'PySide6', 'SQLite'],
    status: 'En desarrollo',
  },
  {
    num: '06 · E-commerce',
    title: "Alessandra's Joyera",
    desc: 'Tienda en línea completa para una joyería: catálogo con fichas de producto, carrito de compras, panel de administración para gestionar productos y pedidos por WhatsApp. Diseñada para que el dueño la administre solo.',
    tags: ['Next.js', 'Supabase', 'E-commerce', 'React'],
    link: 'https://alessandras-joyera.vercel.app/',
    linkLabel: 'Ver página →',
  },
  {
    num: '07 · Legal',
    title: 'Despacho de abogados — Web + plataforma',
    desc: 'Sitio web en producción para un despacho legal + plataforma privada de gestión de expedientes: cada abogado ve solo sus casos, asignación de expedientes entre el equipo, roles de consultor y descarga de documentos. Con inicio de sesión seguro.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Vercel'],
    link: 'https://despachoabogadoslinares1.vercel.app',
    linkLabel: 'Ver sitio en vivo →',
  },
]

export default function Projects() {
  return (
    <section id="proyectos" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Proyectos activos
      </p>
      <h2 data-letters style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Código que ya está<br />funcionando 
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Son sistemas activos resolviendo problemas reales hoy.
      </p>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: '4rem',
      }}>
        {projects.map((p, i) => (
          <ProjectItem key={p.num} revealIndex={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectItem({ num, title, desc, tags, link, linkLabel, link2, link2Label, dois, status, revealIndex }: Project & { revealIndex: number }) {
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
        <p style={{ fontFamily: 'var(--font-head)', fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
          {num}
        </p>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', maxWidth: 420, lineHeight: 1.7 }}>
          {desc}
        </p>
        {dois && (
          <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {dois.map(d => (
              <a key={d.href} href={d.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', width: 'fit-content' }}>{d.label}</a>
            ))}
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
        {link && linkLabel && (
          <a
            href={link} target="_blank" rel="noopener noreferrer"
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
            {linkLabel}
          </a>
        )}
        {link2 && link2Label && (
          <a
            href={link2} target="_blank" rel="noopener noreferrer"
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
            {link2Label}
          </a>
        )}
        {status && (
          <span style={{
            fontSize: '0.8rem', color: 'rgba(245,242,236,0.4)',
            border: '1px dashed rgba(245,242,236,0.2)', borderRadius: '999px',
            padding: '0.4rem 0.9rem', whiteSpace: 'nowrap',
          }}>
            {status}
          </span>
        )}
      </div>
    </div>
  )
}
