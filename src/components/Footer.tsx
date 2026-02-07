import { Shield, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Demo", href: "/demo" },
    { label: "Pricing", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground/10 bg-card">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                REALITY<span className="text-primary">CHECK</span>
              </span>
            </Link>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed max-w-xs">
              Protecting digital truth through on-device AI verification. Your data stays yours.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
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

            {/* Company */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-foreground/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © 2024 Reality Integrity Checker. All rights reserved.
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