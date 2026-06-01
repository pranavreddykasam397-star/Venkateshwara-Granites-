import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/PageHeader'

// Slab images
import graniteCharcoal from '../assets/granite-charcoal.png'
import graniteWhite from '../assets/granite-white.png'
import graniteSlate from '../assets/granite-slate.png'
import graniteBeige from '../assets/granite-beige.png'

const slabDetails = [
  { id: 'Nero Quartz', name: 'Nero Quartz', price: 450, image: graniteCharcoal, desc: 'Brazilian Quartzite. Dark charcoal base with dynamic crystalline white quartz veins.' },
  { id: 'Carrara Silver', name: 'Carrara Silver', price: 550, image: graniteWhite, desc: 'Italian Granite. Fine white background with elegant linear silver/grey veining.' },
  { id: 'Slate Pepper', name: 'Slate Pepper', price: 380, image: graniteSlate, desc: 'Indian Granite. Slate grey base speckled with fine black and gold granules.' },
  { id: 'Saharan Gold', name: 'Saharan Gold', price: 600, image: graniteBeige, desc: 'Egyptian Granite. Warm golden ochre base with dramatic beige and bronze swirls.' },
] as const

const finishes = [
  { id: 'Polished', name: 'Polished', multiplier: 1.0, desc: 'Glossy, mirror-like depth.' },
  { id: 'Honed', name: 'Honed', multiplier: 1.05, desc: 'Matte, velvet tactile feel.' },
  { id: 'Leathered', name: 'Leathered', multiplier: 1.10, desc: 'Textured, satin-like relief.' },
  { id: 'Flamed', name: 'Flamed', multiplier: 1.15, desc: 'Rugged, organic slip-resistant.' },
] as const

const thicknesses = [
  { value: 20, label: '20 mm', multiplier: 1.0, desc: 'Sleek, contemporary profile.' },
  { value: 30, label: '30 mm', multiplier: 1.25, desc: 'Robust, classical monolithic depth.' },
] as const

export const Route = createFileRoute('/quote')({
  head: () => ({
    meta: [
      { title: 'Request a Quote — Venkateshwara Granites' },
      { name: 'description', content: 'Get a detailed estimate for your granite project. Send us your dimensions and material preferences — we respond within 48 hours.' },
      { property: 'og:title', content: 'Request a Quote — Venkateshwara Granites' },
      { property: 'og:description', content: 'Send us your project details and receive a detailed estimate within 48 hours.' },
    ],
  }),
  component: QuotePage,
})

