"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PieChartIcon, BarChartIcon, ScatterIcon, LineChartIcon } from "./DataVisualization"

const SNIPPETS = ["SELECT *", "df.describe()", "plt.show()", "correlation: 0.92", "AVG(sales)"];
const CHART_ICONS = [<PieChartIcon />, <BarChartIcon />, <ScatterIcon />, <LineChartIcon />];

export default function CodeBackground() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0a0a0a]">
      {Array.from({ length: 35 }).map((_, i) => {
        const isChart = i % 3 === 0; // 33% charts, 66% code
        
        return (
          <motion.div
            key={i}
            className="absolute text-[#5B8DEF]"
            initial={{ 
              top: "115%", 
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0.8
            }}
            animate={{ 
              top: "-20%",
              left: `${(Math.random() * 20 - 10) + (i * 3)}%`, // Add slight horizontal drift
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.8, 1, 1, 0.8]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 25
            }}
          >
            {isChart ? (
              <div className="flex flex-col items-center gap-1">
                {CHART_ICONS[i % CHART_ICONS.length]}
                <span className="text-[8px] uppercase tracking-widest opacity-30 font-mono">Data_Viz</span>
              </div>
            ) : (
              <span className="text-xs font-mono opacity-20">{SNIPPETS[i % SNIPPETS.length]}</span>
            )}
          </motion.div>
        )
      })}

      {/* Vignette effect to keep the edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_90%)]" />
    </div>
  )
}