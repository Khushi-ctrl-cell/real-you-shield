import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-foreground">
                Reality<span className="text-primary">Check</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Protecting digital truth through on-device AI verification.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Demo</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Reality Integrity Checker. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Your data stays yours. Always.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
