import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Zap, Sun, ChevronRight } from 'lucide-react';
import { useNessExperience } from '@/contexts/NessExperienceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { pageVariants, cardVariants, cardHoverVariants, productRevealVariants, logoStaggerVariants } from '@/config/motion';

// Inverter logos (replace with actual logo images)
const inverterLogos = [
  { name: 'Victron', src: '/src/assets/victron-logo.png' },
  { name: 'Studer', src: '/src/assets/studer-logo.png' },
  { name: 'Solis', src: '/src/assets/solis-logo.png' },
  { name: 'Sunlingtec', src: '/src/assets/deye-logo.png' }, // Using deye as placeholder
  { name: 'FIMER', src: '/src/assets/fimer-logo.png' },
];

type SubStep = 'solar-context' | 'power-intent' | 'ups-sizing' | 'result';

export const ProductSelector: React.FC = () => {
  const { productSelection, setProductSelection, setCurrentStep } = useNessExperience();
  const [subStep, setSubStep] = useState<SubStep>('solar-context');
  const [localLoad, setLocalLoad] = useState<string>(productSelection.essentialLoad?.toString() || '');
  const [localHours, setLocalHours] = useState<string>(productSelection.backupHours?.toString() || '');

  // Calculate recommended UPS units
  useEffect(() => {
    if (localLoad && localHours) {
      const load = parseFloat(localLoad);
      const hours = parseFloat(localHours);
      if (!isNaN(load) && !isNaN(hours)) {
        const units = Math.ceil((load * hours) / 5);
        setProductSelection({ 
          essentialLoad: load, 
          backupHours: hours, 
          recommendedUnits: units 
        });
      }
    }
  }, [localLoad, localHours, setProductSelection]);

  const handleSolarChoice = (choice: 'yes' | 'planning' | 'no') => {
    setProductSelection({ hasSolar: choice });
    if (choice === 'yes') {
      setProductSelection({ selectedProduct: 'ac-brick' });
      setSubStep('result');
    } else if (choice === 'planning') {
      setProductSelection({ selectedProduct: 'aio' });
      setSubStep('result');
    } else {
      setSubStep('power-intent');
    }
  };

  const handlePowerIntent = (intent: 'whole-home' | 'integrate') => {
    setProductSelection({ powerIntent: intent });
    if (intent === 'whole-home') {
      setProductSelection({ selectedProduct: 'ups' });
      setSubStep('ups-sizing');
    } else {
      setProductSelection({ selectedProduct: 'battery-only' });
      setSubStep('result');
    }
  };

  const handleStartOver = () => {
    setProductSelection({});
    setSubStep('solar-context');
  };

  const handleContinue = () => {
    setCurrentStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {/* Solar Context */}
        {subStep === 'solar-context' && (
          <motion.div
            key="solar-context"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Do you already have rooftop solar?
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              {[
                { id: 'yes', label: 'Yes, I have solar', icon: Sun },
                { id: 'planning', label: 'Planning to install', icon: Sun },
                { id: 'no', label: 'No solar', icon: Battery },
              ].map((option, index) => (
                <motion.div
                  key={option.id}
                  custom={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.button
                    onClick={() => handleSolarChoice(option.id as 'yes' | 'planning' | 'no')}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full p-8 rounded-2xl border-2 border-border bg-card/50 hover:border-primary/50 transition-colors"
                  >
                    <option.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <p className="font-medium text-lg">{option.label}</p>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Power Intent */}
        {subStep === 'power-intent' && (
          <motion.div
            key="power-intent"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                What's your main need?
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto">
              {[
                { id: 'whole-home', label: 'Whole-home / instant backup', icon: Zap },
                { id: 'integrate', label: 'Integrate with my inverter', icon: Battery },
              ].map((option, index) => (
                <motion.div
                  key={option.id}
                  custom={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.button
                    onClick={() => handlePowerIntent(option.id as 'whole-home' | 'integrate')}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full p-8 rounded-2xl border-2 border-border bg-card/50 hover:border-primary/50 transition-colors"
                  >
                    <option.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <p className="font-medium text-lg">{option.label}</p>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* UPS Sizing */}
        {subStep === 'ups-sizing' && (
          <motion.div
            key="ups-sizing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Size your backup system
              </h1>
              <p className="text-lg text-muted-foreground">Each NESS UPS = 5 kWh</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 mt-12">
              <div className="space-y-3">
                <label className="text-sm font-medium">Essential Load (kW)</label>
                <Input
                  type="number"
                  step="0.5"
                  value={localLoad}
                  onChange={(e) => setLocalLoad(e.target.value)}
                  placeholder="e.g., 3.5"
                  className="text-lg p-6"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium">Hours of Backup</label>
                <div className="flex gap-2">
                  {[2, 4, 6, 8, 12].map((h) => (
                    <Button
                      key={h}
                      variant={localHours === h.toString() ? 'default' : 'outline'}
                      onClick={() => setLocalHours(h.toString())}
                      className="flex-1"
                    >
                      {h}h
                    </Button>
                  ))}
                </div>
                <Input
                  type="number"
                  step="1"
                  value={localHours}
                  onChange={(e) => setLocalHours(e.target.value)}
                  placeholder="Custom hours"
                  className="text-lg p-6"
                />
              </div>

              {productSelection.recommendedUnits && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-primary/5 border-2 border-primary text-center space-y-2"
                >
                  <p className="text-sm font-medium text-muted-foreground">Recommended</p>
                  <p className="text-3xl font-bold">
                    {productSelection.recommendedUnits} × NESS UPS
                  </p>
                  <p className="text-lg text-muted-foreground">
                    ({productSelection.recommendedUnits * 5} kWh total)
                  </p>
                </motion.div>
              )}

              <div className="flex justify-center pt-4">
                <Button
                  size="lg"
                  onClick={() => setSubStep('result')}
                  disabled={!productSelection.recommendedUnits}
                  className="px-12"
                >
                  Continue
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Result */}
        {subStep === 'result' && (
          <motion.div
            key="result"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-12"
          >
            <motion.div
              variants={productRevealVariants}
              className="text-center space-y-8 p-12 rounded-3xl bg-gradient-to-b from-card/50 to-background border border-border/50"
            >
              <div className="space-y-4">
                <Battery className="w-20 h-20 mx-auto text-primary" />
                <h1 className="text-4xl font-bold">
                  {productSelection.selectedProduct === 'ac-brick' && 'NESS AC Brick'}
                  {productSelection.selectedProduct === 'aio' && 'NESS AIO'}
                  {productSelection.selectedProduct === 'ups' && 'NESS UPS System'}
                  {productSelection.selectedProduct === 'battery-only' && 'NESS Battery System'}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {productSelection.selectedProduct === 'ac-brick' && 
                    'Retrofit your existing solar with intelligent battery storage'}
                  {productSelection.selectedProduct === 'aio' && 
                    'Complete solar + storage solution for new installations'}
                  {productSelection.selectedProduct === 'ups' && 
                    'Whole-home backup with instant switching'}
                  {productSelection.selectedProduct === 'battery-only' && 
                    'Premium battery compatible with leading inverters'}
                </p>
              </div>

              <div className="space-y-3 max-w-xl mx-auto text-left">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>
                    {productSelection.selectedProduct === 'ac-brick' && 'Seamless AC coupling technology'}
                    {productSelection.selectedProduct === 'aio' && 'Integrated solar + storage design'}
                    {productSelection.selectedProduct === 'ups' && 'Zero transfer time switching'}
                    {productSelection.selectedProduct === 'battery-only' && 'Works with your existing inverter'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>
                    {productSelection.selectedProduct === 'ac-brick' && 'Smart grid management'}
                    {productSelection.selectedProduct === 'aio' && 'Optimized for maximum savings'}
                    {productSelection.selectedProduct === 'ups' && 'Covers all essential loads'}
                    {productSelection.selectedProduct === 'battery-only' && 'Modular and scalable capacity'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>
                    {productSelection.selectedProduct === 'ac-brick' && '10-year warranty included'}
                    {productSelection.selectedProduct === 'aio' && 'Future-proof technology'}
                    {productSelection.selectedProduct === 'ups' && 'Reliable LFP battery chemistry'}
                    {productSelection.selectedProduct === 'battery-only' && 'Premium LFP cells with 10-year warranty'}
                  </p>
                </div>
              </div>

              {productSelection.selectedProduct === 'ups' && productSelection.recommendedUnits && (
                <div className="p-6 rounded-xl bg-background/50 border border-border max-w-md mx-auto">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Your Configuration</p>
                  <p className="text-2xl font-bold">
                    {productSelection.recommendedUnits} × NESS UPS ({productSelection.recommendedUnits * 5} kWh)
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {productSelection.essentialLoad} kW × {productSelection.backupHours}h backup
                  </p>
                </div>
              )}

              {productSelection.selectedProduct === 'battery-only' && (
                <div className="space-y-4">
                  <p className="text-sm font-medium text-muted-foreground">Compatible with leading inverters</p>
                  <div className="flex flex-wrap justify-center items-center gap-8">
                    {inverterLogos.map((logo, index) => (
                      <motion.img
                        key={logo.name}
                        custom={index}
                        variants={logoStaggerVariants}
                        initial="initial"
                        animate="animate"
                        src={logo.src}
                        alt={logo.name}
                        className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleContinue} className="px-12">
                Continue
              </Button>
              <Button size="lg" variant="outline" onClick={handleStartOver}>
                Start Over
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
