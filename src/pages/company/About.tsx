import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Award, 
  Globe,
  Factory,
  Lightbulb,
  Heart,
  Microscope,
  Zap,
  Shield,
  Binary,
  FlaskConical,
  Cpu
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Premium Deep Tech */}
      <section className="min-h-screen flex items-center bg-pearl relative overflow-hidden">
        
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 py-32 relative z-10">
          
          <div className="space-y-16 text-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-charcoal/5 rounded-full">
                <span className="text-xs uppercase tracking-[0.12em] text-charcoal/60">Made in India • Made with Care</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-charcoal leading-[0.95] tracking-tight">
                The Energy
                <br />
                That Cares.
              </h1>
              
              <p className="text-2xl md:text-3xl text-charcoal/50 font-light leading-relaxed max-w-3xl mx-auto">
                NESS isn't just about electricity — it's about empathy, reliability, and belonging.
                <br />
                <span className="text-xl text-charcoal/30 italic">Energy that feels human: calm when you need it, strong when you rely on it.</span>
              </p>
            </div>

            {/* Engineering stats */}
            <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  <AnimatedCounter value={4} duration={1800} />
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  Years of R&D
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  <AnimatedCounter value={12} duration={1500} />
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  Quality Checks
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-32 bg-whisper">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
              We don't just store energy.
              <br />
              We nurture it.
            </h2>
            <p className="text-xl text-charcoal/50 font-light max-w-3xl mx-auto leading-relaxed">
              Behind every NESS battery is a team that cares — engineers who see energy as a responsibility, not a commodity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Care for Your Peace of Mind */}
            <AnimatedCard hover="lift" className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Heart className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Care for Homes</h3>
              <p className="text-charcoal/60 leading-relaxed">
                From your mother's prayers to your child's online class, NESS quietly keeps life moving. 
                Every home deserves uninterrupted comfort.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                10+ years. Every morning. No worry.
              </div>
            </AnimatedCard>

            {/* Care for Partners */}
            <AnimatedCard hover="lift" delay={100} className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Users className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Care for People Who Power Others</h3>
              <p className="text-charcoal/60 leading-relaxed">
                For every EPC partner and installer, NESS means simplicity, reliability, and zero-headache service — 
                so they can build reputations on trust, not troubleshooting.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                Systems that work the first time, every time.
              </div>
            </AnimatedCard>

            {/* Care for Planet */}
            <AnimatedCard hover="lift" delay={200} className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Globe className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Care for the Planet</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Circular by intent, efficient by design — NESS is built for a cleaner, more conscious energy future. 
                Every installation leaves the world slightly better.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                Clean energy. Sustainable choice.
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* R&D & Manufacturing Excellence */}
      <section className="py-32 bg-charcoal text-pearl">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-pearl/10 rounded-full">
                  <span className="text-xs uppercase tracking-[0.12em] text-pearl/60">R&D Center • Bangalore</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-extralight leading-tight tracking-tight">
                  Behind every NESS
                  <br />
                  is a promise.
                </h2>
                
                <p className="text-xl text-pearl/60 font-light leading-relaxed">
                  Our Bangalore R&D center isn't just about technology — it's where caring meets precision. 
                  Where engineers obsess over reliability so you never have to. 
                  Where we test for 10 years of peace, not just performance specs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FlaskConical className="w-6 h-6 text-pearl/40" />
                    <div className="text-4xl font-light tabular-nums"><AnimatedCounter value={23} duration={1500} /></div>
                  </div>
                  <div className="text-sm text-pearl/50 uppercase tracking-wider">
                    PhDs on staff
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Binary className="w-6 h-6 text-pearl/40" />
                    <div className="text-4xl font-light tabular-nums"><AnimatedCounter value={847000} duration={2500} />+</div>
                  </div>
                  <div className="text-sm text-pearl/50 uppercase tracking-wider">
                    Test cycles run
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-pearl/40" />
                    <div className="text-4xl font-light tabular-nums"><AnimatedCounter value={12} duration={1800} /></div>
                  </div>
                  <div className="text-sm text-pearl/50 uppercase tracking-wider">
                    AI models deployed
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Microscope className="w-6 h-6 text-pearl/40" />
                    <div className="text-4xl font-light tabular-nums">₹<AnimatedCounter value={47} duration={2000} />Cr</div>
                  </div>
                  <div className="text-sm text-pearl/50 uppercase tracking-wider">
                    Annual R&D spend
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-pearl/5 border border-pearl/10 rounded-2xl p-8 space-y-4">
                <div className="text-xs uppercase tracking-[0.12em] text-pearl/40">Manufacturing Quality</div>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-pearl/70">Cell matching precision</span>
                    <span className="text-2xl font-light tabular-nums">±2mV</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-pearl/70">Quality control points</span>
                    <span className="text-2xl font-light tabular-nums">2,847</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-pearl/70">Defect rate (6 sigma)</span>
                    <span className="text-2xl font-light tabular-nums">{"<"}0.0001%</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-pearl/70">Factory automation</span>
                    <span className="text-2xl font-light tabular-nums">94%</span>
                  </div>
                </div>
              </div>

              <div className="bg-pearl/5 border border-pearl/10 rounded-2xl p-8 space-y-4">
                <div className="text-xs uppercase tracking-[0.12em] text-pearl/40">Certifications</div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-pearl/10 rounded-full text-sm">IEC 62619</span>
                  <span className="px-3 py-1.5 bg-pearl/10 rounded-full text-sm">CE</span>
                  <span className="px-3 py-1.5 bg-pearl/10 rounded-full text-sm">ISO 9001</span>
                  <span className="px-3 py-1.5 bg-pearl/10 rounded-full text-sm">UL 1973</span>
                  <span className="px-3 py-1.5 bg-pearl/10 rounded-full text-sm">BIS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact - Real World Results */}
      <section className="py-32 bg-pearl">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
              Real homes. Real comfort.
            </h2>
            <p className="text-xl text-charcoal/50 font-light max-w-3xl mx-auto leading-relaxed">
              10,000+ families trust NESS to quietly care for their energy. From sunrise to sunset, we're there — invisibly, reliably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-light text-charcoal tabular-nums">
                <AnimatedCounter value={10} duration={2000} />K+
              </div>
              <div className="text-sm uppercase tracking-wider text-charcoal/40">Systems deployed</div>
              <p className="text-xs text-charcoal/30 leading-relaxed pt-2">
                Every home a testament
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-light text-charcoal tabular-nums">
                <AnimatedCounter value={100} duration={2000} />+
              </div>
              <div className="text-sm uppercase tracking-wider text-charcoal/40">MWh delivered</div>
              <p className="text-xs text-charcoal/30 leading-relaxed pt-2">
                Clean. Reliable. Continuous.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-light text-charcoal tabular-nums">
                <AnimatedCounter value={25000} duration={2500} />+
              </div>
              <div className="text-sm uppercase tracking-wider text-charcoal/40">Cycles proven</div>
              <p className="text-xs text-charcoal/30 leading-relaxed pt-2">
                Each one a promise kept
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-light text-charcoal tabular-nums">
                99.94%
              </div>
              <div className="text-sm uppercase tracking-wider text-charcoal/40">System uptime</div>
              <p className="text-xs text-charcoal/30 leading-relaxed pt-2">
                Because almost isn't enough
              </p>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-platinum/30 text-center">
            <p className="text-2xl md:text-3xl text-charcoal/40 font-light italic leading-relaxed max-w-3xl mx-auto">
              "Power cuts don't just disrupt electricity — they interrupt life.
              <br />
              NESS gives families their comfort back."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values - The Why */}
      <section className="py-32 bg-whisper">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
              Why NESS exists.
            </h2>
            <p className="text-xl text-charcoal/50 font-light max-w-3xl mx-auto leading-relaxed">
              NESS was born from a simple idea — that power should never be cold or complicated. It should care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            
            {/* Mission */}
            <div className="bg-pearl border border-platinum/50 rounded-2xl p-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Heart className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-3xl font-light text-charcoal">Our Promise</h3>
              <div className="space-y-4 text-charcoal/60 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-charcoal">To Customers:</strong><br />
                  Peace of mind, powered effortlessly.
                </p>
                <p className="text-lg">
                  <strong className="text-charcoal">To Partners:</strong><br />
                  Systems that work the first time, and every time after.
                </p>
                <p className="text-lg">
                  <strong className="text-charcoal">To the Planet:</strong><br />
                  Every installation leaves the world slightly better.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-pearl border border-platinum/50 rounded-2xl p-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Target className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-3xl font-light text-charcoal">Our Mission</h3>
              <p className="text-lg text-charcoal/60 leading-relaxed">
                To make clean, uninterrupted power simple and accessible — so you can focus on what matters most: 
                living, creating, connecting.
              </p>
              <p className="text-base text-charcoal/50 italic pt-4 border-t border-platinum/30">
                We don't just store energy — we nurture it.
              </p>
            </div>
          </div>

          {/* Our Voice & Values */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Warm, not technical</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                We speak like humans, not manuals. Because energy should feel human: 
                calm when you need it, strong when you rely on it.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Confident, not loud</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                Our silence is our strength. The best power is the one that quietly cares — 
                invisible when life flows as it should.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Inclusive, not corporate</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                We celebrate the community of people who care about energy — 
                the Energy Warriors building a cleaner future together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-charcoal text-pearl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-extralight leading-tight tracking-tight">
                Join the community
                <br />
                that cares.
              </h2>
              
              <p className="text-xl md:text-2xl text-pearl/60 font-light max-w-2xl mx-auto leading-relaxed">
                We call them Energy Warriors — people who choose sustainable living, who install with care, 
                who power homes and hearts with clean energy. Together, we're creating a movement where caring is the most powerful energy of all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-pearl text-charcoal hover:bg-pearl/90 px-10 py-6 text-lg rounded-full">
                  <div className="flex items-center gap-2">
                    <span>Talk to Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Button>
              </Link>
              
              <Link to="/installers">
                <Button size="lg" variant="outline" className="border-pearl/20 text-pearl hover:bg-pearl/10 px-10 py-6 text-lg rounded-full">
                  Partner With Us
                </Button>
              </Link>
            </div>

            <div className="pt-12 text-sm text-pearl/30 italic">
              NESS — because the best power is the one that quietly cares.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;