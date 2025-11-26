// Chatbot Training Data - grounded in Royal Sachan's resume and portfolio
export const chatbotTrainingData = {
  // Personal Information
  "personal": {
    keywords: ["name", "who are you", "personal", "background", "story", "about", "tell me about"],
    response: "I'm Royal Sachan — a Full Stack Web Developer based in Hyderabad, India. I build production-ready web applications focusing on clean code, secure backends, and polished frontends.\n\nPortfolio: https://lazyroyal.vercel.app\nLinkedIn: https://linkedin.com/in/royalsachan\nLocation: Hyderabad, Telangana, India"
  },

  // Skills and Technologies
  "skills": {
    keywords: ["skills", "technologies", "what can you do", "expertise", "languages", "tech stack", "programming", "what do you know"],
    response: "Key skills:\n\n• Languages: JavaScript, Java, Python, SQL, HTML5, CSS3\n• Frontend: React.js, Tailwind CSS, Vite, Context API, React Hooks\n• Backend: Node.js, Express.js, REST APIs, JWT authentication, Sequelize\n• Databases: MongoDB, PostgreSQL\n• Tools: Git, Docker, GitHub Actions, Postman\n\nI focus on building scalable, maintainable systems and secure authentication flows."
  },

  // Experience
  "experience": {
    keywords: ["experience", "work", "intern", "terragrid", "backend", "role", "work history"],
    response: "Backend Developer Intern — TerraGrid Pvt. Ltd (Atal Innovation Centre) — Mar 2024 to Jun 2025.\n\nHighlights:\n• Architected authentication & authorization using Node.js, Express, JWT and bcrypt.\n• Designed RESTful APIs with security best practices (Helmet, rate limiting).\n• Implemented Sequelize-based migrations and schema management.\n• Worked in Agile teams and delivered production-ready backend features."
  },

  // Projects
  "projects": {
    keywords: ["projects", "pluto", "earthquake", "portfolio", "what have you built"],
    response: "Featured projects:\n\n1) Pluto — AI-powered learning platform (React, Node, MongoDB, JWT) — Nov 2024 to Feb 2025\n• Full-stack MERN application with OAuth and JWT auth, integrated AI assistant for code suggestions.\n\n2) Earthquake Map Auto-Updater (Python, Pandas, Folium, GitHub Actions) — Apr 2025 to Jun 2025\n• Automated ETL pipeline refreshing earthquake datasets from USGS and visualized interactive maps.\n\nSee more on my portfolio: https://lazyroyal.vercel.app"
  },

  // Contact Information
  "contact": {
    keywords: ["contact", "email", "phone", "reach", "get in touch", "connect", "social"],
    response: "Best ways to reach me:\n\n• Email: royalsachaniiitm@gmail.com\n• Phone: +91-7068635123\n• LinkedIn: https://linkedin.com/in/royalsachan\n• Portfolio: https://lazyroyal.vercel.app\n\nI typically respond within 24 hours and am open to internships, collaborations, and freelance work."
  },

  // Hiring & Availability
  "hire": {
    keywords: ["hire", "available", "freelance", "work together", "opportunities"],
    response: "Availability & what I offer:\n\n• Open to internships and project-based work.\n• Services: full-stack development, API design, authentication systems, DevOps automation, performance optimization.\n\nIf you have a specific scope, share the details and timeline and I can provide an estimated quote."
  },

  // Education
  "education": {
    keywords: ["education", "degree", "university", "college", "iiit", "CGPA"],
    response: "Indian Institute of Information Technology, Senapati — B.Tech in Computer Science and Engineering (ongoing).\nCGPA: 7.0 (till 4th semester)."
  },

  // Achievements
  "achievements": {
    keywords: ["achievements", "awards", "eroh", "naukri", "hackathon", "certification"],
    response: "Selected achievements:\n\n• AIR 2 — EROH (Engineer Ring of Honour) by Naukri Campus — Ranked 2nd among 25,000+ participants in Round 2.\n• Selected in 5G Innovation Hackathon 2025 (DoT) — Top 5 proposals.\n• AWS Certified Cloud Practitioner.\n• Solved 500+ algorithmic problems across platforms."
  },

  // Technologies
  "technologies": {
    keywords: ["react", "node", "mongodb", "postgresql", "jwt", "docker", "aws"],
    response: "Primary tools & platforms: React, Node.js, Express, MongoDB, PostgreSQL, JWT, OAuth, Docker, Git, GitHub Actions, Render, AWS, Tailwind CSS, Vite."
  },

  // Services
  "services": {
    keywords: ["services", "what do you offer", "offerings"],
    response: "I offer end-to-end web development: frontend & backend, API development, authentication systems, CI/CD setups, deployment, and ongoing maintenance."
  }
};

// Fallback responses for when the AI doesn't understand
export const fallbackResponses = [
  "That's an interesting question! Could you be more specific about what you'd like to know? I can help with skills, experience, projects, or contact details.",
  "I'd be happy to help! Try asking about skills, projects, experience, or how to contact Royal.",
  "You can ask about Royal's background, projects, or how to get in touch.",
  "If you need quick pointers: ask about skills, projects, availability, or contact info."
];

// Quick response suggestions for users
export const quickResponses = [
  "Tell me about your skills",
  "What projects have you worked on?",
  "How can I contact you?",
  "Are you available for hire?",
  "What technologies do you use?"
];
