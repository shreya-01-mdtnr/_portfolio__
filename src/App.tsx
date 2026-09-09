import { useState } from 'react';
import { BackgroundShader } from './components/BackgroundShader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LearningSection } from './components/LearningSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EthosSection } from './components/EthosSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SystemSpecsModal } from './components/SystemSpecsModal';
import { CertificateModal, CertificateId } from './components/CertificateModal';

export default function App() {
  const [specsModalProject, setSpecsModalProject] = useState<'pulse' | 'blindstick' | null>(null);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<CertificateId>('g-startups');

  const handleOpenConnect = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCertModal = (certId?: CertificateId) => {
    if (certId) {
      setSelectedCertId(certId);
    }
    setCertModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#121318] text-[#e3e1e9] selection:bg-[#06b6d4] selection:text-[#001f26] overflow-x-hidden">
      {/* Dynamic Background Shader & Energy Glows */}
      <BackgroundShader />

      {/* Fixed Sticky Header Navigation */}
      <Navbar
        onOpenConnectModal={handleOpenConnect}
        onOpenCertModal={() => handleOpenCertModal('g-startups')}
      />

      {/* Main Content Layout */}
      <main className="relative pt-16 z-10 flex flex-col items-center">
        {/* Hero Section */}
        <HeroSection />

        {/* 01 // DISCOVERY: About Me */}
        <AboutSection />

        {/* 02 // CAPABILITIES: Skills & Technologies */}
        <SkillsSection />

        {/* 04 // WORK & INNOVATION: Featured Projects */}
        <ProjectsSection
          onOpenSpecsModal={(projectType) => setSpecsModalProject(projectType)}
        />

        {/* 03 // ACTIVE HORIZONS: Currently Learning */}
        <LearningSection />

        {/* 05 // RECOGNITION: Certifications & Milestones */}
        <CertificationsSection onOpenCertModal={handleOpenCertModal} />

        {/* 06 // ETHOS: What Drives Me */}
        <EthosSection />

        {/* 07 // REACH OUT: Contact & Direct Dispatch */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Hardware / Algorithmic System Specs Modal */}
      <SystemSpecsModal
        projectType={specsModalProject}
        onClose={() => setSpecsModalProject(null)}
      />

      {/* Authentic Certificate Vault Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        initialCertId={selectedCertId}
        onClose={() => setCertModalOpen(false)}
      />
    </div>
  );
}
