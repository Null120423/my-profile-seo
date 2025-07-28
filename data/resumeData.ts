export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const resumeData = {
  personal: {
    name: "Trần Hữu Tài  (Dev On Wheels)",
    title: "Full-Stack Developer",
    email: "codeonw@gmail.com",
    phone: "+ 376 100 548",
    location: "Binh Dinh, Viet Nam",
    website: "https://alexjohnson.dev",
    linkedin:
      "https://www.linkedin.com/in/huu-tai-fullstack-developer-3b1b90252/",
    github: "https://github.com/Null120423",
  },
  summary:
    "Passionate full-stack developer with 6+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Strong advocate for clean code, testing, and agile development practices.",
  experience: [
    {
      company: "TechCorp Inc.",
      position: "Full-Stack Developer",
      duration: "2022 - Present",
      description:
        "Lead development of microservices architecture serving 1M+ users. Mentor junior developers and drive technical decisions for the platform team.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Full-Stack Developer",
      duration: "2020 - 2022",
      description:
        "Built the core platform from ground up, implementing real-time features and payment systems. Reduced load times by 60% through optimization.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe API"],
    },
    {
      company: "WebSolutions Ltd.",
      position: "Frontend Developer",
      duration: "2018 - 2020",
      description:
        "Developed responsive web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
      technologies: ["React", "SASS", "JavaScript", "REST APIs", "Git"],
    },
  ] as Experience[],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
      description:
        "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.",
    },
  ] as Education[],
  skills: [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "TailwindCSS",
        "SASS",
        "Next.js",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
    },
    {
      category: "DevOps & Tools",
      items: ["AWS", "Docker", "Git", "GitHub Actions", "Vercel", "Netlify"],
    },
  ] as Skill[],
};
