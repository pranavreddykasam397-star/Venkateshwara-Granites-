import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import Tilt3D from './Tilt3D'

// Import gallery assets
import projectKitchen from '../assets/project-kitchen.png'
import projectBathroom from '../assets/project-bathroom.png'

import quarryBlocks1 from '../assets/quarry-blocks-1.jpg'
import quarryExcavator1 from '../assets/quarry-excavator-1.png'
import quarryInspection from '../assets/quarry-inspection.jpg'
import quarryPit1 from '../assets/quarry-pit-1.png'
import quarryPit2 from '../assets/quarry-pit-2.jpg'
import quarryBlocks2 from '../assets/quarry-blocks-2.jpg'
import quarryLayout from '../assets/quarry-layout.png'
import quarryMachinery from '../assets/quarry-machinery.jpg'

interface GalleryItem {
  id: string
  title: string
  subtitle: string
  category: 'quarry' | 'operations' | 'installations'
  image: string
  description: string
  aspectRatio: 'aspect-square' | 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[4/3]'
  gridSpan?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 'quarry-layout',
    title: 'Warangal Quarry Bed',
    subtitle: 'Primary Extraction Site',
    category: 'quarry',
    image: quarryLayout,
    description: 'Vast overview of our stepped extraction face in Warangal. This configuration allows us to plan extraction paths, maintain safety benches, and systematically extract high-integrity granite blocks.',
    aspectRatio: 'aspect-[16/9]',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'quarry-pit-1',
    title: 'Derrick Crane Lift',
    subtitle: 'Deep Pit Operations',
    category: 'quarry',
    image: quarryPit1,
    description: 'High-tonnage derrick crane lifting a freshly separated granite block from the deepest zone of our active pit. Modern crane rigs enable vertical extraction of massive architectural blocks.',
    aspectRatio: 'aspect-[4/5]',
    gridSpan: 'md:row-span-2'
  },
  {
    id: 'quarry-blocks-1',
    title: 'Dressed Granite Blocks',
    subtitle: 'Fresh Extraction',
    category: 'quarry',
    image: quarryBlocks1,
    description: 'Freshly split granite blocks squared on the quarry floor. The outer faces display characteristic natural wire-cut and line-drilled textures before final yard classification.',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'quarry-inspection',
    title: 'Block Quality Check',
    subtitle: 'Precision Quality Control',
    category: 'operations',
    image: quarryInspection,
    description: 'Field inspection of freshly exposed granite seams. Wetting the surface highlights natural mineral distribution, grain density, and reveals any structural micro-fissures.',
    aspectRatio: 'aspect-[4/5]'
  },
  {
    id: 'quarry-excavator-1',
    title: 'Bed Preparation',
    subtitle: 'Quarry Floor Cleaning',
    category: 'operations',
    image: quarryExcavator1,
    description: 'Heavy hydraulic excavator cleaning off slush and stone debris on the active floor bed, keeping the working surface clean for positioning wire-saws and drillers.',
    aspectRatio: 'aspect-[16/9]',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'quarry-blocks-2',
    title: 'Stockyard Layout',
    subtitle: 'Block Cataloguing',
    category: 'quarry',
    image: quarryBlocks2,
    description: 'Granite blocks arranged in our stockyard, categorized by physical parameters. Each block receives a unique serial number, size rating, and grade designation for clients.',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'quarry-pit-2',
    title: 'Stepped Granite Face',
    subtitle: 'Geological Overview',
    category: 'quarry',
    image: quarryPit2,
    description: 'Deep vertical slice of the granite bed. The clean steps document decades of extraction, exposing pristine geological strata that yield extremely consistent color tone.',
    aspectRatio: 'aspect-[4/5]'
  },
  {
    id: 'quarry-machinery',
    title: 'Bed Separation Line',
    subtitle: 'Diamond Wire Sawing',
    category: 'operations',
    image: quarryMachinery,
    description: 'A heavy-duty wire saw slicing deep horizontal cuts. Diamond wire sawing produces flat, un-shattered faces, preserving the structural integrity of the stone blocks.',
    aspectRatio: 'aspect-[16/9]',
    gridSpan: 'md:col-span-2'
  },
  {
    id: 'pimlico-kitchen',
    title: 'Pimlico Residence',
    subtitle: 'Nero Quartz Fabrication',
    category: 'installations',
    image: projectKitchen,
    description: 'A bespoke kitchen worktop install featuring double-bevel edge profiles and book-matched backsplash details, showing the final application of premium natural stone.',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'hampstead-bath',
    title: 'Hampstead Master Bath',
    subtitle: 'Carrara Silver Install',
    category: 'installations',
    image: projectBathroom,
    description: 'Slab-matching wall cladding and custom double-sink vanity top in Carrara Silver marble. This design creates a seamless monolithic stone environment.',
    aspectRatio: 'aspect-[4/3]'
  }
]

