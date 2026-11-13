import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import PricingSection from './components/PricingSection';
import ContactDemoSection from './components/ContactDemoSection';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Growth ($39/mo • Annual)');

  const handleOpenModal = (planLabel = 'Growth ($39/mo • Annual)') => {
    setSelectedPlan(planLabel);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenModal={() => handleOpenModal('Growth ($39/mo • Annual)')} />

      <main className="flex-grow">
        <HeroSection onOpenModal={() => handleOpenModal('Growth ($39/mo • Annual)')} />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection onSelectPlan={handleOpenModal} />
        <ContactDemoSection />
      </main>

      <Footer />

      <SignUpModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}