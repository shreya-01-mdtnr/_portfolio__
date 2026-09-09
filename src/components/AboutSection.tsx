import { Brain, Cpu, GraduationCap, Compass } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto scroll-mt-12"
    >
      {/* Section Identifier */}
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          01 // DISCOVERY
        </span>
        <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
      </div>

      <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight mb-10 sm:mb-12">
        ABOUT ME
      </h2>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Anchor Phrase */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-xl bg-[#1e1f25]/60 border border-white/[0.08] backdrop-blur-md shadow-lg space-y-4 relative overflow-hidden group hover:border-[#4cd7f6]/30 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-[#4cd7f6]/10 flex items-center justify-center text-[#4cd7f6]">
              <Brain className="w-7 h-7" />
            </div>

            <h3 className="font-display text-2xl sm:text-[28px] font-bold text-[#e3e1e9] leading-tight bg-gradient-to-br from-[#e3e1e9] via-[#adc6ff] to-[#4cd7f6] bg-clip-text text-transparent">
              Curious about data.
              <br />
              Driven by technology.
              <br />
              Focused on impact.
            </h3>

            <p className="font-body text-sm sm:text-base text-[#bcc9cd] leading-relaxed">
              Blending algorithmic principles with empathetic design to build automated systems
              that simplify human complexity.
            </p>

            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#4cd7f6]/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* Right Detailed Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 font-body text-base sm:text-lg text-[#bcc9cd] leading-relaxed">
            <p>
              I'm a B.Tech Artificial Intelligence &amp; Data Science student at REVA University,
              exploring the intersection of data, intelligent systems, programming and real-world
              problem solving.
            </p>
            <p>
              I'm interested in Data Analysis, Machine Learning and Data Visualization, while
              continuously experimenting with new technologies and ideas.
            </p>
            <p className="text-[#e3e1e9] font-medium">
              I enjoy transforming concepts into practical solutions that can create meaningful
              real-world impact.
            </p>
          </div>

          {/* Metric / Mindset Cards Trio */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#1a1b21]/70 border border-white/[0.06] backdrop-blur-sm shadow-sm hover:bg-[#1e1f25] hover:border-[#4cd7f6]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#4cd7f6] uppercase font-bold">
                  01. DOMAIN
                </span>
                <Cpu className="w-4 h-4 text-[#4cd7f6]/70" />
              </div>
              <div className="font-display text-lg font-semibold text-[#e3e1e9]">
                AI &amp; Data Science
              </div>
              <div className="font-body text-xs text-[#869397] mt-1">My chosen field of rigor</div>
            </div>

            <div className="p-4 rounded-lg bg-[#1a1b21]/70 border border-white/[0.06] backdrop-blur-sm shadow-sm hover:bg-[#1e1f25] hover:border-[#d0bcff]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#d0bcff] uppercase font-bold">
                  02. ACADEMIA
                </span>
                <GraduationCap className="w-4 h-4 text-[#d0bcff]/70" />
              </div>
              <div className="font-display text-lg font-semibold text-[#e3e1e9]">
                REVA University
              </div>
              <div className="font-body text-xs text-[#869397] mt-1">B.Tech • Class of '27</div>
            </div>

            <div className="p-4 rounded-lg bg-[#1a1b21]/70 border border-white/[0.06] backdrop-blur-sm shadow-sm hover:bg-[#1e1f25] hover:border-[#06b6d4]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#06b6d4] uppercase font-bold">
                  03. PHILOSOPHY
                </span>
                <Compass className="w-4 h-4 text-[#06b6d4]/70" />
              </div>
              <div className="font-display text-lg font-semibold text-[#e3e1e9]">
                Building &amp; Exploring
              </div>
              <div className="font-body text-xs text-[#869397] mt-1">Hands-on practical mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
