import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ShieldCheck, Sparkles, Terminal, Cpu, RefreshCw, ExternalLink } from 'lucide-react';

export default function IdentityCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth 3D tilt
    setRotate({
      x: -(y / (rect.height / 2)) * 14,
      y: (x / (rect.width / 2)) * 14
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="w-full flex justify-center items-center py-6">
      <div
        className="w-full max-w-sm sm:max-w-md h-[460px] perspective-1000 cursor-pointer select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          ref={cardRef}
          className="relative w-full h-full transition-transform duration-500 transform-style-3d shadow-2xl rounded-2xl"
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y + (isFlipped ? 180 : 0)}deg)`
          }}
        >
          {/* ================= FRONT SIDE ================= */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl p-7 flex flex-col justify-between backface-hidden border border-cyan-500/30 overflow-hidden ${
              isFlipped ? 'pointer-events-none' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(7,9,14,0.96) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 50px rgba(0, 240, 255, 0.12), inset 0 1px 1px rgba(255,255,255,0.2)'
            }}
          >
            {/* Holographic Watermark Background */}
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-2xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-gradient-to-tr from-purple-500/15 to-transparent blur-2xl pointer-events-none" />

            {/* Top Bar: Identification Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                    Digital Identity Badge
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    ID // LT-ENG-2026
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-medium text-emerald-400 tracking-wider">AVAILABLE</span>
              </div>
            </div>

            {/* Center Content: Name & Specialization */}
            <div className="relative z-10 my-auto space-y-3">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>{PORTFOLIO_DATA.personal.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </h3>

              <div className="text-sm font-medium text-cyan-400 font-mono flex items-center space-x-2">
                <span>{PORTFOLIO_DATA.personal.role}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">Distributed & GenAI</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Specialized in microservices, scalable distributed backends, LLM agents, and high-throughput query optimization.
              </p>

              {/* Quick Spec Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Java / Spring', 'Python / GenAI', 'Kafka / Redis', 'K8s'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Flip Instruction */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Verified Engineer</span>
              </span>
              <span className="flex items-center space-x-1 text-cyan-400/90 hover:text-cyan-300 transition-colors">
                <RefreshCw className="w-3 h-3 animate-spin-slow" />
                <span>Click to Flip Card</span>
              </span>
            </div>
          </div>

          {/* ================= BACK SIDE ================= */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl p-7 flex flex-col justify-between border border-purple-500/30 overflow-hidden rotate-y-180 backface-hidden ${
              !isFlipped ? 'pointer-events-none' : ''
            }`}
            style={{
              background: 'linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(13,10,24,0.98) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 50px rgba(157, 78, 221, 0.15), inset 0 1px 1px rgba(255,255,255,0.2)'
            }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span className="text-[10px] font-mono tracking-widest text-purple-300 uppercase">
                  Technical Telemetry
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">EXP // 3+ YEARS</span>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3.5 my-auto">
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-bold font-mono text-cyan-400">90%</div>
                  <div className="text-[10px] text-slate-400 font-mono">Manual Data Cut</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-bold font-mono text-purple-400">30%</div>
                  <div className="text-[10px] text-slate-400 font-mono">DB Load Reduction</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-bold font-mono text-emerald-400">25%</div>
                  <div className="text-[10px] text-slate-400 font-mono">Latency Shaved</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xl font-bold font-mono text-amber-400">1.4x</div>
                  <div className="text-[10px] text-slate-400 font-mono">Query Throughput</div>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <div className="text-[10px] font-mono text-purple-300 uppercase tracking-wide">Alma Mater</div>
                <div className="text-xs font-semibold text-white mt-0.5">{PORTFOLIO_DATA.education.institution}</div>
                <div className="text-[11px] text-slate-300">{PORTFOLIO_DATA.education.degree}</div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-mono text-slate-400">
              <a
                href="#contact"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Initiate Contact</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="flex items-center space-x-1 text-purple-300">
                <RefreshCw className="w-3 h-3" />
                <span>Flip back</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
