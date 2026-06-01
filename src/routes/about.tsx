import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/PageHeader'
import Tilt3D from '../components/Tilt3D'
import founderImg from '../assets/founder.jpg'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'Our Story — Venkateshwara Granites' },
      { name: 'description', content: 'Founded in 1997 by R. Venkateshwar Rao, RVR Groups is a master fabricator of premium granite surfaces. Learn about our heritage and commitment to stonework.' },
      { property: 'og:title', content: 'Our Story — Venkateshwara Granites' },
      { property: 'og:description', content: 'A legacy of natural stone fabrication founded by R. Venkateshwar Rao in 1997.' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Heritage"
        title="Established in"
        accent="1997."
      >
        A legacy of natural stone craftsmanship, hand-selected materials, and architectural precision under the stewardship of RVR Groups.
      </PageHeader>

      <section className="py-32" style={{ background: 'var(--gradient-stone)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            {/* Left Column - Founder Portrait */}
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <Tilt3D>
                  <div className="relative aspect-[4/5] rounded-[var(--radius)] group preserve-3d shadow-[var(--shadow-slab)] bg-card border border-border">
                    {/* Image container */}
                    <div className="absolute inset-0 overflow-hidden rounded-[var(--radius)] pointer-events-none">
                      <img
                        src={founderImg}
                        alt="R. Venkateshwar Rao"
                        className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                      />
                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Overlay Label */}
                    <div
                      className="absolute bottom-6 left-6 right-6 glass-stone p-4 rounded-[var(--radius)]"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <h4 className="font-display text-base font-bold text-foreground">
                        R. Venkateshwar Rao
                      </h4>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gold font-semibold mt-1">
                        Founder and Chairman of RVR Groups
                      </p>
                    </div>
                  </div>
                </Tilt3D>
              </div>
            </div>

            {/* Right Column - Heritage Text */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  The Leader
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Uncompromising vision.
                  <br />
                  <span className="text-gold italic">Generations</span> of excellence.
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                <p>
                  Founded in <span className="font-semibold text-foreground">1997</span> by <span className="font-semibold text-foreground">R. Venkateshwar Rao</span>, RVR Groups began with a singular focus: to elevate the fabrication and supply of natural stone into a true architectural art form.
                </p>
                <p>
                  Over the course of nearly three decades, we have steadily grown from a local workshop into a premier provider of exquisite granite surfaces. Under the guidance of our Founder and Chairman, RVR Groups has set new industry standards by combining sub-millimetre digital surveying, state-of-the-art diamond CNC cutting, and a master craftsman's touch.
                </p>
                <p>
                  Every granite slab in our collection is personally inspected and hand-selected from the world's most stable and beautiful quarries. This rigorous eye for detail ensures that our surfaces possess the vein structure, color consistency, and structural resilience to outlast changing trends and span generations.
                </p>
              </div>

              {/* Stats / Credentials Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground">Established</h4>
                  <p className="font-display text-xl font-bold text-foreground mt-1">1997</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground">Headquarters</h4>
                  <p className="font-display text-xl font-bold text-foreground mt-1">Warangal, T.S.</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-muted-foreground">Fabrication Focus</h4>
                  <p className="font-display text-xl font-bold text-foreground mt-1">±1mm Tolerance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
