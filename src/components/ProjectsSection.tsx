import React, { useState } from "react";
import { projects } from "../data";
import type { Project } from "../types";
import proyek1Image from "../images/proyek1.jpg";
import proyek2Image from "../images/proyek2.jpg";

interface ProjectsSectionProps {
  openModal: (project: Project) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ openModal }) => {
  const [currentProject, setCurrentProject] = useState(0);

  // Function to get the correct image based on project id
  const getProjectImage = (projectId: string) => {
    switch (projectId) {
      case "1":
        return proyek1Image;
      case "2":
        return proyek2Image;
      default:
        return proyek1Image;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 min-h-screen bg-gradient-to-br from-[#FFF0F5] to-[#F0F8FF]"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Click on each project to learn
            more about the details.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 px-4"
                  onClick={() => openModal(project)}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                    <div className="relative overflow-hidden h-64">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        src={getProjectImage(project.id)}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-[#1E3D59] group-hover:text-[#607d88] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* To be continued card */}
              <div className="w-full flex-shrink-0 px-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group border-2 border-dashed border-[#87CEEB]/30">
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-[#87CEEB]/10 to-[#FFB6C1]/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#FFB6C1] flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <i className="fa-solid fa-plus text-2xl"></i>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1E3D59] mb-2">
                        Coming Soon
                      </h3>
                      <p className="text-[#87CEEB] font-medium">
                        More projects on the way
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#1E3D59] text-center">
                      To be continued...
                    </h3>
                    <p className="mb-4 text-center text-gray-600">
                      I'm currently working on exciting new projects. Stay tuned
                      for more innovative solutions and creative developments!
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-gradient-to-r from-[#87CEEB]/20 to-[#FFB6C1]/20 rounded-full text-sm text-[#1E3D59] border border-[#87CEEB]/30">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              setCurrentProject((prev) =>
                prev > 0 ? prev - 1 : projects.length
              )
            }
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E3D59] hover:bg-gray-50 transition-colors duration-300"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() =>
              setCurrentProject((prev) =>
                prev < projects.length ? prev + 1 : 0
              )
            }
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E3D59] hover:bg-gray-50 transition-colors duration-300"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="flex justify-center mt-8 space-x-2">
            {[...projects, { id: "tbc" }].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentProject === index ? "bg-[#87CEEB]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
