import { useState } from 'react';
import { Terminal, MonitorSmartphone, LineChart, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SkillDetail {
  name: string;
  level: string;
  context: string;
}

const skillDetailsMap: Record<string, SkillDetail> = {
  Python: {
    name: 'Python',
    level: 'Core Language',
    context: 'Data engineering, algorithm implementations, PyTorch & scikit-learn models, automation scripts.',
  },
  'C Language': {
    name: 'C Language',
    level: 'System Fundamentals',
    context: 'Low-level memory management, pointers, and foundational data structures.',
  },
  'OOP Logic': {
    name: 'OOP Logic',
    level: 'Architecture Principle',
    context: 'Object-oriented modular design, inheritance, polymorphism, and abstraction.',
  },
  Flutter: {
    name: 'Flutter',
    level: 'Mobile & Multiplatform',
    context: 'Cross-platform reactive UI development with Dart, state management, and device sensors.',
  },
  'Web Development': {
    name: 'Web Development',
    level: 'Interactive Frontends',
    context: 'Modern web architectures, responsive design, component hierarchies, and interactive dashboards.',
  },
  'HTML5 / CSS': {
    name: 'HTML5 / CSS',
    level: 'Semantic Structure',
    context: 'Clean semantics, modern CSS layout mechanics (Flexbox, Grid), and responsive styling.',
  },
  'Data Analysis': {
    name: 'Data Analysis',
    level: 'Exploratory & Statistical',
    context: 'Pandas, NumPy, hypothesis testing, anomaly identification, and pattern synthesis.',
  },
  'Machine Learning': {
    name: 'Machine Learning',
    level: 'Predictive Modeling',
    context: 'Supervised classification, regression vectors, model evaluation metrics, and neural architectures.',
  },
  Visualization: {
    name: 'Visualization',
    level: 'Data Storytelling',
    context: 'Matplotlib, Seaborn, interactive SVG charts, biometric time-series dashboards.',
  },
  'Git / GitHub': {
    name: 'Git / GitHub',
    level: 'Version Control',
    context: 'Branch management, pull requests, collaborative versioning, and CI pipelines.',
  },
  Jupyter: {
    name: 'Jupyter',
    level: 'Notebook Lab',
    context: 'Interactive prototyping, reproducible computational notebooks, and data narratives.',
  },
  'VS Code': {
    name: 'VS Code',
    level: 'IDE Environment',
    context: 'Primary coding environment configured with Python, linting, debugging, and terminal tools.',
  },
  Colab: {
    name: 'Colab',
    level: 'Cloud GPU Compute',
    context: 'Accelerated neural network training with cloud TPU/GPU runtimes and shared execution.',
  },
};

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const clusters = [
    {
      id: 'prog',
      title: 'Programming',
      icon: Terminal,
      iconColor: 'text-[#4cd7f6]',
      iconBg: 'bg-[#4cd7f6]/10',
      description: 'Foundational syntax, algorithmic structures, and algorithmic modeling.',
      tags: [
        { name: 'Python', color: 'text-[#4cd7f6] bg-[#0d0e13]' },
        { name: 'C Language', color: 'text-[#e3e1e9] bg-[#0d0e13]' },
        { name: 'OOP Logic', color: 'text-[#869397] bg-[#0d0e13]' },
      ],
    },
    {
      id: 'dev',
      title: 'Development',
      icon: MonitorSmartphone,
      iconColor: 'text-[#adc6ff]',
      iconBg: 'bg-[#adc6ff]/10',
      description: 'Cross-platform interfaces, responsive frontends, and client-centric engineering.',
      tags: [
        { name: 'Flutter', color: 'text-[#adc6ff] bg-[#0d0e13]' },
        { name: 'Web Development', color: 'text-[#e3e1e9] bg-[#0d0e13]' },
        { name: 'HTML5 / CSS', color: 'text-[#869397] bg-[#0d0e13]' },
      ],
    },
    {
      id: 'data-ai',
      title: 'Data & AI',
      icon: LineChart,
      iconColor: 'text-[#06b6d4]',
      iconBg: 'bg-[#06b6d4]/10',
      description: 'Extracting insights, training models, and rendering intuitive graphic narratives.',
      tags: [
        { name: 'Data Analysis', color: 'text-[#06b6d4] bg-[#0d0e13]' },
        { name: 'Machine Learning', color: 'text-[#4cd7f6] bg-[#0d0e13]' },
        { name: 'Visualization', color: 'text-[#e3e1e9] bg-[#0d0e13]' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      iconColor: 'text-[#d0bcff]',
      iconBg: 'bg-[#d0bcff]/10',
      description: 'Version control ecosystems, rapid cloud prototyping, and compiler environments.',
      tags: [
        { name: 'Git / GitHub', color: 'text-[#d0bcff] bg-[#0d0e13]' },
        { name: 'Jupyter', color: 'text-[#e3e1e9] bg-[#0d0e13]' },
        { name: 'VS Code', color: 'text-[#869397] bg-[#0d0e13]' },
        { name: 'Colab', color: 'text-[#869397] bg-[#0d0e13]' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto scroll-mt-12"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
              02 // CAPABILITIES
            </span>
            <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight">
            SKILLS &amp; TECHNOLOGIES
          </h2>
        </div>

        {/* Glowing Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34343a]/60 border border-white/[0.08] text-[#adc6ff] shadow-[0_0_16px_rgba(76,215,246,0.15)] backdrop-blur-md self-start md:self-auto">
          <span className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold">
            BUILD
          </span>
          <span className="text-[#869397] text-xs">→</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#adc6ff] font-semibold">
            ANALYZE
          </span>
          <span className="text-[#869397] text-xs">→</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#d0bcff] font-semibold">
            LEARN
          </span>
          <span className="text-[#869397] text-xs">→</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold">
            INNOVATE
          </span>
        </div>
      </div>

      {/* 4 High-Tech Capability Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clusters.map((cluster) => {
          const IconComp = cluster.icon;
          return (
            <div
              key={cluster.id}
              className="group p-6 rounded-xl bg-[#1e1f25]/70 border border-white/[0.08] backdrop-blur-md transition-all duration-300 hover:bg-[#292a2f] hover:-translate-y-1 hover:border-[#4cd7f6]/40 shadow-md flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg ${cluster.iconBg} flex items-center justify-center ${cluster.iconColor} mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-[#e3e1e9] font-semibold mb-2">
                  {cluster.title}
                </h3>
                <p className="font-body text-sm text-[#bcc9cd] mb-6 leading-relaxed">
                  {cluster.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                {cluster.tags.map((tag) => (
                  <button
                    key={tag.name}
                    onClick={() => {
                      const detail = skillDetailsMap[tag.name];
                      if (detail) setSelectedSkill(detail);
                    }}
                    title={`Click to view details for ${tag.name}`}
                    className={`font-mono text-xs px-2.5 py-1 rounded border border-white/[0.06] ${tag.color} hover:border-[#4cd7f6]/50 transition-all hover:scale-105 cursor-pointer`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Skill Detail Popover if clicked */}
      {selectedSkill && (
        <div className="mt-6 p-4 rounded-xl bg-[#0d0e13]/90 border border-[#4cd7f6]/40 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-[#e3e1e9] text-base">
                {selectedSkill.name}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#4cd7f6]/10 text-[#4cd7f6] uppercase">
                {selectedSkill.level}
              </span>
            </div>
            <p className="font-body text-sm text-[#bcc9cd] max-w-3xl">
              {selectedSkill.context}
            </p>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-mono text-[#869397] hover:text-[#e3e1e9] px-3 py-1 rounded bg-white/[0.05] self-end sm:self-auto cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      )}
    </section>
  );
}
