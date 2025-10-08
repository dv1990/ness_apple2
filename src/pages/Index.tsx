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
import nessCubeProduct from "@/assets/ness-cube-product.png";

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
                    className="w-full h-full object-cover opacity-20"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80"></div>
                </div>
              </CarouselItem>
              
              {/* Industrial Image Slide */}
              <CarouselItem className="pl-0">
                <div className="relative w-full h-screen overflow-hidden">
                  <img 
                    src={industrialHero}
                    alt="Industrial facility with NESS energy storage"
                    className="w-full h-full object-cover opacity-20"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80"></div>
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
              Effortless Energy.
              <br />
              <span className="text-energy font-medium">For Every Scale.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From homes to industries, NESS delivers intelligent battery storage for uninterrupted power and smarter savings.
            </p>

            {/* Dual CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Home className="w-6 h-6 mr-3" />
                  For Homes
                </Button>
              </Link>
              
              <Link to="/commercial">
                <Button size="lg" variant="outline" className="border-border hover:bg-muted px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 hover:scale-105">
                  <Building2 className="w-6 h-6 mr-3" />
                  For Businesses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Brand Trust Bar */}
      <section className="py-12 bg-muted/30 border-y border-border/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm font-medium text-energy uppercase tracking-wider">Engineered in India</div>
              <div className="text-xs text-muted-foreground">Built for Indian conditions</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-energy uppercase tracking-wider">LFP Technology</div>
              <div className="text-xs text-muted-foreground">10+ Year Life</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-energy uppercase tracking-wider">BIS / IEC Certified</div>
              <div className="text-xs text-muted-foreground">Safety standards met</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-energy uppercase tracking-wider">99.5% Uptime</div>
              <div className="text-xs text-muted-foreground">Enterprise reliability</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-energy uppercase tracking-wider">Nunam Intelligence</div>
              <div className="text-xs text-muted-foreground">Circular technology</div>
            </div>
          </div>
        </div>
      </section>


      {/* 4️⃣ For Homes */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden bg-card/50 p-12">
                <img 
                  src={nessProProduct}
                  alt="NESS Home Battery System"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
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
                Power that looks as good
                <br />
                <span className="text-energy font-medium">as it performs.</span>
              </h2>

              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Silent, safe, and stylish energy backup for modern Indian homes.
              </p>

              {/* Features list */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">5–20 kWh capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">24+ hour backup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">Solar-ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">App-connected</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-foreground">Zero noise</span>
                </div>
              </div>

              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-10 py-5 text-lg font-medium rounded-xl mt-4">
                  Explore Home Systems
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
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
                  alt="NESS Commercial Battery System"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Why NESS (Unified Value Section) */}
      <section className="py-60 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="space-y-32">
            <div className="animate-fade-in">
              <p className="text-4xl md:text-6xl font-light leading-relaxed">
                Designed for India's heat.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-4xl md:text-6xl font-light leading-relaxed">
                Built for a decade of trust.
              </p>
            </div>
            
            <div className="animate-fade-in space-y-8" style={{ animationDelay: '400ms' }}>
              <p className="text-4xl md:text-6xl font-light leading-relaxed">
                10 years. Fully covered.
              </p>
              <p className="text-xl md:text-2xl font-light text-background/60 max-w-3xl mx-auto leading-relaxed">
                We don't just promise a decade. We guarantee it. Every cell monitored. Every system tested. 
                Because when we say 10 years, we mean it.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <p className="text-5xl md:text-7xl font-medium text-energy leading-relaxed">
                Energy, reinvented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Featured Case Study */}
      <section className="py-40 bg-muted/20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              Proven <span className="text-energy font-medium">Performance</span>
            </h2>
          </div>

          {/* Single prominent case study */}
          <div className="bg-card/60 backdrop-blur-xl border border-border/20 rounded-3xl p-16 hover:bg-card/80 transition-all duration-500">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-lg text-primary font-medium uppercase tracking-wider">EV Charging Hub, Delhi</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-light text-foreground leading-tight">
                500 kWh NESS System
              </h3>
              
              <p className="text-2xl text-muted-foreground font-light leading-relaxed">
                Peak demand management delivering consistent results.
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="text-5xl font-light text-energy">₹2.5L</div>
                  <div className="text-lg text-muted-foreground">Monthly savings</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl font-light text-energy">30%</div>
                  <div className="text-lg text-muted-foreground">Peak shaving achieved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle indicator of more stories */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">One of many success stories</p>
          </div>
        </div>
      </section>

      {/* Why NESS Component - Manufacturing */}
      <WhyNess />

      {/* 8️⃣ Unified CTA / Footer */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-12">
            Own your <span className="text-energy font-medium">energy.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 text-xl font-medium rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Talk to an Expert
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted px-12 py-6 text-xl font-medium rounded-2xl transition-all duration-300 hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </div>

          <div className="pt-12 border-t border-border/20 mt-12">
            <p className="text-sm text-muted-foreground">
              NESS — powered by Nunam
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
