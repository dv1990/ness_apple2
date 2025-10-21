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
  Check,
  Mail,
  Package
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
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
    tier: 'Grid Backup',
    image: nessPodImage,
    capacity: '5 kWh',
    backupTime: '12 hours',
    price: '₹89,999',
    idealFor: 'Backup from grid outage',
    features: ['Instant power during blackouts', 'No solar required', 'Simple plug-and-play']
  },
  {
    id: 'oneaio',
    name: 'NESS AIO',
    tier: 'Backup + Solar',
    image: nessCubeImage,
    capacity: '5-20 kWh',
    backupTime: '24-48 hours',
    price: '₹1,39,999',
    idealFor: 'Backup + Solar integration',
    features: ['Built-in solar inverter', 'Grid backup included', 'Save on electricity bills']
  },
  {
    id: 'brick',
    name: 'NESS AC Brick',
    tier: 'Retrofit Solution',
    image: nessProImage,
    capacity: '5-80 kWh',
    backupTime: 'Customizable',
    price: '₹1,89,999',
    idealFor: 'For existing on-grid installations',
    features: ['Works with your current system', 'AC-coupled design', 'Easy to expand']
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
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedAppliances, setSelectedAppliances] = useState<string[]>([]);
  const [homeSize, setHomeSize] = useState('');
  const [hasSolar, setHasSolar] = useState<string>('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Contact form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Phone, Email)",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const totalWatts = selectedAppliances.reduce((sum, appId) => {
        const appliance = commonAppliances.find(a => a.id === appId);
        return sum + (appliance?.watts || 0);
      }, 0);

      const appliancesList = selectedAppliances.map(appId => {
        const appliance = commonAppliances.find(a => a.id === appId);
        return appliance ? `- ${appliance.name}: ${appliance.watts}W (${appliance.hours}h daily)` : '';
      }).filter(Boolean).join('\n');

      const emailContent = `
New Custom Quote Request

CUSTOMER DETAILS:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}
Pincode: ${formData.pincode}

CONFIGURATION:
Selected Product: ${selectedProduct?.name} (${selectedProduct?.tier})
Home Size: ${homeSize}
Solar Panels: ${hasSolar}
Total Power Requirement: ${totalWatts}W

SELECTED APPLIANCES:
${appliancesList}

CUSTOMER MESSAGE:
${formData.message || 'No additional message'}
      `.trim();

      // Using EmailJS - Users need to configure their EmailJS account
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          to_email: 'contact@nunam.com',
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: emailContent
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      );

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with your custom quote.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setStep(1);
        setSelectedProduct(null);
        setSelectedAppliances([]);
        setHomeSize('');
        setHasSolar('');
        setFormData({ name: '', phone: '', email: '', city: '', pincode: '', message: '' });
        setConsent(false);
      }, 2000);

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Setup Required",
        description: "EmailJS needs to be configured. Please see EMAILJS_SETUP.md or contact us at contact@nunam.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <p className="text-lg text-muted-foreground">Pick the solution that fits your needs</p>
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
            <h2 className="text-3xl md:text-4xl font-light">Review & Submit</h2>
            <p className="text-lg text-muted-foreground">Confirm your details to get a custom quote</p>
          </div>

          <Card className="p-6 space-y-6">
            {/* Configuration Summary */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Package className="w-5 h-5" />
                Your Configuration
              </h3>
              
              <div className="flex items-start gap-4 pb-4 border-b">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{selectedProduct.name}</h4>
                  <p className="text-sm text-muted-foreground">{selectedProduct.tier}</p>
                  <p className="text-sm mt-1">{selectedProduct.idealFor}</p>
                  <p className="text-2xl font-bold mt-2">{selectedProduct.price}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Home Size</Label>
                  <p className="font-medium">{homeSize}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Solar Panels</Label>
                  <p className="font-medium">{hasSolar}</p>
                </div>
              </div>

              {selectedAppliances.length > 0 && (
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Appliances to Power</Label>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {selectedAppliances.map((appId) => {
                      const app = commonAppliances.find(a => a.id === appId);
                      return app ? (
                        <div key={appId} className="flex justify-between text-sm">
                          <span>{app.name}</span>
                          <span className="text-muted-foreground">{app.watts}W × {app.hours}h</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                  <div className="flex justify-between font-semibold mt-2 pt-2 border-t">
                    <span>Total Power Required</span>
                    <span>{selectedAppliances.reduce((sum, appId) => {
                      const app = commonAppliances.find(a => a.id === appId);
                      return sum + (app?.watts || 0);
                    }, 0)}W</span>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Your Contact Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input 
                    id="city" 
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input 
                    id="pincode" 
                    placeholder="400001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Additional Requirements (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Any specific requirements or questions?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="flex items-start gap-2">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <Label htmlFor="consent" className="text-sm leading-tight cursor-pointer">
                  I agree to receive information about NESS Energy products and services
                </Label>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="button" variant="outline" size="lg" onClick={handleBack} className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={!consent || isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                Your quote request will be sent to contact@nunam.com
              </p>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
