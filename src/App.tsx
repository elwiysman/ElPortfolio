import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import type { Project } from "./types";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Hey there! Tech enthusiast here 👋";
  const typingSpeed = 100;
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "projects"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [typedText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative min-h-screen font-sans bg-white text-[#1E3D59]">
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-8 h-8 rounded-full border-2 border-[#FFB6C1] pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      ></div>
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />
      <HomeSection typedText={typedText} isTypingComplete={isTypingComplete} />
      <AboutSection />
      <ProjectsSection openModal={openModal} />
      <Footer />
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
      <ScrollToTopButton />
    </div>
  );
};

export default App;
