import { ProductSelectorWizard } from "@/components/ProductSelectorWizard";

export default function ProductSelectorSection() {
  return (
    <section id="configurator" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 via-background to-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Personalized Design</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
            Tell us about your home.<br />
            <span className="text-muted-foreground">We'll design your energy sanctuary.</span>
          </h2>
        </div>
        
        <ProductSelectorWizard />
      </div>
    </section>
  );
}
