import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PerformanceImage } from "@/components/ui/performance-image";
import { ArrowRight, Sun, Battery, Zap, Settings } from "lucide-react";
import nessHeroProduct from "@/assets/ness-hero-product.webp";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";

type EnergySetup = 'new-solar' | 'existing-solar' | 'backup-only' | 'custom' | null;

const ResidentialEnhanced = () => {
  const [step, setStep] = useState<'intro' | 'selector' | 'product' | 'summary'>('intro');
  const [selectedSetup, setSelectedSetup] = useState<EnergySetup>(null);

  const handleSetupSelect = (setup: EnergySetup) => {
    setSelectedSetup(setup);
    setTimeout(() => setStep('product'), 600);
  };

  const getProductForSetup = () => {
    switch (selectedSetup) {
      case 'new-solar':
        return {
          name: 'NESS AIO',
          tagline: 'Own your sunlight.',
          description: 'The all-in-one hybrid system that learns your energy rhythm and slashes monthly bills.',
          image: nessHeroProduct,
          badge: 'Perfect for new solar installations',
          savings: 4000,
          backupHours: '8-12',
          installation: '1 day',
        };
      case 'existing-solar':
        return {
          name: 'NESS AC Brick',
          tagline: 'Never waste another ray.',
          description: 'Unlock backup power and use your solar energy even during outages.',
          image: nessPodProduct,
          badge: 'Installed in under 3 hours',
          savings: 2450,
          backupHours: '6-8',
          installation: '3 hours',
        };
      case 'backup-only':
        return {
          name: 'NESS UPS',
          tagline: "Because power shouldn't skip a beat.",
          description: 'High-fidelity power for gamers, audiophiles, and professionals who demand perfection.',
          image: nessProProduct,
          badge: '2 units ≈ 10 kWh ≈ 8 hours of essentials',
          savings: 1800,
          backupHours: '8-10',
          installation: '2 hours',
        };
      default:
        return {
          name: 'Battery Integration',
          tagline: 'Freedom to integrate.',
          description: 'Connect NESS batteries to your existing inverter ecosystem.',
          image: nessPodProduct,
          badge: 'Works with Victron, Studer, Solis & more',
          savings: 2200,
          backupHours: '6-10',
          installation: '4 hours',
        };
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/5">
        <AnimatePresence mode="wait">
          {/* STEP 0: Opening Scene */}
          {step === 'intro' && (
            <motion.section
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="min-h-screen flex items-center justify-center px-6"
            >
              <div className="text-center space-y-12 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="w-16 h-1 bg-primary mx-auto rounded-full animate-pulse" />
                  <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-foreground">
                    Find Your NESS
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
                    Because every home deserves intelligent energy.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    onClick={() => setStep('selector')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium shadow-[0_0_40px_rgba(0,200,83,0.3)] hover:shadow-[0_0_60px_rgba(0,200,83,0.5)] transition-all duration-500"
                  >
                    Begin
                  </Button>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* STEP 1: Energy Setup Selector */}
          {step === 'selector' && (
            <motion.section
              key="selector"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen py-20 px-6"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-16 space-y-4"
                >
                  <p className="text-sm uppercase tracking-widest text-primary">Step 1</p>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
                    Your Energy Setup
                  </h2>
                  <p className="text-xl text-muted-foreground font-light">
                    How does your home get its power today?
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Card 1: New Solar */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    onClick={() => handleSetupSelect('new-solar')}
                    className="group cursor-pointer bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_rgba(0,200,83,0.2)]"
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sun className="w-8 h-8 text-amber-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-foreground">Planning new solar</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I'm setting up solar soon and want an all-in-one system.
                        </p>
                      </div>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2: Existing Solar */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    onClick={() => handleSetupSelect('existing-solar')}
                    className="group cursor-pointer bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_rgba(0,200,83,0.2)]"
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-foreground">Already have solar</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I have solar panels on my roof and need backup power.
                        </p>
                      </div>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3: Backup Only */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    onClick={() => handleSetupSelect('backup-only')}
                    className="group cursor-pointer bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_rgba(0,200,83,0.2)]"
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Battery className="w-8 h-8 text-blue-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-foreground">Need backup only</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I just want reliable backup power during outages.
                        </p>
                      </div>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 4: Custom */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -8 }}
                    onClick={() => handleSetupSelect('custom')}
                    className="group cursor-pointer bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-[0_20px_60px_rgba(0,200,83,0.2)]"
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-8 h-8 text-purple-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-foreground">Other / Custom</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          I have my own inverter setup (Victron, Studer, etc.).
                        </p>
                      </div>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {/* STEP 2: Product Revelation */}
          {step === 'product' && selectedSetup && (
            <motion.section
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen py-20 px-6 flex items-center"
            >
              <div className="max-w-6xl mx-auto w-full">
                {(() => {
                  const product = getProductForSetup();
                  return (
                    <div className="space-y-16">
                      {/* Product Image */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="max-w-2xl mx-auto"
                      >
                        <PerformanceImage
                          src={product.image}
                          alt={product.name}
                          className="w-full drop-shadow-2xl"
                          priority={true}
                        />
                      </motion.div>

                      {/* Product Details */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-center space-y-8"
                      >
                        <div className="space-y-4">
                          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-foreground tracking-tight">
                            {product.name}
                          </h2>
                          <p className="text-2xl sm:text-3xl text-primary font-light">
                            {product.tagline}
                          </p>
                          <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <div className="inline-block bg-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
                          <p className="text-sm text-primary font-medium">{product.badge}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                          <Button
                            size="lg"
                            onClick={() => setStep('summary')}
                            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 rounded-full text-lg font-medium shadow-[0_0_40px_rgba(0,200,83,0.3)] hover:shadow-[0_0_60px_rgba(0,200,83,0.5)] transition-all duration-500"
                          >
                            Design it for my home
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setStep('selector')}
                            className="border-2 border-border/50 hover:border-primary/50 px-10 py-6 rounded-full text-lg"
                          >
                            View Other Options
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  );
                })()}
              </div>
            </motion.section>
          )}

          {/* STEP 3: Summary Screen */}
          {step === 'summary' && selectedSetup && (
            <motion.section
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="min-h-screen py-20 px-6 flex items-center"
            >
              <div className="max-w-5xl mx-auto w-full">
                {(() => {
                  const product = getProductForSetup();
                  return (
                    <div className="space-y-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-4"
                      >
                        <p className="text-sm uppercase tracking-widest text-primary">Your Perfect Match</p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
                          {product.name}
                        </h2>
                      </motion.div>

                      {/* Summary Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card/80 backdrop-blur-xl rounded-3xl p-12 border border-border/50 shadow-2xl"
                      >
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                          <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Estimated Savings</p>
                            <p className="text-4xl font-light text-primary">₹ {product.savings.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">per month</p>
                          </div>
                          <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Backup Time</p>
                            <p className="text-4xl font-light text-primary">{product.backupHours}</p>
                            <p className="text-xs text-muted-foreground">hours</p>
                          </div>
                          <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground uppercase tracking-wider">Installation</p>
                            <p className="text-4xl font-light text-primary">{product.installation}</p>
                            <p className="text-xs text-muted-foreground">professional setup</p>
                          </div>
                        </div>

                        <div className="border-t border-border/30 pt-8 space-y-4 text-center">
                          <p className="text-muted-foreground">
                            Smart monitoring included • 15-year warranty • Expert support
                          </p>
                        </div>
                      </motion.div>

                      {/* CTAs */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                      >
                        <Button
                          size="lg"
                          onClick={() => (window.location.href = '/contact/homeowner')}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium shadow-[0_0_40px_rgba(0,200,83,0.3)] hover:shadow-[0_0_60px_rgba(0,200,83,0.5)] transition-all duration-500"
                        >
                          Book Design Call
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => {
                            setSelectedSetup(null);
                            setStep('intro');
                          }}
                          className="border-2 border-border/50 hover:border-primary/50 px-12 py-7 rounded-full text-lg"
                        >
                          Restart Selector
                        </Button>
                      </motion.div>

                      {/* Tagline */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center space-y-2 pt-8"
                      >
                        <p className="text-lg text-muted-foreground font-light">
                          NESS — Clean energy, beautifully built.
                        </p>
                        <p className="text-sm text-muted-foreground/60">
                          Engineered in India. Designed for life.
                        </p>
                      </motion.div>
                    </div>
                  );
                })()}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default ResidentialEnhanced;
