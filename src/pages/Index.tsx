import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Battery, Clock, ArrowRight, Users, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazySection } from "@/components/ui/lazy-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PerformanceImage } from "@/components/ui/performance-image";
import { cn } from "@/lib/utils";
import heroHome from "@/assets/hero-homeowners.jpg";
import nucuPcb from "@/assets/nucu-pcb-premium.webp";
import { useState, useEffect, lazy, Suspense } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";

// Lazy load below-the-fold components
const NucuSection = lazy(() => import("@/components/NucuSection"));
const Index = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  return <Layout>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. WHY NESS SECTION */}
      <LazySection>
        <section className="relative py-40 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] overflow-hidden" style={{ contentVisibility: 'auto' }}>
          {/* Ambient Glow - Subtle Blue */}
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Power that thinks.<br />Batteries that last.
              </h2>
              <p className="text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
                Most batteries fail when you need them most. NESS doesn't.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyNessFeatures.map((feature, index) => <WhyNessCard key={index} feature={feature} delay={index * 150} />)}
            </div>
          </div>
        </section>
      </LazySection>

      {/* THE OLD WAYS VS. THE NEW WAY */}
      <LazySection>
        <section className="py-40 bg-white" style={{ contentVisibility: 'auto' }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-light text-graphite mb-8 tracking-tight leading-[1.1]">
                Rethink power.
              </h2>
              <p className="text-2xl text-graphite/60 font-light max-w-3xl mx-auto leading-relaxed">
                No noise. No fumes. No maintenance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
              {/* Lead Acid */}
              <div className="bg-whisper rounded-3xl p-12 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-graphite/10 flex items-center justify-center">
                  <Battery className="w-8 h-8 text-graphite/40" />
                </div>
                <h3 className="text-3xl font-light text-graphite">Lead Acid</h3>
                <p className="text-lg text-graphite/60 leading-relaxed">
                  Heavy. Hot. Half usable.
                </p>
                <div className="pt-4 space-y-2 text-sm text-graphite/50">
                  <p>• 500-800 cycles only</p>
                  <p>• 50% usable capacity</p>
                  <p>• Constant maintenance</p>
                </div>
              </div>

              {/* Diesel Genset */}
              <div className="bg-whisper rounded-3xl p-12 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-graphite/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-graphite/40" />
                </div>
                <h3 className="text-3xl font-light text-graphite">Diesel</h3>
                <p className="text-lg text-graphite/60 leading-relaxed">
                  Loud. Expensive. Pollutes.
                </p>
                <div className="pt-4 space-y-2 text-sm text-graphite/50">
                  <p>• ₹20-30/kWh running cost</p>
                  <p>• 85dB noise</p>
                  <p>• Regular servicing</p>
                </div>
              </div>

              {/* Lithium Ion (NESS) */}
              <div className="bg-gradient-to-br from-energy/10 to-energy/5 rounded-3xl p-12 space-y-6 border-2 border-energy/20 relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-1.5 bg-energy text-white text-xs font-medium rounded-full uppercase tracking-wider">The New Way</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-energy/20 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-energy" />
                </div>
                <h3 className="text-3xl font-light text-graphite">NESS</h3>
                <p className="text-lg text-graphite/80 leading-relaxed font-medium">
                  Silent. Instant. Lasts 10+ years.
                </p>
                <div className="pt-4 space-y-2 text-sm text-energy font-medium">
                  <p>• 6000+ cycles</p>
                  <p>• 95% usable capacity</p>
                  <p>• Zero maintenance</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </LazySection>

      {/* MEET NUCU SECTION */}
      <LazySection>
        <Suspense fallback={null}>
          <NucuSection nucuPcb={nucuPcb} />
        </Suspense>
      </LazySection>

      {/* 3. PRODUCT SHOWCASE SECTION */}
      <LazySection>
        <ProductShowcaseSection />
      </LazySection>

      {/* 4. CONFIGURATOR / USE-CASE SELECTOR */}
      <LazySection>
        <section className="py-32 bg-whisper">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight">
                Find your solution
              </h2>
              <p className="text-xl text-graphite/60 font-light">
                Tell us about your energy needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => <UseCaseCard key={index} useCase={useCase} isSelected={selectedUseCase === useCase.id} onClick={() => setSelectedUseCase(selectedUseCase === useCase.id ? null : useCase.id)} />)}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 5. EXPERIENCE NESS SECTION */}
      <LazySection>
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Video */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-graphite shadow-lifted group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-energy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <PerformanceImage src={heroHome} alt="NESS in action" className="w-full h-full opacity-70" />
              </div>

              {/* Right - Stats */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight">
                    Experience NESS
                  </h2>
                  <p className="text-xl text-graphite/60 font-light">
                    Real performance. Real savings.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <div className="text-7xl font-semibold text-energy">
                      <AnimatedCounter value={100} suffix="+" />
                    </div>
                    <p className="text-lg text-graphite/60 font-light">MWh Delivered</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-7xl font-semibold text-energy">
                      <AnimatedCounter value={1000} suffix="+" />
                    </div>
                    <p className="text-lg text-graphite/60 font-light">Happy Customers</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-7xl font-semibold text-energy">
                      <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                    </div>
                    <p className="text-lg text-graphite/60 font-light">Uptime</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-7xl font-semibold text-energy">
                      <AnimatedCounter value={10} suffix="+" />
                    </div>
                    <p className="text-lg text-graphite/60 font-light">Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 6. TESTIMONIALS SLIDER */}
      <LazySection>
        <section className="py-32 bg-charcoal">
          <div className="max-w-5xl mx-auto px-8">
            <div className="relative min-h-[400px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => <div key={index} className={cn("absolute inset-0 transition-all duration-1000 ease-in-out", currentTestimonial === index ? "opacity-100 translate-x-0" : index < currentTestimonial ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full")}>
                  <div className="flex flex-col items-center text-center space-y-8">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-energy/20 to-primary/20 flex items-center justify-center text-3xl font-light text-white border-2 border-energy/30">
                      {testimonial.initials}
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <span className="absolute -top-8 -left-4 text-8xl text-energy/10 font-serif">"</span>
                      <blockquote className="text-3xl md:text-4xl font-light text-white italic leading-relaxed max-w-3xl">
                        {testimonial.quote}
                      </blockquote>
                      <span className="absolute -bottom-8 -right-4 text-8xl text-energy/10 font-serif">"</span>
                    </div>

                    {/* Attribution */}
                    <div className="pt-8">
                      <p className="text-lg text-pearl font-medium">{testimonial.name}</p>
                      <p className="text-sm text-pearl/60">{testimonial.location}</p>
                    </div>
                  </div>
                </div>)}

              {/* Indicators */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={cn("w-2 h-2 rounded-full transition-all duration-500", currentTestimonial === index ? "w-8 bg-energy" : "bg-white/30 hover:bg-white/50")} />)}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 7. CTA SECTION */}
      <section className="py-32 bg-gradient-to-br from-charcoal via-graphite to-charcoal">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight">
              Energy shouldn't be<br />something you think about.
            </h2>
            <p className="text-xl text-pearl/80 font-light max-w-2xl mx-auto leading-relaxed">
              Until the power goes out. Until your business stalls. Until you realize—your backup has become your worry.
            </p>
            <p className="text-xl text-pearl/70 font-light max-w-2xl mx-auto leading-relaxed">
              <span className="text-white">NESS is different.</span> It works silently in the background. You install it once. It delivers for decades.
            </p>
          </div>

          <Link to="/contact/homeowner">
            <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-16 py-8 text-xl rounded-full shadow-glow hover:shadow-[0_0_60px_rgba(0,200,83,0.6)] transition-all duration-500 w-full sm:w-auto">
              Get Started
            </Button>
          </Link>

          <div className="pt-4">
            <Link to="/contact/homeowner" className="text-pearl/70 hover:text-pearl transition-colors inline-flex items-center gap-2 group">
              <span>or talk to an expert</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};

