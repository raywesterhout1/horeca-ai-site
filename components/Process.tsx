const phases = [
  {
    number: '01',
    title: 'Intake & Quick Scan',
    duration: 'Week 1',
    description:
      'Bedrijfsscan per gebied: menu, inkoop, personeel, marketing, administratie. AI-Readiness scoring op besparingspotentieel. Top-3 quick wins identificeren. Jouw prioriteiten, budget en tech-comfort in kaart.',
    deliverable: 'AI-Readiness rapport + top-3 quick wins',
  },
  {
    number: '02',
    title: 'Toolselectie & Setup',
    duration: 'Week 2-3',
    description:
      'Per gebied de juiste tools selecteren en instellen. Accounts aanmaken, templates configureren, promptbibliotheek opbouwen. Alles afgestemd op jouw type zaak, team en werkwijze.',
    deliverable: 'Geconfigureerde tools + promptbibliotheek',
  },
  {
    number: '03',
    title: 'Training & Implementatie',
    duration: 'Week 3-5',
    description:
      'Hands-on trainingssessie(s) met eigenaar en team. Alles doorlopen, oefenen, vragen beantwoorden. Digitaal keukenhandboek opleveren. WhatsApp/mail support in de eerste maand.',
    deliverable: 'Getraind team + keukenhandboek + support',
  },
  {
    number: '04',
    title: 'Evaluatie & Overdracht',
    duration: 'Week 6',
    description:
      'Resultaatmeting: tijdsbesparing, food cost verschil, aantal social posts, reviewrespons. Eindsessie met resultaten en roadmap voor de toekomst.',
    deliverable: 'Resultaatrapport + roadmap + alle documenten',
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="bg-night py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Werkwijze ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6 tracking-tight">
          4 fasen. 4 tot 6 weken. Klaar.
        </h2>

        <p className="text-white/40 font-sans text-base mb-20 max-w-xl">
          Geen jarenlang traject. Geen eindeloze meetings. Een gestructureerd
          implementatieproces met een helder begin en eind.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {phases.map((phase) => (
              <div key={phase.number} className="relative flex gap-8">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 bg-night border-2 border-gold flex items-center justify-center">
                    <span className="text-gold font-heading text-xs font-bold">
                      {phase.number}
                    </span>
                  </div>
                </div>

                <div className="pb-2 pt-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {phase.title}
                    </h3>
                    <span className="text-gold/50 text-xs font-sans border border-gold/20 px-2 py-0.5">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/40 leading-relaxed max-w-lg mb-3">
                    {phase.description}
                  </p>
                  <p className="font-sans text-xs text-gold/60">
                    <span className="text-gold/40">Oplevering:</span> {phase.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
