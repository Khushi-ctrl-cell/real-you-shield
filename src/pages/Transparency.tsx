import { BarChart3, Target, Gauge, Cpu, HardDrive, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const metrics = [
  { icon: Target, label: "False Positive Rate", value: "0.6%", detail: "Across 18,742 interactions" },
  { icon: Target, label: "False Negative Rate", value: "1.8%", detail: "Missed AI-generated content" },
  { icon: Gauge, label: "Avg Inference Latency", value: "142ms", detail: "On-device processing time" },
  { icon: Cpu, label: "Peak CPU Usage", value: "8.3%", detail: "During active analysis" },
  { icon: HardDrive, label: "Model Size", value: "38MB", detail: "Quantized ONNX model" },
  { icon: Activity, label: "Detection Confidence", value: "94.2%", detail: "Average across AI detections" },
];

const Transparency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Open</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              TRANSPARENCY
              <br />
              <span className="text-gradient">REPORT</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Live performance metrics. Updated regularly. Because trust requires transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {metrics.map((m, i) => (
              <div key={i} className="bg-background p-8 text-center hover:bg-card transition-colors group">
                <m.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-display text-3xl font-bold text-foreground mb-1">{m.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">{m.label}</div>
                <div className="text-xs font-mono text-muted-foreground">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance by Condition */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              PERFORMANCE BY <span className="text-gradient">CONDITION</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-foreground/10">
                <thead>
                  <tr className="bg-background">
                    <th className="p-4 text-left text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">Condition</th>
                    <th className="p-4 text-center text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">Precision</th>
                    <th className="p-4 text-center text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">Recall</th>
                    <th className="p-4 text-center text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">F1 Score</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  {[
                    ["Clean Audio", "98.7%", "97.2%", "97.9%"],
                    ["Noisy Phone Calls", "96.1%", "94.8%", "95.4%"],
                    ["WhatsApp / VoIP", "95.3%", "93.7%", "94.5%"],
                    ["Cross-language", "93.8%", "91.2%", "92.5%"],
                  ].map(([cond, p, r, f1], i) => (
                    <tr key={i} className="border-b border-foreground/10">
                      <td className="p-4 text-foreground">{cond}</td>
                      <td className="p-4 text-center text-success">{p}</td>
                      <td className="p-4 text-center text-success">{r}</td>
                      <td className="p-4 text-center text-primary font-bold">{f1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Red Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                RED TEAM <span className="text-gradient">TESTING</span>
              </h2>
              <p className="text-sm font-mono text-muted-foreground mt-4">
                Continuous adversarial testing against emerging attack vectors
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: "Adversarial Audio Attacks", detail: "Tested against 12 state-of-the-art voice cloning systems including ElevenLabs, Resemble AI, and custom GAN-based approaches." },
                { title: "Model Evasion Testing", detail: "Regular stress tests against adversarial examples designed to fool the detection model." },
                { title: "Edge Case Analysis", detail: "Testing with accented speech, elderly voices, children's voices, and various recording qualities." },
                { title: "Failure Mode Documentation", detail: "All known failure modes are documented and shared with enterprise customers." },
              ].map((item, i) => (
                <div key={i} className="p-6 border-2 border-foreground/10 bg-background">
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-mono text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transparency;
