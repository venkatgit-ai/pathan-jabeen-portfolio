import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Linkedin, Github, Send, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const email = PORTFOLIO_DATA.personal.contact.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#9d4edd', '#ffffff']
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-cyan-500/10 via-purple-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">07 // Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Have an interesting problem to solve?
          </h2>

          <p className="text-xl sm:text-2xl font-display font-semibold text-cyan-400">
            Let's build something meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-lg font-display font-bold text-white mb-1">
                  Direct Communications
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Reach out for distributed systems engineering, backend architecture, or generative AI roles.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-mono text-cyan-400 hover:text-cyan-300 truncate"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all shrink-0 active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-mono text-emerald-400 block pt-1">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Professional Networks
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PORTFOLIO_DATA.personal.contact.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.contact.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
                  >
                    <Github className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Availability Ribbon */}
              <div className="pt-2 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently exploring high-impact software engineering roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 space-y-5 shadow-2xl relative"
            >
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-display font-bold text-white flex items-center space-x-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Have a project inquiry or engineering opportunity? Leave a note below.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Lokendra, I saw your portfolio and would love to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/20 active:scale-[0.99] flex items-center justify-center space-x-2"
              >
                <span>Dispatch Message</span>
                <Send className="w-4 h-4" />
              </button>

              {messageSent && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center animate-fadeIn">
                  ✓ Message transmitted successfully! Lokendra will respond promptly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>© {new Date().getFullYear()} Lokendra Tyagi. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Cinematic 3D Portfolio</span>
            <span className="text-slate-700">•</span>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">
              Return to Top ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
