import { ArrowRight, X, Check } from 'lucide-react';

const before = [
  'Recepten in je hoofd of op losse briefjes',
  'Kostprijzen schatten op gevoel',
  'Social media? Komt morgen wel',
  'Nieuwe medewerker = weken inwerken',
  'Bestellijsten op de achterkant van een bon',
  'Reviews onbeantwoord laten liggen',
];

const after = [
  'Doorzoekbare digitale receptenbank met AI-variaties',
  'Automatische kostprijsberekening per gerecht',
  'Captions, omschrijvingen en posts in minuten',
  'Digitaal keukenhandboek — print en klaar',
  'Geïntegreerde bestellijsten vanuit recepturen',
  'Professionele reviewreacties in seconden',
];

export default function Transformation() {
  return (
    <section className="bg-night px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
            [ De shift ]
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-4">
            Zelfde team. Zelfde keuken.<br />
            Andere aanpak.
          </h2>
          <p className="text-white/40 font-sans text-lg max-w-xl mx-auto">
            AI vervangt je team niet. Het haalt het saaie, repetitieve werk van hun bord.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="border border-red-500/10 bg-red-500/[0.02] p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-red-500/60 rounded-full" />
              <span className="font-heading text-sm font-semibold text-red-400/80 tracking-wide uppercase">
                Nu — op gevoel
              </span>
            </div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-500/40 mt-1 flex-shrink-0" />
                  <span className="text-white/30 font-sans text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="border border-gold/20 bg-gold/[0.02] p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-gold rounded-full" />
              <span className="font-heading text-sm font-semibold text-gold tracking-wide uppercase">
                Straks — met AI
              </span>
            </div>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-white/70 font-sans text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#diensten"
            className="inline-flex items-center gap-2 text-gold font-sans text-sm font-medium hover:text-gold-light transition-colors"
          >
            Bekijk de vier gebieden
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
