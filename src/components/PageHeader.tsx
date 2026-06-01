import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  title: string
  accent: string
  children?: ReactNode
}

export default function PageHeader({ eyebrow, title, accent, children }: PageHeaderProps) {
  return (
    <section className="pt-40 pb-20 bg-[var(--gradient-stone)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
          {title}{' '}
          <span className="text-gold italic">{accent}</span>
        </h1>
        {children && (
          <div className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
