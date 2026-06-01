import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import graniteHero from '../assets/granite-hero.png'

/**
 * GraniteReveal — Scroll-triggered 3D reveal for Venkateshwara Granites.
 * As the user scrolls past the RVR Group hero, this section dramatically
 * unfolds with a perspective tilt, scale-up, and fade-in.
 */
export default function GraniteReveal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowH = window.innerHeight
        // Progress: 0 when section just enters bottom, 1 when fully in view
        const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height * 0.3)))
        setProgress(p)
      }
    }

    if (sectionRef.current) observer.observe(sectionRef.current)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Eased progress for smoother animations
  const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  const ep = ease(progress)

  return (
    <div
      ref={sectionRef}
      className="relative py-8 md:py-16"
      style={{ perspective: '1800px' }}
    >
      {/* The 3D-transforming card container */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 transition-none"
        style={{
          transform: `
            rotateX(${12 - ep * 12}deg)
            translateY(${60 - ep * 60}px)
            scale(${0.88 + ep * 0.12})
          `,
          opacity: Math.min(1, ep * 1.5),
          transformOrigin: 'center top',
        }}
      >
        {/* Main card */}
        <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-slab)] border border-border bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[70vh]">
            {/* Left — Text Content */}
            <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 relative">
              {/* Decorative corner line */}
              <div
                className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold/30 rounded-tl-sm transition-all duration-1000"
                style={{
                  opacity: ep,
                  transform: `scale(${ep})`,
                }}
              />

              {/* Eyebrow */}
              <div
                className="transition-none"
                style={{
                  transform: `translateY(${30 - ep * 30}px)`,
                  opacity: Math.max(0, (ep - 0.2) * 1.5),
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.5em] text-gold font-semibold mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-gold/40 block" />
                  Granite Division
                </p>
              </div>

              {/* Title */}
              <div
                className="transition-none"
                style={{
                  transform: `translateY(${50 - ep * 50}px) rotateX(${5 - ep * 5}deg)`,
                  opacity: Math.max(0, (ep - 0.15) * 1.4),
                }}
              >
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                  Venkateshwara
                  <br />
                  <span className="text-gold italic">Granites.</span>
                </h2>
              </div>

              {/* Description */}
              <div
                className="transition-none"
                style={{
                  transform: `translateY(${40 - ep * 40}px)`,
                  opacity: Math.max(0, (ep - 0.3) * 1.6),
                }}
              >
                <p className="text-muted-foreground mt-8 text-base md:text-lg leading-relaxed max-w-lg font-light">
                  Premium granite surfaces quarried from the world's finest deposits, cut with sub-millimetre precision,
                  and hand-finished to last generations. From our quarries in Telangana to your architecture.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="transition-none"
                style={{
                  transform: `translateY(${35 - ep * 35}px)`,
                  opacity: Math.max(0, (ep - 0.4) * 1.8),
                }}
              >
                <div className="flex gap-4 flex-wrap mt-10">
                  <Link
                    to="/slabs"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-[var(--radius)] font-semibold text-sm uppercase tracking-[0.15em] hover:-translate-y-0.5 hover:shadow-[var(--shadow-slab)] transition-all duration-300"
                  >
                    Explore Slabs
                  </Link>
                  <Link
                    to="/products"
                    className="border border-border px-8 py-4 rounded-[var(--radius)] text-sm uppercase tracking-[0.15em] hover:border-primary/40 transition-all duration-300"
                  >
                    View Blocks
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div
                className="transition-none"
                style={{
                  transform: `translateY(${30 - ep * 30}px)`,
                  opacity: Math.max(0, (ep - 0.5) * 2),
                }}
              >
                <div className="border-t border-border py-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: '29', label: 'Years fabricating' },
                    { value: '2,400+', label: 'Projects shipped' },
                    { value: '±1mm', label: 'Tolerance guaranteed' },
                    { value: '120', label: 'Slabs in stock' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-2xl md:text-3xl font-bold">
                        {stat.value}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Hero Image with parallax */}
            <div className="relative hidden lg:block overflow-hidden">
              <div
                className="absolute inset-0 transition-none"
                style={{
                  transform: `scale(${1.1 - ep * 0.1}) translateY(${(1 - ep) * 30}px)`,
                }}
              >
                <img
                  src={graniteHero}
                  alt="Premium granite slab from Venkateshwara Granites"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-card/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <div
                className="absolute top-8 right-8 glass-stone px-4 py-2 rounded-full transition-none z-10"
                style={{
                  transform: `translateY(${20 - ep * 20}px)`,
                  opacity: Math.max(0, (ep - 0.6) * 3),
                }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                  VG-014 · Nero Quartz
                </span>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/30 rounded-br-sm transition-none z-10"
                style={{
                  opacity: Math.max(0, (ep - 0.5) * 2),
                  transform: `scale(${Math.max(0, (ep - 0.5) * 2)})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
