'use client'

const services = [
  {
    icon: '🖥️',
    title: 'Soporte técnico',
    desc: 'Diagnóstico, reparación y ensamblado de computadoras. Atención presencial en Linares.',
    badge: 'Rápido · Local',
  },
  {
    icon: '⚙️',
    title: 'Mantenimiento preventivo',
    desc: 'Limpieza de hardware, actualización de sistemas, respaldos y seguridad para que tu equipo no falle en el peor momento.',
    badge: 'Preventivo · Garantía',
  },
  {
    icon: '🌐',
    title: 'Páginas web y tiendas',
    desc: 'Sitios web profesionales, landing pages y tiendas en línea. Diseño moderno, rápido y con dominio propio.',
    badge: 'Next.js · Vercel',
  },
  {
    icon: '🤖',
    title: 'Automatización con IA',
    desc: 'Convierte tareas manuales repetitivas en procesos automáticos. Reportes, inventario, cotizaciones, atención al cliente.',
    badge: 'Diferenciador clave',
  },
  {
    icon: '📊',
    title: 'Sistemas a la medida',
    desc: 'Software hecho para tu negocio: control de inventario, citas, cotizadores, dashboards. Sin pagar licencias eternas.',
    badge: 'Python · TypeScript',
  },
  {
    icon: '🔒',
    title: 'Seguridad y redes',
    desc: 'Configuración de redes seguras, respaldo en la nube, recuperación de datos y protección de información del negocio.',
    badge: 'Local · Confiable',
  },
]

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 500, marginBottom: '1rem' }}>
        Servicios
      </p>
      <h2 style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
        Lo que puedo hacer<br />por ti
      </h2>
      <p style={{ color: 'rgba(245,242,236,0.6)', maxWidth: '500px', marginBottom: '3rem' }}>
        Desde una computadora que no enciende hasta un sistema que automatiza toda tu operación.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1px',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'var(--border)',
      }}>
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, desc, badge }: typeof services[0]) {
  return (
    <div
      style={{ background: '#111', padding: '2rem', transition: 'background 0.2s' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#181818')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#111')}
    >
      <div style={{
        width: 44, height: 44,
        border: '1px solid rgba(200,240,74,0.3)', borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem', fontSize: '1.2rem',
      }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'rgba(245,242,236,0.55)', lineHeight: 1.6 }}>
        {desc}
      </p>
      <span style={{
        display: 'inline-block', marginTop: '1rem',
        fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase',
        padding: '0.25rem 0.7rem', borderRadius: '999px',
        background: 'rgba(200,240,74,0.1)', color: 'var(--accent)',
        border: '1px solid rgba(200,240,74,0.2)',
      }}>
        {badge}
      </span>
    </div>
  )
}
