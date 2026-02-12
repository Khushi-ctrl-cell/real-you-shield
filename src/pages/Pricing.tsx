import { Check, ArrowUpRight, Building2, User, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "STARTER",
    icon: User,
    price: "$49",
    period: "/device/month",
    description: "Individual use & small teams",
    features: [
      "Up to 5 registered devices",
      "100 voice scans/day",
      "Basic risk scoring",
      "Email alerts",
      "Standard support",
      "On-device processing",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "PRO",
    icon: Rocket,
    price: "$199",
    period: "/device/month",
    description: "Advanced analytics & API access",
    features: [
      "Up to 50 registered devices",
      "Unlimited voice scans",
      "Advanced analytics dashboard",
      "API access (REST + SDK)",
      "Threat history & forensic reports",
      "Executive voice whitelist",
      "Transaction risk mode",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "ENTERPRISE",
    icon: Building2,
    price: "Custom",
    period: "",
    description: "Multi-device, dedicated support",
    features: [
      "Unlimited devices",
      "Unlimited scans",
      "Organization-wide threat console",
      "Custom deployment (on-prem)",
      "Dedicated success manager",
      "SLA guarantee",
      "Compliance report exports",
      "Fraud escalation workflow",
      "Executive protection mode",
      "Federated learning opt-in",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          PRICE
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Pricing</span>
              <span className="w-16 h-px bg-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              INVEST IN
              <br />
              <span className="text-gradient">PROTECTION</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl mx-auto reveal stagger-1">
              Fraud loss avoided vs subscription cost. The ROI is obvious.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-background p-8 relative ${
                  tier.highlighted ? "border-t-4 border-primary" : "border-t-4 border-foreground/10"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6">
                  <tier.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm font-mono text-muted-foreground mb-6">{tier.description}</p>
                <div className="mb-8">
                  <span className="font-display text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-sm font-mono text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-mono text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/demo">
                  <Button
                    className={`w-full font-mono uppercase text-xs tracking-wider h-12 border-2 ${
                      tier.highlighted
                        ? "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary"
                        : "border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary"
                    } transition-all`}
                  >
                    {tier.cta}
                    <ArrowUpRight className="w-3 h-3 ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="max-w-3xl mx-auto mt-20">
            <div className="border-2 border-foreground/10 p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">ROI CALCULATION</h3>
              <p className="text-sm font-mono text-muted-foreground mb-6">Average enterprise fraud loss prevented vs VoiceGuard subscription cost</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-card">
                  <div className="font-display text-2xl font-bold text-destructive">$2.7B</div>
                  <div className="text-xs font-mono text-muted-foreground">BEC losses/year</div>
                </div>
                <div className="p-4 bg-card">
                  <div className="font-display text-2xl font-bold text-primary">$199</div>
                  <div className="text-xs font-mono text-muted-foreground">Per device/month</div>
                </div>
                <div className="p-4 bg-card">
                  <div className="font-display text-2xl font-bold text-success">1,400%</div>
                  <div className="text-xs font-mono text-muted-foreground">Avg ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
