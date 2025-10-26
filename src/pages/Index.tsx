import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Battery, Clock, ArrowRight, Play, Users, CheckCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazySection } from "@/components/ui/lazy-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PerformanceImage } from "@/components/ui/performance-image";
import { cn } from "@/lib/utils";
import nessHeroProduct from "@/assets/ness-hero-product.webp";
import nessPodProduct from "@/assets/ness-pod-product.png";
import { useState, useEffect } from "react";

const Index = () => {
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
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <PerformanceImage
            src={nessHeroProduct}
            alt="NESS Battery Energy Storage System"
            className="w-full h-full"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">
          <div className="max-w-2xl space-y-8 animate-fade-up">
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Power you<br />can count on.<br />When everything<br />else fails.
            </h1>
            
            <p className="text-2xl text-pearl/90 font-light max-w-xl leading-relaxed">
              The lights stay on. Work continues. Life doesn't stop. Because NESS was built for moments that matter—engineered to outlast India's harshest conditions.
            </p>

            <div className="pt-4">
              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-10 py-7 text-lg rounded-full shadow-glow hover:shadow-[0_0_50px_rgba(0,200,83,0.5)] transition-all duration-500">
                  Design My System
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONE KEY DIFFERENTIATOR */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light text-graphite mb-8 tracking-tight">
            Lasts 10+ years.
          </h2>
          <p className="text-xl md:text-2xl text-graphite/60 font-light leading-relaxed">
            While others need replacement every 2 years, NESS is engineered to endure. 
            One investment. A decade of reliability. Zero maintenance.
          </p>
          <div className="mt-12">
            <Link to="/technology" className="text-energy hover:text-energy-glow font-medium inline-flex items-center gap-2 text-lg group">
              Learn about our technology
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SPOTLIGHT - NESS Powerwall */}
      <LazySection>
        <section className="py-20 px-6 bg-gradient-to-b from-graphite to-graphite/90 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-energy text-sm uppercase tracking-widest mb-4">For Homeowners</p>
                <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  NESS Powerwall
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                  Elegant. Powerful. Silent. Everything your home needs, nothing it doesn't.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg">Powers your entire home</p>
                      <p className="text-white/60 font-light">From AC to refrigerator, run everything simultaneously</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg">Instant backup</p>
                      <p className="text-white/60 font-light">10ms switchover—WiFi stays connected, work never stops</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg">Solar ready</p>
                      <p className="text-white/60 font-light">Seamless integration with any solar system</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/residential">
                    <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_40px_rgba(0,200,83,0.4)] transition-all duration-500">
                      Design My System
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/residential">
                    <Button variant="outline" size="lg" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full">
                      View All Models
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <PerformanceImage
                  src={nessPodProduct}
                  alt="NESS Powerwall - Premium home battery backup system"
                  className="w-full h-auto rounded-2xl"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 4. SOCIAL PROOF - Testimonials */}
      <LazySection>
        <section className="py-32 bg-charcoal">
          <div className="max-w-4xl mx-auto px-8 text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
              Trusted by thousands
            </h2>
            <p className="text-white/60 text-lg font-light">
              across India
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-8">
            <div className="relative min-h-[350px] flex items-center justify-center">
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
                    <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center text-2xl font-light text-white border-2 border-energy/30">
                      {testimonial.initials}
                    </div>

                    <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed max-w-2xl">
                      {testimonial.quote}
                    </blockquote>

                    <div className="pt-4">
                      <p className="text-lg text-pearl font-medium">{testimonial.name}</p>
                      <p className="text-sm text-pearl/60 font-light">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}

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
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* 5. FINAL CTA */}
      <section className="py-32 px-6 bg-graphite text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
            Power that lasts.
          </h2>
          <p className="text-xl text-white/70 mb-12 font-light">
            Design your system in under 2 minutes.
          </p>

          <Link to="/residential">
            <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-12 py-7 text-lg rounded-full shadow-glow hover:shadow-[0_0_50px_rgba(0,200,83,0.5)] transition-all duration-500">
              Design My System
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};

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

export default Index;
