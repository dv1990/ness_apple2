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
          
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-6 font-light">
              Which life do you want?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The new luxury isn't what you own. It's what you never worry about.
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