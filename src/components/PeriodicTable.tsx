import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { Layers, X, FlaskConical, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'All Resume Skills (8)' },
  { key: 'analytical', label: 'Analytical & Lab (2)' },
  { key: 'pharmaceutics', label: 'Pharmaceutics & Formulation (2)' },
  { key: 'regulatory', label: 'Regulatory & GMP (2)' },
  { key: 'ai_digital', label: 'Digital & GenAI (2)' }
];

const categoryColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  analytical: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/40', text: 'text-cyan-400', glow: 'rgba(0,240,255,0.3)' },
  pharmaceutics: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', glow: 'rgba(168,85,247,0.3)' },
  regulatory: { bg: 'bg-amber-500/10', border: 'border-amber-500/40', text: 'text-amber-400', glow: 'rgba(245,158,11,0.3)' },
  ai_digital: { bg: 'bg-pink-500/10', border: 'border-pink-500/40', text: 'text-pink-400', glow: 'rgba(236,72,153,0.3)' }
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
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">02 // Verified Technical Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Periodic Table of Pharmaceutical Sciences & AI
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Curated directly from Pathan Jabeen's resume: a focused periodic matrix highlighting core spectrophotometry, green solvent titrations, formulation science, industrial GMP, and health-tech AI credentials. Click any element to view experimental context.
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
                    ? 'bg-emerald-500 text-slate-900 border-emerald-400 font-bold shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Periodic Grid Container - Balanced 4x2 matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => {
            const colors = categoryColors[skill.category] || categoryColors.analytical;
            const isCurrentActive = activeSkill?.id === skill.id;

            return (
              <div
                key={skill.id}
                onClick={() => setActiveSkill(skill)}
                className={`group relative rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 select-none border ${
                  isCurrentActive
                    ? 'border-emerald-400 bg-emerald-500/20 shadow-xl shadow-emerald-500/20 -translate-y-1.5'
                    : 'border-white/10 bg-slate-900/70 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-xl'
                }`}
                style={{
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Element Top Bar: Atomic Number & Resume Verified Pill */}
                <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                  <span className="text-slate-400 group-hover:text-emerald-400 font-bold transition-colors">
                    #{skill.atomicNumber < 10 ? `0${skill.atomicNumber}` : skill.atomicNumber}
                  </span>
                  <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-sans">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Element Center: Large Chemical Symbol */}
                <div className="my-2 text-center py-2">
                  <div
                    className={`text-3xl sm:text-4xl font-display font-black tracking-tight transition-transform duration-300 group-hover:scale-110 ${colors.text}`}
                  >
                    {skill.symbol}
                  </div>
                </div>

                {/* Element Bottom: Full Name & Source Tag */}
                <div className="mt-3 text-center border-t border-white/5 pt-3 space-y-1">
                  <div className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-1 group-hover:text-white transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {skill.categoryLabel}
                  </div>
                  <div className="inline-block mt-1 text-[9px] font-mono text-emerald-400/90 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 truncate max-w-full">
                    {skill.resumeSource}
                  </div>
                </div>

                {/* Subtle Hover Glow on border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 20px ${colors.glow}`
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
              className="relative w-full max-w-lg glass-panel-glow rounded-2xl p-6 sm:p-8 border border-emerald-500/40 shadow-2xl animate-scaleUp"
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
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{activeSkill.categoryLabel}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5">
                    {activeSkill.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Source: <span className="text-emerald-400">{activeSkill.resumeSource}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1 uppercase tracking-wide">
                    Laboratory & Technical Scope
                  </span>
                  <p className="text-slate-200 leading-relaxed font-sans">
                    {activeSkill.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
                  <div className="flex items-center space-x-2 font-bold mb-1">
                    <FlaskConical className="w-3.5 h-3.5" />
                    <span>Directly Verified on Resume</span>
                  </div>
                  <p className="text-slate-300">
                    Documented under {activeSkill.resumeSource} in Pathan Jabeen's academic & research portfolio.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setActiveSkill(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-mono text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
