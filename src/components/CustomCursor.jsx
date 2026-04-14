// ─────────────────────────────────────────
//  CustomCursor — neon dot + lagging ring
// ─────────────────────────────────────────
import { useRef } from 'react'
import { useCustomCursor } from '../hooks/useCustomCursor'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor()
  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
