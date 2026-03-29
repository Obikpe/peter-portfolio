import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import Stats from "@/components/Stats"
import Skills from "@/components/Skills"
import FeaturedProjects from "@/components/FeaturedProjects"
import { getAllInsights } from "@/lib/markdown"

export default function Home() {
  const allInsights = getAllInsights()
  const articleCount = allInsights.length

  return (
    <main className="relative min-h-screen bg-[#030303] text-gray-300 selection:bg-[#5B8DEF]/30">
      {/* 1. The "Ambient Glow" - This makes the site look expensive */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#5B8DEF]/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        
        <SectionWrapper>
          <div className="flex flex-col">
            
            {/* Skills Section - Floating Card Style */}
            <section className="py-24">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Technical Skills</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
              </div>
              <Skills />
            </section>

            {/* Stats Section - Subtle Glass Panel */}
            <section className="py-24 border-t border-gray-900/50">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Platform Stats</h2>
                <p className="text-[#5B8DEF] font-mono text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">
                  Activity Metrics
                </p>
              </div>
              <div className="bg-[#080808]/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                <Stats articleCount={articleCount} />
              </div>
            </section>

            {/* Projects Section */}
            <section className="py-24 border-t border-gray-900/50">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Selected Works / 02</span>
              </div>
              <FeaturedProjects />
            </section>
            
          </div>
        </SectionWrapper>
      </div>
    </main>
  )
}