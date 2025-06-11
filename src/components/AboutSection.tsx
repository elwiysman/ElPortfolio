import React from "react";
import { expertise } from "../data";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 min-h-screen relative bg-gradient-to-br from-[#F0F8FF] to-[#FFF0F5]"
    >
      <div className="absolute inset-0 bg-[#87CEEB] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-7">
            <h3 className="text-2xl font-bold mb-6">Who Am I?</h3>
            <p className="text-lg mb-6">
              I'm a Computer Science student with an insatiable curiosity for
              technology and innovation. My journey in tech is driven by a deep
              passion for learning and creating meaningful solutions through
              code.
            </p>
            <p className="text-lg mb-8">
              Whether it's exploring new programming languages, diving into
              emerging technologies, or collaborating on exciting projects, I'm
              always eager to push my boundaries and grow as a developer. I
              believe in the power of technology to make a positive impact on
              the world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#87CEEB]/10 to-[#FFB6C1]/10 p-6 rounded-lg border border-[#87CEEB]/20">
                <h4 className="font-semibold mb-3">Learning Focus</h4>
                <ul className="space-y-2">
                  <li>
                    <i className="fa-solid fa-code mr-2 text-[#87CEEB]"></i>
                    Frontend Development
                  </li>
                  <li>
                    <i className="fa-solid fa-server mr-2 text-[#FFB6C1]"></i>
                    Backend Development
                  </li>
                  <li>
                    <i className="fa-solid fa-database mr-2 text-[#87CEEB]"></i>
                    Database Management
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#FFB6C1]/10 to-[#87CEEB]/10 p-6 rounded-lg border border-[#FFB6C1]/20">
                <h4 className="font-semibold mb-3">Interests</h4>
                <ul className="space-y-2">
                  <li>
                    <i className="fa-solid fa-layer-group mr-2 text-[#FFB6C1]"></i>
                    Full Stack Development
                  </li>
                  <li>
                    <i className="fa-solid fa-cloud mr-2 text-[#87CEEB]"></i>
                    Cloud Services
                  </li>
                  <li>
                    <i className="fa-solid fa-code-branch mr-2 text-[#FFB6C1]"></i>
                    Version Control
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Currently Mastering</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i className={`${item.icon} text-lg`}></i>
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    {item.title}
                  </h4>
                  <p className="text-center text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
