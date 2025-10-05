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

      {/* The One Thing That Matters */}
      <section className="py-48 bg-gradient-to-b from-black to-background">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center space-y-32">
            
            {/* The reveal */}
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                What makes NESS different?
              </h2>
              <p className="text-3xl md:text-5xl font-light text-energy leading-tight">
                LiFePO₄
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The safest battery chemistry on Earth.<br />
                While others risk catching fire at 150°C,<br />
                NESS batteries stay stable up to 600°C.
              </p>
            </div>

            {/* Visual comparison - simplified */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Others */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50/20 to-red-100/30 dark:from-red-950/20 dark:to-red-900/30 p-16 border border-red-200/20 dark:border-red-800/20">
                <div className="space-y-6 text-center">
                  <div className="text-7xl font-light text-red-400">150°C</div>
                  <p className="text-lg text-red-500/80">Regular batteries fail</p>
                </div>
              </div>

              {/* NESS */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-energy/10 to-energy/5 p-16 border-2 border-energy/30 shadow-[0_0_60px_-15px_rgba(var(--energy),0.3)]">
                <div className="space-y-6 text-center">
                  <div className="text-7xl font-light text-energy">600°C</div>
                  <p className="text-lg text-energy">NESS stays stable</p>
                </div>
              </div>
            </div>

            {/* Single proof point */}
            <div className="pt-12">
              <div className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-energy/10 border border-energy/20">
                <Check className="w-6 h-6 text-energy" />
                <span className="text-xl text-foreground font-light">0 fire events in 10,000+ installations</span>
              </div>
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
