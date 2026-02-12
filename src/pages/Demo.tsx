import { useState } from "react";
import { Phone, Shield, CheckCircle, AlertTriangle, XCircle, Play, RotateCcw, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ResultType = "verified" | "suspicious" | "detected" | null;

interface DemoScenario {
  title: string;
  description: string;
  content: string;
  result: ResultType;
  confidence: number;
  reason: string;
  saved: string;
}

const demoScenarios: DemoScenario[] = [
  {
    title: "CEO Wire Transfer Request",
    description: "AI-cloned CEO voice requests urgent ₹48L wire transfer",
    content: "\"This is urgent — I need you to wire ₹48,00,000 to the new vendor account immediately. Don't discuss this with anyone, just process it now.\"",
    result: "detected",
    confidence: 94.2,
    reason: "Synthetic voice patterns: harmonic uniformity deviation +37%, breath pattern mismatch, synthetic waveform compression artifact detected.",
    saved: "₹48,00,000 (~$58,000) saved",
  },
  {
    title: "Client Identity Verification",
    description: "Wealth management client calling for portfolio changes",
    content: "\"Hi, this is Mr. Patel. I'd like to liquidate my entire equity portfolio and transfer the proceeds to a new account I just opened.\"",
    result: "suspicious",
    confidence: 72.8,
    reason: "Voice pattern deviation from baseline. Pitch variance 18% below expected range. Recommend secondary identity verification.",
    saved: "Escalated for manual verification",
  },
  {
    title: "Legitimate Executive Call",
    description: "Verified CFO discussing quarterly budget",
    content: "\"Good morning team, let's review the Q2 budget allocations. I've shared the updated spreadsheet in our shared drive.\"",
    result: "verified",
    confidence: 98.1,
    reason: "Voice patterns match registered executive whitelist profile. Natural speech flow, authentic breath artifacts, consistent with baseline.",
    saved: "Proceeded with confidence",
  },
];

const resultConfigs = {
  verified: { icon: CheckCircle, label: "VERIFIED HUMAN", borderClass: "border-success", textClass: "text-success" },
  suspicious: { icon: AlertTriangle, label: "SUSPICIOUS", borderClass: "border-warning", textClass: "text-warning" },
  detected: { icon: XCircle, label: "AI VOICE DETECTED", borderClass: "border-destructive", textClass: "text-destructive" },
};

const Demo = () => {
  const [selectedDemo, setSelectedDemo] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const currentScenario = demoScenarios[selectedDemo];
  const resultConfig = currentScenario.result ? resultConfigs[currentScenario.result] : null;

  const runAnalysis = () => {
    setShowResult(false);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2500);
  };

  const resetDemo = () => {
    setShowResult(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Interactive</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              LIVE
              <br />
              <span className="text-gradient">DEMO</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Experience VoiceGuard's voice fraud detection in action. Select a FinTech scenario and watch real-time analysis.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Scenario Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {demoScenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => { setSelectedDemo(index); resetDemo(); }}
                  className={`flex items-center gap-3 px-5 py-3 border-2 transition-all font-mono text-xs uppercase tracking-wider ${
                    selectedDemo === index
                      ? "border-primary text-primary bg-primary/5"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground/40"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  {scenario.title}
                </button>
              ))}
            </div>

            {/* Demo Card */}
            <div className="border-2 border-foreground/10 bg-card">
              <div className="p-8 border-b-2 border-foreground/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{currentScenario.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground">{currentScenario.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-background border-b-2 border-foreground/10">
                <p className="font-mono text-foreground leading-relaxed">{currentScenario.content}</p>
              </div>

              <div className="p-8 min-h-[250px]">
                {!isAnalyzing && !showResult && (
                  <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                    <Button size="lg" onClick={runAnalysis} className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                      <Play className="w-4 h-4 mr-3" />
                      Analyze Voice
                    </Button>
                    <p className="text-xs font-mono text-muted-foreground mt-4">Click to run on-device voice analysis</p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                    <div className="relative w-24 h-24 mb-6">
                      <div className="absolute inset-0 border-2 border-primary/30 animate-[spin_3s_linear_infinite]" />
                      <div className="absolute inset-3 border-2 border-primary/50 animate-[spin_2s_linear_infinite_reverse]" />
                      <div className="absolute inset-6 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <p className="font-display font-bold">ANALYZING VOICE...</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">Running on-device waveform analysis</p>
                  </div>
                )}

                {showResult && resultConfig && (
                  <div className="animate-fade-in">
                    <div className={`p-6 border-l-4 ${resultConfig.borderClass} bg-background`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 border-2 ${resultConfig.borderClass} flex items-center justify-center`}>
                          <resultConfig.icon className={`w-7 h-7 ${resultConfig.textClass}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`font-display font-bold text-xl ${resultConfig.textClass}`}>{resultConfig.label}</span>
                            <span className={`text-xs font-mono px-2 py-1 border ${resultConfig.borderClass} ${resultConfig.textClass} uppercase tracking-wider`}>
                              {currentScenario.confidence}%
                            </span>
                          </div>
                          <p className="text-sm font-mono text-muted-foreground mb-2">{currentScenario.reason}</p>
                          <p className={`text-sm font-mono font-bold ${resultConfig.textClass}`}>{currentScenario.saved}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button variant="outline" onClick={resetDemo} className="font-mono uppercase text-xs tracking-wider border-2 border-foreground/20 hover:border-foreground">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset Demo
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Book Demo CTA */}
            <div className="mt-16 border-2 border-primary p-8 text-center bg-primary/5">
              <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">SCHEDULE A SECURITY CONSULTATION</h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">
                See VoiceGuard running live with your team's voice profiles. 30-minute personalized demo.
              </p>
              <Link to="/auth">
                <Button className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                  Book Enterprise Demo
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-center text-xs font-mono text-muted-foreground mt-8">
              This is a simulated demo. The actual product performs real-time on-device AI voice analysis.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
