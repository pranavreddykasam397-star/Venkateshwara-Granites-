import { Link } from '@tanstack/react-router'

const orbitLinks = [
  {
    label: 'About',
    to: '/about',
    position: 'left-1/2 -translate-x-1/2 -top-14 md:-top-16',
  },
  {
    label: 'Blocks',
    to: '/products',
    position: 'top-1/2 -translate-y-1/2 -right-14 md:-right-16',
  },
  {
    label: 'Slabs',
    to: '/slabs',
    position: 'left-1/2 -translate-x-1/2 -bottom-14 md:-bottom-16',
  },
  {
    label: 'Projects',
    to: '/gallery',
    position: 'top-1/2 -translate-y-1/2 -left-14 md:-left-16',
  },
] as const

export default function InfoOrbit() {
  return (
    <section id="process" className="py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
          The Craft
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-16">
          Quarry to <span className="text-gold italic">countertop.</span>
        </h2>

        {/* Orbit container */}
        <div className="flex items-center justify-center">
          <div className="relative max-w-2xl w-full aspect-square perspective-1200">
            {/* Rotating rings */}
            <div className="absolute inset-4 rounded-full border border-border/30 animate-spin-slow" />
            <div className="absolute inset-12 rounded-full border border-border/30 animate-spin-reverse" />
            <div className="absolute inset-20 rounded-full border border-border/30 animate-spin-slow" />

            {/* Center medallion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="bg-[var(--gradient-stone)] rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center animate-parallax-float"
              >
                <span className="text-gold font-display text-sm font-bold tracking-wider">
                  VENKATESHWARA
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
                  GRANITES
                </span>
              </div>
            </div>

            {/* Orbit buttons */}
            {orbitLinks.map((item) => (
              <div key={item.label} className={`absolute ${item.position}`}>
                <Link to={item.to} className="group block">
                  <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-card border border-border shadow-sm flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:border-primary/60 transition-all duration-500">
                    {/* Shimmer overlay on hover */}
                    <div className="shimmer-gold absolute inset-0 rounded-full mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground group-hover:text-foreground transition-colors relative z-10">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
