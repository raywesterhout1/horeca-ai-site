const stats = [
  {
    value: '10x',
    label: 'Sneller',
    description: 'Wat normaal 40+ uur kost, is in dagen klaar.',
  },
  {
    value: '€0',
    label: 'Fouten',
    description: 'Elke kostprijs doorgerekend. Geen schattingen.',
  },
  {
    value: '100%',
    label: 'Compleet',
    description: 'Recepturen, kostprijzen, mise en place, bestellijsten — alles.',
  },
  {
    value: '4x',
    label: 'Per jaar',
    description: 'Elk seizoen een nieuw menu. Gegarandeerd.',
  },
];

const examples = [
  {
    client: 'Upscale restaurant',
    scope: 'Dinerkaart + lunchkaart + borrelkaart',
    result: '22 nieuwe gerechten, 12 varianten, 3 complete menukaarten',
    delivery: '5 werkdagen',
  },
  {
    client: 'Event locatie',
    scope: 'Walking dinner regulier + vegetarisch',
    result: '5 gangen, beide varianten, volledig mise en place',
    delivery: '3 werkdagen',
  },
];

export default function Results() {
  return (
    <section id="resultaten" className="bg-night-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Resultaten ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-16 tracking-tight">
          Cijfers liegen niet.
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/[0.06] bg-night-200/50 p-6 text-center"
            >
              <span className="font-heading text-4xl md:text-5xl font-bold text-gold-gradient text-gold block mb-2">
                {stat.value}
              </span>
              <span className="font-heading text-sm font-semibold text-white uppercase tracking-wide block mb-2">
                {stat.label}
              </span>
              <p className="font-sans text-xs text-white/30">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Case examples */}
        <h3 className="font-heading text-xl text-white font-semibold mb-8">
          In de praktijk
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {examples.map((example) => (
            <div
              key={example.client}
              className="border border-gold/10 bg-gold/[0.02] p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-sm font-semibold text-gold uppercase tracking-wide">
                  {example.client}
                </span>
                <span className="text-gold/50 text-xs font-sans border border-gold/20 px-2 py-0.5">
                  {example.delivery}
                </span>
              </div>
              <p className="text-white/60 font-sans text-sm mb-2">
                <span className="text-white/30">Scope:</span> {example.scope}
              </p>
              <p className="text-white/60 font-sans text-sm">
                <span className="text-white/30">Resultaat:</span> {example.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
