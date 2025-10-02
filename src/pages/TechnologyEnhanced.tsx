import Layout from "@/components/Layout";
import { MagneticButton } from "@/components/EnhancedInteractions";
import { Shield, Clock, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WebPImage } from "@/components/ui/webp-image";
import { WhyNess } from "@/components/WhyNess";

// Import images
import batteryTechnology from "@/assets/battery-technology.jpg";
import rdLaboratory from "@/assets/rd-laboratory.jpg";
import systemArchitecture from "@/assets/system-architecture.jpg";

const TechnologyEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Engineering First */}
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-32 w-full">
          <div className="text-center space-y-16">
            
            {/* Opening statement - Deep Tech */}
            <div className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
              Engineering • Innovation • Precision
            </div>
            
            {/* Bold headline */}
            <div className="space-y-8">
              <h1 className="text-7xl md:text-9xl font-extralight text-foreground leading-[0.85] tracking-tight">
                We don't just
                <br />
                build batteries.
              </h1>
              <p className="text-4xl md:text-5xl font-light text-primary">
                We engineer energy systems.
              </p>
            </div>

            {/* Deep Tech Credentials */}
            <div className="max-w-6xl mx-auto pt-16">
              <div className="grid grid-cols-4 gap-8 md:gap-12">
                <div className="space-y-3">
                  <div className="text-6xl md:text-7xl font-extralight text-primary tabular-nums">
                    50K+
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                    Cells Tested
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-6xl md:text-7xl font-extralight text-foreground tabular-nums">
                    7
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                    Quality Steps
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-6xl md:text-7xl font-extralight text-foreground tabular-nums">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                    AI Monitoring
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-6xl md:text-7xl font-extralight text-primary tabular-nums">
                    15+
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em]">
                    Year Design Life
                  </div>
                </div>
              </div>
            </div>

            {/* Mission statement */}
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed pt-8">
              Every cell measured. Every parameter optimized. 
              Every system validated. Because reliability isn't luck—it's engineering.
            </p>

            {/* CTA */}
            <Link to="/contact">
              <MagneticButton variant="primary" size="lg" className="text-lg px-12 py-6">
                Explore the Technology
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* R&D Philosophy - Deep Tech Showcase */}
      <section className="py-40 bg-background">
        <div className="max-w-[1400px] mx-auto px-8">
          
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-tight tracking-tight">
              Science. Not compromise.
            </h2>
            <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
              Three breakthroughs that redefine energy storage.
            </p>
          </div>

          {/* Breakthrough 1: Materials Science */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Materials Science</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                LiFePO₄.
                <br />
                The safe chemistry.
              </h3>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Not the cheapest. Not the densest. But the only chemistry 
                where thermal runaway is physically impossible. That's not marketing. That's physics.
              </p>
              <div className="pt-8 space-y-4">
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-primary tabular-nums">600°C</div>
                  <div className="text-lg text-muted-foreground">Thermal stability threshold</div>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-foreground tabular-nums">0</div>
                  <div className="text-lg text-muted-foreground">Fire incidents in 50,000+ installations</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <WebPImage
                src={batteryTechnology}
                alt="LiFePO4 battery chemistry engineering"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-8">
                <p className="text-sm text-muted-foreground">
                  Every cell undergoes precision spectroscopy analysis
                </p>
              </div>
            </div>
          </div>

          {/* Breakthrough 2: Quality Engineering */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <WebPImage
                src={rdLaboratory}
                alt="NESS quality control laboratory"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-8">
                <p className="text-sm text-muted-foreground">
                  Temperature-controlled assembly environment at 20±2°C
                </p>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Process Engineering</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Seven steps.
                <br />
                Zero shortcuts.
              </h3>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Measure. Grade. Group. Assemble. Qualify. Protect. Deliver. 
                Each step validated. Each parameter logged. Each system tracked.
              </p>
              <div className="pt-8 space-y-4">
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-primary tabular-nums">±2mV</div>
                  <div className="text-lg text-muted-foreground">Cell matching tolerance</div>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-foreground tabular-nums">100%</div>
                  <div className="text-lg text-muted-foreground">Units tested before shipment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Breakthrough 3: Intelligence Layer */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary uppercase tracking-widest">Digital Intelligence</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                AI that never
                <br />
                sleeps.
              </h3>
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Real-time cell balancing. Predictive maintenance. Self-optimization. 
                Your system learns and adapts, 24/7/365.
              </p>
              <div className="pt-8 space-y-4">
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-primary tabular-nums">1000x</div>
                  <div className="text-lg text-muted-foreground">Per second monitoring frequency</div>
                </div>
                <div className="flex items-baseline gap-4">
                  <div className="text-6xl font-extralight text-foreground tabular-nums">40%</div>
                  <div className="text-lg text-muted-foreground">Average bill reduction</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <WebPImage
                src={systemArchitecture}
                alt="NESS AI-powered system architecture"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-8">
                <p className="text-sm text-muted-foreground">
                  Cloud-connected intelligence with edge computing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Recipe - Manufacturing Excellence */}
      <section className="py-40 bg-muted/10">
        <WhyNess />
      </section>

      {/* Engineering Excellence for Partners */}
      <section className="py-40 bg-background">
        <div className="max-w-[1400px] mx-auto px-8">
          
          <div className="text-center mb-32 space-y-8">
            <h2 className="text-6xl md:text-7xl font-extralight text-foreground leading-tight">
              Built for those who
              <br />
              <span className="text-primary">demand perfection</span>
            </h2>
            <p className="text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
              Premium systems for installers who stake their reputation on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-6 text-center">
              <div className="text-8xl font-extralight text-primary tabular-nums">
                2-4
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                Hours to Install
              </div>
              <p className="text-base text-muted-foreground pt-4 leading-relaxed">
                Plug-and-play architecture. No complex configuration. Just works.
              </p>
            </div>

            <div className="space-y-6 text-center">
              <div className="text-8xl font-extralight text-foreground tabular-nums">
                99.8%
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                Success Rate
              </div>
              <p className="text-base text-muted-foreground pt-4 leading-relaxed">
                Comprehensive training. Detailed documentation. Expert support.
              </p>
            </div>

            <div className="space-y-6 text-center">
              <div className="text-8xl font-extralight text-primary tabular-nums">
                0
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                Service Callbacks
              </div>
              <p className="text-base text-muted-foreground pt-4 leading-relaxed">
                Built right. Tested thoroughly. Delivered perfectly.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/installers">
              <MagneticButton variant="secondary" size="lg" className="text-lg px-12 py-6">
                Join the Elite Network
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Statement - One Truth */}
      <section className="py-40 bg-muted/5">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="space-y-20">
            
            <div className="space-y-12">
              <div className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-medium">
                The Future. Today.
              </div>
              
              <h2 className="text-6xl md:text-8xl font-extralight text-foreground leading-tight">
                This is what happens
                <br />
                when engineers
                <br />
                <span className="text-primary">refuse to compromise</span>
              </h2>
              
              <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the precision. Feel the quality. Own the future.
              </p>
            </div>

            <Link to="/contact">
              <MagneticButton variant="primary" size="lg" className="text-lg px-16 py-8">
                See It In Action
                <ArrowRight className="ml-2 w-5 h-5" />
              </MagneticButton>
            </Link>

            <div className="pt-12 text-sm text-muted-foreground">
              Available through certified partners worldwide
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyEnhanced;
