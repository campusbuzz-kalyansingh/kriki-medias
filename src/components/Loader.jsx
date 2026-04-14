// ─────────────────────────────────────────
//  Loader — cinematic intro with neon
//  progress bar + particle canvas
// ─────────────────────────────────────────
import { useState, useEffect, useRef, useCallback } from 'react'
import { useParticleCanvas } from '../hooks/useParticleCanvas'
import { LOADER_MESSAGES } from '../data/siteData'
import styles from './Loader.module.css'

export default function Loader({ onComplete }) {
  const [progress,  setProgress]  = useState(0)
  const [msgIndex,  setMsgIndex]  = useState(0)
  const [msgVisible, setMsgVisible] = useState(true)
  const [exiting,   setExiting]   = useState(false)

  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef, { count: 65, linkDist: 125, speed: 0.24 })

  // Progress update with natural easing
  useEffect(() => {
    let prog = 0
    const tick = setInterval(() => {
      const speed =
        prog < 20 ? Math.random() * 12 + 8 :
        prog < 55 ? Math.random() * 6  + 3 :
        prog < 80 ? Math.random() * 4  + 2 :
                    Math.random() * 18 + 10

      prog = Math.min(prog + speed, 100)
      setProgress(Math.round(prog))

      if (prog >= 100) {
        clearInterval(tick)
        setTimeout(() => {
          setExiting(true)
          setTimeout(onComplete, 900)
        }, 400)
      }
    }, 115)
    return () => clearInterval(tick)
  }, [onComplete])

  // Status message cycling
  useEffect(() => {
    const ni =
      progress < 22 ? 0 :
      progress < 44 ? 1 :
      progress < 64 ? 2 :
      progress < 86 ? 3 : 4

    if (ni !== msgIndex) {
      setMsgVisible(false)
      setTimeout(() => {
        setMsgIndex(ni)
        setMsgVisible(true)
      }, 180)
    }
  }, [progress, msgIndex])

  return (
    <div className={`${styles.loader} ${exiting ? styles.exit : ''}`}>
      <div className={styles.scanlines} />
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.center}>
        {/* Hex logo mark */}
        <div className={styles.hexWrap}>
          <svg viewBox="0 0 80 80" fill="none" className={styles.hexRing}>
            <polygon
              points="40,4 73,22 73,58 40,76 7,58 7,22"
              stroke="url(#hexGrad)"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="hexGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00fff7" />
                <stop offset="1" stopColor="#7000ff" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.hexLetter}>K</span>
        </div>

        {/* Brand name */}
        <h1 className={styles.brand}>
          KRIK<em>I</em>
        </h1>
        <p className={styles.tagline}>Media · AI Video Studio</p>

        {/* Progress bar */}
        <div className={styles.trackWrap}>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.meta}>
            <span
              className={styles.status}
              style={{ opacity: msgVisible ? 1 : 0 }}
            >
              {LOADER_MESSAGES[msgIndex]}
            </span>
            <span className={styles.pct}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
