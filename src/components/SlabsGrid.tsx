import { Link } from '@tanstack/react-router'
import Tilt3D from './Tilt3D'
import graniteCharcoal from '../assets/granite-charcoal.png'
import graniteWhite from '../assets/granite-white.png'
import graniteSlate from '../assets/granite-slate.png'
import graniteBeige from '../assets/granite-beige.png'

interface SlabsGridProps {
  showHeader?: boolean
}

const slabs = [
  { name: 'Nero Quartz', origin: 'Brazil · Polished', code: 'MN-014', image: graniteCharcoal },
  { name: 'Carrara Silver', origin: 'Italy · Honed', code: 'MN-027', image: graniteWhite },
  { name: 'Slate Pepper', origin: 'India · Leathered', code: 'MN-031', image: graniteSlate },
  { name: 'Saharan Gold', origin: 'Egypt · Polished', code: 'MN-042', image: graniteBeige },
] as const

export default function SlabsGrid({ showHeader = true }: SlabsGridProps) {
  return (
    <section className="py-32" style={{ background: 'var(--gradient-stone)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {showHeader && (
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
              Inventory
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
                The current <span className="text-gold italic">collection.</span>
              </h2>
              <Link
                to="/slabs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                View full catalogue{' '}
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slabs.map((slab) => (
            <Tilt3D key={slab.code}>
              <div className="relative aspect-[3/4] rounded-[var(--radius)] group preserve-3d">
                {/* Image container with overflow-hidden to allow zoom */}
                <div className="absolute inset-0 overflow-hidden rounded-[var(--radius)] pointer-events-none">
                  <img
                    src={slab.image}
                    alt={slab.name}
                    className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Code badge */}
                <div
                  className="absolute top-4 left-4 glass-stone px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] text-foreground/70"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  {slab.code}
                </div>
                {/* Bottom content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-[var(--radius)]"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <h3 className="text-white font-display text-xl font-bold">{slab.name}</h3>
                  <p className="text-white/60 text-xs uppercase tracking-[0.2em] mt-1">{slab.origin}</p>
                  <p className="text-white/70 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Request sample{' '}
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </p>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  )
}
