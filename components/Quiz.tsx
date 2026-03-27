import { ArrowRight, Clock, BarChart3, Target, Zap } from 'lucide-react';

const areas = [
  { icon: Clock, label: 'Recepturen & documentatie' },
  { icon: BarChart3, label: 'Kostprijs & food cost' },
  { icon: Target, label: 'Marketing & social media' },
  { icon: Zap, label: 'Personeel & training' },
];

export default function Quiz() {
  return (
    <section className="bg-night py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border border-gold/20 bg-gold/[0.02] relative overflow-hidden">
          {/* Corner marks */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold/60" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gold/60" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gold/60" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold/60" />

          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 px-3 py-1 mb-6">
                  <span className="text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium">
                    Gratis AI Readiness Score
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-4">
                  Ben je klaar om 5+ uur<br />
                  per week te besparen?
                </h2>

                <p className="text-white/40 font-sans text-base leading-relaxed mb-8 max-w-lg">
                  15 vragen. 3 minuten. Je ontdekt precies waar AI jouw restaurant
                  het meest oplevert — en waar je nu tijd en geld laat liggen.
                </p>

                {/* Four areas */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {areas.map((area) => {
                    const Icon = area.icon;
                    return (
                      <div key={area.label} className="flex items-center gap-2">
                        <Icon className="text-gold/50 w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-white/40 font-sans text-sm">{area.label}</span>
                      </div>
                    );
                  })}
                </div>

                <a
                  href="https://horeca-ai-score.vercel.app/quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-night font-heading text-sm font-semibold tracking-wide px-8 py-4 hover:bg-gold-light transition-colors"
                >
                  Start de quiz
                  <ArrowRight size={16} />
                </a>

                <p className="text-white/20 font-sans text-xs mt-4">
                  Gratis. Geen account nodig. Resultaat direct zichtbaar.
                </p>
              </div>

              {/* Right: Score preview */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-2 border-gold/20 flex items-center justify-center relative">
                  <div className="w-36 h-36 rounded-full border border-gold/10 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-heading text-5xl font-bold text-gold block">?</span>
                      <span className="text-white/30 font-sans text-xs mt-1 block">Jouw score</span>
                    </div>
                  </div>
                  {/* Decorative segments */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-gold/40" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-gold/20" />
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 h-4 w-1 bg-gold/20" />
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 h-4 w-1 bg-gold/20" />
                </div>

                <div className="mt-6 space-y-2 text-center">
                  <div className="flex items-center gap-2 text-xs font-sans">
                    <div className="w-2 h-2 bg-green-500/60 rounded-full" />
                    <span className="text-white/30">AI-Pionier</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans">
                    <div className="w-2 h-2 bg-gold/60 rounded-full" />
                    <span className="text-white/30">Grote Kans</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans">
                    <div className="w-2 h-2 bg-orange-500/60 rounded-full" />
                    <span className="text-white/30">Goudmijn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
