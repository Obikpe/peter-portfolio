import Link from "next/link"
import { research } from "@/data/research"

export default function Research() {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {research.map((item) => (
        <div
          key={item.slug}
          className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
        >

          <p className="text-xs text-[#5B8DEF] font-mono uppercase tracking-widest mb-2">
            Academic Publication
          </p>

          <h3 className="text-lg font-semibold text-white leading-snug">
            {item.title}
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            {item.author}
          </p>

          <p className="text-gray-400 mt-4 line-clamp-3">
            {item.abstract}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.keywords.map((k) => (
              <span
                key={k}
                className="text-xs border border-gray-700 px-3 py-1 rounded-full"
              >
                {k}
              </span>
            ))}
          </div>

          <Link
            href={`/research/${item.slug}`}
            className="inline-block mt-6 text-sm text-[#5B8DEF] hover:underline"
          >
            Read Publication →
          </Link>

        </div>
      ))}
    </div>
  )
}