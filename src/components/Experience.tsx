import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle, ChevronDown, ChevronUp, Sparkles, TrendingUp } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">03 // Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A track record of architecting scalable backend systems, driving platform resilience, and deploying generative AI assistants in production.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={exp.title + exp.period} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Card Container */}
                <div
                  className={`glass-panel rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                    isExpanded
                      ? 'border-cyan-500/40 shadow-2xl shadow-cyan-500/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{exp.type}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.title}
                      </h3>
                    </div>

                    <button
                      className="self-start sm:self-center p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Highlight Metrics Banner if available */}
                  {exp.metrics && isExpanded && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5 pt-4 border-t border-white/10">
                      {exp.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center">
                          <div className="text-xl sm:text-2xl font-mono font-extrabold text-cyan-400">{m.value}</div>
                          <div className="text-[10px] sm:text-xs font-mono text-slate-300 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable Achievements List */}
                  {isExpanded && (
                    <div className="mt-5 space-y-3 pt-3 border-t border-white/10">
                      {exp.achievements.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed font-sans">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Summary preview if collapsed */}
                  {!isExpanded && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 truncate">
                      {exp.achievements[0]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
