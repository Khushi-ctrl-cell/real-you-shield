import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

const trustLevels = [
  {
    icon: CheckCircle,
    label: "Verified Human",
    color: "success",
    bgColor: "bg-success/10",
    borderColor: "border-success/30",
    textColor: "text-success",
    description: "Content appears authentic and human-generated",
  },
  {
    icon: AlertTriangle,
    label: "Suspicious / Possibly AI",
    color: "warning",
    bgColor: "bg-warning/10",
    borderColor: "border-warning/30",
    textColor: "text-warning",
    description: "Some patterns indicate potential AI generation",
  },
  {
    icon: XCircle,
    label: "AI-Generated or Manipulated",
    color: "destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
    textColor: "text-destructive",
    description: "High confidence of synthetic or manipulated content",
  },
];

const scoreDetails = [
  "Confidence percentage",
  "Reason summary (e.g., \"Synthetic voice patterns detected\")",
  "Action suggestions (ignore, verify identity, block)",
];

const TrustScoreSection = () => {
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
            Trust <span className="text-gradient">Score</span> System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every interaction is labeled with a simple, human-friendly indicator
          </p>
        </motion.div>

        {/* Trust Level Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustLevels.map((level, index) => (
            <motion.div
              key={level.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`p-6 rounded-2xl ${level.bgColor} border ${level.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <level.icon className={`w-8 h-8 ${level.textColor}`} />
                <h3 className={`font-display font-semibold text-lg ${level.textColor}`}>
                  {level.label}
                </h3>
              </div>
              <p className="text-muted-foreground">{level.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Score Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-primary" />
              <h4 className="font-display font-semibold">Each Score Includes</h4>
            </div>
            <ul className="space-y-3">
              {scoreDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustScoreSection;
