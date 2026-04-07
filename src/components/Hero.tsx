"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-[#5B8DEF]">Peter</span>.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
            A Data Analyst dedicated to uncovering stories hidden in numbers. I build 
            dashboards and ETL pipelines that turn raw data into strategic assets.
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="px-6 py-3 bg-[#5B8DEF] rounded-lg font-bold hover:bg-[#4A7CDD] transition-all">
              View Work
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-white/5 transition-all">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Headshot with Decorative Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          {/* Decorative Background Element */}
          <div className="absolute -inset-4 border border-[#5B8DEF]/20 rounded-full animate-pulse" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl">
            <img 
              src="/images/projects/Passport photograph.jpg" 
              alt="Peter Obikpe" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Floating Data Badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#111] border border-gray-800 p-4 rounded-xl shadow-lg">
            <p className="text-[#5B8DEF] font-mono text-xs font-bold">LATEST_PROJECT</p>
            <p className="text-white text-sm font-medium">Healthcare ETL ✓</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}