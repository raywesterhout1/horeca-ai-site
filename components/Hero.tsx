import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-night px-6 pt-24 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(200,164,92,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,164,92,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-5xl w-full">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-sans font-medium">
            AI-implementatie voor horeca
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.05] mb-8 tracking-tight">
          5 tot 10 uur per week<br />
          terug in je zaak.<br />
          <span className="text-gold">Door AI het zware werk te laten doen.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg sm:text-xl text-white/40 max-w-2xl leading-relaxed mb-12">
          Receptuurbeheer, kostprijsberekening, marketing, personeelstraining — de
          tools bestaan al. Je hoeft ze alleen in te stellen. Dat doe ik voor je. In
          4 tot 6 weken draait je zaak slimmer, niet harder.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://horeca-ai-score.vercel.app/quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-night font-heading text-sm font-semibold tracking-wide px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Doe de gratis AI-scan
            <ArrowRight size={16} />
          </a>
          <a
            href="#diensten"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/60 font-sans text-sm font-medium tracking-wide px-8 py-4 hover:border-gold/30 hover:text-gold transition-all duration-200"
          >
            Bekijk de vier gebieden
          </a>
        </div>

        {/* Proof line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">20+</span>
            <span className="text-white/30 text-sm font-sans">jaar horeca-ervaring</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">4-6</span>
            <span className="text-white/30 text-sm font-sans">weken implementatie</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">2-4%</span>
            <span className="text-white/30 text-sm font-sans">food cost reductie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
