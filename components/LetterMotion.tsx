'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * LetterMotion — reveal animado de letras para encabezados marcados con
 * `data-letters`. Divide el texto en spans por carácter y los anima
 * (y + opacity con stagger) cuando el elemento entra al viewport.
 *
 * - Respeta `prefers-reduced-motion: reduce` (deja el texto estático).
 * - Velocidad configurable por elemento: `data-letters-speed="0.012"`.
 * - Preserva la estructura HTML interna (em, br, enlaces).
 * - StrictMode-safe: sin guard de "ya corrió" — el split se rehace en el
 *   segundo montaje tras el cleanup (ctx.revert()).
 */
export default function LetterMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-letters]')
    )
    if (!targets.length) return

    const ctx = gsap.context(() => {
      targets.forEach((el) => {
        // Envolver cada carácter de cada nodo de texto en un span
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
        const textNodes: Text[] = []
        while (walker.nextNode()) textNodes.push(walker.currentNode as Text)

        textNodes.forEach((node) => {
          const text = node.nodeValue ?? ''
          if (!text.trim()) return
          const frag = document.createDocumentFragment()
          for (const ch of text) {
            const span = document.createElement('span')
            span.textContent = ch === ' ' ? '\u00A0' : ch
            span.style.display = 'inline-block'
            span.style.willChange = 'transform, opacity'
            span.dataset.ch = 'true'
            frag.appendChild(span)
          }
          node.parentNode?.replaceChild(frag, node)
        })

        const chars = Array.from(
          el.querySelectorAll<HTMLElement>('span[data-ch]')
        )
        if (!chars.length) return

        const speed = parseFloat(el.dataset.lettersSpeed ?? '0.02')

        gsap.fromTo(
          chars,
          { y: '0.4em', opacity: 0 },
          {
            y: '0em',
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            stagger: { each: speed, from: 'start' },
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
