import React from "react";
import L from "../images/L.jpg";

interface HomeSectionProps {
  typedText: string;
  isTypingComplete: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  typedText,
  isTypingComplete,
}) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background bubbles */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] opacity-20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#87CEEB] opacity-20 -top-20 -left-20 animate-float-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-[#FFB6C1] opacity-20 top-1/3 -right-48 animate-float-medium"></div>
        <div className="absolute w-48 h-48 rounded-full bg-[#87CEEB] opacity-20 bottom-20 left-1/4 animate-float-fast"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10 transition-all duration-500 ease-in-out">
        {/* Teks kiri */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex flex-col items-center md:items-start">
          {/* Nama */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight order-1">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] bg-clip-text text-transparent">
              Immanuel Wiysman Pasaribu
            </span>
          </h1>

          {/* Foto mobile */}
          <div className="md:hidden order-2 my-6">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] rounded-full opacity-20 animate-pulse"></div>
              <img
                src={L}
                alt="Immanuel Wiysman Pasaribu"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Typed text */}
          <div className="h-8 md:h-12 mb-4 order-3">
            <p className="text-lg md:text-2xl">
              {typedText}
              <span
                className={`inline-block w-1 h-6 bg-[#FFB6C1] ml-1 ${
                  isTypingComplete ? "animate-blink" : ""
                }`}
              ></span>
            </p>
          </div>

          {/* Deskripsi fade-in */}
          <p
            className={`text-base sm:text-lg mb-6 max-w-md mx-auto md:mx-0 order-4 transition-opacity duration-700 ${
              isTypingComplete ? "animate-fade-in delay-[200ms]" : "opacity-0"
            }`}
          >
            A passionate Computer Science student exploring the endless
            possibilities of technology and coding.
          </p>

          {/* Tombol fade-in */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start order-5">
            <button
              onClick={() => scrollToSection("projects")}
              className={`px-8 py-3 bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isTypingComplete ? "animate-fade-in delay-[400ms]" : "opacity-0"
              }`}
            >
              Lihat Proyek
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`px-8 py-3 border-2 border-[#87CEEB] text-[#1E3D59] font-semibold rounded-full hover:bg-[#87CEEB] hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                isTypingComplete ? "animate-fade-in delay-[600ms]" : "opacity-0"
              }`}
            >
              Tentang Saya
            </button>
          </div>
        </div>

        {/* Foto profil desktop */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] rounded-full opacity-20 animate-pulse"></div>
            <img
              src={L}
              alt="Immanuel Wiysman Pasaribu"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#1E3D59] focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
        >
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HomeSection;
