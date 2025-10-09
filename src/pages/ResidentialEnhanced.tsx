import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight, Heart, Home, Sparkles, Shield, Zap, Smile } from "lucide-react";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* Hero - The Bright Circle */}
      <section className="min-h-[95vh] bg-background px-6 sm:px-8 relative overflow-hidden flex items-center">
        {/* Cinematic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
        
        {/* Animated circle elements - forming the "bright circle" */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 py-20">
          <div className="text-center space-y-12 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Movement</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight font-light">
              <span className="text-foreground">Join The</span>
              <br />
              <span className="text-primary font-normal">Bright Circle</span>
              <span className="text-foreground">.</span>
            </h1>
            
            {/* Sub-copy */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-light leading-relaxed">
                A new generation of homes is powering itself—
                <br />
                and a cleaner India with it.
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground font-light">
                Luxury meets responsibility.
                <br />
                Sunlight becomes identity.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl"
                onClick={() => window.location.href = '/contact/homeowner'}
              >
                ✨ See How Families Are Joining
              </Button>
            </div>

            {/* Cinematic visual hint */}
            <p className="text-sm text-muted-foreground/60 pt-8 animate-pulse">
              Scroll to discover the movement
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 - A New Kind of Homeowner */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              They're not waiting for the future.
              <br />
              <span className="text-primary">They're building it.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Across India's cities, discerning families are taking the first step toward self-powered living.
              <br />
              No noise, no guilt — just quiet pride in knowing their homes run on purpose.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-border/50 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed italic mb-6">
                  "We wanted our children to see sunlight as something we own, not something we waste."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-primary/30"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Anita & Rohit Mehta</p>
                    <p className="text-sm text-muted-foreground">Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What The Bright Circle Stands For */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6">
              What The Bright Circle Stands For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Pillar 1: Freedom */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">Freedom</h3>
              <p className="text-xl text-primary font-light italic">"Your energy, your choice."</p>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p>24×7 power</p>
                <p>&lt; 20 ms transfer</p>
                <p>25-year panels</p>
              </div>
            </div>

            {/* Pillar 2: Community */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">Community</h3>
              <p className="text-xl text-primary font-light italic">"A movement of modern Indian families."</p>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p className="text-3xl font-light text-primary">1200+</p>
                <p>homes already installed</p>
              </div>
            </div>

            {/* Pillar 3: Purpose */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground">Purpose</h3>
              <p className="text-xl text-primary font-light italic">"Luxury that gives back."</p>
              <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                <p className="text-3xl font-light text-primary">12,000+</p>
                <p>tons CO₂ saved and counting</p>
              </div>
            </div>
          </div>

          {/* Visual: Expanding circle concept */}
          <div className="text-center mt-20 p-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl border border-primary/20">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-32 h-32 bg-primary/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <p className="text-xl text-foreground font-light mt-8">
              Every new home makes the circle brighter.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Luxury with a Conscience */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground leading-tight">
              For those who see progress and planet
              <br />
              <span className="text-primary">as the same thing.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Power that looks like design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All-black panels that blend with architecture. Not an eyesore, but an upgrade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Sculptural wall battery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Belongs next to art, not hidden in the garage. Form meets function.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">A lifestyle upgrade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    That elevates both home and world. Your property value rises with your pride.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-xl">
                <p className="text-2xl md:text-3xl text-foreground font-light italic text-center leading-relaxed">
                  "Luxury isn't consumption—
                  <br />
                  <span className="text-primary">it's contribution."</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - The Intelligent System */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
              Smart energy for the modern home.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Seamless handover in 20 milliseconds</h3>
                <p className="text-muted-foreground">Your Wi-Fi doesn't drop. Your calls don't disconnect.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">App-based control</h3>
                <p className="text-muted-foreground">Monitor and manage from anywhere. Knowledge is power.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Real-time monitoring</h3>
                <p className="text-muted-foreground">See exactly how much clean power you're generating.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smile className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">AI-driven efficiency</h3>
                <p className="text-muted-foreground">It learns you — when to store, when to save, when to shine.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 rounded-full text-lg font-medium"
            >
              🔍 Design Your System
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 - The Impact */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
              The Impact
            </h2>
            <p className="text-2xl text-primary font-light">
              Together, we've generated 48,000+ MWh of clean power.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every dot is a story of independence and impact.
            </p>
          </div>

          {/* Placeholder for Interactive Map */}
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <Home className="w-16 h-16 text-primary mx-auto opacity-50" />
                <p className="text-muted-foreground">
                  Interactive India map showing NESS installations
                  <br />
                  <span className="text-sm">(Hover to see each home's CO₂ savings)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 rounded-full text-lg font-medium"
              onClick={() => window.location.href = '/contact/homeowner'}
            >
              Add Your Home to the Map
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6 - The Experience */}
      <section className="py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
              White-glove service, end-to-end.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From survey to design to installation and monitoring — every detail handled by experts.
              <br />
              Your concierge team keeps your system flawless so you can enjoy effortless power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Site Audit & Design</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our engineers visit your home, analyze your consumption, and design a system tailored precisely to your needs.
              </p>
              <p className="text-sm text-primary font-medium">Proposal delivered in 5 days</p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-4">Expert Installation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certified technicians handle everything — from permits to commissioning. You don't lift a finger.
              </p>
              <p className="text-sm text-primary font-medium">24/7 monitoring included</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 rounded-full text-lg font-medium"
              onClick={() => window.location.href = '/contact/homeowner'}
            >
              📅 Book a Site Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section - Moved down but still accessible */}
      <section id="products" className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6 font-light">
              Choose Your System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three systems. One philosophy: Power that serves you, and the planet.
            </p>
          </div>

          {/* Products - Clean grid, no decoration */}
          <div className="grid md:grid-cols-3 gap-16">
            
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

      {/* Closing Section - Welcome to The Bright Circle */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center space-y-8">
            <div className="inline-block relative">
              <div className="w-24 h-24 bg-primary/20 rounded-full animate-pulse mx-auto"></div>
              <div className="absolute inset-0 w-24 h-24 bg-primary/10 rounded-full animate-pulse mx-auto" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-foreground leading-tight">
              Welcome to
              <br />
              <span className="text-primary font-normal">The Bright Circle.</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This is how change begins — home by home, city by city.
              <br />
              <span className="text-foreground font-medium">Join the movement of families who live the future today.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl"
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

            {/* Footer tagline */}
            <div className="pt-16 border-t border-border/50 mt-16">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                NESS — Luxury Power for a Cleaner World.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);