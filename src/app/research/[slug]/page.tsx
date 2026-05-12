import { notFound } from "next/navigation"
import { research } from "@/data/research"

export async function generateStaticParams() {
  return research.map((r) => ({
    slug: r.slug,
  }))
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params

  const paper = research.find(r => r.slug === slug)

  if (!paper) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-20 px-6">

      <h1 className="text-3xl font-bold text-white leading-snug">
        {paper.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {paper.author}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {paper.keywords.map((k) => (
          <span key={k} className="text-xs border border-gray-700 px-3 py-1 rounded-full">
            {k}
          </span>
        ))}
      </div>

      <div className="my-10 border-t border-gray-800" />

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Problem Statement</h2>
        <p className="text-gray-300 leading-relaxed">{paper.problem}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Objective</h2>
        <p className="text-gray-300">{paper.objective}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Hypothesis</h2>
        <p className="text-gray-300">{paper.hypothesis}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Abstract</h2>
        <p className="text-gray-300 leading-relaxed">{paper.abstract}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Methodology</h2>
        <p className="text-gray-300 leading-relaxed">{paper.methodology}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Results</h2>
        <p className="text-gray-300 leading-relaxed">{paper.results}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Tools & Techniques</h2>
        <div className="flex flex-wrap gap-2">
          {paper.tools.map((tool) => (
            <span key={tool} className="text-xs border border-gray-700 px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Conclusion</h2>
        <p className="text-gray-300 leading-relaxed">{paper.conclusion}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-3">Limitations</h2>
        <p className="text-gray-300 leading-relaxed">{paper.limitations}</p>
      </section>

      {paper.pdf && (
        
        <a href={paper.pdf}
          target="_blank"
          className="inline-block mt-6 px-6 py-3 border border-gray-700 rounded-lg hover:border-gray-500 transition"
        >
          Download Full Paper
        </a>
      )}

    </article>
  )
}