const categories = [
  { value: 'all', label: 'All Operations' },
  { value: 'quarry', label: 'Quarry & Extraction' },
  { value: 'operations', label: 'Machinery & QC' },
  { value: 'installations', label: 'Completed Projects' }
]

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Filter items based on selected category tab
  const filteredItems = galleryItems.filter(item => 
    activeTab === 'all' || item.category === activeTab
  )

  // Handle keyboard navigation in Lightbox modal
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1)
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredItems])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return
    const total = filteredItems.length
    const nextIndex = (lightboxIndex + direction + total) % total
    setLightboxIndex(nextIndex)
  }

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16 md:mb-20">
          {categories.map((cat) => {
            const isActive = activeTab === cat.value
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleTabChange(cat.value)}
                className={`
                  px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] 
                  transition-all duration-300 cursor-pointer border
                  ${isActive 
                    ? 'bg-foreground text-background border-foreground shadow-[var(--shadow-card)] scale-105' 
                    : 'bg-card text-muted-foreground border-border/60 hover:text-foreground hover:border-muted-foreground/40 hover:bg-muted/30'
                  }
                `}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div 
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-auto
            transition-all duration-300 ease-in-out
            ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`
                group cursor-pointer relative overflow-hidden rounded-[var(--radius)]
                ${item.gridSpan || ''}
              `}
            >
              <Tilt3D max={6} glare={true} className="w-full h-full">
                <div className={`relative w-full h-full overflow-hidden rounded-[var(--radius)] shadow-md group-hover:shadow-[var(--shadow-slab)] transition-shadow duration-500 bg-card border border-border/50 ${item.aspectRatio}`}>
                  
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out pointer-events-none"
                    loading="lazy"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

                  {/* Glass Card Caption Details */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 glass-stone rounded-[var(--radius)] transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 flex items-center justify-between">
                    <div className="text-left max-w-[80%]">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-gold font-bold">
                        {item.category === 'quarry' ? 'Quarry' : item.category === 'operations' ? 'Operations' : 'Completed Project'}
                      </p>
                      <h3 className="font-display text-sm font-bold text-foreground mt-1 truncate">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Action Icon */}
                    <div className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center bg-card group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300 shrink-0">
                      <Maximize2 className="w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors" />
                    </div>
                  </div>

                </div>
              </Tilt3D>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm uppercase tracking-widest">No items found in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar (Close and index indicators) */}
          <div className="flex justify-between items-center w-full z-10 h-12 shrink-0">
            <span className="text-xs tracking-[0.25em] uppercase text-white/50 font-medium font-body">
              {filteredItems[lightboxIndex].category === 'quarry' ? 'Quarrying & Extraction' : filteredItems[lightboxIndex].category === 'operations' ? 'Site Operations' : 'Completed Installations'}
              {' '}&bull;{' '}
              <span className="text-white">{lightboxIndex + 1} / {filteredItems.length}</span>
            </span>
            <button
              onClick={closeLightbox}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2 text-white cursor-pointer transition-all duration-300 hover:scale-105"
              aria-label="Close Lightbox"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/80">Back to Gallery</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Area (Image + Left/Right navigation + Details panel) */}
          <div 
            className="flex-1 min-h-0 w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center max-w-7xl mx-auto py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image display container */}
            <div className="flex-1 min-h-0 w-full h-[50vh] lg:h-full flex items-center justify-center relative bg-zinc-950/40 border border-white/5 rounded-[var(--radius)] overflow-hidden group">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain select-none transition-all duration-500 rounded-[var(--radius)]"
              />

              {/* Prev / Next buttons inside image container on hover (desktop) */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 w-12 h-12 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white cursor-pointer transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar Details Panel */}
            <div 
              className="w-full lg:w-[380px] h-auto lg:h-full max-h-[300px] lg:max-h-full flex flex-col justify-between text-left bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[var(--radius)] text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            >
              <div className="overflow-y-auto flex-1 pr-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                  {filteredItems[lightboxIndex].category === 'quarry' ? 'Quarry & Extraction' : filteredItems[lightboxIndex].category === 'operations' ? 'Site Machinery & QC' : 'Bespoke Installation'}
                </span>
                
                <h2 className="font-display text-2xl font-bold tracking-tight mt-3 text-white">
                  {filteredItems[lightboxIndex].title}
                </h2>
                
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium mt-1">
                  {filteredItems[lightboxIndex].subtitle}
                </h3>
                
                <div className="w-12 h-[1px] bg-gold/50 my-6" />
                
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              {/* Mobile Prev/Next controls */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-white/5 lg:hidden shrink-0">
                <button
                  onClick={() => navigateLightbox(-1)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[var(--radius)] flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" /> Prev
                </button>
                <button
                  onClick={() => navigateLightbox(1)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[var(--radius)] flex items-center justify-center text-white cursor-pointer transition-colors"
                >
                  Next <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom spacer for layout balance */}
          <div className="h-4 w-full hidden lg:block" />
        </div>,
        document.body
      )}

    </section>
  )
}
