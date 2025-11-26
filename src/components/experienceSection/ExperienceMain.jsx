import ExperienceText from "./ExperienceText";
import { animated, useSpring, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";


const ExperienceMain = () => {
  
  const experiences = [
    {
      company: "Terragrid Tech",
      role: "Backend Developer Intern",
      duration: "May 2025 – June 2025",
      technologies: "Express.js, PostgreSQL, JWT, REST API",
      achievements: [
        "Built secure POS authentication using Node.js, JWT, bcrypt.",
        "Boosted transaction speed 30% via optimized REST APIs.",
        "Automated DB migrations with Sequelize."
      ],
      link: " Download Experience Letter",
      linkUrl: "https://drive.google.com/file/d/1lhH6J0y7M1UOjOaZOPO1mweehxnqaRcy/view?usp=drivek"
    }
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const container = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { tension: 200, friction: 24 },
  });
  const cards = useTrail(experiences.length, {
    from: { opacity: 0, y: 50 },
    to: { opacity: inView ? 1 : 0, y: inView ? 0 : 50 },
    config: { tension: 220, friction: 22 },
  });

  return (
          <section id="experience" className="py-8 relative overflow-hidden">
      <animated.div
        ref={ref}
        className="max-w-[1100px] mx-auto px-4 relative z-10"
        style={container}
      >
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-8">
          <ExperienceText />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#1E90FF]/50 via-[#4DB6FF]/40 to-transparent h-full rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {cards.map((styles, index) => {
              const exp = experiences[index];
              return (
              <animated.div
                key={index}
                style={styles}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full theme-gradient-bg border-4 border-[#0A1120] z-10 shadow-lg"></div>

                {/* Date Bubble */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-xs md:text-sm text-[#E8F1FF] bg-[#0A1120]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#4DB6FF]/30 shadow-md z-5">
                  {exp.duration}
                </div>

                {/* Experience Card */}
                <div className="w-full mt-16 md:w-5/12 md:pr-14">
                  <animated.div
                    className="theme-card p-4 md:p-5 hover:shadow-xl transition-all duration-300"
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; }}
                  >
                    {/* Company & Role */}
                    <div className="flex items-center gap-3 mb-3 text-[var(--color-body)]">
                      <div className="p-2 rounded-2xl theme-gradient-bg bg-blend-screen border border-[#4DB6FF]/30">
                        <FaBriefcase className="text-[#E8F1FF] text-lg" />
                      </div>
                      <div>
                        <h3 className="heading-font text-base md:text-lg">
                          {exp.company}
                        </h3>
                        <p className="text-[#4DB6FF] font-medium">{exp.role}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <p className="text-sm font-medium theme-muted mb-3">
                      {exp.technologies}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1 mb-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm theme-body-text flex items-start gap-2"
                        >
                          <span className="text-[#4DB6FF] mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                  </animated.div>
                </div>
              </animated.div>
            );})}
          </div>
        </div>
      </animated.div>
      

    </section>
  );
};

export default ExperienceMain;
