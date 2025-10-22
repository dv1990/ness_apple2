import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { useNessExperience } from '@/contexts/NessExperienceContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { pageVariants } from '@/config/motion';

export const ContactDetails: React.FC = () => {
  const { contactInfo, setContactInfo, resetExperience } = useNessExperience();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState(contactInfo.name || '');
  const [city, setCity] = useState(contactInfo.city || '');
  const [phone, setPhone] = useState(contactInfo.phone || '');
  const [email, setEmail] = useState(contactInfo.email || '');
  const [callBack, setCallBack] = useState(contactInfo.callBack || false);
  const [sendWhatsApp, setSendWhatsApp] = useState(contactInfo.sendWhatsApp || false);

  const isComplete = name && city && phone && email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    setIsSubmitting(true);
    setContactInfo({ name, city, phone, email, callBack, sendWhatsApp });

    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'Your personalized NESS plan is being prepared. We\'ll contact you shortly.',
      });
      setIsSubmitting(false);
      
      // Reset after showing success
      setTimeout(() => {
        resetExperience();
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-2xl mx-auto space-y-8"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Almost there</h1>
        <p className="text-lg text-muted-foreground">
          Let's finalize your personalized NESS plan
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="text-lg p-6"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">City</label>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Your city"
              className="text-lg p-6"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone</label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="text-lg p-6"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="text-lg p-6"
              required
            />
          </div>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center space-x-3">
            <Checkbox
              id="callback"
              checked={callBack}
              onCheckedChange={(checked) => setCallBack(checked as boolean)}
            />
            <label
              htmlFor="callback"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call me back
            </label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="whatsapp"
              checked={sendWhatsApp}
              onCheckedChange={(checked) => setSendWhatsApp(checked as boolean)}
            />
            <label
              htmlFor="whatsapp"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Send this design on WhatsApp
            </label>
          </div>
        </div>

        <div className="pt-6 space-y-4">
          <Button
            type="submit"
            size="lg"
            disabled={!isComplete || isSubmitting}
            className="w-full text-lg py-6"
          >
            {isSubmitting ? 'Creating your plan...' : 'Create My NESS Plan'}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Your details stay private—used only to craft your design.
          </p>
        </div>
      </form>
    </motion.div>
  );
};
