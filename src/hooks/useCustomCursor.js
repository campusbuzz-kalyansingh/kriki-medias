// ─────────────────────────────────────────
//  useCustomCursor — neon cursor dot + ring
// ─────────────────────────────────────────
import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0
    let rx = 0, ry = 0
    let animId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const animateRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      animId = requestAnimationFrame(animateRing)
    }

    // Hover expand on interactive elements
    const interactiveSelector = 'button, a, .nav-link, .social-icon, .portfolio-item, .service-card, .footer-link'

    const onEnter = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(2.4)'
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)'
      ring.style.borderColor = 'rgba(0,255,247,0.6)'
    }
    const onLeave = () => {
      dot.style.transform  = 'translate(-50%,-50%) scale(1)'
      ring.style.transform = 'translate(-50%,-50%) scale(1)'
      ring.style.borderColor = 'rgba(0,255,247,0.4)'
    }

    window.addEventListener('mousemove', onMove)
    animateRing()

    // Attach hover listeners (delegated)
    const attachHovers = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachHovers()
    // Re-attach after a tick so dynamic elements are included
    setTimeout(attachHovers, 500)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return { dotRef, ringRef }
}
