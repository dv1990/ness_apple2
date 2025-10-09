import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Form validation schema
const contactSchema = z.object({
  company: z.string().trim().min(2, "Company name must be at least 2 characters").max(200, "Company name too long"),
  contact: z.string().trim().min(2, "Contact name required").max(100, "Name too long"),
  monthlySpend: z.string().trim().min(1, "Monthly spend required").max(20, "Invalid amount")
});

const CommercialEnhanced = () => {
  const [monthlySpend, setMonthlySpend] = useState("");
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    monthlySpend: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const calculateSavings = (spend: number) => {
    const annualSavings = spend * 12 * 0.42; // 42% savings
    const paybackMonths = Math.round(spend * 12 * 4.3 / annualSavings);
    const twentyFiveYearValue = annualSavings * 25;
    return {
      annualSavings: Math.round(annualSavings),
      paybackMonths,
      twentyFiveYearValue: Math.round(twentyFiveYearValue)
    };
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const savings = monthlySpend ? calculateSavings(parseInt(monthlySpend)) : null;

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        
        {/* Hero Section - Apex Story First */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-8 py-32">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left: The Story */}
              <div className="space-y-12 animate-fade-in">
                <div className="space-y-8">
                  {/* Kicker */}
                  <div className="text-energy text-sm uppercase tracking-wider font-medium">
                    Apex Auto Components, Chennai
                  </div>
                  
                  {/* Headline */}
                  <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.1] tracking-tight">
                    This factory stopped paying for diesel.
                    <br />
                    <span className="text-muted-foreground">18 months later,</span>
                    <br />
                    <span className="text-energy">the system paid for itself.</span>
                  </h1>
                  
                  {/* Subhead */}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    2 MW manufacturing facility. Peak demand charges: ₹96L annually. 
                    Diesel generator running 12 hours daily.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-3xl font-light text-energy">₹1.8Cr</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Invested</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-light text-energy">18mo</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Payback</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-light text-energy">62%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Peak cut</div>
                  </div>
                </div>
              </div>

              {/* Right: The Numbers */}
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-3xl p-10 shadow-lg">
                  <div className="space-y-8">
                    {/* Investment */}
                    <div className="text-center pb-8 border-b border-border">
                      <div className="text-sm text-muted-foreground mb-3 uppercase tracking-wide">System Cost</div>
                      <div className="text-6xl font-light text-foreground">₹1.8Cr</div>
                    </div>

                    {/* Savings Breakdown */}
                    <div className="space-y-6">
                      <div className="flex justify-between items-baseline py-3 border-b border-border/50">
                        <div className="text-base text-muted-foreground">Demand charges eliminated</div>
                        <div className="text-2xl font-medium text-energy">₹96L/yr</div>
                      </div>

                      <div className="flex justify-between items-baseline py-3 border-b border-border/50">
                        <div className="text-base text-muted-foreground">Diesel costs eliminated</div>
                        <div className="text-2xl font-medium text-energy">₹18L/yr</div>
                      </div>

                      <div className="flex justify-between items-baseline pt-6">
                        <div className="text-lg font-medium text-foreground">Total annual savings</div>
                        <div className="text-4xl font-semibold text-energy">₹1.18Cr</div>
                      </div>
                    </div>

                    {/* Payback */}
                    <div className="bg-energy/10 rounded-2xl p-6 text-center">
                      <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">System paid back in</div>
                      <div className="text-5xl font-bold text-foreground">18 months</div>
                    </div>
                  </div>
                </div>

                {/* What Happened */}
                <div className="space-y-4 px-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-energy mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Peak demand: 2.8 MW → 1.06 MW
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-energy mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Diesel generator retired completely
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-energy mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Microgrid activated 47 times in Year 1
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-energy mt-0.5 flex-shrink-0" />
                    <div className="text-base text-muted-foreground">
                      Zero production downtime
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-muted/30 border-l-4 border-energy rounded-r-xl p-6">
                  <p className="text-lg text-foreground italic leading-relaxed mb-3">
                    "System paid for itself faster than we financed it."
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    — Rajesh Kumar, CFO, Apex Auto Components
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ROI Calculator Section - Your Numbers */}
        <section className="py-32 bg-muted/30">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-tight">
                What would your factory save?
              </h2>
              <p className="text-xl text-muted-foreground">
                Enter your monthly electricity spend. See your exact payback.
              </p>
            </div>

            <Card className="bg-card shadow-xl">
              <CardContent className="pt-12 pb-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-lg font-medium text-foreground block text-center">
                      Monthly electricity spend
                    </label>
                    <div className="relative max-w-md mx-auto">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">₹</span>
                      <Input
                        type="number"
                        value={monthlySpend}
                        onChange={(e) => setMonthlySpend(e.target.value)}
                        className="pl-12 pr-6 py-8 text-3xl font-light text-center rounded-2xl border-2 focus:border-energy"
                        placeholder="500000"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Your average monthly electricity bill
                    </p>
                  </div>

                  {savings && (
                    <div className="pt-8 space-y-8 border-t border-border animate-fade-in">
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-3 p-6 bg-muted/30 rounded-2xl">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide">Annual Savings</div>
                          <div className="text-4xl font-bold text-energy">
                            {formatCurrency(savings.annualSavings)}
                          </div>
                        </div>
                        <div className="text-center space-y-3 p-6 bg-energy/10 rounded-2xl border-2 border-energy">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide">Payback Period</div>
                          <div className="text-4xl font-bold text-foreground">
                            {savings.paybackMonths} months
                          </div>
                        </div>
                        <div className="text-center space-y-3 p-6 bg-muted/30 rounded-2xl">
                          <div className="text-sm text-muted-foreground uppercase tracking-wide">25-Year Value</div>
                          <div className="text-4xl font-bold text-energy">
                            {formatCurrency(savings.twentyFiveYearValue)}
                          </div>
                        </div>
                      </div>

                      <div className="text-center pt-6">
                        <Button
                          size="lg"
                          onClick={() => {
                            // Scroll to form
                            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="bg-energy hover:bg-energy-dark text-primary-foreground px-12 py-6 rounded-2xl text-lg group"
                        >
                          Get Your Detailed Proposal
                          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section - One Path Forward */}
        <section className="py-32 bg-background">
          <div id="contact-form" className="max-w-3xl mx-auto px-8">
            <div className="text-center space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight tracking-tight">
                  Request a site audit.
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We'll show you the exact system, exact savings, exact payback. 
                  If it doesn't work on paper, we don't waste your time.
                </p>
              </div>
              
              <Card className="bg-card max-w-xl mx-auto shadow-xl">
                <CardContent className="pt-12 pb-12">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormErrors({});
                      const validation = contactSchema.safeParse(formData);
                      if (!validation.success) {
                        const errors: Record<string, string> = {};
                        validation.error.errors.forEach((err) => {
                          if (err.path[0]) errors[err.path[0].toString()] = err.message;
                        });
                        setFormErrors(errors);
                        return;
                      }
                      // Handle form submission
                      const message = `New C&I inquiry from ${encodeURIComponent(
                        formData.company
                      )}. Contact: ${encodeURIComponent(
                        formData.contact
                      )}. Monthly spend: ₹${encodeURIComponent(formData.monthlySpend)}`;
                      window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
                    }}
                  >
                    <div className="space-y-2">
                      <Input
                        placeholder="Company name"
                        className={`text-lg py-6 border-2 focus:border-energy transition-colors rounded-xl ${
                          formErrors.company ? 'border-red-500' : ''
                        }`}
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                      />
                      {formErrors.company && (
                        <p className="text-sm text-red-500">{formErrors.company}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Contact person name"
                        className={`text-lg py-6 border-2 focus:border-energy transition-colors rounded-xl ${
                          formErrors.contact ? 'border-red-500' : ''
                        }`}
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contact: e.target.value,
                          }))
                        }
                      />
                      {formErrors.contact && (
                        <p className="text-sm text-red-500">{formErrors.contact}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Monthly electricity spend (₹)"
                        type="number"
                        className={`text-lg py-6 border-2 focus:border-energy transition-colors rounded-xl ${
                          formErrors.monthlySpend ? 'border-red-500' : ''
                        }`}
                        value={formData.monthlySpend}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            monthlySpend: e.target.value,
                          }))
                        }
                      />
                      {formErrors.monthlySpend && (
                        <p className="text-sm text-red-500">{formErrors.monthlySpend}</p>
                      )}
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-energy hover:bg-energy-dark text-primary-foreground py-6 rounded-2xl text-lg hover:scale-105 transition-transform duration-300"
                    >
                      Request Site Audit
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="flex items-center justify-center space-x-2 text-muted-foreground pt-8">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-energy" />
                <span>Trusted by 2,800+ industrial facilities across India</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommercialEnhanced;
