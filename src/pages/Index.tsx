import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Battery, Clock, ArrowRight, Play, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazySection } from "@/components/ui/lazy-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import heroHome from "@/assets/hero-homeowners.jpg";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessCubeProduct from "@/assets/ness-cube-resort.webp";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroHome} 
            alt="Modern Indian villa with NESS Powerwall" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Own your<br />energy.<br />Own your life.
            </h1>
            
            <p className="text-2xl text-pearl/90 font-light max-w-xl leading-relaxed">
              Intelligent battery systems engineered for the modern Indian home and business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/residential">
                <Button 
                  size="lg" 
                  className="bg-energy hover:bg-energy-glow text-white px-10 py-7 text-lg rounded-full shadow-glow hover:shadow-[0_0_50px_rgba(0,200,83,0.5)] transition-all duration-500"
                >
                  Design My System
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/residential">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full"
                >
                  Explore Products
                </Button>
              </Link>
            </div>

            {/* Pulsing LED Indicator */}
            <div className="flex items-center gap-3 pt-8">
              <div className="relative">
                <div className="w-3 h-3 bg-energy rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-energy rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-white/60 uppercase tracking-wider">System Active</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex flex-col items-center gap-3 opacity-40 hover:opacity-60 transition-opacity">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full"></div>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">Scroll</span>
          </div>
        </div>
      </section>

      {/* 2. WHY NESS SECTION */}
      <LazySection>
        <section className="relative py-40 bg-charcoal overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy/5 rounded-full blur-[120px]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="text-center mb-28 space-y-6">
              <h2 className="text-display text-pearl font-light tracking-tight">
                Why choose NESS?
              </h2>
              <p className="text-body-large text-pearl/60 font-light max-w-2xl mx-auto">
                Engineered for excellence. Proven in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyNessFeatures.map((feature, index) => (
                <WhyNessCard key={index} feature={feature} delay={index * 150} />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 3. PRODUCT SHOWCASE SECTION */}
      <LazySection>
        <section className="py-40 bg-pearl">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-28 space-y-6">
              <h2 className="text-display text-graphite font-light tracking-tight">
                The NESS family
              </h2>
              <p className="text-body-large text-graphite/50 font-light">
                Power solutions for every need
              </p>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-8 px-8">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 4. CONFIGURATOR / USE-CASE SELECTOR */}
      <LazySection>
        <section className="py-40 bg-whisper">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-28 space-y-6">
              <h2 className="text-display text-graphite font-light tracking-tight">
                Find your solution
              </h2>
              <p className="text-body-large text-graphite/50 font-light">
                Tell us about your energy needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <UseCaseCard 
                  key={index} 
                  useCase={useCase} 
                  isSelected={selectedUseCase === useCase.id}
                  onClick={() => setSelectedUseCase(selectedUseCase === useCase.id ? null : useCase.id)}
                />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 5. EXPERIENCE NESS SECTION */}
      <LazySection>
        <section className="py-40 bg-pearl">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left - Video */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-graphite shadow-lifted group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-energy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-pearl/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-pearl/15 transition-all duration-700 border border-pearl/20">
                    <Play className="w-9 h-9 text-pearl ml-1" />
                  </div>
                </div>
                <img 
                  src={heroHome} 
                  alt="NESS in action" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>

              {/* Right - Stats */}
              <div className="space-y-16">
                <div className="space-y-5">
                  <h2 className="text-display text-graphite font-light tracking-tight">
                    Experience NESS
                  </h2>
                  <p className="text-body-large text-graphite/50 font-light">
                    Real performance. Real savings.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                  <div className="space-y-4">
                    <div className="text-display-medium font-light text-energy">
                      <AnimatedCounter value={100} suffix="+" />
                    </div>
                    <p className="text-body text-graphite/60 font-light">MWh Delivered</p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-display-medium font-light text-energy">
                      <AnimatedCounter value={1000} suffix="+" />
                    </div>
                    <p className="text-body text-graphite/60 font-light">Happy Customers</p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-display-medium font-light text-energy">
                      <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                    </div>
                    <p className="text-body text-graphite/60 font-light">Uptime</p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-display-medium font-light text-energy">
                      <AnimatedCounter value={10} suffix="+" />
                    </div>
                    <p className="text-body text-graphite/60 font-light">Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 6. TESTIMONIALS SLIDER */}
      <LazySection>
        <section className="py-40 bg-charcoal">
          <div className="max-w-5xl mx-auto px-8">
            <div className="relative min-h-[500px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-1000 ease-in-out",
                    currentTestimonial === index
                      ? "opacity-100 translate-x-0"
                      : index < currentTestimonial
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  )}
                >
                  <div className="flex flex-col items-center text-center space-y-12">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-energy/15 to-energy/5 flex items-center justify-center text-title-large font-light text-pearl border border-energy/20">
                      {testimonial.initials}
                    </div>

                    {/* Quote */}
                    <div className="relative max-w-4xl">
                      <span className="absolute -top-12 -left-8 text-[120px] text-energy/5 font-serif leading-none">"</span>
                      <blockquote className="text-title-large md:text-display-medium font-light text-pearl italic leading-relaxed px-12">
                        {testimonial.quote}
                      </blockquote>
                      <span className="absolute -bottom-8 -right-8 text-[120px] text-energy/5 font-serif leading-none">"</span>
                    </div>

                    {/* Attribution */}
                    <div className="pt-6 space-y-2">
                      <p className="text-body-large text-pearl font-light">{testimonial.name}</p>
                      <p className="text-body text-pearl/50 font-light">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Indicators */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      currentTestimonial === index
                        ? "w-12 bg-energy"
                        : "w-1 bg-pearl/20 hover:bg-pearl/40"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 7. CTA SECTION */}
      <section className="py-40 bg-gradient-to-br from-charcoal via-graphite to-charcoal relative overflow-hidden">
        {/* Subtle energy glow */}
        <div className="absolute inset-0 bg-gradient-radial from-energy/5 via-transparent to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-8 text-center space-y-16">
          <h2 className="text-display md:text-display-large text-pearl font-light leading-tight tracking-tight">
            Bring effortless<br />energy home.
          </h2>

          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-energy hover:bg-energy-bright text-pearl px-16 py-8 text-xl rounded-full shadow-soft hover:shadow-lifted transition-all duration-500 hover:scale-105 active:scale-95 w-full sm:w-auto font-light tracking-wide"
            >
              Get Started
            </Button>
          </Link>

          <div className="pt-2">
            <Link to="/contact" className="text-pearl/50 hover:text-pearl transition-colors inline-flex items-center gap-2 group font-light">
              <span>or talk to an expert</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Why NESS Features
