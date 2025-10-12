import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Sun, Battery, Zap, Car } from 'lucide-react';
import { toast } from 'sonner';

const EVChargingMicrogrid = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              The Grid, Reinvented in a Box.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Power that's always ready. No permits. No delays.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Plan My System →
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              The world's going electric. The grid isn't.
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Fleets expand. Chargers multiply. Permits stall.<br />
              NESS Cube brings the power with you — solar, storage, and speed in one modular box.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Sun, label: 'Solar feeds' },
              { icon: Battery, label: 'Batteries store' },
              { icon: Zap, label: 'Inverters drive' },
              { icon: Car, label: 'Vehicles charge' }
            ].map((step) => (
              <div key={step.label} className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg font-medium text-center">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built to Scale */}
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
            {[
              {
                name: 'NESS Cube 50',
                power: '50 kW',
                storage: '100 kWh',
                use: 'Small fleets / EV lots',
              },
              {
                name: 'NESS Cube 100',
                power: '100 kW',
                storage: '200 kWh',
                use: 'Commercial parks',
              },
              {
                name: 'NESS Cube 250',
                power: '250 kW',
                storage: '500 kWh+',
                use: 'Depots / Hubs',
              }
            ].map((model) => (
              <Card
                key={model.name}
                className="p-8 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-primary/20 hover:scale-105 transition-transform cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4">{model.name}</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-3xl font-bold text-primary">{model.power}</p>
                  <p className="text-xl text-muted-foreground">{model.storage}</p>
                  <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                    {model.use}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold">
              Small footprint. Massive impact.
            </h2>
            
            <div className="text-2xl md:text-3xl text-muted-foreground">
              Each Cube prevents <span className="text-primary font-bold">≈90 tons</span> of CO₂ a year — 
              equivalent to <span className="text-primary font-bold">4,000 trees</span> at work.
            </div>
          </div>
        </div>
      </section>

      {/* Smart Inside */}
      <section className="py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Smart Inside. Calm Outside.
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 text-3xl md:text-5xl font-bold text-primary">
              {['Predicts.', 'Optimizes.', 'Diagnoses.', 'Learns.'].map((word) => (
                <span key={word}>{word}</span>
              ))}
            </div>

            <p className="text-xl text-muted-foreground">
              Energy that cares — quiet, aware, always watching your back.
            </p>
          </div>
        </div>
      </section>

      {/* Instant Planner */}
      <InstantPlannerSection />

      {/* Closing CTA */}
      <section className="py-32 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ready to charge without limits?
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => document.getElementById('planner')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Plan with NESS Planner
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="text-lg px-8 py-6 hover:scale-105 transition-transform w-full"
                >
                  Talk to an Engineer
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground pt-12">
              NESS Cube — The Grid, Reinvented in a Box.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
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
              <Button type="submit" className="w-full text-lg py-6 hover:scale-105 transition-transform">
                Get My Plan →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargingMicrogrid;
