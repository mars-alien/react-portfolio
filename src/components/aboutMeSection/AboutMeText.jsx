import { Link } from "react-scroll"; 

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center lg:text-left max-w-3xl mx-auto px-4 theme-body-text">
      
      {/* Heading */}
      <h2 className="text-4xl mb-5 heading-font font-semibold theme-gradient-text">
        About Me
      </h2>
      
      <p className="text-base sm:text-lg lg:text-xl mt-2 sm:mt-4 leading-relaxed max-w-3xl mx-auto lg:mx-0 theme-body-text mb-8">
       I'm <span className="text-[#4DB6FF] font-semibold">Royal Sachan</span>,
       currently surviving third-year Computer Science at IIIT Manipur.
       I turn coffee into modern, responsive web apps (and sometimes errors).
       Always chasing problems just so I can solve them—and break things smarter next time.
      </p>
      
      {/* Button */}
      <div className="w-full flex justify-center lg:justify-start">
      <button className="theme-btn py-3 px-8 text-lg flex gap-2 items-center justify-center transition-all duration-200 cursor-pointer hover:-translate-y-1">
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
