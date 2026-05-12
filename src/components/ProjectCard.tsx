"use client"

import { useState } from "react"
import Link from "next/link"
import { type Project } from "@/data/projects"
import Skeleton from "./Skeleton"

export default function ProjectCard({
  project,
}: {
  project: Project
}) {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-[#080808] border border-gray-900 rounded-2xl overflow-hidden hover:border-[#5B8DEF]/40 hover:-translate-y-1 transition-all duration-500 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_rgba(91,141,239,0.08)]"
    >

      {/* IMAGE / PREVIEW */}
      <div className="aspect-video w-full bg-[#030303] overflow-hidden relative border-b border-gray-900">

        {project.image ? (
          <>
            {/* Skeleton Loader */}
            {!isLoaded && (
              <Skeleton className="absolute inset-0 z-10 rounded-none" />
            )}

            <img
              src={project.image}
              alt={project.title}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isLoaded
                  ? "opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-105"
                  : "opacity-0 scale-105"
              }`}
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-800">

            <p className="text-[10px] font-mono uppercase tracking-[0.3em]">
              No Preview
            </p>

            <div className="mt-4 flex gap-1">
              <div className="w-2 h-8 bg-[#5B8DEF]/20 rounded-full" />
              <div className="w-2 h-14 bg-[#5B8DEF]/30 rounded-full" />
              <div className="w-2 h-5 bg-[#5B8DEF]/20 rounded-full" />
              <div className="w-2 h-10 bg-[#5B8DEF]/30 rounded-full" />
            </div>

          </div>
        )}

        {/* STATUS BADGE */}
        <div className="absolute top-4 left-4 z-20">

          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gray-800 text-[10px] uppercase tracking-[0.25em] text-[#5B8DEF] font-mono">
            {project.status || "Published"}
          </span>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* TITLE */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#5B8DEF] transition-colors tracking-tight leading-snug">
          {project.title}
        </h3>

        {/* SUMMARY */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* TECH STACK */}
        {project.tools && (
          <div className="mt-5 flex flex-wrap gap-2">

            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[11px] border border-gray-800 bg-[#050505] text-gray-400 px-3 py-1 rounded-full hover:border-[#5B8DEF]/40 hover:text-[#5B8DEF] transition-colors"
              >
                {tool}
              </span>
            ))}

          </div>
        )}

        {/* FOOTER */}
        <div className="mt-6 pt-5 border-t border-gray-900 flex items-center justify-between">

          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-mono">
            Case Study
          </span>

          <span className="text-sm text-[#5B8DEF] group-hover:translate-x-1 transition-transform">
            View Project →
          </span>

        </div>

      </div>
    </Link>
  )
}