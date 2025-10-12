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

      {/* Find Your Way Section - Premium */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight leading-tight">
              Find your way to<br />effortless power.
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light">
              Every home's journey is unique. Choose yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* Card 1 - Solar + Storage */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border border-border/40 hover:border-border/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-10 lg:p-12 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-amber-400/10 via-amber-500/10 to-amber-600/10 flex items-center justify-center backdrop-blur-sm border border-amber-500/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-3 leading-tight tracking-tight">
                      Already have solar?<br />Add storage.
                    </h3>
                    
                    <p className="text-base text-muted-foreground/70 leading-relaxed font-light">
                      Store your solar power. Use it day and night.<br />Own your energy completely.
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-8 h-14 text-base font-medium rounded-2xl bg-foreground text-background hover:bg-foreground/90 group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <span>Add Battery Storage</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Card 2 - Complete System (Featured) */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/5 to-primary/[0.02] dark:from-primary/10 dark:to-primary/5 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 md:-translate-y-4 hover:-translate-y-5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Premium badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-primary text-primary-foreground px-8 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary/30 backdrop-blur-sm">
                  Most Popular
                </div>
              </div>
              
              <div className="relative p-10 lg:p-12 pt-14 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-3 leading-tight tracking-tight">
                      Start fresh with<br />solar + battery.
                    </h3>
                    
                    <p className="text-base text-muted-foreground/70 leading-relaxed font-light">
                      Complete energy independence from day one.<br />Generate. Store. Use. Repeat.
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-8 h-14 text-base font-medium rounded-2xl shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300"
                  size="lg"
                >
                  <span>Build Complete System</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Card 3 - Backup Only */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border border-border/40 hover:border-border/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-10 lg:p-12 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-8 relative">
                  <div className="w-20 h-20 rounded-[1.25rem] bg-gradient-to-br from-blue-400/10 via-blue-500/10 to-blue-600/10 flex items-center justify-center backdrop-blur-sm border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-3 leading-tight tracking-tight">
                      Just need<br />backup power?
                    </h3>
                    
                    <p className="text-base text-muted-foreground/70 leading-relaxed font-light">
                      Silent backup. 10ms switch time.<br />Your first step to energy freedom.
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full mt-8 h-14 text-base font-medium rounded-2xl border-2 hover:bg-accent group-hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <span>Get Backup System</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom message */}
          <div className="text-center">
            <p className="text-base text-muted-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
              Whichever path you choose, you're not just powering your home.<br />
              You're creating a cleaner tomorrow for those who matter most.
            </p>
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