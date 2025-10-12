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
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="space-y-16 sm:space-y-24 animate-fade-in">
            
            {/* The Opening - Bold Truth */}
            <div className="space-y-12">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground leading-[1.1] tracking-tight">
                The grid is a lie<br />you pay for<br />every month.
              </h1>
              
              <p className="text-2xl sm:text-3xl md:text-4xl font-extralight text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed">
                Time to own the truth.
              </p>
            </div>

            {/* The Proof - Whispered, Not Shouted */}
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-muted-foreground/60 text-sm font-light">
                <span className="flex items-center gap-2">
                  <span className="text-3xl font-extralight text-energy">100+</span>
                  <span className="text-xs uppercase tracking-wider">MWh delivered</span>
                </span>
                <span className="hidden sm:block text-muted-foreground/20">·</span>
                <span className="flex items-center gap-2">
                  <span className="text-3xl font-extralight text-energy">2</span>
                  <span className="text-xs uppercase tracking-wider">warranty claims, 3 years</span>
                </span>
                <span className="hidden sm:block text-muted-foreground/20">·</span>
                <span className="flex items-center gap-2">
                  <span className="text-3xl font-extralight text-energy">1,000</span>
                  <span className="text-xs uppercase tracking-wider">people free</span>
                </span>
              </div>
            </div>

            {/* The Invitation - Impossible to Refuse */}
            <div className="pt-8">
              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-16 py-7 text-xl font-light rounded-full shadow-2xl hover:shadow-energy/20 transform hover:scale-105 transition-all duration-500">
                  Join them
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE SCENE - Visceral Truth */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-32 text-center">
            
            {/* The Moment */}
            <div className="space-y-12">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extralight text-foreground leading-tight italic">
                2:47 AM.
              </p>
              <div className="space-y-8 max-w-2xl mx-auto">
                <p className="text-xl sm:text-2xl font-light text-muted-foreground leading-relaxed">
                  The AC dies. You wake up drenched.
                  <br />
                  Your cameras: dark. Your router: dead.
                  <br />
                  The baby's monitor: silent.
                </p>
                <p className="text-2xl sm:text-3xl font-extralight text-foreground/90 leading-tight pt-8">
                  At 6 AM, everything hums back.<br />
                  <span className="text-muted-foreground">Like nothing happened.</span>
                </p>
              </div>
            </div>

            {/* The Question */}
            <div className="py-12">
              <div className="inline-block px-16 py-6 border border-border/30 rounded-full">
                <p className="text-xl md:text-2xl font-extralight text-muted-foreground">
                  How many more nights?
                </p>
              </div>
            </div>

            {/* The Truth - Stark Numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="text-5xl font-extralight text-energy">46°C</div>
                <div className="text-sm text-muted-foreground/60 font-light leading-relaxed">
                  Delhi, last May.
                  <br />
                  The grid blinked first.
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-extralight text-energy">₹96,000</div>
                <div className="text-sm text-muted-foreground/60 font-light leading-relaxed">
                  What you'll pay the grid
                  <br />
                  next year. Minimum.
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-5xl font-extralight text-energy">6 hours</div>
                <div className="text-sm text-muted-foreground/60 font-light leading-relaxed">
                  Average blackout.
                  <br />
                  When you need it most.
                </div>
              </div>
            </div>

            {/* The Line They'll Remember */}
            <div className="pt-16 max-w-3xl mx-auto border-t border-border/30">
              <p className="text-3xl md:text-4xl font-extralight text-energy italic leading-relaxed">
                "The grid doesn't care if you're awake."
              </p>
              <p className="text-lg text-muted-foreground/50 font-light pt-6">
                But you can.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THE PEOPLE WHO LEFT */}
      <section className="py-32 md:py-48 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">
              1,000 people stopped<br />waiting for the grid.
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground/70 font-light max-w-2xl mx-auto">
              Here's what freedom sounds like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Residential Case Study - Woman's Perspective */}
            <div className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-energy" />
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Modern Villa, Gurgaon</span>
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-extralight text-foreground leading-relaxed italic">
                  "Two years. Not one reset. Not one worry."
                </blockquote>
                
                <p className="text-base text-muted-foreground/60 font-light leading-relaxed pt-4">
                  Dr. Mohan Krishna Ranganath
                  <br />
                  <span className="text-sm text-muted-foreground/40">Sarjapura, Bengaluru · Off-grid since 2022</span>
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-border/30">
                  <div className="space-y-3">
                    <div className="text-5xl font-extralight text-energy">₹22K</div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider">Saved monthly</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl font-extralight text-energy">100%</div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider">Independent</div>
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
                
                <blockquote className="text-2xl md:text-3xl font-extralight text-foreground leading-relaxed italic">
                  "We own our energy now. The grid just watches."
                </blockquote>
                
                <p className="text-base text-muted-foreground/60 font-light leading-relaxed pt-4">
                  EV Charging Hub, Delhi
                  <br />
                  <span className="text-sm text-muted-foreground/40">500 kWh · Zero downtime</span>
                </p>

                <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-border/30">
                  <div className="space-y-3">
                    <div className="text-5xl font-extralight text-energy">₹2.5L</div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider">Saved monthly</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-5xl font-extralight text-energy">30%</div>
                    <div className="text-xs text-muted-foreground/60 uppercase tracking-wider">Grid-free</div>
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
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                <img src={familyLifestyle} alt="Modern Indian family enjoying energy independence with NESS solar system" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-energy"></div>
                <span className="text-xs sm:text-sm font-mono text-energy uppercase tracking-[0.2em]">
                  For Homes
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground leading-tight tracking-tight">
                Your roof.<br />
                Your rules.<br />
                <span className="text-energy font-light italic">Your freedom.</span>
              </h2>

              <p className="text-xl md:text-2xl text-muted-foreground/70 font-extralight leading-relaxed">
                Wake up knowing the sun works for you.<br />
                That's not comfort. That's power.
              </p>

              {/* Key Benefits - Minimal */}
              <div className="space-y-5 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-energy flex-shrink-0 mt-3" />
                  <div className="text-lg text-foreground/80 font-light">Never notice an outage again</div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-energy flex-shrink-0 mt-3" />
                  <div className="text-lg text-foreground/80 font-light">Silent. Clean. Invisible.</div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-energy flex-shrink-0 mt-3" />
                  <div className="text-lg text-foreground/80 font-light">Control from anywhere</div>
                </div>
              </div>

              <div className="pt-10">
                <Link to="/residential">
                  <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-lg font-light rounded-full shadow-lg hover:shadow-xl transition-all duration-500">
                    For Your Home
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ For Businesses (C&I) */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-primary uppercase tracking-[0.2em]">
                  For Businesses
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-foreground leading-tight tracking-tight">
                Your business.<br />
                Your energy.<br />
                <span className="text-primary font-light italic">Your advantage.</span>
              </h2>

               <p className="text-xl md:text-2xl text-muted-foreground/70 font-extralight leading-relaxed">
                 When downtime costs more than power.
               </p>

               {/* Key Benefits - Minimal */}
               <div className="space-y-5 pt-6">
                 <div className="flex items-start space-x-4">
                   <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-3" />
                   <div className="text-lg text-foreground/80 font-light">50 kWh to 2 MWh. Scale as you grow.</div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-3" />
                   <div className="text-lg text-foreground/80 font-light">Peak shaving. Lower tariffs. Higher profits.</div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-3" />
                   <div className="text-lg text-foreground/80 font-light">20 ms switchover. Invisible protection.</div>
                 </div>
               </div>

               <div className="pt-10">
                 <Link to="/commercial">
                   <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-light rounded-full shadow-lg hover:shadow-xl transition-all duration-500">
                     For Your Business
                     <ArrowRight className="w-5 h-5 ml-3" />
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


      {/* THE DECADE BATTERY */}
      <section className="py-32 md:py-48 bg-muted/30">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-24">
            <div className="space-y-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground leading-tight">
                10 years.<br />
                Zero drama.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground/60 font-extralight italic max-w-3xl mx-auto leading-relaxed">
                While others replace batteries,<br />
                you'll be sipping coffee.<br />
                <span className="text-foreground not-italic">Unbothered.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 pt-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-energy/10 flex items-center justify-center mx-auto">
                  <Shield className="w-7 h-7 text-energy" />
                </div>
                <h3 className="text-xl font-light text-foreground">LiFePO₄</h3>
                <p className="text-base text-muted-foreground/70 font-light leading-relaxed">
                  The chemistry that ages<br />like fine wine.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-energy/10 flex items-center justify-center mx-auto">
                  <Zap className="w-7 h-7 text-energy" />
                </div>
                <h3 className="text-xl font-light text-foreground">Cell Matching</h3>
                <p className="text-base text-muted-foreground/70 font-light leading-relaxed">
                  Every cell perfect.<br />40% longer life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-energy/10 flex items-center justify-center mx-auto">
                  <Award className="w-7 h-7 text-energy" />
                </div>
                <h3 className="text-xl font-light text-foreground">Battle-Tested</h3>
                <p className="text-base text-muted-foreground/70 font-light leading-relaxed">
                  3 years at 50°C.<br />Zero failures.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-border/20 max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground/40 font-light italic">
                The best battery is the one you forget you have.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why NESS Component - Manufacturing */}
      <WhyNess />

      {/* THE CHOICE */}
      <section className="py-32 md:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground leading-tight">
            1,001?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground/60 font-light max-w-2xl mx-auto leading-relaxed">
            The next person to own their power could be you.
          </p>
          
          <div className="pt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-16 py-7 text-xl font-light rounded-full shadow-2xl hover:shadow-energy/20 transform hover:scale-105 transition-all duration-500">
                Let's talk
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;