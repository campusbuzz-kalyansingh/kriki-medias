// ─────────────────────────────────────────
//  Navbar — fixed, blur-on-scroll nav
// ─────────────────────────────────────────
import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/siteData'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        KRIKI<em> Media</em>
      </div>

      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className={`${styles.link} nav-link`}
            onClick={() => scrollTo(link)}
          >
            {link}
          </span>
        ))}
        <button className={`${styles.cta} btn-neon`}>
          Get Started →
        </button>
      </div>
    </nav>
  )
}
