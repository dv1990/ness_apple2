import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNessExperience } from '@/contexts/NessExperienceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { pageVariants, cardVariants, cardHoverVariants } from '@/config/motion';

const homeTypes = [
  { id: '1-bed', label: '1-Bed Apt', avgUsage: 8 },
  { id: '2-bed', label: '2-Bed Apt', avgUsage: 12 },
  { id: '3-bed', label: '3-Bed Villa', avgUsage: 20 },
  { id: '4-bed', label: '4-Bed Villa', avgUsage: 30 },
  { id: 'large', label: 'Large Home', avgUsage: 40 },
];

const backupHourOptions = [2, 4, 6, 8, 12];

export const SizeYourHome: React.FC = () => {
  const { homeSizing, setHomeSizing, setCurrentStep } = useNessExperience();
  const [selectedType, setSelectedType] = useState(homeSizing.homeType || '');
  const [dailyUsage, setDailyUsage] = useState(homeSizing.dailyUsage?.toString() || '');
  const [backupHours, setBackupHours] = useState(homeSizing.backupHours?.toString() || '');

  useEffect(() => {
    if (dailyUsage && backupHours) {
      const usage = parseFloat(dailyUsage);
      const hours = parseFloat(backupHours);
      if (!isNaN(usage) && !isNaN(hours)) {
        // Simple estimation: recommended capacity = (daily usage / 24) * backup hours * 1.2 (safety margin)
        const recommended = Math.ceil(((usage / 24) * hours * 1.2) / 5) * 5;
        setHomeSizing({
          homeType: selectedType,
          dailyUsage: usage,
          backupHours: hours,
          recommendedCapacity: recommended,
        });
      }
    }
  }, [dailyUsage, backupHours, selectedType, setHomeSizing]);

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    const type = homeTypes.find((t) => t.id === typeId);
    if (type) {
      setDailyUsage(type.avgUsage.toString());
    }
  };

  const isComplete = selectedType && dailyUsage && backupHours;

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Size your home</h1>
        <p className="text-lg text-muted-foreground">Help us recommend the perfect capacity</p>
      </div>

      {/* Home Type */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Home type</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {homeTypes.map((type, index) => (
            <motion.div
              key={type.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <motion.button
                onClick={() => handleTypeSelect(type.id)}
                variants={cardHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className={`w-full p-4 rounded-xl border-2 transition-colors ${
                  selectedType === type.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card/50 hover:border-primary/50'
                }`}
              >
                <p className="font-medium text-sm">{type.label}</p>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Daily Usage */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Daily energy usage (kWh)</h2>
        <Input
          type="number"
          step="1"
          value={dailyUsage}
          onChange={(e) => setDailyUsage(e.target.value)}
          placeholder="e.g., 20"
          className="text-lg p-6 max-w-md"
        />
        <p className="text-sm text-muted-foreground">Check your electricity bill or meter</p>
      </div>

      {/* Backup Hours */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Desired backup hours</h2>
        <div className="flex gap-2 max-w-2xl">
          {backupHourOptions.map((h) => (
            <Button
              key={h}
              variant={backupHours === h.toString() ? 'default' : 'outline'}
              onClick={() => setBackupHours(h.toString())}
              className="flex-1"
            >
              {h}h
            </Button>
          ))}
        </div>
        <Input
          type="number"
          step="1"
          value={backupHours}
          onChange={(e) => setBackupHours(e.target.value)}
          placeholder="Custom hours"
          className="text-lg p-6 max-w-md"
        />
      </div>

      {/* Recommendation */}
      {homeSizing.recommendedCapacity && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-2xl bg-primary/5 border-2 border-primary max-w-2xl mx-auto space-y-3"
        >
          <p className="text-sm font-medium text-muted-foreground">Recommended capacity</p>
          <p className="text-3xl font-bold">~{homeSizing.recommendedCapacity} kWh</p>
          <p className="text-muted-foreground">
            For a {homeTypes.find((t) => t.id === selectedType)?.label || 'home'} with{' '}
            {backupHours}h backup
          </p>
        </motion.div>
      )}

      <div className="flex justify-center pt-8">
        <Button
          size="lg"
          onClick={() => setCurrentStep(4)}
          disabled={!isComplete}
          className="px-12"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
};
