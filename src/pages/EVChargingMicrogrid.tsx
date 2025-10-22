import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { AnimatedButton } from '@/components/ui/animated-button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { AnimatedCard } from '@/components/ui/animated-card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Sun, Battery, Zap, Car, AlertCircle, TrendingUp, CheckCircle2, Building2, Truck, Navigation, Plane, Factory, Award, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/ev-hero-sunrise.webp';

const EVChargingMicrogrid = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
      setStickyNav(window.scrollY > 800);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Layout>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky CTA Nav */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500",
        stickyNav ? "translate-y-0 opacity-100 shadow-lg" : "-translate-y-full opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-sm font-medium">NESS Microgrid for EV Charging</span>
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => scrollToSection('savings')}
              className="hover:scale-105 transition-transform"
            >
              💡 Estimate Savings
            </Button>
            <Button 
              size="sm" 
              onClick={() => window.location.href = '/contact/distributor'}
              className="hover:scale-105 transition-transform"
            >
              ⚙️ Book Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Hero - Scene 1 */}
      <HeroSection />

      {/* Problem - Scene 2 */}
      <ProblemSection />

      {/* Solution - Scene 3 */}
      <SolutionSection />

      {/* Real Deployments - Scene 4 */}
      <DeploymentsSection />

      {/* Impact Metrics - Scene 5 */}
      <ImpactMetricsSection />

      {/* Use Cases - Scene 6 */}
      <UseCasesSection />

      {/* Credibility - Scene 7 */}
      <CredibilitySection />

      {/* Final CTA - Scene 8 */}
      <FinalCTASection />
    </Layout>
  );
};

