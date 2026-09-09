import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import {
  X,
  Award,
  ExternalLink,
  Download,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  UserCheck,
  Building,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Upload,
  RefreshCw,
  FileText,
  Eye,
  QrCode
} from 'lucide-react';

export type CertificateId = 'g-startups' | 'ibm-python' | 'wadhwani' | 'hacksprint';

interface CertificateModalProps {
  isOpen: boolean;
  initialCertId?: CertificateId;
  onClose: () => void;
}

interface CertificateData {
  id: CertificateId;
  tabLabel: string;
  title: string;
  program: string;
  issuer: string;
  recipient: string;
  issueDate: string;
  category: string;
  originalFileName: string;
  credentialUrl?: string;
  credentialId?: string;
  hoursOrScope?: string;
  highlights: string[];
}

const CERTIFICATES_DATA: CertificateData[] = [
  {
    id: 'g-startups',
    tabLabel: 'Google for Startups',
    title: 'Startup School: Prompt to Prototype',
    program: 'Startup School Accelerator',
    issuer: 'Google for Startups',
    recipient: 'Shreya Muddatnur',
    issueDate: 'December 9, 2025',
    category: 'Innovation & AI Systems',
    originalFileName: 'Google_for_Startups_Certificate.pdf',
    hoursOrScope: 'Cohort Completion & Prototype Defense',
    highlights: [
      'Prompt Engineering & Foundation Model Workflows',
      'Rapid Cloud Prototyping on Google Cloud Architecture',
      'Scalable System Architecture & Product Validation'
    ]
  },
  {
    id: 'ibm-python',
    tabLabel: 'IBM SkillsBuild',
    title: 'Data Analysis with Python',
    program: 'IBM Developer Skills Network (DA0101EN)',
    issuer: 'IBM SkillsBuild',
    recipient: 'Shreya M',
    issueDate: 'December 11, 2025',
    category: 'Data Science & Computational Engineering',
    originalFileName: 'IBM_SkillsBuild_Data_Analysis.pdf',
    credentialUrl: 'https://courses.skillsbuild.skillsnetwork.site/certificates/21bfb14469ad47bf9d0c22b83d47caff',
    credentialId: '21bfb14469ad47bf9d0c22b83d47caff',
    hoursOrScope: 'Passing Grade & Comprehensive Data Labs',
    highlights: [
      'Exploratory Data Analysis with Pandas & NumPy',
      'Model Development, Regression & Scikit-Learn Pipelines',
      'Data Wrangling, Normalization & Statistical Inference'
    ]
  },
  {
    id: 'wadhwani',
    tabLabel: 'Wadhwani Foundation',
    title: 'Certificate of Content Completion: Ignite Full',
    program: 'Wadhwani Global Entrepreneur (Ignite Full)',
    issuer: 'Wadhwani Foundation',
    recipient: 'Shreya M (REVA University)',
    issueDate: 'June 08, 2026',
    category: 'Venture Creation & Strategy',
    originalFileName: 'Wadhwani_Foundation_Ignite_Full.pdf',
    hoursOrScope: '42 Hours of Intensive Coursework Training',
    highlights: [
      'Business Modeling, Value Proposition & Market Fit',
      'Financial Projections & Venture Viability Modeling',
      'Ideation to Enterprise Strategy Execution'
    ]
  },
  {
    id: 'hacksprint',
    tabLabel: 'Hack/Sprint Hackathon',
    title: 'Hack/Sprint Certificate of Participation',
    program: 'Dev/Track with Shardeum, MSW & REVA University',
    issuer: 'Dev/Track & REVA University',
    recipient: 'SHREYA M',
    issueDate: 'December 2025',
    category: 'Competitive Engineering & IoT',
    originalFileName: 'hacksprint.jpeg',
    credentialId: 'HS-REVA-DEVTRACK-2025',
    hoursOrScope: '24hr Collaborative Hackathon Sprint',
    highlights: [
      'Rapid Hardware & Embedded Logic Prototyping',
      'Web3 & Distributed Ecosystem Integration',
      'Collaborative Product Sprint Execution under Time Constraints'
    ]
  }
];

