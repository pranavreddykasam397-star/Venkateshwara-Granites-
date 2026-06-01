const contactDetails = [
  'Venkateshwara Granites · RVR Group',
  '+91 9440792235',
  'venkateswaragranites.rvr@gmail.com',
] as const

export default function QuoteCTA() {
  return (
    <section
      className="py-32 grain relative overflow-hidden"
      style={{ background: 'var(--gradient-stone)' }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
          Tell us about
          <br />
          your <span className="text-gold italic">project.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground mt-8 mb-12 text-lg max-w-lg mx-auto">
          Send us your dimensions and material preferences. We'll return a detailed estimate within 48 hours.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="glass-stone p-2 rounded-full flex items-center gap-2 max-w-xl mx-auto shadow-[var(--shadow-card)]"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent px-6 py-4 text-sm outline-none placeholder:text-muted-foreground/60"
          />
          <button
            type="submit"
            className="text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-[0.15em] shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
            style={{ background: 'var(--gradient-gold)' }}
          >
            Get Estimate
          </button>
        </form>

        {/* Contact details */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
          {contactDetails.map((detail) => (
            <span
              key={detail}
              className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
