import React from 'react';
import { motion } from 'framer-motion';
import { Home, Sun, Zap } from 'lucide-react';
import { useNessExperience } from '@/contexts/NessExperienceContext';
import { Button } from '@/components/ui/button';
import { pageVariants, cardVariants, cardHoverVariants } from '@/config/motion';

const homeTypes = [
  { id: 'villa', label: 'Villa', icon: Home },
  { id: 'apartment', label: 'Apartment', icon: Home },
  { id: 'farmhouse', label: 'Farmhouse', icon: Home },
];

const solarReadiness = [
  { id: 'installed', label: 'Already Installed' },
  { id: 'planning', label: 'Planning Soon' },
  { id: 'interested', label: 'Interested' },
];

const priorities = [
  { id: 'savings', label: 'Savings', icon: Zap },
  { id: 'backup', label: 'Backup', icon: Zap },
  { id: 'sustainability', label: 'Sustainability', icon: Sun },
];

export const PersonalizedDesign: React.FC = () => {
  const { personalDesign, setPersonalDesign, setCurrentStep } = useNessExperience();

  const isComplete = personalDesign.homeType && personalDesign.solarReadiness && personalDesign.priority;

  const handleContinue = () => {
    if (isComplete) {
      setCurrentStep(2);
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Start with your home.</h1>
        <p className="text-lg text-muted-foreground">In under a minute, shape your perfect setup.</p>
      </div>

      {/* Home Type */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Home type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {homeTypes.map((type, index) => (
            <motion.div
              key={type.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <motion.button
                onClick={() => setPersonalDesign({ homeType: type.id })}
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className={`w-full p-6 rounded-2xl border-2 transition-colors ${
                  personalDesign.homeType === type.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card/50 hover:border-primary/50'
                }`}
              >
                <type.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-medium">{type.label}</p>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solar Readiness */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Solar readiness</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {solarReadiness.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <motion.button
                onClick={() => setPersonalDesign({ solarReadiness: item.id })}
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className={`w-full p-6 rounded-2xl border-2 transition-colors ${
                  personalDesign.solarReadiness === item.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card/50 hover:border-primary/50'
                }`}
              >
                <p className="font-medium">{item.label}</p>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Priority */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Priority</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {priorities.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <motion.button
                onClick={() => setPersonalDesign({ priority: item.id })}
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className={`w-full p-6 rounded-2xl border-2 transition-colors ${
                  personalDesign.priority === item.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card/50 hover:border-primary/50'
                }`}
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <p className="font-medium">{item.label}</p>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          size="lg"
          onClick={handleContinue}
          disabled={!isComplete}
          className="px-12"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
};
