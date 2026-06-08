import { createFileRoute } from '@tanstack/react-router'
import PageHeader from '../components/PageHeader'
import GalleryGrid from '../components/GalleryGrid'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Gallery & Operations — RVR Group · Venkateshwara Granites' },
      { name: 'description', content: 'Explore our quarry extraction, advanced site operations, and premium finished installations. Raw blocks to architectural-grade granite.' },
      { property: 'og:title', content: 'Gallery & Operations — RVR Group · Venkateshwara Granites' },
      { property: 'og:description', content: 'Explore our quarry extraction, advanced site operations, and premium finished installations.' },
    ],
  }),
  component: GalleryPage,
})

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quarry & Portfolio"
        title="Extraction &"
        accent="Creation."
      >
        From our state-of-the-art quarries in Warangal to final architectural installations, witness the lifecycle of our premium natural stone.
      </PageHeader>
      <GalleryGrid />
    </>
  )
}
