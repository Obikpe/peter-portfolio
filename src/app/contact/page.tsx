"use client"

import { useState } from "react"
import SectionWrapper from "@/components/SectionWrapper"

export default function ContactPage() {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  // Replace 'YOUR_FORMSPREE_ID' with the actual ID from your Formspree dashboard
  const FORMSPREE_URL = "https://formspree.io/f/xnnpbkqq";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Get in <span className="text-[#5B8DEF]">Touch</span>
          </h1>
          <p className="text-gray-400 font-mono text-[10px] uppercase tracking-[0.3em] leading-relaxed">
            Available for Data Analysis Projects & <br /> Educational Partnerships
          </p>
        </header>

        {/* Form Section */}
        {status === "SUCCESS" ? (
          <div className="bg-[#5B8DEF]/5 border border-[#5B8DEF]/20 p-12 rounded-2xl text-center animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-[#5B8DEF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-[#5B8DEF] text-2xl">✓</span>
            </div>
            <h3 className="text-white font-bold text-2xl mb-3 tracking-tight">Message Received</h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Thanks for reaching out, Peter. I'll review your inquiry and get back to you shortly.
            </p>
            <button 
              onClick={() => setStatus("IDLE")}
              className="text-[10px] font-bold uppercase tracking-widest text-[#5B8DEF] hover:text-white transition-colors"
            >
              ← Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-[#080808] border border-gray-900 rounded-xl p-4 text-white focus:outline-none focus:border-[#5B8DEF]/50 focus:ring-1 focus:ring-[#5B8DEF]/20 transition-all placeholder:text-gray-800"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-[#080808] border border-gray-900 rounded-xl p-4 text-white focus:outline-none focus:border-[#5B8DEF]/50 focus:ring-1 focus:ring-[#5B8DEF]/20 transition-all placeholder:text-gray-800"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Inquiry Type</label>
              <div className="relative">
                <select 
                  name="subject"
                  className="w-full bg-[#080808] border border-gray-900 rounded-xl p-4 text-white focus:outline-none focus:border-[#5B8DEF]/50 transition-all appearance-none cursor-pointer"
                >
                  <option>Data Analysis Project</option>
                  <option>Training / Educator Role</option>
                  <option>Business Partnership</option>
                  <option>General Inquiry</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                  <span className="text-[10px]">▼</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 ml-1">Your Message</label>
              <textarea 
                name="message" 
                required 
                rows={5}
                className="w-full bg-[#080808] border border-gray-900 rounded-xl p-4 text-white focus:outline-none focus:border-[#5B8DEF]/50 focus:ring-1 focus:ring-[#5B8DEF]/20 transition-all resize-none placeholder:text-gray-800"
                placeholder="Briefly describe your project or question..."
              />
            </div>
            {/* Honeypot Field - Hidden from humans, trap for bots */}
<input type="text" name="_gotcha" style={{ display: "none" }} />
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-[#5B8DEF] hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-white/5"
            >
              Send Information
            </button>
            
            {status === "ERROR" && (
              <p className="text-red-500 text-[10px] font-mono text-center uppercase tracking-widest">
                System Error. Please check your connection or try WhatsApp.
              </p>
            )}
          </form>
        )}

        {/* Direct Connect Section */}
        <div className="mt-20 pt-12 border-t border-gray-900/50">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-700 mb-8 text-center">
            Instant Communication
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/2349021972123?text=Hi%20Peter,%20I%20just%20viewed%20your%20data%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20opportunity." // Put your number here
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-[#25D366]/5 border border-[#25D366]/10 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-500 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              WhatsApp
            </a>
            <a 
              href="https://linkedin.com/in/peter-obikpe-8780903a5" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-[#0077B5]/5 border border-[#0077B5]/10 rounded-full text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-500 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Obikpe" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-500 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}