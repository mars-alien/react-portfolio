import { SKILLS } from "@/data/skills";
import {
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiLangchain,
  SiMeta,
  SiGooglegemini,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { LuBrainCircuit, LuDatabase, LuWorkflow } from "react-icons/lu";
import { FaAws, FaCode, FaCss3Alt } from "react-icons/fa6";

const CATEGORY_ICONS = {
  Languages: FaCode,
  Frontend: SiReact,
  Backend: SiNodedotjs,
  "AI / ML": LuBrainCircuit,
  Databases: LuDatabase,
  "DevOps & Tools": SiDocker,
};

const SKILL_ICONS = {
  Java: SiOpenjdk,
  Python: SiPython,
  SQL: TbSql,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": TbApi,
  "JWT Auth": SiJsonwebtokens,
  LangChain: SiLangchain,
  FAISS: SiMeta,
  "Google Gemini": SiGooglegemini,
  "RAG Pipelines": LuWorkflow,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Vector DB": LuDatabase,
  AWS: FaAws,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
};

/**
 * Skills — redesigned grid with colour-accented cards, pill tags,
 * and scroll-reveal stagger animation.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="sec-skills"
      aria-labelledby="skills-h"
      style={{ padding: "var(--pad) 28px" }}
    >
      <div className="wrap">
        <p className="lbl" data-reveal>What I Know</p>
        <h2 id="skills-h" className="h2" data-reveal>Technical Skills</h2>
        <p className="sub" data-reveal>
          Across six domains — built through real projects, backend systems, and AI/ML work.
        </p>

        <div className="skills-grid">
          {SKILLS.map((cat, i) => (
            (() => {
              const CategoryIcon = CATEGORY_ICONS[cat.category] ?? FaCode;

              return (
            <article
              key={cat.category}
              className="card skill-card"
              data-reveal="scale"
              data-delay={i * 90}
              style={{ "--skill-accent": cat.color }}
            >
              <div className="skill-hd">
                <h3 className="skill-cat" style={{ color: cat.color }}>
                  {cat.category}
                </h3>
                <div
                  className="skill-ico"
                  style={{
                    background: cat.bg,
                    color: cat.color,
                    marginLeft: "auto"
                  }}
                  aria-hidden="true"
                >
                  <CategoryIcon className="skill-ico-svg" />
                </div>
              </div>

              <div className="skill-tags">
                {cat.items.map((item) => {
                  const ItemIcon = SKILL_ICONS[item] ?? FaCode;

                  return (
                    <span
                      key={item}
                      className="stag"
                      style={{
                        background: cat.bg,
                        color: cat.color,
                        borderColor: `${cat.color}30`,
                      }}
                    >
                      <ItemIcon className="stag-ico" aria-hidden="true" />
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
