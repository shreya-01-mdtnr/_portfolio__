import { useState, useEffect } from 'react';
import { ExternalLink, Radio, Activity, Sliders, ShieldCheck, AlertTriangle } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenSpecsModal: (projectType: 'pulse' | 'blindstick') => void;
}

export function ProjectsSection({ onOpenSpecsModal }: ProjectsSectionProps) {
  // PulseX interactive simulation state
  const [pulseState, setPulseState] = useState<'normal' | 'elevated'>('normal');
  const [heartRate, setHeartRate] = useState(74);
  const [spo2, setSpo2] = useState(99);
  const [riskIndex, setRiskIndex] = useState(0.08);

  // Blind stick radar interactive simulation
  const [obstacleDistance, setObstacleDistance] = useState(0.42);
  const [radarAngle, setRadarAngle] = useState(45);

  // Animate radar sweep
  useEffect(() => {
    const timer = setInterval(() => {
      setRadarAngle((prev) => (prev >= 135 ? 45 : prev + 3));
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const togglePulseSimulation = () => {
    if (pulseState === 'normal') {
      setPulseState('elevated');
      setHeartRate(118);
      setSpo2(94);
      setRiskIndex(0.68);
    } else {
      setPulseState('normal');
      setHeartRate(74);
      setSpo2(99);
      setRiskIndex(0.08);
    }
  };

  const getBuzzerFrequency = (dist: number) => {
    if (dist < 0.3) return '1200Hz';
    if (dist < 0.6) return '850Hz';
    if (dist < 1.0) return '400Hz';
    return 'STANDBY';
  };

  const getHapticStatus = (dist: number) => {
    if (dist < 0.5) return 'ACTIVE';
    if (dist < 1.0) return 'INTERMITTENT';
    return 'IDLE';
  };

  return (
    <section
      id="projects"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto scroll-mt-12"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          04 // WORK &amp; INNOVATION
        </span>
        <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
        <h2 className="font-display text-3xl sm:text-4xl text-[#e3e1e9] font-bold tracking-tight">
          FEATURED PROJECTS
        </h2>
        <div className="font-mono text-xs text-[#bcc9cd] uppercase mt-2 md:mt-0 tracking-wider">
          Ideas → Experiments → Solutions
        </div>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {/* PROJECT 01: PulseX */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0d0e13]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-[#4cd7f6]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text and Architecture */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#4cd7f6]/20 text-[#4cd7f6] uppercase font-bold border border-[#4cd7f6]/30">
                  LIVE PROTOTYPE
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#292a2f] text-[#bcc9cd] uppercase">
                  AI
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#292a2f] text-[#bcc9cd] uppercase">
                  HEALTHCARE
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#292a2f] text-[#bcc9cd] uppercase">
                  DATA
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#e3e1e9] font-bold tracking-tight">
                  PulseX
                </h3>
                <p className="font-display text-lg sm:text-xl text-[#4cd7f6] font-medium mt-1">
                  Early Health Risk Detection
                </p>
              </div>

              <p className="font-body text-base text-[#bcc9cd] leading-relaxed">
                An AI-powered healthcare concept that uses smartwatch health data to identify
                potential health risks at an early stage. Transforms erratic biometric feeds into
                deterministic risk scores.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://pulsexx.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#4cd7f6] text-[#003640] font-body text-sm font-semibold hover:bg-[#06b6d4] transition-all shadow-[0_0_16px_rgba(76,215,246,0.35)] hover:scale-[1.02] cursor-pointer"
                >
                  <span>View Prototype</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={togglePulseSimulation}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-[#1e1f25] border border-white/[0.08] text-xs font-mono text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#292a2f] transition-colors cursor-pointer"
                >
                  <Activity className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>
                    Simulate: {pulseState === 'normal' ? 'Elevated Vitals' : 'Normal State'}
                  </span>
                </button>

                <span className="font-mono text-xs text-[#869397] uppercase">
                  [ STATUS: ACTIVE WEB APP ]
                </span>
              </div>
            </div>

            {/* Futuristic Bio-Telemetry Graphic Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#292a2f]/60 border border-white/[0.08] backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-inner">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${pulseState === 'normal' ? 'bg-[#ffb4ab]' : 'bg-[#ff5252] animate-ping'}`}
                    ></span>
                    <span className="font-mono text-xs text-[#e3e1e9] uppercase">
                      STREAM: SENSOR_OPTICAL_HR
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#4cd7f6] uppercase font-bold tracking-wider">
                    SYNCHRONIZED
                  </span>
                </div>

                {/* Animated ECG Heartbeat Graph SVG */}
                <div className="w-full h-28 bg-[#0d0e13] rounded-lg p-2 relative overflow-hidden flex items-center border border-white/[0.05]">
                  <svg className="w-full h-20" fill="none" viewBox="0 0 400 80">
                    <path
                      d={
                        pulseState === 'normal'
                          ? 'M0,40 L60,40 L70,30 L80,50 L90,40 L120,40 L130,10 L140,70 L150,30 L160,45 L170,40 L230,40 L240,10 L250,70 L260,30 L270,45 L280,40 L340,40 L350,20 L360,60 L370,40 L400,40'
                          : 'M0,40 L40,40 L48,20 L55,65 L65,30 L75,40 L110,40 L118,5 L126,75 L135,25 L145,40 L180,40 L188,5 L196,75 L205,25 L215,40 L250,40 L258,5 L266,75 L275,25 L285,40 L330,40 L338,5 L346,75 L355,25 L400,40'
                      }
                      stroke={pulseState === 'normal' ? '#4cd7f6' : '#ff7961'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0d0e13] to-transparent pointer-events-none"></div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      Heart Rate
                    </span>
                    <span className="font-display text-xl text-[#e3e1e9] font-bold">
                      {heartRate}{' '}
                      <span className="font-mono text-[11px] font-normal text-[#869397]">
                        BPM
                      </span>
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      SpO2 Oxygen
                    </span>
                    <span
                      className={`font-display text-xl font-bold ${pulseState === 'normal' ? 'text-[#4cd7f6]' : 'text-[#ffb4ab]'}`}
                    >
                      {spo2}%
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      Risk Index
                    </span>
                    <span
                      className={`font-display text-xl font-bold ${pulseState === 'normal' ? 'text-[#adc6ff]' : 'text-[#ffb4ab]'}`}
                    >
                      {riskIndex}{' '}
                      <span className="font-mono text-[10px] font-normal text-[#869397]">
                        {pulseState === 'normal' ? 'LOW' : 'HIGH'}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 02: Smart Blind Stick */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0d0e13]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-[#adc6ff]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Abstract Ultrasonic Radar Graphic Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-xl bg-[#292a2f]/60 border border-white/[0.08] backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-inner">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse"></span>
                    <span className="font-mono text-xs text-[#e3e1e9] uppercase">
                      ULTRASONIC ARRAY ACTIVE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#adc6ff] uppercase font-bold tracking-wider">
                    RANGE SCAN: 180°
                  </span>
                </div>

                {/* Radar Arc Vector */}
                <div className="w-full h-36 bg-[#0d0e13] rounded-lg p-2 relative overflow-hidden flex items-center justify-center border border-white/[0.05]">
                  <svg className="w-56 h-32" viewBox="0 0 160 90">
                    {/* Concentric distance arcs */}
                    <path
                      d="M 10 80 A 70 70 0 0 1 150 80"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M 30 80 A 50 50 0 0 1 130 80"
                      fill="none"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M 50 80 A 30 30 0 0 1 110 80"
                      fill="none"
                      opacity="0.6"
                      stroke="#4cd7f6"
                      strokeWidth="2"
                    ></path>

                    {/* Dynamic radar scanning ray */}
                    {(() => {
                      const rad = (radarAngle * Math.PI) / 180;
                      const x2 = 80 + 70 * Math.cos(rad);
                      const y2 = 80 - 70 * Math.sin(rad);
                      return (
                        <line
                          stroke="#4cd7f6"
                          strokeDasharray="3,3"
                          strokeWidth="2"
                          x1="80"
                          y1="80"
                          x2={x2}
                          y2={y2}
                          opacity="0.8"
                        />
                      );
                    })()}

                    {/* Target detected based on obstacleDistance */}
                    {(() => {
                      // Proximity scale: 0.1m to 1.5m mapped to radius 20 to 65
                      const targetRadius = Math.max(
                        20,
                        Math.min(65, 20 + obstacleDistance * 35)
                      );
                      const targetAngle = 60 * (Math.PI / 180);
                      const tx = 80 + targetRadius * Math.cos(targetAngle);
                      const ty = 80 - targetRadius * Math.sin(targetAngle);
                      return (
                        <>
                          <circle
                            className="animate-ping"
                            cx={tx}
                            cy={ty}
                            fill="#06b6d4"
                            r="4"
                          ></circle>
                          <circle cx={tx} cy={ty} fill="#4cd7f6" r="3.5"></circle>
                        </>
                      );
                    })()}

                    <circle cx="80" cy="80" fill="#ffffff" r="4"></circle>
                  </svg>

                  <div className="absolute bottom-2 left-4 font-mono text-[11px] text-[#4cd7f6]">
                    ZONE_A: {obstacleDistance.toFixed(2)}m PROXIMITY
                  </div>
                </div>

                {/* Distance slider to simulate obstacle approaching */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-[#869397]">
                    <span>PROXIMITY SIMULATOR</span>
                    <span className="text-[#4cd7f6]">{obstacleDistance.toFixed(2)}m</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.05"
                    value={obstacleDistance}
                    onChange={(e) => setObstacleDistance(parseFloat(e.target.value))}
                    className="w-full accent-[#4cd7f6] h-1.5 bg-[#1a1b21] rounded-lg cursor-pointer"
                  />
                </div>

                {/* System State Telemetry */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      Obstacle
                    </span>
                    <span className="font-display text-xl text-[#4cd7f6] font-bold">
                      {obstacleDistance.toFixed(1)}m
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      Haptic Pulse
                    </span>
                    <span
                      className={`font-display text-xl font-bold ${
                        getHapticStatus(obstacleDistance) === 'ACTIVE'
                          ? 'text-[#adc6ff]'
                          : 'text-[#869397]'
                      }`}
                    >
                      {getHapticStatus(obstacleDistance)}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0d0e13]/80 border border-white/[0.05] text-center">
                    <span className="font-mono text-[10px] text-[#869397] uppercase block">
                      Buzzer Alert
                    </span>
                    <span className="font-display text-xl text-[#e3e1e9] font-bold">
                      {getBuzzerFrequency(obstacleDistance)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text and Hardware Specifications */}
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#0566d9]/30 text-[#adc6ff] uppercase font-bold border border-[#adc6ff]/30">
                  IoT PROJECT
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#292a2f] text-[#bcc9cd] uppercase">
                  ASSISTIVE TECH
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#292a2f] text-[#bcc9cd] uppercase">
                  INNOVATION
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-[42px] text-[#e3e1e9] font-bold tracking-tight">
                  Smart Blind Stick
                </h3>
                <p className="font-display text-lg sm:text-xl text-[#adc6ff] font-medium mt-1">
                  Assistive IoT Technology
                </p>
              </div>

              <p className="font-body text-base text-[#bcc9cd] leading-relaxed">
                An IoT-based project designed to assist visually impaired individuals by detecting
                obstacles and providing alerts through vibration and sound. Built to bridge navigation
                accessibility gaps with reliable hardware micro-sensors.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenSpecsModal('blindstick')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#292a2f] text-[#e3e1e9] font-body text-sm font-semibold hover:bg-[#34343a] transition-all border border-white/[0.08] hover:border-[#4cd7f6]/40 cursor-pointer"
                >
                  <Radio className="w-4 h-4 text-[#4cd7f6]" />
                  <span>Explore System Specs</span>
                </button>
                <span className="font-mono text-xs text-[#869397] uppercase">
                  [ HARDWARE PROTOTYPE ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
