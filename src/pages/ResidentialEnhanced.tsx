import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight, Heart, Home, Sparkles, Shield, Zap, Smile } from "lucide-react";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Simple Truth */}
      <section className="min-h-[90vh] bg-background px-6 sm:px-8 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 py-20">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight font-light text-foreground">
              While other homes<br />went dark,<br />
              <span className="text-primary font-normal">theirs stayed bright.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              The truth is simple. Some families decided to power their own lives.
              <br />No drama. No generators. Just independence.
            </p>

            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 rounded-full text-lg font-medium"
                onClick={() => window.location.href = '#products'}
              >
                See How
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Way Section - Jobs Simplicity */}
      <section className="py-32 md:py-48 bg-background">
        <div className="container mx-auto max-w-[1200px] px-8">
          
          {/* Heading */}
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight text-foreground">
              Choose your path.
            </h2>
          </div>

          {/* Hero Card - Complete System */}
          <div className="mb-12 md:mb-16">
            <div className="bg-card rounded-3xl border border-border/50 overflow-hidden hover:border-border transition-colors duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Content */}
                <div className="p-12 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Recommended</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight leading-tight">
                    Solar + Battery
                  </h3>
                  
                  <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                    Complete independence.<br />
                    Generate your power. Store it. Use it.
                  </p>
                  
                  <div>
                    <Button 
                      size="lg"
                      className="h-14 px-10 text-base font-medium rounded-2xl"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                
                {/* Right - Visual */}
                <div className="bg-muted/20 p-12 md:p-16 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                      <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Options - Minimal */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* Option 1 - Add Storage */}
            <button className="group text-left p-10 bg-card rounded-2xl border border-border/30 hover:border-border/60 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium mb-2">Add Storage</h4>
                  <p className="text-sm text-muted-foreground font-light">Already have solar panels</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </button>

            {/* Option 2 - Backup Only */}
            <button className="group text-left p-10 bg-card rounded-2xl border border-border/30 hover:border-border/60 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-medium mb-2">Backup Only</h4>
                  <p className="text-sm text-muted-foreground font-light">Just need power backup</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </button>

          </div>

        </div>
      </section>

      {/* Section 1 - One Family's Story */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-border/40">
            <div className="space-y-6">
              <p className="text-2xl sm:text-3xl text-foreground font-light leading-relaxed">
                "We wanted our children to see sunlight as something we own, not something we waste."
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-px h-10 bg-primary/30"></div>
                <div>
                  <p className="text-base font-medium text-foreground">Anita & Rohit Mehta</p>
                  <p className="text-sm text-muted-foreground">Bengaluru · NESS AIO · 18 months</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pt-4 border-t border-border/30">
                Their home runs on the sun. Their kids study without interruption. Their bills dropped 70%.
                <br />They didn't wait for the future. They installed it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Three Systems */}
      <section id="products" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground font-light">
              Three systems.
              <br />
              <span className="text-primary">One decision.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* NESS UPS - Essential */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 h-full flex flex-col border border-border/50 hover:shadow-2xl transition-all duration-500">
                
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full p-8">
                    <WebPImage 
                      src="/src/assets/ness-cube-product.png" 
                      alt="NESS UPS - Premium Home Battery" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Product Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">NESS UPS</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">ESSENTIAL</p>
                </div>

                {/* Life Benefit */}
                <div className="space-y-3 py-6 border-y border-border/50 mb-6">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Your life doesn't stop for a 4-hour power cut.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Essentials stay on. Work continues. Life stays normal.
                  </p>
                </div>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-light mb-1">12h</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Backup</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">10ms</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Switch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">5yr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Coverage</div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Your Zoom call doesn't drop</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Your child's online class continues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">The Wi-Fi never goes down</p>
                  </div>
                </div>

                {/* Target Audience */}
                <p className="text-xs text-muted-foreground italic mb-6">
                  Apartments and smaller homes
                </p>
                
                {/* Price & CTA */}
                <div className="mt-auto pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
                    <span className="text-3xl font-light">₹2.5L</span>
                  </div>
                  <Button variant="outline" className="w-full rounded-full py-3 font-medium">
                    Configure UPS
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS AIO - Complete */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 h-full flex flex-col border border-border/50 hover:shadow-2xl transition-all duration-500">
                
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full p-8">
                    <WebPImage 
                      src="/src/assets/ness-pod-product.png" 
                      alt="NESS AIO - Premium Home Battery" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Product Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">NESS AIO</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">COMPLETE</p>
                </div>

                {/* Life Benefit */}
                <div className="space-y-3 py-6 border-y border-border/50 mb-6">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Never think about power. Ever.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Solar + battery combined. Energy independence for medium homes.
                  </p>
                </div>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-light mb-1">24h</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Backup</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">Instant</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Switch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">7yr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Coverage</div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Your AC runs all night</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">The refrigerator never stops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">You forget power cuts exist</p>
                  </div>
                </div>

                {/* Target Audience */}
                <p className="text-xs text-muted-foreground italic mb-6">
                  Medium homes seeking energy independence
                </p>
                
                {/* Price & CTA */}
                <div className="mt-auto pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
                    <span className="text-3xl font-light">₹4.2L</span>
                  </div>
                  <Button variant="outline" className="w-full rounded-full py-3 font-medium">
                    Configure AIO
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS PRO - Ultimate */}
            <div className="group">
              <div className="bg-gradient-to-br from-white/80 to-primary/5 backdrop-blur-sm rounded-3xl p-10 h-full flex flex-col border border-primary/30 hover:shadow-2xl transition-all duration-500 relative ring-2 ring-primary/20">
                
                {/* Premium Badge */}
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-full font-medium">
                  Ultimate
                </div>

                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/50 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full p-8">
                    <WebPImage 
                      src="/src/assets/ness-pro-product.png" 
                      alt="NESS PRO - Ultimate Home Battery" 
                      className="w-full h-full object-contain"
                      priority={true}
                    />
                  </div>
                </div>
                
                {/* Product Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">NESS PRO</h3>
                  <p className="text-sm text-primary uppercase tracking-wider font-medium">ULTIMATE</p>
                </div>

                {/* Life Benefit */}
                <div className="space-y-3 py-6 border-y border-border/50 mb-6">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Complete luxury. Complete silence.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your entire home ecosystem. Backup, intelligence, and luxury for larger homes.
                  </p>
                </div>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-light mb-1">48h</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Backup</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">Seamless</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Switch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">10yr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Coverage</div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Run everything—for 48 hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Your neighbors won't know the grid failed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Absolute silence. Zero emissions.</p>
                  </div>
                </div>

                {/* Target Audience */}
                <p className="text-xs text-muted-foreground italic mb-6">
                  Larger homes demanding ultimate peace
                </p>
                
                {/* Price & CTA */}
                <div className="mt-auto pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
                    <span className="text-3xl font-light">₹7.8L</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 font-medium">
                    Configure PRO
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3 - Join The Bright Circle */}
      <section className="py-32 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight font-light">
              <span className="text-foreground">Join The</span>
              <br />
              <span className="text-primary font-normal">Bright Circle</span>
              <span className="text-foreground">.</span>
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-light leading-relaxed">
                A new generation of homes is powering itself—
                <br />
                and a cleaner India with it.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed">
                Luxury meets responsibility.
                <br />
                Sunlight becomes identity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Join Now
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => window.location.href = '/find-installer'}
              >
                Book a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);