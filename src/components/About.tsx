import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Passport Photo */}
      <Image
        src="/profile.jpg"
        alt="Profile photo"
        width={320}
        height={320}
        className="rounded-2xl border border-gray-800"
      />

      {/* Text */}
      <div className="space-y-5">
  <p className="text-xs uppercase tracking-widest text-accent flex items-center gap-3">
    About me
    <span className="block w-8 h-px bg-accent opacity-40" />
  </p>

  <p className="font-serif text-2xl md:text-3xl text-text-primary leading-snug italic">
    I turn{" "}
    <span className="text-accent not-italic">messy data</span>{" "}
    into decisions people can actually act on.
  </p>

  <p className="text-text-secondary leading-relaxed font-light">
    I'm a data analyst with a background in mathematics and a sharp focus on{" "}
    <span className="text-text-primary font-medium">business intelligence</span> — building
    the dashboards, pipelines, and reports that help organizations stop guessing
    and start knowing.
  </p>

  <p className="text-text-secondary leading-relaxed font-light">
    My work spans{" "}
    <span className="text-text-primary font-medium">
      Excel automation, Power BI, SQL, and Python
    </span>{" "}
    — from scraping raw data off the web with BeautifulSoup and Selenium, to
    modeling it in DAX, to presenting it in a form non-technical stakeholders
    can immediately use. I've done this for retail operations, community health
    programmes, and quick-service restaurants.
  </p>

  <div className="w-10 h-0.5 bg-accent opacity-20 rounded" />

  <p className="text-text-secondary leading-relaxed font-light">
    What drives me isn't the tools — it's the moment a pattern in the data
    changes how a team thinks. That's the work I show up for.
  </p>

  <div className="flex flex-wrap gap-2 pt-2">
    {[
      "Power BI & DAX", "SQL", "Python", "Web Scraping",
      "Excel & VBA", "ETL & Data Modeling", "KPI Dashboards",
    ].map((tag) => (
      <span
        key={tag}
        className="text-xs px-3 py-1 rounded-full border border-accent/20 text-accent/80"
      >
        {tag}
      </span>
    ))}
  </div>
        {/* CTA */}
        <Link
          href="/about"
          className="inline-block mt-4 text-sm text-[#5B8DEF] hover:underline"
        >
          Read full profile →
        </Link>

      </div>

    </div>
  )
}