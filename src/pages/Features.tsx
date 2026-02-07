import { Phone, MessageSquare, Video, Brain, Wifi, Lock, Zap, ShieldCheck, Fingerprint, Eye, Ear, FileSearch, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const detailedFeatures = [
  {
    icon: Phone,
    number: "01",
    title: "Voice & Call Analysis",
    description: "Advanced voice verification that runs entirely on your device",
    capabilities: [
      "Detects AI-generated or cloned voices",
      "Identifies unnatural pitch stability and breath patterns",
      "Analyzes latency artifacts in real-time",
      "Flags emotional mismatches and synthetic speech markers",
    ],
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Message Verification",
    description: "Distinguish between human and AI-written content instantly",
    capabilities: [
      "Detects AI-written text vs human typing patterns",
      "Analyzes linguistic entropy and repetition",
      "Identifies intent anomalies and unusual phrasing",
      "Flags impersonation attempts (CEO fraud, fake relatives, scams)",
    ],
  },
  {
    icon: Video,
    number: "03",
    title: "Video & Media Integrity",
    description: "Comprehensive deepfake and manipulation detection",
    capabilities: [
      "Detects deepfakes, face swaps, and lip-sync manipulation",
      "Analyzes frame inconsistencies and artifacts",
      "Examines micro-expressions and eye movement patterns",
      "Identifies AI-generated imagery vs camera-captured content",
    ],
  },
  {
    icon: Brain,
    number: "04",
    title: "Contextual Reality Check",
    description: "Multi-signal analysis for complete verification",
    capabilities: [
      "Cross-checks interaction behavior against known human patterns",
      "Uses device sensors (time, motion, interaction flow)",
      "Analyzes behavioral plausibility in context",
      "Builds a local trust score, never uploaded anywhere",
    ],
  },
];

const privacyFeatures = [
  { icon: Wifi, title: "No Internet Required", description: "Works during outages, disasters, or low connectivity. Protection never depends on a connection." },
  { icon: Lock, title: "Total Privacy", description: "No audio, video, or messages ever leave your device. Zero data collection, zero tracking." },
  { icon: Zap, title: "Instant Results", description: "No cloud latency or server dependency. Get answers in milliseconds, not seconds." },
  { icon: ShieldCheck, title: "Tamper-Resistant", description: "Harder to spoof than cloud APIs. Local processing means attackers can't intercept." },
];

const technologyFeatures = [
  { icon: Fingerprint, title: "Biometric Analysis", description: "Voice fingerprinting and behavioral biometrics" },
  { icon: Eye, title: "Computer Vision", description: "Frame-by-frame visual manipulation detection" },
  { icon: Ear, title: "Audio Intelligence", description: "Spectral analysis for synthetic audio patterns" },
  { icon: FileSearch, title: "Content Forensics", description: "Metadata and generation artifact analysis" },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          FEAT
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Capabilities</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              POWERFUL
              <br />
              <span className="text-gradient">FEATURES</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Comprehensive AI detection that works entirely on your device, 
              protecting your privacy while keeping you safe.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-px bg-border">
            {detailedFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="grid md:grid-cols-2 gap-px bg-border"
              >
                <div className="bg-background p-8 md:p-12 relative">
                  <span className="absolute top-8 right-8 font-display text-8xl font-bold text-foreground/[0.03]">
                    {feature.number}
                  </span>
                  
                  <div className="relative">
                    <div className="w-14 h-14 border-2 border-primary flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground font-mono">{feature.description}</p>
                  </div>
                </div>
                
                <div className="bg-card p-8 md:p-12">
                  <div className="space-y-4">
                    {feature.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <span className="text-primary font-mono text-sm">0{i + 1}</span>
                        <span className="text-foreground font-mono text-sm group-hover:text-primary transition-colors">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Privacy First</span>
              <span className="w-16 h-px bg-primary" />
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              YOUR DATA STAYS <span className="text-gradient">YOURS</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
            {privacyFeatures.map((feature) => (
              <div key={feature.title} className="bg-background p-8 group hover:bg-secondary/30 transition-colors">
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Technology</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              ADVANCED <span className="text-gradient">AI</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {technologyFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-background p-8 group hover:bg-card transition-colors relative">
                <span className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">0{index + 1}</span>
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{feature.description}</p>
                <ArrowUpRight className="w-4 h-4 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
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

export default Features;