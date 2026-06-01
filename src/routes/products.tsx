import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/PageHeader'
import Tilt3D from '../components/Tilt3D'

// Tile images
import zblackImg from '../assets/tile-zblack.png'
import tanbrownImg from '../assets/tile-tanbrown.jpg'
import safariblueImg from '../assets/tile-safariblue.jpg'
import mapleredImg from '../assets/tile-maplered.jpg'
import lightblackImg from '../assets/tile-lightblack.png'

const products = [
  {
    id: 'z-black',
    name: 'Z-Black Granite Blocks',
    image: zblackImg,
    origin: 'Brazil · Premium Polished',
    size: '600 × 600 × 15 mm',
    desc: 'Deep polished absolute black granite with micro-fine crystalline quartz highlights. Ideal for luxury residential spaces.',
  },
  {
    id: 'tan-brown',
    name: 'Tan Brown Granite Blocks',
    image: tanbrownImg,
    origin: 'India · Satin Honed',
    size: '600 × 600 × 15 mm',
    desc: 'Warm dark chocolate base textured with elegant copper, bronze, and tan quartz crystalline structures.',
  },
  {
    id: 'safari-blue',
    name: 'Safari Blue Granite Blocks',
    image: safariblueImg,
    origin: 'Brazil · High-Gloss Polished',
    size: '600 × 600 × 15 mm',
    desc: 'Extremely rare deep indigo-black base with shimmering sapphire crystals that catch the light elegantly.',
  },
  {
    id: 'maple-red',
    name: 'Maple Red Granite Blocks',
    image: mapleredImg,
    origin: 'India · Flamed & Brushed',
    size: '600 × 600 × 20 mm',
    desc: 'Rich crimson and burgundy biotite grains. Highly slip-resistant, designed for premium terrace and indoor pathways.',
  },
  {
    id: 'light-black',
    name: 'Light Black Granite Blocks',
    image: lightblackImg,
    origin: 'Egypt · Tactile Leathered',
    size: '600 × 600 × 15 mm',
    desc: 'Sophisticated matte charcoal base with silver-grey quartz flecks. Hand-brushed for an organic tactile relief.',
  },
] as const

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Granite Blocks — Venkateshwara Granites' },
      { name: 'description', content: 'Explore our curated collection of premium granite blocks. Absolute Z-black, tan brown, safari blue, maple red, and light black blocks.' },
      { property: 'og:title', content: 'Granite Blocks — Venkateshwara Granites' },
      { property: 'og:description', content: 'Curated collection of premium granite blocks from Venkateshwara Granites.' },
    ],
  }),
  component: BlocksStorePage,
})

function BlocksStorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Collection"
        title="Premium granite"
        accent="blocks."
      >
        Curated natural stone blocks sourced from fine quarries, hand-calibrated, and cut to architectural perfection.
      </PageHeader>

      <section className="py-24 relative" style={{ background: 'var(--gradient-stone)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <Tilt3D key={prod.id}>
                <div className="relative rounded-[var(--radius)] group preserve-3d shadow-[var(--shadow-card)] bg-card border border-border flex flex-col h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary pointer-events-none">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow preserve-3d">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                      {prod.origin}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-2">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      Nominal size: {prod.size}
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-4 leading-relaxed flex-grow">
                      {prod.desc}
                    </p>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
