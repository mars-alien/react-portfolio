import { Link } from "react-scroll"; 

const AboutMeText = () => {
  return (
  <div className="flex flex-col items-center justify-center text-center lg:text-left max-w-2xl mx-auto px-4 theme-body-text">
      
      {/* Heading */}
      <h2 className="site-section-title mb-5 heading-font font-semibold theme-gradient-text">
        About Me
      </h2>
      
      <p className="site-body mt-3 sm:mt-4 theme-body-text mb-4">
        <span className="text-[#4DB6FF] font-semibold">Hi — I&apos;m Royal Sachan.</span> I&apos;m a third-year Computer Science student at IIIT Manipur building modern, responsive web applications with a focus on practical, maintainable code.
      </p>

      <p className="site-body theme-body-text mb-8">
        I enjoy solving hard problems, automating workflows, and learning new tools — most days that means turning coffee into code. I&apos;m available for internships, collaborations, or short-term freelance work.
      </p>
      
      {/* Button */}
      <div className="w-full flex justify-center">
      <button className="theme-btn py-3 px-8 site-btn-text flex gap-2 items-center justify-center transition-all duration-200 cursor-pointer hover:-translate-y-1">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-[#E8F1FF] hover:text-[#4DB6FF] transition-all duration-300 font-medium"
        >
          My Projects
        </Link>
      </button>
      </div>
    </div>
  );
};

export default AboutMeText;
