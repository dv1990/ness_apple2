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
      {/* Hero Section - Steve Jobs Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* Cinematic Background - Multiple layers for depth */}
        <div className="absolute inset-0">
          {/* Base image with parallax effect */}
          <div className="absolute inset-0 scale-105">
            <img 
              src={heroHomeowners}
              alt="Energy independence"
              className="w-full h-full object-cover opacity-30"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          
          {/* Gradient overlays for dramatic effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95"></div>
          <div className="absolute inset-0 bg-gradient-radial from-energy/5 via-transparent to-black/50"></div>
          
          {/* Subtle animated glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-energy/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          
          <div className="space-y-24 animate-fade-up">
            
            {/* The Opening - Steve Jobs style build-up */}
            <div className="space-y-16 max-w-5xl mx-auto">
              
              {/* The Problem - Universal */}
              <div className="space-y-8">
                <p className="text-2xl md:text-4xl text-pearl/60 font-extralight tracking-wide">
                  In India, power cuts aren't a question of if.
                </p>
                <p className="text-2xl md:text-4xl text-pearl/60 font-extralight tracking-wide">
                  They're a question of when.
                </p>
              </div>

              {/* The Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-energy to-transparent"></div>
                <Zap className="w-6 h-6 text-energy" />
                <div className="w-16 h-px bg-gradient-to-r from-energy via-energy to-transparent"></div>
              </div>

              {/* The Dream - Bold and Simple */}
              <div className="space-y-12">
                <h1 className="text-7xl md:text-9xl font-extralight text-pearl leading-[0.9] tracking-tighter">
                  What if you
                  <br />
                  <span className="text-energy font-light">never noticed?</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-light text-pearl/70 max-w-3xl mx-auto leading-relaxed">
                  No diesel generators. No voltage fluctuations. No interruptions.
                  <br />
                  <span className="text-energy-bright">Just continuous, clean power.</span>
                </p>
              </div>

              {/* The Proof Point */}
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-energy/10 border border-energy/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-energy animate-pulse"></div>
                  <span className="text-energy font-medium text-lg">10,000+ systems</span>
                </div>
                <div className="w-px h-6 bg-energy/30"></div>
                <span className="text-pearl/60 text-lg">24/7 uptime</span>
                <div className="w-px h-6 bg-energy/30"></div>
                <span className="text-pearl/60 text-lg">Zero compromises</span>
              </div>
            </div>

            {/* Dual CTA - for both audiences */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/residential">
                <Button size="lg" className="btn-sonos px-10 py-6 text-lg group">
                  <Home className="w-5 h-5 mr-3" />
                  For Your Home
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/commercial">
                <Button size="lg" variant="outline" className="px-10 py-6 text-lg border-energy/30 hover:bg-energy/10 hover:border-energy group">
                  <Shield className="w-5 h-5 mr-3" />
                  For Your Business
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16">
              <a href="#the-difference" className="inline-flex flex-col items-center gap-3 group cursor-pointer">
                <span className="text-pearl/40 text-sm uppercase tracking-widest">See the difference</span>
                <div className="w-6 h-10 rounded-full border-2 border-pearl/20 flex items-start justify-center p-2">
                  <div className="w-1 h-3 bg-energy rounded-full animate-bounce"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof - The Magic Moment */}
      <section id="the-difference" className="py-40 bg-gradient-to-b from-black via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* The Contrast */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 max-w-6xl mx-auto mb-32">
            
            {/* Left - Other batteries */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50/40 to-red-100/60 dark:from-red-950/40 dark:to-red-900/60 p-16 min-h-[500px] flex flex-col justify-center border border-red-200/40 dark:border-red-800/40">
              <div className="space-y-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-red-900/60 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-red-500" />
                </div>
                
                <h3 className="text-3xl font-light text-red-700 dark:text-red-300">
                  Regular batteries
                </h3>
                
                <div className="space-y-4 text-red-600/90 dark:text-red-400/90">
                  <p className="text-xl">Catch fire at 150°C</p>
                  <p className="text-xl">Degrade in 2-3 years</p>
                  <p className="text-xl">Need replacement often</p>
                  <p className="text-xl">Warranty full of fine print</p>
                </div>

                <p className="text-sm text-red-500/60 pt-8">Most competitors use this.</p>
              </div>
            </div>

            {/* Right - NESS with LFP */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-energy-light/20 to-energy/10 p-16 min-h-[500px] flex flex-col justify-center border-2 border-energy/30 shadow-[0_0_60px_-15px_rgba(var(--energy),0.3)]">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-energy to-transparent"></div>
              
              <div className="relative space-y-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-energy/20 flex items-center justify-center">
                  <Battery className="w-10 h-10 text-energy animate-pulse" />
                </div>
                
                <h3 className="text-3xl font-light text-energy">
                  LiFePO₄ batteries
                </h3>
                
                <div className="space-y-4 text-energy-dark dark:text-energy-light">
                  <p className="text-xl font-medium">Safe to 600°C</p>
                  <p className="text-xl font-medium">6000 cycles guaranteed</p>
                  <p className="text-xl font-medium">Lasts 15+ years</p>
                  <p className="text-xl font-medium">True warranty coverage</p>
                </div>

                <p className="text-sm text-energy/70 pt-8">Only NESS uses this in India.</p>
              </div>
            </div>
          </div>

          {/* The reveal */}
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                This is not a small difference.
              </h2>
              <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto">
                It's the difference between worry and peace of mind.
              </p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="space-y-3">
                <div className="text-6xl font-light text-energy tabular-nums">0</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Fire events</div>
              </div>
              <div className="space-y-3">
                <div className="text-6xl font-light text-energy tabular-nums">10,000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Installations</div>
              </div>
              <div className="space-y-3">
                <div className="text-6xl font-light text-energy tabular-nums">15</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Year warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - Installation Map */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
              Everywhere in India
            </h2>
            <p className="text-xl text-muted-foreground">
              From Kashmir to Kanyakumari, across homes and businesses
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <IndiaInstallationMap />
          </div>
        </div>
      </section>

      {/* Why It Works - Engineering Truth */}
      <section className="py-40 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          
          {/* Section intro */}
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
              How do we do it?
            </h2>
            <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
              Three decisions that make all the difference.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Chemistry */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <WebPImage 
                  src={batteryTechnology} 
                  alt="LiFePO4 cell chemistry" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-energy/10 flex items-center justify-center">
                    <Battery className="w-5 h-5 text-energy" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">
                    LiFePO₄ chemistry
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lithium Iron Phosphate. Thermally stable to 600°C. Other batteries? They fail at 150°C. 
                </p>
                <p className="text-base text-muted-foreground/80">
                  That's not marketing. That's physics.
                </p>
                <div className="pt-6 flex items-baseline gap-3">
                  <div className="text-6xl font-light text-energy tabular-nums">600°C</div>
                  <div className="text-sm text-muted-foreground">thermal stability</div>
                </div>
              </div>
            </div>

            {/* Manufacturing */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <WebPImage 
                  src={rdLaboratory} 
                  alt="Quality control process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-energy/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-energy" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">
                    Seven quality gates
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every single cell measured, graded, matched within ±2mV. Temperature-controlled assembly. 100% functional testing.
                </p>
                <p className="text-base text-muted-foreground/80">
                  Others skip steps. We don't.
                </p>
                <div className="pt-6 flex items-baseline gap-3">
                  <div className="text-6xl font-light text-energy tabular-nums">±2mV</div>
                  <div className="text-sm text-muted-foreground">matching tolerance</div>
                </div>
              </div>
            </div>

            {/* Warranty */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <WebPImage 
                  src={manufacturingFacility} 
                  alt="Quality assurance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-energy/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-energy" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">
                    Real warranty
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  15 years. 6000 cycles. No asterisks. No fine print claiming impossible numbers.
                </p>
                <p className="text-base text-muted-foreground/80">
                  We stand by every battery. Period.
                </p>
                <div className="pt-6">
                  <Link 
                    to="/warranty" 
                    className="inline-flex items-center gap-2 text-energy hover:gap-3 transition-all text-lg"
                  >
                    <span>Read the warranty</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-40 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
              Choose your peace of mind
            </h2>
            <p className="text-2xl font-light text-muted-foreground">
              Three systems. One promise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/homeowners" className="group">
              <div className="bg-card border-2 border-border rounded-3xl p-10 hover:border-energy/30 hover:shadow-[0_0_40px_-15px_rgba(var(--energy),0.2)] transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full bg-energy/10 flex items-center justify-center">
                    <Home className="w-7 h-7 text-energy" />
                  </div>
                  <h3 className="text-3xl font-light text-foreground">NESS UPS</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Essential backup. Apartments. No solar needed.
                  </p>
                  <div className="pt-4">
                    <div className="text-base text-energy group-hover:gap-3 inline-flex items-center gap-2 transition-all font-medium">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/homeowners" className="group">
              <div className="bg-card border-2 border-border rounded-3xl p-10 hover:border-energy/30 hover:shadow-[0_0_40px_-15px_rgba(var(--energy),0.2)] transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-full bg-energy/10 flex items-center justify-center">
                    <Zap className="w-7 h-7 text-energy" />
                  </div>
                  <h3 className="text-3xl font-light text-foreground">NESS AIO</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Solar + battery. Perfect for homes.
                  </p>
                  <div className="pt-4">
                    <div className="text-base text-energy group-hover:gap-3 inline-flex items-center gap-2 transition-all font-medium">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/homeowners" className="group">
              <div className="bg-gradient-to-br from-energy/5 to-energy/10 border-2 border-energy/30 rounded-3xl p-10 hover:border-energy/50 hover:shadow-[0_0_50px_-15px_rgba(var(--energy),0.3)] transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-energy/20 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-energy" />
                    </div>
                    <Badge className="bg-energy/20 text-energy border-0">Most Popular</Badge>
                  </div>
                  <h3 className="text-3xl font-light text-foreground">NESS PRO</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Complete energy independence. Maximum power.
                  </p>
                  <div className="pt-4">
                    <div className="text-base text-energy group-hover:gap-3 inline-flex items-center gap-2 transition-all font-medium">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Why Nunam - Trust & Partnership */}
      <section className="py-40 bg-background">
        <div className="max-w-5xl mx-auto px-8">
          
          <div className="text-center space-y-20">
            
            {/* The question */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                Why Nunam?
              </h2>
              <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto">
                Because we make one thing.
                <br />
                <span className="text-foreground">And we make it right.</span>
              </p>
            </div>

            {/* Three reasons */}
            <div className="grid md:grid-cols-3 gap-12 text-left">
              
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-energy" />
                </div>
                <h3 className="text-2xl font-light text-foreground">We don't cut corners</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  LiFePO₄ costs more. Seven quality gates take time. We do it anyway. Because safety and reliability aren't negotiable.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center">
                  <Battery className="w-8 h-8 text-energy" />
                </div>
                <h3 className="text-2xl font-light text-foreground">We stand by our word</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  15-year warranty. No asterisks. No fine print. When we say guaranteed, we mean it. 0 fire events in 10,000+ installations proves it.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center">
                  <Home className="w-8 h-8 text-energy" />
                </div>
                <h3 className="text-2xl font-light text-foreground">We're everywhere</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From Kashmir to Kerala, 10,000+ installations nationwide. Certified installers. Local support. You're never alone.
                </p>
              </div>

            </div>

            {/* Expert validation */}
            <div className="pt-16 space-y-12">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
              
              <div className="space-y-6">
                <Quote className="w-12 h-12 mx-auto text-energy/30" />
                
                <blockquote className="text-3xl md:text-4xl font-light text-foreground leading-relaxed max-w-3xl mx-auto">
                  "This is engineering you can trust with what matters most."
                </blockquote>
                
                <div className="pt-6">
                  <p className="text-lg font-medium text-foreground">Dr. Rajesh Malhotra</p>
                  <p className="text-base text-muted-foreground">Former ISRO Scientist</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Stories - Real Impact */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
              Real impact. Real results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Story 1 - Medical need (Home) */}
            <div className="bg-card border border-border rounded-3xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-energy" />
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-foreground leading-relaxed">
                    "My father needs oxygen 24/7. Before NESS, every power cut was terrifying. Now I sleep at night."
                  </p>
                  <div>
                    <p className="font-medium text-foreground">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Residential • Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 - Manufacturing (C&I) */}
            <div className="bg-card border border-border rounded-3xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-energy" />
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-foreground leading-relaxed">
                    "Eliminated diesel. Cut our energy costs by 32%. Production runs 24/7 with zero grid dependency."
                  </p>
                  <div>
                    <p className="font-medium text-foreground">Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Manufacturing • Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 - Healthcare (C&I) */}
            <div className="bg-card border border-border rounded-3xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-energy" />
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-foreground leading-relaxed">
                    "Critical care equipment can't go down. NESS gave us 100% uptime. Lives depend on this reliability."
                  </p>
                  <div>
                    <p className="font-medium text-foreground">Dr. Meera Reddy</p>
                    <p className="text-sm text-muted-foreground">Hospital • Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 4 - Tech office (C&I) */}
            <div className="bg-card border border-border rounded-3xl p-12 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-energy/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-8 h-8 text-energy" />
                </div>
                <div className="space-y-4">
                  <p className="text-xl text-foreground leading-relaxed">
                    "Data center stays online. Never missed an SLA. Peak shaving saved us ₹18L annually."
                  </p>
                  <div>
                    <p className="font-medium text-foreground">Vikram Malhotra</p>
                    <p className="text-sm text-muted-foreground">Tech Campus • Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA - Simple & Direct */}
      <section className="py-40 bg-gradient-to-b from-background via-energy/5 to-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground">
                Ready for uninterrupted power?
              </h2>
              <p className="text-2xl font-light text-muted-foreground">
                Join 10,000+ installations running 24/7 with zero compromises.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="text-5xl font-light text-energy">600°C</div>
                <p className="text-sm text-muted-foreground">Safe</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-light text-energy">6000</div>
                <p className="text-sm text-muted-foreground">Cycles</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-light text-energy">15</div>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
            </div>

            <div className="space-y-6">
              <Button size="lg" className="btn-sonos px-16 py-8 text-xl">
                <Link to="/contact" className="flex items-center gap-4">
                  Get your quote
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
              <p className="text-base text-muted-foreground">
                Free consultation • Certified installers • 15-year warranty
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default IndexEnhanced;