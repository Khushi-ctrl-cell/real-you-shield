import { Rocket, Cpu, Shield, Globe, Users, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const roadmapItems = [
  {
    quarter: "Q1 2026",
    title: "MVP LAUNCH",
    icon: Rocket,
    items: ["Voice clone detection engine", "FinTech pilot program", "Basic risk scoring API", "On-device inference (<200ms)"],
    status: "current",
  },
  {
    quarter: "Q2 2026",
    title: "MOBILE SDK",
    icon: Cpu,
    items: ["Android & iOS SDK", "Model compression via quantization", "Transaction risk mode", "Executive voice whitelist"],
    status: "next",
  },
  {
    quarter: "Q3 2026",
    title: "ENTERPRISE DASHBOARD",
    icon: Shield,
    items: ["Real-time threat console", "Organization-wide analytics", "Compliance report exports", "SOC 2 Type II certification"],
    status: "planned",
  },
  {
    quarter: "Q4 2026",
    title: "ADVANCED CAPABILITIES",
    icon: Brain,
    items: ["Federated learning research", "Adversarial robustness testing", "Hardware secure enclave integration", "Law enforcement toolkit"],
    status: "planned",
  },
  {
    quarter: "2027",
    title: "SCALE & EXPAND",
    icon: Globe,
    items: ["Multi-language voice detection", "Government & media verticals", "Global threat intelligence network", "Channel partner program"],
    status: "future",
  },
];

const technicalRoadmap = [
  { title: "Model compression via quantization", detail: "Reduce model size to <30MB while maintaining >97% accuracy" },
  { title: "Federated learning research", detail: "Improve models across devices without sharing raw data" },
  { title: "Adversarial robustness testing", detail: "Continuous red-teaming against emerging attack vectors" },
  { title: "Hardware-level secure enclave integration", detail: "TPM-bound authenticity signatures for tamper-proof verification" },
  { title: "Edge inference optimization", detail: "Custom signal extraction pipeline for sub-100ms latency" },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Vision</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              PRODUCT
              <br />
              <span className="text-gradient">ROADMAP</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {roadmapItems.map((item, i) => (
                <div key={i} className={`relative p-8 border-2 border-foreground/10 border-b-0 last:border-b-2 ${
                  item.status === "current" ? "bg-primary/5 border-l-4 border-l-primary" : "bg-background"
                }`}>
                  {item.status === "current" && (
                    <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-primary text-primary-foreground">
                      Current
                    </span>
                  )}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-primary">{item.quarter}</span>
                      <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {item.items.map((detail, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                            <span className="w-2 h-2 bg-primary/50" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Roadmap */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                TECHNICAL <span className="text-gradient">DEPTH</span>
              </h2>
            </div>
            <div className="space-y-4">
              {technicalRoadmap.map((item, i) => (
                <div key={i} className="p-6 bg-background border-2 border-foreground/10">
                  <h3 className="font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-mono text-muted-foreground">{item.detail}</p>
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

export default Roadmap;
