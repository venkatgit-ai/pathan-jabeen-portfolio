import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FlaskConical, CheckCircle2, Leaf, Sparkles, Users, Calendar } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]/60">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <FlaskConical className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">04 // Formulation & Green Chemistry Projects</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Featured Research Innovations
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Peer-collaborative pharmaceutical research focused on antimicrobial oral formulations and sustainable green solvent titrimetric assays.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              {/* Dynamic Gradient Header glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 space-y-5">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                    <FlaskConical className="w-4 h-4" />
                    <span>PROJECT 0{idx + 1}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.teamSize}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{project.period}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Abstract Interactive Lab Preview */}
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-2">
                    <span className="flex items-center space-x-1.5 text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Methodology Architecture</span>
                    </span>
                    <span className="text-emerald-400 font-bold">Validated</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-[10px]">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                      <Leaf className="w-3.5 h-3.5 mx-auto mb-1 text-emerald-400" />
                      <span>Natural Actives</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                      <FlaskConical className="w-3.5 h-3.5 mx-auto mb-1 text-cyan-400" />
                      <span>Assay Titration</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                      <Sparkles className="w-3.5 h-3.5 mx-auto mb-1 text-purple-400" />
                      <span>Efficacy & Safety</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Key Research Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Outcomes & Findings
                  </div>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags Bottom */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-2 items-center">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:border-emerald-500/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
