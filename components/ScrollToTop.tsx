'use client'

import { useEffect } from 'react'

/**
 * ScrollToTop — al cargar la página (o refrescar), quita cualquier hash
 * del URL (p. ej. #servicios) y restaura la posición al inicio, de forma
 * instantánea (sin animación smooth). Evita que el navegador reviva el
 * scroll de una ancla previa al refrescar.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      )
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return null
}
