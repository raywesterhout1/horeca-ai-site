const stats = [
  {
    value: '5-10',
    unit: 'uur/week',
    label: 'Tijdsbesparing',
    description: 'Minder handwerk aan recepten, lijsten, social media en inwerken.',
  },
  {
    value: '2-4%',
    unit: '',
    label: 'Food cost reductie',
    description: 'Door data-driven pricing en automatische kostprijsberekening.',
  },
  {
    value: '4-6',
    unit: 'weken',
    label: 'Implementatietijd',
    description: 'Van intake tot volledig draaiend. Geen maandenlang traject.',
  },
  {
    value: '1',
    unit: 'dag',
    label: 'Inwerktijd nieuw personeel',
    description: 'Met digitaal handboek en meertalige instructies.',
  },
];

const outcomes = [
  {
    area: 'Receptuurenbeheer',
    before: 'Recepten in hoofden en op briefjes',
    after: 'Doorzoekbare database, AI-variaties, standaard formats',
  },
  {
    area: 'Kostprijs & Food Cost',
    before: 'Schatten op gevoel, marges onbekend',
    after: 'Live dashboard, automatische berekening, prijsadvies per gerecht',
  },
  {
    area: 'Marketing',
    before: '1x per maand iets posten als het uitkomt',
    after: 'Consistente content met AI-captions, templates en scheduling',
  },
  {
    area: 'Personeel',
    before: 'Weken inwerken, alles mondeling',
    after: 'Digitaal handboek, meertalig, print-en-klaar',
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
          Wat het oplevert. Concreet.
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/[0.06] bg-night-200/50 p-6 text-center"
            >
              <div className="mb-2">
                <span className="font-heading text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-sans text-sm text-gold/50 ml-1">{stat.unit}</span>
                )}
              </div>
              <span className="font-heading text-sm font-semibold text-white uppercase tracking-wide block mb-2">
                {stat.label}
              </span>
              <p className="font-sans text-xs text-white/30">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After per area */}
        <h3 className="font-heading text-xl text-white font-semibold mb-8">
          Per gebied: voor en na
        </h3>

        <div className="space-y-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome.area}
              className="grid md:grid-cols-[200px_1fr_1fr] gap-4 border border-white/[0.04] bg-night-200/30 p-5 items-start"
            >
              <span className="font-heading text-sm font-semibold text-gold">
                {outcome.area}
              </span>
              <div>
                <span className="text-red-400/40 text-[10px] uppercase tracking-wider font-sans block mb-1">
                  Voor
                </span>
                <p className="text-white/30 font-sans text-sm">{outcome.before}</p>
              </div>
              <div>
                <span className="text-gold/50 text-[10px] uppercase tracking-wider font-sans block mb-1">
                  Na
                </span>
                <p className="text-white/60 font-sans text-sm">{outcome.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
