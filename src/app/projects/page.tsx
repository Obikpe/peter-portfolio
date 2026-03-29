"use client"

import { useState } from "react"
import { projects, type Project } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"
import SectionWrapper from "@/components/SectionWrapper"

export default function ProjectsPage() {

  const [filter, setFilter] = useState("All")

  const published = projects.filter(
    (p: Project) => p.status === "published"
  )

  const tools = [
    "All",
    ...new Set(published.flatMap((p: Project) => p.tools))
  ]

  const filteredProjects =
    filter === "All"
      ? published
      : published.filter(project =>
          project.tools.includes(filter)
        )

  return (
    <SectionWrapper title="Projects">

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tools.map((tool, index) => (
          <button
            key={`${tool}-${index}`}
            onClick={() => setFilter(tool)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === tool
                ? "bg-white text-black"
                : "border-gray-700 text-gray-400 hover:border-gray-500"
            }`}
          >
            {tool}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: Project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>

    </SectionWrapper>
  )
}