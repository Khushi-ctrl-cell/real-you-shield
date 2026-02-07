import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    content: "\"Hi, I need you to process an urgent wire transfer of $45,000 to a new vendor. This is confidential - please handle this personally and don't discuss with anyone. I'm in meetings all day so just proceed.\"",
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
    label: "Verified Human",
    color: "success",
    bgClass: "bg-success/10",
    borderClass: "border-success/30",
    textClass: "text-success",
  },
  suspicious: {
    icon: AlertTriangle,
    label: "Suspicious",
    color: "warning",
    bgClass: "bg-warning/10",
    borderClass: "border-warning/30",
    textClass: "text-warning",
  },
  detected: {
    icon: XCircle,
    label: "AI Detected",
    color: "destructive",
    bgClass: "bg-destructive/10",
    borderClass: "border-destructive/30",
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
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Interactive <span className="text-gradient">Demo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience Reality Check in action. Select a scenario and watch 
              as our AI analyzes content for authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Scenario Selector */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {demoScenarios.map((scenario, index) => (
                <button
                  key={scenario.type}
                  onClick={() => {
                    setSelectedDemo(index);
                    resetDemo();
                  }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${
                    selectedDemo === index
                      ? "bg-primary/10 border-primary/50 text-primary"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  <scenario.icon className="w-5 h-5" />
                  <span className="font-medium">{scenario.title}</span>
                </button>
              ))}
            </div>

            {/* Demo Card */}
            <motion.div
              key={selectedDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 md:p-8 rounded-3xl bg-card border border-border"
            >
              {/* Scenario Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <currentScenario.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{currentScenario.title}</h3>
                  <p className="text-muted-foreground">{currentScenario.description}</p>
                </div>
              </div>

              {/* Content Preview */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border mb-6">
                <p className="text-foreground italic">{currentScenario.content}</p>
              </div>

              {/* Analysis Section */}
              <div className="relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  {!isAnalyzing && !showResult && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-8"
                    >
                      <Button
                        size="lg"
                        onClick={runAnalysis}
                        className="glow-primary h-14 px-8 text-base"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Analyze Content
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        Click to run authenticity analysis
                      </p>
                    </motion.div>
                  )}

                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-8"
                    >
                      <div className="relative w-24 h-24 mb-6">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border-2 border-primary/30"
                        />
                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-2 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
                        />
                        <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
                          <Shield className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-medium">Analyzing...</p>
                      <p className="text-sm text-muted-foreground">Running on-device AI analysis</p>
                    </motion.div>
                  )}

                  {showResult && resultConfig && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-4"
                    >
                      <div className={`p-6 rounded-2xl ${resultConfig.bgClass} border ${resultConfig.borderClass}`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl ${resultConfig.bgClass} flex items-center justify-center`}>
                            <resultConfig.icon className={`w-6 h-6 ${resultConfig.textClass}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <span className={`font-display font-bold text-lg ${resultConfig.textClass}`}>
                                {resultConfig.label}
                              </span>
                              <span className={`text-sm px-2 py-0.5 rounded-full ${resultConfig.bgClass} ${resultConfig.textClass}`}>
                                {currentScenario.confidence}% confidence
                              </span>
                            </div>
                            <p className="text-muted-foreground">{currentScenario.reason}</p>
                          </div>
                        </div>

                        {/* Action Recommendation */}
                        <div className="flex items-center gap-2 pt-4 border-t border-current/10">
                          <span className="text-sm font-medium">Recommended Action:</span>
                          <span className={`text-sm ${resultConfig.textClass}`}>
                            {currentScenario.result === "verified" 
                              ? "Proceed with confidence" 
                              : currentScenario.result === "suspicious"
                              ? "Verify identity through alternate channel"
                              : "Block and report this contact"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-center mt-6">
                        <Button variant="outline" onClick={resetDemo} className="border-border">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Reset Demo
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-muted-foreground mt-8">
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
