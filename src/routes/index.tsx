import { createFileRoute } from '@tanstack/react-router'
import LandingHero from '../components/LandingHero'
import GraniteTransition from '../components/GraniteTransition'
import SectionPreview from '../components/SectionPreview'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'RVR Group — Venkateshwara Granites · Premium Granite Supply & Fabrication' },
      { name: 'description', content: 'RVR Group — a diversified enterprise in natural stone. Venkateshwara Granites: master fabricators of premium granite surfaces since 1997. Quarries, factory, and architectural-grade blocks & slabs.' },
      { property: 'og:title', content: 'RVR Group — Venkateshwara Granites' },
      { property: 'og:description', content: 'A diversified enterprise in natural stone. Premium granite supply and fabrication since 1997.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <LandingHero />
      <GraniteTransition />
      <SectionPreview />
    </>
  )
}
