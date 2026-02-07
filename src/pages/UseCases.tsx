import { motion } from "framer-motion";
import { User, Newspaper, GraduationCap, Building2, Scale, Phone, Mail, Video, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const useCases = [
  {
    icon: User,
    title: "Personal Safety",
    subtitle: "Protect Yourself & Loved Ones",
    description: "Scammers are using AI to clone voices of family members, creating convincing emergency calls. Reality Check instantly detects synthetic voices, preventing financial and emotional manipulation.",
    scenarios: [
      {
        icon: Phone,
        title: "Grandparent Scam Protection",
        detail: "Detects AI clones pretending to be grandchildren in distress",
      },
      {
        icon: Mail,
        title: "Phishing Detection",
        detail: "Identifies AI-crafted messages designed to manipulate",
      },
      {
        icon: Video,
        title: "Romance Scam Prevention",
        detail: "Verifies video call authenticity in online dating",
      },
    ],
  },
  {
    icon: Newspaper,
    title: "Journalism & Media",
    subtitle: "Maintain Credibility",
    description: "In an age of synthetic media, newsrooms need reliable tools to verify content authenticity before publication. Reality Check provides the verification layer journalism demands.",
    scenarios: [
      {
        icon: Video,
        title: "Source Verification",
        detail: "Verify video evidence before publishing breaking news",
      },
      {
        icon: Phone,
        title: "Interview Authentication",
        detail: "Confirm recorded statements are genuine",
      },
      {
        icon: Shield,
        title: "Deepfake Detection",
        detail: "Catch manipulated political content before it spreads",
      },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    subtitle: "Academic Integrity",
    description: "As AI tools become more sophisticated, maintaining academic integrity becomes challenging. Reality Check helps institutions verify student identity and work authenticity.",
    scenarios: [
      {
        icon: Video,
        title: "Online Exam Proctoring",
        detail: "Verify student identity during remote examinations",
      },
      {
        icon: Mail,
        title: "Assignment Verification",
        detail: "Distinguish human-written work from AI-generated content",
      },
      {
        icon: Phone,
        title: "Virtual Attendance",
        detail: "Confirm real student participation in online classes",
      },
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Security",
    subtitle: "Protect Your Business",
    description: "CEO fraud and voice phishing cost businesses billions annually. Reality Check provides enterprise-grade protection against sophisticated impersonation attacks.",
    scenarios: [
      {
        icon: Phone,
        title: "CEO Fraud Prevention",
        detail: "Block fake executive calls requesting wire transfers",
      },
      {
        icon: Video,
        title: "Meeting Authentication",
        detail: "Verify participant identities in sensitive video calls",
      },
      {
        icon: Shield,
        title: "Supply Chain Security",
        detail: "Authenticate vendor communications and contracts",
      },
    ],
  },
  {
    icon: Scale,
    title: "Law & Security",
    subtitle: "Field-Ready Verification",
    description: "Legal and security professionals need verification tools that work without network dependency. Reality Check provides evidence authentication anywhere.",
    scenarios: [
      {
        icon: Video,
        title: "Evidence Verification",
        detail: "Authenticate video and audio evidence in the field",
      },
      {
        icon: Phone,
        title: "Witness Authentication",
        detail: "Verify the authenticity of recorded testimonies",
      },
      {
        icon: Shield,
        title: "Secure Communications",
        detail: "Ensure communication channels haven't been compromised",
      },
    ],
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Use <span className="text-gradient">Cases</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Protection across every domain where digital trust matters, 
              from personal safety to enterprise security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold">{useCase.title}</h2>
                      <p className="text-primary font-medium">{useCase.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-8">
                    {useCase.description}
                  </p>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {useCase.scenarios.map((scenario, i) => (
                    <motion.div
                      key={scenario.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <scenario.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold mb-1">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground">{scenario.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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
