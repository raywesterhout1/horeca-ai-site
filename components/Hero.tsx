import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-night px-6 pt-24 pb-16 overflow-hidden">
      {/* Background grid pattern */}
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

        {/* Main heading — Tibor style: direct, confronterend */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.05] mb-8 tracking-tight">
          Jouw keuken draait<br />
          op onderbuikgevoel.<br />
          <span className="text-gold">Dat kost je geld.</span>
        </h1>

        {/* Subtitle — kort, punchy */}
        <p className="font-sans text-lg sm:text-xl text-white/40 max-w-2xl leading-relaxed mb-12">
          AI rekent sneller dan jouw beste kok. Recepturen, kostprijzen,
          bestellijsten, menukaarten — compleet opgeleverd. Geen weken werk.
          Geen fouten. Geen excuses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gold text-night font-heading text-sm font-semibold tracking-wide px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Plan een gesprek
            <ArrowRight size={16} />
          </a>
          <a
            href="#diensten"
            className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/60 font-sans text-sm font-medium tracking-wide px-8 py-4 hover:border-gold/30 hover:text-gold transition-all duration-200"
          >
            Bekijk wat AI oplevert
          </a>
        </div>

        {/* Social proof line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">20+</span>
            <span className="text-white/30 text-sm font-sans">jaar keukenervaring</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">10x</span>
            <span className="text-white/30 text-sm font-sans">sneller dan handwerk</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl font-bold text-gold">100%</span>
            <span className="text-white/30 text-sm font-sans">doorgerekend</span>
          </div>
        </div>
      </div>
    </section>
  );
}
