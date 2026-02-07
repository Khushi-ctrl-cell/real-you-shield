import { Phone, XCircle, Shield } from "lucide-react";

const MagicMomentSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-card">
      <div className="absolute inset-0 bg-diagonal opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">The Moment</span>
            <span className="w-16 h-px bg-primary" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            CRISIS <span className="text-gradient">AVERTED</span>
          </h2>
        </div>

        {/* Scenario Card */}
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-foreground/10 bg-background">
            {/* Scenario */}
            <div className="p-8 border-b-2 border-foreground/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Scenario</span>
                  <h3 className="font-display font-bold">Incoming Call</h3>
                </div>
              </div>
              
              <p className="font-mono text-lg leading-relaxed text-foreground">
                You receive a call that sounds <span className="text-primary font-bold">exactly like your friend</span> asking for urgent money.
              </p>
            </div>

            {/* Analysis */}
            <div className="p-8 border-b-2 border-foreground/10 bg-secondary/30">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                Before panic sets in...
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                Your device quietly analyzes the call in real-time.
              </p>
            </div>

            {/* Alert */}
            <div className="p-8 border-l-4 border-destructive bg-destructive/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display font-bold text-destructive text-xl">ALERT</span>
                    <span className="text-xs font-mono px-2 py-1 bg-destructive/10 text-destructive uppercase tracking-wider">
                      High Risk
                    </span>
                  </div>
                  <p className="font-display font-bold text-foreground mb-1">AI-generated voice detected</p>
                  <p className="text-sm font-mono text-muted-foreground">
                    92% confidence • Synthetic voice patterns detected
                  </p>
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div className="p-8 border-l-4 border-success bg-success/5 flex items-center gap-4">
              <Shield className="w-10 h-10 text-success" />
              <div>
                <p className="font-display font-bold text-success text-xl">CRISIS AVOIDED</p>
                <p className="text-sm font-mono text-muted-foreground">Trust restored.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicMomentSection;