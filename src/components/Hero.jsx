// ─────────────────────────────────────────
//  Hero — full-screen cinematic intro
// ─────────────────────────────────────────
import { useState, useEffect, useRef } from 'react'
import { useParticleCanvas } from '../hooks/useParticleCanvas'
import { HERO_WORDS, HERO_STATS, HERO_FLOAT_CARDS } from '../data/siteData'
import styles from './Hero.module.css'

function FloatCard({ card }) {
  return (
    <div
      className={styles.floatCard}
      style={{
        ...card.style,
        animation: card.animation,
        animationDelay: card.delay || '0s',
      }}
    >
      <div className={styles.cardScreen}>
        <div className={styles.scanLine} />
        <span className={styles.cardIcon}>{card.icon}</span>
      </div>
      <div className={styles.cardTag}>{card.tag}</div>
      <div className={styles.cardTitle}>{card.title}</div>
      <div
        className={styles.cardStat}
        style={card.statNeon ? { color: 'var(--magenta)', textShadow: '0 0 6px var(--magenta)' } : {}}
      >
        {card.stat}
      </div>
    </div>
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef, { count: 58, linkDist: 112, speed: 0.2 })

  const [wordIdx, setWordIdx] = useState(0)
  const [wordFade, setWordFade] = useState(false)

  useEffect(() => {
    const iv = setInterval(() => {
      setWordFade(true)
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % HERO_WORDS.length)
        setWordFade(false)
      }, 440)
    }, 3000)
    return () => clearInterval(iv)
  }, [])

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.dotGrid} />

      {/* Neon glow orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Corner brackets */}
      <div className={`${styles.bracket} ${styles.bracketTL}`} />
      <div className={`${styles.bracket} ${styles.bracketTR}`} />

      {/* Main content */}
      <div className={styles.inner}>
        {/* Badge pill */}
        <div className={styles.pill}>
          <span className={styles.pillLed}>✦</span>
          <span className={styles.pillText}>AI-Powered Video Agency</span>
        </div>

        {/* Headline */}
        <h1 className={styles.h1}>
          We Craft<br />
          <span className={`${styles.neonWord} ${wordFade ? styles.fade : ''}`}>
            {HERO_WORDS[wordIdx]}
          </span>
          <br />That Convert.
        </h1>

        <p className={styles.sub}>
          KRIKI Media turns your brand vision into cinematic AI video ads that
          stop the scroll, spark emotion, and drive real results — in 48 hours.
        </p>

        {/* CTAs */}
        <div className={styles.btns}>
          <button className="btn-neon">Start Your Campaign →</button>
          <button className="btn-ghost">▶ View Our Work</button>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {HERO_STATS.map(({ value, suffix, label }) => (
            <div key={label}>
              <div className={styles.statVal}>
                {value}<span>{suffix}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating video preview cards */}
      {HERO_FLOAT_CARDS.map((card) => (
        <FloatCard key={card.title} card={card} />
      ))}

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollBar} />
      </div>
    </section>
  )
}
