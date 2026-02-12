import { useState } from "react";
import { Shield, Menu, X, ArrowUpRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Platform" },
  { href: "/how-it-works", label: "Technology" },
  { href: "/use-cases", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
];

const moreLinks = [
  { href: "/security", label: "Security" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/developers", label: "Developers" },
  { href: "/investors", label: "Investors" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-foreground/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 border-2 border-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              VOICE<span className="text-primary">GUARD</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="outline" className="font-mono uppercase text-xs tracking-wider border-2 border-foreground/20 hover:border-foreground">
                <User className="w-3 h-3 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/demo">
              <Button className="font-mono uppercase text-xs tracking-wider border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
                Book Demo
                <ArrowUpRight className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground border-2 border-foreground/20"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b-2 border-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {[...navLinks, ...moreLinks].map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-xs font-mono uppercase tracking-wider py-3 border-b border-border transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4">
              <Link to="/auth" className="flex-1">
                <Button variant="outline" className="w-full font-mono uppercase text-xs tracking-wider border-2 border-foreground/20">
                  Sign In
                </Button>
              </Link>
              <Link to="/demo" className="flex-1">
                <Button className="w-full font-mono uppercase text-xs tracking-wider border-2 border-primary bg-primary text-primary-foreground">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
