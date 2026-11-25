import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { Sparkles, Layers, Info, X, Terminal, ExternalLink } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'All Elements' },
  { key: 'languages', label: 'Languages' },
  { key: 'backend', label: 'Backend & Frameworks' },
  { key: 'databases', label: 'Databases & Caching' },
  { key: 'messaging', label: 'Messaging & Distributed' },
  { key: 'devops', label: 'DevOps & Cloud' },
  { key: 'ai_tools', label: 'AI & Tools' }
];

const categoryColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  languages: { bg: 'bg-amber-500/10', border: 'border-amber-500/40', text: 'text-amber-400', glow: 'rgba(245,158,11,0.3)' },
  backend: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/40', text: 'text-emerald-400', glow: 'rgba(16,185,129,0.3)' },
  databases: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', text: 'text-cyan-400', glow: 'rgba(0,240,255,0.3)' },
  messaging: { bg: 'bg-rose-500/10', border: 'border-rose-500/40', text: 'text-rose-400', glow: 'rgba(244,63,94,0.3)' },
  devops: { bg: 'bg-blue-500/10', border: 'border-blue-500/40', text: 'text-blue-400', glow: 'rgba(59,130,246,0.3)' },
  ai_tools: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', glow: 'rgba(168,85,247,0.3)' }
};

export default function PeriodicTable() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) =>
    selectedCategory === 'all' ? true : skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]/60">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">02 // Technical Skills Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Periodic Table of Technologies
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            An interactive periodic table grouping languages, distributed systems, storage engines, and generative AI frameworks. Click any element to inspect its architectural context.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-900 border-cyan-400 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Periodic Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          {filteredSkills.map((skill) => {
            const colors = categoryColors[skill.category] || categoryColors.languages;
            const isCurrentActive = activeSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setActiveSkill(skill)}
                className={`group relative rounded-xl p-3 sm:p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 select-none border ${
                  isCurrentActive
                    ? 'border-cyan-400 bg-cyan-500/20 shadow-xl shadow-cyan-500/20 -translate-y-1.5'
                    : 'border-white/10 bg-slate-900/60 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg'
                }`}
                style={{
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Element Top Bar: Atomic Number & Category Dot */}
                <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    #{skill.atomicNumber < 10 ? `0${skill.atomicNumber}` : skill.atomicNumber}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${colors.bg} border ${colors.border}`} />
                </div>

                {/* Element Center: Large Chemical Symbol */}
                <div className="my-1.5 text-center">
                  <div
                    className={`text-2xl sm:text-3xl font-display font-black tracking-tight transition-transform duration-300 group-hover:scale-110 ${colors.text}`}
                  >
                    {skill.symbol}
                  </div>
                </div>

                {/* Element Bottom: Full Name */}
                <div className="mt-2 text-center border-t border-white/5 pt-2">
                  <div className="text-xs font-semibold text-slate-200 truncate group-hover:text-white">
                    {skill.name}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 truncate">
                    {skill.categoryLabel.split(' ')[0]}
                  </div>
                </div>

                {/* Subtle Hover Glow on border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 15px ${colors.glow}`
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* ================= ACTIVE SKILL DETAIL MODAL / DRAWER ================= */}
        {activeSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
            onClick={() => setActiveSkill(null)}
          >
            <div
              className="relative w-full max-w-lg glass-panel-glow rounded-2xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close skill details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start space-x-4 mb-5">
                <div
                  className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center border font-display font-black text-2xl shadow-xl ${
                    categoryColors[activeSkill.category]?.border
                  } ${categoryColors[activeSkill.category]?.bg} ${categoryColors[activeSkill.category]?.text}`}
                >
                  <span className="text-[10px] font-mono opacity-60">#{activeSkill.atomicNumber}</span>
                  <span>{activeSkill.symbol}</span>
                </div>

                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {activeSkill.categoryLabel}
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white mt-0.5">
                    {activeSkill.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1 uppercase tracking-wide">
                    Architectural Application
                  </span>
                  <p className="text-slate-200 leading-relaxed font-sans">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  <div className="flex items-center space-x-2 font-bold mb-1">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Production Usage</span>
                  </div>
                  <p className="text-slate-300">
                    Deployed in production pipelines across microservice architectures, high-load caching layers, or agentic GenAI translation.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
