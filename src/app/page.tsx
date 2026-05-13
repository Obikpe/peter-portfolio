import Hero from "@/components/Hero"
import SectionWrapper from "@/components/SectionWrapper"
import Stats from "@/components/Stats"
import Skills from "@/components/Skills"

import FeaturedProjects, {
  featuredProjects,
} from "@/components/FeaturedProjects"

import DataVisualization from "@/components/DataVisualization"
import Research from "@/components/Research"
import About from "@/components/About"

import { projects } from "@/data/projects"
import { getAllInsights } from "@/lib/markdown"

export default function Home() {

  const allInsights = getAllInsights()
  const articleCount = allInsights.length

  // Dynamic Project Counts
  const featuredCount = featuredProjects.length
  const totalProjects = projects.length

  return (
    <main className="relative min-h-screen bg-[#030303] text-gray-300 selection:bg-[#5B8DEF]/30">

      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#5B8DEF]/5 blur-[120px]" />

        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[120px]" />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="relative z-10">

        {/* ================= HERO ================= */}
        <Hero />

        <SectionWrapper>

          <div className="flex flex-col">
          {/* ================= SKILLS ================= */}
            <section className="py-24 border-t border-gray-900/50">

              {/*<div className="flex items-center gap-4 mb-12">*/}
              <div className = "mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Technical Skills
                </h2>
                
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
              </div>
              

              <Skills />

            </section>
            {/* ================= PLATFORM STATS ================= */}
            <section className="py-24 border-t border-gray-900/50">
              <div className="flex items-end justify-between mb-12">
                <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-mono text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Metrics
                </div>
              </div>
              <div className="mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Platform Stats
                </h2>

                <p className="text-[#5B8DEF] font-mono text-[10px] uppercase tracking-[0.3em] mt-3 font-bold">
                  Activity Metrics
                </p>

              </div>

              <div className="bg-[#080808]/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.25)]">

                <Stats articleCount={articleCount} />

              </div>

            {/* ================= FEATURED PROJECTS ================= */}
            <section className="py-24 border-t border-gray-900/50">

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Featured Projects
                  </h2>

                  <p className="text-[#5B8DEF] font-mono text-[10px] uppercase tracking-[0.3em] mt-3 font-bold">
                    Case Studies & Business Solutions
                  </p>
                </div>

                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  Selected Works ·{" "}
                  {String(featuredCount).padStart(2, "0")} /{" "}
                  {String(totalProjects).padStart(2, "0")}
                </span>

              </div>

              <FeaturedProjects />

            </section>

            {/* ================= RESEARCH ================= */}
            <section className="py-24 border-t border-gray-900/50">

              <div className="mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Academic Research
                </h2>

                <p className="text-[#5B8DEF] font-mono text-[10px] uppercase tracking-[0.3em] mt-3 font-bold">
                  Evidence-Based Analysis
                </p>

              </div>

              <Research />

            </section>

            


            

            </section>

          </div>

        </SectionWrapper>

      </div>
    </main>
  )
}