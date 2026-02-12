import { TrendingUp, Globe, DollarSign, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Investors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          FUND
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Investors</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              INVEST IN
              <br />
              <span className="text-gradient">TRUST</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Digital Trust Infrastructure. The first local authenticity verification platform for financial institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                THE <span className="text-gradient">THESIS</span>
              </h2>
              <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
                Every digital interaction will require verification. Voice fraud alone costs $2.7B annually. 
                AI voice cloning makes the problem exponentially worse.
              </p>
            </div>

            {/* Market Size */}
            <div className="grid md:grid-cols-3 gap-px bg-border mb-16">
              {[
                { icon: DollarSign, value: "$15.7B", label: "Digital Trust TAM by 2030" },
                { icon: TrendingUp, value: "340%", label: "Voice fraud growth YoY" },
                { icon: Globe, value: "$2.7B", label: "BEC losses annually" },
              ].map((stat, i) => (
                <div key={i} className="bg-background p-8 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Business Model */}
            <div className="border-2 border-foreground/10 mb-16">
              <div className="p-6 bg-card border-b-2 border-foreground/10">
                <h3 className="font-display text-xl font-bold">BUSINESS MODEL</h3>
              </div>
              <div className="p-6 bg-background space-y-4">
                {[
                  { label: "Per Device / Month", detail: "SaaS subscription — $49–$199/device" },
                  { label: "API Call Pricing", detail: "Usage-based for developer integrations" },
                  { label: "Enterprise License", detail: "Custom annual contracts with dedicated support" },
                  { label: "Avg Contract Value", detail: "$120K ARR per enterprise customer" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-foreground/10">
                    <span className="font-mono text-foreground">{item.label}</span>
                    <span className="text-sm font-mono text-muted-foreground">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Moat */}
            <div className="mb-16">
              <h3 className="font-display text-2xl font-bold text-center mb-8">COMPETITIVE <span className="text-gradient">MOAT</span></h3>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-foreground/10">
                  <thead>
                    <tr className="bg-card">
                      <th className="p-4 text-left text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">Feature</th>
                      <th className="p-4 text-center text-xs font-mono uppercase tracking-wider text-muted-foreground border-b-2 border-foreground/10">Cloud APIs</th>
                      <th className="p-4 text-center text-xs font-mono uppercase tracking-wider text-primary border-b-2 border-foreground/10">VoiceGuard</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-sm">
                    {[
                      ["Works Offline", "❌", "✅"],
                      ["Stores User Data", "Yes", "No"],
                      ["Real-time Detection", "Partial", "Full"],
                      ["Enterprise Local Deploy", "Limited", "Native"],
                      ["Inference Latency", "500ms+", "<200ms"],
                      ["Privacy Compliance", "Complex", "Built-in"],
                    ].map(([feature, cloud, vg], i) => (
                      <tr key={i} className="border-b border-foreground/10">
                        <td className="p-4 text-foreground">{feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{cloud}</td>
                        <td className="p-4 text-center text-primary font-bold">{vg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Data Flywheel */}
            <div className="border-2 border-foreground/10 mb-16">
              <div className="p-6 bg-card border-b-2 border-foreground/10">
                <h3 className="font-display text-xl font-bold">DATA FLYWHEEL</h3>
              </div>
              <div className="p-8 bg-background">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    "More Devices",
                    "Better Signal Patterns",
                    "Higher Accuracy",
                    "More Enterprise Adoption",
                    "Stronger Threat Intelligence",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-sm font-mono text-foreground">{step}</span>
                      {i < 4 && <span className="text-primary font-bold hidden md:block">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link to="/demo">
                <Button className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                  Schedule Investor Meeting
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
