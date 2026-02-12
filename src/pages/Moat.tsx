import { Shield, Zap, Building2, ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whyDifferent = [
  { icon: Shield, title: "On-Device AI", detail: "No data leaves the device. Cloud competitors upload your audio. We don't." },
  { icon: Zap, title: "Signal-Level Detection", detail: "We analyze waveform artifacts, not metadata. Deeper detection that attackers can't easily spoof." },
  { icon: Building2, title: "Hardware-Integrated", detail: "Secure enclave + TPM-bound signatures. Verification tied to physical hardware." },
];

const goToMarket = [
  { phase: "Phase 1", title: "Developers & Security Teams", detail: "API + SDK distribution, developer community, early adopter program" },
  { phase: "Phase 2", title: "Enterprise IT", detail: "Direct enterprise sales, SOC 2 certification, dedicated support tiers" },
  { phase: "Phase 3", title: "Government & Media", detail: "Regulatory partnerships, newsroom integrations, public sector contracts" },
];

const partners = ["Zoom", "Slack", "Microsoft Teams", "WhatsApp Business", "Twilio", "Salesforce"];

const Moat = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Differentiation</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              WHY WE'RE
              <br />
              <span className="text-gradient">DIFFERENT</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {whyDifferent.map((item) => (
              <div key={item.title} className="bg-background p-8 group hover:bg-secondary/30 transition-colors">
                <div className="w-14 h-14 border-2 border-primary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm font-mono text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              GO-TO-MARKET <span className="text-gradient">STRATEGY</span>
            </h2>
            <div className="space-y-0">
              {goToMarket.map((item, i) => (
                <div key={i} className="p-8 border-2 border-foreground/10 border-b-0 last:border-b-2 bg-background">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="font-display font-bold text-primary">{item.phase.split(" ")[1]}</span>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-primary">{item.phase}</span>
                      <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm font-mono text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              COMPATIBLE <span className="text-gradient">WITH</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner} className="bg-background p-6 text-center hover:bg-secondary/30 transition-colors">
                <span className="font-mono text-sm text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              JOIN THE <span className="text-gradient">WAITLIST</span>
            </h2>
            <p className="text-sm font-mono text-muted-foreground mb-4">
              2,431 professionals on early access waitlist.
            </p>
            <div className="flex gap-3 justify-center">
              <Link to="/auth">
                <Button className="font-mono uppercase text-xs tracking-wider h-12 px-8 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                  Join Beta Waitlist
                  <ArrowUpRight className="w-3 h-3 ml-2" />
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

export default Moat;
