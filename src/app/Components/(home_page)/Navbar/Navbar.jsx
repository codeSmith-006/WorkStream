"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Waves, ChevronDown, ChevronRight } from "lucide-react";
import { ThemeToggle } from "../../../Provider/ThemeToggle";
import Button from "../UI/Button";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile dropdown states
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // Desktop dropdown states
  const [desktopProductOpen, setDesktopProductOpen] = useState(false);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopProductOpen(false);
        setDesktopCompanyOpen(false);
        setDesktopResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          <div
            className="hidden md:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {/* Product */}
            <div
              className="relative"
              ref={dropdownRef} // so outside clicks can close it
            >
              <button
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                onClick={() => setDesktopProductOpen(!desktopProductOpen)}
              >
                <span>Product</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    desktopProductOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopProductOpen && (
                <div className="absolute mt-2 w-40 bg-card border border-border rounded-md shadow-lg py-2">
                  <Link
                    href="/features"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/security"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Security
                  </Link>
                </div>
              )}
            </div>

            {/* Company */}
            <div
              className="relative"
              onClick={() => setDesktopCompanyOpen(!desktopCompanyOpen)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    desktopCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {desktopCompanyOpen && (
                <div className="absolute mt-2 w-40 bg-card border border-border rounded-md shadow-lg py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/solutions"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/partners"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div
              className="relative"
              onClick={() => setDesktopResourcesOpen(!desktopResourcesOpen)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    desktopResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {desktopResourcesOpen && (
                <div className="absolute mt-2 w-48 bg-card border border-border rounded-md shadow-lg py-2">
                  <Link
                    href="/documentation"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/help-center"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/community"
                    className="block px-4 py-2 text-foreground hover:text-primary"
                  >
                    Community
                  </Link>
                </div>
              )}
            </div>
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
              {/* Product */}
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-foreground hover:text-primary"
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
              >
                <span>Product</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    mobileProductOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {mobileProductOpen && (
                <div className="pl-6 space-y-1">
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
                    href="/security"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Security
                  </Link>
                </div>
              )}

              {/* Company */}
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-foreground hover:text-primary"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                <span>Company</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    mobileCompanyOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {mobileCompanyOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="/solutions"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/partners"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Partners
                  </Link>
                </div>
              )}

              {/* Resources */}
              <button
                className="flex w-full items-center justify-between px-3 py-2 text-foreground hover:text-primary"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                <span>Resources</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    mobileResourcesOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
              {mobileResourcesOpen && (
                <div className="pl-6 space-y-1">
                  <Link
                    href="/documentation"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/help-center"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/community"
                    className="block px-3 py-2 text-foreground hover:text-primary"
                  >
                    Community
                  </Link>
                </div>
              )}

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
