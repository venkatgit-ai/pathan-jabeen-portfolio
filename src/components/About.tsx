import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FlaskConical, Leaf, Activity, ShieldCheck, Bot, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">01 // Scientific Profile</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            {PORTFOLIO_DATA.about.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            {PORTFOLIO_DATA.about.summary}
          </p>
        </div>

        {/* 6 Core Focus Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.about.focusPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden shadow-xl"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-emerald-500/20 transition-all" />

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-md shadow-emerald-500/10">
                  {iconMap[pillar.icon] || <FlaskConical className="w-5 h-5" />}
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Core Scientific Philosophy Banner */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h4 className="text-base font-display font-bold text-white flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Professional Goal & Ethics</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              "Dedicated to joining a professionally run organization where I can learn, innovate in pharmaceutical formulations, and contribute meaningfully to patient health and healthcare technology."
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 whitespace-nowrap">
            <span>GMP & ETHICS COMPLIANT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
