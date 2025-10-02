import { useState } from "react";
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
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";
import officeInterior from "@/assets/office-interior.jpg";
import nessCube from "@/assets/ness-cube-product.png";

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
        {/* Hero - Proof first */}
        <section className="min-h-screen flex items-center justify-center px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
          
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="space-y-20 animate-fade-in">
              
              <h1 className="text-7xl md:text-9xl font-light text-foreground leading-tight tracking-tight">
                Zero downtime.
              </h1>
              
              <div className="h-px w-32 bg-primary/40 mx-auto" />
              
              {/* ROI Calculator - Immediate */}
              <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-medium text-foreground mb-6">Calculate your savings</h2>
                
                <div className="space-y-4 mb-6">
                  <Input
                    type="number"
                    placeholder="Monthly electricity spend (₹)"
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(e.target.value)}
                    className="text-lg"
                  />
                </div>

                {savings && (
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div>
                      <div className="text-3xl font-light text-primary mb-1">
                        {formatCurrency(savings.annualSavings)}
                      </div>
                      <div className="text-sm text-muted-foreground">Annual savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">
                        {savings.paybackMonths}m
                      </div>
                      <div className="text-sm text-muted-foreground">Payback period</div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industrial battery systems that cut peak demand charges and eliminate diesel.
              </p>
            </div>
          </div>
        </section>

        {/* Human Benefits - The Real Value */}
        <StorySection background="muted">
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="text-center mb-24">
              <AppleHeadline
                primary="Four ways we eliminate"
                secondary="what drains your profits."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <HumanBenefit
                icon={<TrendingUp className="w-10 h-10" />}
                benefit="Peak Shaving"
                proof="Slash demand charges by 60%"
                detail="Our AI predicts your consumption patterns and automatically caps peak loads. What used to cost ₹8 lakhs a month now costs ₹3.2 lakhs."
              />
              
              <HumanBenefit
                icon={<BarChart3 className="w-10 h-10" />}
                benefit="Demand Charge Optimization"
                proof="Pay only for what you actually use"
                detail="Stop subsidizing the grid's infrastructure. Smart arbitrage buys power when it's cheap, stores it, and delivers when rates spike."
              />

              <HumanBenefit
                icon={<Battery className="w-10 h-10" />}
                benefit="Microgrid Mode"
                proof="100% uptime, guaranteed"
                detail="When the grid fails, you don't. Seamless transition to island mode keeps critical operations running without a flicker."
              />

              <HumanBenefit
                icon={<Fuel className="w-10 h-10" />}
                benefit="Diesel Generator Abatement"
                proof="Silent. Clean. 80% cheaper."
                detail="Replace noisy, polluting generators with silent battery systems. Zero emissions, zero maintenance headaches, zero guilt."
              />
            </div>
          </div>
        </StorySection>

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
