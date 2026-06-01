import projectKitchen from '../assets/project-kitchen.png'
import projectBathroom from '../assets/project-bathroom.png'
import projectWorkshop from '../assets/project-workshop.png'

const projects = [
  { title: 'Pimlico Kitchen', subtitle: 'Nero Quartz', image: projectKitchen },
  { title: 'Hampstead Bath', subtitle: 'Carrara Silver', image: projectBathroom },
  { title: 'Atelier', subtitle: 'Behind the scenes', image: projectWorkshop },
]

export default function GalleryGrid() {
  return (
    <section className="py-32" style={{ background: 'var(--gradient-stone)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative overflow-hidden rounded-[var(--radius)] group aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6 glass-stone p-4 rounded-[var(--radius)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="font-display text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
