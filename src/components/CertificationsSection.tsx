import { Rocket, ShieldCheck, Lightbulb, Timer, Eye, ExternalLink, Award } from 'lucide-react';
import { CertificateId } from './CertificateModal';

interface CertificationsSectionProps {
  onOpenCertModal: (certId: CertificateId) => void;
}

export function CertificationsSection({ onOpenCertModal }: CertificationsSectionProps) {
  const certifications = [
    {
      id: 'g-startups' as CertificateId,
      icon: Rocket,
      iconColor: 'text-[#4cd7f6]',
      headerColor: 'text-[#4cd7f6]',
      glowBorder: 'hover:border-[#4cd7f6]/50 hover:shadow-[0_0_24px_rgba(76,215,246,0.15)]',
      category: 'CLOUD & AI ACCELERATOR',
      title: 'Google for Startups',
      subtitle: 'Startup School: Prompt to Prototype',
      description:
        'Completed intensive startup curriculum covering prompt-to-prototype systems, cloud foundations, and scalable AI infrastructure.',
      badge: 'Completion • Dec 2025',
      badgeColor: 'text-[#4cd7f6] border-[#4cd7f6]/20 bg-[#4cd7f6]/5',
    },
    {
      id: 'ibm-python' as CertificateId,
      icon: ShieldCheck,
      iconColor: 'text-[#adc6ff]',
      headerColor: 'text-[#adc6ff]',
      glowBorder: 'hover:border-[#adc6ff]/50 hover:shadow-[0_0_24px_rgba(173,198,255,0.15)]',
      category: 'PROFESSIONAL CREDENTIAL',
      title: 'Data Analysis with Python',
      subtitle: 'IBM SkillsBuild (DA0101EN)',
      description:
        'Certified curriculum covering exploratory data analysis, Pandas, NumPy, scikit-learn models, and statistical inference.',
      badge: 'IBM Verified • Dec 2025',
      badgeColor: 'text-[#adc6ff] border-[#adc6ff]/20 bg-[#adc6ff]/5',
    },
    {
      id: 'wadhwani' as CertificateId,
      icon: Lightbulb,
      iconColor: 'text-[#f59e0b]',
      headerColor: 'text-[#f59e0b]',
      glowBorder: 'hover:border-[#f59e0b]/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.15)]',
      category: 'VENTURE & ENTREPRENEURSHIP',
      title: 'Wadhwani Foundation',
      subtitle: 'Ignite Full (42 Hours Coursework)',
      description:
        'Comprehensive 42-hour coursework training in venture ideation, financial forecasting, business modeling, and market strategy.',
      badge: 'Ignite Full • June 2026',
      badgeColor: 'text-[#f59e0b] border-[#f59e0b]/20 bg-[#f59e0b]/5',
    },
    {
      id: 'hacksprint' as CertificateId,
      icon: Timer,
      iconColor: 'text-[#ef4444]',
      headerColor: 'text-[#ef4444]',
      glowBorder: 'hover:border-[#ef4444]/50 hover:shadow-[0_0_24px_rgba(239,68,68,0.15)]',
      category: 'HACKATHON SPRINT',
      title: 'Hack/Sprint Hackathon',
      subtitle: 'Dev/Track × Shardeum × REVA',
      description:
        'Rapid 24-hour technical prototyping and competitive product build sprint showcasing embedded IoT and distributed systems.',
      badge: 'Participation • Dec 2025',
      badgeColor: 'text-[#ef4444] border-[#ef4444]/20 bg-[#ef4444]/5',
    },
  ];

  return (
    <section
      id="certifications"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto scroll-mt-12"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          05 // RECOGNITION
        </span>
        <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight">
            CERTIFICATIONS &amp; MILESTONES
          </h2>
          <p className="font-body text-sm text-[#bcc9cd] mt-1 max-w-xl">
            Accredited credentials and hackathon recognitions. Click any milestone to pop up the verified certificate.
          </p>
        </div>

        <button
          onClick={() => onOpenCertModal('g-startups')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4cd7f6]/10 hover:bg-[#4cd7f6]/20 border border-[#4cd7f6]/30 text-[#4cd7f6] text-xs font-mono font-semibold transition-all hover:scale-102 cursor-pointer shadow-[0_0_15px_rgba(76,215,246,0.15)] self-start sm:self-auto"
        >
          <Award className="w-4 h-4" />
          <span>Launch Certificate Vault</span>
        </button>
      </div>

      {/* High-Tech Milestone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onOpenCertModal(item.id)}
              className={`p-6 rounded-xl bg-[#1e1f25]/60 border border-white/[0.08] backdrop-blur-md shadow-sm hover:bg-[#25262c] hover:-translate-y-1.5 ${item.glowBorder} transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              title="Click to view full certificate"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-lg bg-[#34343a] flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[#869397] group-hover:text-[#4cd7f6] transition-colors">
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <span
                    className={`font-mono text-[11px] ${item.headerColor} uppercase block mb-1 font-bold tracking-wider`}
                  >
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[#e3e1e9] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#869397] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="font-body text-sm text-[#bcc9cd] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between">
                <span
                  className={`font-mono text-[10px] px-2.5 py-1 rounded border ${item.badgeColor} uppercase tracking-wider font-semibold`}
                >
                  {item.badge}
                </span>

                <span className="text-[11px] font-mono text-[#4cd7f6] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                  <span>Pop up</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
