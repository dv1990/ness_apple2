import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PerformanceImage } from "@/components/ui/performance-image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Heart, Home, Sparkles, Shield, Zap, Smile } from "lucide-react";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* 1. HERO - Simple. Clear. Powerful. */}
      <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/5"></div>
        
        {/* Content - Centered, Minimal */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 py-20 text-center">
          
          {/* The Product */}
          <div className="mb-16 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <PerformanceImage
                src={nessPodProduct}
                alt="NESS AIO"
                className="w-full drop-shadow-2xl"
                priority={true}
                aspectRatio="16/9"
              />
            </div>
          </div>

          {/* The Message */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Headline - One clear thought */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight font-light text-foreground">
              Energy independence.<br />
              <span className="text-primary font-normal">Complete.</span>
            </h1>
            
            {/* One line. That's it. */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
              Solar + battery + inverter. One system.
            </p>

            {/* One action */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium shadow-xl shadow-primary/20"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Get Started
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Specs Section - Steve Jobs Style Numbers */}
      <section className="py-20 sm:py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-3 text-foreground">
                <AnimatedCounter value={70} suffix="" decimals={0} />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">%</span>
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-light">Lighter than Lead Acid</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-3 text-foreground">
                <AnimatedCounter value={50} suffix="" decimals={0} />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">%</span>
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-light">Smaller volume</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight mb-3 text-foreground">
                <AnimatedCounter value={100} suffix="" decimals={0} />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">%</span>
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-light">Elegant</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mb-3 text-primary">
                ₹<AnimatedCounter value={48000} decimals={0} />
              </div>
              <div className="text-sm sm:text-base text-muted-foreground font-light">Saved/Year</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. THE POSSIBILITY - What You Could Gain */}
      <section id="vision" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-background to-muted/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Your Solar Life</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground font-light">
              Imagine a home where<br />
              <span className="text-primary font-normal">power never runs out.</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Here's what changes when you go solar with NESS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Freedom */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-primary/20 hover:border-primary/40 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Smile className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light mb-1 text-foreground">Never worry again</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">24/7 Power</div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>AC runs through the night</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Fridge stays on always</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Kids' studies uninterrupted</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>No waiting for power</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Independence */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-primary/20 hover:border-primary/40 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light mb-1 text-foreground">Be independent</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Your Energy, Your Rules</div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Free from power cuts</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>No dependency on grid</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Generate your own power</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Control your energy future</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Value */}
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-primary/20 hover:border-primary/40 transition-all">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-light mb-1 text-foreground">Save real money</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">₹48,000/Year Savings</div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Zero electricity bills</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Free solar energy daily</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>No fuel or maintenance costs</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>15-year warranty included</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center space-y-6">
            <p className="text-xl sm:text-2xl text-foreground font-light leading-relaxed max-w-2xl mx-auto">
              <span className="text-primary font-normal">2,847 families</span> already living this life today
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-base font-medium"
              onClick={() => window.location.href = '/contact/homeowner'}
            >
              Join Them <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>


      {/* 4. HOW IT WORKS - Remove Mystery */}
      <section id="how-it-works" className="py-32 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground font-light">
              Simpler than you think.
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              One day to install. Fifteen years of freedom.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Morning */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-4xl">
                  ☀️
                </div>
                <h3 className="text-xl font-semibold text-foreground">Morning</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Solar panels generate power. NESS runs your home.
                </p>
              </div>

              {/* Afternoon */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-4xl">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold text-foreground">Afternoon</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Surplus power charges the battery. Automatically.
                </p>
              </div>

              {/* Evening */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center text-4xl">
                  🌅
                </div>
                <h3 className="text-xl font-semibold text-foreground">Evening</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Battery takes over. Life continues seamlessly.
                </p>
              </div>

              {/* Night */}
              <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center text-4xl">
                  🌙
                </div>
                <h3 className="text-xl font-semibold text-foreground">Night</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You sleep peacefully. NESS powers everything.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Timeline */}
          <div className="mt-20 bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border/50 text-center space-y-6">
            <h3 className="text-3xl font-light text-foreground">From decision to freedom</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
              <div className="space-y-2">
                <div className="text-4xl font-light text-primary">Day 1</div>
                <p className="text-sm text-muted-foreground">Free site assessment</p>
              </div>
              <div className="hidden md:block text-4xl text-muted-foreground">→</div>
              <div className="space-y-2">
                <div className="text-4xl font-light text-primary">Week 1</div>
                <p className="text-sm text-muted-foreground">Custom design ready</p>
              </div>
              <div className="hidden md:block text-4xl text-muted-foreground">→</div>
              <div className="space-y-2">
                <div className="text-4xl font-light text-primary">Week 2-3</div>
                <p className="text-sm text-muted-foreground">Professional installation</p>
              </div>
              <div className="hidden md:block text-4xl text-muted-foreground">→</div>
              <div className="space-y-2">
                <div className="text-4xl font-light text-primary">Forever</div>
                <p className="text-sm text-muted-foreground">Energy independence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF - Now It Hits Harder */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-border/40 shadow-2xl">
            <div className="space-y-8">
              <p className="text-3xl sm:text-4xl md:text-5xl text-foreground font-light leading-[1.2]">
                "We want our children to see sunlight as something we preserve, not something we waste."
              </p>
              <div className="flex items-center gap-4 pt-6">
                <div className="w-1 h-16 bg-primary/40 rounded-full"></div>
                <div>
                  <p className="text-lg font-medium text-foreground">Anita & Rohit Mehta</p>
                  <p className="text-base text-muted-foreground">Bengaluru · NESS AIO · 18 months</p>
                </div>
              </div>
              <div className="pt-8 border-t border-border/30 space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-light text-primary mb-2">₹0</div>
                    <p className="text-sm text-muted-foreground">Monthly electricity bill</p>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-primary mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Uninterrupted power</p>
                  </div>
                  <div>
                    <div className="text-4xl font-light text-primary mb-2">70%</div>
                    <p className="text-sm text-muted-foreground">Savings vs. grid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ALTERNATIVE PATHS - Other Products */}
      <section className="py-32 bg-gradient-to-b from-muted/10 to-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl leading-tight tracking-tight text-foreground font-light">
              Not quite right?<br />
              <span className="text-primary font-normal">We have your path.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* AC SYNC */}
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-10 border border-border/50 hover:shadow-xl transition-all duration-500">
              
              {/* Badge */}
              <div className="inline-block bg-amber-500/10 text-amber-600 text-xs px-4 py-1 rounded-full font-medium mb-6">
                Already Have Solar?
              </div>

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
              
              {/* Header */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-semibold text-foreground">NESS AC SYNC</h3>
                <p className="text-lg font-medium text-muted-foreground">Add storage. Keep your solar.</p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Store all the power you generate. Use it when the sun goes down. No rewiring needed.
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 text-center mb-8 py-6 border-y border-border/50">
                <div>
                  <div className="text-2xl font-light mb-1">16h</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Storage</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">Plug-in</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">₹3.2L</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Investment</div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full rounded-full py-6 text-base font-medium"
                onClick={() => window.location.href = '/products/ness-ac-sync'}
              >
                Explore AC SYNC
              </Button>
            </div>

            {/* NESS UPS */}
            <div className="bg-gradient-to-br from-card/80 to-blue-500/5 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/30 hover:shadow-xl transition-all duration-500">
              
              {/* Badge */}
              <div className="inline-block bg-blue-500 text-white text-xs px-4 py-1 rounded-full font-medium mb-6">
                No Solar Needed
              </div>

              {/* Product Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl overflow-hidden mb-8">
                <div className="flex items-center justify-center h-full p-8">
                  <PerformanceImage
                    src={nessProProduct}
                    alt="NESS UPS - Pure Backup Power"
                    className="w-full h-full"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
              
              {/* Header */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-semibold text-foreground">NESS UPS</h3>
                <p className="text-lg font-medium text-blue-600">Pure backup. Zero solar required.</p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Instant protection when the grid fails. Silent operation. Perfect for homes without solar.
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 text-center mb-8 py-6 border-y border-border/50">
                <div>
                  <div className="text-2xl font-light mb-1">12h</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Backup</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">10ms</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Switch</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">₹4.5L</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Investment</div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-base font-medium"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Explore NESS UPS
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OBJECTION CRUSHER - FAQ */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl leading-tight tracking-tight text-foreground font-light">
              Questions you might have.
            </h2>
          </div>

          <div className="space-y-6">
            {/* Cost */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">Is this expensive?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Think investment, not expense. NESS AIO pays for itself in 4-6 years through zero electricity bills. Then you have 10+ years of free power. Plus, your home value increases by 3-5%.
              </p>
            </div>

            {/* Installation */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">Is installation complicated?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                One day. Professional team. Zero hassle. We handle permits, connections, and setup. You just flip the switch and own your power.
              </p>
            </div>

            {/* Maintenance */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">What about maintenance?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Virtually none. NESS monitors itself. If something needs attention, you get an app alert. Annual checkup included for 15 years. LiFePO₄ batteries = zero thermal runaway risk.
              </p>
            </div>

            {/* Moving */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">What if I move house?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                NESS increases your home's resale value significantly. Buyers pay premium for energy-independent homes. Or transfer your NESS to your new home — warranty travels with you.
              </p>
            </div>

            {/* Warranty */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">What's actually covered in 15 years?</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything. Battery, inverter, solar panels, installation. If it stops working, we fix or replace it. No fine print. No surprise costs. That's why we call it True Warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA - Empowering Action */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight font-light text-foreground">
              Your energy freedom
              <br />
              <span className="text-primary font-normal">starts here.</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Join <span className="text-primary font-medium">2,847 families</span> who chose independence.
              <br />Free assessment. Expert design. Professional installation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium shadow-lg shadow-primary/20"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-12 py-7 rounded-full text-lg font-medium"
                onClick={() => window.location.href = '/find-installer'}
              >
                Find Installer Near You
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>15-Year True Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span>2,847 Happy Families</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                <span>Install in 3 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);