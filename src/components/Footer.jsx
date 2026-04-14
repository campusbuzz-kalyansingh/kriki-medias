// ─────────────────────────────────────────
//  Footer
// ─────────────────────────────────────────
import { FOOTER_LINKS, SOCIAL_ICONS } from '../data/siteData'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            KRIKI<em> Media</em>
          </div>
          <p className={styles.desc}>
            Premium AI video ads that captivate audiences and drive real
            business results. Based in New York, NY.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <div className={styles.colHeading}>{heading}</div>
            {links.map((link) => (
              <div key={link} className={`${styles.link} footer-link`}>{link}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2024 KRIKI Media. All rights reserved.
        </div>
        <div className={styles.socials}>
          {SOCIAL_ICONS.map((icon, i) => (
            <span key={i} className={`${styles.socialIcon} social-icon`}>{icon}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}
