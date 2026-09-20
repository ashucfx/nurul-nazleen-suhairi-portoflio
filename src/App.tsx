import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExecutiveMetrics } from './components/ExecutiveMetrics';
import { ExecutiveProfile } from './components/ExecutiveProfile';
import { ExpertiseSystem } from './components/ExpertiseSystem';
import { CareerTimeline } from './components/CareerTimeline';
import { ProofOfImpact } from './components/ProofOfImpact';
import { LeadershipPhilosophy } from './components/LeadershipPhilosophy';
import { FeaturedInsights } from './components/FeaturedInsights';
import { Credentials } from './components/Credentials';
import { RegionalFootprint } from './components/RegionalFootprint';
import { ExecutiveContact } from './components/ExecutiveContact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

// Dedicated Specialized Pages
import { AssetIntegrityPage } from './pages/AssetIntegrityPage';
import { ProcessSafetyPage } from './pages/ProcessSafetyPage';
import { DigitalRiskPage } from './pages/DigitalRiskPage';
import { CredentialsPage } from './pages/CredentialsPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Hash-based URL synchronizer for direct deep-linking and browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'asset-integrity', 'process-safety', 'digital-risk', 'credentials', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-steel-200 selection:bg-signal-cyan/20 selection:text-signal-cyanLight font-sans">
      
      {/* Sticky Multi-Page Executive Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigatePage={navigateToPage}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className="transition-opacity duration-300">
        {currentPage === 'home' && (
          <>
            {/* Cinematic Live Hero with Real-Time Clock & 3D Holographic Monolith */}
            <Hero
              onOpenCVModal={() => setIsCVModalOpen(true)}
              onNavigatePage={navigateToPage}
            />

            {/* Executive Metrics: +12% OEE, 0 fires, 19+ yrs, 3+ CIMAH */}
            <ExecutiveMetrics />

            {/* Executive Profile: Engineering Leadership at Scale */}
            <ExecutiveProfile />

            {/* Interactive Expertise Architecture */}
            <ExpertiseSystem />

            {/* Vertical Career Journey from 2007 to Present */}
            <CareerTimeline />

            {/* Proof of Impact Case Cards */}
            <ProofOfImpact />

            {/* How I Think: 5 Core Engineering Axioms */}
            <LeadershipPhilosophy />

            {/* Strategic Featured Insights & Keynote Proceedings */}
            <FeaturedInsights />

            {/* Academic Pedigree & Verified Statutory Credentials */}
            <Credentials />

            {/* Regional Industrial Footprint: Malaysia & Brunei Map */}
            <RegionalFootprint />

            {/* Understated Executive Contact Module */}
            <ExecutiveContact onOpenCVModal={() => setIsCVModalOpen(true)} />
          </>
        )}

        {currentPage === 'asset-integrity' && (
          <AssetIntegrityPage
            onNavigateHome={() => navigateToPage('home')}
            onOpenCVModal={() => setIsCVModalOpen(true)}
            onNavigatePage={navigateToPage}
          />
        )}

        {currentPage === 'process-safety' && (
          <ProcessSafetyPage
            onNavigateHome={() => navigateToPage('home')}
            onOpenCVModal={() => setIsCVModalOpen(true)}
            onNavigatePage={navigateToPage}
          />
        )}

        {currentPage === 'digital-risk' && (
          <DigitalRiskPage
            onNavigateHome={() => navigateToPage('home')}
            onOpenCVModal={() => setIsCVModalOpen(true)}
            onNavigatePage={navigateToPage}
          />
        )}

        {currentPage === 'credentials' && (
          <CredentialsPage
            onNavigateHome={() => navigateToPage('home')}
            onOpenCVModal={() => setIsCVModalOpen(true)}
            onNavigatePage={navigateToPage}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigateHome={() => navigateToPage('home')}
            onOpenCVModal={() => setIsCVModalOpen(true)}
          />
        )}
      </main>

      {/* Minimal Executive Footer */}
      <Footer />

      {/* Official Verified CV / ATS Resume Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </div>
  );
};

export default App;
