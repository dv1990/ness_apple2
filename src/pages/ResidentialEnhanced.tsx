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

      {/* Find Your Way Section - Three Equal Options */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-background via-background to-muted/10">
        <div className="container mx-auto max-w-[1400px] px-8">
          
          {/* Heading */}
          <div className="text-center mb-24 md:mb-36">
            <h2 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-foreground leading-[1.1]">
              Choose your path.
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-8"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            
            {/* Option 1 - Add Storage to Existing Solar */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/5 rounded-[2rem] border border-border/60 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid md:grid-cols-5 gap-0 relative">
                {/* Left - Content */}
                <div className="md:col-span-3 p-12 md:p-20 flex flex-col justify-center">
                  
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight leading-[1.1] text-foreground">
                    Already have solar panels?
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
                    Let the sun also work for your home! Add batteries.
                    <br />
                    <span className="text-primary">NESS AC SYNC series is here to support.</span>
                  </p>
                  
                  <div className="flex items-center gap-8 mb-12 pb-12 border-b border-border/40">
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Store</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Solar Energy</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Use</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Anytime</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Save</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">More</div>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      size="lg"
                      className="h-16 px-12 text-base font-medium rounded-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                {/* Right - Visual */}
                <div className="md:col-span-2 bg-gradient-to-br from-amber-500/5 to-amber-600/5 p-12 md:p-16 flex items-center justify-center min-h-[320px] md:min-h-[500px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
                  <div className="relative z-10">
                    <div className="w-40 h-40 rounded-[2rem] bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent flex items-center justify-center border border-amber-500/10 backdrop-blur-sm shadow-2xl">
                      <svg className="w-20 h-20 text-amber-600/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2 - Complete System */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/5 rounded-[2rem] border border-border/60 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid md:grid-cols-5 gap-0 relative">
                {/* Left - Content */}
                <div className="md:col-span-3 p-12 md:p-20 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">Recommended for most homes</span>
                  </div>
                  
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight leading-[1.1] text-foreground">
                    Begin to own your energy.
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
                    Complete installation of solar and battery.
                    <br />
                    <span className="text-primary">NESS AIO and NESS PRO batteries are here for you.</span>
                  </p>
                  
                  <div className="flex items-center gap-8 mb-12 pb-12 border-b border-border/40">
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">24/7</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Power</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Zero</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Bills</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Silent</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Operation</div>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      size="lg"
                      className="h-16 px-12 text-base font-medium rounded-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                {/* Right - Visual */}
                <div className="md:col-span-2 bg-gradient-to-br from-muted/30 to-muted/10 p-12 md:p-16 flex items-center justify-center min-h-[320px] md:min-h-[500px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
                  <div className="relative z-10">
                    <div className="w-40 h-40 rounded-[2rem] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center border border-primary/10 backdrop-blur-sm shadow-2xl">
                      <svg className="w-20 h-20 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 3 - Backup Only */}
            <div className="group relative bg-gradient-to-br from-card via-card to-muted/5 rounded-[2rem] border border-border/60 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid md:grid-cols-5 gap-0 relative">
                {/* Left - Content */}
                <div className="md:col-span-3 p-12 md:p-20 flex flex-col justify-center">
                  
                  <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-tight leading-[1.1] text-foreground">
                    Need uninterrupted backup?
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-12 max-w-lg">
                    If you don't want solar, pick <span className="text-primary">NESS UPS</span>.
                    <br />
                    Your guardian for uninterrupted power when you need it most.
                  </p>
                  
                  <div className="flex items-center gap-8 mb-12 pb-12 border-b border-border/40">
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">12h</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Backup</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">10ms</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Switch</div>
                    </div>
                    <div className="w-px h-12 bg-border/40"></div>
                    <div>
                      <div className="text-3xl font-light text-foreground mb-1">Instant</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Protection</div>
                    </div>
                  </div>
                  
                  <div>
                    <Button 
                      size="lg"
                      className="h-16 px-12 text-base font-medium rounded-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                
                {/* Right - Visual */}
                <div className="md:col-span-2 bg-gradient-to-br from-blue-500/5 to-blue-600/5 p-12 md:p-16 flex items-center justify-center min-h-[320px] md:min-h-[500px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
                  <div className="relative z-10">
                    <div className="w-40 h-40 rounded-[2rem] bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent flex items-center justify-center border border-blue-500/10 backdrop-blur-sm shadow-2xl">
                      <svg className="w-20 h-20 text-blue-600/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
            
            {/* AC SYNC - For Existing Solar */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 h-full flex flex-col border border-border/50 hover:shadow-2xl transition-all duration-500">
                
                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full p-8">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent flex items-center justify-center border border-amber-500/20">
                      <svg className="w-16 h-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Product Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">NESS AC SYNC</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">ADD-ON STORAGE</p>
                </div>

                {/* Life Benefit */}
                <div className="space-y-3 py-6 border-y border-border/50 mb-6">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Already have solar? Add storage.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Store your solar power. Use it when the sun goes down. Maximize your investment.
                  </p>
                </div>
                
                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                  <div>
                    <div className="text-2xl font-light mb-1">16h</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Storage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">Seamless</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Sync</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">7yr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Warranty</div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Store all your solar power</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Use solar power at night</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Reduce your bills to zero</p>
                  </div>
                </div>

                {/* Target Audience */}
                <p className="text-xs text-muted-foreground italic mb-6">
                  For homes with existing solar panels
                </p>
                
                {/* Price & CTA */}
                <div className="mt-auto pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
                    <span className="text-3xl font-light">₹3.2L</span>
                  </div>
                  <Button variant="outline" className="w-full rounded-full py-3 font-medium">
                    Configure AC SYNC
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

            {/* NESS UPS - Backup Guardian */}
            <div className="group">
              <div className="bg-gradient-to-br from-white/80 to-blue-500/5 backdrop-blur-sm rounded-3xl p-10 h-full flex flex-col border border-blue-500/30 hover:shadow-2xl transition-all duration-500 relative ring-2 ring-blue-500/20">
                
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-blue-500 text-white text-xs px-4 py-1 rounded-full font-medium">
                  No Solar Needed
                </div>

                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl overflow-hidden mb-8">
                  <div className="flex items-center justify-center h-full p-8">
                    <WebPImage 
                      src="/src/assets/ness-pro-product.png" 
                      alt="NESS UPS - Your Power Guardian" 
                      className="w-full h-full object-contain"
                      priority={true}
                    />
                  </div>
                </div>
                
                {/* Product Header */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-semibold text-foreground">NESS UPS</h3>
                  <p className="text-sm text-blue-600 uppercase tracking-wider font-medium">BACKUP GUARDIAN</p>
                </div>

                {/* Life Benefit */}
                <div className="space-y-3 py-6 border-y border-border/50 mb-6">
                  <p className="text-lg font-medium leading-relaxed text-foreground">
                    Your guardian for uninterrupted power.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Don't want solar? No problem. Pure backup power when the grid fails.
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
                    <div className="text-2xl font-light mb-1">7yr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Warranty</div>
                  </div>
                </div>

                {/* Scenarios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Your work never stops during cuts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Instant protection when grid fails</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Silent operation, zero hassle</p>
                  </div>
                </div>

                {/* Target Audience */}
                <p className="text-xs text-muted-foreground italic mb-6">
                  For homes seeking reliable backup without solar
                </p>
                
                {/* Price & CTA */}
                <div className="mt-auto pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Investment</span>
                    <span className="text-3xl font-light">₹4.5L</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 font-medium">
                    Configure UPS
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