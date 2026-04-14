// ─────────────────────────────────────────
//  App — root layout, orchestrates all
//  sections and global behaviours
// ─────────────────────────────────────────
import { useState, useCallback } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import CustomCursor  from './components/CustomCursor'
import Loader        from './components/Loader'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Footer        from './components/Footer'
import StickyCTA     from './components/StickyCTA'
import {
  Clients,
  Services,
  Portfolio,
  Process,
  Testimonials,
  Pricing,
  CTA,
} from './components/Sections'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Fire scroll-reveal after loader completes
  useScrollReveal('.section', { threshold: 0.06 })

  const handleLoaderDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      {/* Neon cursor */}
      <CustomCursor />

      {/* Cinematic loading screen */}
      {!loaded && <Loader onComplete={handleLoaderDone} />}

      {/* Main site — fades in after loader */}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease' }}>
        <Navbar />

        <main>
          <Hero />
          <Clients />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>

        <Footer />
        <StickyCTA />
      </div>
    </>
  )
}
