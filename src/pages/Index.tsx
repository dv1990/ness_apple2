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
              Cut Energy Bills by 40%.
              <br />
              <span className="text-energy font-semibold">24+ Hour Guaranteed Backup.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trusted by 1,000+ homes and 10+ businesses.
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
      <section className="py-12 bg-gray-50/50 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">Tested at 50°C</div>
              <div className="text-xs text-gray-500">Jharkhand, 3 years running</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">10+ Year Life</div>
              <div className="text-xs text-gray-500">LFP Technology</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">BIS Certified</div>
              <div className="text-xs text-gray-500">IEC Standards</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">99.5% Uptime</div>
              <div className="text-xs text-gray-500">2,000+ Installations</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wider">Made for India</div>
              <div className="text-xs text-gray-500">48V to 400V</div>
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
                Beautiful energy.
                <br />
                <span className="text-energy font-medium">Zero compromise.</span>
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
            <div className="animate-fade-in space-y-4">
              <p className="text-4xl md:text-5xl font-light leading-relaxed">
                Tested at 50°C in Jharkhand.
              </p>
              <p className="text-xl md:text-2xl font-light text-white/60 max-w-3xl mx-auto leading-relaxed">
                3 years running seamlessly. Zero degradation. Built for India's voltage fluctuations (160V-270V).
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="text-4xl md:text-5xl font-light leading-relaxed">
                Unlike imported batteries, engineered for Indian conditions.
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

      {/* 7️⃣ Case Studies - Dual Stories */}
      <section className="py-40 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8">
              Proven <span className="text-energy font-medium">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From homes to industries, real savings and real reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Case Study */}
            <div className="bg-gray-50 border border-gray-200/50 rounded-3xl p-12 hover:bg-gray-100/50 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-energy rounded-full"></div>
                  <span className="text-sm text-gray-900 font-medium uppercase tracking-wider">Villa, Gurgaon</span>
                </div>
                
                <h3 className="text-3xl font-light text-foreground leading-tight">
                  15 kWh Home System
                </h3>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Running fully off-grid for 18 months. Zero grid dependency.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-energy">₹18K</div>
                    <div className="text-sm text-gray-600">Monthly savings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-energy">24hrs</div>
                    <div className="text-sm text-gray-600">Daily backup</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Case Study */}
            <div className="bg-gray-50 border border-gray-200/50 rounded-3xl p-12 hover:bg-gray-100/50 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-900 font-medium uppercase tracking-wider">EV Hub, Delhi</span>
                </div>
                
                <h3 className="text-3xl font-light text-foreground leading-tight">
                  500 kWh System
                </h3>
                
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Peak demand management delivering consistent results.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-energy">₹2.5L</div>
                    <div className="text-sm text-gray-600">Monthly savings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-light text-energy">30%</div>
                    <div className="text-sm text-gray-600">Peak shaving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle indicator of more stories */}
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">Trusted across 2,000+ installations nationwide</p>
          </div>
        </div>
      </section>

      {/* Why NESS Component - Manufacturing */}
      <WhyNess />

      {/* 8️⃣ Unified CTA / Footer */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Ready to <span className="text-energy font-semibold">cut your energy bills?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Calculate your savings or speak with our energy experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-medium rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Calculate Your Savings
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105">
                Talk to an Expert
              </Button>
            </Link>
          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-2">
              No hidden costs. 10-year warranty. 4-hour installation.
            </p>
          </div>

          <div className="pt-12 border-t border-gray-200/50 mt-12">
            <p className="text-xs text-gray-500">
              NESS — powered by Nunam
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