// Why NESS Features
const whyNessFeatures = [{
  icon: Clock,
  title: "6,000 nights.",
  description: "That's how long our LiFePO₄ cells last. Your kids will inherit this before it dies. 10-year warranty included.",
  gradient: "from-indigo-500/10 via-purple-500/10 to-pink-500/10",
  iconColor: "text-indigo-400",
  accentColor: "border-indigo-500/20",
  stat: "16+ years",
  statColor: "text-indigo-400"
}, {
  icon: Zap,
  title: "24x7 Protection",
  description: "Smart battery intelligence: Reduce bills, preps for outages, boosts solar use, reduces diesel—effortless home backup.",
  gradient: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10",
  iconColor: "text-cyan-400",
  accentColor: "border-cyan-500/20",
  stat: "10ms switch",
  statColor: "text-cyan-400"
}, {
  icon: Battery,
  title: "Built for 50°C summers.",
  description: "Tested through three scorching Jharkhand summers. Powering over 500 homes — every night, for the last three years — on the same NESS batteries. Reliability isn't claimed here. It's proven.",
  gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
  iconColor: "text-emerald-400",
  accentColor: "border-emerald-500/20",
  stat: "50°C rated",
  statColor: "text-emerald-400"
}];

// Use Cases
const useCases = [{
  id: "home",
  icon: Shield,
  title: "Homeowners",
  description: "Never worry about power cuts again",
  link: "/residential"
}, {
  id: "business",
  icon: Zap,
  title: "Businesses",
  description: "Cut costs and boost reliability",
  link: "/ci"
}, {
  id: "installer",
  icon: Users,
  title: "Installers",
  description: "Partner with the best",
  link: "/installers"
}];

