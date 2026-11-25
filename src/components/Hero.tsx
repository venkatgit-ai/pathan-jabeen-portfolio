import React, { useState, useEffect } from 'react';
import HeroScene from './3d/HeroScene';
import IdentityCard from './3d/IdentityCard';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Sparkles, MessageSquare, ChevronRight, Send, FlaskConical } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [speechIndex, setSpeechIndex] = useState(0);

  // Mouse move handler for 3D parallax & avatar head tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = (e.clientY / innerHeight) * 2 - 1;
    setMousePos({ x, y });
  };

  // Rotate speech lines to simulate talking
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeechIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.speechIntroduction.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Role pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold tracking-wider uppercase">
                {PORTFOLIO_DATA.personal.role}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">
                {PORTFOLIO_DATA.personal.subtitle}
              </span>
            </div>

            {/* Main Editorial Typography */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-none">
                {PORTFOLIO_DATA.personal.name.toUpperCase()}
              </h1>
              <p className="text-lg sm:text-2xl font-display font-semibold text-gradient">
                {PORTFOLIO_DATA.personal.taglinePrimary}{' '}
                <span className="text-emerald-400">{PORTFOLIO_DATA.personal.taglineSecondary}</span>
              </p>
            </div>

            {/* Character Speech Bubble Introduction */}
            <div className="relative glass-panel rounded-2xl p-5 border-l-4 border-l-emerald-400 border-white/10 max-w-xl shadow-xl">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-semibold mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>3D SCIENTIST AVATAR INTRODUCTION</span>
                <span className="text-slate-500">•</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-slate-400">SPEAKING</span>
              </div>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans min-h-[56px] transition-all duration-300">
                "{PORTFOLIO_DATA.personal.speechIntroduction[speechIndex]}"
              </p>

              {/* Progress Dots */}
              <div className="flex space-x-1.5 pt-3">
                {PORTFOLIO_DATA.personal.speechIntroduction.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSpeechIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      speechIndex === i ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Speech segment ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 active:scale-95 group"
              >
                <span>Explore Research & Formulations</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-emerald-400/50 transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div className="pt-4 flex items-center space-x-6 text-xs font-mono text-slate-400">
              <div>
                <span className="text-emerald-400 font-bold text-sm">8.62</span> B.Pharm CGPA
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <div>
                <span className="text-cyan-400 font-bold text-sm">100%</span> Green Solvent
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-700" />
              <div>
                <span className="text-purple-400 font-bold text-sm">GenAI</span> Pioneer
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3D SCIENTIST CANVAS & ID CARD ================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* 3D Canvas with Stylized Female Scientist Avatar */}
            <div className="w-full relative z-10">
              <HeroScene mousePos={mousePos} />
            </div>

            {/* Floating 3D Identity Card */}
            <div className="w-full -mt-16 sm:-mt-20 relative z-20">
              <IdentityCard />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8 text-slate-500 hover:text-emerald-400 transition-colors">
        <a href="#about" className="flex flex-col items-center space-y-1">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" />
        </a>
      </div>
    </section>
  );
}
