import { useEffect, useRef, useState } from 'react'
import logoImg from '../assets/logo.jpg'

/**
 * RVR Group Landing Hero — Full-viewport intro with Lord Venkateshwara
 * deity logo at center, 3D floating geometry, and scroll-triggered parallax.
 */
export default function LandingHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / rect.height))
        setScrollY(progress)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient pulse */}
        <div
          className="absolute inset-0 landing-radial-pulse"
          style={{
            opacity: 1 - scrollY * 1.5,
          }}
        />

        {/* Floating 3D geometric shapes */}
        <div
          className="landing-shape landing-shape-1"
          style={{
            transform: `translateY(${scrollY * -120}px) rotateX(${scrollY * 45}deg) rotateZ(${45 + scrollY * 90}deg)`,
          }}
        />
        <div
          className="landing-shape landing-shape-2"
          style={{
            transform: `translateY(${scrollY * -80}px) rotateY(${scrollY * 60}deg) rotateZ(${-30 + scrollY * 120}deg)`,
          }}
        />
        <div
          className="landing-shape landing-shape-3"
          style={{
            transform: `translateY(${scrollY * -200}px) rotateX(${scrollY * -30}deg) rotateZ(${15 + scrollY * -60}deg)`,
          }}
        />
        <div
          className="landing-shape landing-shape-4"
          style={{
            transform: `translateY(${scrollY * -150}px) rotateY(${scrollY * -45}deg) rotateZ(${60 + scrollY * 75}deg)`,
          }}
        />

        {/* Orbiting ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-border/20 animate-spin-slow"
            style={{
              transform: `rotateX(${60 + scrollY * 20}deg) rotateZ(${scrollY * 90}deg) scale(${1 + scrollY * 0.3})`,
              opacity: 0.3 - scrollY * 0.3,
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gold/10 animate-spin-reverse"
            style={{
              transform: `rotateX(${70 + scrollY * -15}deg) rotateZ(${scrollY * -60}deg) scale(${1 + scrollY * 0.2})`,
              opacity: 0.2 - scrollY * 0.2,
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: `translateY(${scrollY * -100}px) scale(${1 - scrollY * 0.15})`,
          opacity: 1 - scrollY * 2,
        }}
      >
        {/* Deity Logo — Lord Venkateshwara */}
        <div className="landing-fade-in-1 flex justify-center mb-8">
          <div className="deity-logo-container">
            {/* Outer glow ring */}
            <div className="deity-logo-glow" />
            {/* Logo image — full crest */}
            <img
              src={logoImg}
              alt="Venkateshwara Granites"
              className="deity-logo-img"
              style={{ borderRadius: '8px', objectFit: 'contain', border: 'none' }}
            />
          </div>
        </div>

        {/* Eyebrow */}
        <div className="landing-fade-in-2">
          <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-border block" />
            Established 1997
            <span className="h-px w-16 bg-border block" />
          </p>
        </div>

        {/* Main title with 3D entrance */}
        <div className="landing-fade-in-2 preserve-3d">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-[0.85]">
            <span className="block landing-title-line-1">RVR</span>
            <span className="block text-gold italic landing-title-line-2">Group</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="landing-fade-in-3">
          <p className="text-muted-foreground mt-10 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            A diversified enterprise in natural stone — from quarry to architecture.
            Granite blocks, slabs, and precision fabrication.
          </p>
        </div>

        {/* Divisions preview */}
        <div className="landing-fade-in-4 mt-14 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { label: 'Quarries', sub: 'Black Granite · Tan Brown' },
            { label: 'Factory', sub: 'CNC Fabrication' },
            { label: 'Granites', sub: 'Venkateshwara' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold block">
                {item.label}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60 block mt-1">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        style={{ opacity: 1 - scrollY * 4 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/60">
          Scroll to explore
        </span>
        <div className="landing-scroll-indicator">
          <div className="landing-scroll-dot" />
        </div>
      </div>
    </section>
  )
}
