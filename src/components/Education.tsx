import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, Sparkles, CheckCircle2, ShieldCheck, Radio } from 'lucide-react';

export default function Education() {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#07090e]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">06 // Academic & Certifications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Education & Verified Certifications
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            A comprehensive foundation in pharmaceutical sciences, green chemistry titrations, and specialized industrial laboratory training.
          </p>
        </div>

        {/* Academics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {education.map((edu, idx) => (
            <div
              key={edu.degree}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/30 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                    {edu.grade}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-display font-extrabold text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400 mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {edu.period} • {edu.location}
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 shadow-2xl space-y-6">
          <div className="flex items-center space-x-2.5 text-xs font-mono text-emerald-400">
            <Award className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wider">Industry & Technical Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wide">
                    {cert.date}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-sm font-display font-bold text-white">
                  {cert.title}
                </h4>
                <div className="text-xs font-mono text-slate-400">
                  {cert.issuer}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
