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
            <div className="space-y-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-charcoal leading-[1.05] tracking-tight">
                Power that never
                <br />
                lets you down.
              </h1>
              
              <p className="text-2xl md:text-3xl text-silver font-light max-w-3xl mx-auto leading-relaxed">
                For your family's peace of mind.
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

      {/* What Makes NESS Different */}
      <section className="py-48 bg-pearl">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center space-y-32">
            
            {/* Core Philosophy */}
            <div className="space-y-16">
              <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
                What makes NESS different?
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground/80 font-light max-w-4xl mx-auto leading-relaxed">
                We believe technology should disappear.<br />
                <span className="text-foreground italic">You shouldn't notice your power system—until you do.</span>
              </p>
            </div>

            {/* The Commitment */}
            <div className="space-y-16 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Most companies optimize for what's easiest to manufacture.<br />
                We optimize for what's safest in your home.
              </p>
              
              <div className="py-16 space-y-8">
                <p className="text-3xl md:text-5xl font-light text-charcoal leading-tight">
                  LiFePO₄
                </p>
                <p className="text-base uppercase tracking-widest text-silver">
                  The stable choice
                </p>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                It costs more. It's harder to source.<br />
                <span className="text-foreground font-normal">And it's the only chemistry we'll put our name on.</span>
              </p>
            </div>

            {/* Proven Trust */}
            <div className="space-y-16">
              <div className="inline-block px-6 py-2 rounded-full bg-whisper border border-platinum">
                <span className="text-sm uppercase tracking-wider text-silver">Proven in the field</span>
              </div>
              
              <div className="space-y-8">
                <div className="text-7xl md:text-8xl font-extralight text-charcoal">
                  10,000<span className="text-charcoal">+</span>
                </div>
                <p className="text-xl md:text-2xl text-silver leading-relaxed">
                  Homes and businesses powered.<br />
                  From coastal humidity to desert heat.<br />
                  Every single day.
                </p>
              </div>

              <div className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-whisper border border-platinum">
                <Check className="w-6 h-6 text-charcoal" />
                <span className="text-xl text-charcoal font-light">Reliability you can count on</span>
              </div>

              <p className="text-lg text-silver max-w-2xl mx-auto leading-relaxed pt-8">
                When the lights stay on,<br />
                that's when we've done our job.
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
              <div className="bg-pearl border border-platinum rounded-3xl p-16 hover:border-silver/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-full bg-whisper flex items-center justify-center">
                    <Home className="w-10 h-10 text-charcoal" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-light text-charcoal">For Homes</h3>
                    <p className="text-xl text-silver leading-relaxed">
                      Seamless backup power.<br />
                      Your family never notices when the grid fails.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-center gap-3 text-charcoal text-lg group-hover:gap-4 transition-all">
                  <span>Explore systems</span>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </Link>

            {/* Business */}
            <Link to="/commercial" className="group">
              <div className="bg-pearl border border-platinum rounded-3xl p-16 hover:border-silver/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 min-h-[400px] flex flex-col justify-between">
                <div className="space-y-8">
                  <div className="w-20 h-20 rounded-full bg-whisper flex items-center justify-center">
                    <Shield className="w-10 h-10 text-charcoal" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-light text-charcoal">For Business</h3>
                    <p className="text-xl text-silver leading-relaxed">
                      Industrial-grade reliability.<br />
                      Zero downtime. Zero diesel. Zero compromise.
                    </p>
                  </div>
                </div>
                <div className="pt-8 flex items-center gap-3 text-charcoal text-lg group-hover:gap-4 transition-all">
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
