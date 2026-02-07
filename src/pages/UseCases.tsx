import { Link } from "react-router-dom";
import { User, Newspaper, GraduationCap, Building2, Scale, Phone, Mail, Video, Shield, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const useCases = [
  {
    icon: User,
    number: "01",
    title: "PERSONAL SAFETY",
    subtitle: "Protect Yourself & Loved Ones",
    slug: "personal-safety",
    description: "Scammers are using AI to clone voices of family members, creating convincing emergency calls. Reality Check instantly detects synthetic voices, preventing financial and emotional manipulation.",
    scenarios: [
      { icon: Phone, title: "Grandparent Scam Protection", detail: "Detects AI clones pretending to be grandchildren in distress" },
      { icon: Mail, title: "Phishing Detection", detail: "Identifies AI-crafted messages designed to manipulate" },
      { icon: Video, title: "Romance Scam Prevention", detail: "Verifies video call authenticity in online dating" },
    ],
  },
  {
    icon: Newspaper,
    number: "02",
    title: "JOURNALISM",
    subtitle: "Maintain Credibility",
    slug: "journalism",
    description: "In an age of synthetic media, newsrooms need reliable tools to verify content authenticity before publication.",
    scenarios: [
      { icon: Video, title: "Source Verification", detail: "Verify video evidence before publishing breaking news" },
      { icon: Phone, title: "Interview Authentication", detail: "Confirm recorded statements are genuine" },
      { icon: Shield, title: "Deepfake Detection", detail: "Catch manipulated political content before it spreads" },
    ],
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "EDUCATION",
    subtitle: "Academic Integrity",
    slug: "education",
    description: "As AI tools become more sophisticated, maintaining academic integrity becomes challenging.",
    scenarios: [
      { icon: Video, title: "Online Exam Proctoring", detail: "Verify student identity during remote examinations" },
      { icon: Mail, title: "Assignment Verification", detail: "Distinguish human-written work from AI-generated content" },
      { icon: Phone, title: "Virtual Attendance", detail: "Confirm real student participation in online classes" },
    ],
  },
  {
    icon: Building2,
    number: "04",
    title: "ENTERPRISE",
    subtitle: "Protect Your Business",
    slug: "enterprise",
    description: "CEO fraud and voice phishing cost businesses billions annually. Reality Check provides enterprise-grade protection.",
    scenarios: [
      { icon: Phone, title: "CEO Fraud Prevention", detail: "Block fake executive calls requesting wire transfers" },
      { icon: Video, title: "Meeting Authentication", detail: "Verify participant identities in sensitive video calls" },
      { icon: Shield, title: "Supply Chain Security", detail: "Authenticate vendor communications and contracts" },
    ],
  },
  {
    icon: Scale,
    number: "05",
    title: "LAW & SECURITY",
    subtitle: "Field-Ready Verification",
    slug: "law-security",
    description: "Legal and security professionals need verification tools that work without network dependency.",
    scenarios: [
      { icon: Video, title: "Evidence Verification", detail: "Authenticate video and audio evidence in the field" },
      { icon: Phone, title: "Witness Authentication", detail: "Verify the authenticity of recorded testimonies" },
      { icon: Shield, title: "Secure Communications", detail: "Ensure communication channels haven't been compromised" },
    ],
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[20vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          APPS
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Applications</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 reveal">
              USE
              <br />
              <span className="text-gradient">CASES</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-mono leading-relaxed max-w-xl reveal stagger-1">
              Protection across every domain where digital trust matters, 
              from personal safety to enterprise security.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className={`grid lg:grid-cols-2 gap-12 items-start`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Link to={`/use-cases/${useCase.slug}`} className="block sticky top-32 group">
                    {/* Number */}
                    <span className="font-display text-8xl font-bold text-foreground/[0.05] block mb-4">
                      {useCase.number}
                    </span>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                        <useCase.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold">{useCase.title}</h2>
                        <p className="text-xs font-mono uppercase tracking-wider text-primary">{useCase.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground font-mono leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-mono uppercase tracking-wider">View Full Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>

                <div className={`space-y-px bg-border ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {useCase.scenarios.map((scenario) => (
                    <Link
                      key={scenario.title}
                      to={`/use-cases/${useCase.slug}`}
                      className="bg-background p-6 group hover:bg-card transition-colors block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 border-2 border-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
                          <scenario.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-display font-bold mb-1">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground font-mono">{scenario.detail}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default UseCases;