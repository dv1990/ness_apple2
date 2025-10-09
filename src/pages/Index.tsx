import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
  ArrowRight, 
  Shield, 
  Home, 
  Building2, 
  Zap, 
  Award,
  CheckCircle,
  Clock,
  TrendingUp,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";
import { WhyNess } from "@/components/WhyNess";
import heroHome from "@/assets/hero-homeowners.jpg";
import industrialHero from "@/assets/industrial-complex-hero.jpg";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessCubeProduct from "@/assets/ness-cube-resort.webp";

const Index = () => {
  return (
    <Layout>
      {/* 1️⃣ Hero: "Effortless Energy. For Every Scale." */}
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000 })]}
            className="w-full h-full"
          >
            <CarouselContent className="h-screen -ml-0">
              {/* Home Image Slide */}
              <CarouselItem className="pl-0">
                <div className="relative w-full h-screen overflow-hidden">
                  <img 
                    src={heroHome}
                    alt="Modern home with NESS battery system"
                    className="w-full h-full object-cover opacity-40"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60"></div>
                </div>
              </CarouselItem>
              
              {/* Industrial Image Slide */}
              <CarouselItem className="pl-0">
                <div className="relative w-full h-screen overflow-hidden">
                  <img 
                    src={industrialHero}
                    alt="Industrial facility with NESS energy storage"
                    className="w-full h-full object-cover opacity-40"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60"></div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          
          {/* Subtle energy line */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-energy to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-light text-foreground leading-tight tracking-tight">
              The lights stay on.
              <br />
              <span className="text-energy font-semibold">Life stays normal.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When everyone else goes dark, you don't even notice.
              <br />
              <span className="text-lg">1,000+ Indian families trust NESS.</span>
            </p>

            {/* Single Clear CTA */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  For Your Home
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
              
              <Link to="/commercial">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  For Your Business
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Built for India Statement */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Built for India. <span className="text-energy font-semibold">Proven in Jharkhand.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">50°C</div>
              <div className="text-sm text-background/70">Extreme summer heat</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">160-270V</div>
              <div className="text-sm text-background/70">Voltage chaos handled</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-light text-energy">3 Years</div>
              <div className="text-sm text-background/70">Zero failures</div>
            </div>
          </div>
        </div>
      </section>


      {/* 4️⃣ For Homes - Premium Positioning */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card/80 to-card/40 p-16 border border-border/50">
                <img 
                  src={nessProProduct}
                  alt="NESS Home Battery System - Premium Energy Storage"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
                <div className="absolute top-8 right-8">
                  <Badge className="bg-energy/10 text-energy border-energy/20 px-4 py-1 text-sm">
                    Silent Luxury
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2">
                <div className="w-1 h-1 rounded-full bg-energy"></div>
                <span className="text-sm font-mono text-energy uppercase tracking-[0.2em]">
                  For Discerning Homeowners
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-tight">
                Your child's exam.
                <br />
                Your work deadline.
                <br />
                <span className="text-energy font-medium">None of it stops.</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                The new luxury isn't a louder generator. It's <span className="text-foreground font-medium">silence</span>. It's clean energy that works invisibly, keeping life uninterrupted while your neighbors scramble in the dark.
              </p>

              <div className="pt-2 pb-4 border-l-2 border-energy/30 pl-6">
                <p className="text-lg text-foreground/80 italic leading-relaxed">
                  "Most families notice their battery when it fails.
                  <br />
                  NESS families don't notice it at all."
                </p>
              </div>

              {/* Benefits Reframed */}
              <div className="space-y-5 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Home className="w-5 h-5 text-energy" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Runs your whole home for 24+ hours</div>
                    <div className="text-sm text-muted-foreground">No compromises. No backup mode. Full power, always.</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-energy" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Absolute silence. Zero emissions.</div>
                    <div className="text-sm text-muted-foreground">No diesel fumes at 2 AM. No waking the neighborhood. Just quiet, clean power.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-energy" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Solar-ready, future-proof</div>
                    <div className="text-sm text-muted-foreground">Add solar panels later with zero reinstallation. Your home, your timeline.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-energy" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium mb-1">Monitor from anywhere</div>
                    <div className="text-sm text-muted-foreground">Know your backup status from your phone. Peace of mind, always.</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/residential">
                  <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-10 py-5 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    See Which System Fits Your Home
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
                Scale power like you
                <br />
                <span className="text-primary font-medium">scale your business.</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                From factories to resorts, NESS storage reduces peaks, optimizes tariffs, and keeps you running 24×7.
              </p>

              {/* Highlights */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">50 kWh–2 MWh modular systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Peak shaving up to 30%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">20 ms transfer for critical loads</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Remote diagnostics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">10-year extendable warranty</span>
                </div>
              </div>

              <Link to="/commercial">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-lg font-medium rounded-xl mt-4">
                  Explore Commercial Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden bg-card/50 p-12">
                <img 
                  src={nessCubeProduct}
                  alt="NESS CUBE Commercial Battery System - Resort Installation"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Honest Differentiator Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="space-y-8">
            <p className="text-4xl md:text-5xl font-light text-foreground leading-tight">
              Battery shopping is confusing.
            </p>
            <p className="text-4xl md:text-6xl font-semibold text-energy leading-tight">
              We made it simple.
            </p>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed pt-4">
              Tell us your needs, we'll tell you exactly what works.
            </p>
            
            <div className="pt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Talk to Our Experts
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Why NESS Lasts Longer */}
      <section className="py-40 bg-background">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-6">
                Why NESS lasts <span className="text-energy font-semibold">10+ years</span>
                <br />
                <span className="text-muted-foreground">when others fail in 3.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Purpose-built for India. Not adapted for it.
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

      {/* 8️⃣ Case Studies - Real Stories */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              Real families. <span className="text-energy font-semibold">Real results.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not marketing promises. Actual performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Case Study */}
            <div className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-energy" />
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Villa, Gurgaon</span>
                </div>
                
                <blockquote className="text-2xl font-light text-foreground leading-tight italic">
                  "The lights stayed on during the 12-hour outage. My kids didn't even know it happened."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  15 kWh system. 18 months. Zero grid bills.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">₹18K</div>
                    <div className="text-sm text-muted-foreground">Saved monthly</div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">100%</div>
                    <div className="text-sm text-muted-foreground">Off-grid</div>
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
                  "Peak hours used to cost us a fortune. Not anymore."
                </blockquote>
                
                <p className="text-muted-foreground leading-relaxed">
                  500 kWh system. Smart load management. Consistent results.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">₹2.5L</div>
                    <div className="text-sm text-muted-foreground">Saved monthly</div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <div className="text-4xl font-light text-energy">30%</div>
                    <div className="text-sm text-muted-foreground">Peak reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">1,000+ families and businesses trust NESS</p>
          </div>
        </div>
      </section>

      {/* Why NESS Component - Manufacturing */}
      <WhyNess />

      {/* 9️⃣ Final CTA Section */}
      <section className="py-32 bg-background">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Ready to stop worrying about <span className="text-energy font-semibold">power cuts?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            One conversation. Clear answers. No confusion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Talk to Our Experts
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link to="/residential">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-border hover:bg-muted text-foreground px-12 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:border-foreground/30"
              >
                See Solutions
              </Button>
            </Link>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              No jargon. No pressure. Just honest answers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
