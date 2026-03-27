import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-night overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-gold/[0.02] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(200,164,92,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,92,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-6">
          [ Start hier ]
        </p>

        {/* Tibor-style confronterend */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight tracking-tight">
          Wachten kost je<br />elk seizoen geld.
        </h2>

        <p className="text-white/40 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-sans">
          Eén gesprek. Geen verplichtingen. Wel duidelijkheid over wat AI
          voor jouw restaurant kan betekenen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:info@raymondwesterhout.nl"
            className="inline-flex items-center gap-2 bg-gold text-night font-heading font-semibold px-8 py-4 hover:bg-gold-light transition-colors text-base"
          >
            Plan een gesprek
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:info@raymondwesterhout.nl"
            className="inline-flex items-center gap-2 border border-white/10 text-white/60 font-sans font-medium px-8 py-4 hover:border-gold/30 hover:text-gold transition-all text-base"
          >
            Stuur een e-mail
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm font-sans">
          <a href="mailto:info@raymondwesterhout.nl" className="hover:text-gold transition-colors">
            info@raymondwesterhout.nl
          </a>
          <span className="text-white/10">|</span>
          <span>Reactie binnen 24 uur</span>
        </div>
      </div>
    </section>
  );
}
