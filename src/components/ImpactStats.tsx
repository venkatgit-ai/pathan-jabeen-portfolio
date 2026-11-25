import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, Leaf, Sparkles, CheckCircle } from 'lucide-react';

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">05 // Academic & Technical Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Academic Track Record & Highlights
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Consistent academic distinction, verified industrial training at Teena Bio Laboratories, and recognized proficiency in Generative AI.
          </p>
        </div>

        {/* 5 Impact Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PORTFOLIO_DATA.impactStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`glass-panel rounded-2xl p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-500 text-center flex flex-col justify-between group hover:-translate-y-1.5 shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform">
                {idx === 0 && <GraduationCap className="w-4 h-4" />}
                {idx === 1 && <Award className="w-4 h-4" />}
                {idx === 2 && <Leaf className="w-4 h-4" />}
                {idx === 3 && <Sparkles className="w-4 h-4" />}
                {idx === 4 && <CheckCircle className="w-4 h-4" />}
              </div>

              <div className="my-2">
                <div className="text-3xl sm:text-4xl font-mono font-black text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-display font-bold text-white mt-1">
                  {stat.label}
                </div>
              </div>

              <p className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
