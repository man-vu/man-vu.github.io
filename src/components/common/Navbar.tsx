import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { greeting } from "../../portfolio";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-sm tracking-tight text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            <span className="text-blue-400">&lt;</span>
            <span className="font-agustina text-base">
              {greeting.full_name}
            </span>
            <span className="text-blue-400"> /&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/70"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-blue-400"
                      transition={{
                        type: "tween",
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground/70 hover:bg-muted/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="glass-panel mx-4 mt-3 rounded-xl border border-border p-2">
              {navItems.map((item, index) => {
                const isActive =
                  activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.15,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-foreground bg-muted/50"
                        : "text-muted-foreground hover:text-foreground/70 hover:bg-muted/30"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
