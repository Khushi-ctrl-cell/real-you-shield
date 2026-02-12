import { Link } from "react-router-dom";
import { Building2, ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "FinTech & Banking",
    description: "Prevent CEO voice fraud, authorize transactions safely, and protect executive communications.",
    slug: "enterprise",
  },
  {
    title: "Insurance",
    description: "Detect voice-based claims fraud and verify policyholder identity during phone interactions.",
    slug: "enterprise",
  },
  {
    title: "Wealth Management",
    description: "Protect high-net-worth client communications and verify advisor identity on calls.",
    slug: "enterprise",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-geometric opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Solutions</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            BUILT FOR <span className="text-gradient">FINANCE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              to={`/use-cases/${useCase.slug}`}
              className="group bg-background p-8 hover:bg-card transition-colors relative cursor-pointer"
            >
              <div className="w-12 h-12 border-2 border-foreground/20 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <Building2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">{useCase.description}</p>
              
              <div className="flex items-center gap-2 mt-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono uppercase tracking-wider">Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
