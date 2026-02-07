import { useState } from "react";
import { Phone, MessageSquare, Video, Shield, CheckCircle, AlertTriangle, XCircle, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type DemoType = "voice" | "message" | "video";
type ResultType = "verified" | "suspicious" | "detected" | null;

interface DemoScenario {
  type: DemoType;
  title: string;
  description: string;
  icon: typeof Phone;
  content: string;
  result: ResultType;
  confidence: number;
  reason: string;
}

const demoScenarios: DemoScenario[] = [
  {
    type: "voice",
    title: "Voice Clone Detection",
    description: "A caller claiming to be your son asks for emergency money",
    icon: Phone,
    content: "\"Hey Dad, it's me... I'm in trouble and need you to wire $5,000 right now. Please don't tell Mom.\"",
    result: "detected",
    confidence: 94,
    reason: "Synthetic voice patterns detected. Unnatural pitch consistency and missing breath artifacts.",
  },
  {
    type: "message",
    title: "CEO Fraud Detection",
    description: "An urgent message from your 'CEO' requesting a wire transfer",
    icon: MessageSquare,
    content: "\"Hi, I need you to process an urgent wire transfer of $45,000 to a new vendor. This is confidential - please handle this personally and don't discuss with anyone.\"",
    result: "suspicious",
    confidence: 78,
    reason: "Linguistic patterns indicate AI generation. Unusual urgency markers and confidentiality requests match known fraud patterns.",
  },
  {
    type: "video",
    title: "Deepfake Video Analysis",
    description: "A video call from someone claiming to be a colleague",
    icon: Video,
    content: "[Video showing a face with subtle micro-expression inconsistencies and unnatural eye movement patterns]",
    result: "detected",
    confidence: 89,
    reason: "Face swap artifacts detected. Lip-sync inconsistencies and unnatural eye movement patterns identified.",
  },
];

const resultConfigs = {
  verified: {
    icon: CheckCircle,
    label: "VERIFIED",
    sublabel: "Human",
    borderClass: "border-success",
    textClass: "text-success",
  },
  suspicious: {
    icon: AlertTriangle,
    label: "SUSPICIOUS",
    sublabel: "Possibly AI",
    borderClass: "border-warning",
    textClass: "text-warning",
  },
  detected: {
    icon: XCircle,
    label: "DETECTED",
    sublabel: "AI Generated",
    borderClass: "border-destructive",
    textClass: "text-destructive",
  },
};

const Demo = () => {
  const [selectedDemo, setSelectedDemo] = useState<number>(0);
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
      
      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          DEMO
        </div>
        
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
              Experience Reality Check in action. Select a scenario and watch 
              as our AI analyzes content for authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Scenario Selector */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {demoScenarios.map((scenario, index) => (
                <button
                  key={scenario.type}
                  onClick={() => {
                    setSelectedDemo(index);
                    resetDemo();
                  }}
                  className={`flex items-center gap-3 px-5 py-3 border-2 transition-all font-mono text-xs uppercase tracking-wider ${
                    selectedDemo === index
                      ? "border-primary text-primary bg-primary/5"
                      : "border-foreground/20 text-muted-foreground hover:border-foreground/40"
                  }`}
                >
                  <scenario.icon className="w-4 h-4" />
                  {scenario.title}
                </button>
              ))}
            </div>

            {/* Demo Card */}
            <div className="border-2 border-foreground/10 bg-card">
              {/* Scenario Header */}
              <div className="p-8 border-b-2 border-foreground/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <currentScenario.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{currentScenario.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground">{currentScenario.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Preview */}
              <div className="p-8 bg-background border-b-2 border-foreground/10">
                <p className="font-mono text-foreground leading-relaxed">{currentScenario.content}</p>
              </div>

              {/* Analysis Section */}
              <div className="p-8 min-h-[250px]">
                {!isAnalyzing && !showResult && (
                  <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                    <Button
                      size="lg"
                      onClick={runAnalysis}
                      className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal"
                    >
                      <Play className="w-4 h-4 mr-3" />
                      Analyze Content
                    </Button>
                    <p className="text-xs font-mono text-muted-foreground mt-4">
                      Click to run authenticity analysis
                    </p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                    <div className="relative w-24 h-24 mb-6">
                      {/* Outer spinning square */}
                      <div className="absolute inset-0 border-2 border-primary/30 animate-[spin_3s_linear_infinite]" />
                      {/* Inner spinning square (reversed) */}
                      <div className="absolute inset-3 border-2 border-primary/50 animate-[spin_2s_linear_infinite_reverse]" />
                      {/* Center icon */}
                      <div className="absolute inset-6 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <p className="font-display font-bold">ANALYZING...</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">Running on-device AI analysis</p>
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
                            <span className={`font-display font-bold text-xl ${resultConfig.textClass}`}>
                              {resultConfig.label}
                            </span>
                            <span className={`text-xs font-mono px-2 py-1 border ${resultConfig.borderClass} ${resultConfig.textClass} uppercase tracking-wider`}>
                              {currentScenario.confidence}%
                            </span>
                          </div>
                          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                            {resultConfig.sublabel}
                          </p>
                          <p className="text-sm font-mono text-muted-foreground">{currentScenario.reason}</p>
                        </div>
                      </div>

                      {/* Action Recommendation */}
                      <div className="flex items-center gap-4 pt-4 border-t border-foreground/10 mt-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Recommended:</span>
                        <span className={`text-xs font-mono ${resultConfig.textClass}`}>
                          {currentScenario.result === "verified" 
                            ? "→ Proceed with confidence" 
                            : currentScenario.result === "suspicious"
                            ? "→ Verify identity through alternate channel"
                            : "→ Block and report this contact"}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button 
                        variant="outline" 
                        onClick={resetDemo} 
                        className="font-mono uppercase text-xs tracking-wider border-2 border-foreground/20 hover:border-foreground"
                      >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Reset Demo
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs font-mono text-muted-foreground mt-8">
              This is a simulated demo. The actual product performs real-time on-device AI analysis.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;