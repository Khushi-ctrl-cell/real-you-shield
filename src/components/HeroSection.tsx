import { Shield, CheckCircle, AlertTriangle, XCircle, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-geometric opacity-40" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-diagonal opacity-20" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
        GUARD
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 mb-8 reveal">
              <span className="w-12 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">
                AI Voice Fraud Prevention
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-6 reveal stagger-1">
              STOP VOICE
              <br />
              <span className="text-gradient">FRAUD</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 reveal stagger-2 font-mono leading-relaxed">
              AI voice cloning is enabling real-time financial fraud at scale. 
              VoiceGuard detects cloned voices during live calls — on-device, 
              private, under 200ms.
            </p>

            <p className="text-sm text-primary font-mono mb-10 reveal stagger-2">
              Built for Financial Institutions. Trusted by Enterprise Security Teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 reveal stagger-3">
              <Link to="/demo">
                <Button 
                  size="lg" 
                  className="font-mono uppercase text-xs tracking-wider h-14 px-8 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal"
                >
                  Schedule Security Consultation
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-mono uppercase text-xs tracking-wider h-14 px-8 border-2 border-foreground/20 hover:border-foreground hover:bg-transparent transition-all"
                >
                  See Live Demo
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap gap-8 mt-12 reveal stagger-4">
              {[
                { value: "12,000+", label: "Threats Analyzed" },
                { value: "97.3%", label: "Detection Accuracy" },
                { value: "0%", label: "Data Sent to Cloud" },
                { value: "18", label: "Enterprise Pilots" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-xl text-primary">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center reveal stagger-2">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 border-2 border-foreground/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 border-2 border-foreground/30 rotate-45" />
              <div className="absolute inset-16 border-2 border-primary flex items-center justify-center pulse-ring">
                <Phone className="w-16 h-16 text-primary" />
              </div>

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

      <div className="absolute bottom-0 left-0 right-0 py-4 border-t-2 border-foreground/10 overflow-hidden bg-card/50">
        <div className="flex whitespace-nowrap marquee">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} className="text-xs font-mono uppercase tracking-widest text-muted-foreground mx-8">
              Voice Clone Detection • Real-Time Call Monitoring • Transaction Risk Scoring • Executive Voice Whitelist • On-Device AI • 
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
