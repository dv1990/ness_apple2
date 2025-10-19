import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowRight, 
  ArrowLeft, 
  Home, 
  Zap, 
  Sun,
  Wind,
  Tv,
  Coffee,
  Wifi,
  Fan,
  Lightbulb,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';
import nessPodImage from '@/assets/ness-pod-product.png';
import nessProImage from '@/assets/ness-pro-product.png';
import nessCubeImage from '@/assets/ness-cube-product.png';

interface Product {
  id: string;
  name: string;
  tier: string;
  image: string;
  capacity: string;
  backupTime: string;
  price: string;
  idealFor: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'ups',
    name: 'NESS UPS',
    tier: 'Essential',
    image: nessPodImage,
    capacity: '5 kWh',
    backupTime: '12 hours',
    price: '₹89,999',
    idealFor: 'Apartments, Small Homes, Small Offices & Buildings',
    features: ['Pure sine wave energy', 'Wi-Fi never drops', 'Perfect for WFH']
  },
  {
    id: 'oneaio',
    name: 'NESS ONE AIO',
    tier: 'Complete',
    image: nessCubeImage,
    capacity: '5-20 kWh',
    backupTime: '24-48 hours',
    price: '₹1,39,999',
    idealFor: 'Villas & Small Homes',
    features: ['Built-in inverter & solar', '3-12kW inverter', 'Add more units as needed']
  },
  {
    id: 'brick',
    name: 'NESS BRICK',
    tier: 'Customizable',
    image: nessProImage,
    capacity: '5-80 kWh',
    backupTime: 'Customizable',
    price: '₹1,89,999',
    idealFor: 'Villas, Small Offices & Custom Projects',
    features: ['5kWh modular blocks', 'Stackable up to 80kWh', 'Works with Solis, Victron, Studer, Deye']
  }
];

interface Appliance {
  id: string;
  name: string;
  icon: React.ReactNode;
  watts: number;
  hours: number;
}

const commonAppliances: Appliance[] = [
  { id: 'ac', name: 'Air Conditioner', icon: <Wind className="w-5 h-5" />, watts: 1500, hours: 8 },
  { id: 'fridge', name: 'Refrigerator', icon: <Coffee className="w-5 h-5" />, watts: 150, hours: 24 },
  { id: 'tv', name: 'TV', icon: <Tv className="w-5 h-5" />, watts: 100, hours: 6 },
  { id: 'wifi', name: 'Wi-Fi Router', icon: <Wifi className="w-5 h-5" />, watts: 20, hours: 24 },
  { id: 'fan', name: 'Ceiling Fans (3)', icon: <Fan className="w-5 h-5" />, watts: 225, hours: 12 },
  { id: 'lights', name: 'LED Lights (10)', icon: <Lightbulb className="w-5 h-5" />, watts: 100, hours: 8 }
];

