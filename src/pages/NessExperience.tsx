import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NessExperienceProvider, useNessExperience } from '@/contexts/NessExperienceContext';
import { PersonalizedDesign } from '@/components/experience/PersonalizedDesign';
import { ProductSelector } from '@/components/experience/ProductSelector';
import { SizeYourHome } from '@/components/experience/SizeYourHome';
import { ContactDetails } from '@/components/experience/ContactDetails';
import { Progress } from '@/components/ui/progress';

const ExperienceContent: React.FC = () => {
  const { currentStep } = useNessExperience();
  const progress = (currentStep / 4) * 100;

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Add reduce-motion support
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--motion-duration-fast', '0ms');
      document.documentElement.style.setProperty('--motion-duration-med', '0ms');
      document.documentElement.style.setProperty('--motion-duration-slow', '0ms');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium">
                Step {currentStep} of 4
              </span>
              <span className="text-muted-foreground">
                {currentStep === 1 && 'Personalized Design'}
                {currentStep === 2 && 'Choose Product'}
                {currentStep === 3 && 'Size Your Home'}
                {currentStep === 4 && 'Contact Details'}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24">
        <AnimatePresence mode="wait">
          {currentStep === 1 && <PersonalizedDesign key="step-1" />}
          {currentStep === 2 && <ProductSelector key="step-2" />}
          {currentStep === 3 && <SizeYourHome key="step-3" />}
          {currentStep === 4 && <ContactDetails key="step-4" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NessExperience: React.FC = () => {
  return (
    <NessExperienceProvider>
      <ExperienceContent />
    </NessExperienceProvider>
  );
};

export default NessExperience;
