import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Battery, Clock, ArrowRight, Play, Users, CheckCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LazySection } from "@/components/ui/lazy-section";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { PerformanceImage } from "@/components/ui/performance-image";
import { cn } from "@/lib/utils";
import nessHeroWall from "@/assets/ness-hero-wall.jpg";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return <Layout>
      {/* 1. PREMIUM HERO SECTION - Full Screen */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <PerformanceImage
            src={nessHeroWall}
            alt="NESS home battery mounted on modern wall"
            priority={true}
            className="w-full h-full object-cover object-[60%_center] lg:object-center"
          />
          {/* Gradient vignette for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220]/85 via-[#0B1220]/60 to-transparent lg:from-[#0B1220]/70 lg:via-[#0B1220]/40" />
          {/* Mobile: stronger vignette on top-left */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0B1220]/60 to-transparent lg:hidden" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="max-w-[92vw] lg:max-w-[46rem] space-y-6 lg:space-y-8">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(34px,7vw,52px)] md:text-[clamp(46px,6.2vw,72px)] lg:text-[clamp(64px,5.5vw,96px)] font-bold leading-[1.1] text-[#E5E7EB]"
              >
                Get your home{' '}
                <span className="font-sacramento text-[108%] md:text-[110%] text-[#00C853]">
                  NESS'ed
                </span>
                .
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl lg:text-[22px] text-[#E5E7EB] leading-relaxed max-w-[92vw] md:max-w-full"
              >
                The all-in-one home battery that stores solar, powers essentials, and disappears on your wall.
              </motion.p>

              {/* Definition */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg lg:text-lg text-[#A1A1AA] leading-relaxed max-w-[92vw] md:max-w-full mt-2 md:mt-3"
              >
                <span className="font-sacramento text-[#00C853]">'NESS'ed'</span> means your home runs on clean, silent power — even when the grid doesn't.
              </motion.p>

              {/* CTA Group */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center pt-2 md:pt-4"
              >
                <Button
                  onClick={() => navigate('/homeowners')}
                  size="lg"
                  className="min-h-[48px] px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-[#00C853] hover:bg-[#19B86C] text-white text-base md:text-lg font-semibold transition-colors duration-300 shadow-lg"
                >
                  Design My System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <span className="text-sm md:text-base text-[#A1A1AA] leading-snug">
                  Find your perfect setup in 30 seconds.
                </span>
              </motion.div>

              {/* Footer Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm md:text-base text-[#A1A1AA] pt-4 md:pt-6 lg:pt-8"
              >
                Engineered in India for homes that never pause.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2 text-[#A1A1AA]">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </motion.div>
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

      {/* 3B. C&I PRODUCT SPOTLIGHT - NESS Pod */}
      <LazySection>
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <PerformanceImage
                  src={nessProProduct}
                  alt="NESS Pod - Commercial & Industrial battery backup system"
                  className="w-full h-auto rounded-2xl"
                  priority={false}
                />
              </div>

              <div className="order-1 md:order-2">
                <p className="text-energy text-sm uppercase tracking-widest mb-4">For Business</p>
                <h2 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight">
                  NESS Pod
                </h2>
                <p className="text-xl text-graphite/70 mb-8 leading-relaxed font-light">
                  When downtime isn't an option. Built for businesses that can't afford to stop.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg text-graphite">Scalable power</p>
                      <p className="text-graphite/60 font-light">20-50 kWh systems for commercial needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg text-graphite">Cut diesel costs</p>
                      <p className="text-graphite/60 font-light">Reduce dependency by 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-lg text-graphite">Remote monitoring</p>
                      <p className="text-graphite/60 font-light">Track performance from anywhere</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/commercial">
                    <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_40px_rgba(0,200,83,0.4)] transition-all duration-500">
                      Explore Commercial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/commercial">
                    <Button variant="outline" size="lg" className="border-2 border-graphite/30 text-graphite hover:bg-graphite/5 px-8 py-6 text-lg rounded-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
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
