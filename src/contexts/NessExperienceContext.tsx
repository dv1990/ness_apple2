import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PersonalDesign {
  homeType?: string;
  solarReadiness?: string;
  priority?: string;
}

export interface ProductSelection {
  hasSolar?: 'yes' | 'planning' | 'no';
  powerIntent?: 'whole-home' | 'integrate';
  essentialLoad?: number;
  backupHours?: number;
  recommendedUnits?: number;
  selectedProduct?: 'ac-brick' | 'aio' | 'ups' | 'battery-only';
}

export interface HomeSizing {
  homeType?: string;
  dailyUsage?: number;
  backupHours?: number;
  recommendedCapacity?: number;
}

export interface ContactInfo {
  name?: string;
  city?: string;
  phone?: string;
  email?: string;
  callBack?: boolean;
  sendWhatsApp?: boolean;
}

interface NessExperienceContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  personalDesign: PersonalDesign;
  setPersonalDesign: (data: Partial<PersonalDesign>) => void;
  productSelection: ProductSelection;
  setProductSelection: (data: Partial<ProductSelection>) => void;
  homeSizing: HomeSizing;
  setHomeSizing: (data: Partial<HomeSizing>) => void;
  contactInfo: ContactInfo;
  setContactInfo: (data: Partial<ContactInfo>) => void;
  resetExperience: () => void;
}

const NessExperienceContext = createContext<NessExperienceContextType | undefined>(undefined);

const STORAGE_KEY = 'ness-experience-state';

export const NessExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalDesign, setPersonalDesignState] = useState<PersonalDesign>({});
  const [productSelection, setProductSelectionState] = useState<ProductSelection>({});
  const [homeSizing, setHomeSizingState] = useState<HomeSizing>({});
  const [contactInfo, setContactInfoState] = useState<ContactInfo>({});

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setCurrentStep(data.currentStep || 1);
        setPersonalDesignState(data.personalDesign || {});
        setProductSelectionState(data.productSelection || {});
        setHomeSizingState(data.homeSizing || {});
        setContactInfoState(data.contactInfo || {});
      } catch (e) {
        console.error('Failed to load saved experience:', e);
      }
    }
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    const data = {
      currentStep,
      personalDesign,
      productSelection,
      homeSizing,
      contactInfo,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [currentStep, personalDesign, productSelection, homeSizing, contactInfo]);

  const setPersonalDesign = (data: Partial<PersonalDesign>) => {
    setPersonalDesignState((prev) => ({ ...prev, ...data }));
  };

  const setProductSelection = (data: Partial<ProductSelection>) => {
    setProductSelectionState((prev) => ({ ...prev, ...data }));
  };

  const setHomeSizing = (data: Partial<HomeSizing>) => {
    setHomeSizingState((prev) => ({ ...prev, ...data }));
  };

  const setContactInfo = (data: Partial<ContactInfo>) => {
    setContactInfoState((prev) => ({ ...prev, ...data }));
  };

  const resetExperience = () => {
    setCurrentStep(1);
    setPersonalDesignState({});
    setProductSelectionState({});
    setHomeSizingState({});
    setContactInfoState({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <NessExperienceContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        personalDesign,
        setPersonalDesign,
        productSelection,
        setProductSelection,
        homeSizing,
        setHomeSizing,
        contactInfo,
        setContactInfo,
        resetExperience,
      }}
    >
      {children}
    </NessExperienceContext.Provider>
  );
};

export const useNessExperience = () => {
  const context = useContext(NessExperienceContext);
  if (!context) {
    throw new Error('useNessExperience must be used within NessExperienceProvider');
  }
  return context;
};
