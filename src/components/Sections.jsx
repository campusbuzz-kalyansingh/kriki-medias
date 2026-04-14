// ─────────────────────────────────────────
//  Sections — Clients, Services, Portfolio,
//  Process, Testimonials, Pricing, CTA
// ─────────────────────────────────────────
import { useState, useEffect, useRef } from 'react'
import {
  CLIENT_BRANDS, SERVICES, PORTFOLIO_ITEMS,
  PROCESS_STEPS, TESTIMONIALS, PRICING_PLANS,
} from '../data/siteData'
import styles from './Sections.module.css'

/* ── CLIENTS ── */
export function Clients() {
  const doubled = [...CLIENT_BRANDS, ...CLIENT_BRANDS]
  return (
    <div className={`section section--dark ${styles.clientsSec}`} id="clients">
      <p className={styles.clientsLabel}>Trusted by world-class brands</p>
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {doubled.map((brand, i) => (
            <span key={i} className={styles.brand}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── SERVICES ── */
export function Services() {
  const handleTilt = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top)  / r.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`
  }
  const resetTilt = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section className="section" id="services">
      <div className={styles.sectionHeader}>
        <div>
          <div className="section-tag">What We Do</div>
          <h2 className="section-heading">
            Every Format.<br />
            <span className="neon-text">Every Platform.</span>
          </h2>
        </div>
        <button className="btn-ghost" style={{ padding: '11px 24px', fontSize: '13px' }}>
          See all →
        </button>
      </div>

      <div className={styles.servicesGrid}>
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className={`${styles.serviceCard} service-card`}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className={styles.serviceNum}>{s.num}</div>
            <div className={styles.serviceIcon}>{s.icon}</div>
            <h3 className={styles.serviceTitle}>{s.title}</h3>
            <p className={styles.serviceDesc}>{s.desc}</p>
            <span className={styles.serviceLink}>Explore ↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── PORTFOLIO ── */
export function Portfolio() {
  return (
    <section className="section section--dark" id="portfolio">
      <div className={styles.sectionHeader}>
        <div>
          <div className="section-tag">Our Work</div>
          <h2 className="section-heading">
            Results That<br />
            <span className="neon-text">Speak Volumes</span>
          </h2>
        </div>
        <button className="btn-ghost" style={{ padding: '11px 24px', fontSize: '13px' }}>
          Full portfolio →
        </button>
      </div>

      <div className={styles.portfolioGrid}>
        {PORTFOLIO_ITEMS.map((item) => (
          <div key={item.title} className={`${styles.portfolioItem} portfolio-item`}>
            <div className={styles.portBg} style={{ background: item.bg }} />
            <div className={styles.portScan} />

            <div className={styles.portPlay}>
              <div className={styles.portPlayBtn}>▶</div>
            </div>

            <div className={styles.portOverlay}>
              <div className={styles.portCat}>{item.cat}</div>
              <div className={styles.portTitle}>{item.title}</div>
              <div className={styles.portViews}>{item.views}</div>
            </div>

            <div className={styles.portBadge}>AI VIDEO</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── PROCESS ── */
export function Process() {
  return (
    <section className="section" id="process">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>How It Works</div>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>
          Idea to Viral<br />
          <span className="neon-text">in 48 Hours</span>
        </h2>
      </div>

      <div className={styles.processGrid}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.num} className={styles.processCard}>
            <div className={styles.processTopLine} />
            <div className={styles.processNum}>{step.num}</div>
            <h3 className={styles.processTitle}>{step.title}</h3>
            <p className={styles.processDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ── */
export function Testimonials() {
  const [idx,     setIdx]     = useState(0)
  const [fading,  setFading]  = useState(false)

  const goTo = (i) => {
    setFading(true)
    setTimeout(() => { setIdx(i); setFading(false) }, 340)
  }

  useEffect(() => {
    const iv = setInterval(() => {
      goTo((idx + 1) % TESTIMONIALS.length)
    }, 4800)
    return () => clearInterval(iv)
  }, [idx])

  const t = TESTIMONIALS[idx]

  return (
    <section className="section section--dark">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Client Stories</div>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>
          Brands Love<br />
          <span className="neon-text">What KRIKI Builds</span>
        </h2>
      </div>

      <div className={`${styles.testiBox} ${fading ? styles.testiBoxFading : ''}`}>
        <div className={styles.testiTopLine} />
        <span className={styles.testiQuote}>"</span>
        <p className={styles.testiText}>{t.text}</p>
        <div className={styles.testiAuthor}>
          <div className={styles.testiAvatar}>{t.initials}</div>
          <div>
            <div className={styles.testiName}>{t.name}</div>
            <div className={styles.testiRole}>{t.role}</div>
          </div>
        </div>
      </div>

      <div className={styles.dots}>
        {TESTIMONIALS.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}

/* ── PRICING ── */
export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>Pricing</div>
        <h2 className="section-heading" style={{ textAlign: 'center' }}>
          Invest in Content<br />
          <span className="neon-text">That Converts</span>
        </h2>
      </div>

      <div className={styles.pricingGrid}>
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.tier}
            className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardHot : ''}`}
          >
            {plan.popular && <div className={styles.popularTag}>MOST POPULAR</div>}
            <div className={styles.priceTier}>{plan.tier}</div>
            <div>
              <span className={styles.priceVal}>{plan.price}</span>
              {plan.period && <span className={styles.pricePer}>{plan.period}</span>}
            </div>
            <div className={styles.featureList}>
              {plan.features.map((f) => (
                <div key={f} className={styles.featureItem}>
                  <span className={styles.checkmark}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <button className={plan.popular ? 'btn-neon' : 'btn-ghost'} style={{ width: '100%', padding: '13px' }}>
              {plan.tier === 'Enterprise' ? 'Contact Us' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CTA ── */
export function CTA() {
  return (
    <div className={`section ${styles.ctaSec}`} id="contact">
      <div className={styles.ctaBox}>
        <div className={styles.ctaTopLine} />
        <div className={styles.ctaOrb1} />
        <div className={styles.ctaOrb2} />
        {/* Corner brackets */}
        <div className={`${styles.ctaBracket} ${styles.ctaTL}`} />
        <div className={`${styles.ctaBracket} ${styles.ctaTR}`} />
        <div className={`${styles.ctaBracket} ${styles.ctaBL}`} />
        <div className={`${styles.ctaBracket} ${styles.ctaBR}`} />

        <div className={styles.ctaInner}>
          <div className="section-tag" style={{ justifyContent: 'center', marginBottom: '18px' }}>
            Ready to Go Viral?
          </div>
          <h2 className={`${styles.ctaHeading} section-heading`}>
            Let's Build Your<br />
            <span className="neon-text">Next Viral AI Ad</span>
          </h2>
          <p className={styles.ctaSub}>
            Join 500+ brands that trust KRIKI Media to turn ideas into
            scroll-stopping, high-converting AI content.
          </p>
          <div className={styles.ctaBtns}>
            <button className="btn-neon" style={{ padding: '17px 44px', fontSize: '15px' }}>
              🚀 Start Your Project
            </button>
            <button className="btn-ghost" style={{ padding: '17px 44px', fontSize: '15px' }}>
              📞 Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
