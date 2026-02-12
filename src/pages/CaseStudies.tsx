import { Building2, Phone, GraduationCap, Newspaper, ArrowLeft, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    slug: "fintech-ceo-fraud",
    icon: Building2,
    industry: "FinTech",
    title: "FinTech Startup Prevents CEO Voice Fraud",
    subtitle: "₹48,00,000 (~$58,000) loss prevented",
    deployment: "42 employees • 18 executive accounts • 12 devices • 30-day pilot",
    metrics: [
      { label: "Interactions Analyzed", value: "18,742" },
      { label: "Voice Calls Scanned", value: "3,214" },
      { label: "High-Risk Alerts", value: "27" },
      { label: "Confirmed AI Attempts", value: "9" },
      { label: "False Positive Rate", value: "0.6%" },
      { label: "False Negative Rate", value: "1.8%" },
      { label: "Avg Inference Time", value: "142ms" },
      { label: "Model Size", value: "38MB" },
    ],
    incident: {
      type: "CEO Voice Impersonation",
      confidence: "94.2%",
      signals: [
        "Unnatural pitch stability",
        "Micro-pausing artifacts",
        "Breath pattern mismatch",
        "Synthetic harmonic consistency",
      ],
      result: "Transaction blocked before execution",
      saved: "₹48,00,000 (~$58,000)",
    },
  },
  {
    slug: "university-exam",
    icon: GraduationCap,
    industry: "Education",
    title: "University Blocks AI Exam Impersonation",
    subtitle: "60-day remote exam monitoring pilot",
    deployment: "212 remote exam sessions • 3 departments • 60-day pilot",
    metrics: [
      { label: "Sessions Analyzed", value: "212" },
      { label: "Impersonation Flagged", value: "3" },
      { label: "AI Voice Assist Detected", value: "2" },
      { label: "False Accusations", value: "0" },
      { label: "Detection Latency", value: "178ms" },
      { label: "Model Drift Improvement", value: "+3.1%" },
    ],
    incident: null,
  },
  {
    slug: "newsroom-deepfake",
    icon: Newspaper,
    industry: "Media",
    title: "Newsroom Verifies Viral Deepfake",
    subtitle: "Verification workflow: 2 hours → 12 minutes",
    deployment: "86 viral videos • 1 political clip flagged • 45-day pilot",
    metrics: [
      { label: "Videos Verified", value: "86" },
      { label: "Deepfakes Detected", value: "7" },
      { label: "Political Clips Flagged", value: "1" },
      { label: "Avg Analysis Time", value: "480ms/10s" },
      { label: "Workflow Reduction", value: "90%" },
    ],
    incident: null,
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Proof</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              CASE
              <br />
              <span className="text-gradient">STUDIES</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Real pilot deployments. Real detection results. Real losses prevented.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {caseStudies.map((cs, csIndex) => (
              <div key={cs.slug} className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 border-2 border-primary flex items-center justify-center">
                    <cs.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-primary">{cs.industry}</span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">{cs.title}</h2>
                  </div>
                </div>
                <p className="text-lg font-mono text-primary mb-2">{cs.subtitle}</p>
                <p className="text-sm font-mono text-muted-foreground mb-8">{cs.deployment}</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-8">
                  {cs.metrics.map((m, i) => (
                    <div key={i} className="bg-card p-6 text-center">
                      <div className="font-display text-2xl font-bold text-foreground">{m.value}</div>
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Incident Detail */}
                {cs.incident && (
                  <div className="border-2 border-foreground/10">
                    <div className="p-6 bg-card border-b-2 border-foreground/10">
                      <span className="text-xs font-mono uppercase tracking-wider text-destructive">Notable Incident: {cs.incident.type}</span>
                    </div>
                    <div className="p-6 bg-background">
                      <div className="flex items-center gap-3 mb-4">
                        <XCircle className="w-6 h-6 text-destructive" />
                        <span className="font-display font-bold text-destructive">{cs.incident.confidence} AI-Generated</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {cs.incident.signals.map((s, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                            <span className="w-2 h-2 bg-destructive" />
                            {s}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span className="font-mono text-success">{cs.incident.result} — {cs.incident.saved} saved</span>
                      </div>
                    </div>
                  </div>
                )}

                {csIndex < caseStudies.length - 1 && (
                  <div className="border-b-2 border-foreground/10 mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
