import { Link } from "react-router-dom";
import { User, Newspaper, GraduationCap, Building2, Scale, ArrowUpRight } from "lucide-react";

const useCases = [
  {
    icon: User,
    title: "Personal Safety",
    description: "Scam call & impersonation protection for you and loved ones.",
    slug: "personal-safety",
  },
  {
    icon: Newspaper,
    title: "Journalism",
    description: "Verify videos and audio before publishing to maintain credibility.",
    slug: "journalism",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Detect AI impersonation in exams and online classes.",
    slug: "education",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description: "Prevent CEO fraud, voice phishing, and corporate attacks.",
    slug: "enterprise",
  },
  {
    icon: Scale,
    title: "Law & Security",
    description: "Field verification without network dependency.",
    slug: "law-security",
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
            <Link
              key={useCase.title}
              to={`/use-cases/${useCase.slug}`}
              className={`group bg-background p-8 hover:bg-card transition-colors relative cursor-pointer ${
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
                
                <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono uppercase tracking-wider">Learn More</span>
                  <ArrowUpRight className={`${index === 0 ? 'w-5 h-5' : 'w-4 h-4'}`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;