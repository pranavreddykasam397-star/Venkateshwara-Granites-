import { useRef, useState, type ReactNode } from 'react'

interface Tilt3DProps {
  children: ReactNode
  className?: string
  max?: number
  glare?: boolean
}

export default function Tilt3D({ children, className = '', max = 12, glare = true }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ '--rx': '0deg', '--ry': '0deg', '--mx': '50%', '--my': '50%' } as React.CSSProperties)
  const [hovering, setHovering] = useState(false)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rx = (y - 0.5) * -max
    const ry = (x - 0.5) * max
    setStyle({
      '--rx': `${rx}deg`,
      '--ry': `${ry}deg`,
      '--mx': `${x * 100}%`,
      '--my': `${y * 100}%`,
    } as React.CSSProperties)
    setHovering(true)
  }

  function handleMouseLeave() {
    setStyle({ '--rx': '0deg', '--ry': '0deg', '--mx': '50%', '--my': '50%' } as React.CSSProperties)
    setHovering(false)
  }

  return (
    <div
      ref={ref}
      className={`perspective-1200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="preserve-3d transition-transform duration-300 ease-out relative"
        style={{
          transform: `rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))`,
          ...style,
        }}
      >
        {children}
        {glare && (
          <div
            className="absolute inset-0 rounded-[var(--radius)] pointer-events-none mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.25) 0%, transparent 60%)`,
              opacity: hovering ? 1 : 0,
            }}
          />
        )}
      </div>
    </div>
  )
}
