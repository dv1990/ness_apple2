import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Check, Shield, Home } from "lucide-react";

// Import hero image
import heroHomeowners from "@/assets/hero-homeowners.jpg";

const IndexEnhanced = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section - One Clear Promise */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* Cinematic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <img 
              src={heroHomeowners}
              alt="Uninterrupted power for your home"
              className="w-full h-full object-cover opacity-30 scale-110"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          
          <div className="space-y-20 animate-fade-up">
            
            {/* The Promise */}
            <div className="space-y-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-pearl leading-[1.05] tracking-tight">
                Power that never
                <br />
                lets you down.
              </h1>
              
              <p className="text-2xl md:text-3xl text-pearl/60 font-light max-w-3xl mx-auto leading-relaxed">
                For your family's peace of mind.
              </p>
            </div>

            {/* Two Clear Paths */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/residential" className="w-full sm:w-auto group">
                <Button size="lg" className="btn-sonos w-full sm:w-auto px-12 py-8 text-xl">
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6" />
                    <span>For Your Home</span>
                  </div>
                </Button>
              </Link>

              <Link to="/commercial" className="w-full sm:w-auto group">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-12 py-8 text-xl border-pearl/20 text-pearl hover:bg-pearl/10">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6" />
                    <span>For Your Business</span>
                  </div>
                </Button>
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
          <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-6 h-10 rounded-full border-2 border-pearl/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-energy rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Through Story */}
      <section className="py-48 bg-gradient-to-b from-black to-background">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center space-y-32">
            
            {/* The Question */}
            <div className="space-y-16">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                What makes NESS different?
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground/80 font-light max-w-4xl mx-auto leading-relaxed">
                We asked ourselves a simple question:<br />
                <span className="text-foreground italic">"What could we never compromise on?"</span>
              </p>
            </div>

            {/* The Answer */}
            <div className="space-y-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                The answer led us to a material that costs more,<br />
                takes longer to source, and is harder to work with.
              </p>
              <p className="text-3xl md:text-5xl font-light text-energy leading-tight py-8">
                LiFePO₄
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Because when it's in your home, next to your family,<br />
                <span className="text-foreground font-normal">"good enough" isn't good enough.</span>
              </p>
            </div>

            {/* The Reality */}
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                
                {/* Industry Standard */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 p-12 border border-border/50">
                  <div className="space-y-6 text-center">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground/60">Industry Standard</p>
                    <div className="text-6xl font-light text-muted-foreground">150°C</div>
                    <p className="text-base text-muted-foreground/80">Thermal runaway begins</p>
                  </div>
                </div>

                {/* NESS Standard */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-energy/10 to-energy/5 p-12 border-2 border-energy/30 shadow-[0_0_60px_-15px_rgba(var(--energy),0.3)]">
                  <div className="space-y-6 text-center">
                    <p className="text-sm uppercase tracking-wider text-energy/60">NESS Standard</p>
                    <div className="text-6xl font-light text-energy">600°C</div>
                    <p className="text-base text-energy">Remains stable</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
                That's not a small difference.<br />
                That's the difference between worrying and not worrying.
              </p>
            </div>

            {/* The Proof */}
            <div className="space-y-12">
              <div className="inline-block px-2 py-1 rounded-full bg-energy/5 border border-energy/10">
                <span className="text-sm uppercase tracking-wider text-energy/60">Tested in the real world</span>
              </div>
              
              <div className="space-y-6">
                <div className="text-7xl md:text-8xl font-extralight text-foreground">
                  10,000<span className="text-energy">+</span>
                </div>
                <p className="text-xl text-muted-foreground">
                  Installations. Homes and businesses.<br />
                  Extreme heat. Monsoons. Daily cycling.
                </p>
              </div>

              <div className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-energy/10 border border-energy/20">
                <Check className="w-6 h-6 text-energy" />
                <span className="text-xl text-foreground font-light">Zero thermal incidents</span>
              </div>

              <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed pt-8">
                Numbers are just numbers.<br />
                Until they represent families sleeping soundly at night.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Choose Your Path - Clear next step */}
      <section className="py-48 bg-background">
        <div className="max-w-5xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
              Choose your solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Homes */}
            <Link to="/residential" className="group">
              <div className="bg-gradient-to-br from-energy/5 to-energy/10 border-2 border-energy/30 rounded-3xl p-16 hover:border-energy/50 hover:shadow-[0_0_50px_-15px_rgba(var(--energy),0.3)] transition-all duration-500 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-full bg-energy/20 flex items-center justify-center">
                    <Home className="w-10 h-10 text-energy" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-light text-foreground">For Homes</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Seamless backup power.<br />
                      Your family never notices when the grid fails.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-center gap-3 text-energy text-lg group-hover:gap-4 transition-all">
                  <span>Explore systems</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>

            {/* Business */}
            <Link to="/commercial" className="group">
              <div className="bg-card border-2 border-border rounded-3xl p-16 hover:border-energy/30 hover:shadow-[0_0_40px_-15px_rgba(var(--energy),0.2)] transition-all duration-500 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-full bg-energy/10 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-energy" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-light text-foreground">For Business</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Industrial-grade reliability.<br />
                      Zero downtime. Zero diesel. Zero compromise.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-center gap-3 text-energy text-lg group-hover:gap-4 transition-all">
                  <span>Explore systems</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </Layout>
  );
};

export default IndexEnhanced;
