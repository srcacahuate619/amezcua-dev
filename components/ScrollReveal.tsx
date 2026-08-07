'use client'

// ScrollReveal — IntersectionObserver-driven reveal animation for elements
// marked with [data-reveal]. Adds data-reveal-state="visible" when they enter
// the viewport, applying a per-index stagger delay via the --reveal-delay CSS var.
// Respects prefers-reduced-motion (marks all visible immediately, no observer).

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((el) => el.setAttribute('data-reveal-state', 'visible'))
      return
    }

    targets.forEach((el) => {
      const idx = parseInt(el.dataset.revealIndex ?? '0', 10) || 0
      el.style.setProperty('--reveal-delay', `${idx * 80}ms`)
    })

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal-state', 'visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}
