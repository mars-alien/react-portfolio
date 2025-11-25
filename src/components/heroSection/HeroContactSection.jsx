import { Link as ScrollLink } from "react-scroll";
import { 
  FaGithub, 
  FaLinkedin, 
  FaPhone,
  FaCode,
  FaDownload,
} from "react-icons/fa";


const HeroContactSection = () => {
  
  const allIcons = [
    { icon: FaGithub, label: "GitHub", color: "text-gray-300", url: "https://github.com/mars-alien" },
    { icon: FaLinkedin, label: "LinkedIn", color: "text-blue-500", url: "https://linkedin.com/in/royalsachan" },
    { icon: FaCode, label: "Code", color: "text-purple-400", url: "https://leetcode.com/u/mars_alien/" },
    { icon: FaPhone, label: "Phone", color: "text-green-500", url: "tel:+917068635123" },
  ];

  // const handleResumeDownload = () => {
  //   const resumeUrl = import.meta.env.RESUME_PATH;
  //   const link = document.createElement('a');
  //   link.href = resumeUrl;
  //   link.download = "Royal.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleResumeDownload = () => {
    // If you don't have RESUME_PATH set in env, replace with your resume URL or remove this handler
    try {
      const resumeUrl = import.meta.env.RESUME_PATH || "/resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Royal.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      // fallback: open resume in new tab
      window.open("/resume.pdf", "_blank");
    }
  };

  return (
    <div className="h-full flex items-center justify-center relative w-full">
      <div className="flex flex-col items-center gap-5 p-5 transition-all duration-500 w-full max-w-5xl theme-body-text text-center lg:text-left lg:items-start">
        {/* Layout: stack on small screens, row on md+ so icons and button align horizontally */}
  <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-center md:justify-start md:gap-8">

          <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
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

          <div className="flex flex-col gap-3 w-full md:w-auto md:max-w-[220px] items-center md:items-start md:ml-6"> 
            {/* Download Resume button commented out per request
            <button
              onClick={handleResumeDownload}
              className="group relative w-full md:w-[200px] py-2.5 px-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center overflow-hidden"
            >
              Glowing background effect
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-orange-400/10 blur-sm group-hover:blur-md transition-all duration-300"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaDownload className="text-sm" />
                Download Resume
              </span>
            </button>
            */}

            <ScrollLink
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to="contact"
            >
              <button
                className="w-full md:w-[200px] py-2.5 px-5 border-2 font-semibold rounded-2xl transition-all duration-300 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-600 dark:hover:bg-blue-400 dark:hover:text-slate-900"
              >
                Contact Me
              </button>
            </ScrollLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroContactSection;


