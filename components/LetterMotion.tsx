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

          // Agrupa las letras por palabra en un span contenedor con
          // `display: inline-block` + `white-space: nowrap`. El navegador
          // puede quebrar ENTRE palabras (entre contenedores) pero nunca
          // DENTRO de una palabra. Esto evita que en viewport angosto el
          // wrap rompa "mano" en "m / ano" — la palabra queda indivisible.
          // Los spans de cada letra suelta siguen animándose igual (GSAP
          // opera sobre `span[data-ch]` sin importar su contenedor padre).
          let wordSpan: HTMLSpanElement | null = null
          const openWord = () => {
            wordSpan = document.createElement('span')
            wordSpan.style.display = 'inline-block'
            wordSpan.style.whiteSpace = 'nowrap'
          }
          const closeWord = () => {
            if (wordSpan) {
              frag.appendChild(wordSpan)
              wordSpan = null
            }
          }

          for (const ch of text) {
            if (ch === ' ' || ch === '\u00A0') {
              // El espacio cierra la palabra actual y queda como un
              // separador rompible en el flujo (texto plano, no inline-block).
              closeWord()
              frag.appendChild(document.createTextNode('\u00A0'))
            } else {
              if (!wordSpan) openWord()
              const current = wordSpan!
              const letterSpan = document.createElement('span')
              letterSpan.textContent = ch
              letterSpan.style.display = 'inline-block'
              letterSpan.style.willChange = 'transform, opacity'
              letterSpan.dataset.ch = 'true'
              current.appendChild(letterSpan)
            }
          }
          closeWord()
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
