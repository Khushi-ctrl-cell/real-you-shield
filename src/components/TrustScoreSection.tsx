import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const trustLevels = [
  {
    icon: CheckCircle,
    label: "VERIFIED",
    sublabel: "Human",
    color: "success",
    borderClass: "border-success",
    textClass: "text-success",
    description: "Content appears authentic and human-generated",
  },
  {
    icon: AlertTriangle,
    label: "SUSPICIOUS",
    sublabel: "Possibly AI",
    color: "warning",
    borderClass: "border-warning",
    textClass: "text-warning",
    description: "Patterns indicate potential AI generation",
  },
  {
    icon: XCircle,
    label: "DETECTED",
    sublabel: "AI Generated",
    color: "destructive",
    borderClass: "border-destructive",
    textClass: "text-destructive",
    description: "High confidence of synthetic content",
  },
];

const TrustScoreSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-diagonal opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Trust Score</span>
            <span className="w-16 h-px bg-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            CLEAR <span className="text-gradient">RESULTS</span>
          </h2>
        </div>

        {/* Trust Level Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto mb-16">
          {trustLevels.map((level) => (
            <div
              key={level.label}
              className={`bg-background p-8 text-center border-t-4 ${level.borderClass} hover:bg-secondary/30 transition-colors`}
            >
              <level.icon className={`w-12 h-12 ${level.textClass} mx-auto mb-4`} />
              <h3 className={`font-display text-2xl font-bold ${level.textClass}`}>
                {level.label}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1 mb-4">
                {level.sublabel}
              </p>
              <p className="text-sm text-muted-foreground font-mono">{level.description}</p>
            </div>
          ))}
        </div>

        {/* Score Details */}
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-foreground/10 p-8">
            <h4 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Each Score Includes
            </h4>
            <div className="grid gap-4">
              {[
                "Confidence percentage",
                'Reason summary (e.g., "Synthetic voice patterns detected")',
                "Action suggestions (ignore, verify identity, block)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 font-mono text-sm">
                  <span className="text-primary font-bold">0{i + 1}</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustScoreSection;