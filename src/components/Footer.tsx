import logoImg from '../assets/logo.jpg'

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Venkateshwara Granites" className="h-9 w-9 rounded-sm object-contain" />
              <span className="font-display text-base font-bold tracking-tight text-foreground uppercase">
                RVR Group <span className="text-gold">Granites</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Venkateshwara Granites — Master fabricators of premium granite surfaces. Quarried, cut, polished, and installed to perfection.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>R. Venkateshwara Rao · <span className="text-foreground">+91 9440792235</span></p>
              <p>R. Kiranmaye · <span className="text-foreground">9030086019</span></p>
              <p>Phone: <span className="text-foreground">0870-2524066</span></p>
              <a href="mailto:venkateswaragranites.rvr@gmail.com" className="text-foreground hover:text-gold transition-colors block mt-1">
                venkateswaragranites.rvr@gmail.com
              </a>
            </div>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Office</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              23-6-231, Beside J.S.M. School Lane,<br />
              Hunter Road, Hanamkonda,<br />
              Warangal — 506 001, Telangana, India
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-wider">
              GST: 36AAFFV4048J1ZW
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] text-muted-foreground/60 uppercase tracking-[0.3em]">
            © 2026 Venkateshwara Granites · RVR Group
          </span>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Quarried · Cut · Polished · Installed
          </p>
        </div>
      </div>
    </footer>
  )
}
