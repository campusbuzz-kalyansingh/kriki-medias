// ─────────────────────────────────────────
//  StickyCTA — floating action button that
//  appears after scrolling 360px
// ─────────────────────────────────────────
import { useState, useEffect } from 'react'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`${styles.cta} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Start Now →
    </button>
  )
}
