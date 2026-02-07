import { motion } from "framer-motion";
import { Phone, Brain, Shield, CheckCircle, AlertTriangle, XCircle, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const steps = [
  {
    number: "01",
    title: "Input Detection",
    description: "The system monitors incoming calls, messages, and media for potential threats.",
    icon: Phone,
    details: ["Voice calls analyzed in real-time", "Messages scanned for AI patterns", "Videos checked frame-by-frame"],
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Advanced on-device AI models analyze multiple authenticity signals simultaneously.",
    icon: Brain,
    details: ["Voice pattern recognition", "Linguistic entropy analysis", "Visual consistency checks", "Behavioral plausibility scoring"],
  },
  {
    number: "03",
    title: "Trust Scoring",
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
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How It <span className="text-gradient">Works</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, powerful process that runs entirely on your device, 
              delivering instant verification without compromising your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}
                
                <div className="flex gap-6 md:gap-8 mb-12">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="font-display font-bold text-lg text-primary">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 rounded-2xl bg-card border border-border">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Examples */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Clear <span className="text-gradient">Results</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Instant, actionable feedback you can trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Verified */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-success/10 border border-success/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
                <span className="font-display font-bold text-success">Verified Human</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Voice patterns match known human characteristics. Natural speech flow detected."
              </p>
              <div className="text-xs text-success/80">98% confidence • Proceed safely</div>
            </motion.div>

            {/* Suspicious */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-warning/10 border border-warning/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-warning" />
                <span className="font-display font-bold text-warning">Suspicious</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Unusual pitch stability detected. Speech patterns show potential manipulation."
              </p>
              <div className="text-xs text-warning/80">67% confidence • Verify identity</div>
            </motion.div>

            {/* AI Detected */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
                <span className="font-display font-bold text-destructive">AI Detected</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Synthetic voice patterns confirmed. Known AI generation markers present."
              </p>
              <div className="text-xs text-destructive/80">92% confidence • Block recommended</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Explanation */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Why <span className="text-gradient">On-Device?</span>
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg mb-2">Zero Data Transmission</h3>
                <p className="text-muted-foreground">
                  All analysis happens locally. Your voice recordings, messages, and videos never leave your device, 
                  eliminating the risk of data breaches or unauthorized access.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg mb-2">Network Independence</h3>
                <p className="text-muted-foreground">
                  Protection that works anywhere—during natural disasters, in remote locations, 
                  or when connectivity is compromised. Your safety doesn't depend on a server.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg mb-2">Tamper Resistance</h3>
                <p className="text-muted-foreground">
                  Unlike cloud APIs that can be intercepted or spoofed, on-device processing 
                  is inherently more secure against sophisticated attacks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default HowItWorks;
