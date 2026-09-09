import { X, Cpu, Radio, Shield, Zap, Layers, Terminal } from 'lucide-react';

interface SystemSpecsModalProps {
  projectType: 'pulse' | 'blindstick' | null;
  onClose: () => void;
}

export function SystemSpecsModal({ projectType, onClose }: SystemSpecsModalProps) {
  if (!projectType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0d0e13] border border-white/[0.12] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/[0.05] text-[#bcc9cd] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {projectType === 'blindstick' ? (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0566d9]/20 flex items-center justify-center text-[#adc6ff]">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#adc6ff] uppercase tracking-widest font-bold">
                  HARDWARE ARCHITECTURE // EMBEDDED IoT
                </span>
                <h3 className="font-display text-2xl font-bold text-[#e3e1e9]">
                  Smart Blind Stick System Specs
                </h3>
              </div>
            </div>

            <p className="font-body text-sm text-[#bcc9cd] leading-relaxed">
              Engineered with ultrasonic sonar arrays and adaptive haptic frequency modulators,
              delivering spatial navigation feedback with zero reliance on cloud latency.
            </p>

            {/* Spec Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Microcontroller</span>
                <span className="text-[#e3e1e9] font-bold text-sm">ESP32 / ATmega328P</span>
                <span className="text-[#4cd7f6] text-[11px] block mt-0.5">3.3V Low-Power Logic</span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Sonar Sensor</span>
                <span className="text-[#e3e1e9] font-bold text-sm">HC-SR04 Ultrasonic Array</span>
                <span className="text-[#adc6ff] text-[11px] block mt-0.5">2cm - 400cm Scan Cone</span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Haptic Engine</span>
                <span className="text-[#e3e1e9] font-bold text-sm">Coin Vibration Motor (ERM)</span>
                <span className="text-[#d0bcff] text-[11px] block mt-0.5">PWM Variable Amplitude</span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Acoustic Beacon</span>
                <span className="text-[#e3e1e9] font-bold text-sm">Piezo Electric Buzzer</span>
                <span className="text-[#06b6d4] text-[11px] block mt-0.5">Frequency: 400Hz - 1200Hz</span>
              </div>
            </div>

            {/* Firmware Algorithm breakdown */}
            <div className="p-4 rounded-xl bg-[#1e1f25]/80 border border-white/[0.05] space-y-2">
              <span className="font-mono text-xs text-[#4cd7f6] uppercase font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>DISTANCE THRESHOLD MAPPING</span>
              </span>
              <div className="font-mono text-xs text-[#bcc9cd] space-y-1">
                <div className="flex justify-between border-b border-white/[0.04] py-1">
                  <span>Zone A (Danger): &lt; 0.40m</span>
                  <span className="text-[#ffb4ab]">Continuous Pulse + 1200Hz Tone</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] py-1">
                  <span>Zone B (Warning): 0.40m - 0.90m</span>
                  <span className="text-[#adc6ff]">Intermittent Pulse (850Hz)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Zone C (Clear): &gt; 0.90m</span>
                  <span className="text-[#4cd7f6]">Idle / Battery Conservation</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#4cd7f6]/20 flex items-center justify-center text-[#4cd7f6]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-widest font-bold">
                  NEURAL ARCHITECTURE // BIOMETRIC INFERENCE
                </span>
                <h3 className="font-display text-2xl font-bold text-[#e3e1e9]">
                  PulseX Health Detection Pipeline
                </h3>
              </div>
            </div>

            <p className="font-body text-sm text-[#bcc9cd] leading-relaxed">
              Processes raw photoplethysmography (PPG) and accelerometer time-series feeds through
              a temporal convolution pipeline to detect arrhythmia and hypoxic anomalies before
              clinical manifestation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Input Features</span>
                <span className="text-[#e3e1e9] font-bold text-sm">Optical HR, HRV, SpO2</span>
                <span className="text-[#4cd7f6] text-[11px] block mt-0.5">Sampling: 50Hz Real-Time</span>
              </div>

              <div className="p-3 rounded-lg bg-[#1a1b21] border border-white/[0.05]">
                <span className="text-[#869397] block text-[10px] uppercase">Model Topology</span>
                <span className="text-[#e3e1e9] font-bold text-sm">1D-CNN + BiLSTM</span>
                <span className="text-[#adc6ff] text-[11px] block mt-0.5">Parameters: 14.2M FP16</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-white/[0.06] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#4cd7f6] text-[#003640] font-body text-xs font-bold uppercase hover:bg-[#06b6d4] transition-colors cursor-pointer"
          >
            Close Specs
          </button>
        </div>
      </div>
    </div>
  );
}
