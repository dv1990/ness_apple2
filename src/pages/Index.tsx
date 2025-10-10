import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Shield, Home, Building2, Zap, Award, CheckCircle, Clock, TrendingUp, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { WhyNess } from "@/components/WhyNess";
import heroHome from "@/assets/hero-homeowners.jpg";
import industrialHero from "@/assets/industrial-complex-hero.jpg";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessCubeProduct from "@/assets/ness-cube-resort.webp";
import familyLifestyle from "@/assets/family-energy-lifestyle.jpg";
const Index = () => {
  return <Layout>
      {/* 1️⃣ Hero: Emotional Opening */}
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <Carousel opts={{
          loop: true
        }} plugins={[Autoplay({
          delay: 5000
        })]} className="w-full h-full">
            <CarouselContent className="h-screen -ml-0">
              <CarouselItem className="pl-0">
                <div className="relative w-full h-screen overflow-hidden">
                  <img src={heroHome} alt="Modern home with NESS battery system" className="w-full h-full object-cover opacity-40" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60"></div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="pl-0">
                <div className="relative w-full h-screen overflow-hidden">
                  <img src={industrialHero} alt="Industrial facility with NESS energy storage" className="w-full h-full object-cover opacity-40" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-16 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-tight tracking-tight">
                Power. On your terms.
                <br />
                On your roof.
                <br />
                <span className="text-energy font-medium">In your hands.</span>
              </h1>
              
              <p className="text-3xl md:text-4xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Welcome to energy independence.
              </p>
            </div>

            {/* Proof Numbers - Big and Bold */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto py-8">
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-light text-energy">100+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">MWh Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-light text-energy">2</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Warranty Claims in 3 Years</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl md:text-7xl font-light text-energy">1,000</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Own Their Power</div>
              </div>
            </div>

            {/* Single CTA */}
            <div className="pt-4">
              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Own Your Power
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW? - Urgency Section */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-16 text-center">
            {/* The Truth */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                Every summer gets hotter.
                <br />
                Every power bill gets higher.
                <br />
                Every load-shedding gets longer.
              </h2>
            </div>

            {/* The Divide */}
            <div className="py-8">
              <div className="inline-block px-8 py-4 border-y border-border/50">
                <p className="text-2xl md:text-3xl font-light text-muted-foreground">
                  Some wait. <span className="text-energy font-medium">Some act.</span>
                </p>
              </div>
            </div>

            {/* The Reality Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4">
                <div className="text-5xl text-destructive/80">↗</div>
                <div className="text-lg text-foreground font-light">Grid tariffs up 40% in 3 years</div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl text-destructive/80">🔥</div>
                <div className="text-lg text-foreground font-light">48°C summers are the new normal</div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl text-destructive/80">⏱</div>
                <div className="text-lg text-foreground font-light">Outages doubled since 2021</div>
              </div>
            </div>

            {/* The Choice */}
            <div className="pt-8 space-y-6">
              <p className="text-2xl md:text-3xl font-light text-foreground">
                Take control of your energy source.
                <br />
                <span className="text-energy font-medium">Before your energy source controls you.</span>
              </p>
              
              <div className="pt-4">
                <Link to="/residential">
                  <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    Start Your Independence
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Real Stories - Aspiration & Independence */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              They own their power. <span className="text-energy font-semibold">You can too.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Energy independence isn't just efficient. It's thrilling. It's liberating. It's joy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Case Study - Woman's Perspective */}
            <div className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-energy" />
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Modern Villa, Gurgaon</span>
                </div>
                
                <blockquote className="text-2xl font-light text-foreground leading-tight italic">
                  "It's been over two years since I switched to Nunam batteries — no resets, no shutdowns, just flawless reliability. From home security to consistent power for all household equipment, Nunam has given me complete peace of mind."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  Dr Mohan Krishna Ranganath, Transformed his house to off-grid living. Sarjapura, Bengaluru
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">₹22K</div>
                    <div className="text-sm text-muted-foreground">Monthly savings</div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">100%</div>
                    <div className="text-sm text-muted-foreground">Energy independent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Case Study */}
            <div className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">EV Hub, Delhi</span>
                </div>
                
                <blockquote className="text-2xl font-light text-foreground leading-tight italic">
                  "We control our energy. Not the other way around."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  500 kWh system, Complete energy autonomy
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">₹2.5L</div>
                    <div className="text-sm text-muted-foreground">Monthly savings</div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">30%</div>
                    <div className="text-sm text-muted-foreground">Peak independence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Built for India Statement */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Engineered for excellence. <span className="text-energy font-semibold">Proven in India.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">50°C</div>
              <div className="text-sm text-background/70">Uncompromising performance</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">160-270V</div>
              <div className="text-sm text-background/70">Voltage fluctuations are handled </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">3 Years</div>
              <div className="text-sm text-background/70">Flawless operation</div>
            </div>
          </div>
        </div>
      </section>



      {/* 4️⃣ For Homes - Simplified */}
      <section className="py-40 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img src={familyLifestyle} alt="Modern Indian family enjoying energy independence with NESS solar system" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-energy"></div>
                <span className="text-sm font-mono text-energy uppercase tracking-[0.2em]">
                  For Homes
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-tight">
                Your home.
                <br />
                Your rules.
                <br />
                <span className="text-energy font-medium">Your power.</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Imagine waking up knowing the sun works for you. Your roof, your power, your freedom. That's not just luxury—that's joy.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                  <div className="text-foreground">Complete energy autonomy. No compromises.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                  <div className="text-foreground">Silent, clean, effortless. Pure luxury.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                  <div className="text-foreground">Control your energy from anywhere.</div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/residential">
                  <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-10 py-5 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Own Your Home's Power
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ For Businesses (C&I) */}
      <section className="py-40 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-primary uppercase tracking-[0.2em]">
                  For Businesses
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-tight">
                Your business.
                <br />
                Your energy.
                <br />
                <span className="text-primary font-medium">Your future.</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                From factories to resorts. You control your energy. Your tariffs. Your independence.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-foreground">Modular systems from 50 kWh to 2 MWh.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-foreground">Peak shaving up to 30%. Lower your tariffs.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-foreground">20 ms transfer for uninterrupted operations.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-foreground">Remote monitoring and diagnostics.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="text-foreground">10-year extendable warranty.</div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/commercial">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Own Your Business's Power
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-card/50 p-12">
                <img src={nessCubeProduct} alt="NESS CUBE Commercial Battery System - Resort Installation" className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6️⃣ Why NESS Lasts Longer */}
      <section className="py-40 bg-muted/30">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-6">
                Why NESS lasts <span className="text-energy font-semibold">10+ years.</span>
                <br />
                <span className="text-muted-foreground">Engineering that respects your investment.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Luxury isn't just aesthetics. It's quality that endures.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-4 p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-energy/10 flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-energy" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">LFP Chemistry</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Safe and long-lasting. LiFePO₄ technology means reliable power you can trust.
                </p>
              </div>

              <div className="space-y-4 p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-energy/10 flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-energy" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">NESS Cell Grading Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Improves battery life by up to 40% through precision cell matching.
                </p>
              </div>

              <div className="space-y-4 p-8 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-energy/10 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-energy" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Real World Tested</h3>
                <p className="text-muted-foreground leading-relaxed">
                  3 years in Jharkhand's heat. Real conditions, real proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why NESS Component - Manufacturing */}
      <WhyNess />

      {/* 8️⃣ Final CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Ready to feel the thrill of true independence?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your journey to energy freedom starts with one conversation.
          </p>
          
          <div className="pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Begin Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;