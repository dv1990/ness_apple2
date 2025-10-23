import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, CheckCircle, Users } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight mb-6 tracking-tight">
            Trusted by discerning homeowners across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Star Rating */}
          <div className="text-center p-6">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
            </div>
            <div className="text-3xl font-light mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Customer Rating</div>
          </div>

          {/* BIS Certification */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-light mb-2">BIS Certified</div>
            <div className="text-sm text-muted-foreground">Government Approved</div>
          </div>

          {/* Homes Protected */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-light mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Homes Protected</div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Explore NESS Systems
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
