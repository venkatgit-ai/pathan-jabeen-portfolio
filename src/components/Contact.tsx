import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, FlaskConical, Languages } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);
  const email = PORTFOLIO_DATA.personal.contact.email;
  const phone = PORTFOLIO_DATA.personal.contact.phone;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#00f0ff', '#ffffff']
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-emerald-500/10 via-cyan-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">07 // Connect & Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Interested in collaboration or hiring?
          </h2>

          <p className="text-xl sm:text-2xl font-display font-semibold text-emerald-400">
            Let's innovate together in healthcare and science.
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
                  Reach out for pharmaceutical roles, formulation R&D, clinical QC, or health-tech AI projects.
                </p>
              </div>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-mono text-emerald-400 hover:text-emerald-300 truncate"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-all shrink-0 active:scale-95"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-mono text-emerald-400 block pt-1">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone & Location */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 text-xs font-mono text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-emerald-300 transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start space-x-3 text-xs font-mono text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Bhimavaram, West Godavari District, Andhra Pradesh 534201</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center space-x-3 text-xs font-mono text-slate-300">
                  <Languages className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Telugu (Native) • English (Prof) • Hindi</span>
                </div>
              </div>

              {/* Availability Ribbon */}
              <div className="pt-2 border-t border-white/10 flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>B.Pharm 2026 Graduate • Ready for organizational placement</span>
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
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Have an opportunity or pharmaceutical project? Leave a message below.
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
                    placeholder="Recruiter or Colleague Name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors"
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
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors"
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
                    placeholder="Hello Pathan Jabeen, I saw your research portfolio and would like to connect regarding..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-emerald-400 focus:outline-none text-white text-sm font-sans placeholder-slate-600 transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-mono text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/20 active:scale-[0.99] flex items-center justify-center space-x-2"
              >
                <span>Dispatch Message</span>
                <Send className="w-4 h-4" />
              </button>

              {messageSent && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center animate-fadeIn">
                  ✓ Message transmitted! Pathan Jabeen will respond promptly.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
            <span>© {new Date().getFullYear()} Pathan Jabeen. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Pharmaceutical Sciences & AI Portfolio</span>
            <span className="text-slate-700">•</span>
            <a href="#hero" className="hover:text-emerald-400 transition-colors">
              Return to Top ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
