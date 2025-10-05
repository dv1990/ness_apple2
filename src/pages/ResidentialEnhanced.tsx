import React from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { WebPImage } from "@/components/ui/webp-image";
import { ArrowRight, Heart, Home, Sparkles, Shield, Zap, Smile } from "lucide-react";

const ResidentialEnhanced = () => {

  return (
    <Layout>
      {/* Hero - Direct and Clear */}
      <section className="py-20 bg-background px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16 space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[1] tracking-tight text-foreground font-light">
              Power for your home.
              <br />
              <span className="text-primary font-normal">Always on.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It's 3 AM. Your baby's AC is running. The street goes dark.
              <br />
              <span className="text-foreground font-medium">Your home doesn't.</span>
            </p>
          </div>

          {/* 6-Step Journey - Visual and Clear */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/50">
              <h2 className="text-2xl md:text-3xl font-light text-center mb-12 text-foreground">
                6 Steps to Get Your NESS
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 md:gap-6">
                {/* Step 1 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Select Your NESS</h3>
                      <p className="text-sm text-muted-foreground">Choose the system that fits your home</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Customize</h3>
                      <p className="text-sm text-muted-foreground">Tailor capacity and features</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Pre-Order</h3>
                      <p className="text-sm text-muted-foreground">Reserve with provisional payment</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Inspection</h3>
                      <p className="text-sm text-muted-foreground">Certified installer visits your site</p>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Shipping</h3>
                      <p className="text-sm text-muted-foreground">NESS arrives at your location</p>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      6
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Installation</h3>
                      <p className="text-sm text-muted-foreground">Professional setup, you're powered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products - Direct Access, No Jump Required */}
      <section id="products" className="py-24 bg-pearl">
        <div className="max-w-7xl mx-auto px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6 font-light">
              Choose your system
            </h2>
          </div>

          {/* Products - Clean grid, no decoration */}
          <div className="grid md:grid-cols-3 gap-16">
            
            {/* NESS UPS - Essential */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-platinum/30 hover:shadow-[0_32px_64px_-16px_rgba(20,20,20,0.1)] transition-all duration-500">
                
                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-cube-product.png" 
                    alt="NESS UPS" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    loading="lazy"
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS UPS</h3>
                  <p className="text-caption text-silver uppercase tracking-[0.1em]">Essential</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">12h</div>
                      <div className="text-caption text-silver">Backup time</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">No flicker</div>
                      <div className="text-caption text-silver">Switchover</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">5yr</div>
                      <div className="text-caption text-silver">Coverage</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Essential backup for apartments and smaller homes. Reliable, quiet, intelligent.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-platinum/30">
                  <p className="text-caption text-silver mb-6 text-center">From ₹2.5L</p>
                  <Button className="w-full bg-charcoal text-pearl hover:bg-graphite rounded-full py-3 font-medium">
                    Configure UPS
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS AIO - Complete */}
            <div className="group">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-platinum/30 hover:shadow-[0_32px_64px_-16px_rgba(20,20,20,0.1)] transition-all duration-500">
                
                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-pod-product.png" 
                    alt="NESS AIO" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    loading="lazy"
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS AIO</h3>
                  <p className="text-caption text-silver uppercase tracking-[0.1em]">Complete</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">24h</div>
                      <div className="text-caption text-silver">Backup time</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">Instant</div>
                      <div className="text-caption text-silver">Switchover</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">7yr</div>
                      <div className="text-caption text-silver">Coverage</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Solar and battery combined. Perfect for medium homes seeking energy independence.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-platinum/30">
                  <p className="text-caption text-silver mb-6 text-center">From ₹4.2L</p>
                  <Button className="w-full bg-charcoal text-pearl hover:bg-graphite rounded-full py-3 font-medium">
                    Configure AIO
                  </Button>
                </div>
              </div>
            </div>

            {/* NESS PRO - Ultimate */}
            <div className="group">
              <div className="bg-gradient-to-br from-white/80 to-energy-light/20 backdrop-blur-sm rounded-3xl p-12 h-full flex flex-col border border-energy/20 hover:shadow-[0_32px_64px_-16px_rgba(22,163,74,0.15)] transition-all duration-500 relative">
                
                {/* Subtle premium indicator */}
                <div className="absolute top-6 right-6 bg-energy text-white text-xs px-3 py-1 rounded-full font-medium">
                  Ultimate
                </div>

                <div className="text-center mb-12">
                  <WebPImage 
                    src="/src/assets/ness-pro-product.png" 
                    alt="NESS PRO" 
                    className="w-full h-40 object-contain mx-auto mb-8"
                    priority={true}
                  />
                  <h3 className="text-title text-charcoal font-light mb-4">NESS PRO</h3>
                  <p className="text-caption text-energy uppercase tracking-[0.1em] font-medium">Ultimate</p>
                </div>
                
                <div className="flex-1 space-y-8">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-title text-charcoal font-light">48h</div>
                      <div className="text-caption text-silver">Backup time</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">Seamless</div>
                      <div className="text-caption text-silver">Switchover</div>
                    </div>
                    <div>
                      <div className="text-title text-charcoal font-light">10yr</div>
                      <div className="text-caption text-silver">Coverage</div>
                    </div>
                  </div>
                  
                  <p className="text-body text-silver leading-relaxed">
                    Complete energy ecosystem. Ultimate backup, intelligence, and luxury for larger homes.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-energy/20">
                  <p className="text-caption text-silver mb-6 text-center">From ₹7.8L</p>
                  <Button className="w-full bg-energy text-white hover:bg-energy-dark rounded-full py-3 font-medium">
                    Configure PRO
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* When It Matters Most - After Products */}
          <div className="mt-32 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl leading-tight tracking-tight text-foreground mb-4 font-light">
                When it matters most
              </h2>
              <p className="text-lg text-muted-foreground">
                Real moments. Real peace of mind.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Baby sleeping - AC runs */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Your baby sleeps through</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AC stays on. Temperature steady at 24°C. 
                  Power cut? Your child doesn't wake up sweating.
                </p>
              </div>

              {/* Work call doesn't drop */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Your call doesn't drop</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mid-presentation. Grid fails. 
                  Your internet, screen, and lights stay on. Client never notices.
                </p>
              </div>

              {/* Medical device runs */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Medical devices run</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  CPAP machine. Oxygen concentrator. Refrigerated insulin. 
                  Power failures stop being life-or-death anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Emotional closing message */}
          <div className="text-center mt-20 sm:mt-32">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 sm:p-12 md:p-16 border border-primary/20 max-w-4xl mx-auto">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-6 sm:mb-8" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-extralight text-foreground mb-6 sm:mb-8 leading-tight">
                "Your family deserves the comfort of never worrying about power.
                <br className="hidden sm:block" />
                <span className="text-primary font-light">Let us give you that peace of mind."</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Join thousands of Indian families who sleep better knowing their homes are protected by NESS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
                  onClick={() => window.location.href = '/contact/homeowner'}
                >
                  Talk to Our Family Care Team
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 px-8 sm:px-10 py-4 sm:py-6 rounded-full text-base sm:text-lg font-medium w-full sm:w-auto"
                  onClick={() => window.location.href = '/find-installer'}
                >
                  Find Local Installer
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default React.memo(ResidentialEnhanced);