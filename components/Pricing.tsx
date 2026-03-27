import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Quick Scan',
    price: '€495',
    type: 'eenmalig',
    highlighted: false,
    description: 'Weet waar je staat en waar de winst zit.',
    features: [
      'Intake gesprek (1 uur)',
      'AI-Readiness Score per gebied',
      'Bedrijfsscan: menu, inkoop, personeel, marketing',
      'Top-3 quick wins rapport',
      'Concrete aanbevelingen met tools',
      'Geschikt als losse dienst of als start van implementatie',
    ],
  },
  {
    name: 'Implementatie Basis',
    price: '€1.950',
    type: 'eenmalig',
    highlighted: true,
    description: 'De drie gebieden die het meest opleveren — ingericht en werkend.',
    features: [
      'Alles uit Quick Scan',
      '3 tools volledig ingericht',
      'Promptbibliotheek op maat',
      'Hands-on training (1 sessie)',
      'Handleiding per tool',
      'WhatsApp support eerste 2 weken',
    ],
  },
  {
    name: 'Implementatie Compleet',
    price: '€3.500',
    type: 'eenmalig',
    highlighted: false,
    description: 'Volledige AI-transformatie van je operatie.',
    features: [
      'Alles uit Basis',
      'Alle 4 gebieden ingericht',
      'Kostprijs-template (Google Sheets)',
      'Digitaal keukenhandboek',
      '2 trainingssessies (eigenaar + team)',
      '1 maand WhatsApp/mail support',
      'Resultaatmeting na 4 weken',
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
            Drie pakketten. Nul verrassingen.
          </h2>
          <p className="text-white/40 font-sans text-lg max-w-xl mx-auto">
            Start klein met een Quick Scan, of ga direct voor de volledige implementatie.
            Elke euro is vooraf helder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all ${
                plan.highlighted
                  ? 'border-2 border-gold bg-gold/[0.03] lg:-mt-4'
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

              <div className="mb-8">
                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/30 font-sans text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-white/20 text-sm font-sans">excl. BTW / {plan.type}</p>
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
                {plan.name === 'Quick Scan' ? 'Boek een Quick Scan' : 'Neem contact op'}
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Onderhoud */}
        <div className="mt-8 border border-gold/10 bg-gold/[0.02] p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-white font-heading text-lg font-semibold mb-1">
                Kwartaalonderhoud — €750 per kwartaal
              </p>
              <p className="text-white/40 font-sans text-sm max-w-xl">
                Nieuwe tools evalueren, prompts updaten, seizoensupdates doorvoeren.
                Je AI-setup blijft actueel en effectief. Optioneel na elk implementatietraject.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 inline-flex items-center gap-2 border border-gold/30 text-gold font-sans text-sm font-medium px-6 py-3 hover:bg-gold/5 transition-colors"
            >
              Meer info
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
