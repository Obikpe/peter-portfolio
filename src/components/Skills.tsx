export default function Skills() {
  const skills = [
    "PowerBI",
    "SQL",
    "R",
    "Python",
    "Data Analysis",
    "Excel",
  ]

  return (
    // Removed py-24 and the H2 title so they don't clash with the main page layout
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="border border-gray-800 rounded-lg p-4 text-center text-sm font-medium text-gray-300 hover:border-[#5B8DEF]/50 hover:text-white transition-all bg-[#0A0A0A]"
        >
          {skill}
        </div>
      ))}
    </div>
  )
}