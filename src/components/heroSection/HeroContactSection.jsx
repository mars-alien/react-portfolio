
// HeroContactSection.jsx
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaPhone,
  FaDownload,
} from "react-icons/fa";

const HeroContactSection = () => {
  const allIcons = [
    { icon: FaGithub, label: "GitHub", color: "text-gray-300", url: "https://github.com/mars-alien" },
    { icon: FaLinkedin, label: "LinkedIn", color: "text-blue-500", url: "https://linkedin.com/in/royalsachan" },
    { icon: FaPhone, label: "Phone", color: "text-green-500", url: "tel:+917068635123" },
  ];

  const [resumeError, setResumeError] = useState(false);

  const handleResumeDownload = async () => {
    try {
      setResumeError(false);
      const resumeUrl = "/Royal_Resume.pdf";

      // Open PDF in new tab
      const opened = window.open(resumeUrl, "_blank");
      if (opened) opened.opener = null;
    } catch (err) {
      console.error("Error opening resume:", err);
      setResumeError(true);
    }
  };

  return (
    <div className="h-full flex items-center justify-center lg:justify-start relative w-full">
      <div className="flex flex-col items-center lg:items-start gap-6 p-5 text-center lg:text-left max-w-2xl">
        
        {/* Social Icons Row */}
        <div className="flex flex-row gap-5 items-center">
          {allIcons.map((social, index) => (
            <a
              key={index}
              href={social.url || "#"}
              target={social.url && social.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 hover:-translate-y-1 hover:scale-105"
              aria-label={social.label}
            >
              <social.icon className={`text-xl ${social.color}`} />
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <button
            onClick={handleResumeDownload}
            className="group relative py-3 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-full lg:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-orange-400/10 blur-sm group-hover:blur-md transition-all duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
              <FaDownload className="text-sm" />
              Download Resume
            </span>
          </button>

          <ScrollLink
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="contact"
          >
            <button className="py-3 px-6 border-2 font-semibold rounded-2xl transition-all duration-300 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-600 dark:hover:bg-blue-400 dark:hover:text-slate-900 whitespace-nowrap w-full lg:w-auto">
              Contact Me
            </button>
          </ScrollLink>

          {resumeError && (
            <p className="text-sm text-red-500 mt-1">
              Error: Failed to load PDF document.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default HeroContactSection;