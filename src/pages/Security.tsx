import { Shield, Lock, FileCheck, Eye, Server, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const certifications = [
  { title: "SOC 2 Type II", status: "In Progress", detail: "Expected Q3 2026" },
  { title: "GDPR Compliant", status: "Active", detail: "Full alignment" },
  { title: "ISO 27001", status: "Planned", detail: "Q4 2026" },
  { title: "PCI DSS", status: "Planned", detail: "For payment integrations" },
];

const architectureSteps = [
  { title: "Audio Input", detail: "Voice call captured locally" },
  { title: "Signal Extraction", detail: "On-device feature analysis" },
  { title: "Clone Detection Model", detail: "Quantized ONNX inference (<50MB)" },
  { title: "Risk Score Engine", detail: "Trust scoring with confidence %" },
  { title: "Alert / Report", detail: "Fraud escalation + forensic log" },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          SAFE
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Security</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              SECURITY &
              <br />
              <span className="text-gradient">COMPLIANCE</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Zero-trust architecture. No cloud storage. No data exposure. 
              Built for the most regulated industries.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Architecture</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              ON-DEVICE <span className="text-gradient">PROCESSING</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {architectureSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-background border-2 border-foreground/10 border-b-0 last:border-b-2">
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-primary">0{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold">{step.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground">{step.detail}</p>
                  </div>
                  {i < architectureSteps.length - 1 && (
                    <span className="text-primary font-mono">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {[
              { icon: Lock, title: "AES-256 Encryption", detail: "All local data encrypted at rest with hardware-backed keys" },
              { icon: Server, title: "No Cloud Storage", detail: "Zero audio, video, or messages sent to any server. Ever." },
              { icon: Shield, title: "Secure Enclave", detail: "Hardware-bound authenticity signatures using TPM" },
              { icon: Eye, title: "Zero-Knowledge Mode", detail: "Verify authenticity without storing or viewing content" },
              { icon: FileCheck, title: "Tamper-Proof Reports", detail: "SHA-256 hash-based timestamped forensic logs" },
              { icon: CheckCircle, title: "Adversarial Resistance", detail: "Detects GAN artifacts, diffusion noise, LLM perplexity spikes" },
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 group hover:bg-card transition-colors">
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-mono">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                COMPLIANCE <span className="text-gradient">ROADMAP</span>
              </h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-background border-2 border-foreground/10">
                  <div>
                    <h3 className="font-display font-bold">{cert.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">{cert.detail}</p>
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wider px-3 py-1 border-2 ${
                    cert.status === "Active" ? "border-success text-success" : "border-warning text-warning"
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Security;
