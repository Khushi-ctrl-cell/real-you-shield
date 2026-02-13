import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // --- Auth ---
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Missing or invalid Authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    const token = authHeader.replace("Bearer ", "");
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claimsData.claims.sub as string;

    // --- Validate request body ---
    const body = await req.json();
    const { device_id, risk_score, analysis_type, result, confidence, reason } = body;

    if (!device_id || risk_score === undefined || !analysis_type || !result) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          required: ["device_id", "risk_score", "analysis_type", "result"],
          optional: ["confidence", "reason"],
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (typeof risk_score !== "number" || risk_score < 0 || risk_score > 100) {
      return new Response(
        JSON.stringify({ error: "risk_score must be a number between 0 and 100" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const validResults = ["verified", "suspicious", "ai_detected", "blocked"];
    if (!validResults.includes(result)) {
      return new Response(
        JSON.stringify({ error: `result must be one of: ${validResults.join(", ")}` }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Resolve user's org_id ---
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("org_id")
      .eq("auth_id", userId)
      .single();

    if (profileError || !profile?.org_id) {
      return new Response(
        JSON.stringify({ error: "User has no associated organization" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Verify device belongs to org ---
    const { data: device, error: deviceError } = await supabase
      .from("devices")
      .select("id")
      .eq("id", device_id)
      .eq("org_id", profile.org_id)
      .single();

    if (deviceError || !device) {
      return new Response(
        JSON.stringify({ error: "Device not found or not in your organization" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Insert verification log ---
    const { data: log, error: insertError } = await supabase
      .from("verification_logs")
      .insert({
        device_id,
        org_id: profile.org_id,
        risk_score,
        analysis_type,
        result,
        confidence: confidence ?? null,
        reason: reason ?? null,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to create verification log" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // --- Build recommendation ---
    let recommendation = "allow";
    if (risk_score >= 90) recommendation = "block_and_report";
    else if (risk_score >= 70) recommendation = "manual_review";
    else if (risk_score >= 50) recommendation = "flag";

    return new Response(
      JSON.stringify({
        id: log.id,
        risk_score: log.risk_score,
        result: log.result,
        confidence: log.confidence,
        recommendation,
        timestamp: log.timestamp,
        device_id: log.device_id,
      }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
