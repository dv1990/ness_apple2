import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FastImage } from "@/components/ui/fast-image";
import heroHome from "@/assets/hero-homeowners.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <FastImage
          src={heroHome}
          alt="Modern Indian villa with NESS Powerwall"
          className="w-full h-full"
          priority={true}
          width={1920}
          height={1080}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-8">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          <h1 className="text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            Power you<br />can count on.<br />When everything<br />else fails.
          </h1>
          
          <p className="text-2xl text-pearl/90 font-light max-w-xl leading-relaxed">
            The lights stay on. Work continues. Life doesn't stop. Because NESS was built for moments that matter—engineered to outlast India's harshest conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/residential">
              <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-10 py-7 text-lg rounded-full shadow-glow hover:shadow-[0_0_50px_rgba(0,200,83,0.5)] transition-all duration-500">
                Design My System
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            
            <Link to="/residential">
              <Button variant="outline" size="lg" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full">
                Explore Products
              </Button>
            </Link>
          </div>

          {/* Pulsing LED Indicator */}
          <div className="flex items-center gap-3 pt-8">
            <div className="relative">
              <div className="w-3 h-3 bg-energy rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-energy rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-sm text-white/60 uppercase tracking-wider">System Active</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce" style={{
        animationDuration: '3s'
      }}>
        <div className="flex flex-col items-center gap-3 opacity-40 hover:opacity-60 transition-opacity">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-light">Scroll</span>
        </div>
      </div>
    </section>
  );
};
