import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Standaard',
    price: '€1.250',
    badge: 'Tot 6 gerechten',
    highlighted: false,
    features: [
      '1 menukaart',
      'Receptuurkaarten per gerecht',
      'Kostprijsberekening + food cost',
      'Verkoopprijsadvies',
      'Mise en place planning',
      'Bestellijst',
      'Personeelsinstructies',
      'Seizoensadvies',
    ],
  },
  {
    name: 'Uitgebreid',
    price: '€1.750',
    badge: 'Tot 10 gerechten',
    highlighted: true,
    features: [
      '1 menukaart + variantkaarten',
      'Receptuurkaarten per gerecht',
      'Kostprijsberekening + food cost',
      'Verkoopprijsadvies',
      'Mise en place planning',
      'Bestellijst',
      'Personeelsinstructies',
      'Seizoensadvies',
      'Menu-engineering advies',
    ],
  },
  {
    name: 'XL',
    price: '€2.500',
    badge: 'Tot 16 gerechten',
    highlighted: false,
    features: [
      '2 menukaarten + variantkaarten',
      'Receptuurkaarten per gerecht',
      'Kostprijsberekening + food cost',
      'Verkoopprijsadvies',
      'Mise en place planning',
      'Bestellijst',
      'Personeelsinstructies',
      'Seizoensadvies',
      'Menu-engineering advies',
      'PIN-ON advies per kaart',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="investering" className="bg-night py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
            [ Investering ]
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight mb-4">
            Helder. Voorspelbaar. Op waarde.
          </h2>
          <p className="text-white/40 font-sans text-lg max-w-xl mx-auto">
            Vaste pakketprijzen per kwartaal. Geen uurtje-factuurtje. Je weet vooraf wat je betaalt en wat je krijgt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all ${
                plan.highlighted
                  ? 'border-2 border-gold bg-gold/[0.03] lg:-mt-4 lg:mb-0'
                  : 'border border-white/[0.06] bg-night-200/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-night text-[10px] font-heading font-bold tracking-wider uppercase px-4 py-1">
                    Meest gekozen
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-white/30 text-sm font-sans">excl. BTW / per kwartaal</p>
                <span className="inline-block mt-3 text-gold text-xs font-semibold font-sans border border-gold/20 px-3 py-1">
                  {plan.badge}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-white/50 font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3.5 font-heading text-sm font-semibold tracking-wide transition-all ${
                  plan.highlighted
                    ? 'bg-gold text-night hover:bg-gold-light'
                    : 'border border-white/10 text-white/60 hover:border-gold/30 hover:text-gold'
                }`}
              >
                Neem contact op
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Extra's */}
        <div className="mt-8 border border-white/[0.06] bg-night-200/30 p-6 text-center">
          <p className="text-white/40 font-sans text-sm">
            <span className="text-white/70 font-semibold">Extra gerecht:</span> €100
            <span className="mx-3 text-white/10">|</span>
            <span className="text-white/70 font-semibold">Extra menukaart:</span> €350
            <span className="mx-3 text-white/10">|</span>
            <span className="text-white/70 font-semibold">Spoed (&lt;2 weken):</span> +25%
          </p>
        </div>

        {/* Jaarcontract */}
        <div className="mt-4 border border-gold/10 bg-gold/[0.02] p-6 text-center">
          <p className="text-white font-heading text-lg font-semibold mb-1">
            Jaarcontract — 4 seizoenen, nul stress
          </p>
          <p className="text-white/40 font-sans text-sm">
            Voorspelbaar budget, diepere samenwerking, korting. De meeste klanten kiezen hiervoor.
          </p>
        </div>
      </div>
    </section>
  );
}
