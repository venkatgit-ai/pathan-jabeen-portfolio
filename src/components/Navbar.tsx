import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, Terminal, Sparkles, Send } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Impact', href: '#impact' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                LOKENDRA TYAGI
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Connect CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <span>Let's Connect</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-5 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-white/[0.05]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-900 bg-cyan-400"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
