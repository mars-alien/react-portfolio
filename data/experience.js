import { COLOR_MAP } from "@/constants/theme";

/**
 * EXPERIENCE — work history entries for the timeline.
 * Each entry: company, role, period, colour, tags, and bullet points.
 */
export const EXPERIENCE = [
  {
    company: "Atal Innovation Centre",
    role:    "Backend Developer Intern",
    period:  "June 2024 – Jan 2025",
    color:   COLOR_MAP.teal,
    bg:      "rgba(13,148,136,0.1)",
    tags:    ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API", "bcrypt"],
    bullets: [
      "Designed and deployed a secure authentication and authorization system for a Point of Sale (POS) application using Node.js, JWT, and bcrypt, cutting unauthorized access attempts by 80%.",
      "Enhanced API security by integrating rate limiting, CORS, and Helmet.js middleware; optimized RESTful endpoints to boost transaction processing speed by 30%.",
    ],
  },
];