// Testimonials
const testimonials = [{
  initials: "MK",
  quote: "Two years. Not one reset. Not one worry.",
  name: "Dr. Mohan Krishna",
  location: "Bengaluru • Off-grid since 2022"
}, {
  initials: "RG",
  quote: "Our operations run smoother than ever. The grid is just backup now.",
  name: "Rajesh Gupta",
  location: "Delhi • EV Charging Hub"
}, {
  initials: "PS",
  quote: "The configurator made it simple. The installation was flawless.",
  name: "Priya Sharma",
  location: "Gurgaon • Villa Community"
}];

// Component: Why NESS Card
function WhyNessCard({
  feature,
  delay
}: {
  feature: typeof whyNessFeatures[0];
  delay: number;
}) {
  const {
    elementRef,
    isVisible
  } = useScrollAnimation();
  const Icon = feature.icon;
  return <div ref={elementRef as any} className={cn("group relative p-12 rounded-[2rem] border bg-gradient-to-br backdrop-blur-xl transition-all duration-700 hover:scale-[1.02]", feature.gradient, feature.accentColor, "bg-white/[0.02] hover:bg-white/[0.04]", "border-white/[0.05] hover:border-white/[0.1]", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")} style={{
    transitionDelay: `${delay}ms`
  }}>
      {/* Stat Badge */}
      <div className={cn("absolute top-8 right-8 px-4 py-2 rounded-full backdrop-blur-md transition-colors duration-500", "bg-white/[0.03] border group-hover:bg-white/[0.06]", feature.accentColor)}>
        <span className={cn("text-sm font-medium", feature.statColor)}>{feature.stat}</span>
      </div>

      <Icon className={cn("w-14 h-14 mb-8 group-hover:scale-110 transition-transform duration-500", feature.iconColor)} />
      <h3 className="text-3xl font-light text-white mb-5 leading-tight">{feature.title}</h3>
      <p className="text-lg text-white/50 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-500">{feature.description}</p>
    </div>;
}

// Component: Use Case Card
function UseCaseCard({
  useCase,
  isSelected,
  onClick
}: {
  useCase: typeof useCases[0];
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = useCase.icon;
  return <div onClick={onClick} className={cn("relative p-10 rounded-3xl border-2 transition-all duration-500 cursor-pointer", isSelected ? "bg-white border-energy shadow-glow scale-105" : "bg-white border-graphite/10 hover:border-energy/50 hover:shadow-soft hover:scale-102")}>
      <Icon className={cn("w-12 h-12 mb-6 transition-colors duration-500", isSelected ? "text-energy" : "text-graphite")} />
      <h3 className="text-2xl font-light text-graphite mb-3">{useCase.title}</h3>
      <p className="text-graphite/60 font-light mb-6">{useCase.description}</p>
      
      {isSelected && <div className="pt-6 border-t border-graphite/10 animate-fade-in">
          <Link to={useCase.link}>
            <Button className="w-full bg-energy hover:bg-energy-glow text-white rounded-full">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>}
    </div>;
}
export default Index;