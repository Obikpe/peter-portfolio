"use client"

import { useState } from "react"
import Link from "next/link"
import { type Project } from "@/data/projects"
import Skeleton from "./Skeleton"

export default function ProjectCard({ project }: { project: Project }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Link 
      href={`/projects/${project.slug}`} 
      className="group block bg-[#080808] border border-gray-900 rounded-xl overflow-hidden hover:border-[#5B8DEF]/40 transition-all duration-300"
    >
      <div className="aspect-video w-full bg-[#030303] overflow-hidden relative border-b border-gray-900">
        {project.image ? (
          <>
            {/* The Skeleton shows while isLoaded is false */}
            {!isLoaded && <Skeleton className="absolute inset-0 z-10 rounded-none" />}
            
            <img 
              src={project.image} 
              alt={project.title} 
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded ? "opacity-80 group-hover:opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-800 text-[10px] font-mono uppercase tracking-[0.2em]">
            No_Preview_Data
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#5B8DEF] transition-colors tracking-tight">
          {project.title}
        </h3>
        {/* ... rest of your card code ... */}
      </div>
    </Link>
  )
}