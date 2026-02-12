import { Shield, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-20" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] font-bold text-foreground/[0.02] select-none pointer-events-none whitespace-nowrap">
        GUARD
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mx-auto mb-8">
            <Shield className="w-9 h-9 text-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[0.95]">
            VERIFICATION IS
            <br />
            <span className="text-gradient">INFRASTRUCTURE</span>
          </h2>
          
          <p className="text-muted-foreground font-mono text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            In a world where AI can imitate anything, truth must be verified locally, instantly, and independently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button 
                size="lg" 
                className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal"
              >
                Schedule Security Consultation
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                size="lg" 
                variant="outline" 
                className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-foreground/20 hover:border-foreground transition-all"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
