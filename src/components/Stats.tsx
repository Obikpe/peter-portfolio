"use client"

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { projects } from "@/data/projects"

// 1. Define RollingNumber FIRST so it is available below
function RollingNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, value, count])

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v))
  }, [rounded])

  return <span ref={ref}>{displayValue}{suffix}</span>
}

// 2. Export your Stats component
export default function Stats({ articleCount }: { articleCount: number }) {
  const [githubRepos, setGithubRepos] = useState(0)
  const projectsCount = projects.filter((p) => p.status === "published").length

  useEffect(() => {
    fetch("https://api.github.com/users/Obikpe")
      .then((res) => res.json())
      .then((data) => {
        if (data.public_repos) {
          setGithubRepos(data.public_repos)
        }
      })
      .catch((err) => console.error("Error fetching GitHub data:", err))
  }, [])

  const stats = [
    { label: "Projects Completed", value: projectsCount, suffix: "+" },
    { label: "Articles Written", value: articleCount, suffix: "+" },
    { label: "GitHub Repositories", value: githubRepos, suffix: "" },
    { label: "Datasets Analyzed", value: 25, suffix: "+" },
  ]

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center my-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111] p-6 md:p-8 rounded-xl border border-gray-800 hover:border-[#5B8DEF]/30 transition-all group"
        >
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#5B8DEF] tabular-nums">
            <RollingNumber value={stat.value} suffix={stat.suffix} />
          </h3>
          <p className="text-gray-500 mt-2 font-mono uppercase tracking-widest text-[9px] md:text-[10px] group-hover:text-gray-300 transition-colors">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </section>
  )
}