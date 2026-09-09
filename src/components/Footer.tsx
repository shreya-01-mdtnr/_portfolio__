export function Footer() {
  return (
    <footer className="w-full bg-[#0d0e13]/90 border-t border-white/[0.06] backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-display text-lg text-[#e3e1e9] font-semibold tracking-tight">
            SHREYA.M
          </span>
          <span className="font-mono text-xs text-[#4cd7f6] uppercase tracking-wider font-bold">
            [LAB CORE]
          </span>
        </div>

        {/* Center Tag */}
        <div className="font-mono text-xs text-[#bcc9cd] text-center tracking-wider uppercase">
          AI &amp; DATA SCIENCE • REVA UNIVERSITY
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shreya-m-0a8024375"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors uppercase font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors uppercase font-medium"
            >
              GitHub
            </a>
            <a
              href="mailto:sgmuddatnur@gmail.com"
              className="font-mono text-xs text-[#bcc9cd] hover:text-[#4cd7f6] transition-colors uppercase font-medium"
            >
              Email
            </a>
          </div>
          <span className="font-body text-xs text-[#869397]">
            © 2026 Shreya • Designed for Impact
          </span>
        </div>
      </div>
    </footer>
  );
}
