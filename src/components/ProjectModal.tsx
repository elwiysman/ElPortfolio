// src/components/ProjectModal.tsx
import React, { useEffect, useState } from "react";
import type { Project } from "../types";
import proyek1Image from "../images/proyek1.jpg";

interface ProjectModalProps {
  project: Project;
  closeModal: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, closeModal }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        triggerClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
    }); // sama dengan durasi animasi
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black opacity-75"
        onClick={triggerClose}
      ></div>
      <div
        className={`relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ${
          isClosing ? "animate-modal-out" : "animate-modal-in"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#1E3D59] z-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          style={{ pointerEvents: "auto" }}
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="h-72 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
          <img
            src={proyek1Image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-24rem)]">
          <h3 className="text-3xl font-bold text-[#1E3D59] mb-6">
            {project.title}
          </h3>
          <h4 className="text-xl font-bold mb-4">Project Description</h4>
          <p className="mb-6">{project.description}</p>
          <h4 className="text-xl font-bold mb-4">Technologies Used</h4>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#87CEEB]/10 to-[#FFB6C1]/10 rounded-full text-sm font-medium border border-[#87CEEB]/20"
              >
                {tech}
              </span>
            ))}
          </div>
          <h4 className="text-xl font-bold mb-4">Key Features</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Responsive and user-friendly interface</li>
            <li>High performance with fast loading times</li>
            <li>Modern and attractive design</li>
            <li>Intuitive user experience</li>
            <li>Secure data handling</li>
          </ul>
        </div>
        <div className="p-6 border-t bg-gray-50 flex justify-center">
          <button className="group relative px-8 py-3 bg-[#081d2e] text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer !rounded-button whitespace-nowrap flex items-center gap-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-700"></div>
            <svg
              className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
              View Code
            </span>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150"></div>
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#87CEEB] rounded-full opacity-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-200"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#FFB6C1] rounded-full opacity-0 group-hover:opacity-80 transition-all duration-600 group-hover:scale-150"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
