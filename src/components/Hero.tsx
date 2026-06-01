import { Link } from '@tanstack/react-router'
import graniteHero from '../assets/granite-hero.png'

const stats = [
  { value: '29', label: 'Years fabricating' },
  { value: '2,400+', label: 'Projects shipped' },
  { value: '±1mm', label: 'Tolerance guaranteed' },
  { value: '120', label: 'Slabs in stock' },
] as const

export default function Hero() {
  return (
    <section className="bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-20 w-full">
        {/* Two-column grid */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* Left column */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-border block" />
              Est. 1997 · Master Fabricators
            </p>

            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              Stone that
              <br />
              <span className="italic">outlives</span>
              <br />
              <span className="text-gold italic">trends.</span>
            </h1>

            <p className="text-muted-foreground mt-8 mb-10 max-w-md text-lg leading-relaxed">
              Premium granite surfaces quarried from the world's finest deposits, cut with sub-millimetre precision, and hand-finished to last generations.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                to="/slabs"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-[var(--radius)] font-semibold text-sm uppercase tracking-[0.15em] hover:-translate-y-0.5 hover:shadow-[var(--shadow-slab)] transition-all duration-300"
              >
                Explore Slabs
              </Link>
              <Link
                to="/quote"
                className="border border-border px-8 py-4 rounded-[var(--radius)] text-sm uppercase tracking-[0.15em] hover:border-primary/40 transition-all duration-300"
              >
                Book a showroom visit
              </Link>
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="hidden lg:block">
            <div className="aspect-[3/4] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow-slab)] relative">
              <img
                src={graniteHero}
                alt="Nero Quartz granite slab"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-6 right-6 glass-stone px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                VG-014 · Nero Quartz
              </span>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-b border-border py-8 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
