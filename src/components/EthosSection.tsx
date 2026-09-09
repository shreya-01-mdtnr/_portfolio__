import { Sparkles, Hammer, HeartHandshake } from 'lucide-react';

export function EthosSection() {
  const pillars = [
    {
      number: '// PILLAR 01',
      title: 'Curiosity',
      icon: Sparkles,
      color: 'text-[#4cd7f6]',
      borderColor: 'hover:border-[#4cd7f6]/40',
      description:
        'Always exploring how technology can solve interesting problems. Asking deeper questions about why datasets behave the way they do.',
    },
    {
      number: '// PILLAR 02',
      title: 'Building',
      icon: Hammer,
      color: 'text-[#adc6ff]',
      borderColor: 'hover:border-[#adc6ff]/40',
      description:
        'Turning ideas into working prototypes and practical solutions. Moving relentlessly from abstract mathematical formulations to runnable code.',
    },
    {
      number: '// PILLAR 03',
      title: 'Impact',
      icon: HeartHandshake,
      color: 'text-[#d0bcff]',
      borderColor: 'hover:border-[#d0bcff]/40',
      description:
        'Creating technology that is useful beyond just the code. Engineering tools that tangibly elevate human lives and everyday interactions.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          06 // ETHOS
        </span>
        <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight mb-10 sm:mb-12">
        WHAT DRIVES ME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const IconComp = pillar.icon;
          return (
            <div
              key={pillar.number}
              className={`p-6 sm:p-8 rounded-xl bg-[#1a1b21]/60 border border-white/[0.08] backdrop-blur-md shadow-sm hover:bg-[#1e1f25] ${pillar.borderColor} transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`font-mono text-xs ${pillar.color} font-bold`}>
                  {pillar.number}
                </span>
                <IconComp className={`w-5 h-5 ${pillar.color} opacity-70 group-hover:scale-110 transition-transform`} />
              </div>

              <h3 className="font-display text-2xl font-bold text-[#e3e1e9] mb-3 group-hover:text-[#4cd7f6] transition-colors">
                {pillar.title}
              </h3>

              <p className="font-body text-base text-[#bcc9cd] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
