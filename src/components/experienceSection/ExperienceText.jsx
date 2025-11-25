import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const ExperienceText = () => {
  const [hovered, setHovered] = useState(false);
  const spring = useSpring({ from: { scale: 1 }, to: { scale: hovered ? 1.05 : 1 }, config: { tension: 250, friction: 18 } });

  return (
    <div className="flex flex-col items-center">
      <animated.h2 
        className="text-4xl mb-5 heading-font font-semibold theme-gradient-text"
        style={spring}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Professional Experience
      </animated.h2>
    </div>
  );
};

export default ExperienceText;
