import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PeriodicTable from './components/PeriodicTable';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ImpactStats from './components/ImpactStats';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background Starfield Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), radial-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      <Navbar />

      <main className="relative z-10 space-y-12">
        <Hero />
        <About />
        <PeriodicTable />
        <Experience />
        <Projects />
        <ImpactStats />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
