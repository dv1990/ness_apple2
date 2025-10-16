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
        <section className="relative py-40 bg-gradient-radial from-charcoal via-charcoal to-graphite overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-energy/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="text-center mb-32">
              <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
                Power that thinks.<br />Batteries that last.
              </h2>
              <p className="text-2xl text-pearl/80 font-light max-w-3xl mx-auto leading-relaxed">
                Most batteries fail when you need them most. NESS doesn't.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {whyNessFeatures.map((feature, index) => (
                <WhyNessCard key={index} feature={feature} delay={index * 150} />
              ))}
            </div>
          </div>
        </section>
      </LazySection>

      {/* 3. PRODUCT SHOWCASE SECTION */}
      <LazySection>
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight">
                The NESS family
              </h2>
              <p className="text-xl text-graphite/60 font-light">
                Power solutions for every need
              </p>
            </div>

            <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
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
                <img 
                  src={heroHome} 
                  alt="NESS in action" 
                  className="w-full h-full object-cover opacity-70"
                />
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
                </div>
              ))}

              {/* Indicators */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-500",
                      currentTestimonial === index
                        ? "w-8 bg-energy"
                        : "bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 7. CTA SECTION */}
      <section className="py-32 bg-gradient-to-br from-charcoal via-graphite to-charcoal">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight">
            Bring effortless<br />energy home.
          </h2>

          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-energy hover:bg-energy-glow text-white px-16 py-8 text-xl rounded-full shadow-glow hover:shadow-[0_0_60px_rgba(0,200,83,0.6)] transition-all duration-500 w-full sm:w-auto"
            >
              Get Started
            </Button>
          </Link>

          <div className="pt-4">
            <Link to="/contact" className="text-pearl/70 hover:text-pearl transition-colors inline-flex items-center gap-2 group">
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
    icon: Clock,
    title: "6,000 nights.",
    description: "That's how long our LiFePO₄ cells last. Your kids will inherit this before it dies. 10-year warranty included.",
    color: "from-energy/20 to-energy/5",
    stat: "16+ years"
  },
  {
    icon: Zap,
    title: "Works while you sleep.",
    description: "Learns your usage. Optimizes itself. Switches to backup in 10 milliseconds. You'll never notice a power cut again.",
    color: "from-blue-500/20 to-blue-500/5",
    stat: "10ms switch"
  },
  {
    icon: Battery,
    title: "Built for 50°C summers.",
    description: "Tested in Nagpur heat. Handles voltage drops from 90V to 300V. When the grid fails, NESS doesn't blink.",
    color: "from-orange-500/20 to-orange-500/5",
    stat: "50°C rated"
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
        "group relative p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-energy/30",
        feature.color,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Stat Badge */}
      <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <span className="text-sm font-medium text-energy">{feature.stat}</span>
      </div>

      <Icon className="w-14 h-14 text-energy mb-8 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-3xl font-light text-white mb-5 leading-tight">{feature.title}</h3>
      <p className="text-lg text-pearl/70 font-light leading-relaxed">{feature.description}</p>
    </div>
  );
}

// Component: Product Card
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link to={product.link} className="group min-w-[350px] snap-center">
      <div className="relative rounded-3xl overflow-hidden bg-whisper p-8 transition-all duration-700 hover:shadow-lifted hover:-translate-y-2">
        <div className="aspect-square mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-light text-graphite">{product.name}</h3>
          <p className="text-graphite/60 font-light">{product.subtitle}</p>
          <p className="text-energy font-medium pt-2">{product.capacity}</p>
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
        "relative p-10 rounded-3xl border-2 transition-all duration-500 cursor-pointer",
        isSelected 
          ? "bg-white border-energy shadow-glow scale-105" 
          : "bg-white border-graphite/10 hover:border-energy/50 hover:shadow-soft hover:scale-102"
      )}
    >
      <Icon className={cn(
        "w-12 h-12 mb-6 transition-colors duration-500",
        isSelected ? "text-energy" : "text-graphite"
      )} />
      <h3 className="text-2xl font-light text-graphite mb-3">{useCase.title}</h3>
      <p className="text-graphite/60 font-light mb-6">{useCase.description}</p>
      
      {isSelected && (
        <div className="pt-6 border-t border-graphite/10 animate-fade-in">
          <Link to={useCase.link}>
            <Button className="w-full bg-energy hover:bg-energy-glow text-white rounded-full">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Index;
