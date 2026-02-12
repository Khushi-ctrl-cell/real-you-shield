import { Shield, Eye, Heart, Scale, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const principles = [
  { icon: Eye, title: "No Surveillance Use", detail: "VoiceGuard is designed for consent-based verification only. We will never enable or support mass surveillance applications." },
  { icon: Shield, title: "No Biometric Storage", detail: "Voice patterns are analyzed and discarded. No biometric templates are stored, uploaded, or shared. Ever." },
  { icon: Scale, title: "Bias Testing Protocols", detail: "Continuous testing across demographics, accents, languages, and age groups to ensure equitable performance." },
  { icon: AlertTriangle, title: "False Accusation Prevention", detail: "Multi-signal verification and confidence thresholds prevent false positives from causing harm." },
  { icon: Heart, title: "User Autonomy", detail: "Users always control their data. Verification is a tool for empowerment, not control." },
];

const Ethics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Responsibility</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              RESPONSIBLE
              <br />
              <span className="text-gradient">AI</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              We believe AI security tools must be built with ethical guardrails. Our charter ensures VoiceGuard serves humanity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-0">
            {principles.map((p, i) => (
              <div key={i} className="p-8 border-2 border-foreground/10 border-b-0 last:border-b-2 bg-background hover:bg-card transition-colors group">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 border-2 border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                    <p.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Ethics;
