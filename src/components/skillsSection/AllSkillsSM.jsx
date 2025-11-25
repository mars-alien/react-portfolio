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

const AllSkillsSM = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const trail = useTrail(skills.length, {
    from: { opacity: 0, scale: 0.5, rotate: -180 },
    to: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5, rotate: inView ? 0 : -180 },
  });

  return (
    <animated.div 
      ref={ref}
      className="grid grid-cols-2 gap-6 my-12 px-4 "
    >
      {trail.map((styles, index) => {
        const item = skills[index];
        return (
          <animated.div
            key={index}
            style={styles}
            className="flex flex-col items-center p-4 theme-surface rounded-2xl border border-[#4DB6FF]/20 hover:border-[#4DB6FF]/50 transition-all duration-300"
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
          >
            <item.icon className="text-5xl text-[#4DB6FF] mb-3" />
            <p className="text-center text-[#E8F1FF] font-medium text-sm">{item.skill}</p>
          </animated.div>
        );
      })}
    </animated.div>
  );
};

export default AllSkillsSM;
