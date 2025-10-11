import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LazySection } from "@/components/ui/lazy-section";
import { usePerformanceTracking } from "@/hooks/use-performance";
import { 
  ArrowRight, 
  Calculator, 
  Award, 
  Users, 
  Wrench, 
  BookOpen, 
  Download, 
  Sparkles, 
  CheckCircle, 
  Target, 
  Clock, 
  Play 
} from "lucide-react";
import installerHero from "@/assets/installer-hero.jpg";
import trainingWorkshop from "@/assets/training-workshop.jpg";
import configuratorTool from "@/assets/configurator-tool.jpg";

const Installers = () => {
  const { endTracking } = usePerformanceTracking('Installers');
  React.useEffect(() => endTracking, [endTracking]);

  const challenges = [
    {
      challenge: "Complex Installations",
      icon: Wrench,
      solution: "Every home is different. Every customer has unique needs.",
      benefit: "Our configurator simplifies complexity—auto-sizing, smart recommendations, zero guesswork. Install with confidence, every time."
    },
    {
      challenge: "Team Attrition",
      icon: Users,
      solution: "Good people leave. New hires need training. Time is money.",
      benefit: "Our certification programs make reskilling fast and simple. Turn beginners into experts in weeks, not years."
    },
    {
      challenge: "Product Reliability",
      icon: Award,
      solution: "Callbacks kill your reputation and margins.",
      benefit: "NESS batteries work flawlessly for 10+ years. Robust, tested, reliable. Install once, earn trust forever."
    }
  ];

  const partnerTiers = [
    {
      tier: "Registered",
      icon: Users,
      description: "Start earning better margins immediately",
      features: [
        "20% higher margins than competitors",
        "Zero-complexity product catalog",
        "Installation guides that actually work", 
        "Email support within 4 hours"
      ],
      highlight: false
    },
    {
      tier: "Certified",
      icon: Award,
      description: "Build a profitable, scalable business",
      features: [
        "30% higher margins with volume pricing",
        "AI configurator saves 2 hours per quote",
        "Fast-track training for new hires",
        "Priority support—phone, chat, WhatsApp",
        "Marketing support to grow your brand"
      ],
      highlight: true
    },
    {
      tier: "Elite",
      icon: Target,
      description: "Maximum profitability with exclusive benefits",
      features: [
        "40% margins—industry-leading pricing",
        "Dedicated account manager who knows your business", 
        "On-site training at your location",
        "VIP technical support",
        "Lead generation—we send customers to you",
        "Advanced certification programs"
      ],
      highlight: false
    }
  ];

  const resources = [
    {
      title: "Technical Documentation",
      description: "Comprehensive specifications and installation guidelines",
      icon: Download,
      action: "Download"
    },
    {
      title: "Configuration Tools", 
      description: "Advanced system sizing and proposal generation",
      icon: Calculator,
      action: "Launch Tool"
    },
    {
      title: "Training Portal",
      description: "Online courses and certification programs", 
      icon: BookOpen,
      action: "Access Portal"
    },
    {
      title: "Technical Support",
      description: "Expert assistance and troubleshooting guidance",
      icon: Wrench,
      action: "Get Support"
    }
  ];

  return (
    <Layout>
      {/* Apple-Grade Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <OptimizedImage 
            src={installerHero} 
            alt="Professional installer"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent w-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 pb-24 w-full">
          <div className="max-w-4xl space-y-12">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 text-primary-foreground/70">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-xs font-mono uppercase tracking-[0.4em]">Partner Network</span>
            </div>

            {/* Headline */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-8xl font-extralight text-primary-foreground leading-[0.85] tracking-tight">
                You power homes.
                <br />
                <span className="text-primary font-light">We power your success.</span>
              </h1>

              <p className="text-xl font-light text-primary-foreground/90 leading-relaxed max-w-2xl">
                Higher margins. Lower costs. Zero callbacks. NESS batteries that work flawlessly for 10+ years—so you can build a business on trust, not troubleshooting.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6 pt-4">
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105">
                Become a partner
              </Button>
              
              <button className="group inline-flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                <div className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors duration-300">
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </div>
                <span className="font-light">Watch overview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8">
          <div className="flex flex-col items-center space-y-2 text-primary-foreground/50">
            <span className="text-xs font-light tracking-wider">Explore</span>
            <div className="w-px h-8 bg-primary-foreground/20"></div>
            <ArrowRight className="w-3 h-3 rotate-90" />
          </div>
        </div>
      </section>

      {/* Challenges We Understand */}
      <LazySection sectionName="challenges" className="py-32 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Section Header */}
          <div className="max-w-4xl mb-20 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Your Challenges
              </span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-extralight tracking-tight text-foreground leading-[0.9]">
              We understand your world.
              <br />
              <span className="text-muted-foreground/60">Because we live in it.</span>
            </h2>
            
            <p className="text-xl font-light text-muted-foreground leading-[1.7] max-w-3xl">
              Every installation is different. Teams change. Customers expect perfection. We built NESS to solve the real problems installers face every day.
            </p>
          </div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((item, index) => (
              <div 
                key={item.challenge}
                className="group relative p-10 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="space-y-6">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-foreground">
                      {item.challenge}
                    </h3>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed italic">
                      {item.solution}
                    </p>
                    <p className="text-base text-foreground leading-[1.7] pt-2">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Partnership Excellence */}
      <LazySection sectionName="partnerships" className="py-40">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Section Header */}
          <div className="max-w-4xl mb-32 space-y-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Partnership Tiers
              </span>
            </div>
            
            <h2 className="text-7xl md:text-8xl font-extralight tracking-tight text-foreground leading-[0.8]">
              Higher margins.
              <br />
              <span className="text-muted-foreground/60">Lower costs.</span>
            </h2>
            
            <p className="text-xl font-light text-muted-foreground leading-[1.7] max-w-2xl">
              Join installers who earn 20-40% more per project with NESS. Better products. Better support. Better business.
            </p>
          </div>

          {/* Partnership Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <div 
                key={tier.tier}
                className={`group relative rounded-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  tier.highlight 
                    ? 'bg-foreground text-background shadow-2xl' 
                    : 'bg-background border border-border/50 hover:border-border'
                }`}
              >
                <div className="p-12 space-y-8">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    tier.highlight ? 'bg-background/10' : 'bg-muted/50'
                  }`}>
                    <tier.icon className={`w-8 h-8 ${
                      tier.highlight ? 'text-background' : 'text-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className={`text-3xl font-light mb-3 ${
                        tier.highlight ? 'text-background' : 'text-foreground'
                      }`}>
                        {tier.tier}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        tier.highlight ? 'text-background/70' : 'text-muted-foreground'
                      }`}>
                        {tier.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {tier.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            tier.highlight ? 'bg-background/60' : 'bg-primary'
                          }`}></div>
                          <span className={`text-sm ${
                            tier.highlight ? 'text-background/80' : 'text-muted-foreground'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <Button 
                    className={`w-full rounded-xl transition-all duration-300 ${
                      tier.highlight 
                        ? 'bg-background text-foreground hover:bg-background/90' 
                        : 'bg-foreground text-background hover:bg-foreground/90'
                    }`}
                  >
                    {tier.highlight ? 'Apply now' : `Join as ${tier.tier}`}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Advanced Configurator Showcase */}
      <LazySection sectionName="configurator" className="py-40 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Smart Tools
                  </span>
                </div>

                <h2 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  Complex installations,
                  <br />
                  made simple
                </h2>

                <p className="text-lg font-light text-muted-foreground leading-[1.7]">
                  Every home is different. Our AI configurator handles the complexity for you—auto-sizing, smart recommendations, professional documentation. Save 2 hours per quote. Close deals faster.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Intelligent Analysis</h3>
                  <div className="space-y-3">
                    {[
                      "Load pattern analysis",
                      "Optimal component sizing", 
                      "ROI calculations",
                      "Professional documentation"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-xl font-medium">
                <Calculator className="mr-2 w-5 h-5" />
                Launch configurator
              </Button>
            </div>

            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src={configuratorTool}
                  alt="System configurator tool"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Resources Grid */}
      <LazySection sectionName="resources" className="py-40">
        <div className="max-w-[1600px] mx-auto px-8">
          
          {/* Header */}
          <div className="max-w-4xl mb-20 space-y-8">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Resources
              </span>
            </div>
            
            <h2 className="text-6xl font-extralight text-foreground leading-tight tracking-tight">
              Everything you need.
              <br />
              <span className="text-muted-foreground/60">Nothing you don't.</span>
            </h2>
            
            <p className="text-lg font-light text-muted-foreground leading-[1.7] max-w-2xl">
              No jargon. No complexity. Just tools and support that help you install faster, earn more, and build a reputation for reliability.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <div key={resource.title} className="group p-8 rounded-2xl border border-border/50 hover:border-border transition-all duration-500 hover:-translate-y-1 cursor-pointer">
                <div className="space-y-6">
                  
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-muted transition-colors duration-300">
                    <resource.icon className="w-6 h-6 text-foreground" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <button className="group/btn inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    <span>{resource.action}</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Training Excellence */}
      <LazySection sectionName="training" className="py-40 bg-muted/20">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src={trainingWorkshop}
                  alt="Training workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-1 h-1 rounded-full bg-primary"></div>
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                    Excellence
                  </span>
                </div>

                <h2 className="text-6xl font-extralight text-foreground leading-[0.85] tracking-tight">
                  Turn beginners
                  <br />
                  into experts
                </h2>

                <p className="text-lg font-light text-muted-foreground leading-[1.7]">
                  Team attrition doesn't have to slow you down. Our fast-track certification programs get new hires productive in weeks, not years. Keep growing, even when people change.
                </p>
              </div>

              {/* Training Options */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Online Learning</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
                    Self-paced courses that make complex systems simple. Your new hires can learn anytime, anywhere—and you stay productive.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">Hands-on Workshops</h3>
                  <p className="text-sm text-muted-foreground leading-[1.7]">
                    Real-world training at our facilities or yours. Build confidence through practice. Certification that means something.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-xl font-medium">
                  Start learning
                </Button>
                
                <button className="group inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <span className="text-sm">Schedule workshop</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
       </LazySection>

      {/* Premium CTA */}
      <section className="relative py-40 overflow-hidden">
        {/* Background placeholder for image */}
        <div className="absolute inset-0 bg-muted/20">
          {/* IMAGE PLACEHOLDER: Diverse installer community - mix of installers, engineers, and families they've helped, working together on solar projects, warm and inspiring atmosphere, Indian context */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-8 text-center space-y-16">
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center space-x-2 justify-center mb-8">
              <div className="w-1 h-1 rounded-full bg-primary"></div>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                Join the Movement
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-[0.9] tracking-tight">
              Build more than systems.
              <br />
              <span className="text-primary font-light">Build a legacy.</span>
            </h2>
            
            <p className="text-xl font-light text-muted-foreground leading-[1.7] max-w-3xl mx-auto">
              Join thousands of installers who don't just install batteries—they power homes, create comfort, and build reputations on trust. Because at NESS, we believe the best installers deserve the best partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-12 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:scale-105">
              Start your partnership
            </Button>
            
            <button className="group inline-flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors duration-300">
              <span className="font-light text-lg">Talk to our team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-16 grid grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-border/30">
            <div className="space-y-2">
              <div className="text-4xl font-extralight text-foreground">5000+</div>
              <div className="text-sm text-muted-foreground">Certified Installers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extralight text-foreground">40%</div>
              <div className="text-sm text-muted-foreground">Average Margin Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-extralight text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
          </div>
        </div>
       </section>
    </Layout>
  );
};

export default React.memo(Installers);