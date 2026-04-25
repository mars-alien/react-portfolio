import { COLOR_MAP } from "@/constants/theme";

/**
 * SKILLS — six skill categories with colour theming.
 * Add/remove items without touching any component.
 */
export const SKILLS = [
  {
    category: "Languages",
    color:    COLOR_MAP.purple,
    bg:       "rgba(124,58,237,0.08)",
    items:    ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    category: "Frontend",
    color:    COLOR_MAP.blue,
    bg:       "rgba(37,99,235,0.08)",
    items:    ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color:    COLOR_MAP.teal,
    bg:       "rgba(13,148,136,0.08)",
    items:    ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "AI / ML",
    color:    COLOR_MAP.amber,
    bg:       "rgba(217,119,6,0.08)",
    items:    ["LangChain", "FAISS", "Google Gemini", "RAG Pipelines", "Pandas", "NumPy"],
  },
  {
    category: "Databases",
    color:    COLOR_MAP.rose,
    bg:       "rgba(225,29,72,0.08)",
    items:    ["PostgreSQL", "MongoDB", "Vector DB"],
  },
  {
    category: "DevOps & Tools",
    color:    COLOR_MAP.g700,
    bg:       "rgba(21,128,61,0.08)",
    items:    ["AWS", "Docker", "Git", "GitHub", "Postman"],
  },
];
