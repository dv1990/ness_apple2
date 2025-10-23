import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useInView } from "@/hooks/use-in-view";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import edfLogo from "@/assets/logos/edf-energy.png";
import totalEnergiesLogo from "@/assets/logos/total-energies.png";
import ciscoLogo from "@/assets/logos/cisco.png";
import karnatakaGovtLogo from "@/assets/logos/karnataka-govt.png";
import meityLogo from "@/assets/logos/meity.png";
import mocLogo from "@/assets/logos/ministry-communications.png";

const stats = [
  { value: 100, suffix: "MWh+", label: "Energy Delivered" },
  { value: 1000, suffix: "+", label: "Households Adopted" },
  { value: 5, suffix: "+", label: "Awards Won" }
];

const logos = [
  { src: edfLogo, alt: "EDF Energy", className: "h-12" },
  { src: totalEnergiesLogo, alt: "Total Energies", className: "h-10" },
  { src: ciscoLogo, alt: "Cisco", className: "h-16" },
  { src: karnatakaGovtLogo, alt: "Government of Karnataka", className: "h-16" },
  { src: meityLogo, alt: "Ministry of Electronics and Information Technology", className: "h-14" },
  { src: mocLogo, alt: "Ministry of Communications", className: "h-14" }
];

export const ProofStrips = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { threshold: 0.3, once: true });
  const logosInView = useInView(logosRef, { threshold: 0.3, once: true });

  return (
    <div className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-[#0f0f0f] border-y border-white/5">
      {/* Stats Strip */}
      <div 
        ref={statsRef}
        className={cn(
          "relative py-20 transition-all duration-1000 ease-out",
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={cn(
                  "text-center space-y-3 transition-all duration-700 ease-out",
                  statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-block">
                  <div className="text-6xl md:text-7xl font-light text-white tabular-nums tracking-tight">
                    {statsInView && (
                      <AnimatedCounter 
                        value={stat.value} 
                        duration={2000}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-energy/20 to-blue-500/20 blur-3xl opacity-30 -z-10"></div>
                </div>
                <p className="text-sm uppercase tracking-[0.15em] text-white/50 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Separator line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Logos Strip */}
      <div 
        ref={logosRef}
        className={cn(
          "relative py-16 transition-all duration-1000 ease-out",
          logosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-white/30 font-light mb-12">
            Trusted By
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={cn(
                  "group relative transition-all duration-700 ease-out hover:scale-110",
                  logosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={cn(
                    logo.className,
                    "w-auto object-contain filter grayscale brightness-0 invert opacity-40 group-hover:opacity-70 transition-all duration-500"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-full bg-gradient-radial from-energy/5 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/3 w-[500px] h-full bg-gradient-radial from-blue-500/5 to-transparent blur-3xl pointer-events-none"></div>
    </div>
  );
};
