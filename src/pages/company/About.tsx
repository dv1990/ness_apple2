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
                <span className="text-xs uppercase tracking-[0.12em] text-charcoal/60">Deep Tech • Made in India</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-charcoal leading-[0.95] tracking-tight">
                We engineer
                <br />
                peace of mind.
              </h1>
              
              <p className="text-2xl md:text-3xl text-charcoal/50 font-light leading-relaxed max-w-3xl mx-auto">
                Battery technology so advanced, you'll never think about it.
                <br />
                <span className="text-xl text-charcoal/30 italic">That's the engineering challenge we live for.</span>
              </p>
            </div>

            {/* Engineering stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  <AnimatedCounter value={127} duration={2000} />
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  Patents Filed
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  <AnimatedCounter value={18} duration={1800} />%
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  R&D Investment
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  <AnimatedCounter value={2847} duration={2500} />
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  Quality Checks
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-light text-charcoal tabular-nums">
                  0
                </div>
                <div className="text-xs uppercase tracking-wider text-charcoal/40">
                  Compromises
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
              Obsessed with the invisible.
            </h2>
            <p className="text-xl text-charcoal/50 font-light max-w-3xl mx-auto leading-relaxed">
              The best technology is the technology you never notice. That takes 10,000 hours of engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Cell-Level Precision */}
            <AnimatedCard hover="lift" className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Microscope className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Cell-Level Obsession</h3>
              <p className="text-charcoal/60 leading-relaxed">
                We match cells within ±2 millivolts. Most companies stop at ±10mV. 
                That 8mV difference? It's 5 extra years of life.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                147 engineers. One obsession.
              </div>
            </AnimatedCard>

            {/* Thermal Intelligence */}
            <AnimatedCard hover="lift" delay={100} className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Zap className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Thermal Intelligence</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Every 5 seconds, we measure 64 thermal points per battery. 
                Predictive algorithms detect failures 72 hours before they happen.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                17,280 health checks per day.
              </div>
            </AnimatedCard>

            {/* Safety Architecture */}
            <AnimatedCard hover="lift" delay={200} className="bg-pearl border border-platinum/50 p-10 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Shield className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-2xl font-light text-charcoal">Seven Safety Layers</h3>
              <p className="text-charcoal/60 leading-relaxed">
                Overvoltage. Undervoltage. Overcurrent. Temperature. Short circuit. 
                EMI protection. Software watchdog. Seven ways we keep you safe.
              </p>
              <div className="text-sm text-charcoal/30 pt-2 border-t border-platinum/30">
                Zero thermal events. Ever.
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
                  Where impossible
                  <br />
                  becomes routine.
                </h2>
                
                <p className="text-xl text-pearl/60 font-light leading-relaxed">
                  Our R&D facility isn't just a lab. It's where PhD electrochemists argue with 
                  mechanical engineers at 2 AM. Where we test batteries in conditions they'll never see. 
                  Where "good enough" is a phrase nobody dares speak.
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
              Engineering that matters.
            </h2>
            <p className="text-xl text-charcoal/50 font-light max-w-3xl mx-auto leading-relaxed">
              32 months of real-world data. From Rajasthan's 50°C summers to Kerala's monsoons.
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
              "In 10 years, we've never had to explain what peace of mind means
              <br />
              to a family who has it."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values - The Why */}
      <section className="py-32 bg-whisper">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl md:text-7xl font-extralight text-charcoal leading-tight tracking-tight">
              Why we do this.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            
            {/* Mission */}
            <div className="bg-pearl border border-platinum/50 rounded-2xl p-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Target className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-3xl font-light text-charcoal">Mission</h3>
              <p className="text-lg text-charcoal/60 leading-relaxed">
                Eliminate energy anxiety from every Indian home and business through battery technology 
                so safe, so reliable, so intelligent that it becomes invisible.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-pearl border border-platinum/50 rounded-2xl p-12 space-y-6">
              <div className="w-14 h-14 rounded-full bg-whisper flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-charcoal" />
              </div>
              <h3 className="text-3xl font-light text-charcoal">Vision</h3>
              <p className="text-lg text-charcoal/60 leading-relaxed">
                An India where power cuts are history. Where every rooftop generates energy. 
                Where technology serves humanity's deepest need—not to be afraid of the dark.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Safety. Always.</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                Every design decision asks one question: "Will this keep a family safe?"
                If the answer isn't yes, we start over.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Microscope className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Details matter.</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                The difference between good and great is 2 millivolts. Between safe and sorry, 
                one thermal sensor. We obsess over the invisible.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pearl border border-platinum/50 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-charcoal" />
              </div>
              <h3 className="text-xl font-light text-charcoal">Human first.</h3>
              <p className="text-charcoal/50 leading-relaxed text-sm">
                Technology exists to serve people, not impress them. The best tech is the tech 
                you never think about. That's our north star.
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
                Join the movement.
              </h2>
              
              <p className="text-xl md:text-2xl text-pearl/60 font-light max-w-2xl mx-auto leading-relaxed">
                For homeowners who refuse to compromise. For installers who take pride in their work. 
                For a future where power is a right, not a privilege.
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
              Built in Bangalore. Trusted across India. Engineering tomorrow's energy, today.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;