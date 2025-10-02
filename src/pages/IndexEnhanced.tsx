import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IndiaInstallationMap from "@/components/IndiaInstallationMap";
// Optimized imports for performance
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { MagneticButton, PlayButton, FloatingCard, ParallaxContainer } from "@/components/EnhancedInteractions";
import { Play, Check, Zap, Sparkles, Shield, Battery, Home, Star, Quote } from "lucide-react";
import { WebPImage } from "@/components/ui/webp-image";

// Import images - they'll be lazy-loaded via WebPImage component
import heroHomeowners from "@/assets/hero-homeowners.jpg";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessPodProduct from "@/assets/ness-pod-product.png";
import rdLaboratory from '@/assets/rd-laboratory.jpg';
import batteryTechnology from '@/assets/battery-technology.jpg';
import manufacturingFacility from '@/assets/manufacturing-facility.jpg';

const IndexEnhanced = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section - Lead with proof */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src={heroHomeowners}
          alt="Modern home with NESS energy system"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        
        <div className="absolute inset-0 bg-charcoal/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-charcoal/80"></div>
        
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          
          <div className="space-y-16 animate-fade-up">
            
            {/* Trust First */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-6">
                <MapPin className="w-5 h-5 text-pearl/60" />
                <p className="text-sm font-medium text-pearl/90 uppercase tracking-[0.15em]">
                  10,000+ installations across India
                </p>
              </div>
            </div>

            {/* Specs that matter */}
            <div className="space-y-10">
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="space-y-2">
                  <div className="text-6xl font-light text-pearl tabular-nums">6000</div>
                  <div className="text-sm text-pearl/70 uppercase tracking-wider">Cycles</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-light text-energy-bright tabular-nums">15</div>
                  <div className="text-sm text-pearl/70 uppercase tracking-wider">Year Warranty</div>
                </div>
                <div className="space-y-2">
                  <div className="text-6xl font-light text-pearl tabular-nums">0</div>
                  <div className="text-sm text-pearl/70 uppercase tracking-wider">Fire Events</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-pearl leading-tight max-w-3xl mx-auto">
                Battery backup you can depend on.
              </h1>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button className="btn-sonos px-16 py-6 text-xl">
                <Link to="/contact" className="flex items-center">
                  Get Quote
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Proof - Installation Map */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Installed nationwide
            </h2>
            <p className="text-xl text-muted-foreground">
              10,000+ homes and businesses trust NESS
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <IndiaInstallationMap />
          </div>
        </div>
      </section>

      {/* Engineering Story - Simple */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">

          {/* Three Pillars */}
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Chemistry */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <WebPImage 
                  src={batteryTechnology} 
                  alt="LiFePO4 cell chemistry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-light text-foreground">
                LiFePO₄ chemistry
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Thermally stable to 600°C. No thermal runaway under normal use. 
                That's not marketing—it's physics.
              </p>
              <div className="pt-4 flex items-baseline gap-3">
                <div className="text-5xl font-light text-primary tabular-nums">0</div>
                <div className="text-sm text-muted-foreground">fire events recorded</div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <WebPImage 
                  src={rdLaboratory} 
                  alt="Quality control process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-light text-foreground">
                Seven quality gates
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every cell measured. Graded. Matched within ±2mV. 
                Assembled at controlled temperature. 100% functional testing.
              </p>
              <div className="pt-4 flex items-baseline gap-3">
                <div className="text-5xl font-light text-primary tabular-nums">±2mV</div>
                <div className="text-sm text-muted-foreground">cell matching tolerance</div>
              </div>
            </div>

            {/* Warranty */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <WebPImage 
                  src={manufacturingFacility} 
                  alt="Quality assurance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-light text-foreground">
                Honest warranty
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                15 years. Real coverage. No fine print claiming 10,000 cycles. 
                We stand by our batteries—and you.
              </p>
              <div className="pt-4">
                <Link 
                  to="/warranty" 
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  <span>Read warranty details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Three systems. Every need.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Link to="/homeowners" className="group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-medium text-foreground mb-4">NESS UPS</h3>
                <p className="text-muted-foreground mb-6">Essential backup for apartments</p>
                <div className="text-sm text-primary group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/homeowners" className="group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-medium text-foreground mb-4">NESS AIO</h3>
                <p className="text-muted-foreground mb-6">Solar + battery for homes</p>
                <div className="text-sm text-primary group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to="/homeowners" className="group">
              <div className="bg-card border border-primary/20 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-medium text-foreground mb-4">NESS PRO</h3>
                <p className="text-muted-foreground mb-6">Complete energy system</p>
                <div className="text-sm text-primary group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Expert Validation Section - Sonos "Giles Martin" Style */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto px-8">
          
          {/* Expert Quote - Large & Impactful */}
          <div className="text-center space-y-16">
            
            <div className="space-y-8">
              <Quote className="w-16 h-16 mx-auto text-energy/30" />
              
              <blockquote className="font-display text-4xl md:text-5xl font-light text-foreground leading-relaxed">
                "It's an engineering approach to peace of mind."
              </blockquote>
            </div>

            {/* Expert Credentials */}
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-energy/10 flex items-center justify-center">
                <Battery className="w-10 h-10 text-energy" />
              </div>
              
              <div>
                <p className="text-xl font-medium text-foreground">Dr. Rajesh Malhotra</p>
                <p className="text-lg text-muted-foreground">
                  Former ISRO Scientist & NESS Energy Advisor
                </p>
              </div>
            </div>

            {/* Supporting Stats */}
            <div className="pt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-light text-energy mb-2">6,000+</div>
                  <p className="text-sm text-muted-foreground">Charge cycles guaranteed</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-energy mb-2">99.7%</div>
                  <p className="text-sm text-muted-foreground">System uptime achieved</p>
                </div>
                <div>
                  <div className="text-4xl font-light text-energy mb-2">15</div>
                  <p className="text-sm text-muted-foreground">Years comprehensive warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Night Everything Changed - Apple-Style Emotional Section */}
      <section className="py-40 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Central Story - Apple Style */}
          <div className="text-center space-y-20">
            
            {/* Main Headline - Emotional Hook */}
            <div className="space-y-8">
              <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.9] tracking-tight">
                The night everything
                <br />
                <span className="text-energy font-light">changed.</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
                  While your neighbor's smart home went dark,
                  <br />
                  <span className="text-foreground">yours kept working perfectly.</span>
                </p>
              </div>
            </div>

            {/* Visual Contrast - Split Screen Effect */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-5xl mx-auto">
              
              {/* Left Side - The Problem */}
              <FloatingCard delay={100} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50/30 to-red-100/50 dark:from-red-950/30 dark:to-red-900/50 p-16 h-[400px] flex flex-col justify-center border border-red-200/30 dark:border-red-800/30">
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-transparent"></div>
                  </div>
                  
                  <div className="relative space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-red-500 opacity-60"></div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-red-700 dark:text-red-300 mb-4">
                      Their house
                    </h3>
                    
                    <div className="space-y-3 text-red-600 dark:text-red-400">
                      <p className="text-lg font-light">Security system: offline</p>
                      <p className="text-lg font-light">Climate control: failed</p>
                      <p className="text-lg font-light">Entertainment: dead</p>
                      <p className="text-lg font-light">Comfort: compromised</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Right Side - The Solution */}
              <FloatingCard delay={200} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-energy-light/10 to-energy/5 p-16 h-[400px] flex flex-col justify-center border border-energy/20 shadow-energy-glow/20">
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-energy to-transparent"></div>
                  </div>
                  
                  <div className="relative space-y-6 text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-energy/10 flex items-center justify-center mb-8">
                      <div className="w-8 h-8 rounded-full bg-energy animate-pulse"></div>
                    </div>
                    
                    <h3 className="text-2xl font-light text-energy mb-4">
                      Your home
                    </h3>
                    
                    <div className="space-y-3 text-energy-dark dark:text-energy-light">
                      <p className="text-lg font-light">Security system: protected</p>
                      <p className="text-lg font-light">Climate control: perfect</p>
                      <p className="text-lg font-light">Entertainment: seamless</p>
                      <p className="text-lg font-light">Peace of mind: <em>priceless</em></p>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            </div>

            {/* Single Powerful Conclusion */}
            <div className="space-y-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-energy to-transparent mx-auto"></div>
              <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
                The difference isn't just technology.
                <br />
                <span className="text-foreground font-medium">It's confidence in what matters most.</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Stories - Real Human Impact */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 text-energy rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Stories from our community</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              When expertise meets <span className="text-energy font-medium">life's moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Real families sharing how NESS made the difference when it mattered most
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Mumbai Family</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "48 hours of seamless power during Cyclone Tauktae"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                While the entire neighborhood was in darkness, our kids continued online classes, 
                wife worked from home, and we kept all essentials running. NESS didn't just provide 
                backup power—it provided peace of mind.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">AM</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Arjun Mehta</p>
                  <p className="text-xs text-muted-foreground">Bandra, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Delhi Business</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "Zero downtime during peak wedding season"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Our photography studio runs critical equipment worth lakhs. During the power crisis 
                last October, NESS kept everything running seamlessly. Not a single shoot was 
                cancelled, not a single client disappointed.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">PS</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Priya Sharma</p>
                  <p className="text-xs text-muted-foreground">Lajpat Nagar, Delhi</p>
                </div>
              </div>
            </div>

            <div className="glass-premium p-8 rounded-3xl hover:bg-card/80 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-energy font-medium uppercase tracking-wide">Bangalore Villa</span>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3">
                  "Smart home never missed a beat"
                </h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                We have a fully automated home—from security to climate control to entertainment. 
                Even during extended outages, everything works exactly as designed. 
                Visitors can't even tell when we're on backup power.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-energy/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-energy">RK</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Ravi Kumar</p>
                  <p className="text-xs text-muted-foreground">Whitefield, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Installation Map - Trust Building */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-energy/10 text-energy rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              <span>Trusted Across India</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-6 leading-tight">
              From <span className="text-energy font-light">Himachal to Kanyakumari</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              150+ installations delivered • 100MWh+ energy in 24 months • 15+ villages 100% solar powered
            </p>
          </div>
          
          {/* Map Container */}
          <div className="glass-premium rounded-3xl p-8 md:p-12 border border-border/20 shadow-2xl">
            <IndiaInstallationMap />
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12 space-y-6">
            <p className="text-lg text-muted-foreground font-light">
              Every dot represents a family or business that chose <span className="text-energy font-medium">reliability and peace of mind</span>
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-white px-10 py-5 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all">
                Join our growing community
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Premium */}
      <section className="py-40 relative overflow-hidden">
        {/* Background */}
        <WebPImage 
          src={heroHomeowners}
          alt="Premium NESS energy system"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-charcoal/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/90"></div>
        
        <div className="max-w-5xl mx-auto px-8 text-center relative">
          
          <div className="space-y-16">
            
            {/* Compelling Headline */}
            <div className="space-y-8">
              <h2 className="text-7xl md:text-8xl font-light text-pearl leading-[0.85] mb-8">
                Your moment.
                <br />
                <span className="text-energy-bright">Your power.</span>
                <br />
                <span className="text-pearl/70">Your choice.</span>
              </h2>
              <p className="text-2xl text-pearl/80 font-light max-w-3xl mx-auto leading-relaxed">
                Join thousands who chose <span className="text-energy-bright font-medium">confidence over compromise</span>.
              </p>
            </div>

            {/* Premium CTA */}
            <div className="space-y-8">
              <Button className="btn-sonos px-16 py-6 text-xl">
                <Link to="/contact" className="flex items-center">
                  Start your journey
                  <ArrowRight className="w-6 h-6 ml-4" />
                </Link>
              </Button>
              
              <p className="text-sm text-pearl/60 uppercase tracking-[0.2em]">
                Free consultation • Custom design • White-glove installation
              </p>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default IndexEnhanced;