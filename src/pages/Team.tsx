import { Users, Linkedin, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const team = [
  {
    name: "Dr. Arun Mehta",
    role: "Founder & CEO",
    bio: "Former AI Security Lead at a Fortune 500. PhD in Machine Learning from IIT Delhi. 10+ years in adversarial AI and digital forensics.",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Ex-Google Brain researcher. Specialized in edge inference optimization and model compression. Built real-time ML systems serving 100M+ users.",
  },
  {
    name: "Dr. James Chen",
    role: "Head of AI Research",
    bio: "Published 40+ papers on deepfake detection and synthetic media analysis. Previously at MIT Media Lab.",
  },
  {
    name: "Sarah Williams",
    role: "VP of Security",
    bio: "15 years in enterprise cybersecurity. Former CISO at a leading FinTech. CISSP, CISM certified.",
  },
];

const advisors = [
  { name: "Prof. Robert Kim", role: "AI Security Advisor", affiliation: "Stanford University" },
  { name: "Lisa Chen", role: "FinTech Strategy", affiliation: "Former VP, Stripe" },
  { name: "Dr. Michael Torres", role: "Digital Forensics", affiliation: "FBI Cyber Division (Ret.)" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">People</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              OUR
              <br />
              <span className="text-gradient">TEAM</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Advised by experts in AI Security & Digital Forensics. Building the future of authenticity verification.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-background p-8 group hover:bg-card transition-colors">
                <div className="w-16 h-16 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <Users className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-4">{member.role}</p>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                ADVISORY <span className="text-gradient">BOARD</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="bg-background p-8 text-center">
                  <h3 className="font-display font-bold text-lg mb-1">{advisor.name}</h3>
                  <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{advisor.role}</p>
                  <p className="text-sm font-mono text-muted-foreground">{advisor.affiliation}</p>
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

export default Team;
