// ─────────────────────────────────────────
//  useParticleCanvas — draws neon particle
//  network on a <canvas> ref
// ─────────────────────────────────────────
import { useEffect } from 'react'

const COLORS = [
  'rgba(0,255,247,0.50)',
  'rgba(255,0,234,0.40)',
  'rgba(112,0,255,0.40)',
]

/**
 * @param {React.RefObject} canvasRef
 * @param {{ count?: number, linkDist?: number, speed?: number }} options
 */
export function useParticleCanvas(canvasRef, { count = 60, linkDist = 120, speed = 0.22 } = {}) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth  || window.innerWidth
      canvas.height = canvas.offsetHeight || window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: count }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r:  Math.random() * 0.9 + 0.3,
      colorIdx: Math.floor(Math.random() * 3),
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = COLORS[p.colorIdx]
        ctx.fill()

        // Draw links
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < linkDist) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,255,247,${0.07 * (1 - dist / linkDist)})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [canvasRef, count, linkDist, speed])
}
