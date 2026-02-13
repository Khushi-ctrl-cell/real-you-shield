import { Code, ArrowUpRight, Terminal, Smartphone, Globe, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const endpoints = [
  { method: "POST", path: "/functions/v1/verify", description: "Submit voice analysis result from mobile device" },
  { method: "GET", path: "/rest/v1/verification_logs", description: "Retrieve verification history (via Supabase REST)" },
  { method: "GET", path: "/rest/v1/devices", description: "List registered devices (via Supabase REST)" },
  { method: "POST", path: "/rest/v1/devices", description: "Register a new device (admin only)" },
  { method: "GET", path: "/rest/v1/profiles", description: "Get user profile and org membership" },
];

const sdks = [
  { icon: Smartphone, title: "Mobile SDK", description: "Android native integration guide", status: "Beta" },
  { icon: Globe, title: "Browser SDK", description: "Web dashboard (this app)", status: "Available" },
  { icon: Terminal, title: "CLI Tool", description: "Command-line verification tool", status: "Planned" },
  { icon: Key, title: "API Keys", description: "JWT bearer auth via Supabase Auth", status: "Available" },
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
              Secure REST API for mobile integration. Submit voice detection results from native Android apps and receive real-time dashboard updates.
            </p>
          </div>
        </div>
      </section>

      {/* Auth Flow */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-16 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">Authentication</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                MOBILE <span className="text-gradient">AUTH FLOW</span>
              </h2>
            </div>

            <div className="space-y-0">
              {[
                { step: "01", title: "Sign In", detail: `POST ${SUPABASE_URL}/auth/v1/token?grant_type=password with email & password. Returns access_token (JWT).` },
                { step: "02", title: "Include JWT", detail: "Add header: Authorization: Bearer <access_token> to all API requests." },
                { step: "03", title: "Refresh Token", detail: `POST ${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token when token expires.` },
                { step: "04", title: "RLS Enforced", detail: "All queries are scoped to the user's organization via Row Level Security. No cross-tenant data access." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-background border-2 border-foreground/10 border-b-0 last:border-b-2">
                  <div className="w-12 h-12 border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-primary">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold">{item.title}</h3>
                    <p className="text-sm font-mono text-muted-foreground break-all">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20">
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
                  sdk.status === "Available" ? "border-success text-success" : sdk.status === "Beta" ? "border-warning text-warning" : "border-muted-foreground text-muted-foreground"
                }`}>
                  {sdk.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-card">
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

            {/* POST /verify Contract */}
            <div className="mt-12 border-2 border-foreground/10">
              <div className="p-4 bg-background border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">POST /functions/v1/verify — Request Body</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`{
  "device_id": "uuid",        // Required — registered device UUID
  "risk_score": 94.2,         // Required — 0 to 100
  "analysis_type": "voice",   // Required — e.g. "voice", "text"
  "result": "ai_detected",    // Required — "verified" | "suspicious" | "ai_detected" | "blocked"
  "confidence": 94.2,         // Optional — detection confidence %
  "reason": "string"          // Optional — human-readable reason
}`}
                </pre>
              </div>

              <div className="p-4 bg-background border-t-2 border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">Sample cURL Request</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`curl -X POST ${SUPABASE_URL}/functions/v1/verify \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "device_id": "your-device-uuid",
    "risk_score": 94.2,
    "analysis_type": "voice",
    "result": "ai_detected",
    "confidence": 94.2,
    "reason": "harmonic_uniformity_deviation, synthetic_waveform_compression"
  }'`}
                </pre>
              </div>

              <div className="p-4 bg-background border-t-2 border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">201 Response</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`{
  "id": "uuid",
  "risk_score": 94.2,
  "result": "ai_detected",
  "confidence": 94.2,
  "recommendation": "block_and_report",
  "timestamp": "2026-02-13T10:30:00Z",
  "device_id": "your-device-uuid"
}`}
                </pre>
              </div>

              <div className="p-4 bg-background border-t-2 border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">Recommendation Logic</span>
              </div>
              <div className="p-6 bg-background">
                <div className="space-y-2">
                  {[
                    { range: "90–100", action: "block_and_report", color: "text-destructive" },
                    { range: "70–89", action: "manual_review", color: "text-warning" },
                    { range: "50–69", action: "flag", color: "text-warning" },
                    { range: "0–49", action: "allow", color: "text-success" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-mono">
                      <span className="text-muted-foreground w-16">{r.range}</span>
                      <span className="text-muted-foreground">→</span>
                      <span className={r.color}>{r.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-background border-t-2 border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-destructive">Error Responses</span>
              </div>
              <div className="p-6 bg-background">
                <div className="space-y-2 text-sm font-mono text-muted-foreground">
                  <div><span className="text-destructive">401</span> — Missing or invalid JWT token</div>
                  <div><span className="text-destructive">400</span> — Missing required fields or invalid values</div>
                  <div><span className="text-destructive">403</span> — User has no associated organization</div>
                  <div><span className="text-destructive">404</span> — Device not found or not in your org</div>
                  <div><span className="text-destructive">500</span> — Internal server error</div>
                </div>
              </div>
            </div>

            {/* Realtime */}
            <div className="mt-12 border-2 border-primary">
              <div className="p-4 bg-primary/5 border-b-2 border-primary">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">⚡ Realtime — Dashboard Auto-Updates</span>
              </div>
              <div className="p-6 bg-background">
                <p className="text-sm font-mono text-muted-foreground mb-4">
                  The <code className="text-primary">verification_logs</code> table has Realtime enabled. 
                  When the Android app POSTs to <code className="text-primary">/verify</code>, the web dashboard receives the event instantly via WebSocket.
                </p>
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`// Web dashboard listens for new verification logs
const channel = supabase
  .channel('verification-feed')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'verification_logs',
  }, (payload) => {
    // Update threat feed in real-time
    console.log('New verification:', payload.new);
  })
  .subscribe();`}
                </pre>
              </div>
            </div>

            {/* Android Integration */}
            <div className="mt-12 border-2 border-foreground/10">
              <div className="p-4 bg-card border-b-2 border-foreground/10">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">📱 Android Integration (Kotlin)</span>
              </div>
              <div className="p-6 bg-background">
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
{`// 1. Sign in to get JWT
val response = supabase.auth.signInWith(Email) {
    email = "analyst@company.com"
    password = "secure_password"
}
val jwt = response.session?.accessToken

// 2. Submit verification result
val client = OkHttpClient()
val body = """
{
  "device_id": "$deviceUuid",
  "risk_score": $riskScore,
  "analysis_type": "voice",
  "result": "$detectionResult",
  "confidence": $confidence,
  "reason": "$reason"
}
""".toRequestBody("application/json".toMediaType())

val request = Request.Builder()
    .url("${SUPABASE_URL}/functions/v1/verify")
    .addHeader("Authorization", "Bearer $jwt")
    .post(body)
    .build()

val result = client.newCall(request).execute()`}
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
