import SectionWrapper from "@/components/SectionWrapper"
import Image from 'next/image'
export default function AboutPage() {
  return (
    <SectionWrapper>
      {/* Increased pt-32 to clear the fixed/sticky navigation header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-22 pb-20">
        
        {/* Sidebar: Image & Skills */}
<div className="md:col-span-4 space-y-8">
 <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
  <Image 
    src="/images/projects/Passport photograph.jpg"
    alt="Peter Obikpe" 
    fill
    className="object-cover"
    priority // Loads this image first
  />
</div>
  
  <div>
    <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px] text-[#5B8DEF]">Technical Stack</h3>
    <div className="flex flex-wrap gap-2">
      {['Python', 'SQL', 'Tableau', 'Excel', 'PowerBI', 'AWS'].map(skill => (
        <span key={skill} className="px-3 py-1 bg-[#0A0A0A] border border-gray-800 rounded text-xs text-gray-400">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* --- NEW: Download CV Button --- */}
  <div className="pt-4">
    <a 
      href="/Peter Obikpe CV.pdf" // Make sure your PDF is in the /public folder
      download
      className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-[#5B8DEF] hover:text-white transition-all group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
      DOWNLOAD CV
    </a>
  </div>
</div>


        {/* Main Content: Bio */}
        <div className="md:col-span-8 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              The Person Behind the Data
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              My name is Peter Obikpe, a Junior Data Analyst. 
              I specialize in bridging the gap between complex technical data and actionable business insights. 
              With a background in data analytics through the Google Professional Data Analytics Certification, 
              and a BSc. in Mathematics Education, I focus on creating clean, 
              scalable data solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not writing SQL queries or building Python scripts, you can find me 
              exploring new visualization techniques or contributing to open-source data projects.
            </p>
          </div>
          
          <div className="pt-10 border-t border-gray-900">
            <h3 className="text-white text-xl font-bold mb-6">Experience Highlights</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-[#5B8DEF] font-mono font-bold">01.</span>
                <p className="text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">Data Analyst (Volunteer) at The Community Revolution CIC</span> — 
                  Automated weekly reporting which saved 10+ hours per month.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#5B8DEF] font-mono font-bold">02.</span>
                <p className="text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold">Data Analytics Tutor at Megatek ICT Academy</span> — 
                  Trained learners on how to provide insights and interpret data to help make informed decisions.
                </p>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}