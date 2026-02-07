import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">On-Device AI Protection</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Is This{" "}
              <span className="text-gradient">Real?</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              Detect deepfakes, AI voice clones, and synthetic content instantly. 
              All on-device, completely private, no internet required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glow-primary text-base h-12 px-8">
                Start Free Trial
              </Button>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="text-base h-12 px-8 border-border hover:bg-card">
                  See Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Works Offline</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Instant Results</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Trust Score Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 md:inset-6 rounded-full border border-primary/30"
              />

              {/* Inner Glow Ring */}
              <div className="absolute inset-8 md:inset-12 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse-glow" />

              {/* Center Shield */}
              <div className="absolute inset-12 md:inset-16 lg:inset-20 rounded-full bg-card flex items-center justify-center border border-primary/40 glow-primary">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>

              {/* Floating Indicators */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 px-3 py-2 rounded-lg bg-success/10 border border-success/30"
              >
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="text-xs font-medium text-success">Verified</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-warning/10 border border-warning/30"
              >
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-xs font-medium text-warning">Suspicious</span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/10 border border-destructive/30"
              >
                <XCircle className="w-4 h-4 text-destructive" />
                <span className="text-xs font-medium text-destructive">AI Detected</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
