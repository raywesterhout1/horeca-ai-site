'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Probleem', href: '#probleem' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Resultaten', href: '#resultaten' },
  { label: 'Investering', href: '#investering' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-night/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center">
            <Zap size={14} className="text-gold" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm font-semibold tracking-wide text-white">
              AI VOOR HORECA
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/30 font-sans">
              Raymond Westerhout
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/50 hover:text-gold transition-colors duration-200 font-sans"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://horeca-ai-score.vercel.app/quiz"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-night text-sm font-semibold px-5 py-2.5 hover:bg-gold-light transition-colors"
        >
          Gratis AI-scan
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/70 hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-night border-t border-white/5 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/60 hover:text-gold transition-colors font-sans"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://horeca-ai-score.vercel.app/quiz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-gold text-night text-sm font-semibold px-5 py-2.5 mt-2"
              >
                Gratis AI-scan
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
