import { Zap } from 'lucide-react';

const navLinks = [
  { label: 'Probleem', href: '#probleem' },
  { label: 'Diensten', href: '#diensten' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Resultaten', href: '#resultaten' },
  { label: 'Investering', href: '#investering' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-night px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold/10 border border-gold/20 flex items-center justify-center">
              <Zap size={12} className="text-gold" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-white">
                AI voor Horeca
              </p>
              <p className="text-[10px] text-white/20 font-sans">
                Raymond Westerhout
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-white/20 text-xs font-sans">
            <span>KvK: [nummer]</span>
            <span>BTW: [nummer]</span>
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/20 text-sm hover:text-gold transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-white/15 text-xs font-sans">
            &copy; 2026 Raymond Westerhout. Alle rechten voorbehouden.
          </p>
          <p className="text-white/15 text-xs font-sans">
            Gebouwd met AI — uiteraard.
          </p>
        </div>
      </div>
    </footer>
  );
}
