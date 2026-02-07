import { motion } from "framer-motion";
import { Phone, MessageSquare, Video, Brain, Wifi, Lock, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Voice & Call Analysis",
    description: "Detects AI-generated or cloned voices, unnatural pitch patterns, and synthetic speech markers in real-time.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Message Verification",
    description: "Analyzes linguistic patterns to detect AI-written text vs human typing, flagging impersonation attempts.",
    color: "primary",
  },
  {
    icon: Video,
    title: "Video & Media Integrity",
    description: "Detects deepfakes, face swaps, lip-sync manipulation, and AI-generated imagery with frame analysis.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Contextual Reality Check",
    description: "Cross-checks behavior against known human patterns using device sensors for plausibility.",
    color: "primary",
  },
];

const benefits = [
  {
    icon: Wifi,
    title: "No Internet Required",
    description: "Works during outages, disasters, or low connectivity situations.",
  },
  {
    icon: Lock,
    title: "Total Privacy",
    description: "No audio, video, or messages ever leave your device.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No cloud latency or server dependency for fast verification.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Resistant",
    description: "Harder to spoof than cloud APIs with local processing.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced AI models analyze multiple authenticity signals locally, 
            answering one powerful question: Is this real?
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why On-Device Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Why <span className="text-gradient">On-Device AI?</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your data stays yours. Always.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
