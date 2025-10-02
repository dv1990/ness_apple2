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
      {/* Hero - Precision Engineering */}
      <section className="min-h-screen bg-background flex items-center">
        
        <div className="max-w-[1280px] mx-auto px-8 py-24 w-full">
          <div className="text-center space-y-12">
            
            {/* Eyebrow */}
            <div className="text-caption text-muted-foreground uppercase tracking-[0.12em] font-medium">
              Battery Systems
            </div>
            
            {/* Headline */}
            <h1 className="text-display-large md:text-[8rem] font-light text-foreground leading-[0.9] tracking-[-0.04em]">
              Engineered
              <br />
              for reality.
            </h1>

            {/* Core Stats - Honest Numbers */}
            <div className="max-w-5xl mx-auto pt-16 pb-8">
              <div className="grid grid-cols-4 gap-12">
                <div className="space-y-2">
                  <div className="text-6xl font-light text-primary tabular-nums">
                    6000
                  </div>
                  <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                    Cycle Life
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-6xl font-light text-foreground tabular-nums">
                    15
                  </div>
                  <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                    Year Warranty
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-6xl font-light text-foreground tabular-nums">
                    {"<35"}
                  </div>
                  <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                    dB Noise
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-6xl font-light text-primary tabular-nums">
                    0
                  </div>
                  <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                    Fire Events
                  </div>
                </div>
              </div>
            </div>

            {/* Direct statement */}
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
              LiFePO₄ cells. Precision matching. AI monitoring. 
              Tested in Indian conditions. Backed by data.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/contact">
                <MagneticButton variant="primary" size="lg" className="text-base font-medium px-10 py-5">
                  Request Specifications
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology - Engineering Focus */}
      <section className="py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-display font-light text-foreground leading-tight tracking-[-0.03em]">
              Three technical decisions.
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Each one critical to performance and longevity.
            </p>
          </div>

          {/* Decision 1: Chemistry */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <div className="inline-block px-5 py-1.5 bg-primary/10 rounded-full">
                <span className="text-caption text-primary uppercase tracking-[0.08em]">Chemistry</span>
              </div>
              <h3 className="text-display-medium font-light text-foreground leading-tight tracking-[-0.02em]">
                LiFePO₄
              </h3>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Not the highest density. Not the lowest cost. 
                But thermally stable to 600°C. No thermal runaway under any normal use condition.
              </p>
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-foreground tabular-nums">6000</div>
                  <div className="text-body text-muted-foreground">cycles at 80% DoD</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-primary tabular-nums">0</div>
                  <div className="text-body text-muted-foreground">thermal events recorded</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden">
              <WebPImage
                src={batteryTechnology}
                alt="LiFePO4 cell testing"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Decision 2: Manufacturing */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative rounded-2xl overflow-hidden order-2 lg:order-1">
              <WebPImage
                src={rdLaboratory}
                alt="Manufacturing process"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block px-5 py-1.5 bg-primary/10 rounded-full">
                <span className="text-caption text-primary uppercase tracking-[0.08em]">Manufacturing</span>
              </div>
              <h3 className="text-display-medium font-light text-foreground leading-tight tracking-[-0.02em]">
                Seven quality gates
              </h3>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Measure voltage. Grade by capacity. Match cells within ±2mV. 
                Assemble at controlled temperature. Validate full system. Apply firmware protection. Ship.
              </p>
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-primary tabular-nums">±2mV</div>
                  <div className="text-body text-muted-foreground">matching precision</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-foreground tabular-nums">100%</div>
                  <div className="text-body text-muted-foreground">functional test rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3: Software */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-5 py-1.5 bg-primary/10 rounded-full">
                <span className="text-caption text-primary uppercase tracking-[0.08em]">Software</span>
              </div>
              <h3 className="text-display-medium font-light text-foreground leading-tight tracking-[-0.02em]">
                Continuous monitoring
              </h3>
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Cell voltage sampled every millisecond. Time-of-day optimization. 
                Grid export control. Cloud logging. OTA firmware updates.
              </p>
              <div className="pt-6 space-y-3 border-t border-border">
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-primary tabular-nums">1000</div>
                  <div className="text-body text-muted-foreground">samples per second</div>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="text-5xl font-light text-foreground tabular-nums">24/7</div>
                  <div className="text-body text-muted-foreground">cloud connectivity</div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden">
              <WebPImage
                src={systemArchitecture}
                alt="System monitoring interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Recipe - Manufacturing Process */}
      <section className="py-32 bg-muted/10">
        <WhyNess />
      </section>

      {/* For Installers */}
      <section className="py-32 bg-background">
        <div className="max-w-[1280px] mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-display font-light text-foreground leading-tight tracking-[-0.03em]">
              For certified installers
            </h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Systems designed for efficient installation and zero callbacks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="space-y-4 text-center">
              <div className="text-7xl font-light text-foreground tabular-nums">
                2-4h
              </div>
              <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                Install Time
              </div>
              <p className="text-body text-muted-foreground pt-2 leading-relaxed">
                Standard mounting. MC4 connectors. No programming required.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="text-7xl font-light text-primary tabular-nums">
                99%
              </div>
              <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                First-Time Success
              </div>
              <p className="text-body text-muted-foreground pt-2 leading-relaxed">
                Clear documentation. Video guides. Technical support available.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="text-7xl font-light text-foreground tabular-nums">
                {"<1%"}
              </div>
              <div className="text-caption text-muted-foreground uppercase tracking-[0.08em]">
                Callback Rate
              </div>
              <p className="text-body text-muted-foreground pt-2 leading-relaxed">
                Factory tested. Quality assured. Remote diagnostics enabled.
              </p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/installers">
              <MagneticButton variant="secondary" size="lg" className="text-base font-medium px-10 py-5">
                Become Certified
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-muted/5">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <div className="space-y-16">
            
            <div className="space-y-8">
              <h2 className="text-display font-light text-foreground leading-tight tracking-[-0.03em]">
                See it yourself
              </h2>
              
              <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
                Request technical specifications or schedule a product demonstration.
              </p>
            </div>

            <Link to="/contact">
              <MagneticButton variant="primary" size="lg" className="text-base font-medium px-10 py-5">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyEnhanced;
