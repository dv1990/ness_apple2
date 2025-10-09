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