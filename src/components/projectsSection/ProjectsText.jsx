import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const ProjectsText = () => {
  const [hovered, setHovered] = useState(false);
  const spring = useSpring({
    from: { scale: 1 },
    to: { scale: hovered ? 1.05 : 1 },
    config: { tension: 250, friction: 18 },
  });

  return (
    <div className="flex flex-col items-center mt-[100px] mb-16">
      <animated.h2 
        className="site-section-title mb-10 heading-font font-semibold theme-gradient-text"
        style={spring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Projects
      </animated.h2>
    </div>
  );
};

export default ProjectsText;
