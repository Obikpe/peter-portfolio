import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2)

  return (
    // Removed section, py-24, and h2 title
    <div className="grid md:grid-cols-2 gap-10">
      {featured.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}