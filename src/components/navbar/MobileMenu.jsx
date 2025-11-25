import { animated, useTransition } from "@react-spring/web";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const MobileMenu = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  const transitions = useTransition(menuOpen, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20 },
    config: { tension: 210, friction: 22 },
  });

  return transitions((styles, item) =>
    item ? (
      <animated.div
        style={styles}
        className="lg:hidden fixed top-20 sm:top-24 left-2 right-2 sm:left-4 sm:right-4 z-40 theme-navbar rounded-2xl transition-all duration-500"
      >
          <div className="p-4 sm:p-6">
            <ul className="flex flex-col gap-2 sm:gap-4 text-base sm:text-lg font-medium text-[#E8F1FF]">
              {links.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-130}
                    to={link.section}
                    className="cursor-pointer transition-all duration-300 block py-2 sm:py-3 px-2 rounded-lg text-[#E8F1FF] hover:text-[#4DB6FF] hover:bg-white/5"
                  >
                    {link.link}
                  </Link>
                  <div className="theme-glow-line w-0 group-hover:w-full h-[1px] transition-all duration-300 mx-2"></div>
                </li>
              ))}
            </ul>
          </div>
      </animated.div>
    ) : null
  );
};

export default MobileMenu;
