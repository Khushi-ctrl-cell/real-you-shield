import { motion } from "framer-motion";
import { User, Newspaper, GraduationCap, Building2, Scale } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "Personal Safety",
    description: "Protect yourself from scam calls and impersonation attempts targeting you or your loved ones.",
  },
  {
    icon: Newspaper,
    title: "Journalism & Media",
    description: "Verify video and audio authenticity before publishing to maintain credibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Detect AI impersonation in online exams and virtual classrooms.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Prevent CEO fraud, voice phishing, and corporate impersonation attacks.",
  },
  {
    icon: Scale,
    title: "Law & Security",
    description: "Field verification of evidence without requiring network connectivity.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Use <span className="text-gradient">Cases</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Protection across every domain where digital trust matters
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
