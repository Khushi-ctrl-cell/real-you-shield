import { useParams, Link } from "react-router-dom";
import { User, Newspaper, GraduationCap, Building2, Scale, Phone, Mail, Video, Shield, ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useCasesData = {
  "personal-safety": {
    icon: User,
    number: "01",
    title: "PERSONAL SAFETY",
    subtitle: "Protect Yourself & Loved Ones",
    description: "Scammers are using AI to clone voices of family members, creating convincing emergency calls. Reality Check instantly detects synthetic voices, preventing financial and emotional manipulation.",
    threats: [
      { title: "Grandparent Scams", detail: "AI clones pretending to be grandchildren in distress, asking for emergency money" },
      { title: "Romance Scams", detail: "Deepfake video calls in online dating to build false trust" },
      { title: "Phishing Calls", detail: "AI-generated voices impersonating banks, government agencies, or service providers" },
      { title: "Family Emergency Fraud", detail: "Cloned voices of family members claiming accidents or legal trouble" },
    ],
    protection: [
      "Real-time voice analysis on all incoming calls",
      "Instant alerts when AI-generated content is detected",
      "Confidence scores to help make informed decisions",
      "Works offline - protection even without internet",
    ],
    stats: [
      { value: "$1.1B", label: "Lost to imposter scams in 2023" },
      { value: "94%", label: "Detection accuracy" },
      { value: "<1s", label: "Analysis time" },
    ],
  },
  "journalism": {
    icon: Newspaper,
    number: "02",
    title: "JOURNALISM & MEDIA",
    subtitle: "Maintain Credibility",
    description: "In an age of synthetic media, newsrooms need reliable tools to verify content authenticity before publication. Reality Check provides the verification layer journalism demands.",
    threats: [
      { title: "Deepfake Videos", detail: "Manipulated videos of public figures making false statements" },
      { title: "Audio Manipulation", detail: "Edited or AI-generated audio presented as authentic recordings" },
      { title: "Source Impersonation", detail: "Fake communications appearing to come from legitimate sources" },
      { title: "Visual Manipulation", detail: "Doctored images and AI-generated photos passed off as real" },
    ],
    protection: [
      "Verify video authenticity before publishing",
      "Authenticate audio recordings and interviews",
      "Detect manipulated images and AI-generated content",
      "Maintain publication credibility and trust",
    ],
    stats: [
      { value: "47%", label: "of journalists encountered deepfakes" },
      { value: "89%", label: "Video manipulation detection" },
      { value: "24/7", label: "Always-on protection" },
    ],
  },
  "education": {
    icon: GraduationCap,
    number: "03",
    title: "EDUCATION",
    subtitle: "Academic Integrity",
    description: "As AI tools become more sophisticated, maintaining academic integrity becomes challenging. Reality Check helps institutions verify student identity and work authenticity.",
    threats: [
      { title: "Proxy Test Takers", detail: "Deepfakes or AI used to impersonate students during online exams" },
      { title: "AI-Generated Submissions", detail: "Essays and assignments written by AI presented as original work" },
      { title: "Identity Fraud", detail: "Students impersonating others for attendance or assessments" },
      { title: "Virtual Classroom Cheating", detail: "Unauthorized assistance hidden behind AI-modified video feeds" },
    ],
    protection: [
      "Verify student identity during remote exams",
      "Detect AI-generated written content",
      "Authenticate video participation in online classes",
      "Maintain fair assessment standards",
    ],
    stats: [
      { value: "78%", label: "of students admit to AI use" },
      { value: "95%", label: "Identity verification accuracy" },
      { value: "100%", label: "Privacy - no data leaves device" },
    ],
  },
  "enterprise": {
    icon: Building2,
    number: "04",
    title: "ENTERPRISE SECURITY",
    subtitle: "Protect Your Business",
    description: "CEO fraud and voice phishing cost businesses billions annually. Reality Check provides enterprise-grade protection against sophisticated impersonation attacks.",
    threats: [
      { title: "CEO Fraud", detail: "AI-cloned executive voices requesting urgent wire transfers" },
      { title: "Voice Phishing", detail: "Attackers impersonating IT, HR, or executives to gain access" },
      { title: "Meeting Infiltration", detail: "Deepfakes joining video calls to gather intelligence or authorize actions" },
      { title: "Supply Chain Attacks", detail: "Impersonating vendors or partners to redirect payments" },
    ],
    protection: [
      "Authenticate all executive communications",
      "Verify participant identities in sensitive meetings",
      "Protect against business email compromise",
      "Secure vendor and partner communications",
    ],
    stats: [
      { value: "$2.7B", label: "Lost to BEC attacks annually" },
      { value: "99.2%", label: "CEO fraud detection rate" },
      { value: "0", label: "Data sent to cloud" },
    ],
  },
  "law-security": {
    icon: Scale,
    number: "05",
    title: "LAW & SECURITY",
    subtitle: "Field-Ready Verification",
    description: "Legal and security professionals need verification tools that work without network dependency. Reality Check provides evidence authentication anywhere.",
    threats: [
      { title: "Fabricated Evidence", detail: "AI-generated or manipulated audio/video presented in legal proceedings" },
      { title: "Witness Tampering", detail: "Deepfakes impersonating witnesses or creating false testimonies" },
      { title: "Chain of Custody Issues", detail: "Questions about digital evidence authenticity and integrity" },
      { title: "Communication Interception", detail: "Compromised or manipulated secure communications" },
    ],
    protection: [
      "Authenticate digital evidence in the field",
      "Verify witness recordings and testimonies",
      "Ensure secure communication integrity",
      "Document verification for legal proceedings",
    ],
    stats: [
      { value: "100%", label: "Offline capability" },
      { value: "Legal", label: "Grade documentation" },
      { value: "Instant", label: "Field verification" },
    ],
  },
};

const UseCaseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = slug ? useCasesData[slug as keyof typeof useCasesData] : null;

  if (!useCase) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Use Case Not Found</h1>
          <Link to="/use-cases">
            <Button>Back to Use Cases</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = useCase.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-30" />
        <div className="absolute -right-20 top-0 font-display text-[25vw] font-bold text-foreground/[0.02] select-none pointer-events-none leading-none">
          {useCase.number}
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Back link */}
          <Link to="/use-cases" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Use Cases
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 border-2 border-primary flex items-center justify-center">
                <Icon className="w-9 h-9 text-primary" />
              </div>
              <span className="font-display text-6xl font-bold text-foreground/10">{useCase.number}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] mb-4 reveal">
              {useCase.title}
            </h1>
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-6">{useCase.subtitle}</p>
            <p className="text-lg text-muted-foreground font-mono leading-relaxed max-w-xl">
              {useCase.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y-2 border-foreground/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-px bg-border max-w-3xl mx-auto">
            {useCase.stats.map((stat, index) => (
              <div key={index} className="bg-background p-6 text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-destructive" />
              <span className="text-xs font-mono uppercase tracking-widest text-destructive">Threats</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              WHAT YOU'RE <span className="text-destructive">FACING</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {useCase.threats.map((threat, index) => (
              <div key={index} className="bg-card p-8 border-l-4 border-destructive/50">
                <div className="flex items-start gap-4">
                  <span className="text-destructive font-mono text-sm">0{index + 1}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{threat.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{threat.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-16 h-px bg-success" />
                <span className="text-xs font-mono uppercase tracking-widest text-success">Protection</span>
                <span className="w-16 h-px bg-success" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                HOW WE <span className="text-gradient">PROTECT</span>
              </h2>
            </div>

            <div className="space-y-4">
              {useCase.protection.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background border-l-4 border-success">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="font-mono">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/demo">
                <Button className="font-mono uppercase text-xs tracking-wider h-14 px-10 border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                  Try Demo
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

export default UseCaseDetail;