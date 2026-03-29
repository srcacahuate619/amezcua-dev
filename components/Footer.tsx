export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
      maxWidth: '1000px', margin: '0 auto',
    }}>
      <p style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.3)' }}>
        © 2026 Johan Amezcua · Linares, Nuevo León
      </p>
      <p style={{ fontSize: '0.8rem', color: 'rgba(245,242,236,0.3)' }}>
        Hecho con <span style={{ color: 'var(--accent)' }}>♥</span> en casa
      </p>
    </footer>
  )
}
