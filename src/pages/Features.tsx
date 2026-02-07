import { motion } from "framer-motion";
import { Phone, MessageSquare, Video, Brain, Wifi, Lock, Zap, ShieldCheck, Fingerprint, Eye, Ear, FileSearch } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const detailedFeatures = [
  {
    icon: Phone,
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
  {
    icon: Wifi,
    title: "No Internet Required",
    description: "Works during outages, disasters, or low connectivity. Your protection never depends on a connection.",
  },
  {
    icon: Lock,
    title: "Total Privacy",
    description: "No audio, video, or messages ever leave your device. Zero data collection, zero tracking.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No cloud latency or server dependency. Get answers in milliseconds, not seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Resistant",
    description: "Harder to spoof than cloud APIs. Local processing means attackers can't intercept your data.",
  },
];

const technologyFeatures = [
  {
    icon: Fingerprint,
    title: "Biometric Analysis",
    description: "Voice fingerprinting and behavioral biometrics for identity verification.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Advanced frame-by-frame analysis for detecting visual manipulation.",
  },
  {
    icon: Ear,
    title: "Audio Intelligence",
    description: "Spectral analysis to detect synthetic audio patterns invisible to humans.",
  },
  {
    icon: FileSearch,
    title: "Content Forensics",
    description: "Deep content analysis for metadata inconsistencies and generation artifacts.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful <span className="text-gradient">Features</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI detection that works entirely on your device, 
              protecting your privacy while keeping you safe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-3xl bg-card border border-border"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
                
                <div className="space-y-3">
                  {feature.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Privacy <span className="text-gradient">First</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your data stays on your device. Always.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              State-of-the-art AI models optimized for on-device performance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
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
