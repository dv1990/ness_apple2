import { useState, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/animated-card";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Shield, 
  Target,
  TrendingUp,
  BarChart3,
  Battery,
  Zap,
  Layers,
  Repeat,
  CheckCircle2,
  Fuel,
  Cloud
} from "lucide-react";
import { 
  EmotionalHero,
  AppleHeadline,
  HumanBenefit,
  StorySection,
  StoryChapter
} from "@/components/AppleInspiredContent";
import { 
  MagneticButton,
  FloatingCard,
} from "@/components/EnhancedInteractions";
import { WebPImage } from "@/components/ui/webp-image";

// Import images - they'll be lazy-loaded via WebPImage component
import industrialHero from "@/assets/industrial-complex-hero.jpg";
import ciHeroPremium from "@/assets/ci-hero-premium.jpg";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import nessCube from "@/assets/ness-cube-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";

// Form validation schema
const contactSchema = z.object({
  company: z.string().trim().min(2, "Company name must be at least 2 characters").max(200, "Company name too long"),
  contact: z.string().trim().min(2, "Contact name required").max(100, "Name too long"),
  monthlySpend: z.string().trim().min(1, "Monthly spend required").max(20, "Invalid amount")
});

const CommercialEnhanced = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    monthlySpend: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isCtaSticky, setIsCtaSticky] = useState(false);

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsCtaSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateSavings = (spend: number) => {
    const annualSavings = spend * 12 * 0.42; // 42% savings
    const paybackMonths = Math.round((spend * 12 * 4.3) / annualSavings);
    const twentyFiveYearValue = annualSavings * 25;
    
    return {
      annualSavings: Math.round(annualSavings),
      paybackMonths,
      twentyFiveYearValue: Math.round(twentyFiveYearValue)
    };
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const savings = monthlySpend ? calculateSavings(parseInt(monthlySpend)) : null;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        
        {/* Sticky CTA Button */}
        <div 
          className={`fixed top-24 right-8 z-50 transition-all duration-500 ${
            isCtaSticky ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <Button 
            size="lg"
            className="bg-energy hover:bg-energy-dark text-white shadow-2xl hover:shadow-[0_0_40px_rgba(var(--energy),0.4)] px-8 py-6 text-lg font-semibold rounded-xl border-2 border-energy-bright/20"
          >
            Get My ROI Estimate
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Hero Section - Steve Jobs Style */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Cinematic Background */}
          <div className="absolute inset-0">
            <img 
              src={ciHeroPremium}
              alt="Premium industrial facility with solar and battery storage"
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
          </div>

          {/* Content Grid */}
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Bold Typography */}
              <div className="space-y-12 animate-fade-in">
                <div className="space-y-8">
                  {/* Headline - Bold, Direct */}
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-pearl leading-[0.9] tracking-tight">
                    Cut energy costs.
                    <br />
                    <span className="text-energy-bright font-light">Keep the lights on.</span>
                    <br />
                    <span className="text-pearl/80">Say goodbye to diesel.</span>
                  </h1>
                  
                  {/* Subline */}
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-pearl/90 leading-relaxed max-w-2xl">
                    One smart solar + storage system that powers your business reliably, day and night.
                  </p>
                </div>

                {/* Premium CTA */}
                <div className="pt-8">
                  <Button 
                    size="lg"
                    className="bg-energy hover:bg-energy-dark text-white shadow-xl hover:shadow-[0_0_50px_rgba(var(--energy),0.5)] px-12 py-8 text-xl font-semibold rounded-2xl border-2 border-energy-bright/30 transition-all duration-300"
                  >
                    Get My ROI Estimate
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-pearl/20">
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-light text-energy-bright tabular-nums">42%</div>
                    <div className="text-sm text-pearl/70 uppercase tracking-wider">Avg. savings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-light text-energy-bright tabular-nums">18m</div>
                    <div className="text-sm text-pearl/70 uppercase tracking-wider">Payback</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl lg:text-5xl font-light text-energy-bright tabular-nums">0</div>
                    <div className="text-sm text-pearl/70 uppercase tracking-wider">Downtime</div>
                  </div>
                </div>
              </div>

              {/* Right: Premium Product Render */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Glow effect behind product */}
                  <div className="absolute inset-0 bg-energy/20 blur-[120px] scale-75" />
                  
                  {/* Product Image - Cinematic */}
                  <div className="relative">
                    <img 
                      src={nessProProduct}
                      alt="NESS PRO Industrial Battery System"
                      className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(var(--energy),0.3)] transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating specs */}
                  <div className="absolute -bottom-8 -left-8 bg-pearl/10 backdrop-blur-xl border border-pearl/20 rounded-2xl p-6 shadow-2xl">
                    <div className="text-3xl font-light text-energy-bright mb-1">3 MWh</div>
                    <div className="text-sm text-pearl/70">Scalable capacity</div>
                  </div>

                  <div className="absolute -top-8 -right-8 bg-pearl/10 backdrop-blur-xl border border-pearl/20 rounded-2xl p-6 shadow-2xl">
                    <div className="text-3xl font-light text-energy-bright mb-1">99.7%</div>
                    <div className="text-sm text-pearl/70">Uptime guaranteed</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-pearl/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-energy-bright rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Benefits Section - Why Solar + ESS */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-8">
            
            {/* Premium Section Heading */}
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight tracking-tight mb-4">
                Why Solar + ESS
              </h2>
              <div className="w-20 h-px bg-energy mx-auto"></div>
            </div>
            
            {/* Grid: 4 equal cards (3/12 desktop, 6/12 tablet, 12/12 mobile) */}
            <div className="grid grid-cols-12 gap-6">
              
              {/* Card 1: Bill Savings */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group">
                <div className="bg-white dark:bg-card rounded-2xl shadow-soft hover:shadow-lifted p-6 h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="space-y-4">
                    {/* Icon - line art, single color */}
                    <div className="w-8 h-8 flex items-center justify-start">
                      <TrendingUp className="w-8 h-8 text-muted-foreground group-hover:text-energy transition-colors stroke-[1.5]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Bill Savings
                    </h3>
                    
                    {/* Description - max 14 words, 2 lines */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      Store solar for peak time; save 20–40% annually.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Demand Charge Control */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group">
                <div className="bg-white dark:bg-card rounded-2xl shadow-soft hover:shadow-lifted p-6 h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="space-y-4">
                    {/* Icon - line art, single color */}
                    <div className="w-8 h-8 flex items-center justify-start">
                      <BarChart3 className="w-8 h-8 text-muted-foreground group-hover:text-energy transition-colors stroke-[1.5]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Demand Charge Control
                    </h3>
                    
                    {/* Description - max 14 words, 2 lines */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      Clip short, expensive spikes; lower demand penalties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Resilience */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group">
                <div className="bg-white dark:bg-card rounded-2xl shadow-soft hover:shadow-lifted p-6 h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="space-y-4">
                    {/* Icon - line art, single color */}
                    <div className="w-8 h-8 flex items-center justify-start">
                      <Shield className="w-8 h-8 text-muted-foreground group-hover:text-energy transition-colors stroke-[1.5]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Resilience
                    </h3>
                    
                    {/* Description - max 14 words, 2 lines */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      Grid fails? Operations keep running.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Diesel Replacement */}
              <div className="col-span-12 md:col-span-6 lg:col-span-3 group">
                <div className="bg-white dark:bg-card rounded-2xl shadow-soft hover:shadow-lifted p-6 h-full transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="space-y-4">
                    {/* Icon - line art, single color */}
                    <div className="w-8 h-8 flex items-center justify-start">
                      <Fuel className="w-8 h-8 text-muted-foreground group-hover:text-energy transition-colors stroke-[1.5]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      Diesel Replacement
                    </h3>
                    
                    {/* Description - max 14 words, 2 lines */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      Avoid gensets: cut fuel, noise, and maintenance.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product Information - Radial Callouts */}
        <section className="relative py-40 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
          <div className="max-w-[1800px] mx-auto px-8">
            
            {/* Section Heading */}
            <div className="text-center mb-32">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight tracking-tight mb-4">
                Intelligence Built In
              </h2>
              <div className="w-20 h-px bg-energy mx-auto"></div>
            </div>

            {/* Desktop: Radial Layout | Mobile: Stacked */}
            <div className="relative">
              
              {/* Central Product Render - Desktop */}
              <div className="hidden lg:flex items-center justify-center mb-20">
                <div className="relative w-[500px] h-[500px]">
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-energy/10 blur-[150px] scale-90 animate-pulse" />
                  
                  {/* Product Image */}
                  <img 
                    src={nessProProduct}
                    alt="NESS PRO - Intelligent Power Control System"
                    className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_60px_rgba(var(--energy),0.25)]"
                  />
                </div>
              </div>

              {/* Mobile Product - Top */}
              <div className="lg:hidden flex items-center justify-center mb-16">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-energy/10 blur-[100px]" />
                  <img 
                    src={nessProProduct}
                    alt="NESS PRO - Intelligent Power Control System"
                    className="relative z-10 w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Callout Cards - Radial on Desktop, Stacked on Mobile */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto lg:max-w-none">
                
                {/* Callout 1: Intelligent Power Control - Top Left */}
                <div className="lg:col-start-1 lg:row-start-1 group cursor-pointer">
                  <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute top-1/2 left-full w-32 h-px bg-gradient-to-r from-energy/40 to-transparent group-hover:from-energy group-hover:shadow-[0_0_20px_rgba(var(--energy),0.6)] transition-all duration-300 -translate-y-1/2" />
                    
                    {/* Card */}
                    <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 group-hover:border-energy/40 group-hover:shadow-[0_0_40px_-10px_rgba(var(--energy),0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Title & Tagline */}
                      <div className="space-y-2 mb-6">
                        <h3 className="text-3xl font-semibold text-foreground">Intelligent Power Control</h3>
                        <p className="text-lg text-energy font-medium">"Always-On Control"</p>
                      </div>
                      
                      {/* Benefit */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Chooses solar, grid, storage, or DG instantly.
                      </p>
                      
                      {/* Proof Rails - Appear on Hover */}
                      <div className="space-y-2 text-sm text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>&lt;20 ms critical switching</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>&lt;100 ms non-critical loads</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>Zero-export compliant ✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Callout 2: Scalable Storage - Top Right */}
                <div className="lg:col-start-2 lg:row-start-1 group cursor-pointer">
                  <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute top-1/2 right-full w-32 h-px bg-gradient-to-l from-energy/40 to-transparent group-hover:from-energy group-hover:shadow-[0_0_20px_rgba(var(--energy),0.6)] transition-all duration-300 -translate-y-1/2" />
                    
                    {/* Card */}
                    <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 group-hover:border-energy/40 group-hover:shadow-[0_0_40px_-10px_rgba(var(--energy),0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Title & Tagline */}
                      <div className="space-y-2 mb-6">
                        <h3 className="text-3xl font-semibold text-foreground">Scalable Storage</h3>
                        <p className="text-lg text-energy font-medium">"Capacity That Grows"</p>
                      </div>
                      
                      {/* Benefit */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        From 50 kWh to multi-MWh. Extendable warranty.
                      </p>
                      
                      {/* Proof Rails - Appear on Hover */}
                      <div className="space-y-2 text-sm text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>10+ years lifecycle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>Hot-swap modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>Expandable capacity</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Callout 3: Peak & Tariff Intelligence - Bottom Left */}
                <div className="lg:col-start-1 lg:row-start-2 group cursor-pointer">
                  <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute bottom-1/2 left-full w-32 h-px bg-gradient-to-r from-energy/40 to-transparent group-hover:from-energy group-hover:shadow-[0_0_20px_rgba(var(--energy),0.6)] transition-all duration-300 translate-y-1/2" />
                    
                    {/* Card */}
                    <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 group-hover:border-energy/40 group-hover:shadow-[0_0_40px_-10px_rgba(var(--energy),0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Title & Tagline */}
                      <div className="space-y-2 mb-6">
                        <h3 className="text-3xl font-semibold text-foreground">Peak & Tariff Intelligence</h3>
                        <p className="text-lg text-energy font-medium">"Smart Savings"</p>
                      </div>
                      
                      {/* Benefit */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Flattens peaks, shifts ToD, saves in ₹.
                      </p>
                      
                      {/* Proof Rails - Appear on Hover */}
                      <div className="space-y-2 text-sm text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>15–30% peak clipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>ToD tariff aware</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>CFO-ready reports</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Callout 4: Certified Safety & Service - Bottom Right */}
                <div className="lg:col-start-2 lg:row-start-2 group cursor-pointer">
                  <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute bottom-1/2 right-full w-32 h-px bg-gradient-to-l from-energy/40 to-transparent group-hover:from-energy group-hover:shadow-[0_0_20px_rgba(var(--energy),0.6)] transition-all duration-300 translate-y-1/2" />
                    
                    {/* Card */}
                    <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 group-hover:border-energy/40 group-hover:shadow-[0_0_40px_-10px_rgba(var(--energy),0.3)] transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Title & Tagline */}
                      <div className="space-y-2 mb-6">
                        <h3 className="text-3xl font-semibold text-foreground">Certified Safety & Service</h3>
                        <p className="text-lg text-energy font-medium">"Built for Trust"</p>
                      </div>
                      
                      {/* Benefit */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Compliant, monitored, SLA-backed.
                      </p>
                      
                      {/* Proof Rails - Appear on Hover */}
                      <div className="space-y-2 text-sm text-muted-foreground/70 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-32 overflow-hidden">
                        <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>IEC/IS certified</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>&lt;4 hr triage response</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-energy flex-shrink-0" />
                          <span>T+1 onsite (metros)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Sticky CTA */}
            <div className="flex justify-center mt-20">
              <Button 
                size="lg"
                className="bg-energy hover:bg-energy-dark text-white shadow-xl hover:shadow-[0_0_50px_rgba(var(--energy),0.5)] px-12 py-8 text-xl font-semibold rounded-2xl border-2 border-energy-bright/30 transition-all duration-300 group"
              >
                Get My ROI Estimate
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

          </div>
        </section>

        {/* Scalability Story - Build as You Grow */}
        <StorySection>
          <div className="max-w-6xl mx-auto px-8 py-32">
            <StoryChapter
              kicker="Infinite Scale"
              headline="Start small. Scale infinitely. Never rebuild."
              narrative="One 100 kWh system. Or 100 linked together. The architecture is identical. Stack units like building blocks—each one autonomous, all coordinated. If one needs maintenance, the others continue. This is redundancy by design."
            />

            <div className="grid md:grid-cols-3 gap-12 mt-24">
              <AnimatedCard animation="fade-up" delay={0} hover="lift">
                <CardContent className="pt-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">Multi-Stack Linking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Connect 2 units or 200. Each system communicates in real-time, sharing load intelligently. Scale your capacity without replacing infrastructure.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Hot-swap modules without downtime</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Unified monitoring across all stacks</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={100} hover="lift">
                <CardContent className="pt-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Repeat className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">Built-In Redundancy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    N+1 architecture as standard. One unit fails? The system reroutes power instantly. Your operations never notice. Your engineers get an alert, not an emergency.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Automatic failover in &lt;50ms</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Self-healing battery management</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={200} hover="lift">
                <CardContent className="pt-8 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-light text-foreground">Future-Proof Investment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your first unit in 2025 will still integrate seamlessly with units you buy in 2035. Backward compatible. Forward thinking. That's the NESS promise.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>25-year lifecycle guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Software updates for life</span>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </StorySection>

        {/* Case Study - Numbers first */}
        <StorySection background="muted">
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-light text-foreground mb-4">
                Apex Auto Components
              </h2>
              <p className="text-xl text-muted-foreground">Chennai manufacturing, 2 MW facility</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Chart first */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="space-y-8">
                    <div className="text-center pb-6 border-b border-border/20">
                      <div className="text-sm text-muted-foreground mb-2">Investment</div>
                      <div className="text-5xl font-light text-foreground">₹1.8 Cr</div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-baseline">
                        <div className="text-sm text-muted-foreground">Demand charges cut</div>
                        <div className="text-2xl font-medium text-primary">₹96L/yr</div>
                      </div>

                      <div className="flex justify-between items-baseline">
                        <div className="text-sm text-muted-foreground">Diesel eliminated</div>
                        <div className="text-2xl font-medium text-primary">₹18L/yr</div>
                      </div>

                      <div className="pt-6 border-t border-border/20 flex justify-between items-baseline">
                        <div className="text-sm text-muted-foreground">Annual savings</div>
                        <div className="text-3xl font-medium text-primary">₹1.18 Cr</div>
                      </div>

                      <div className="pt-6 flex justify-between items-baseline">
                        <div className="text-sm text-muted-foreground">Payback</div>
                        <div className="text-4xl font-bold text-foreground">18 months</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brief story */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  2 MW factory. Peak demand charges: ₹96L annually. Diesel running 12 hours daily.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Installed 3 MWh NESS systems. Peak demand cut by 62%. Diesel generator retired. System paid back in 18 months.
                </p>

                <div className="pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Peak: 2.8 MW → 1.06 MW
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Microgrid activated 47 times in Year 1
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Zero production downtime
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-base text-muted-foreground italic">
                    "System paid for itself faster than we financed it."
                    <br />
                    <span className="text-foreground font-medium">— Rajesh Kumar, CFO</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StorySection>

        {/* Proof Section - Social Proof */}
        <StorySection>
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="text-center space-y-12 mb-20">
              <AppleHeadline
                primary="While others shut down"
                secondary="our customers stayed open."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <AnimatedCard animation="fade-up" delay={0} hover="lift">
                <CardContent className="pt-8 space-y-6">
                  <WebPImage
                    src={officeInterior}
                    alt="TechPark Bangalore powered by NESS energy storage"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-xl font-semibold">TechPark Bangalore</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Zero tenant complaints during the 6-hour grid failure. 
                    Our property value increased 15% after NESS installation."
                  </p>
                  <div className="text-2xl font-bold text-primary">₹8.2Cr value added</div>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard animation="fade-up" delay={100} hover="lift">
                <CardContent className="pt-8 space-y-6">
                  <WebPImage
                    src={nessCube}
                    alt="Hospital facility with NESS backup power"
                    className="w-full h-48 object-contain rounded-lg bg-muted/20"
                  />
                  <h3 className="text-xl font-semibold">Mumbai Healthcare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "During the 18-hour blackout, our ICU never missed a heartbeat. 
                    96 lives protected with seamless backup power."
                  </p>
                  <div className="text-2xl font-bold text-primary">100% uptime</div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </StorySection>

        {/* ROI Calculator Section */}
        <StorySection background="muted">
          <div id="calculator" className="max-w-4xl mx-auto px-8 py-32">
            <div className="text-center mb-16">
              <AppleHeadline
                primary="Your business needs are unique."
                secondary="Your savings will be too."
              />
            </div>

            <AnimatedCard hover="lift" className="bg-card">
              <CardContent className="pt-12 pb-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-lg font-medium text-foreground">
                      What's your monthly electricity spend?
                    </label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">₹</span>
                      <Input
                        type="number"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(e.target.value)}
                        className="pl-12 pr-6 py-8 text-3xl font-light text-center rounded-2xl border-2 focus:border-primary"
                        placeholder="500000"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Enter your average monthly electricity bill</p>
                  </div>

                  {savings && (
                    <div className="pt-8 space-y-6 border-t border-border/20 animate-fade-in">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center space-y-2">
                          <div className="text-sm text-muted-foreground">Annual Savings</div>
                          <div className="text-3xl font-bold text-primary">
                            {formatCurrency(savings.annualSavings)}
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <div className="text-sm text-muted-foreground">Payback Period</div>
                          <div className="text-3xl font-bold text-foreground">
                            {savings.paybackMonths} months
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <div className="text-sm text-muted-foreground">25-Year Value</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            {formatCurrency(savings.twentyFiveYearValue)}
                          </div>
                        </div>
                      </div>

                      <div className="text-center pt-6">
                        <MagneticButton size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl">
                          Get Detailed Proposal
                          <ArrowRight className="ml-3 w-5 h-5" />
                        </MagneticButton>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </StorySection>

        {/* Final CTA Section */}
        <StorySection>
          <div className="max-w-4xl mx-auto px-8 py-32">
            <div className="text-center space-y-16">
              <AppleHeadline
                primary="Transform your facility's"
                secondary="energy economics."
              />
              
              <AnimatedCard hover="glow" className="bg-card max-w-2xl mx-auto">
                <CardContent className="pt-12 pb-12">
                  <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    setFormErrors({});
                    const validation = contactSchema.safeParse(formData);
                    if (!validation.success) {
                      const errors: Record<string, string> = {};
                      validation.error.errors.forEach(err => {
                        if (err.path[0]) errors[err.path[0].toString()] = err.message;
                      });
                      setFormErrors(errors);
                      return;
                    }
                    // Handle form submission
                    const message = `New C&I inquiry from ${encodeURIComponent(formData.company)}. Contact: ${encodeURIComponent(formData.contact)}. Monthly spend: ₹${encodeURIComponent(formData.monthlySpend)}`;
                    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
                  }}>
                    <div className="space-y-2">
                      <Input
                        placeholder="Company name"
                        className={`text-lg py-6 border-2 focus:border-primary transition-colors rounded-xl ${formErrors.company ? 'border-red-500' : ''}`}
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      />
                      {formErrors.company && <p className="text-sm text-red-500">{formErrors.company}</p>}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Contact person name"
                        className={`text-lg py-6 border-2 focus:border-primary transition-colors rounded-xl ${formErrors.contact ? 'border-red-500' : ''}`}
                        value={formData.contact}
                        onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))}
                      />
                      {formErrors.contact && <p className="text-sm text-red-500">{formErrors.contact}</p>}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Monthly electricity spend (₹)"
                        type="number"
                        className={`text-lg py-6 border-2 focus:border-primary transition-colors rounded-xl ${formErrors.monthlySpend ? 'border-red-500' : ''}`}
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData(prev => ({ ...prev, monthlySpend: e.target.value }))}
                      />
                      {formErrors.monthlySpend && <p className="text-sm text-red-500">{formErrors.monthlySpend}</p>}
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-2xl text-lg hover:scale-105 transition-transform duration-300"
                    >
                      Request Technical Consultation
                    </Button>
                  </form>
                </CardContent>
              </AnimatedCard>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Cloud className="w-4 h-4 flex-shrink-0" />
                <span>Trusted by 2,800+ industrial facilities across India</span>
              </div>
            </div>
          </div>
        </StorySection>
      </div>
    </Layout>
  );
};

export default CommercialEnhanced;