// Scene 1 - Hero: Freedom from the Grid
const HeroSection = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('problem-section');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="NESS Battery Energy Storage System at sunrise with EV charging" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Subtle Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={cn(
          "max-w-7xl mx-auto transition-all duration-1500 ease-out",
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[1.1] tracking-tight max-w-4xl">
            Never lose a customer<br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent font-normal">
              to a grid failure.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-3xl mb-12 leading-relaxed font-light">
            Open-access solar and NESS batteries keep EV charging 24×7 — clean, affordable, independent.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <AnimatedButton 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-white text-black hover:bg-white/95 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/20"
              onClick={() => document.getElementById('savings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Estimate My Savings
            </AnimatedButton>
            <AnimatedButton 
              variant="outline"
              size="lg" 
              className="text-lg px-10 py-7 rounded-full border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.location.href = '/contact/distributor'}
            >
              Book a Demo
            </AnimatedButton>
          </div>

          {/* 24x7 Visual Indicator */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 group cursor-default backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <div className="relative">
                <Sun className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-md bg-orange-400/40 group-hover:bg-orange-400/60 transition-all" />
              </div>
              <span className="text-white/90 group-hover:text-white transition-colors">Day charging</span>
            </div>
            <div className="h-px w-8 sm:w-12 bg-white/20" />
            <div className="flex items-center gap-2 group cursor-default backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <div className="relative">
                <Battery className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-md bg-blue-400/40 group-hover:bg-blue-400/60 transition-all" />
              </div>
              <span className="text-white/90 group-hover:text-white transition-colors">Night backup</span>
            </div>
            <div className="h-px w-8 sm:w-12 bg-white/20" />
            <div className="flex items-center gap-2 group cursor-default backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <div className="relative">
                <Zap className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 blur-md bg-green-400/40 group-hover:bg-green-400/60 transition-all" />
              </div>
              <span className="text-white/90 group-hover:text-white transition-colors">Always ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={cn(
          "absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 hover:scale-110",
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10">
          <span className="text-xs font-medium tracking-wide uppercase">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

// Scene 2 - Problem: When the Grid Fails
const ProblemSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const problems = [
    {
      icon: AlertCircle,
      title: 'Grid downtime',
      description: 'Lost revenue every minute offline',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Peak demand',
      description: 'Heavy bills during charging hours',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20'
    },
    {
      icon: AlertCircle,
      title: 'Unreliable power',
      description: 'Angry customers, damaged reputation',
      color: 'text-red-600',
      bgColor: 'bg-red-600/10',
      borderColor: 'border-red-600/20'
    }
  ];

  return (
    <section id="problem-section" ref={elementRef as any} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight">
              When the Grid Fails
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light">
              Every minute offline means lost revenue and angry customers.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <AnimatedCard
                key={problem.title}
                delay={index * 150}
                animation="fade-up"
                hover="lift"
                className={cn(
                  "p-8 text-center group cursor-default border-2",
                  problem.bgColor,
                  problem.borderColor
                )}
              >
                <div className="relative inline-block mb-4">
                  <problem.icon className={cn("w-12 h-12 group-hover:scale-110 transition-transform duration-300", problem.color)} />
                  <div className={cn("absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300", problem.color.replace('text-', 'bg-'))} />
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-foreground transition-colors">{problem.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{problem.description}</p>
              </AnimatedCard>
            ))}
          </div>

          {/* Visual: Idle Chargers */}
          <div className={cn(
            "mt-16 p-12 rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="flex items-center justify-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative">
                  <Zap className="w-16 h-16 text-red-500/40" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-sm text-muted-foreground font-light">
              Idle chargers at night — Revenue lost, customers disappointed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 3 - Solution: Power That's Yours
const SolutionSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const flow = [
    { icon: Sun, label: 'Solar', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: Battery, label: 'Battery', color: 'text-green-500', bg: 'bg-green-500/10' },
    { icon: Zap, label: 'Charger', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Car, label: 'Vehicle', color: 'text-purple-500', bg: 'bg-purple-500/10' }
  ];

  return (
    <section ref={elementRef as any} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
              Power That's Yours
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              NESS Microgrid combines open-access solar + BESS + smart control to cut OPEX, 
              shave peaks, and eliminate downtime.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
              {flow.map((step, index) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className={cn(
                    "transition-all duration-1000 group cursor-default",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  )}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className={cn(
                      "w-32 h-32 rounded-3xl flex flex-col items-center justify-center gap-3 relative overflow-hidden",
                      step.bg,
                      "border-2 border-border hover:border-border/60 transition-all duration-300",
                      "hover:shadow-xl hover:scale-105"
                    )}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <step.icon className={cn("w-12 h-12 relative z-10 group-hover:scale-110 transition-transform duration-300", step.color)} />
                      <span className="text-sm font-medium relative z-10">{step.label}</span>
                    </div>
                  </div>

                  {index < flow.length - 1 && (
                    <div className="hidden md:block">
                      <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="text-border">
                        <path d="M0 12h35m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Grid Connection */}
            <div className={cn(
              "mt-12 text-center transition-all duration-1000 delay-1000",
              isVisible ? "opacity-100" : "opacity-0"
            )}>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Grid-tied for backup & export</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 4 - Real Deployments: Proof
const DeploymentsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const deployments = [
    {
      location: 'Bangalore Airport',
      state: 'Karnataka',
      description: '24×7 solar-assisted EV charging, keeping operations uninterrupted through grid fluctuations.',
      icon: Plane,
      stats: ['24×7 uptime', 'High-load proven', 'Mission-critical']
    },
    {
      location: 'Surat Bus Depot',
      state: 'Gujarat (GSRTC)',
      description: 'Renewable micro-grid for public e-bus charging, reducing diesel backup use to zero.',
      icon: Truck,
      stats: ['Zero diesel', 'Fleet charging', 'Public transport']
    }
  ];

  return (
    <section ref={elementRef as any} className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-16">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 transition-all duration-1000",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}>
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">Real Deployments</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
              Proven Where Uptime Matters Most
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Trusted in high-load, mission-critical environments
            </p>
          </div>

          {/* Deployment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {deployments.map((deployment, index) => (
              <AnimatedCard
                key={deployment.location}
                delay={index * 200}
                animation="fade-up"
                hover="glow"
                className="p-8 bg-gradient-to-br from-card to-muted/30 cursor-default hover:from-card/90 hover:to-muted/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <deployment.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-1">{deployment.location}</h3>
                    <p className="text-sm text-muted-foreground">{deployment.state}</p>
                  </div>
                </div>

                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {deployment.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {deployment.stats.map((stat) => (
                    <span 
                      key={stat}
                      className="px-3 py-1 rounded-full bg-primary/5 text-xs font-medium border border-primary/10"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-6 p-8 rounded-3xl bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 border border-border">
            <div className="text-center">
              <div className="text-4xl font-light mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-4xl font-light mb-2">
                <AnimatedCounter value={40} prefix="−" suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">OPEX</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">
                <AnimatedCounter value={0} suffix=" L" />
              </div>
              <p className="text-sm text-muted-foreground">Diesel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 5 - Impact: Numbers That Matter
const ImpactMetricsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const metrics = [
    { metric: 'Energy Cost', improvement: '↓ 25 – 40 %' },
    { metric: 'Demand Charges', improvement: '↓ 40 – 60 %' },
    { metric: 'CO₂ Emissions', improvement: '↓ 90 – 100 %' },
    { metric: 'Uptime', improvement: '99.9 %' },
    { metric: 'ROI', improvement: '2 – 4 yrs' }
  ];

  return (
    <section ref={elementRef as any} className="py-24 md:py-32 scroll-mt-20" id="savings">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
              Numbers That Matter
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Typical improvements across deployments
            </p>
          </div>

          {/* Metrics Table */}
          <div className={cn(
            "overflow-hidden rounded-3xl border border-border transition-all duration-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-medium">Metric</th>
                  <th className="px-6 py-4 text-right text-sm font-medium">Typical Improvement</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((item, index) => (
                  <tr 
                    key={item.metric}
                    className={cn(
                      "border-b border-border last:border-0 transition-all duration-700 hover:bg-muted/30 group cursor-default",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <td className="px-6 py-5 text-base group-hover:text-foreground transition-colors">{item.metric}</td>
                    <td className="px-6 py-5 text-right text-lg font-medium text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                      {item.improvement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 6 - Use Cases
const UseCasesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const useCases = [
    { icon: Truck, label: 'Fleet depots' },
    { icon: Truck, label: 'Bus depots' },
    { icon: Navigation, label: 'Highways' },
    { icon: Plane, label: 'Airports' },
    { icon: Factory, label: 'Industrial yards' }
  ];

  return (
    <section ref={elementRef as any} className="py-24 md:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6">
            Designed for those who keep<br />India's EV movement running
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.label}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-border transition-all duration-700 hover:scale-105 hover:shadow-lg cursor-default group hover:border-primary/20 hover:bg-primary/5",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <useCase.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium group-hover:text-foreground transition-colors">{useCase.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 7 - Credibility & Scale
const CredibilitySection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef as any} className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-12">
            Trusted by operators nationwide
          </h2>

          <div className={cn(
            "flex flex-wrap justify-center items-center gap-12 mb-12 transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="text-lg font-medium text-muted-foreground">
              ✦ Bangalore International Airport
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-lg font-medium text-muted-foreground">
              ✦ Surat Bus Depot (GSRTC)
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Certified', 'Scalable', 'Locally supported'].map((tag, index) => (
              <span
                key={tag}
                className={cn(
                  "px-6 py-3 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium transition-all duration-700",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Scene 8 - Final CTA
const FinalCTASection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef as any} className="py-32 md:py-40 relative overflow-hidden scroll-mt-20">
      {/* Night Scene Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-slate-950/80" />
      
      {/* Stars effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-7xl font-light mb-8 text-white transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            Make Your Charging<br />Unstoppable
          </h2>

          <p className={cn(
            "text-xl sm:text-2xl text-white/80 mb-12 font-light transition-all duration-1000 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            Be the network that never shuts down.
          </p>

          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-white text-slate-950 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              onClick={() => document.getElementById('savings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              💡 Estimate My Savings
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              onClick={() => window.location.href = '/contact/distributor'}
            >
              ⚙️ Book a Demo
            </Button>
          </div>

          {/* Glowing Chargers Visual */}
          <div className={cn(
            "mt-20 flex items-center justify-center gap-8 transition-all duration-1000 delay-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <Zap className="w-12 h-12 text-green-400" />
                <div className="absolute inset-0 blur-xl bg-green-400/50 animate-pulse" />
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-white/60 font-light">
            From airports to bus depots — power that never stops
          </p>
        </div>
      </div>
    </section>
  );
};

export default EVChargingMicrogrid;
