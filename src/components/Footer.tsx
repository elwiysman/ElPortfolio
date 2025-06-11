import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contacts"
      className="bg-[#1E3D59] text-white py-2 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#87CEEB"
            fillOpacity="0.1"
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#FFB6C1"
            fillOpacity="0.1"
            d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#87CEEB] to-[#FFB6C1] bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="flex space-x-6 mb-4">
            {[
              {
                href: "https://wa.me/62895320361892",
                icon: "fa-brands fa-whatsapp",
                label: "WhatsApp",
              },
              {
                href: "https://instagram.com/mnlwysm",
                icon: "fa-brands fa-instagram",
                label: "Instagram",
              },
              {
                href: "https://github.com/elwiysman",
                icon: "fa-brands fa-github",
                label: "GitHub",
              },
              {
                href: "mailto:elwiysman@gmail.com",
                icon: "fa-solid fa-envelope",
                label: "Email",
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#87CEEB] rounded-full opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-150 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1E3D59] text-xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <i className={link.icon}></i>
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white text-[#1E3D59] px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {link.label}
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <p>
              Immanuel Wiysman Pasaribu © {new Date().getFullYear()}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
