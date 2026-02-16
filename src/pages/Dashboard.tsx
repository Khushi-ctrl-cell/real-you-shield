import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Phone, AlertTriangle, CheckCircle, XCircle, Activity, BarChart3, FileText, Users, Settings, LogOut, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow } from "date-fns";

interface ThreatRow {
  id: string;
  timestamp: string;
  analysis_type: string;
  risk_score: number;
  result: string;
  confidence: number | null;
  reason: string | null;
  device_identifier: string;
}

function mapResultToStatus(result: string) {
  if (result === "blocked") return "blocked";
  if (result === "suspicious" || result === "ai_detected") return "flagged";
  return "verified";
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("threats");
  const [authLoading, setAuthLoading] = useState(true);
  const [threats, setThreats] = useState<ThreatRow[]>([]);
  const [threatsLoading, setThreatsLoading] = useState(true);

  const fetchThreats = useCallback(async () => {
    const { data, error } = await supabase
      .from("verification_logs")
      .select("id, timestamp, analysis_type, risk_score, result, confidence, reason, device_id, devices(device_identifier)")
      .order("timestamp", { ascending: false })
      .limit(50);

    if (!error && data) {
      setThreats(
        data.map((row: any) => ({
          id: row.id,
          timestamp: row.timestamp,
          analysis_type: row.analysis_type,
          risk_score: Number(row.risk_score),
          result: row.result,
          confidence: row.confidence,
          reason: row.reason,
          device_identifier: row.devices?.device_identifier ?? row.device_id,
        }))
      );
    }
    setThreatsLoading(false);
  }, []);

  // UX-only auth guard — prevents flash of unauthorized content.
  // Actual data security is enforced server-side by RLS policies on every table.
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/auth");
      else setAuthLoading(false);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/auth");
      else setAuthLoading(false);
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  // Fetch live threats + subscribe to realtime
  useEffect(() => {
    fetchThreats();

    const channel = supabase
      .channel("verification_logs_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "verification_logs" },
        () => fetchThreats()
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [fetchThreats]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-primary flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const tabs = [
    { id: "threats", label: "Threat Feed", icon: AlertTriangle },
    { id: "devices", label: "Devices", icon: Phone },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "reports", label: "Reports", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Nav */}
      <nav className="border-b-2 border-foreground/10 bg-card">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              VOICE<span className="text-primary">GUARD</span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground ml-4 hidden md:block">Dashboard</span>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="font-mono text-xs uppercase tracking-wider border-2 border-foreground/20">
            <LogOut className="w-3 h-3 mr-2" />
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-8">
          {[
            { label: "Threats Today", value: "27", icon: AlertTriangle, color: "text-destructive" },
            { label: "Calls Scanned", value: "3,214", icon: Phone, color: "text-primary" },
            { label: "Detection Rate", value: "97.3%", icon: CheckCircle, color: "text-success" },
            { label: "Loss Prevented", value: "$58K", icon: TrendingUp, color: "text-primary" },
          ].map((stat, i) => (
            <div key={i} className="bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <div className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider border-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-primary text-primary bg-primary/5"
                  : "border-foreground/10 text-muted-foreground hover:border-foreground/30"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Threat Feed */}
        {activeTab === "threats" && (
          <div className="space-y-px bg-border">
            <div className="bg-card p-4 flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground w-20">Time</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex-1">Type</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground w-20">Risk</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground w-32">Device</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground w-24">Status</span>
            </div>
            {threatsLoading ? (
              <div className="bg-background p-8 text-center">
                <p className="text-xs font-mono text-muted-foreground">Loading threats…</p>
              </div>
            ) : threats.length === 0 ? (
              <div className="bg-background p-8 text-center">
                <p className="text-xs font-mono text-muted-foreground">No verification logs yet.</p>
              </div>
            ) : (
              threats.map((threat) => {
                const status = mapResultToStatus(threat.result);
                return (
                  <div key={threat.id} className="bg-background p-4 flex items-center gap-4 hover:bg-card transition-colors">
                    <span className="text-xs font-mono text-muted-foreground w-20">
                      {formatDistanceToNow(new Date(threat.timestamp), { addSuffix: true })}
                    </span>
                    <span className="text-sm font-mono text-foreground flex-1">{threat.analysis_type}</span>
                    <span className={`text-sm font-mono font-bold w-20 ${
                      threat.risk_score > 80 ? "text-destructive" : threat.risk_score > 50 ? "text-warning" : "text-success"
                    }`}>
                      {threat.risk_score}%
                    </span>
                    <span className="text-xs font-mono text-muted-foreground w-32">{threat.device_identifier}</span>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 border w-24 text-center ${
                      status === "blocked" ? "border-destructive text-destructive" :
                      status === "flagged" ? "border-warning text-warning" :
                      "border-success text-success"
                    }`}>
                      {status}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* Devices */}
        {activeTab === "devices" && (
          <div className="space-y-px bg-border">
            <p className="bg-card p-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Device list — coming soon (live query)
            </p>
          </div>
        )}

        {/* Analytics */}
        {activeTab === "analytics" && (
          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-card p-8">
              <h3 className="font-display font-bold text-lg mb-4">WEEKLY THREAT TREND</h3>
              <div className="space-y-3">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const width = [45, 62, 38, 78, 55, 22, 15][i];
                  return (
                    <div key={day} className="flex items-center gap-4">
                      <span className="text-xs font-mono text-muted-foreground w-8">{day}</span>
                      <div className="flex-1 bg-background h-6 relative">
                        <div className="absolute inset-y-0 left-0 bg-primary/30" style={{ width: `${width}%` }} />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground w-8">{width}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-card p-8">
              <h3 className="font-display font-bold text-lg mb-4">DETECTION DISTRIBUTION</h3>
              <div className="space-y-4">
                {[
                  { label: "Verified Human", pct: 72, color: "bg-success" },
                  { label: "Suspicious", pct: 17, color: "bg-warning" },
                  { label: "AI Detected", pct: 11, color: "bg-destructive" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>{item.label}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-3 bg-background">
                      <div className={`h-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reports */}
        {activeTab === "reports" && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold mb-4">EXPORTABLE REPORTS</h3>
            <p className="text-sm font-mono text-muted-foreground mb-8">
              Generate compliance-ready reports in PDF or CSV format. 
              Includes forensic logs, threat analytics, and audit trails.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="font-mono uppercase text-xs tracking-wider border-2 border-foreground/20">
                Export PDF
              </Button>
              <Button variant="outline" className="font-mono uppercase text-xs tracking-wider border-2 border-foreground/20">
                Export CSV
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
