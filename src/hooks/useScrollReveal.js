// ─────────────────────────────────────────
//  useScrollReveal — IntersectionObserver
//  that adds .visible to matched elements
// ─────────────────────────────────────────
import { useEffect } from 'react'

/**
 * @param {string} selector — CSS selector for elements to watch
 * @param {{ threshold?: number }} options
 */
export function useScrollReveal(selector = '.section', { threshold = 0.06 } = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, threshold])
}
