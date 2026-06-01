import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/PageHeader'
import GalleryGrid from '../components/GalleryGrid'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Project Gallery — Venkateshwara Granites' },
      { name: 'description', content: 'Browse our portfolio of completed granite installations — kitchens, bathrooms, and bespoke surfaces.' },
      { property: 'og:title', content: 'Project Gallery — Venkateshwara Granites' },
      { property: 'og:description', content: 'Selected works from our portfolio of premium granite installations.' },
    ],
  }),
  component: GalleryPage,
})

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected"
        accent="work."
      >
        A curated selection of our recent installations across London's finest residences and commercial spaces.
      </PageHeader>
      <GalleryGrid />
    </>
  )
}
