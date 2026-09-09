import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Mail, Copy, Check, Send, Sparkles } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const emailAddress = 'sgmuddatnur@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setSenderName('');
      setSenderEmail('');
      setMessage('');
      setTimeout(() => setIsSent(false), 5000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-24 px-4 lg:px-6 max-w-[1280px] mx-auto mb-16 scroll-mt-12"
    >
      <div className="relative rounded-2xl bg-[#0d0e13]/90 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden">
        {/* Subtle Decorative Background Network Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" viewBox="0 0 800 400">
            <circle cx="100" cy="100" fill="#4cd7f6" r="2.5"></circle>
            <circle cx="300" cy="120" fill="#4cd7f6" r="2.5"></circle>
            <circle cx="500" cy="80" fill="#4cd7f6" r="2.5"></circle>
            <circle cx="700" cy="150" fill="#4cd7f6" r="2.5"></circle>
            <line stroke="#4cd7f6" strokeWidth="1" x1="100" x2="300" y1="100" y2="120"></line>
            <line stroke="#4cd7f6" strokeWidth="1" x1="300" x2="500" y1="120" y2="80"></line>
            <line stroke="#4cd7f6" strokeWidth="1" x1="500" x2="700" y1="80" y2="150"></line>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Links & Dispatch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
                07 // REACH OUT
              </span>
              <div className="h-px bg-[#34343a] flex-1 max-w-[120px]"></div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-[#e3e1e9] font-bold tracking-tight">
              LET'S BUILD SOMETHING INTERESTING.
            </h2>

            <p className="font-body text-base sm:text-lg text-[#bcc9cd] max-w-2xl leading-relaxed">
              I'm always open to learning, collaborating, exploring ideas and building meaningful
              technology. Whether it's an AI model, data research, or an impactful system, let's
              talk.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/shreya-m-0a8024375"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#4cd7f6] text-[#003640] font-body text-sm font-semibold hover:bg-[#06b6d4] transition-all shadow-[0_0_20px_rgba(76,215,246,0.35)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#292a2f] border border-white/[0.08] text-[#e3e1e9] font-body text-sm font-medium hover:bg-[#34343a] transition-colors cursor-pointer"
              >
                <span>Send Me an Email</span>
                <Mail className="w-4 h-4 text-[#4cd7f6]" />
              </a>
            </div>

            {/* Copy Email Widget */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="font-mono text-xs text-[#869397] uppercase font-semibold">
                DIRECT DISPATCH:
              </span>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-[#292a2f]/80 border border-white/[0.06]">
                <span className="font-mono text-xs sm:text-sm text-[#4cd7f6] font-medium select-all">
                  {emailAddress}
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1 text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4cd7f6]" />
                      <span className="font-mono text-[11px] text-[#4cd7f6] font-bold">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Message Transmission Box */}
          <div className="lg:col-span-5 w-full">
            <div className="p-5 sm:p-6 rounded-xl bg-[#1a1b21]/80 border border-white/[0.08] shadow-lg">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <span className="font-mono text-xs text-[#adc6ff] uppercase font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>TRANSMIT DISPATCH</span>
                </span>
                <span className="font-mono text-[10px] text-[#869397] uppercase">ENCRYPTED</span>
              </div>

              {isSent ? (
                <div className="py-8 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#e3e1e9]">
                    Transmission Received
                  </h4>
                  <p className="font-body text-xs text-[#bcc9cd] max-w-xs mx-auto">
                    Thank you for reaching out! Shreya will respond to your dispatch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-3">
                  <div>
                    <label className="block font-mono text-[11px] text-[#bcc9cd] uppercase mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#0d0e13] border border-white/[0.08] text-sm text-[#e3e1e9] placeholder-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]/60 transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#bcc9cd] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@enterprise.io"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#0d0e13] border border-white/[0.08] text-sm text-[#e3e1e9] placeholder-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]/60 transition-colors font-body"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#bcc9cd] uppercase mb-1">
                      Message / Proposal
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Share project ideas, collaboration, or queries..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded bg-[#0d0e13] border border-white/[0.08] text-sm text-[#e3e1e9] placeholder-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]/60 transition-colors font-body resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-2.5 px-4 rounded bg-[#4cd7f6] text-[#003640] font-body text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#06b6d4] transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND DISPATCH</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Ambient Glow Orb */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4cd7f6]/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}
