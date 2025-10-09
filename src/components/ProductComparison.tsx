import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import nessPodImage from "@/assets/ness-pod-product.png";
import nessProImage from "@/assets/ness-pro-product.png";
import nessCubeImage from "@/assets/ness-cube-product.png";

const products = [
  {
    id: "pod",
    name: "NESS POD",
    tier: "ESSENTIAL",
    image: nessPodImage,
    lifeBenefit: "Your life doesn't stop for a 4-hour power cut.",
    whatYouGet: "Essentials stay on. Work continues. Life stays normal.",
    invisibleBenefit: "No flicker",
    backupTime: "12h",
    switchover: "10ms",
    coverage: "5yr",
    scenarios: [
      "Your Zoom call doesn't drop",
      "Your child's online class continues",
      "The Wi-Fi never goes down"
    ],
    priceLabel: "Investment",
    price: "₹89,999",
    targetAudience: "Apartments and smaller homes",
    highlight: false
  },
  {
    id: "cube",
    name: "NESS AIO",
    tier: "COMPLETE",
    image: nessCubeImage,
    lifeBenefit: "Never think about power. Ever.",
    whatYouGet: "Solar + battery combined. Energy independence for medium homes.",
    invisibleBenefit: "Instant switchover",
    backupTime: "24h",
    switchover: "Instant",
    coverage: "7yr",
    scenarios: [
      "Your AC runs all night",
      "The refrigerator never stops",
      "You forget power cuts exist"
    ],
    priceLabel: "Investment",
    price: "₹1,39,999",
    targetAudience: "Medium homes seeking energy independence",
    highlight: false
  },
  {
    id: "pro",
    name: "NESS PRO",
    tier: "ULTIMATE",
    image: nessProImage,
    lifeBenefit: "Complete luxury. Complete silence.",
    whatYouGet: "Your entire home ecosystem. Backup, intelligence, and luxury for larger homes.",
    invisibleBenefit: "Seamless switchover",
    backupTime: "48h",
    switchover: "Seamless",
    coverage: "10yr",
    scenarios: [
      "Run everything—for 48 hours",
      "Your neighbors won't know the grid failed",
      "Absolute silence. Zero emissions."
    ],
    priceLabel: "Investment",
    price: "₹1,89,999",
    targetAudience: "Larger homes demanding ultimate peace",
    highlight: true,
    badge: "Ultimate"
  }
];

export const ProductComparison = () => {

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="text-center space-y-6 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Which life do you want?
        </h2>
        <p className="text-xl text-muted-foreground">
          The new luxury isn't what you own. It's what you never worry about.
        </p>
      </div>

      {/* Product Cards - Premium Layout */}
      <div className="grid lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <Card 
            key={product.id}
            className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl ${
              product.highlight 
                ? 'ring-2 ring-primary/30 shadow-xl' 
                : 'border-border/50 hover:border-primary/50'
            }`}
          >
            {/* Badge */}
            {product.badge && (
              <div className="absolute top-6 right-6 z-10">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs tracking-wider">
                  {product.badge}
                </Badge>
              </div>
            )}
            
            <CardContent className="p-0">
              {/* Product Image Section */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Premium Home Battery`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-6">
                {/* Product Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {product.tier}
                  </p>
                </div>

                {/* Life Benefit - The Hero Message */}
                <div className="space-y-3 py-6 border-y border-border/50">
                  <p className="text-lg font-medium leading-relaxed">
                    {product.lifeBenefit}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.whatYouGet}
                  </p>
                </div>

                {/* Invisible Made Visible - Key Specs */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-light mb-1">{product.backupTime}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      Backup
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">{product.switchover}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      Switchover
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-light mb-1">{product.coverage}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      Coverage
                    </div>
                  </div>
                </div>

                {/* What Life Feels Like - Scenarios */}
                <div className="space-y-3">
                  {product.scenarios.map((scenario, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {scenario}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Target Audience */}
                <div className="pt-4">
                  <p className="text-xs text-muted-foreground italic">
                    {product.targetAudience}
                  </p>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.priceLabel}
                    </span>
                    <span className="text-3xl font-light">{product.price}</span>
                  </div>
                  <Button 
                    className={`w-full ${product.highlight ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={product.highlight ? "default" : "outline"}
                  >
                    Configure {product.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Message */}
      <div className="text-center px-6 max-w-2xl mx-auto space-y-4">
        <p className="text-lg text-muted-foreground italic">
          "Most families notice their battery when it fails.<br />
          NESS families don't notice it at all."
        </p>
      </div>
    </div>
  );
};