export const ProductSelectorWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([]);
  const [homeSize, setHomeSize] = useState('');
  const [hasSolar, setHasSolar] = useState<string>('');
  const [consent, setConsent] = useState(false);

  // Calculate recommended product based on appliances
  const calculateRecommendation = () => {
    const totalWatts = selectedAppliances.reduce((sum, appId) => {
      const appliance = commonAppliances.find(a => a.id === appId);
      return sum + (appliance?.watts || 0);
    }, 0);

    const totalWattHours = selectedAppliances.reduce((sum, appId) => {
      const appliance = commonAppliances.find(a => a.id === appId);
      return sum + ((appliance?.watts || 0) * (appliance?.hours || 0));
    }, 0);

    const kWhNeeded = totalWattHours / 1000;

    if (kWhNeeded < 6) return products[0];
    if (kWhNeeded < 12) return products[1];
    return products[2];
  };

  const toggleAppliance = (appId: string) => {
    setSelectedAppliances(prev => 
      prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId]
    );
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setStep(2);
  };

  const handleNext = () => {
    if (step === 2) {
      // Auto-recommend based on selections
      const recommended = calculateRecommendation();
      setSelectedProduct(recommended);
    }
    setStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    console.log('Form submitted', { selectedProduct, selectedAppliances, homeSize, hasSolar });
  };

  return (
    <div className="w-full">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all",
                step >= s 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div className={cn(
                  "flex-1 h-1 mx-2 transition-all",
                  step > s ? "bg-primary" : "bg-muted"
                )} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between max-w-2xl mx-auto mt-3 text-sm text-muted-foreground">
          <span>Choose Product</span>
          <span>Size Your Home</span>
          <span>Contact Details</span>
        </div>
      </div>

      {/* Step 1: Product Selection */}
      {step === 1 && (
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-light">Choose your power level</h2>
            <p className="text-lg text-muted-foreground">Select the system that matches your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className={cn(
                  "group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/50",
                  selectedProduct?.id === product.id && "ring-2 ring-primary"
                )}
                onClick={() => handleProductSelect(product)}
              >
                <div className="p-6 space-y-6">
                  {/* Image */}
                  <div className="aspect-square bg-muted/30 rounded-xl flex items-center justify-center p-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <Badge variant="secondary" className="mb-2">{product.tier}</Badge>
                      <h3 className="text-2xl font-semibold">{product.name}</h3>
                    </div>

                    <div className="flex items-baseline justify-between text-sm">
                      <span className="text-muted-foreground">Capacity</span>
                      <span className="text-lg font-medium">{product.capacity}</span>
                    </div>

                    <div className="flex items-baseline justify-between text-sm">
                      <span className="text-muted-foreground">Backup</span>
                      <span className="text-lg font-medium">{product.backupTime}</span>
                    </div>

                    <div className="pt-3 border-t border-border/50">
                      <p className="text-sm text-muted-foreground mb-3">{product.idealFor}</p>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="text-3xl font-light mb-2">{product.price}</div>
                      <Button className="w-full">
                        Select {product.name}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Home Sizing */}
      {step === 2 && (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-light">Size it for your home</h2>
            <p className="text-lg text-muted-foreground">Help us recommend the perfect capacity</p>
          </div>

          <Card className="p-8 space-y-8">
            {/* Home Size */}
            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                What's your home size?
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['1-2 BHK', '2-3 BHK', '3-4 BHK', '4+ BHK / Villa'].map((size) => (
                  <Button
                    key={size}
                    variant={homeSize === size ? 'default' : 'outline'}
                    onClick={() => setHomeSize(size)}
                    className="h-auto py-4"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Solar Status */}
            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary" />
                Do you have solar panels?
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {['Yes', 'No', 'Planning to add'].map((status) => (
                  <Button
                    key={status}
                    variant={hasSolar === status ? 'default' : 'outline'}
                    onClick={() => setHasSolar(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>

            {/* Appliance Selector */}
            <div className="space-y-4">
              <Label className="text-lg flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                What do you want to power during outages?
              </Label>
              <p className="text-sm text-muted-foreground">Select all that apply</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonAppliances.map((appliance) => (
                  <div
                    key={appliance.id}
                    onClick={() => toggleAppliance(appliance.id)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                      selectedAppliances.includes(appliance.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      selectedAppliances.includes(appliance.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}>
                      {appliance.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{appliance.name}</div>
                      <div className="text-xs text-muted-foreground">{appliance.watts}W</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation Preview */}
            {selectedAppliances.length > 0 && (
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Based on your selections
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We recommend: <span className="text-foreground font-medium">{calculateRecommendation().name}</span>
                </p>
                <div className="text-sm text-muted-foreground">
                  Total estimated load: {selectedAppliances.reduce((sum, appId) => {
                    const appliance = commonAppliances.find(a => a.id === appId);
                    return sum + (appliance?.watts || 0);
                  }, 0)}W
                </div>
              </div>
            )}
          </Card>

          <div className="flex justify-between gap-4">
            <Button variant="outline" onClick={handleBack} size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button 
              onClick={handleNext} 
              size="lg"
              disabled={!homeSize || !hasSolar || selectedAppliances.length === 0}
            >
              Continue to Contact
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Form */}
      {step === 3 && selectedProduct && (
        <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-light">Let's get you powered up</h2>
            <p className="text-lg text-muted-foreground">We'll contact you with a customized quote</p>
          </div>

          {/* Selected Configuration Summary */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="font-medium mb-4">Your Configuration</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Product:</span>
                <span className="ml-2 font-medium">{selectedProduct.name}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Home Size:</span>
                <span className="ml-2 font-medium">{homeSize}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Solar:</span>
                <span className="ml-2 font-medium">{hasSolar}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Appliances:</span>
                <span className="ml-2 font-medium">{selectedAppliances.length} selected</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" placeholder="Your city" required />
                </div>
                <div>
                  <Label htmlFor="pin">PIN Code *</Label>
                  <Input id="pin" placeholder="400001" required />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your energy needs..."
                  rows={4}
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  required
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed">
                  I consent to NESS Energy contacting me about their products and services.
                </Label>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={handleBack} size="lg" className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button type="submit" disabled={!consent} size="lg" className="flex-1">
                  Get My Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
