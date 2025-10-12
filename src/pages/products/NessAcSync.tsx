import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight, Zap, Shield, Smartphone, Battery, Leaf, Volume2 } from "lucide-react";

const NessAcSync = () => {
  const [packs, setPacks] = useState(1);

  const packData = {
    1: { runtime: "3h", use: "Lights, Wi-Fi, fridge", capacity: "5 kWh", power: "3.3 kW" },
    2: { runtime: "6h", use: "Full home essentials", capacity: "10 kWh", power: "6.6 kW" },
    3: { runtime: "9h+", use: "Large homes + EV charging", capacity: "15 kWh", power: "9.9 kW" }
  };

  return (
    <Layout>
      {/* Section 1: HERO */}
      <section className="min-h-screen bg-[#0B1220] text-white px-6 sm:px-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220]/95 to-[#0B1220]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 py-20 text-center">
          <div className="space-y-12 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.05] tracking-tight font-light">
              Power That Scales<br />With You.
            </h1>
            
            <p className="text-2xl sm:text-3xl text-white/70 font-light leading-relaxed max-w-4xl mx-auto">
              A modular battery with a built-in inverter. Add one. Or two. Or more.<br />
              Plug in and grow your power, your way.
            </p>

            {/* Product Visual */}
            <div className="pt-12 pb-8">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C853]/20 to-transparent rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                  <div className="w-32 h-40 mx-auto rounded-2xl bg-gradient-to-br from-white/10 via-[#00C853]/10 to-white/5 flex items-center justify-center border border-white/20">
                    <Battery className="w-16 h-16 text-[#00C853]" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-white/60 font-light">
              5 kWh per pack. 3.3 kW built in. Infinite calm.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-[#00C853] hover:bg-[#00C853]/90 text-white px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Design My Power Setup
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Why */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Leaf className="w-12 h-12 text-amber-600" />
                  </div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Solar Energy</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-light text-foreground">
                Your Solar<br />Already Works.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                You already have rooftop solar feeding energy to the grid. But when the sun sets or the grid goes down, that power disappears.
              </p>

              <p className="text-xl text-foreground leading-relaxed">
                The NESS AC SYNC changes that — a plug-and-play battery that captures your extra energy and keeps life flowing when everything else stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Reveal */}
      <section className="py-32 bg-[#0B1220] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-6xl font-light">Every pack has its own 3.3 kW inverter.</h2>
              <p className="text-2xl text-white/70 font-light">Works alone. Works together. Syncs automatically.</p>
            </div>

            {/* Pack Visualization */}
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-y-4 animate-fade-in" style={{ animationDelay: `${num * 0.2}s` }}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00C853]/50 transition-all duration-500">
                    <div className="w-24 h-32 mx-auto rounded-xl bg-gradient-to-br from-white/10 to-[#00C853]/20 flex items-center justify-center border border-white/20">
                      <Battery className="w-12 h-12 text-[#00C853]" />
                    </div>
                  </div>
                  <p className="text-3xl font-light">{num * 5} kWh</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Plug-and-Play */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/50 rounded-3xl overflow-hidden flex items-center justify-center p-12">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00C853]/20 to-primary/10 flex items-center justify-center border-4 border-[#00C853]/30">
                  <Zap className="w-24 h-24 text-[#00C853]" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-[#00C853]/20 animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-light text-foreground">
                No Rewiring.<br />
                No Upgrades.<br />
                No Hassle.
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mount it. Plug it in. Watch it sync.<br />
                Each pack brings its own inverter — no external electronics.<br />
                The moment it connects, it becomes part of your home grid.
              </p>

              <p className="text-lg text-muted-foreground italic">
                "Freedom shouldn't need a manual."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Smart. Silent. Scalable. */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-2xl p-8 text-center space-y-4 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Adaptive Power Flow</h3>
              <p className="text-sm text-muted-foreground">Intelligent energy management</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center space-y-4 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Instant Backup</h3>
              <p className="text-sm text-muted-foreground">&lt;10 ms transfer time</p>
            </div>

            <div className="bg-card rounded-2xl p-8 text-center space-y-4 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">App Control & Insights</h3>
              <p className="text-sm text-muted-foreground">Monitor from anywhere</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Battery className="w-10 h-10 mx-auto text-primary" />
              <p className="text-sm font-medium">LiFePO₄ Safety</p>
            </div>
            <div className="space-y-2">
              <Volume2 className="w-10 h-10 mx-auto text-primary" />
              <p className="text-sm font-medium">Whisper Quiet</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-10 h-10 mx-auto text-primary" />
              <p className="text-sm font-medium">15-Year Warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section id="how-it-works" className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="space-y-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-light text-foreground">
              Solar by day. NESS by night.<br />
              <span className="text-primary">The rhythm of independence.</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: "☀️", label: "Solar creates power" },
                { icon: "🏠", label: "NESS detects surplus" },
                { icon: "⚡", label: "NESS stores it" },
                { icon: "🌙", label: "Powers your home" }
              ].map((step, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-6xl">{step.icon}</div>
                  <p className="text-lg text-muted-foreground">{step.label}</p>
                  {idx < 3 && <div className="hidden md:block absolute right-0 top-1/2 text-2xl text-muted-foreground">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Specs */}
      <section className="py-32 bg-[#0B1220] text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-light text-center mb-16">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-lg">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Capacity</span>
              <span className="font-medium">5 kWh per pack (usable)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Inverter</span>
              <span className="font-medium">3.3 kW per pack</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Expandability</span>
              <span className="font-medium">Up to 3 packs</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Chemistry</span>
              <span className="font-medium">LiFePO₄</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Efficiency</span>
              <span className="font-medium">&gt; 90%</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Backup Transfer</span>
              <span className="font-medium">&lt; 10 ms</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Mounting</span>
              <span className="font-medium">Indoor / Outdoor (IP65)</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Warranty</span>
              <span className="font-medium">15 Years / 10,000 Cycles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Configurator */}
      <section id="configurator" className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-light text-center mb-16">
            How Much Power<br />Fits Your Life?
          </h2>

          <div className="bg-card rounded-3xl p-12 border border-border/50 shadow-xl">
            <div className="space-y-12">
              {/* Slider */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-muted-foreground">Number of Packs</span>
                  <span className="text-4xl font-light text-primary">{packs}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={packs}
                  onChange={(e) => setPacks(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                />
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Capacity</p>
                  <p className="text-3xl font-light">{packData[packs as keyof typeof packData].capacity}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Runtime</p>
                  <p className="text-3xl font-light">{packData[packs as keyof typeof packData].runtime}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Total Power</p>
                  <p className="text-3xl font-light">{packData[packs as keyof typeof packData].power}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-center text-muted-foreground mb-6">
                  Ideal for: {packData[packs as keyof typeof packData].use}
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 rounded-full text-lg font-medium"
                  onClick={() => window.location.href = '/contact/homeowner'}
                >
                  Build My System
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Real People */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-border/40 shadow-2xl">
            <div className="space-y-8 text-center">
              <p className="text-3xl sm:text-4xl text-foreground font-light leading-relaxed">
                "We started with one NESS pack.<br />
                Added a second when we bought our EV.<br />
                It just worked."
              </p>
              <div className="pt-6">
                <p className="text-xl font-medium text-foreground">Anita & Vikram</p>
                <p className="text-lg text-muted-foreground">Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-32 bg-[#0B1220] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C853]/10 to-transparent animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="space-y-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-light">
              Start With One.<br />
              Grow Forever.
            </h2>
            
            <p className="text-2xl text-white/70 font-light">
              NESS AC SYNC — Power that evolves with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-[#00C853] hover:bg-[#00C853]/90 text-white px-12 py-7 rounded-full text-lg font-medium shadow-lg shadow-[#00C853]/20"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Configure My System
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => window.location.href = '/find-installer'}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(NessAcSync);