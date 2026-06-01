import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import logoImg from '../assets/logo.jpg'

const navLinks = [
  { to: '/about' as const, label: 'About' },
  { to: '/products' as const, label: 'Blocks' },
  { to: '/gallery' as const, label: 'Gallery' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-stone py-3 shadow-[var(--shadow-card)]'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src={logoImg} alt="Venkateshwara Granites" className="h-11 w-11 rounded-sm object-contain" />
          <span className="font-display text-lg font-bold tracking-tight text-foreground uppercase">
            Venkateshwara <span className="text-gold">Granites</span>
          </span>
        </Link>

        {/* Center Nav Links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors duration-300 no-underline"
              activeProps={{ className: '!text-foreground font-semibold' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/quote"
            className="border border-border bg-primary/10 px-6 py-2.5 rounded-[var(--radius)] text-xs uppercase tracking-[0.18em] font-semibold text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all duration-300 no-underline"
          >
            Get a Quote
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-stone border-t border-border/50 mt-2">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors py-2 no-underline"
                activeProps={{ className: '!text-foreground font-semibold' }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
