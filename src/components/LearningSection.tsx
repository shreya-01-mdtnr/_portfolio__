export function LearningSection() {
  const tracks = [
    {
      id: 'track-1',
      number: '01',
      type: 'ACTIVE TRACK',
      title: 'Web Development',
      badge: 'Active Sprint',
      isPulsing: true,
      badgeColor: 'text-[#869397]',
      color: 'text-[#4cd7f6]',
      description:
        'Exploring modern web technologies and building interactive digital experiences.',
      progress: '66%',
      barGradient: 'from-[#4cd7f6] to-[#06b6d4]',
    },
    {
      id: 'track-2',
      number: '02',
      type: 'FOUNDATION TRACK',
      title: 'OOP using Python',
      badge: 'Deepening Concept',
      isPulsing: false,
      badgeColor: 'text-[#869397]',
      color: 'text-[#adc6ff]',
      description:
        'Strengthening software design and programming fundamentals using object-oriented concepts.',
      progress: '75%',
      barGradient: 'from-[#adc6ff] to-[#4cd7f6]',
    },
    {
      id: 'track-3',
      number: '03',
      type: 'COMPUTATIONAL TRACK',
      title: 'Data Structures & Algorithms',
      badge: 'Core Practice',
      isPulsing: false,
      badgeColor: 'text-[#869397]',
      color: 'text-[#d0bcff]',
      description: 'Building stronger problem-solving and algorithmic thinking skills.',
      progress: '52%',
      barGradient: 'from-[#d0bcff] to-[#b395ff]',
    },
    {
      id: 'track-4',
      number: '04',
      type: 'INNOVATION TRACK',
      title: 'Design Thinking',
      badge: 'Applied Methodology',
      isPulsing: false,
      badgeColor: 'text-[#869397]',
      color: 'text-[#06b6d4]',
      description:
        'Learning to approach problems from a user-centered and innovation-focused perspective.',
      progress: '80%',
      barGradient: 'from-[#06b6d4] to-[#adc6ff]',
    },
  ];

  return (
    <section
      id="learning"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto scroll-mt-12"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          03 // ACTIVE HORIZONS
        </span>
        <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight">
          CURRENTLY LEARNING
        </h2>
        <p className="font-body text-base text-[#bcc9cd] mt-2 md:mt-0 font-medium">
          Always building. Always learning.
        </p>
      </div>

      {/* 4 Interactive Learning Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="p-6 rounded-xl bg-[#1a1b21]/80 border border-white/[0.06] backdrop-blur-md shadow-sm hover:bg-[#1e1f25] hover:border-[#4cd7f6]/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className={`font-mono text-xs ${track.color} font-bold`}>
                {track.number} // {track.type}
              </span>
              <div className="flex items-center gap-1.5">
                {track.isPulsing && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6] animate-ping"></span>
                )}
                <span className="font-mono text-[10px] uppercase text-[#869397] tracking-wider">
                  {track.badge}
                </span>
              </div>
            </div>

            <h3 className="font-display text-xl font-semibold text-[#e3e1e9] mb-2 group-hover:text-[#4cd7f6] transition-colors">
              {track.title}
            </h3>

            <p className="font-body text-sm sm:text-[15px] text-[#bcc9cd] leading-relaxed">
              {track.description}
            </p>

            <div className="mt-5 pt-1">
              <div className="flex justify-between items-center text-[11px] font-mono text-[#869397] mb-1.5">
                <span>PROGRESS</span>
                <span>{track.progress}</span>
              </div>
              <div className="h-1.5 w-full bg-[#34343a] rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${track.barGradient} rounded-full transition-all duration-1000`}
                  style={{ width: track.progress }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
