import { Clock, TrendingDown, Smartphone, Users } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Uren kwijt aan handwerk',
    description:
      'Recepten uitschrijven, bestellijsten maken, kostprijzen doorrekenen, social media bijhouden. Elke week hetzelfde verhaal. 5 tot 10 uur die je liever in je gasten steekt.',
  },
  {
    icon: TrendingDown,
    title: 'Food cost op gevoel',
    description:
      'Je weet dat sommige gerechten niet rendabel zijn. Maar welke? En hoeveel verlies je per week? Zonder data gok je. En gokken is geen strategie.',
  },
  {
    icon: Smartphone,
    title: 'Marketing als bijzaak',
    description:
      'Je weet dat je vaker moet posten. Captions schrijven, foto\'s bewerken, reviews beantwoorden. Maar wanneer? Het blijft liggen. Je concurrent post drie keer per week.',
  },
  {
    icon: Users,
    title: 'Personeel inwerken kost weken',
    description:
      'Nieuwe medewerker? Alles opnieuw uitleggen. Taalbarrières. Geen handboek. Geen standaard. Elke keer dezelfde uitleg — en toch gaat het mis.',
  },
];

export default function Problem() {
  return (
    <section id="probleem" className="bg-night-100 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Het probleem ]
        </p>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-6 tracking-tight">
          Je runt een restaurant.<br />
          Geen administratiekantoor.
        </h2>

        <p className="text-white/40 font-sans text-lg max-w-2xl mb-16">
          Toch ben je elke week uren kwijt aan werk dat niet op het bord van je
          gasten terechtkomt. De tools om dit te automatiseren bestaan al. Je
          weet alleen niet waar je moet beginnen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative group border border-white/[0.06] bg-gradient-to-b from-night-300/60 to-night-200/30 p-8 transition-all duration-300 hover:border-gold/20"
              >
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
          De oplossing is niet harder werken. Het is slimmer inrichten.
        </p>
      </div>
    </section>
  );
}
