import { useState, useEffect } from 'react';
import { User, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnectModal?: () => void;
  onOpenCertModal?: () => void;
}

export function Navbar({ onOpenConnectModal, onOpenCertModal }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'learning', label: 'Learning' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (id === 'certifications' && onOpenCertModal) {
      // Delay slightly for smooth scroll or open immediately
      onOpenCertModal();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0e13]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="h-16 max-w-[1280px] mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            alt="Shreya Monogram Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VOlTylTtDYM5FiZjMT-oE-vR60NKV3GcZOlr-gybVReYqMVTHb-ggpffXY0Wys3Cs5zpcN49rKV89Regmi_fbBggY-LULzsZ3QUKzbkhtBhUCZf8n06LoPsLoX7UEtUI6Iy_hpaQhweTxd1rFe4kWdd0ld7CEnK8DNrjlGM1LRp2-XL_gSODxd9Q_du70lZA9s5kLYMqQ8IFOr4urafIIFYmlDsruBOfyiK0c9zesayECFfP9mymeEYt1J"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg text-[#e3e1e9] tracking-tight font-bold">
              SHREYA.M
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cd7f6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4cd7f6]"></span>
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#4cd7f6] tracking-widest font-semibold">
                SYSTEM ONLINE // AVAILABLE
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[14px] font-body transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#4cd7f6] font-semibold'
                    : 'text-[#bcc9cd] hover:text-[#e3e1e9]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => (onOpenConnectModal ? onOpenConnectModal() : scrollToSection('contact'))}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded bg-[#4cd7f6] text-[#003640] text-xs font-semibold tracking-wide transition-all duration-300 hover:bg-[#06b6d4] hover:text-[#001f26] shadow-[0_0_14px_rgba(76,215,246,0.35)] hover:scale-[1.02] cursor-pointer"
          >
            Let's Connect
          </button>

          <button
            onClick={() => scrollToSection('about')}
            title="Profile details"
            className="w-8 h-8 rounded-full bg-[#4cd7f6] hover:bg-[#06b6d4] flex items-center justify-center text-[#003640] transition-transform active:scale-95 cursor-pointer shadow-sm"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#bcc9cd] hover:text-white p-1 rounded focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#121318]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-2 px-3 rounded text-sm font-medium ${
                  isActive
                    ? 'bg-[#4cd7f6]/10 text-[#4cd7f6]'
                    : 'text-[#bcc9cd] hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConnectModal) onOpenConnectModal();
                else scrollToSection('contact');
              }}
              className="w-full py-2 px-3 rounded bg-[#4cd7f6] text-[#003640] font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(76,215,246,0.3)]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
