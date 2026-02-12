import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustScoreSection from "@/components/TrustScoreSection";
import UseCasesSection from "@/components/UseCasesSection";
import MagicMomentSection from "@/components/MagicMomentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const backedBy = ["Y Combinator", "a16z", "Sequoia", "Accel", "Tiger Global"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrustScoreSection />

        {/* Backed By */}
        <section className="py-12 border-y-2 border-foreground/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Backed By</span>
              <div className="flex flex-wrap gap-8 justify-center">
                {backedBy.map((name) => (
                  <span key={name} className="text-sm font-mono text-foreground/30">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <MagicMomentSection />

        {/* Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-4xl mx-auto">
              {[
                { value: "12,000+", label: "Threats Analyzed" },
                { value: "97.3%", label: "Detection Accuracy" },
                { value: "0%", label: "Data Sent to Cloud" },
                { value: "18", label: "Enterprise Pilots" },
              ].map((stat, i) => (
                <div key={i} className="bg-card p-8 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepaper CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Research</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-4">
                THE FUTURE OF LOCAL <span className="text-gradient">DEEPFAKE DETECTION</span>
              </h2>
              <p className="text-sm font-mono text-muted-foreground mb-8">
                Our whitepaper covers the threat landscape, AI impersonation statistics, technical approach, and product roadmap.
              </p>
              <Link to="/auth">
                <Button className="font-mono uppercase text-xs tracking-wider h-12 px-8 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                  📥 Download Whitepaper
                  <ArrowUpRight className="w-3 h-3 ml-2" />
                </Button>
              </Link>
              <p className="text-xs font-mono text-muted-foreground mt-4">Email required for download</p>
            </div>
          </div>
        </section>

        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
