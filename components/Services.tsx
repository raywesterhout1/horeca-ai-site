import {
  BookOpen,
  Calculator,
  Megaphone,
  GraduationCap,
  Database,
  PieChart,
  Camera,
  FileText,
} from 'lucide-react';

const areas = [
  {
    title: 'Receptuurenbeheer',
    subtitle: 'Van losse briefjes naar doorzoekbare database',
    icon: BookOpen,
    color: 'gold',
    tools: ['ChatGPT / Claude', 'Notion AI', 'Gastronomixs'],
    deliverables: [
      'Digitale receptenbank met zoekfunctie',
      'AI-gestuurde variaties en seizoensaanpassingen',
      'Standaard receptuurkaart-templates',
      'Automatische portieberekening',
    ],
  },
  {
    title: 'Kostprijs & Food Cost',
    subtitle: 'Van gokken naar data-driven pricing',
    icon: Calculator,
    color: 'gold',
    tools: ['Google Sheets + AI', 'ChatGPT / Claude', 'Apicbase'],
    deliverables: [
      'Automatische kostprijsberekening per gerecht',
      'Food cost dashboard (live bijgewerkt)',
      'Menu-engineering analyse (Boston Matrix)',
      'Verkoopprijsadvies op basis van marge',
    ],
  },
  {
    title: 'Marketing & Social Media',
    subtitle: 'Van "komt morgen" naar consistente zichtbaarheid',
    icon: Megaphone,
    color: 'gold',
    tools: ['ChatGPT / Claude', 'Canva AI', 'Later / Buffer', 'CapCut'],
    deliverables: [
      'Promptbibliotheek voor captions en menuomschrijvingen',
      'Social media templates in Canva',
      'Contentkalender + scheduling',
      'Reviewreacties in seconden',
    ],
  },
  {
    title: 'Personeel & Training',
    subtitle: 'Van weken inwerken naar digitaal handboek',
    icon: GraduationCap,
    color: 'gold',
    tools: ['ChatGPT / Claude', 'Notion', 'Google Translate + AI'],
    deliverables: [
      'Digitaal keukenhandboek (print-ready)',
      'Trainingsmateriaal per station',
      'Meertalige instructies voor internationaal team',
      'Onboarding-checklist nieuwe medewerkers',
    ],
  },
];

export default function Services() {
  return (
    <section id="diensten" className="bg-night-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-xs font-sans tracking-[0.3em] uppercase font-medium mb-4">
          [ Vier gebieden ]
        </p>

        <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6 tracking-tight max-w-2xl">
          AI implementeren waar het het meest oplevert.
        </h2>

        <p className="text-white/40 font-sans text-base mb-16 max-w-xl">
          Geen vage belofte dat &ldquo;AI alles beter maakt&rdquo;. Vier concrete gebieden
          waar restaurants direct resultaat zien. Per gebied: tools, prompts,
          templates en training.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="relative group border border-white/[0.06] bg-night-200/50 p-8 transition-all duration-300 hover:border-gold/20"
              >
                {/* Corner marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/0 group-hover:border-gold/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/0 group-hover:border-gold/40 transition-colors" />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 bg-gold/5 flex-shrink-0">
                    <Icon className="text-gold w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {area.title}
                    </h3>
                    <p className="text-white/30 font-sans text-sm mt-0.5">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                {/* Deliverables */}
                <ul className="space-y-2 mb-6">
                  {area.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-gold text-xs mt-1.5">&#9642;</span>
                      <span className="text-white/50 font-sans text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                  {area.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-sans text-gold/60 border border-gold/10 bg-gold/[0.03] px-2.5 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* What you get */}
        <div className="mt-12 border border-gold/10 bg-gold/[0.02] p-8">
          <h3 className="font-heading text-lg font-semibold text-white mb-4">
            Bij elk gebied krijg je:
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Database, label: 'Tool-setup op maat' },
              { icon: FileText, label: 'Promptbibliotheek' },
              { icon: GraduationCap, label: 'Hands-on training' },
              { icon: PieChart, label: 'Handleiding per tool' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <Icon className="text-gold w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-white/50 font-sans text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
