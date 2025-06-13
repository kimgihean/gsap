import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SVGLogo() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!pathRef.current) return

    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: 300, strokeDashoffset: 300 },
      { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
    )
  }, [])

  return (
    <svg width="120" height="120" viewBox="0 0 100 100">
      <path
        ref={pathRef}
        d="M10,90 Q50,10 90,90"
        stroke="#3b82f6"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  )
}
