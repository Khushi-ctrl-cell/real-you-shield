import { motion } from "framer-motion";
import { Phone, XCircle, Shield } from "lucide-react";

const MagicMomentSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Magic</span> Moment
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-secondary to-background border border-border"
          >
            {/* Scenario */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Incoming Call</span>
              </div>
              
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                You receive a call that sounds <span className="font-semibold">exactly like your friend</span> asking for urgent money.
              </p>
            </div>

            {/* Before */}
            <div className="mb-8 pl-6 border-l-2 border-muted">
              <p className="text-muted-foreground italic">
                Before panic sets in, your device quietly checks...
              </p>
            </div>

            {/* Alert Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-destructive/10 border border-destructive/30 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display font-bold text-destructive">Alert</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/20 text-destructive">High Risk</span>
                  </div>
                  <p className="text-foreground font-medium mb-1">AI-generated voice detected</p>
                  <p className="text-sm text-muted-foreground">92% confidence • Synthetic voice patterns detected</p>
                </div>
              </div>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-success/10 border border-success/30"
            >
              <Shield className="w-8 h-8 text-success" />
              <div>
                <p className="font-display font-bold text-success">Crisis Avoided</p>
                <p className="text-sm text-muted-foreground">Trust restored.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MagicMomentSection;
