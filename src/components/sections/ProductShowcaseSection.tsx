import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { PerformanceImage } from "@/components/ui/performance-image";
import nessPodProduct from "@/assets/ness-pod-product.png";
import nessProProduct from "@/assets/ness-pro-product.png";
import nessCubeProduct from "@/assets/ness-cube-resort.webp";

export const ProductShowcaseSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight">
            The NESS family
          </h2>
          <p className="text-xl text-graphite/60 font-light">
            Engineered for excellence. Designed for you.
          </p>
        </div>

        {/* NESS Powerwall - For Homeowners */}
        <div className="mb-24 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-whisper rounded-[3rem] overflow-hidden p-12 lg:p-16 hover:shadow-lifted transition-all duration-700">
            {/* Image */}
            <div className="relative aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <PerformanceImage
                src={nessPodProduct}
                alt="NESS Powerwall"
                className="w-full h-full"
                aspectRatio="1/1"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-energy/10 rounded-full mb-6">
                  <span className="text-sm font-medium text-energy uppercase tracking-wider">For Homeowners</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-light text-graphite mb-6 tracking-tight leading-[1.1]">
                  Your home.<br />Always on.
                </h3>
                <p className="text-xl text-graphite/70 font-light leading-relaxed">
                  Never pause life for a power cut. NESS Powerwall keeps your home running—from morning coffee to midnight Netflix.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                {["5-15 kWh modular capacity", "10ms seamless switchover", "Silent operation, zero maintenance", "Works with solar or grid"].map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-energy mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-graphite/80">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link to="/residential">
                <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-10 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_40px_rgba(0,200,83,0.4)] transition-all duration-500 group">
                  Design Your System
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* NESS Pod - For SMEs & Resorts */}
        <div className="mb-24 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-charcoal rounded-[3rem] overflow-hidden p-12 lg:p-16 hover:shadow-lifted transition-all duration-700">
            {/* Content */}
            <div className="space-y-8 lg:order-1">
              <div>
                <div className="inline-block px-4 py-2 bg-energy/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-energy uppercase tracking-wider">For Businesses</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                  Downtime is<br />not an option.
                </h3>
                <p className="text-xl text-pearl/70 font-light leading-relaxed">
                  When guests expect perfection and operations can't pause, NESS Pod delivers rock-solid reliability at commercial scale.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                {["20-50 kWh scalable systems", "Peak shaving & load management", "Remote monitoring & control", "Reduce diesel dependency by 80%"].map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-energy mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-pearl/80">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link to="/commercial">
                <Button size="lg" className="bg-white hover:bg-white/90 text-graphite px-10 py-6 text-lg rounded-full shadow-lifted hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 group">
                  Explore Commercial Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Image */}
            <div className="relative aspect-square flex items-center justify-center lg:order-2 group-hover:scale-105 transition-transform duration-700">
              <PerformanceImage
                src={nessProProduct}
                alt="NESS Pod"
                className="w-full h-full"
                aspectRatio="1/1"
              />
            </div>
          </div>
        </div>

        {/* NESS Cube - For Industrial */}
        <div className="group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gradient-to-br from-graphite to-charcoal rounded-[3rem] overflow-hidden p-12 lg:p-16 hover:shadow-lifted transition-all duration-700">
            {/* Image */}
            <div className="relative aspect-square flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <PerformanceImage
                src={nessCubeProduct}
                alt="NESS Cube"
                className="w-full h-full"
                aspectRatio="1/1"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-energy/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-energy uppercase tracking-wider">For Industry</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight leading-[1.1]">
                  Power plants<br />in containers.
                </h3>
                <p className="text-xl text-pearl/70 font-light leading-relaxed">
                  From manufacturing floors to data centers—NESS Cube delivers megawatt-scale reliability with precision engineering.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-4">
                {["100+ kWh containerized systems", "Grid stabilization & power quality", "Microgrid & off-grid capable", "Enterprise-grade monitoring & analytics"].map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-energy mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-pearl/80">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link to="/commercial">
                <Button size="lg" className="bg-energy hover:bg-energy-glow text-white px-10 py-6 text-lg rounded-full shadow-glow hover:shadow-[0_0_40px_rgba(0,200,83,0.4)] transition-all duration-500 group">
                  Request Industrial Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
