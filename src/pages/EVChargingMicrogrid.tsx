import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AnimatedButton } from '@/components/ui/animated-button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { AnimatedCard } from '@/components/ui/animated-card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sun, Battery, Zap, Car, TrendingUp, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const EVChargingMicrogrid = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'The Grid, Reinvented in a Box.';

  // Typewriter effect
  useEffect(() => {
    setHeroVisible(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className={cn(
          "absolute inset-0 transition-opacity duration-1000",
          heroVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className={cn(
              "text-5xl md:text-7xl font-bold transition-all duration-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
            
            <p className={cn(
              "text-xl md:text-2xl text-muted-foreground transition-all duration-1000 delay-500",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Power that's always ready. No permits. No delays.
            </p>
            
            <div className={cn(
              "transition-all duration-1000 delay-1000",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <AnimatedButton 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Plan My System →
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Promise Section */}
      <ProblemSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Built to Scale */}
      <BuiltToScaleSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Smart Inside */}
      <SmartInsideSection />

      {/* Instant Planner */}
      <InstantPlannerSection />

      {/* Closing CTA */}
      <ClosingSection />

      <Footer />
    </div>
  );
};

const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef as any} className="py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            The world's going electric. The grid isn't.
          </h2>
          
          <p className={cn(
            "text-xl md:text-2xl text-muted-foreground transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Fleets expand. Chargers multiply. Permits stall.<br />
            NESS Cube brings the power with you — solar, storage, and speed in one modular box.
          </p>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const steps = [
    { icon: Sun, label: 'Solar feeds', delay: 0 },
    { icon: Battery, label: 'Batteries store', delay: 200 },
    { icon: Zap, label: 'Inverters drive', delay: 400 },
    { icon: Car, label: 'Vehicles charge', delay: 600 }
  ];

  return (
    <section ref={elementRef as any} className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className={cn(
                "flex flex-col items-center space-y-4 transition-all duration-1000",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="w-12 h-12 text-primary" />
              </div>
              <p className="text-lg font-medium text-center">{step.label}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BuiltToScaleSection = () => {
  const models = [
    {
      name: 'NESS Cube 50',
      power: '50 kW',
      storage: '100 kWh',
      use: 'Small fleets / EV lots',
      color: 'from-emerald-500/20 to-green-500/20'
    },
    {
      name: 'NESS Cube 100',
      power: '100 kW',
      storage: '200 kWh',
      use: 'Commercial parks',
      color: 'from-green-500/20 to-teal-500/20'
    },
    {
      name: 'NESS Cube 250',
      power: '250 kW',
      storage: '500 kWh+',
      use: 'Depots / Hubs',
      color: 'from-teal-500/20 to-cyan-500/20'
    }
  ];

  return (
    <section className="py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From one charger to one depot.<br />
            Choose the Cube that matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <AnimatedCard
              key={model.name}
              delay={index * 200}
              hover="scale"
              className={cn(
                "p-8 bg-gradient-to-br",
                model.color,
                "border-2 border-primary/20 cursor-pointer"
              )}
            >
              <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
              <div className="space-y-3 mb-6">
                <p className="text-3xl font-bold text-primary">{model.power}</p>
                <p className="text-xl text-muted-foreground">{model.storage}</p>
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  {model.use}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef as any} className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold">
            Small footprint. Massive impact.
          </h2>
          
          <div className="text-2xl md:text-3xl text-muted-foreground">
            Each Cube prevents{' '}
            <AnimatedCounter
              value={90}
              suffix=" tons"
              className="text-primary font-bold"
            />
            {' '}of CO₂ a year — equivalent to{' '}
            <AnimatedCounter
              value={4000}
              className="text-primary font-bold"
            />
            {' '}trees at work.
          </div>
        </div>
      </div>
    </section>
  );
};

const SmartInsideSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const words = ['Predicts.', 'Optimizes.', 'Diagnoses.', 'Learns.'];

  return (
    <section ref={elementRef as any} className="py-32 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Smart Inside. Calm Outside.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 text-3xl md:text-5xl font-bold">
            {words.map((word, index) => (
              <span
                key={word}
                className={cn(
                  "transition-all duration-1000 text-primary",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {word}
              </span>
            ))}
          </div>

          <p className={cn(
            "text-xl text-muted-foreground transition-all duration-1000 delay-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Energy that cares — quiet, aware, always watching your back.
          </p>
        </div>
      </div>
    </section>
  );
};

const InstantPlannerSection = () => {
  const [sessions, setSessions] = useState([10]);
  const [hasSolar, setHasSolar] = useState(false);
  const [email, setEmail] = useState('');

  const getSuggestedModel = () => {
    const sessionsPerDay = sessions[0];
    if (sessionsPerDay < 20) return { name: 'NESS Cube 50', power: '50 kW', storage: '100 kWh' };
    if (sessionsPerDay < 50) return { name: 'NESS Cube 100', power: '100 kW', storage: '200 kWh' };
    return { name: 'NESS Cube 250', power: '250 kW', storage: '500 kWh+' };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success('Plan ready. We\'ll email your tailored proposal.');
    setEmail('');
  };

  const model = getSuggestedModel();

  return (
    <section id="planner" className="py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Ten-second planner.
          </h2>

          <div className="space-y-8 bg-card/50 p-8 rounded-2xl border border-border">
            <div className="space-y-4">
              <label className="text-lg font-medium">
                Charging sessions/day: <span className="text-primary">{sessions[0]}</span>
              </label>
              <Slider
                value={sessions}
                onValueChange={setSessions}
                min={5}
                max={100}
                step={5}
                className="py-4"
              />
            </div>

            <div className="flex items-center justify-between py-4">
              <label className="text-lg font-medium">Has solar at site?</label>
              <Switch checked={hasSolar} onCheckedChange={setHasSolar} />
            </div>

            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 space-y-2">
              <p className="text-sm text-muted-foreground">Suggested Model:</p>
              <h3 className="text-2xl font-bold text-primary">{model.name}</h3>
              <p className="text-lg">{model.power} · {model.storage}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg"
              />
              <AnimatedButton type="submit" className="w-full text-lg py-6">
                Get My Plan →
              </AnimatedButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClosingSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to charge without limits?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan with NESS Planner
            </AnimatedButton>
            <AnimatedButton 
              variant="outline"
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.location.href = '/contact/distributor'}
            >
              Talk to an Engineer
            </AnimatedButton>
          </div>

          <p className="text-sm text-muted-foreground pt-12">
            NESS Cube — The Grid, Reinvented in a Box.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EVChargingMicrogrid;