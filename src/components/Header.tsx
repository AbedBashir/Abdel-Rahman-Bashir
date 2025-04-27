import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Qualification", href: "#qualification" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  // Handle scroll event for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Set active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id")!;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a nav item is clicked
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-navy/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-lg font-bold text-slate-900 dark:text-white flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary-500 mr-1">&lt;</span>
          Abdel Rahman Bashir
          <span className="text-primary-500 ml-1">/&gt;</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`nav-link ${
                activeSection === item.href.substring(1) ? "active" : ""
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              onClick={handleNavItemClick}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full text-slate-500 hover:text-primary-500 transition-colors duration-300"
            aria-label="Toggle theme"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
        </motion.nav>

        {/* Mobile: Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full text-slate-500 hover:text-primary-500 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`fixed inset-0 bg-white dark:bg-navy z-50 flex flex-col pt-24 px-8 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, x: "100%" }}
          animate={
            isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }
          }
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium ${
                  activeSection === item.href.substring(1)
                    ? "text-primary-500"
                    : "text-slate-900 dark:text-white"
                }`}
                onClick={handleNavItemClick}
              >
                <span className="text-primary-500 mr-2 opacity-80">
                  {index + 1}.
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
};
