import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: SiTailwindcss },
];

const AllSkills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const trail = useTrail(skills.length, {
    from: { opacity: 0, scale: 0.5, rotate: -180 },
    to: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5, rotate: inView ? 0 : -180 },
    config: { tension: 220, friction: 22 },
  });

  return (
    <animated.div ref={ref}>
      <div className="flex items-center justify-center relative gap-6 max-w-[1200px] mx-auto flex-wrap">
        {trail.map((styles, index) => {
          const item = skills[index];
          return (
            <animated.div
              key={index}
              style={styles}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon className="text-4xl text-[#4DB6FF]" />}
              />
            </animated.div>
          );
        })}
      </div>
    </animated.div>
  );
};

export default AllSkills;