export function CertificateModal({ isOpen, initialCertId = 'g-startups', onClose }: CertificateModalProps) {
  const [activeCertId, setActiveCertId] = useState<CertificateId>(initialCertId);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [customFiles, setCustomFiles] = useState<Record<CertificateId, string | null>>({
    'g-startups': null,
    'ibm-python': null,
    'wadhwani': null,
    'hacksprint': null
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialCertId) {
      setActiveCertId(initialCertId);
    }
  }, [initialCertId]);

  // Load any stored uploaded custom files from localStorage
  useEffect(() => {
    try {
      const loadedFiles: Record<CertificateId, string | null> = {
        'g-startups': localStorage.getItem('cert_custom_g-startups'),
        'ibm-python': localStorage.getItem('cert_custom_ibm-python'),
        'wadhwani': localStorage.getItem('cert_custom_wadhwani'),
        'hacksprint': localStorage.getItem('cert_custom_hacksprint')
      };
      setCustomFiles(loadedFiles);
    } catch {
      // ignore storage errors
    }
  }, []);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = CERTIFICATES_DATA.findIndex((c) => c.id === activeCertId);
        const nextIndex = (currentIndex + 1) % CERTIFICATES_DATA.length;
        setActiveCertId(CERTIFICATES_DATA[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = CERTIFICATES_DATA.findIndex((c) => c.id === activeCertId);
        const prevIndex = (currentIndex - 1 + CERTIFICATES_DATA.length) % CERTIFICATES_DATA.length;
        setActiveCertId(CERTIFICATES_DATA[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeCertId, onClose]);

  if (!isOpen) return null;

  const activeCert = CERTIFICATES_DATA.find((c) => c.id === activeCertId) || CERTIFICATES_DATA[0];
  const currentIndex = CERTIFICATES_DATA.findIndex((c) => c.id === activeCertId);
  const currentCustomFile = customFiles[activeCertId];

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + CERTIFICATES_DATA.length) % CERTIFICATES_DATA.length;
    setActiveCertId(CERTIFICATES_DATA[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % CERTIFICATES_DATA.length;
    setActiveCertId(CERTIFICATES_DATA[nextIndex].id);
  };

  const handleCopyLink = () => {
    const textToCopy = activeCert.credentialUrl || `${window.location.origin}#certifications`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCustomFiles((prev) => ({ ...prev, [activeCertId]: dataUrl }));
        try {
          localStorage.setItem(`cert_custom_${activeCertId}`, dataUrl);
        } catch {
          // ignore quota error
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveCustomFile = () => {
    setCustomFiles((prev) => ({ ...prev, [activeCertId]: null }));
    try {
      localStorage.removeItem(`cert_custom_${activeCertId}`);
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full ${
          isFullscreen ? 'max-w-[98vw] h-[96vh]' : 'max-w-5xl max-h-[92vh]'
        } flex flex-col rounded-2xl bg-[#0e1017] border border-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300`}
      >
        {/* Hidden File Input for uploading original files (hacksprint.jpeg or PDF) */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,application/pdf"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.08] bg-[#14161f]/95">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 flex items-center justify-center text-[#4cd7f6]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#4cd7f6] uppercase tracking-widest font-bold">
                  ORIGINAL CERTIFICATE VAULT
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  AUTHENTIC CREDENTIAL
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#e3e1e9] leading-tight">
                {activeCert.title}
              </h3>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Upload or View Original Document */}
            <button
              onClick={() => fileInputRef.current?.click()}
              title="Upload your original certificate file (JPEG or PDF)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors cursor-pointer border border-white/[0.08]"
            >
              <Upload className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span className="hidden sm:inline">Attach Original File</span>
            </button>

            {currentCustomFile && (
              <button
                onClick={handleRemoveCustomFile}
                title="Reset to Original Replica"
                className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-mono transition-colors cursor-pointer border border-red-500/20"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? 'Exit Fullscreen' : 'Expand View'}
              className="p-2 rounded-lg bg-white/[0.04] text-[#bcc9cd] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handlePrint}
              title="Print Certificate"
              className="hidden sm:inline-flex p-2 rounded-lg bg-white/[0.04] text-[#bcc9cd] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              title="Close Modal (Esc)"
              className="p-2 rounded-lg bg-white/[0.06] text-[#bcc9cd] hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Navigation Tabs */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#10121a] border-b border-white/[0.06] overflow-x-auto scrollbar-none gap-2">
          <div className="flex items-center gap-2">
            {CERTIFICATES_DATA.map((cert, idx) => {
              const isActive = cert.id === activeCertId;
              return (
                <button
                  key={cert.id}
                  onClick={() => setActiveCertId(cert.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#4cd7f6]/15 text-[#4cd7f6] border border-[#4cd7f6]/40 shadow-[0_0_12px_rgba(76,215,246,0.2)]'
                      : 'text-[#869397] hover:text-[#e3e1e9] hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-[#4cd7f6]' : 'bg-[#869397]'
                    }`}
                  />
                  <span>
                    {idx + 1}. {cert.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Arrow Switcher */}
          <div className="hidden sm:flex items-center gap-1">
            <span className="font-mono text-[11px] text-[#869397] mr-2">
              {currentIndex + 1} of {CERTIFICATES_DATA.length}
            </span>
            <button
              onClick={handlePrev}
              title="Previous (Left Arrow)"
              className="p-1 rounded-md bg-white/[0.04] text-[#bcc9cd] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              title="Next (Right Arrow)"
              className="p-1 rounded-md bg-white/[0.04] text-[#bcc9cd] hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Authentic High-Resolution Certificate Canvas View */}
          <div className="w-full flex justify-center">
            {currentCustomFile ? (
              <div className="w-full max-w-3xl rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black flex flex-col items-center">
                {currentCustomFile.startsWith('data:application/pdf') ? (
                  <iframe
                    src={currentCustomFile}
                    title={activeCert.title}
                    className="w-full h-[550px] rounded-lg"
                  />
                ) : (
                  <img
                    src={currentCustomFile}
                    alt={activeCert.title}
                    className="w-full h-auto object-contain max-h-[600px] rounded-lg"
                  />
                )}
                <div className="py-2 px-4 w-full bg-[#14161f] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#bcc9cd]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Displaying user-uploaded original file
                  </span>
                  <button
                    onClick={handleRemoveCustomFile}
                    className="text-red-400 hover:text-red-300 underline cursor-pointer"
                  >
                    Switch back to authentic digital document
                  </button>
                </div>
              </div>
            ) : (
              <>
                {activeCertId === 'g-startups' && <OriginalGoogleStartupsCertificate />}
                {activeCertId === 'ibm-python' && <OriginalIBMPythonCertificate />}
                {activeCertId === 'wadhwani' && <OriginalWadhwaniCertificate />}
                {activeCertId === 'hacksprint' && <OriginalHackSprintCertificate onUploadClick={() => fileInputRef.current?.click()} />}
              </>
            )}
          </div>

          {/* Credential Metadata & Verification Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-5 rounded-xl bg-[#14161f] border border-white/[0.08]">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#869397] uppercase flex items-center gap-1">
                <Building className="w-3 h-3 text-[#4cd7f6]" />
                ISSUING INSTITUTION &amp; PROGRAM
              </span>
              <p className="font-display text-sm font-bold text-[#e3e1e9]">
                {activeCert.issuer}
              </p>
              <p className="font-mono text-xs text-[#bcc9cd]">
                {activeCert.program}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] text-[#869397] uppercase flex items-center gap-1">
                <UserCheck className="w-3 h-3 text-[#4cd7f6]" />
                RECIPIENT &amp; DURATION
              </span>
              <p className="font-display text-sm font-bold text-[#e3e1e9]">
                {activeCert.recipient}
              </p>
              <p className="font-mono text-xs text-[#4cd7f6]">
                {activeCert.hoursOrScope}
              </p>
            </div>

            <div className="space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#869397] uppercase flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#4cd7f6]" />
                  DATE OF COMPLETION
                </span>
                <p className="font-mono text-xs font-semibold text-[#e3e1e9]">
                  {activeCert.issueDate}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {activeCert.credentialUrl && (
                  <a
                    href={activeCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f62fe] hover:bg-[#0353e9] text-white font-mono text-xs font-semibold shadow-md transition-colors"
                  >
                    <span>Verify Live Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#bcc9cd] hover:text-white font-mono text-xs transition-colors cursor-pointer border border-white/[0.06]"
                >
                  {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedLink ? 'Copied Link' : 'Copy Record'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Notice to user on original files */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-[#4cd7f6] shrink-0" />
              <span className="font-body text-xs text-[#bcc9cd]">
                Original file reference: <code className="font-mono text-[#e3e1e9] bg-white/[0.06] px-1.5 py-0.5 rounded">{activeCert.originalFileName}</code>
              </span>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4cd7f6] hover:underline cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Attach your {activeCert.originalFileName}</span>
            </button>
          </div>
        </div>

        {/* Modal Bottom Footer Bar */}
        <div className="px-4 sm:px-6 py-3 border-t border-white/[0.08] bg-[#14161f]/90 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-[11px] text-[#bcc9cd] hidden sm:inline">
              Authenticated Credential Dossier • Shreya M
            </span>
            <span className="font-mono text-[11px] text-[#bcc9cd] sm:hidden">
              Authenticated Credential
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#4cd7f6] text-[#003640] hover:bg-[#06b6d4] font-body text-xs font-bold uppercase transition-colors cursor-pointer shadow-[0_0_12px_rgba(76,215,246,0.3)]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   1. Google for Startups Original Certificate (Pure White, Official Branding)
   ========================================================================= */
function OriginalGoogleStartupsCertificate() {
  return (
    <div className="w-full max-w-3xl aspect-[1.414/1] relative overflow-hidden rounded-xl shadow-2xl bg-white text-[#202124] p-8 sm:p-12 flex flex-col justify-between select-none border border-[#dadce0]">
      {/* Top Right Signature Google Diagonal Color Bands */}
      <div className="absolute top-0 right-0 w-44 sm:w-64 h-44 sm:h-64 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Slanted color ribbons matching official Google for Startups Startup School template */}
          <line x1="80" y1="0" x2="200" y2="120" stroke="#4285F4" strokeWidth="14" />
          <line x1="110" y1="0" x2="200" y2="90" stroke="#EA4335" strokeWidth="14" />
          <line x1="140" y1="0" x2="200" y2="60" stroke="#FBBC05" strokeWidth="14" />
          <line x1="170" y1="0" x2="200" y2="30" stroke="#34A853" strokeWidth="14" />
        </svg>
      </div>

      {/* Bottom Right Decorative Google Colored Stripes */}
      <div className="absolute bottom-0 right-0 w-36 sm:w-48 h-36 sm:h-48 pointer-events-none overflow-hidden opacity-90">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <line x1="0" y1="160" x2="160" y2="0" stroke="#FBBC05" strokeWidth="8" />
          <line x1="30" y1="160" x2="160" y2="30" stroke="#4285F4" strokeWidth="8" />
          <line x1="60" y1="160" x2="160" y2="60" stroke="#34A853" strokeWidth="8" />
        </svg>
      </div>

      {/* Top Header: Official Google for Startups Brand Logo */}
      <div className="flex items-center gap-2 z-10">
        <div className="font-sans font-bold text-xl sm:text-2xl flex items-center tracking-tight">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
          <span className="text-[#5f6368] font-normal ml-2">for Startups</span>
        </div>
      </div>

      {/* Centerpiece Certificate Content */}
      <div className="my-auto text-center space-y-3 sm:space-y-4 z-10 px-4">
        <p className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#5f6368]">
          Startup School: Prompt to Prototype
        </p>

        {/* Authentic Rosette Ribbon Medal */}
        <div className="mx-auto flex flex-col items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1a73e8] shadow-md border-2 border-white flex items-center justify-center">
            {/* Inner Medal Core */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff7070] flex items-center justify-center shadow-inner">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Hanging Ribbon Tails */}
            <div className="absolute -bottom-3 left-3 w-4 h-6 bg-[#1a73e8] rotate-12 -z-10 clip-ribbon" />
            <div className="absolute -bottom-3 right-3 w-4 h-6 bg-[#1a73e8] -rotate-12 -z-10 clip-ribbon" />
          </div>
        </div>

        <div>
          <h2 className="font-sans text-2xl sm:text-4xl font-bold tracking-tight text-[#202124]">
            Certificate of Completion
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5f6368] mt-1 italic">
            awarded to
          </p>
        </div>

        <div className="inline-block pb-1.5 px-6 border-b-2 border-[#202124]">
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#202124]">
            Shreya Muddatnur
          </h3>
        </div>
      </div>

      {/* Bottom Footer: Official Date & Credential Statement */}
      <div className="flex items-center justify-between pt-4 border-t border-[#e8eaed] text-xs sm:text-sm text-[#5f6368] font-sans z-10">
        <span className="font-medium">Google for Startups Accelerator</span>
        <span className="font-semibold text-[#202124]">December 9, 2025</span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. IBM SkillsBuild Original Certificate (Clean White Paper, IBM Logo & QR)
   ========================================================================= */
function OriginalIBMPythonCertificate() {
  return (
    <div className="w-full max-w-3xl aspect-[1.414/1] relative overflow-hidden rounded-xl shadow-2xl bg-white text-[#161616] p-6 sm:p-10 flex flex-col justify-between select-none border-4 border-[#393939]">
      {/* Decorative Guilloche Border Frame */}
      <div className="absolute inset-2 border-2 border-[#525252] pointer-events-none" />
      <div className="absolute inset-3.5 border border-[#8d8d8d] pointer-events-none" />

      {/* Top Row: IBM SkillsBuild Logo + Authentic QR Code */}
      <div className="flex items-start justify-between z-10 pt-2 px-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            {/* Iconic IBM Blue 8-Bar Logo */}
            <div className="font-mono font-black text-3xl sm:text-4xl tracking-tighter text-[#0f62fe] select-none">
              IBM
            </div>
            <div className="h-7 w-px bg-gray-300 mx-1" />
            <span className="font-sans font-medium text-base sm:text-lg text-[#161616]">
              SkillsBuild
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#525252] block uppercase tracking-wider font-semibold">
            IBM DEVELOPER SKILLS NETWORK
          </span>
        </div>

        {/* Authentic QR Code */}
        <div className="flex flex-col items-center">
          <div className="p-1.5 bg-white border border-gray-300 rounded shadow-sm">
            <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-[#161616]" />
          </div>
          <span className="font-mono text-[9px] text-[#525252] mt-1">Scan to verify</span>
        </div>
      </div>

      {/* Main Award Statement */}
      <div className="my-auto text-center space-y-3 px-4 z-10">
        <p className="font-serif italic text-sm text-[#525252]">
          This is to certify that
        </p>

        <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#0f62fe]">
          Shreya M
        </h2>

        <p className="font-serif italic text-xs sm:text-sm text-[#525252] max-w-lg mx-auto">
          successfully completed and received a passing grade in
        </p>

        <div className="space-y-1">
          <h3 className="font-sans text-xl sm:text-3xl font-bold text-[#161616]">
            Data Analysis with Python
          </h3>
          <p className="font-mono text-xs text-[#525252]">
            (DA0101EN, provided by IBM)
          </p>
        </div>

        <p className="font-sans text-[11px] sm:text-xs text-[#6f6f6f] max-w-md mx-auto leading-relaxed">
          A course on skillsbuild.skillsnetwork.site
          <br />
          Powered by IBM Developer Skills Network.
        </p>
      </div>

      {/* Bottom Row: Signatures and Verification URL */}
      <div className="border-t border-[#d1d1d1] pt-3 px-3 flex flex-col sm:flex-row items-center justify-between gap-2 z-10 text-xs font-mono text-[#525252]">
        <div>
          <span className="text-[#161616] font-semibold">Issued by: </span>
          <span>IBM SkillsBuild</span>
          <span className="mx-2">•</span>
          <span className="text-[#161616] font-semibold">December 11, 2025</span>
        </div>
        <div className="truncate max-w-[280px] sm:max-w-xs text-[10px] text-[#0f62fe] underline">
          https://courses.skillsbuild.skillsnetwork.site/certificates/21bfb14469ad47bf9d0c22b83d47caff
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. Wadhwani Foundation Original Certificate (Parchment, Gold Border, Signature)
   ========================================================================= */
function OriginalWadhwaniCertificate() {
  return (
    <div className="w-full max-w-3xl aspect-[1.414/1] relative overflow-hidden rounded-xl shadow-2xl bg-[#faf8f3] text-[#1c1917] p-6 sm:p-10 flex flex-col justify-between select-none border-4 border-[#b45309]/40">
      {/* Gold Double Frame */}
      <div className="absolute inset-2 border border-[#d97706]/40 pointer-events-none" />
      <div className="absolute inset-3.5 border-2 border-[#b45309]/50 pointer-events-none" />

      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#b45309]" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#b45309]" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#b45309]" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#b45309]" />

      {/* Header: Wadhwani Foundation Flame Emblem */}
      <div className="flex items-center justify-between z-10 pt-2 px-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ea580c] to-[#f59e0b] flex items-center justify-center text-white shadow-md font-bold text-lg">
            W
          </div>
          <div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#b45309] tracking-wider uppercase">
              WADHWANI FOUNDATION
            </h4>
            <span className="font-sans text-[11px] text-[#78716c] block tracking-wide">
              Global Entrepreneur Network
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="font-mono text-[10px] font-bold text-[#b45309] uppercase tracking-widest block">
            OFFICIAL ACCREDITATION
          </span>
          <span className="font-sans text-xs text-[#78716c]">42 Hours Coursework Training</span>
        </div>
      </div>

      {/* Certificate Title & Recipient Body */}
      <div className="my-auto text-center space-y-2.5 sm:space-y-3 px-4 z-10">
        <h2 className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-[#78350f] uppercase">
          CERTIFICATE OF CONTENT COMPLETION
        </h2>

        <p className="font-serif italic text-xs sm:text-sm text-[#78716c]">
          This is to certify that
        </p>

        <div className="space-y-0.5">
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1c1917] tracking-tight">
            Shreya M
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#b45309] font-semibold">
            from Reva University, Bengaluru
          </p>
        </div>

        <p className="font-sans text-[11px] sm:text-xs text-[#57534e] max-w-xl mx-auto leading-relaxed">
          has successfully completed the <span className="font-bold text-[#1c1917]">Ignite Full</span> on{' '}
          <span className="font-semibold text-[#1c1917]">June 08, 2026</span> by fulfilling all
          coursework and assessments. He/She has gained key entrepreneurial skills in ideation,
          business modeling, and financial planning. This certificate celebrates his/her achievement
          and inspires him/her to apply these skills for meaningful impact.
        </p>

        <p className="font-mono text-[10px] text-[#78716c] italic">
          This certificate also confirms the completion of 42 hours of coursework training.
        </p>
      </div>

      {/* Footer: Signatory Meetul Patel & QR Code */}
      <div className="pt-3 border-t border-[#e7e5e4] px-4 flex items-end justify-between z-10">
        <div className="space-y-1 text-left">
          <div className="font-serif italic text-base sm:text-lg text-[#b45309] font-bold font-display">
            Meetul Patel
          </div>
          <div className="h-px w-36 bg-[#b45309]/60" />
          <p className="font-sans text-[10px] sm:text-[11px] text-[#57534e]">
            President, Wadhwani Global Entrepreneur
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <span className="font-mono text-[9px] text-[#78716c] block uppercase">Scan &amp; Verify</span>
            <span className="font-mono text-[8px] text-[#a8a29e]">WF-IGNITE-2026</span>
          </div>
          <div className="p-1.5 bg-white border border-[#e7e5e4] rounded shadow-sm">
            <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-[#1c1917]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. Hack/Sprint Original Certificate (True-to-Life hacksprint.jpeg Replica)
   ========================================================================= */
interface HackSprintProps {
  onUploadClick: () => void;
}

function OriginalHackSprintCertificate({ onUploadClick }: HackSprintProps) {
  return (
    <div className="w-full max-w-3xl aspect-[1.414/1] relative overflow-hidden rounded-xl shadow-2xl bg-[#090a10] text-[#e2e8f0] p-6 sm:p-10 flex flex-col justify-between select-none border-2 border-[#ef4444]/60">
      {/* Subtle Grid Circuit Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Tech HUD Corner Brackets */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#ef4444]" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#ef4444]" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#ef4444]" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#ef4444]" />

      {/* Top Sponsor Logos Strip */}
      <div className="flex items-center justify-between z-10 px-2 pt-1 border-b border-white/[0.08] pb-2.5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs sm:text-sm font-black text-[#ef4444] tracking-widest">
            &lt;DEV/TRACK&gt;
          </span>
          <span className="text-white/20">|</span>
          <span className="font-display text-[11px] sm:text-xs font-bold text-white tracking-wider">
            MyStartupWave
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] sm:text-xs text-[#06b6d4] font-semibold">
            SHARDEUM
          </span>
          <span className="text-white/20">|</span>
          <span className="font-display text-[11px] sm:text-xs font-bold text-[#f59e0b]">
            REVA UNIVERSITY
          </span>
        </div>
      </div>

      {/* Centerpiece Content matching hacksprint.jpeg exactly */}
      <div className="my-auto text-center space-y-3 sm:space-y-4 px-4 z-10">
        <div className="space-y-1">
          <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">
            &lt;Hack/Sprint&gt;
          </h1>
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#ef4444] font-bold">
            CERTIFICATE OF PARTICIPATION
          </p>
        </div>

        <p className="font-mono text-xs text-[#94a3b8]">
          This certificate is awarded to
        </p>

        <div className="inline-block py-2 px-8 rounded-lg bg-white/[0.03] border border-[#ef4444]/40 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
            SHREYA M
          </h2>
        </div>

        <p className="font-body text-xs sm:text-sm text-[#cbd5e1] max-w-lg mx-auto leading-relaxed">
          for participating in the <span className="text-[#ef4444] font-semibold">Hack/Sprint</span>,
          organized by <span className="text-white font-semibold">Dev/Track</span>. This highlights
          their dedication to learning and growth within the tech community while making an impact in
          the society.
        </p>
      </div>

      {/* Three Authentic Signatories */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.08] text-center z-10 px-2">
        <div className="space-y-0.5">
          <div className="font-mono text-xs text-white font-semibold">
            Mr. Amit Kumar Singh
          </div>
          <div className="text-[9px] font-mono text-[#94a3b8]">
            MYSTARTUPWAVE
          </div>
        </div>

        <div className="space-y-0.5">
          <div className="font-mono text-xs text-[#06b6d4] font-semibold">
            Shardeum
          </div>
          <div className="text-[9px] font-mono text-[#94a3b8]">
            Ecosystem Partner
          </div>
        </div>

        <div className="space-y-0.5">
          <div className="font-mono text-xs text-white font-semibold">
            Dr. Priyanka Bharti
          </div>
          <div className="text-[9px] font-mono text-[#94a3b8]">
            Club Co-Ordinator, REVA University
          </div>
        </div>
      </div>
    </div>
  );
}
