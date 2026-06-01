import { useEffect, useRef, useState } from 'react'

import graniteCharcoal from '../assets/granite-charcoal.png'
import graniteWhite from '../assets/granite-white.png'
import graniteSlate from '../assets/granite-slate.png'
import graniteBeige from '../assets/granite-beige.png'

const blocks = [
  { image: graniteCharcoal, delay: 0, x: '8%', size: 80 },
  { image: graniteWhite, delay: 1.5, x: '28%', size: 60 },
  { image: graniteSlate, delay: 0.8, x: '52%', size: 90 },
  { image: graniteBeige, delay: 2, x: '75%', size: 70 },
  { image: graniteCharcoal, delay: 3, x: '92%', size: 55 },
  { image: graniteSlate, delay: 0.5, x: '40%', size: 50 },
  { image: graniteBeige, delay: 2.5, x: '15%', size: 65 },
  { image: graniteWhite, delay: 1, x: '65%', size: 75 },
]

export default function GraniteTransition() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowH = window.innerHeight
        const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height * 0.5)))
        setProgress(p)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Floating granite blocks */}
      <div className="absolute inset-0 pointer-events-none">
        {blocks.map((block, i) => {
          const floatOffset = Math.sin((progress * 4 + block.delay) * Math.PI) * 20
          const rotateVal = progress * 360 + block.delay * 45
          const yShift = (1 - progress) * 120 - floatOffset

          return (
            <div
              key={i}
              className="absolute granite-block-float"
              style={{
                left: block.x,
                top: '50%',
                width: block.size,
                height: block.size,
                transform: `
                  translateY(${yShift}px)
                  rotateZ(${rotateVal * 0.15}deg)
                  rotateX(${rotateVal * 0.1}deg)
                  scale(${0.6 + progress * 0.4})
                `,
                opacity: Math.min(1, progress * 2) * (0.3 + Math.sin((progress * 3 + block.delay) * Math.PI) * 0.15),
                animationDelay: `${block.delay}s`,
              }}
            >
              <img
                src={block.image}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{
                  filter: `blur(${Math.max(0, (1 - progress) * 2)}px)`,
                }}
              />
            </div>
          )
        })}
      </div>

      {/* Center content */}
      <div
        className="relative z-10 text-center px-6"
        style={{
          transform: `translateY(${30 - progress * 30}px)`,
          opacity: Math.min(1, progress * 1.8),
        }}
      >
        <div className="inline-flex items-center gap-6 mb-6">
          <span className="h-px w-16 bg-border block" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            Granite Division
          </span>
          <span className="h-px w-16 bg-border block" />
        </div>

        <h2
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
          style={{
            transform: `rotateX(${(1 - progress) * 8}deg) translateZ(${progress * 20}px)`,
          }}
        >
          Venkateshwara <span className="text-gold italic">Granites.</span>
        </h2>

        <p
          className="text-muted-foreground mt-6 text-base md:text-lg max-w-md mx-auto font-light"
          style={{
            transform: `translateY(${(1 - progress) * 15}px)`,
            opacity: Math.max(0, (progress - 0.3) * 1.6),
          }}
        >
          Premium granite blocks from our quarries in Telangana — cut, polished, and delivered to perfection.
        </p>
      </div>
    </section>
  )
}
