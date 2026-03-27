import { Clock, TrendingDown, FileQuestion, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Elk seizoen hetzelfde circus',
    description:
      'Nieuw menu bedenken. Recepten uitwerken. Kostprijzen doorrekenen. 40+ uur die je niet hebt. En dan klopt het alsnog niet.',
  },
  {
    icon: TrendingDown,
    title: 'Geen grip op food cost',
    description:
      'Je weet dat gerechten niet rendabel zijn. Maar welke? Wat moet de verkoopprijs zijn? Je gokt. En gokken is geen strategie.',
  },
  {
    icon: FileQuestion,
    title: 'Niks op papier',
    description:
      'Recepturen in hoofden. Mise en place op gevoel. Bestellijsten op de achterkant van een bon. Eén ziekmelding en het is chaos.',
  },
  {
    icon: AlertTriangle,
    title: 'Alles zelf doen',
    description:
      'Er is geen adviseur die snapt wat je nodig hebt. Grafisch ontwerpers doen alleen layout. Horeca-adviseurs praten, maar leveren niet.',
  },
];

export default function Problem() {
  return (
    <section id="probleem" className="bg-night-100 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Label */}
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Het probleem ]
        </p>

        {/* Heading — Tibor style */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 tracking-tight">
          Gedoe in de keuken is klote.
        </h2>

        <p className="text-white/40 font-sans text-lg max-w-2xl mb-16">
          Je bent restaurateur, geen spreadsheet-specialist. Toch ben je elk kwartaal
          weken bezig met werk dat niet op het bord van je gasten terechtkomt.
        </p>

        {/* Problem cards — 21st.dev Dark Grid style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative group border border-white/[0.06] bg-gradient-to-b from-night-300/60 to-night-200/30 p-8 transition-all duration-300 hover:border-gold/20"
              >
                {/* Corner marks on hover */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/0 group-hover:border-gold/40 transition-colors" />

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/[0.08] bg-night-300/50">
                    <Icon className="text-gold w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="font-heading text-gold text-xl font-semibold mt-12">
          Dit kan anders. Dit moet anders.
        </p>
      </div>
    </section>
  );
}
