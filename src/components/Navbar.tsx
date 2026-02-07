import { useState } from "react";
import { Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "Process" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/demo", label: "Demo" },
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
              REALITY<span className="text-primary">CHECK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="font-mono uppercase text-xs tracking-wider border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all hover-brutal">
              Get Protected
              <ArrowUpRight className="w-3 h-3 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground border-2 border-foreground/20"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b-2 border-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-xs font-mono uppercase tracking-wider py-3 border-b border-border transition-colors slide-up stagger-${index + 1} ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full mt-4 font-mono uppercase text-xs tracking-wider border-2 border-primary bg-primary text-primary-foreground">
              Get Protected
              <ArrowUpRight className="w-3 h-3 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;