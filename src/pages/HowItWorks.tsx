import { Phone, Brain, Shield, CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const steps = [
  {
    number: "01",
    title: "INPUT DETECTION",
    description: "The system monitors incoming calls, messages, and media for potential threats.",
    icon: Phone,
    details: ["Voice calls analyzed in real-time", "Messages scanned for AI patterns", "Videos checked frame-by-frame"],
  },
  {
    number: "02",
    title: "AI ANALYSIS",
    description: "Advanced on-device AI models analyze multiple authenticity signals simultaneously.",
    icon: Brain,
    details: ["Voice pattern recognition", "Linguistic entropy analysis", "Visual consistency checks", "Behavioral plausibility scoring"],
  },
  {
    number: "03",
    title: "TRUST SCORING",
    description: "A comprehensive trust score is generated with detailed reasoning.",
    icon: Shield,
    details: ["Confidence percentage", "Specific detection markers", "Recommended actions", "Context-aware analysis"],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          PROC
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Process</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              HOW IT
              <br />
              <span className="text-gradient">WORKS</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              A simple, powerful process that runs entirely on your device, 
              delivering instant verification without compromising privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-px bg-border">
            {steps.map((step, index) => (
              <div key={step.number} className="bg-background relative">
                {/* Large number background */}
                <span className="absolute top-8 right-8 font-display text-[10rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                
                <div className="p-8 md:p-12 relative">
                  <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                      {/* Step number and icon */}
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-16 h-16 border-2 border-primary flex items-center justify-center">
                          <span className="font-display font-bold text-xl text-primary">{step.number}</span>
                        </div>
                        <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground font-mono">{step.description}</p>
                    </div>
                    
                    <div className="space-y-4 pt-4 md:pt-12">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-4 font-mono text-sm group">
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 group-hover:text-foreground transition-colors">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4 bg-card">
                    <div className="w-px h-12 bg-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Examples */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Output</span>
              <span className="w-16 h-px bg-primary" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              CLEAR <span className="text-gradient">RESULTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {/* Verified */}
            <div className="bg-background p-8 border-t-4 border-success">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
                <span className="font-display font-bold text-success text-lg">VERIFIED</span>
              </div>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                "Voice patterns match known human characteristics. Natural speech flow detected."
              </p>
              <div className="text-xs font-mono text-success">98% confidence</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">→ Proceed safely</div>
            </div>

            {/* Suspicious */}
            <div className="bg-background p-8 border-t-4 border-warning">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
                <span className="font-display font-bold text-warning text-lg">SUSPICIOUS</span>
              </div>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                "Unusual pitch stability detected. Speech patterns show potential manipulation."
              </p>
              <div className="text-xs font-mono text-warning">67% confidence</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">→ Verify identity</div>
            </div>

            {/* AI Detected */}
            <div className="bg-background p-8 border-t-4 border-destructive">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
                <span className="font-display font-bold text-destructive text-lg">DETECTED</span>
              </div>
              <p className="text-sm font-mono text-muted-foreground mb-4">
                "Synthetic voice patterns confirmed. Known AI generation markers present."
              </p>
              <div className="text-xs font-mono text-destructive">92% confidence</div>
              <div className="text-xs font-mono text-muted-foreground mt-1">→ Block recommended</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Explanation */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                WHY <span className="text-gradient">ON-DEVICE?</span>
              </h2>
            </div>
            
            <div className="space-y-px bg-border">
              {[
                { title: "Zero Data Transmission", description: "All analysis happens locally. Your voice recordings, messages, and videos never leave your device, eliminating data breach risks." },
                { title: "Network Independence", description: "Protection that works anywhere—during natural disasters, in remote locations, or when connectivity is compromised." },
                { title: "Tamper Resistance", description: "Unlike cloud APIs that can be intercepted or spoofed, on-device processing is inherently more secure against sophisticated attacks." },
              ].map((item, i) => (
                <div key={i} className="bg-background p-8 group hover:bg-card transition-colors">
                  <div className="flex items-start gap-6">
                    <span className="text-primary font-mono">0{i + 1}</span>
                    <div>
                      <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default HowItWorks;