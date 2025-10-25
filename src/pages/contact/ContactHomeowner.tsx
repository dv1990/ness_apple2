import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FastImage } from "@/components/ui/fast-image";
import { Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/homeowner-hero-battery.webp";

// Lazy load below-the-fold sections
const PhilosophicalPromiseSection = lazy(() => import("@/components/sections/PhilosophicalPromiseSection"));
const ProductSelectorSection = lazy(() => import("@/components/sections/ProductSelectorSection"));
const WhyNessSection = lazy(() => import("@/components/sections/WhyNessSection"));
const SocialProofSection = lazy(() => import("@/components/sections/SocialProofSection"));
const ContactHomeowner = () => {
  return <Layout>
      {/* Full-Screen Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <FastImage
            src={heroImage}
            alt="Premium NESS home battery system with sophisticated wall-mount design"
            className="w-full h-full"
            priority={true}
            width={1920}
            height={1080}
            sizes="100vw"
          />
          {/* Dark overlay for text readability - concentrated on left side only */}
          <div className="absolute inset-y-0 left-0 right-1/2 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
                <span className="text-sm font-medium text-primary">Premium Home Energy</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] text-foreground">
                  Your life doesn't<br />
                  <span className="text-primary font-light">pause</span><br />
                  when the power does
                </h1>
                
                <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                  The new luxury isn't a louder generator.<br />
                  It's silence.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-3 text-sm backdrop-blur-sm bg-background/30 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-foreground">Live monitoring</span>
                </div>
                <div className="flex items-center gap-3 text-sm backdrop-blur-sm bg-background/30 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-foreground">10ms response time</span>
                </div>
              </div>

              <div className="pt-6">
                <a href="#configurator">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                    Design Your System
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stat Cards */}
        

        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Lazy-loaded below-the-fold sections */}
      <Suspense fallback={<div className="py-32 bg-muted/20" />}>
        <div className="cv-auto">
          <PhilosophicalPromiseSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-background" />}>
        <div className="cv-auto">
          <ProductSelectorSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-muted/10" />}>
        <div className="cv-auto">
          <WhyNessSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="py-32 bg-muted/30" />}>
        <div className="cv-auto">
          <SocialProofSection />
        </div>
      </Suspense>
    </Layout>;
};
export default ContactHomeowner;