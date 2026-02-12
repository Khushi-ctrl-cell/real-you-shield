import { Link } from "react-router-dom";
import { Phone, Wifi, Lock, Zap, ShieldCheck, ArrowUpRight, Activity, Gauge, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Phone,
    number: "01",
    title: "Voice Clone Detection",
    description: "Real-time detection of AI-cloned voices during live calls. Analyzes waveform artifacts, pitch stability, and breath patterns.",
    slug: "voice-analysis",
  },
  {
    icon: Activity,
    number: "02",
    title: "Transaction Risk Scoring",
    description: "Higher sensitivity when large financial transfers detected. Auto-escalation for high-value transaction calls.",
    slug: "message-verification",
  },
  {
    icon: Gauge,
    number: "03",
    title: "Executive Voice Whitelist",
    description: "Secure voice profile baseline for executives. Continuous trust monitoring against registered voiceprints.",
    slug: "video-integrity",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Fraud Escalation Workflow",
    description: "Auto-trigger manual verification when risk exceeds threshold. Compliance-ready audit trail generation.",
    slug: "contextual-check",
  },
];

const benefits = [
  { icon: Wifi, title: "Works Offline", description: "No network dependency" },
  { icon: Lock, title: "Zero Data Exposure", description: "Nothing leaves device" },
  { icon: Zap, title: "<200ms Latency", description: "Real-time detection" },
  { icon: ShieldCheck, title: "Tamper-Proof", description: "Hardware-bound verification" },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Core Platform</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95]">
              VOICE FRAUD
              <br />
              <span className="text-gradient">PREVENTION</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-md">
              Purpose-built for financial institutions. Detect AI voice clones during live high-value transaction calls.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border mb-24">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={`/features/${feature.slug}`}
              className="group bg-background p-8 md:p-10 hover:bg-card transition-colors relative cursor-pointer"
            >
              <span className="absolute top-8 right-8 font-display text-6xl font-bold text-foreground/5">
                {feature.number}
              </span>
              
              <div className="relative">
                <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
                
                <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono uppercase tracking-wider">Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

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
              <div key={benefit.title} className="bg-background p-6 text-center hover:bg-card transition-colors group">
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
