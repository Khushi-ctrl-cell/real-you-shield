import { Phone, MessageSquare, Video, Brain, Wifi, Lock, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Phone,
    number: "01",
    title: "Voice & Call Analysis",
    description: "Detects AI-generated voices, unnatural pitch patterns, and synthetic speech markers in real-time.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Message Verification",
    description: "Analyzes linguistic patterns to detect AI-written text, flagging impersonation attempts.",
  },
  {
    icon: Video,
    number: "03",
    title: "Video & Media Integrity",
    description: "Detects deepfakes, face swaps, and AI-generated imagery with frame-by-frame analysis.",
  },
  {
    icon: Brain,
    number: "04",
    title: "Contextual Reality Check",
    description: "Cross-checks behavior against known human patterns using device sensors.",
  },
];

const benefits = [
  { icon: Wifi, title: "No Internet", description: "Works offline, always" },
  { icon: Lock, title: "Total Privacy", description: "Data never leaves device" },
  { icon: Zap, title: "Instant", description: "Zero latency results" },
  { icon: ShieldCheck, title: "Tamper-Proof", description: "Secure local processing" },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">How It Works</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95]">
              ADVANCED AI
              <br />
              <span className="text-gradient">ANALYSIS</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-md">
              Multiple authenticity signals analyzed locally, 
              answering one powerful question: Is this real?
            </p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors relative"
            >
              {/* Number */}
              <span className="absolute top-8 right-8 font-display text-6xl font-bold text-foreground/5">
                {feature.number}
              </span>
              
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
                
                {/* Arrow on hover */}
                <ArrowUpRight className="w-5 h-5 text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Why On-Device Section */}
        <div className="border-t-2 border-foreground/10 pt-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Why On-Device?</span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-12">
            YOUR DATA STAYS <span className="text-gradient">YOURS</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background p-6 text-center hover:bg-card transition-colors group"
              >
                <div className="w-10 h-10 border-2 border-foreground/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-colors">
                  <benefit.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="font-display font-bold text-sm mb-1">{benefit.title}</h4>
                <p className="text-xs text-muted-foreground font-mono">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;