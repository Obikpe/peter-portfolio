"use client"

import { useState, ReactNode } from "react" // Added ReactNode
import Link from "next/link"
import SectionWrapper from "@/components/SectionWrapper"

// Added 'children' to the prop definition
export default function InsightsClientView({ 
  initialInsights, 
  children 
}: { 
  initialInsights: any[], 
  children?: ReactNode 
}) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredInsights = initialInsights.filter((article) => {
    const searchStr = searchQuery.toLowerCase()
    return (
      article.title?.toLowerCase().includes(searchStr) ||
      article.summary?.toLowerCase().includes(searchStr) ||
      article.category?.toLowerCase().includes(searchStr)
    )
  })

  return (
    <SectionWrapper title="Latest Insights">
      
      {/* This renders the Title and Spacing you have in your page.tsx */}
      {children}

      {/* Search Bar Section */}
      <div className="relative max-w-2xl mb-12">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 font-mono text-sm">{">"}</span>
        </div>
        <input
          type="text"
          placeholder="Search by topic, tool, or keyword..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#080808] border border-gray-800 rounded-lg py-3 pl-8 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#5B8DEF] focus:ring-1 focus:ring-[#5B8DEF] transition-all font-mono text-sm"
        />
        {searchQuery && (
           <p className="mt-2 text-xs text-gray-500">
             Showing {filteredInsights.length} results for "{searchQuery}"
           </p>
        )}
      </div>

      <div className="grid gap-12">
        {filteredInsights.length > 0 ? (
          filteredInsights.map((article) => (
            <Link 
              key={article.slug} 
              href={`/insights/${article.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start border-b border-gray-900 pb-12 transition-all"
            >
              {/* Thumbnail */}
              <div className="md:col-span-4 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 aspect-[16/9]">
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800/50 text-gray-600 text-xs font-mono">
                    NO_IMAGE
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B8DEF] bg-[#5B8DEF]/10 px-2 py-0.5 rounded">
                    {article.category || "Data"}
                  </span>
                  <span className="text-gray-600 text-xs font-mono">{article.date}</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#5B8DEF] transition-colors leading-tight">
                  {article.title}
                </h2>
                
                <p className="text-gray-400 text-sm md:text-base line-clamp-2 mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <span className="text-xs font-bold text-[#5B8DEF] uppercase tracking-tighter group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
            <p className="text-gray-500 font-mono text-sm">No articles found matching your query.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#5B8DEF] text-xs hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}