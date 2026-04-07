export type Project = {
  slug: string
  title: string
  category: string
  tools: string[]
  image?: string;
  summary: string
  problem: string
  approach: string
  impact: string
  github?: string
  video?: string
  status: "published" | "draft"
}

export const projects: Project[] = [
  {
    slug: "retail-erp-automation-system",
    title: "Automated ERP & Business Intelligence System",
    category: "Data Engineering & Analytics",
    tools: ["VBA", "Excel Macro", "Power Pivot", "Relational Logic"],
    image: "/images/projects/Nduka Sales Form.png",
    github: "https://github.com/Obikpe/Nduka-Gadgets-Co.---Automated-Retail-ERP-System",
    summary:
      "Developed a full-scale retail management system that automates sales workflows and visualizes business performance.",
    problem:
      "A high-volume electronics retailer needed to eliminate manual data entry errors and centralize fragmented multi-item sales records.",
    approach:
      "Engineered a VBA-powered interface with sheet-protection toggles, relational database mapping, and an interactive executive dashboard.",
    impact:
      "Achieved 100% data integrity for multi-product transactions and provided real-time visibility into revenue trends and inventory performance.",
    status: "published"
},
  {
    slug: "internet-usage-data-integrity-audit",
    title: "Global Internet Usage Data Integrity Audit",
    category: "Data Engineering",
    tools: ["Python", "Pandas", "ETL"],
    image: "/images/projects/Internet Usage Cleaning py.png",
    summary:
      "Built a structured ETL pipeline to clean and validate 20,000+ global internet usage records.",
    problem:
      "Dataset contained 18% null values, inconsistent formatting, and duplicate entries.",
    approach:
      "Applied median imputation, removed low-variance features, encoded categorical fields for ML readiness.",
    impact:
      "Reduced dataset error rate to <1% and produced production-ready dataset for modeling.",
    github:
      "https://github.com/Obikpe/Global-Internet-Usage-Data-Integrity-Audit-Python-Excel-",
    status: "published"
  },

  {
    slug: "migration-trends-analysis",
    title: "Socio-Economic Factors in Global Migration",
    category: "Exploratory Analysis",
    tools: ["Python", "Correlation Matrix", "EDA"],
    
    summary:
      "Analyzed multi-decade migration data to uncover statistical drivers.",
    problem:
      "Needed to determine whether unemployment, political stability, or environmental factors drove migration trends.",
    approach:
      "Built correlation matrix, regional subsets, hypothesis testing visualizations.",
    impact:
      "Identified environmental variables as strongest recent correlation driver.",
    status: "published"
  },

  /*
  {
    slug: "future-ml-project",
    title: "Predictive Analytics Model",
    category: "Machine Learning",
    tools: ["Python", "XGBoost"],
    summary: "",
    problem: "",
    approach: "",
    impact: "",
    status: "draft"
  },
  */
]