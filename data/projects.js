import { COLOR_MAP } from "@/constants/theme";

/**
 * PROJECTS — featured project entries.
 * github/live can be empty strings; links won't render if empty.
 */
export const PROJECTS = [
  {
    name:       "FinSight AI",
    subtitle:   "Intelligent Financial News Research Platform",
    date:       "2025",
    color:      COLOR_MAP.amber,
    bg:         "rgba(217,119,6,0.10)",
    headerBg:   `linear-gradient(135deg,${COLOR_MAP.amber},#f59e0b)`,
    description:
      "AI-powered financial news research platform leveraging Retrieval-Augmented Generation (RAG) and semantic search to extract actionable insights from diverse media sources, achieving 85%+ query accuracy.",
    overviewImage: "",
    tags:   ["Python", "RAG", "LangChain", "Gemini API", "FAISS", "Pickle"],
    github: "https://github.com/mars-alien",
    live:   "",
  },
  {
    name:       "URL Shortener",
    subtitle:   "Full-Stack URL Management Service",
    date:       "2024",
    color:      COLOR_MAP.purple,
    bg:         "rgba(124,58,237,0.10)",
    headerBg:   `linear-gradient(135deg,${COLOR_MAP.purple},#a78bfa)`,
    description:
      "URL Shortener service built with Node.js and MongoDB, exposing RESTful APIs for URL encoding and resolution with low-latency redirection. Features JWT-based authentication, BcryptJS password hashing, and analytics tracking.",
    overviewImage: "",
    tags:   ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "JWT", "BcryptJS"],
    github: "https://github.com/mars-alien",
    live:   "",
  },
  {
    name:       "Video Learning Platform",
    subtitle:   "Interactive MERN Stack Platform",
    date:       "2024",
    color:      COLOR_MAP.blue,
    bg:         "rgba(37,99,235,0.10)",
    headerBg:   `linear-gradient(135deg,${COLOR_MAP.blue},#60a5fa)`,
    description:
      "Production-ready MERN stack platform with enterprise-grade authentication via OAuth 2.0 (Google/GitHub), JWT sessions, SendGrid email verification, and bcrypt password hashing — designed to scale for 1,000+ concurrent users.",
    overviewImage: "",
    tags:   ["React.js", "Node.js", "MongoDB", "JWT", "OAuth 2.0", "SendGrid"],
    github: "https://github.com/mars-alien",
    live:   "",
  },
];
