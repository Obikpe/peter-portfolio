export type Insight = {
  slug: string
  title: string
  summary: string
  readTime: string
  status: "published" | "draft"
  content: string[]
}

export const insights: Insight[] = [
  {
    slug: "text-to-columns-excel",
    title: "Using Text to Columns in Excel for Data Cleaning",
    summary:
      "Learn how Excel's Text to Columns feature helps transform messy datasets into structured tables.",
    readTime: "5 min read",
    status: "published",

    content: [
      "Data cleaning is one of the most important steps in the data analysis process.",
      "Often, datasets contain values that are combined in a single column and need to be separated before analysis.",
      "Excel’s Text to Columns feature allows analysts to split data based on delimiters such as commas, spaces, or custom characters.",
      "For example, a column containing 'Lagos, Nigeria' can be separated into two columns: City and Country.",
      "This transformation improves data structure and makes further analysis easier."
    ]
  },

  {
    slug: "advanced-sql-functions",
    title: "Advanced SQL Functions for Data Analysts",
    summary:
      "A guide to SQL functions frequently used in analytics workflows.",
    readTime: "7 min read",
    status: "draft",

    content: [
      "SQL functions allow analysts to perform calculations, transformations, and aggregations on data.",
      "Common functions include COUNT, SUM, AVG, and advanced window functions like ROW_NUMBER()."
    ]
  }
]