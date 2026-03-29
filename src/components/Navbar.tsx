"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full backdrop-blur-md bg-surface/80 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-text-primary">Peter Obikpe</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-text-secondary">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/insights" className="hover:text-accent transition-colors">Insights</Link>
          <Link href="/media" className="hover:text-accent transition-colors">Media</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden flex items-center text-text-secondary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface/90 border-t border-gray-800">
          <ul className="flex flex-col p-4 space-y-4 text-text-secondary">
            <li><Link href="/about" className="hover:text-accent" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/projects" className="hover:text-accent" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/insights" className="hover:text-accent" onClick={() => setIsOpen(false)}>Insights</Link></li>
            <li><Link href="/media" className="hover:text-accent" onClick={() => setIsOpen(false)}>Media</Link></li>
            <li><Link href="/contact" className="hover:text-accent" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}