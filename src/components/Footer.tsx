import { Shield, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  platform: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Demo", href: "/demo" },
    { label: "Pricing", href: "/pricing" },
    { label: "Developers / API", href: "/developers" },
  ],
  company: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Team", href: "/team" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Investors", href: "/investors" },
    { label: "Blog", href: "/blog" },
  ],
  trust: [
    { label: "Security & Compliance", href: "/security" },
    { label: "Responsible AI", href: "/ethics" },
    { label: "Transparency", href: "/transparency" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground/10 bg-card">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                VOICE<span className="text-primary">GUARD</span>
              </span>
            </Link>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed max-w-xs mb-6">
              AI Voice Fraud Prevention for Financial Institutions. On-device detection. Zero data exposure.
            </p>
            <p className="text-xs font-mono text-primary">
              "In a world where AI can fake anything, verification must become infrastructure."
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key}>
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">{key}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href} 
                        className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © 2026 VoiceGuard. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Your data stays yours. Always.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
