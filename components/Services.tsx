import {
  BookOpen,
  Calculator,
  ClipboardList,
  FileText,
  ShoppingCart,
  Users,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';

const deliverables = [
  {
    icon: BookOpen,
    title: 'Receptuurkaarten',
    description:
      'Volledig uitgeschreven: ingrediënten, bruto/netto gewichten, bereidingswijze, kerntemperaturen, plating. Professioneel, drukklaar.',
  },
  {
    icon: Calculator,
    title: 'Kostprijsberekeningen',
    description:
      'Per gerecht, per portiegrootte. Food cost percentage, verkoopprijsadvies en margeanalyse. Tot op de cent.',
  },
  {
    icon: ClipboardList,
    title: 'Mise en place',
    description:
      'Dag-tot-dag planning van D-2 tot service. Per service apart. Je team weet precies wat wanneer klaar moet zijn.',
  },
  {
    icon: FileText,
    title: 'Menukaarten',
    description:
      'Gerechtnamen, beschrijvingen, verkoopprijzen. Tekst klaar om in jullie format te zetten. Inclusief menu-engineering.',
  },
  {
    icon: ShoppingCart,
    title: 'Bestellijsten',
    description:
      'Eén geïntegreerde inkooplijst over alle kaarten. Geen dubbel bestellen. Gekoppeld aan je recepturen.',
  },
  {
    icon: Users,
    title: 'Personeelsinstructies',
    description:
      'Briefingdocumenten per service. Nieuwe medewerker? Print de instructie. Klaar.',
  },
  {
    icon: TrendingUp,
    title: 'Menu-engineering',
    description:
      'Welke gerechten op welke kaart. Balans tussen food cost, seizoen, keukenefficiëntie en gastverwachting.',
  },
  {
    icon: Lightbulb,
    title: 'Seizoensadvies',
    description:
      'Trendonderzoek en seizoensproducten als input. Je menu sluit aan bij wat er nu speelt. Geen verouderd aanbod.',
  },
];

export default function Services() {
  return (
    <section id="diensten" className="bg-night-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Wat je krijgt ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6 tracking-tight max-w-2xl">
          Compleet culinair fundament. Door AI opgeleverd. Door een chef gecontroleerd.
        </h2>

        <p className="text-white/40 font-sans text-base mb-16 max-w-xl">
          Elk document dat je keukenteam nodig heeft om een nieuw seizoensmenu
          te draaien. Van concept tot service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative group border border-white/[0.06] bg-night-200/50 p-6 transition-all duration-300 hover:border-gold/20 hover:bg-night-300/30"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/5 mb-4">
                  <Icon className="text-gold w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/35 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
