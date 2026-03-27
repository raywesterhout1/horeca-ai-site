export default function About() {
  return (
    <section id="over" className="py-24 px-6 bg-night-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Over ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-16 tracking-tight">
          Geen bureau. Geen theoreticus.<br />
          Een chef die AI inzet.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="space-y-6">
            <p className="text-white/60 font-sans text-base leading-relaxed">
              20+ jaar in de keuken. Van sterrenrestaurants tot brasseries, van
              walking dinners tot seizoensmenus. Ik weet wat werkt op het bord en
              wat klopt in de calculatie.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Maar ik doe het niet meer met de hand. Ik gebruik AI om in dagen te
              leveren waar anderen weken over doen. Dezelfde kwaliteit. Dezelfde
              diepgang. Tien keer sneller.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Recepturen, kostprijzen, mise en place, bestellijsten, personeelsinstructies
              — compleet opgeleverd. Niet vanuit een kantoor, maar vanuit keukenervaring.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Geen PowerPoints. Geen vage adviezen. Documenten die je team morgen
              kan gebruiken.
            </p>

            {/* Tibor-style punch */}
            <div className="border-l-2 border-gold pl-6 mt-8">
              <p className="font-heading text-lg text-white font-semibold">
                &ldquo;AI is geen vervanging van vakmanschap.
                Het is de versnelling die vakmanschap schaalt.&rdquo;
              </p>
              <p className="text-gold/60 text-sm font-sans mt-2">— Raymond Westerhout</p>
            </div>
          </div>

          {/* Stats card */}
          <div className="border border-gold/10 bg-night/80 p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-4 border border-white/[0.04]">
                <p className="font-heading text-3xl font-bold text-gold mb-1">20+</p>
                <p className="text-white/30 text-xs font-sans">jaar keukenervaring</p>
              </div>
              <div className="text-center p-4 border border-white/[0.04]">
                <p className="font-heading text-3xl font-bold text-gold mb-1">AI</p>
                <p className="text-white/30 text-xs font-sans">als dagelijks gereedschap</p>
              </div>
              <div className="text-center p-4 border border-white/[0.04]">
                <p className="font-heading text-3xl font-bold text-gold mb-1">3-5</p>
                <p className="text-white/30 text-xs font-sans">dagen levertijd</p>
              </div>
              <div className="text-center p-4 border border-white/[0.04]">
                <p className="font-heading text-3xl font-bold text-gold mb-1">4</p>
                <p className="text-white/30 text-xs font-sans">seizoenen per jaar</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.04]">
              <p className="text-white/30 font-sans text-xs leading-relaxed text-center">
                Actieve klanten: upscale restaurants, event locaties, brasseries.
                Menuontwikkeling als service — elk kwartaal opnieuw.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
