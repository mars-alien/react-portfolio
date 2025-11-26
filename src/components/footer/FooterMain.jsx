import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  
  return (
    <footer className="relative mt-5">
      {/* Gradient separator line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-8"></div>
      
      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="site-h3 font-semibold heading-font transition-colors duration-500 text-[#E8F1FF]">
              Royal Sachan
            </h3>
            <p className="site-small mt-2 transition-colors duration-500 text-[#B7C8E6]">
              Full Stack Web Developer
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="text-sm md:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 text-[#E8F1FF] hover:text-[#4DB6FF]"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-8 mb-8 pt-6 border-t border-blue-400/20">
          <p className="text-center text-sm transition-colors duration-500 text-[#B7C8E6]">
            © 2025 Royal Sachan | All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
