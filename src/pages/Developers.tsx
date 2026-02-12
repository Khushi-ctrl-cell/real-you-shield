import { Code, ArrowUpRight, Terminal, Smartphone, Globe, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const endpoints = [
  { method: "POST", path: "/v1/verify", description: "Submit audio/text for authenticity analysis" },
  { method: "GET", path: "/v1/risk-score/:id", description: "Retrieve risk score for a verification" },
  { method: "GET", path: "/v1/devices", description: "List registered devices" },
  { method: "POST", path: "/v1/devices/register", description: "Register a new device" },
  { method: "GET", path: "/v1/logs", description: "Retrieve verification history" },
  { method: "GET", path: "/v1/analytics", description: "Threat analytics and metrics" },
];

const sdks = [
  { icon: Smartphone, title: "Mobile SDK", description: "Android & iOS native integration", status: "Beta" },
  { icon: Globe, title: "Browser SDK", description: "Web application integration", status: "Available" },
  { icon: Terminal, title: "CLI Tool", description: "Command-line verification tool", status: "Available" },
  { icon: Key, title: "API Keys", description: "REST API with bearer auth", status: "Available" },
];

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          API
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Developers</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              BUILD WITH
              <br />
              <span className="text-gradient">VOICEGUARD</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              REST API, Mobile SDKs, and CLI tools. Embed authenticity verification into any application.
            </p>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
            {sdks.map((sdk) => (
              <div key={sdk.title} className="bg-background p-8 group hover:bg-secondary/30 transition-colors">
                <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <sdk.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{sdk.title}</h3>
                <p className="text-sm text-muted-foreground font-mono mb-3">{sdk.description}</p>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border ${
                  sdk.status === "Available" ? "border-success text-success" : "border-warning text-warning"
                }`}>
                  {sdk.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-16 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">REST API</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                API <span className="text-gradient">ENDPOINTS</span>
              </h2>
            </div>

            <div className="space-y-px bg-border">
              {endpoints.map((ep, i) => (
                <div key={i} className="bg-background p-6 flex items-center gap-6 hover:bg-card transition-colors">
                  <span className={`text-xs font-mono uppercase tracking-wider px-2 py-1 border-2 ${
                    ep.method === "POST" ? "border-primary text-primary" : "border-success text-success"
                  }`}>
                    {ep.method}
                  </span>
                  <code className="font-mono text-sm text-foreground flex-1">{ep.path}</code>
                  <span className="text-sm font-mono text-muted-foreground hidden md:block">{ep.description}</span>
                </div>
              ))}
            </div>

            {/* Sample Request */}
            <div className="mt-12 border-2 border-foreground/10">
              <div className="p-4 bg-card border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">Sample Request</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`curl -X POST https://api.voiceguard.dev/v1/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "voice",
    "device_id": "FT-CEO-01",
    "metadata": {
      "caller_id": "+1234567890",
      "transaction_value": 58000
    }
  }'`}
                </pre>
              </div>
              <div className="p-4 bg-card border-t-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">Response</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`{
  "id": "V-2026-0212-7781",
  "risk_score": 94.2,
  "result": "ai_detected",
  "confidence": 94.2,
  "signals": [
    "harmonic_uniformity_deviation",
    "synthetic_waveform_compression"
  ],
  "recommendation": "block_and_report",
  "latency_ms": 131
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developers;
