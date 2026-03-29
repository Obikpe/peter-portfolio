import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const insightsDirectory = path.join(process.cwd(), "src/content/insights")

export function getAllInsights() {
  // 1. Read the directory
  const files = fs.readdirSync(insightsDirectory)

  // 2. Map through files to get metadata
  const insights = files.map((file) => {
    const slug = file.replace(".md", "")
    const fullPath = path.join(insightsDirectory, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
      // Ensure date is a string for sorting
      date: data.date || "" 
    }
  })

  // 3. Sort by date (Newest first)
  return insights.sort((a, b) => 
    new Date(b.date as string).getTime() - new Date(a.date as string).getTime()
  )
}

export async function getInsight(slug: string) {
  if (!slug) return null

  const fullPath = path.join(insightsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)

  const contentHtml = processedContent.toString()

  return {
    slug,
    ...data,
    contentHtml
  }
}