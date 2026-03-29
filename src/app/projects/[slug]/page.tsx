import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

// 1. Define the Project interface to match your data structure
interface Project {
  slug: string;
  title: string;
  tools: string[];
  image?: string;   // Optional: in case some projects don't have images
  summary: string;
  problem: string;
  approach: string;
  impact: string;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  
  // 2. Cast the found project to our interface
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) notFound();

  return (
    <SectionWrapper>
      <article className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <Link 
          href="/projects" 
          className="text-xs font-mono text-gray-500 hover:text-[#5B8DEF] mb-12 inline-block transition-colors group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1 mr-2">←</span> 
          BACK TO PROJECTS
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 bg-[#0A0A0A] border border-gray-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* Main Project Image */}
        {project.image && (
          <div className="mb-16 rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <h2 className="md:col-span-4 text-sm font-bold uppercase tracking-[0.2em] text-[#5B8DEF]">Summary</h2>
            <p className="md:col-span-8 text-gray-400 leading-relaxed text-lg">
              {project.summary}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-gray-900/50">
            <h2 className="md:col-span-4 text-sm font-bold uppercase tracking-[0.2em] text-[#5B8DEF]">The Problem</h2>
            <p className="md:col-span-8 text-gray-400 leading-relaxed text-lg">
              {project.problem}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-gray-900/50">
            <h2 className="md:col-span-4 text-sm font-bold uppercase tracking-[0.2em] text-[#5B8DEF]">Approach</h2>
            <p className="md:col-span-8 text-gray-400 leading-relaxed text-lg">
              {project.approach}
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10 border-t border-gray-900/50">
            <h2 className="md:col-span-4 text-sm font-bold uppercase tracking-[0.2em] text-[#5B8DEF]">Results & Insights</h2>
            <p className="md:col-span-8 text-gray-400 leading-relaxed text-lg">
              {project.impact}
            </p>
          </section>
        </div>
      </article>
    </SectionWrapper>
  );
}