import React, { useState, useEffect, useRef } from "react";

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // ESC key & click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] bg-clip-text text-transparent"
        >
          El's Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "projects", "contacts"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => scrollToSection(section)}
              className={`nav-link relative ${
                activeSection === section
                  ? "text-[#FFB6C1] font-semibold"
                  : "hover:text-[#87CEEB]"
              } transition-colors duration-300 cursor-pointer`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        {!isMenuOpen && (
          <div className="md:hidden flex items-center justify-center z-50">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 relative group"
              aria-label="Open menu"
            >
              <div className="relative w-6 h-5">
                <span className="absolute top-0 h-[3px] w-full bg-[#1E3D59] rounded" />
                <span className="absolute top-2 h-[3px] w-full bg-[#1E3D59] rounded" />
                <span className="absolute top-4 h-[3px] w-full bg-[#1E3D59] rounded" />
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Overlay Blur */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
      )}

      {/* Slide-in Menu Panel */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-44 z-50 bg-white/90 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button (X) */}
        <div className="flex justify-start p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-8 h-8 relative"
            aria-label="Close menu"
          >
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#1E3D59] rotate-45 transform origin-center" />
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#1E3D59] -rotate-45 transform origin-center" />
          </button>
        </div>

        <div className="flex flex-col items-start px-6 mt-8 space-y-6">
          {["home", "about", "projects", "contacts"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => scrollToSection(section)}
              className={`text-lg ${
                activeSection === section
                  ? "text-[#FFB6C1] font-semibold"
                  : "text-[#1E3D59] hover:text-[#87CEEB]"
              } transition-colors duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
