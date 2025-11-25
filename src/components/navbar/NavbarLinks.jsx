import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  // { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-row gap-6 text-base font-medium tracking-wide text-[#E8F1FF]">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-[#E8F1FF] transition-all duration-300 group-hover:text-[#4DB6FF]"
            >
              {link.link}
            </Link>
            <div className="mx-auto theme-glow-line w-0 group-hover:w-full transition-all duration-300"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
