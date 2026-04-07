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
    slug: "qsr-sales-strategy-profit-optimization",
    title: "QSR Sales Strategy and Profit Optimization",
    category: "Business Intelligence",
    tools: ["Power BI", "DAX", "Data Modeling"],
    image: "/images/projects/Sales Performance Review.png", // Ensure this filename matches exactly
    github: "https://github.com/Obikpe/QSR-Sales-Strategy-and-Profit-Optimization--Chicken-Republic/tree/main/Chicken%20Republic", // Update with the specific repo if different
    
    summary:
      "Developed a comprehensive Power BI dashboard to evaluate profitability and sales performance across multiple product categories and distribution channels.",
    
    problem:
      "The business needed to identify which product lines and payment methods were driving the highest profit margins to optimize daily operations and marketing spend.",
    
    approach:
      "Aggregated transactional data to create average monthly and daily profit profiles. Implemented donut charts for distribution analysis and bar charts to rank top-selling products and profit by category.",
    
    impact:
      "Identified that 'Cash' and 'Direct Sales' account for over 50% of profit, while specific products (Product30) significantly outperform others, allowing for targeted inventory management.",
    
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