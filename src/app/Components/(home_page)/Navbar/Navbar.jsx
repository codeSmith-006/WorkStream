"use client";
import { useState, useEffect } from "react";
import { Menu, X, Waves } from "lucide-react";
import { ThemeToggle } from "../../../Provider/ThemeToggle";
import Button from "../UI/Button";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed max-w-7xl mx-auto top-0 rounded-4xl left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                WorkStream
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="solutions"
              className="text-foreground hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            <Link href="/login">
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/features"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#solutions"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Solutions
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border flex flex-col space-y-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Link href="/login">
                  <Button variant="ghost" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
