import { Phone, XCircle, Shield, DollarSign } from "lucide-react";

const MagicMomentSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-diagonal opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Real Incident</span>
            <span className="w-16 h-px bg-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            FRAUD <span className="text-gradient">PREVENTED</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-foreground/10 bg-background">
            {/* Incident Header */}
            <div className="p-8 border-b-2 border-foreground/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">FinTech Pilot — CEO Voice Impersonation</span>
                  <h3 className="font-display font-bold">Incoming Call to CFO</h3>
                </div>
              </div>
              
              <p className="font-mono text-lg leading-relaxed text-foreground">
                A caller impersonating the <span className="text-primary font-bold">CEO's voice</span> requests an urgent ₹48,00,000 wire transfer to a new vendor account.
              </p>
            </div>

            {/* Signal Analysis */}
            <div className="p-8 border-b-2 border-foreground/10 bg-secondary/30">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                VoiceGuard Signal Analysis — 131ms
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Harmonic uniformity deviation", value: "+37%" },
                  { label: "Micro-expression absence", value: "Detected" },
                  { label: "Synthetic waveform compression", value: "Confirmed" },
                  { label: "Pitch variance", value: "Below human threshold" },
                ].map((signal, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-destructive" />
                    <span className="text-xs font-mono text-muted-foreground">{signal.label}: <span className="text-destructive">{signal.value}</span></span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert */}
            <div className="p-8 border-l-4 border-destructive bg-destructive/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display font-bold text-destructive text-xl">AI-GENERATED VOICE</span>
                    <span className="text-xs font-mono px-2 py-1 bg-destructive/10 text-destructive uppercase tracking-wider">
                      94.2% Confidence
                    </span>
                  </div>
                  <p className="font-display font-bold text-foreground mb-1">Transaction request blocked</p>
                  <p className="text-sm font-mono text-muted-foreground">
                    Inference latency: 131ms • No raw audio stored • Report hash: SHA256-98D7AF...
                  </p>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="p-8 border-l-4 border-success bg-success/5 flex items-center gap-4">
              <DollarSign className="w-10 h-10 text-success" />
              <div>
                <p className="font-display font-bold text-success text-xl">₹48,00,000 SAVED (~$58,000)</p>
                <p className="text-sm font-mono text-muted-foreground">Crisis avoided. Forensic report generated. Zero data leaked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicMomentSection;
