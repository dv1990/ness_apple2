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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-whisper">
        
        {/* Subtle background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            <img 
              src={heroHomeowners}
              alt="Uninterrupted power for your home"
              className="w-full h-full object-cover opacity-[0.03] scale-105"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-pearl via-whisper to-pearl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
          
          <div className="space-y-20 animate-fade-up">
            
            {/* The Promise */}
            <div className="space-y-24">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-charcoal leading-[1.05] tracking-tight">
                Power that never
                <br />
                lets you down.
              </h1>
              
              <p className="text-3xl md:text-4xl text-charcoal/60 font-extralight max-w-3xl mx-auto leading-[1.4]">
                The power system you'll never think about.
              </p>
            </div>

            {/* Two Clear Paths */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/residential" className="w-full sm:w-auto group">
                <Button size="lg" className="bg-charcoal text-pearl hover:bg-graphite w-full sm:w-auto px-12 py-8 text-xl rounded-full transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6" />
                    <span>For Your Home</span>
                  </div>
                </Button>
              </Link>

              <Link to="/commercial" className="w-full sm:w-auto group">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-12 py-8 text-xl border-platinum text-charcoal hover:bg-whisper rounded-full transition-all duration-300">
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
          <div className="flex flex-col items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
            <div className="w-6 h-10 rounded-full border-2 border-silver/30 flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-charcoal rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NESS */}
      <section className="py-48 bg-pearl">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center space-y-40">
            
            {/* Core Philosophy */}
            <div className="space-y-24">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                Why NESS?
              </h2>
              <p className="text-2xl md:text-3xl text-charcoal/60 font-extralight max-w-4xl mx-auto leading-[1.6]">
                Technology should disappear.
              </p>
            </div>

            {/* The Chemistry */}
            <div className="space-y-20 max-w-3xl mx-auto">
              <div className="space-y-12">
                <p className="text-4xl md:text-6xl font-extralight text-charcoal leading-tight">
                  LiFePO₄
                </p>
                <p className="text-lg uppercase tracking-[0.3em] text-silver/60">
                  The chemistry that lets you forget
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-charcoal/50 font-light leading-relaxed">
                Because peace of mind shouldn't compromise.
              </p>
            </div>

            {/* Proven Trust */}
            <div className="space-y-20">
              <div className="space-y-12">
                <div className="text-7xl md:text-9xl font-extralight text-charcoal tracking-tight">
                  10,000+
                </div>
                <p className="text-xl md:text-2xl text-charcoal/50 font-light leading-relaxed max-w-2xl mx-auto">
                  families trust NESS.
                </p>
              </div>

              <p className="text-lg md:text-xl text-silver/60 font-light max-w-2xl mx-auto leading-relaxed">
                From desert heat to coastal storms.<br />
                Day after day. Year after year.
              </p>
            </div>

            {/* The Unexpected Moment */}
            <div className="pt-16 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl text-charcoal/40 font-extralight italic leading-relaxed">
                "In 10 years, we've never had to explain<br className="hidden md:block" /> what peace of mind means to a family who has it."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Choose Your Path - Clear next step */}
      <section className="py-48 bg-whisper">
        <div className="max-w-5xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
              Choose your solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Homes */}
            <Link to="/residential" className="group">
              <div className="bg-pearl border border-platinum rounded-3xl p-20 hover:border-silver/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[440px] flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="w-20 h-20 rounded-full bg-whisper flex items-center justify-center">
                    <Home className="w-10 h-10 text-charcoal" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-extralight text-charcoal">Homes</h3>
                    <p className="text-2xl text-charcoal/50 font-light leading-relaxed">
                      Never notice an outage.
                    </p>
                  </div>
                </div>
                <div className="pt-12 flex items-center gap-3 text-charcoal/60 text-lg group-hover:gap-4 group-hover:text-charcoal transition-all">
                  <span className="font-light">Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Business */}
            <Link to="/commercial" className="group">
              <div className="bg-pearl border border-platinum rounded-3xl p-20 hover:border-silver/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[440px] flex flex-col justify-between">
                <div className="space-y-12">
                  <div className="w-20 h-20 rounded-full bg-whisper flex items-center justify-center">
                    <Shield className="w-10 h-10 text-charcoal" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-extralight text-charcoal">Business</h3>
                    <p className="text-2xl text-charcoal/50 font-light leading-relaxed">
                      Uninterrupted operations.
                    </p>
                  </div>
                </div>
                <div className="pt-12 flex items-center gap-3 text-charcoal/60 text-lg group-hover:gap-4 group-hover:text-charcoal transition-all">
                  <span className="font-light">Explore</span>
                  <ArrowRight className="w-5 h-5" />
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
