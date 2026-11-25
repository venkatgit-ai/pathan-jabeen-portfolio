import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, Sparkles } from 'lucide-react';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#07090e]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">06 // Academic Background</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Academic Excellence
          </h2>
        </div>

        {/* Education Showcase Card */}
        <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-white/10 hover:border-cyan-500/30 transition-all shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 to-transparent pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  {education.institution}
                </h3>
                <div className="text-sm font-mono text-cyan-400 mt-0.5">
                  {education.degree}
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                <span>{education.grade}</span>
              </span>
              <div className="flex items-center space-x-1 text-xs font-mono text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{education.period}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            {education.highlights.map((h, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