const whyNessFeatures = [
  {
    icon: Shield,
    title: "Built to Last",
    description: "LiFePO₄ chemistry. 10-year warranty. Zero drama.",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Zap,
    title: "Intelligent Power",
    description: "Smart monitoring. Auto-optimization. Total control.",
    color: "from-energy/20 to-energy/5"
  },
  {
    icon: Battery,
    title: "India-Ready",
    description: "50°C tested. Voltage resilient. Always on.",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

// Products
const products = [
  {
    name: "NESS Powerwall",
    subtitle: "For modern homes",
    image: nessPodProduct,
    capacity: "5-15 kWh",
    link: "/residential"
  },
  {
    name: "NESS Pod",
    subtitle: "For SMEs & Resorts",
    image: nessProProduct,
    capacity: "20-50 kWh",
    link: "/ci"
  },
  {
    name: "NESS Cube",
    subtitle: "For industrial scale",
    image: nessCubeProduct,
    capacity: "100+ kWh",
    link: "/ci"
  }
];

// Use Cases
const useCases = [
  {
    id: "home",
    icon: Shield,
    title: "Homeowners",
    description: "Never worry about power cuts again",
    link: "/residential"
  },
  {
    id: "business",
    icon: Zap,
    title: "Businesses",
    description: "Cut costs and boost reliability",
    link: "/ci"
  },
  {
    id: "installer",
    icon: Users,
    title: "Installers",
    description: "Partner with the best",
    link: "/installers"
  }
];

// Testimonials
const testimonials = [
  {
    initials: "MK",
    quote: "Two years. Not one reset. Not one worry.",
    name: "Dr. Mohan Krishna",
    location: "Bengaluru • Off-grid since 2022"
  },
  {
    initials: "RG",
    quote: "Our operations run smoother than ever. The grid is just backup now.",
    name: "Rajesh Gupta",
    location: "Delhi • EV Charging Hub"
  },
  {
    initials: "PS",
    quote: "The configurator made it simple. The installation was flawless.",
    name: "Priya Sharma",
    location: "Gurgaon • Villa Community"
  }
];

// Component: Why NESS Card
function WhyNessCard({ feature, delay }: { feature: typeof whyNessFeatures[0]; delay: number }) {
  const { elementRef, isVisible } = useScrollAnimation();
  const Icon = feature.icon;

  return (
    <div
      ref={elementRef as any}
      className={cn(
        "group p-12 rounded-3xl border border-pearl/5 bg-gradient-to-br from-pearl/5 to-transparent backdrop-blur-sm transition-all duration-700 hover:border-pearl/10 hover:bg-pearl/[0.07] hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-14 h-14 text-energy mb-8 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-title text-pearl mb-4 font-light">{feature.title}</h3>
      <p className="text-body text-pearl/60 font-light leading-relaxed">{feature.description}</p>
    </div>
  );
}

// Component: Product Card
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link to={product.link} className="group min-w-[380px] snap-center">
      <div className="relative rounded-3xl overflow-hidden bg-whisper p-10 transition-all duration-700 hover:shadow-lifted hover:-translate-y-3 border border-transparent hover:border-graphite/5">
        <div className="aspect-square mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-title text-graphite font-light">{product.name}</h3>
          <p className="text-body text-graphite/50 font-light">{product.subtitle}</p>
          <p className="text-body-large text-energy font-light pt-2">{product.capacity}</p>
        </div>
      </div>
    </Link>
  );
}

// Component: Use Case Card
function UseCaseCard({ useCase, isSelected, onClick }: { 
  useCase: typeof useCases[0]; 
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = useCase.icon;

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative p-12 rounded-3xl border transition-all duration-500 cursor-pointer",
        isSelected 
          ? "bg-pearl border-energy shadow-lifted scale-[1.02]" 
          : "bg-pearl border-graphite/5 hover:border-graphite/10 hover:shadow-soft hover:-translate-y-1"
      )}
    >
      <Icon className={cn(
        "w-14 h-14 mb-8 transition-all duration-500",
        isSelected ? "text-energy scale-110" : "text-graphite"
      )} />
      <h3 className="text-title text-graphite font-light mb-4">{useCase.title}</h3>
      <p className="text-body text-graphite/50 font-light mb-6 leading-relaxed">{useCase.description}</p>
      
      {isSelected && (
        <div className="pt-8 border-t border-graphite/5 animate-fade-in">
          <Link to={useCase.link}>
            <Button className="w-full bg-energy hover:bg-energy-bright text-pearl rounded-full py-6 font-light transition-all duration-500 hover:shadow-soft hover:scale-105">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Index;
