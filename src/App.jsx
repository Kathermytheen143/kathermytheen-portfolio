import React from 'react';
import Navbar from './components/Navbar';
import MouseGlow from './components/MouseGlow';
import NeuralNetworkCanvas from './components/NeuralNetworkCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-white font-sans overflow-x-hidden selection:bg-accent/35 selection:text-white">
      {/* Visual cybernetic elements */}
      <MouseGlow />
      <NeuralNetworkCanvas />

      {/* Floating navigation header */}
      <Navbar />

      {/* Content wrapper */}
      <main className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        
        {/* Sections layout with subtle dividers */}
        <div className="divide-y divide-white/5">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Futuristic status footer bar */}
      <footer className="relative z-10 border-t border-white/5 py-8 bg-[#070A11]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-space font-semibold">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>PORTFOLIO STATUS: ONLINE // SECURE CHANNEL</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} S. Kathermytheen. ALL RIGHTS RESERVED.</span>
          </div>
          <div>
            <span>LATENCY: LOCALHOST // OS: WINDOWS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
