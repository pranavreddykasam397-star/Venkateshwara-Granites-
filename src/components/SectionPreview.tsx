import { useNavigate } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

const cards = [
  { num: '01', title: 'About', subtitle: 'Heritage & founder', to: '/about' as const },
  { num: '02', title: 'Blocks', subtitle: 'Bespoke block store', to: '/products' as const },
  { num: '03', title: 'Gallery', subtitle: 'Selected work', to: '/gallery' as const },
]

export default function SectionPreview() {
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [mousePos, setMousePos] = useState<Record<string, { x: number; y: number }>>({})
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionProgress, setSectionProgress] = useState(0)

  // Scroll-triggered entrance
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowH = window.innerHeight
        const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH * 0.6)))
        setSectionProgress(p)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (to: typeof cards[number]['to']) => {
    setActiveCard(to)
    setTimeout(() => {
      navigate({ to })
    }, 700)
  }

  const handleMouseMove = (e: React.MouseEvent, cardTo: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2  // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2   // -1 to 1
    setMousePos(prev => ({ ...prev, [cardTo]: { x, y } }))
  }

  const handleMouseLeave = (cardTo: string) => {
    setMousePos(prev => ({ ...prev, [cardTo]: { x: 0, y: 0 } }))
  }

  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  const ep = ease(sectionProgress)

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ background: 'var(--gradient-stone)' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-particle section-particle-1" />
        <div className="section-particle section-particle-2" />
        <div className="section-particle section-particle-3" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header with scroll entrance */}
        <div
          style={{
            transform: `translateY(${40 - ep * 40}px)`,
            opacity: ep,
          }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4 text-center">
            Explore
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-20 text-center">
            Navigate the <span className="text-gold italic">atelier.</span>
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          {cards.map((card, i) => {
            const isActive = activeCard === card.to
            const mp = mousePos[card.to] || { x: 0, y: 0 }
            const stagger = Math.max(0, ep - i * 0.1) / (1 - i * 0.1)
            const cardEp = ease(Math.min(1, stagger))

            return (
              <div
                key={card.num}
                style={{
                  perspective: '1000px',
                  transform: `translateY(${60 - cardEp * 60}px)`,
                  opacity: cardEp,
                }}
              >
                <button
                  type="button"
                  onClick={() => handleNavigate(card.to)}
                  onMouseMove={(e) => handleMouseMove(e, card.to)}
                  onMouseLeave={() => handleMouseLeave(card.to)}
                  className={`
                    nav-btn relative w-full px-8 py-7 rounded-xl
                    border border-border bg-card
                    flex items-center justify-between gap-6
                    group cursor-pointer overflow-hidden
                    focus:outline-none focus:ring-2 focus:ring-gold/30
                    ${isActive ? 'nav-btn-exit' : ''}
                  `}
                  style={{
                    transform: `
                      rotateX(${mp.y * -4}deg)
                      rotateY(${mp.x * 4}deg)
                      translateZ(${Math.abs(mp.x * mp.y) * 10}px)
                    `,
                    transition: isActive ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                  }}
                >
                  {/* Spotlight follow cursor */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(400px circle at ${(mp.x + 1) * 50}% ${(mp.y + 1) * 50}%, oklch(0.68 0.10 80 / 0.07), transparent 60%)`,
                    }}
                  />

                  {/* Bottom gold line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                  {/* Left side */}
                  <div className="flex items-center gap-6 relative z-10">
                    {/* Number badge */}
                    <div className="w-12 h-12 rounded-lg border border-border/80 flex items-center justify-center group-hover:border-gold/40 group-hover:shadow-[0_0_20px_oklch(0.68_0.10_80/0.15)] transition-all duration-500">
                      <span className="font-display text-sm font-bold text-gold">{card.num}</span>
                    </div>

                    {/* Text */}
                    <div className="text-left">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-foreground transition-colors tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground/50 mt-0.5 uppercase tracking-[0.15em]">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right side — Arrow */}
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-gold/70 transition-colors duration-300 hidden sm:inline">
                      Enter
                    </span>
                    <div className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 group-hover:shadow-[0_0_25px_oklch(0.68_0.10_80/0.12)] transition-all duration-500">
                      <svg
                        className="w-4 h-4 text-muted-foreground/50 group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
