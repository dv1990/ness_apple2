import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactHomeowner = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Premium Home Energy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Your child's exam. Your work deadline.<br />
            <span className="text-primary">None of it stops.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The new luxury isn't a louder generator.<br />
            It's silence.
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
            Tell us about your home. We'll recommend the perfect system for uninterrupted peace of mind.
          </p>
        </div>
      </section>

      {/* Journey Selector Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-[hsl(var(--muted)/0.2)] to-background">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find your way to effortless power.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every home's journey is unique — choose the path that feels like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 - Solar Owner */}
            <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 hover:shadow-primary/10">
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-6xl">☀️</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Your sun deserves to work from home.
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You already create clean power. Add NESS to store it — and let every ray light your nights.
              </p>
              
              <p className="text-sm text-muted-foreground/80 mb-6 italic">
                Store what you generate. Use what you store.
              </p>
              
              <Button 
                className="w-full group-hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Keep My Sunlight Home →
              </Button>
            </div>

            {/* Card 2 - Hybrid Home */}
            <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 hover:shadow-primary/10">
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Begin your home's solar story.
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Go fully hybrid with solar + NESS. Generate, store, and use clean energy the way nature intended.
              </p>
              
              <p className="text-sm text-muted-foreground/80 mb-6 italic">
                Complete energy independence starts here.
              </p>
              
              <Button 
                className="w-full group-hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Build My Self-Powered Home →
              </Button>
            </div>

            {/* Card 3 - Backup */}
            <div className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20 hover:shadow-primary/10">
              <div className="mb-6 h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Stay calm when the grid isn't.
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Start simple with a quiet NESS backup. Reliable, ready, and the first step toward independence.
              </p>
              
              <p className="text-sm text-muted-foreground/80 mb-6 italic">
                Peace of mind in 10 milliseconds.
              </p>
              
              <Button 
                className="w-full group-hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Secure My Home Backup →
              </Button>
            </div>
          </div>

          <p className="text-center text-lg text-muted-foreground/80 italic max-w-3xl mx-auto leading-relaxed">
            Whichever path you choose, you're not just powering your home —<br />
            you're gifting your children a cleaner, brighter tomorrow.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-3xl px-6">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Get Your Home Assessment</h2>
              <p className="text-muted-foreground">
                No pushy sales calls. Just honest guidance from energy experts who understand Indian homes.
              </p>
            </div>
            
            <ContactForm type="homeowner" />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Homeowners Choose NESS</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clean energy is the new luxury. Here's what makes NESS different.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔇</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Absolute Silence</h3>
              <p className="text-muted-foreground">
                Your neighbors won't know you have backup power. Zero noise. Zero emissions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Switch in 10ms</h3>
              <p className="text-muted-foreground">
                Power transitions so fast, you won't notice. Your Wi-Fi doesn't drop. Your calls don't disconnect.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Whole Home Coverage</h3>
              <p className="text-muted-foreground">
                Run everything—AC, refrigerator, Wi-Fi—for 24+ hours. Not just "essentials."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/">
              <Button variant="outline" size="lg">
                Explore NESS Systems
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactHomeowner;