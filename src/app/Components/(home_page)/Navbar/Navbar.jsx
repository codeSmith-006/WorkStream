"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Waves, ChevronDown, ChevronRight } from "lucide-react";
import { Dropdown, Menu as AntMenu } from "antd";
import { ThemeToggle } from "../../../Provider/ThemeToggle";
import Button from "../UI/Button";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mobile dropdown states (kept for mobile accordion style)
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ant Design Menu Items with proper theme colors
  const productMenuItems = [
    {
      key: "features",
      label: (
        <Link
          href="/features"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Features
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Discover our powerful capabilities
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "pricing",
      label: (
        <Link
          href="/pricing"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Pricing
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Simple, transparent plans
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "security",
      label: (
        <Link
          href="/security"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Security
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Enterprise-grade protection
              </div>
            </div>
          </div>
        </Link>
      ),
    },
  ];

  const companyMenuItems = [
    {
      key: "about",
      label: (
        <Link
          href="/about"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                About
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Our story and mission
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "solutions",
      label: (
        <Link
          href="/solutions"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Solutions
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Tailored for your needs
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "partners",
      label: (
        <Link
          href="/partners"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Partners
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Join our ecosystem
              </div>
            </div>
          </div>
        </Link>
      ),
    },
  ];

  const resourcesMenuItems = [
    {
      key: "documentation",
      label: (
        <Link
          href="/documentation"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Documentation
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Technical guides & API
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "help_center",
      label: (
        <Link
          href="/help_center"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Help Center
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Get support when you need it
              </div>
            </div>
          </div>
        </Link>
      ),
    },
    {
      key: "community",
      label: (
        <Link
          href="/community"
          className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 group"
        >
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-accent mt-2 opacity-60 group-hover:opacity-100 transition-opacity"></div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary">
                Community
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Connect with other users
              </div>
            </div>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <>
      <nav
        className={`fixed max-w-7xl mx-auto top-4 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/80 backdrop-blur-xl shadow-lg rounded-2xl mx-4"
            : "bg-transparent mx-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-r from-primary to-secondary rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <Waves className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  WorkStream
                </span>
              </div>
            </Link>

            {/* Desktop Menu with Enhanced Ant Design Dropdowns */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home route */}
              <Link href="/">
                <h1 className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium">
                  Home
                </h1>
              </Link>
              {/* Product Dropdown */}
              <Dropdown
                menu={{ items: productMenuItems }}
                trigger={["hover", "click"]}
                placement="bottomLeft"
                overlayClassName="navbar-dropdown-enhanced"
                overlayStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
                  minWidth: "280px",
                  padding: "12px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  marginTop: "8px",
                }}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium">
                  <span>Product</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </Dropdown>

              {/* Company Dropdown */}
              <Dropdown
                menu={{ items: companyMenuItems }}
                trigger={["hover", "click"]}
                placement="bottomLeft"
                overlayClassName="navbar-dropdown-enhanced"
                overlayStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
                  minWidth: "280px",
                  padding: "12px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  marginTop: "8px",
                }}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium">
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </Dropdown>

              {/* Resources Dropdown */}
              <Dropdown
                menu={{ items: resourcesMenuItems }}
                trigger={["hover", "click"]}
                placement="bottomLeft"
                overlayClassName="navbar-dropdown-enhanced"
                overlayStyle={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
                  minWidth: "280px",
                  padding: "12px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  marginTop: "8px",
                }}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 font-medium">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </Dropdown>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-muted/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu with Enhanced Accordion */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/60 rounded-b-2xl mt-2 -mx-6">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {/* Product Mobile Accordion */}
                <div className="border-b border-border/30 pb-3">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  >
                    <span>Product</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileProductOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileProductOpen && (
                    <div className="pl-6 mt-3 space-y-2 border-l-2 border-primary/20">
                      <Link
                        href="/features"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Features
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Discover our capabilities
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/pricing"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Pricing
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Simple, transparent plans
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/security"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Security
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Enterprise-grade protection
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Company Mobile Accordion */}
                <div className="border-b border-border/30 pb-3">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  >
                    <span>Company</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileCompanyOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-6 mt-3 space-y-2 border-l-2 border-secondary/20">
                      <Link
                        href="/about"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-secondary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              About
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Our story and mission
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/solutions"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-secondary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Solutions
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Tailored for your needs
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/partners"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-secondary opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Partners
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Join our ecosystem
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Resources Mobile Accordion */}
                <div className="border-b border-border/30 pb-3">
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-muted/30 rounded-xl transition-all duration-300 font-medium"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  >
                    <span>Resources</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileResourcesOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileResourcesOpen && (
                    <div className="pl-6 mt-3 space-y-2 border-l-2 border-accent/20">
                      <Link
                        href="/documentation"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Documentation
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Technical guides & API
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/help_center"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Help Center
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Get support when you need it
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/community"
                        className="block px-4 py-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-accent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                          <div>
                            <div className="font-medium text-foreground group-hover:text-primary">
                              Community
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Connect with other users
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border/60 flex flex-col space-y-3">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-muted-foreground font-medium">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full hover:bg-muted/30 rounded-xl transition-all duration-300 font-medium"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground rounded-xl shadow-md transition-all duration-300 font-medium">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Custom CSS for perfect theme integration */}
      <style jsx global>{`
        .ant-dropdown.navbar-dropdown-enhanced .ant-dropdown-menu {
          background: var(--card) !important;
          border: 1px solid var(--border) !important;
          border-radius: 16px !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 10px 10px -5px rgb(0 0 0 / 0.04) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          padding: 12px !important;
        }

        .ant-dropdown.navbar-dropdown-enhanced .ant-dropdown-menu-item {
          background: transparent !important;
          color: var(--foreground) !important;
          padding: 0 !important;
          margin: 4px 0 !important;
          border-radius: 12px !important;
          border: none !important;
          transition: all 0.3s ease !important;
        }

        .ant-dropdown.navbar-dropdown-enhanced .ant-dropdown-menu-item:hover {
          background: var(--muted) !important;
          transform: translateX(2px);
        }

        .ant-dropdown.navbar-dropdown-enhanced
          .ant-dropdown-menu-item-selected {
          background: var(--muted) !important;
        }

        /* Dark mode specific adjustments */
        .dark .ant-dropdown.navbar-dropdown-enhanced .ant-dropdown-menu {
          background: var(--card) !important;
          border-color: var(--border) !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.3),
            0 10px 10px -5px rgb(0 0 0 / 0.2) !important;
        }
      `}</style>
    </>
  );
}
