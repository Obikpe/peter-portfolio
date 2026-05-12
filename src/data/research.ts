export type Research = {
  slug: string
  title: string
  author: string
  abstract: string
  keywords: string[]
  methodology: string
  results: string
  conclusion: string
  pdf?: string
}

export const research = [
  {
    slug: "dyscalculia-anxiety",

    title:
      "The Relationship Between Dyscalculia and Mathematics Anxiety Levels in University Students: A Cross-Sectional Analysis",

    author: "Peter Obikpe",

    abstract:
      "This study examines the relationship between dyscalculia and mathematics anxiety among university students. Using a cross-sectional research design, the study investigates whether students with learning difficulties in mathematics exhibit significantly higher anxiety levels. The findings contribute to the growing body of literature on cognitive learning challenges and their psychological implications in higher education.",

    keywords: [
      "Dyscalculia",
      "Mathematics Anxiety",
      "Higher Education",
      "Statistical Analysis",
      "Cognitive Learning"
    ],

    methodology:
      "The study employed a cross-sectional survey design involving university students from diverse academic disciplines. Data was collected using structured questionnaires measuring indicators of dyscalculia and levels of mathematics anxiety. Statistical techniques, including correlation analysis and hypothesis testing, were applied to determine the strength and significance of the relationship between the variables.",

    results:
      "The analysis revealed a statistically significant positive relationship between dyscalculia and mathematics anxiety. Students identified with higher levels of dyscalculia consistently reported elevated anxiety when engaging with mathematical tasks. The findings suggest that cognitive learning difficulties play a critical role in shaping emotional responses to academic challenges.",

    conclusion:
      "This study highlights the need for targeted academic interventions and support systems for students experiencing dyscalculia. Addressing both the cognitive and emotional dimensions of learning difficulties can improve academic performance and reduce anxiety-related barriers. The research provides a foundation for further studies exploring intervention strategies in higher education.",

    // NEW SECTIONS 👇

    problem:
      "Many university students struggle with mathematics anxiety, yet the underlying cognitive factors contributing to this issue remain underexplored. Dyscalculia, a specific learning difficulty affecting numerical understanding, may be a significant but overlooked factor influencing anxiety levels.",

    objective:
      "To investigate whether a measurable relationship exists between dyscalculia and mathematics anxiety among university students.",

    hypothesis:
      "Students with higher levels of dyscalculia are more likely to experience increased mathematics anxiety.",

    tools: [
      "Excel",
      "Statistical Analysis",
      "Survey Design",
      "Data Cleaning"
    ],

    limitations:
      "The study is limited by its cross-sectional design, which restricts causal inference. Additionally, reliance on self-reported data may introduce response bias.",

    pdf: ".../public/The Relationship Between dyscalcilia and anxiety levels in University Students.pdf"
  }
]