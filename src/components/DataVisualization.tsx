"use client"

import React from "react"

// ================= ICONS =================

export const PieChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    <path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
)

export const BarChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

export const ScatterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
    <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
    <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
    <circle cx="5.5" cy="18.5" r=".5" fill="currentColor" />
  </svg>
)

export const LineChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)


// ================= MAIN COMPONENT =================

export default function DataVisualization() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* Chart Card 1 */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
        <div className="flex items-center gap-3 mb-4">
          <LineChartIcon />
          <p className="text-sm text-gray-400">Trend Analysis</p>
        </div>

        <div className="h-32 bg-gradient-to-br from-[#5B8DEF]/10 to-transparent rounded-lg flex items-center justify-center text-gray-500 text-sm">
          Line Chart Preview
        </div>
      </div>

      {/* Chart Card 2 */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
        <div className="flex items-center gap-3 mb-4">
          <BarChartIcon />
          <p className="text-sm text-gray-400">Comparative Analysis</p>
        </div>

        <div className="h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg flex items-center justify-center text-gray-500 text-sm">
          Bar Chart Preview
        </div>
      </div>

      {/* Chart Card 3 */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
        <div className="flex items-center gap-3 mb-4">
          <PieChartIcon />
          <p className="text-sm text-gray-400">Distribution</p>
        </div>

        <div className="h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-lg flex items-center justify-center text-gray-500 text-sm">
          Pie Chart Preview
        </div>
      </div>

      {/* Chart Card 4 */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition">
        <div className="flex items-center gap-3 mb-4">
          <ScatterIcon />
          <p className="text-sm text-gray-400">Correlation</p>
        </div>

        <div className="h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg flex items-center justify-center text-gray-500 text-sm">
          Scatter Plot Preview
        </div>
      </div>

    </div>
  )
}