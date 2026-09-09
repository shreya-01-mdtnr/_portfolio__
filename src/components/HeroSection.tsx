import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ChevronsDown, Play, RefreshCw } from 'lucide-react';

export function HeroSection() {
  const [epoch, setEpoch] = useState(120);
  const [isRunningInference, setIsRunningInference] = useState(false);
  const [confidence, setConfidence] = useState(98.42);
  const [latency, setLatency] = useState(4.2);
  const [mse, setMse] = useState(0.00164);

  const runSimulatedInference = () => {
    setIsRunningInference(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const jitterMse = (0.0016 + Math.random() * 0.0002).toFixed(5);
      const jitterLatency = (4.0 + Math.random() * 0.5).toFixed(1);
      const jitterConf = (98.2 + Math.random() * 0.5).toFixed(2);
      setMse(parseFloat(jitterMse));
      setLatency(parseFloat(jitterLatency));
      setConfidence(parseFloat(jitterConf));

      if (step > 6) {
        clearInterval(interval);
        setIsRunningInference(false);
        setEpoch((prev) => (prev >= 150 ? 120 : prev + 5));
      }
    }, 180);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center px-4 lg:px-6 py-12 max-w-[1280px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto pt-6 lg:pt-10">
        {/* Left Column: Editorial Intro */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 lg:gap-6">
          {/* Animated Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292a2f]/80 border border-white/[0.08] backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
              B.TECH AI &amp; DATA SCIENCE • REVA UNIVERSITY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] leading-[1.08] text-[#e3e1e9] tracking-tight font-bold">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#4cd7f6] via-[#06b6d4] to-[#d0bcff] bg-clip-text text-transparent">
              Shreya.
            </span>
          </h1>

          {/* High-Impact Subtitle */}
          <p className="font-display text-xl sm:text-2xl text-[#adc6ff] font-medium tracking-tight leading-snug">
            I explore data, build intelligent systems, and turn ideas into real-world technology.
          </p>

          {/* Body Summary */}
          <p className="font-body text-base sm:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed">
            B.Tech AI &amp; Data Science student passionate about programming, data analysis,
            machine learning, visualization, and building innovative technology-based solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-[#06b6d4] to-[#0566d9] text-[#0d0e13] font-body text-[15px] font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#292a2f]/60 hover:bg-[#34343a]/80 border border-white/[0.08] backdrop-blur-md text-[#e3e1e9] font-body text-[15px] font-medium transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span>Let's Connect</span>
              <MessageSquare className="w-4 h-4 text-[#4cd7f6]" />
            </button>
          </div>

          {/* Micro Telemetry Ticker */}
          <div className="flex flex-wrap items-center gap-6 pt-3 text-[#869397]">
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="uppercase tracking-wider text-[#bcc9cd]">FOCUS:</span>
              <span className="text-[#4cd7f6] font-semibold">PREDICTIVE ANALYTICS &amp; ML</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="uppercase tracking-wider text-[#bcc9cd]">LOCATION:</span>
              <span className="text-[#e3e1e9]">BENGALURU, IN</span>
            </div>
          </div>
        </div>

        {/* Right Column: Simulated Live Neural Accelerator UI */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative rounded-xl bg-[#0d0e13]/85 border border-white/[0.08] backdrop-blur-xl p-5 sm:p-6 shadow-2xl overflow-hidden group">
            {/* Card Header Telemetry */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] -mx-5 sm:-mx-6 px-5 sm:px-6 -mt-5 sm:-mt-6 pt-4 bg-[#1e1f25]/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                <span className="font-mono text-[10px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
                  TENSOR ACCELERATOR [ONLINE]
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={runSimulatedInference}
                  disabled={isRunningInference}
                  title="Run simulated neural test"
                  className="p-1 rounded text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-white/[0.05] transition-colors"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${isRunningInference ? 'animate-spin text-[#4cd7f6]' : ''}`}
                  />
                </button>
                <span className="font-mono text-[11px] text-[#869397]">
                  EPOCH {epoch}/{epoch}
                </span>
              </div>
            </div>

            {/* Real-Time SVG Loss Convergence Chart */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-[#bcc9cd] font-mono text-xs">
                <span className="uppercase text-[#e3e1e9]">Loss Convergence Vector</span>
                <span className="text-[#4cd7f6] font-semibold">MSE: {mse.toFixed(5)}</span>
              </div>

              <div className="w-full h-32 rounded-lg bg-[#0d0e13]/90 border border-white/[0.06] p-2 relative overflow-hidden flex items-end">
                {/* Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 opacity-10 pointer-events-none">
                  <div className="border-r border-b border-[#4cd7f6]/40"></div>
                  <div className="border-r border-b border-[#4cd7f6]/40"></div>
                  <div className="border-r border-b border-[#4cd7f6]/40"></div>
                  <div className="border-r border-b border-[#4cd7f6]/40"></div>
                  <div className="border-r border-b border-[#4cd7f6]/40"></div>
                  <div className="border-b border-[#4cd7f6]/40"></div>
                </div>

                <svg
                  className="w-full h-full relative z-10"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 100"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4cd7f6" stopOpacity="0.38"></stop>
                      <stop offset="100%" stopColor="#4cd7f6" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,85 Q40,75 80,45 T160,28 T240,15 T300,10 L300,100 L0,100 Z"
                    fill="url(#curveGradient)"
                  ></path>
                  <path
                    d="M0,85 Q40,75 80,45 T160,28 T240,15 T300,10"
                    stroke="#4cd7f6"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  <circle
                    className="animate-ping"
                    cx="300"
                    cy="10"
                    fill="#4cd7f6"
                    r="4"
                  ></circle>
                  <circle cx="300" cy="10" fill="#ffffff" r="3"></circle>
                </svg>
              </div>
            </div>

            {/* Code Snippet Evaluation Console */}
            <div className="rounded-lg bg-[#292a2f]/70 border border-white/[0.05] p-3 mb-4 font-mono text-xs text-[#bcc9cd] leading-relaxed">
              <div>
                <span className="text-[#d0bcff]">import</span> torch.nn{' '}
                <span className="text-[#d0bcff]">as</span> nn
              </div>
              <div>
                <span className="text-[#4cd7f6] font-bold">&gt;&gt;&gt;</span>{' '}
                model.predict(patient_vitals)
              </div>
              <div className="text-[#adc6ff] font-semibold mt-1">
                &gt;&gt; [HEALTH_STATUS: OPTIMAL // CONFIDENCE: {confidence}%]
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-[#1a1b21]/80 border border-white/[0.04]">
                <span className="block font-mono text-[9px] sm:text-[10px] text-[#869397] uppercase">
                  Latency
                </span>
                <span className="font-display text-lg sm:text-xl text-[#4cd7f6] font-bold">
                  {latency}ms
                </span>
              </div>
              <div className="p-2 rounded bg-[#1a1b21]/80 border border-white/[0.04]">
                <span className="block font-mono text-[9px] sm:text-[10px] text-[#869397] uppercase">
                  Accuracy
                </span>
                <span className="font-display text-lg sm:text-xl text-[#e3e1e9] font-bold">
                  98.4%
                </span>
              </div>
              <div className="p-2 rounded bg-[#1a1b21]/80 border border-white/[0.04]">
                <span className="block font-mono text-[9px] sm:text-[10px] text-[#869397] uppercase">
                  Weights
                </span>
                <span className="font-display text-lg sm:text-xl text-[#d0bcff] font-bold">
                  14.2M
                </span>
              </div>
            </div>

            {/* Edge Photon Flare */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4cd7f6]/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="w-full flex justify-center items-center pt-8 sm:pt-14 pb-2">
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-1.5 text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors duration-200 cursor-pointer"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">SCROLL TO EXPLORE</span>
          <ChevronsDown className="w-5 h-5 animate-bounce text-[#4cd7f6]" />
        </button>
      </div>
    </section>
  );
}
