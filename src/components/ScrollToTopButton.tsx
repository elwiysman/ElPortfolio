import React, { useState, useEffect } from "react";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group bg-[#1E3D59] hover:bg-[#FFB6C1] text-white hover:text-[#1E3D59] 
                     w-12 h-12 rounded-full shadow-lg
                     transition-all duration-300 ease-in-out transform hover:scale-110
                     flex items-center justify-center
                     animate-bounce hover:animate-pulse
                     active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FFB6C1] focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transition-all duration-300 ease-out 
                       group-hover:-translate-y group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
