import SectionWrapper from "@/components/SectionWrapper"
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-900/50 bg-[#030303]/50 backdrop-blur-xl py-12">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} PETER OBIKPE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-gray-400 text-sm font-medium">
            <a href="https://linkedin.com/in/peter-obikpe-8780903a5" className="hover:text-[#5B8DEF] transition-colors">LinkedIn</a>
            <a href="https://github.com/Obikpe" className="hover:text-[#5B8DEF] transition-colors">GitHub</a>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  )
}