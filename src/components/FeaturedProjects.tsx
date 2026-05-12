import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"

// Export featured projects so other files can access the count
export const featuredProjects = projects.slice(0, 2)

export default function FeaturedProjects() {

  return (
    <div className="grid md:grid-cols-2 gap-10">

      {featuredProjects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}

    </div>
  )
}