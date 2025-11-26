import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer, FaGithub, FaDocker, FaAws, FaFire, FaLock, FaShieldAlt, FaGlobe, FaKey
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript, SiRedux, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiExpress, SiPostgresql, SiVercel, SiPostman, SiSequelize
} from "react-icons/si";

const SkillsCategories = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaReact,
      skills: [
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: IoLogoJavascript },
        // { name: "TypeScript", icon: SiTypescript },
        { name: "React.js", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ]
    },
    {
      title: "Backend Development",
      icon: FaServer,
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: SiPostman },
        { name: "JWT", icon: FaKey },
      ]
    },
    {
      title: "Database & Tools",
      icon: FaGithub,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Git", icon: FaGithub },
        { name: "Docker", icon: FaDocker },
        { name: "AWS", icon: FaAws },
        { name: "Postman", icon: SiPostman },
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, categoryIndex) => (
        <div
          key={category.title}
          className="theme-card p-6 transition-all duration-500 hover:-translate-y-1 text-left"
          style={{ transitionDelay: `${categoryIndex * 60}ms` }}
        >
          <div className="flex flex-col items-center mb-6 text-center">
            <div className="p-4 rounded-full theme-gradient-bg shadow-lg border border-[#4DB6FF]/40">
              <category.icon className="text-[#E8F1FF] text-2xl" />
            </div>
            <h3 className="mt-3 text-xl font-semibold heading-font">{category.title}</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex items-center justify-center gap-2 p-3 rounded-lg border border-[#4DB6FF]/20 bg-white/5 hover:border-[#4DB6FF]/50 transition-all duration-300 cursor-pointer group"
              >
                <skill.icon className="text-lg text-[#4DB6FF] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-[#E8F1FF]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCategories;
