export default function About() {
  return (
    <section id="over" className="py-24 px-6 bg-night-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Over ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-16 tracking-tight">
          Geen techbedrijf.<br />
          Een chef die AI spreekt.
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Ik ben Raymond Westerhout. 20+ jaar in de keuken. Van sterrenrestaurants
              tot brasseries, van walking dinners tot seizoensmenus. Ik weet hoe een
              keuken werkt — en waar het vastloopt.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Ik gebruik AI niet als buzzword. Ik gebruik het dagelijks. Voor
              recepturenbanken, kostprijsberekeningen, personeelsinstructies,
              contentcreatie. Niet omdat het hip is, maar omdat het werkt.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Wat ik voor mijn eigen klanten bouw, implementeer ik nu voor jouw
              restaurant. Dezelfde tools, dezelfde aanpak — afgestemd op jouw zaak,
              jouw team en jouw werkwijze.
            </p>
            <p className="text-white/60 font-sans text-base leading-relaxed">
              Geen generieke AI-workshop. Geen PowerPoint met vage beloftes.
              Geconfigureerde tools, werkende prompts, en een team dat ermee kan
              werken. Dat is wat je krijgt.
            </p>

            <div className="border-l-2 border-gold pl-6 mt-8">
              <p className="font-heading text-lg text-white font-semibold">
                &ldquo;AI vervangt je vakmanschap niet. Het haalt het saaie werk
                van je bord zodat je kunt doen waar je goed in bent.&rdquo;
              </p>
              <p className="text-gold/60 text-sm font-sans mt-2">— Raymond Westerhout</p>
            </div>
          </div>

          {/* Unique position card */}
          <div className="border border-gold/10 bg-night/80 p-8">
            <h3 className="font-heading text-sm font-semibold text-gold uppercase tracking-wide mb-6">
              Waarom ik dit doe
            </h3>

            <div className="space-y-6">
              <div className="border-b border-white/[0.04] pb-4">
                <p className="text-white font-sans text-sm font-medium mb-1">
                  Ik ken de keuken
                </p>
                <p className="text-white/30 font-sans text-sm">
                  20 jaar ervaring. Ik weet welke tools werken in de praktijk —
                  niet alleen in een demo.
                </p>
              </div>

              <div className="border-b border-white/[0.04] pb-4">
                <p className="text-white font-sans text-sm font-medium mb-1">
                  Ik gebruik AI dagelijks
                </p>
                <p className="text-white/30 font-sans text-sm">
                  Receptuurkaarten, kostprijzen, menukaarten, bestellijsten — ik
                  maak het elke week met AI voor echte klanten.
                </p>
              </div>

              <div className="border-b border-white/[0.04] pb-4">
                <p className="text-white font-sans text-sm font-medium mb-1">
                  Ik implementeer, niet alleen adviseer
                </p>
                <p className="text-white/30 font-sans text-sm">
                  Je krijgt geen rapport met aanbevelingen. Je krijgt werkende
                  tools, prompts en een getraind team.
                </p>
              </div>

              <div>
                <p className="text-white font-sans text-sm font-medium mb-1">
                  Ik spreek horeca, niet tech
                </p>
                <p className="text-white/30 font-sans text-sm">
                  Geen jargon. Geen complexe dashboards. Praktische tools die je
                  team morgen kan gebruiken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