function QuotePage() {
  // Configurator State
  const [selectedSlab, setSelectedSlab] = useState<string>('Nero Quartz')
  const [selectedFinish, setSelectedFinish] = useState<string>('Polished')
  const [selectedThickness, setSelectedThickness] = useState<number>(20)
  const [length, setLength] = useState<number>(2400) // mm
  const [width, setWidth] = useState<number>(600) // mm

  // Customer Form State
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Calculations
  const activeSlab = slabDetails.find(s => s.id === selectedSlab) || slabDetails[0]
  const activeFinish = finishes.find(f => f.id === selectedFinish) || finishes[0]
  const activeThickness = thicknesses.find(t => t.value === selectedThickness) || thicknesses[0]

  const areaSqM = (length * width) / 1_000_000
  const materialCost = areaSqM * activeSlab.price * activeFinish.multiplier * activeThickness.multiplier
  const fabricationCost = 250 // standard tooling fee
  const installCost = 450 // standard laser template + white glove install
  const totalCost = materialCost + fabricationCost + installCost

  const handleReset = () => {
    setSelectedSlab('Nero Quartz')
    setSelectedFinish('Polished')
    setSelectedThickness(20)
    setLength(2400)
    setWidth(600)
    setName('')
    setEmail('')
    setPhone('')
    setNotes('')
    setSubmitted(false)
  }

  return (
    <>
      <PageHeader
        eyebrow="Configurator"
        title="Interactive"
        accent="estimate."
      >
        Select your material, input your dimensions, and specify your finishes to receive an instant dynamic estimation for your space.
      </PageHeader>

      <section className="py-24" style={{ background: 'var(--gradient-stone)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
              {/* Left Column - Configurator */}
              <div className="space-y-12">
                {/* 1. Material Selector */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-gold font-display text-sm">01</span> Select Material
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {slabDetails.map((slab) => (
                      <button
                        key={slab.id}
                        type="button"
                        onClick={() => setSelectedSlab(slab.id)}
                        className={`flex gap-4 p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 ${
                          selectedSlab === slab.id
                            ? 'border-primary ring-1 ring-primary shadow-sm'
                            : 'border-border'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-secondary">
                          <img
                            src={slab.image}
                            alt={slab.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-sm text-foreground">{slab.name}</h4>
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                            £{slab.price} / m² base
                          </p>
                          <p className="text-xs text-muted-foreground/80 leading-snug mt-1.5 line-clamp-2">
                            {slab.desc}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Dimensions Selector */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-gold font-display text-sm">02</span> Dimensions
                  </h3>
                  <div className="glass-stone p-6 rounded-[var(--radius)] space-y-8">
                    {/* Length Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Length</span>
                        <span className="font-display font-bold text-lg">{length} <span className="text-xs font-sans text-muted-foreground">mm</span></span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="3500"
                        step="50"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-1.5">
                        <span>Min: 500mm</span>
                        <span>Max: 3500mm (Single Slab Limit)</span>
                      </div>
                    </div>

                    {/* Width Slider */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Width</span>
                        <span className="font-display font-bold text-lg">{width} <span className="text-xs font-sans text-muted-foreground">mm</span></span>
                      </div>
                      <input
                        type="range"
                        min="300"
                        max="1500"
                        step="50"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-1.5">
                        <span>Min: 300mm</span>
                        <span>Max: 1500mm</span>
                      </div>
                    </div>

                    <div className="border-t border-border/60 pt-4 flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">Total Surface Area:</span>
                      <span className="font-display text-sm font-bold text-foreground">
                        {areaSqM.toFixed(3)} m²
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Edge Finish Selector */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-gold font-display text-sm">03</span> Face Finish
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {finishes.map((finish) => (
                      <button
                        key={finish.id}
                        type="button"
                        onClick={() => setSelectedFinish(finish.id)}
                        className={`p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 ${
                          selectedFinish === finish.id
                            ? 'border-primary ring-1 ring-primary shadow-sm'
                            : 'border-border'
                        }`}
                      >
                        <h4 className="font-display font-bold text-sm text-foreground">{finish.name}</h4>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
                          {finish.multiplier === 1.0 ? 'Standard' : `+${Math.round((finish.multiplier - 1) * 100)}% premium`}
                        </p>
                        <p className="text-[11px] text-muted-foreground/80 mt-2 leading-snug">
                          {finish.desc}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Thickness Selector */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-gold font-display text-sm">04</span> Slab Thickness
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {thicknesses.map((thickness) => (
                      <button
                        key={thickness.value}
                        type="button"
                        onClick={() => setSelectedThickness(thickness.value)}
                        className={`p-4 rounded-[var(--radius)] border text-left bg-card hover:border-primary/40 transition-all duration-300 flex justify-between items-center ${
                          selectedThickness === thickness.value
                            ? 'border-primary ring-1 ring-primary shadow-sm'
                            : 'border-border'
                        }`}
                      >
                        <div>
                          <h4 className="font-display font-bold text-sm text-foreground">{thickness.label}</h4>
                          <p className="text-xs text-muted-foreground/80 mt-1 leading-snug">
                            {thickness.desc}
                          </p>
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                          {thickness.multiplier === 1.0 ? 'Base' : `+${Math.round((thickness.multiplier - 1) * 100)}%`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Contact Details */}
                <div>
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-gold font-display text-sm">05</span> Project Inquiries
                  </h3>
                  <div className="glass-stone p-6 rounded-[var(--radius)] space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">Full Name</label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="E.g., Alexander Sterling"
                          className="w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="emailAddr" className="block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">Email Address</label>
                        <input
                          id="emailAddr"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alexander@sterlingresidences.com"
                          className="w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">Phone Number</label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="E.g., +91 9440792235"
                        className="w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectDetails" className="block text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-1.5">Project Specifics (Optional)</label>
                      <textarea
                        id="projectDetails"
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Detail any sink cutouts, hob cutouts, splashbacks, or bespoke edge details..."
                        className="w-full bg-card border border-border px-4 py-3 rounded-[var(--radius)] text-sm outline-none focus:border-primary transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Live Estimate Summary */}
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="glass-stone p-8 rounded-[var(--radius)] shadow-[var(--shadow-card)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent/5 translate-x-8 -translate-y-8" />
                  <h3 className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                    Estimate Summary
                  </h3>

                  {/* Material breakdown */}
                  <div className="space-y-4 mb-8 pb-6 border-b border-border/60">
                    <div className="flex justify-between items-start gap-4 text-sm">
                      <div>
                        <span className="font-display font-bold text-foreground">{activeSlab.name}</span>
                        <span className="text-xs text-muted-foreground block mt-0.5">
                          {length}mm × {width}mm · {activeThickness.label}
                        </span>
                      </div>
                      <span className="font-display font-semibold text-foreground">
                        £{materialCost.toFixed(0)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Face Finish: {activeFinish.name}</span>
                      <span>× {activeFinish.multiplier}</span>
                    </div>

                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Thickness Factor</span>
                      <span>× {activeThickness.multiplier}</span>
                    </div>
                  </div>

                  {/* Services breakdown */}
                  <div className="space-y-3 mb-8 pb-6 border-b border-border/60 text-sm">
                    <div className="flex justify-between text-muted-foreground/80">
                      <span>Precision Fabrication Fee</span>
                      <span className="font-sans">£{fabricationCost}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground/80">
                      <span>Laser Template & Installation</span>
                      <span className="font-sans">£{installCost}</span>
                    </div>
                  </div>

                  {/* Total price estimation */}
                  <div className="space-y-2 mb-8 text-center bg-card/40 p-6 rounded-[var(--radius)] border border-border/40">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Estimated Investment
                    </span>
                    <div className="font-display text-4xl md:text-5xl font-bold text-gold tracking-tight mt-1">
                      £{totalCost.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                    </div>
                    <p className="text-[10px] text-muted-foreground/60 leading-normal max-w-[240px] mx-auto pt-2">
                      Estimated guide price. Excludes VAT. Final templates govern final contract rates.
                    </p>
                  </div>

                  {/* CTA Submit */}
                  <button
                    type="submit"
                    onClick={() => {
                      if (name && email && phone) {
                        setSubmitted(true)
                      } else {
                        alert('Please fill out Name, Email, and Phone fields to proceed.')
                      }
                    }}
                    className="w-full text-white py-4 rounded-[var(--radius)] text-xs font-semibold uppercase tracking-[0.2em] shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                    style={{ background: 'var(--gradient-gold)' }}
                  >
                    Submit Quotation Design
                  </button>
                </div>

                <div className="border border-border/80 p-6 rounded-[var(--radius)] bg-card/60 text-xs leading-relaxed text-muted-foreground/80">
                  <h4 className="font-display font-semibold text-foreground uppercase tracking-[0.15em] mb-2">Our Estimate Process</h4>
                  <p className="mb-2">1. Your specifications are mapped to inventory availability instantly.</p>
                  <p className="mb-2">2. An estimator reviews cut optimization and grain-matching patterns.</p>
                  <p>3. A formal contract drawing and final rates are sent in 48 hours.</p>
                </div>
              </div>
            </div>
          ) : (
            /* Success confirmation screen */
            <div className="max-w-2xl mx-auto glass-stone p-8 md:p-12 rounded-[var(--radius)] shadow-[var(--shadow-card)] text-center animate-float-up">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[var(--shadow-gold)]"
                style={{ background: 'var(--gradient-gold)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="font-display text-3xl font-bold tracking-tight mb-4">
                Quotation Received
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
                Thank you, {name}. Your bespoke configuration has been recorded under reference <span className="font-mono font-bold text-foreground">VG-QT-{(Math.floor(Math.random() * 9000) + 1000)}</span>. An expert estimator will review grain matching and email you within 48 hours.
              </p>

              {/* Specs Card */}
              <div className="bg-card/80 border border-border p-6 rounded-[var(--radius)] text-left space-y-4 mb-8 text-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent/10 px-3 py-1 text-[9px] uppercase tracking-widest text-gold font-semibold">
                  Specification Record
                </div>
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-muted-foreground">
                  <div>
                    <span className="uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5">Chosen Slab</span>
                    <span className="font-display font-bold text-foreground text-sm">{activeSlab.name}</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5">Thickness & Finish</span>
                    <span className="font-display font-bold text-foreground text-sm">{activeThickness.label} · {activeFinish.name}</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5">Dimensions Selected</span>
                    <span className="font-display font-semibold text-foreground text-sm">{length}mm × {width}mm</span>
                  </div>
                  <div>
                    <span className="uppercase tracking-wider text-[9px] block text-muted-foreground/60 mb-0.5">Surface Area</span>
                    <span className="font-display font-semibold text-foreground text-sm">{areaSqM.toFixed(3)} m²</span>
                  </div>
                </div>

                <div className="border-t border-border/80 pt-4 flex justify-between items-center">
                  <span className="uppercase tracking-wider text-[9px] text-muted-foreground/80">Estimated Guide Investment</span>
                  <span className="font-display text-lg font-bold text-gold">£{totalCost.toLocaleString('en-GB', { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="border border-border px-8 py-3.5 rounded-[var(--radius)] text-xs uppercase tracking-[0.15em] hover:bg-primary/5 transition-all duration-300"
                >
                  Configure Another Space
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
