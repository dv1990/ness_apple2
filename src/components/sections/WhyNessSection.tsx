import { Shield, Zap, Home } from "lucide-react";

export default function WhyNessSection() {
  return (
    <section className="py-32 md:py-48 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Why Homeowners Choose NESS
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Clean energy is the new luxury. Here's what makes NESS different.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Silent Guardian */}
          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Silent Guardian</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your neighbors won't know you have backup power. Zero noise. Zero emissions. Pure peace.
              </p>
            </div>
          </div>

          {/* Instant Response */}
          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Instant Response</h3>
              <p className="text-muted-foreground leading-relaxed">
                Switches in 10 milliseconds. Your Wi-Fi doesn't drop. Your calls stay connected. Life continues.
              </p>
            </div>
          </div>

          {/* Whole Home Coverage */}
          <div className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Whole Home Coverage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Run everything—AC, refrigerator, Wi-Fi—for 24+ hours. Not just "essentials." Everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
