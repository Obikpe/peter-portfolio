import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CodeBackground from "@/components/CodeBackground"
// 1. Import the Analytics component
import { Analytics } from "@vercel/analytics/react"

// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "Peter Obikpe | Data Analyst Portfolio",
    template: "%s | Peter Obikpe"
  },
  description: "Junior Data Analyst and Educator specializing in Python, SQL, and Power BI. Bridging the gap between data and actionable insights.",
  verification: {
    google: "PydPWVkftU_q4Jhix2m_XE1OA5rqy1WseN4ujEiL_gk",
  },
  openGraph: {
    title: "Peter Obikpe | Data Analyst",
    description: "Data solutions and analytical insights.",
    url: "https://your-domain.com", // Update this when you have your final domain
    siteName: "Peter Obikpe Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030303] text-gray-300 min-h-screen flex flex-col antialiased selection:bg-[#5B8DEF]/30 selection:text-white overflow-x-hidden">
        
        {/* Ambient Overlay: Adds a subtle 'spotlight' effect to the center of the screen */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,17,0)_0%,rgba(3,3,3,1)_100%)]" />

        <CodeBackground />
        
        <nav className="relative z-50">
          <Navbar />
        </nav>
        
        <main className="relative z-10 flex-grow">
          {children}
        </main>

        <footer className="relative z-20 border-t border-gray-900/50 bg-[#030303]/80 backdrop-blur-md">
          <Footer />
        </footer>

        {/* 2. Add the Analytics component here */}
        <Analytics />
      </body>
    </html>
  )
}