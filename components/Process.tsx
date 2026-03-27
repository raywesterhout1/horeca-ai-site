const steps = [
  {
    number: '01',
    title: 'Intake',
    duration: 'Dag 1',
    description:
      'Videocall of op locatie. Jouw wensen, producten, feedback vorige kaart, events, thema\'s. Ik stel de juiste vragen — jij hoeft alleen te praten.',
  },
  {
    number: '02',
    title: 'AI doet het zware werk',
    duration: 'Dag 2-3',
    description:
      'Seizoensadvies, gerechtontwikkeling, receptuurkaarten, kostprijsberekeningen, menu-engineering. AI genereert, ik controleer en verfijn.',
  },
  {
    number: '03',
    title: 'Oplevering',
    duration: 'Dag 4-5',
    description:
      'Alle documenten compleet: recepturen, kostprijzen, menukaarten, mise en place, bestellijsten, personeelsinstructies. Drukklaar.',
  },
  {
    number: '04',
    title: 'Feedback & fine-tuning',
    duration: 'Dag 5-7',
    description:
      'Twee feedbackrondes. Gerechten aanpassen, prijzen bijstellen, presentatie verfijnen. Daarna: klaar om te draaien.',
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
          Van intake tot oplevering. Eén week.
        </h2>

        <p className="text-white/40 font-sans text-base mb-20 max-w-xl">
          Geen maanden plannen. Geen eindeloze meetings. Eén intake, en je hebt
          alles binnen een week in handen.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8">
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 bg-night border-2 border-gold flex items-center justify-center">
                    <span className="text-gold font-heading text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pb-2 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="text-gold/50 text-xs font-sans border border-gold/20 px-2 py-0.5">
                      {step.duration}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-white/40 leading-relaxed max-w-lg">
                    {step.description}
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
