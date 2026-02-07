import { Shield, CheckCircle, AlertTriangle, XCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-geometric opacity-40" />
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-diagonal opacity-20" />
      
      {/* Large typography background element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
        REAL?
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-8 reveal">
              <span className="w-12 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                On-Device AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-6 reveal stagger-1">
              IS THIS
              <br />
              <span className="text-gradient">REAL?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 reveal stagger-2 font-mono leading-relaxed">
              Detect deepfakes, AI voice clones, and synthetic content. 
              All on-device. Completely private. No internet required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 reveal stagger-3">
              <Button 
                size="lg" 
                className="font-mono uppercase text-xs tracking-wider h-14 px-8 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal"
              >
                Start Free Trial
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-mono uppercase text-xs tracking-wider h-14 px-8 border-2 border-foreground/20 hover:border-foreground hover:bg-transparent transition-all"
                >
                  See Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-12 reveal stagger-4">
              {[
                "100% Private",
                "Works Offline", 
                "Instant Results"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  <span className="w-2 h-2 bg-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Element - 5 columns */}
          <div className="lg:col-span-5 relative flex items-center justify-center reveal stagger-2">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer square */}
              <div className="absolute inset-0 border-2 border-foreground/20 animate-[spin_30s_linear_infinite]" />
              
              {/* Middle square rotated */}
              <div className="absolute inset-6 border-2 border-foreground/30 rotate-45" />

              {/* Inner circle with icon */}
              <div className="absolute inset-16 border-2 border-primary flex items-center justify-center pulse-ring">
                <Shield className="w-16 h-16 text-primary" />
              </div>

              {/* Floating status indicators */}
              <div className="absolute -top-4 right-8 flex items-center gap-2 px-3 py-2 bg-card border-2 border-success/50 animate-float">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-[10px] font-mono uppercase text-success">Verified</span>
              </div>

              <div className="absolute bottom-20 -left-4 flex items-center gap-2 px-3 py-2 bg-card border-2 border-warning/50 animate-float" style={{ animationDelay: '1s' }}>
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-[10px] font-mono uppercase text-warning">Suspicious</span>
              </div>

              <div className="absolute bottom-0 right-4 flex items-center gap-2 px-3 py-2 bg-card border-2 border-destructive/50 animate-float" style={{ animationDelay: '2s' }}>
                <XCircle className="w-4 h-4 text-destructive" />
                <span className="text-[10px] font-mono uppercase text-destructive">AI Detected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 py-4 border-t-2 border-foreground/10 overflow-hidden bg-card/50">
        <div className="flex whitespace-nowrap marquee">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-widest text-muted-foreground mx-8">
              Voice Analysis • Message Verification • Deepfake Detection • Contextual Reality Check • Privacy First • 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;