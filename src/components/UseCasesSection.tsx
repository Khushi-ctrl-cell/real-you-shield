import { User, Newspaper, GraduationCap, Building2, Scale, ArrowUpRight } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "Personal Safety",
    description: "Scam call & impersonation protection for you and loved ones.",
  },
  {
    icon: Newspaper,
    title: "Journalism",
    description: "Verify videos and audio before publishing to maintain credibility.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Detect AI impersonation in exams and online classes.",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Prevent CEO fraud, voice phishing, and corporate attacks.",
  },
  {
    icon: Scale,
    title: "Law & Security",
    description: "Field verification without network dependency.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Applications</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            USE <span className="text-gradient">CASES</span>
          </h2>
        </div>

        {/* Use Cases Grid - Asymmetric */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`group bg-background p-8 hover:bg-card transition-colors relative ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Large index for first item */}
              {index === 0 && (
                <span className="absolute top-8 right-8 font-display text-[8rem] font-bold text-foreground/[0.03] leading-none">
                  01
                </span>
              )}
              
              <div className={`relative ${index === 0 ? 'max-w-md' : ''}`}>
                <div className={`${index === 0 ? 'w-16 h-16' : 'w-12 h-12'} border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors`}>
                  <useCase.icon className={`${index === 0 ? 'w-7 h-7' : 'w-5 h-5'} text-muted-foreground group-hover:text-primary transition-colors`} />
                </div>
                
                <h3 className={`font-display font-bold mb-3 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                  {useCase.title}
                </h3>
                <p className={`text-muted-foreground font-mono leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {useCase.description}
                </p>
                
                <ArrowUpRight className={`${index === 0 ? 'w-6 h-6' : 'w-5 h-5'} text-primary mt-6 opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;