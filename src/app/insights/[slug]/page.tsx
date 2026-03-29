import { getInsight, getAllInsights } from "@/lib/markdown"
import { notFound } from "next/navigation"
import Link from "next/link"
import SectionWrapper from "@/components/SectionWrapper"
import ScrollToTop from "@/components/ScrollToTop"

// 1. Updated Interface: Added the missing properties to satisfy the build
interface Post {
  slug: string;
  title: string;
  date: string;
  category?: string;
  tags?: string[];
  content: string;
  contentHtml: string; // Added this
  readTime?: string;   // Added this
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // In your version of Next.js, params must be awaited
  const { slug } = await params;

  // Change: Use 'getInsight' (which you imported) instead of 'getPostBySlug'
  const post = (await getInsight(slug)) as Post | null;

  if (!post) {
    notFound();
  }

  const allPosts = (await getAllInsights()) as Post[];

  // Logic: Filter by category, then latest.
  const relatedPosts = allPosts
    .filter((p) => 
      p.category?.toLowerCase() === post.category?.toLowerCase() && 
      p.slug !== slug
    )
    .slice(0, 2);

  return (
    <SectionWrapper>
      <ScrollToTop />
      
      <article className="max-w-3xl mx-auto pt-32 pb-20">
        <Link 
          href="/insights" 
          className="text-gray-500 hover:text-[#5B8DEF] text-xs font-mono mb-10 inline-block transition-colors group"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1 mr-2">←</span> 
          BACK TO INSIGHTS
        </Link>

        <header className="mb-12 border-b border-gray-900 pb-12">
          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B8DEF] bg-[#5B8DEF]/10 px-3 py-1 rounded">
              {post.category || "Insight"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-500 font-mono text-xs">
            <span>{post.date}</span>
            {post.readTime && (
              <>
                <span>•</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>
        </header>

        <div 
          className="markdown-content prose prose-invert prose-blue max-w-none text-gray-300 
            prose-headings:text-white prose-headings:font-bold 
            prose-a:text-[#5B8DEF] prose-strong:text-white mb-20"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />

        <footer className="mt-20 pt-10 border-t border-gray-900">
          <h3 className="text-xl font-bold text-white mb-8 tracking-tight">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link 
                key={related.slug} 
                href={`/insights/${related.slug}`}
                className="group flex flex-col justify-between bg-[#0A0A0A] border border-gray-900 p-6 rounded-xl hover:border-[#5B8DEF] transition-all"
              >
                <div>
                  <span className="text-[10px] text-[#5B8DEF] font-bold uppercase tracking-widest bg-[#5B8DEF]/10 px-2 py-1 rounded">
                    {related.category || "Data"}
                  </span>
                  <h4 className="text-white font-bold mt-4 leading-snug group-hover:text-[#5B8DEF] transition-colors">
                    {related.title}
                  </h4>
                </div>
                <div className="mt-6 flex items-center text-xs font-mono text-gray-500">
                  <span>{related.date}</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </footer>
      </article>
    </SectionWrapper>
  )
}