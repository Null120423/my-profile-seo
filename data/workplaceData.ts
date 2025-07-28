export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Design";
  proficiency: number;
}

export const workplaceData = {
  company: {
    name: "TechCorp Inc.",
    description:
      "Leading technology company focused on building scalable cloud solutions for enterprise clients.",
    website: "https://techcorp.example.com",
    industry: "Cloud Technology",
    size: "500-1000 employees",
    founded: "2015",
  },
  position: {
    title: "Full-Stack Developer",
    department: "Platform Engineering",
    startDate: "2022-03-01",
    location: "Binh Dinh, Viet Nam (Hybrid)",
  },
  team: [
    {
      name: "Sarah Chen",
      role: "Engineering Manager",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Backend Developer",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Emily Zhang",
      role: "Frontend Developer",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ] as TeamMember[],
  technologies: [
    { name: "React", category: "Frontend", proficiency: 95 },
    { name: "TypeScript", category: "Frontend", proficiency: 90 },
    { name: "Node.js", category: "Backend", proficiency: 88 },
    { name: "PostgreSQL", category: "Database", proficiency: 85 },
    { name: "AWS", category: "DevOps", proficiency: 80 },
    { name: "Docker", category: "DevOps", proficiency: 85 },
    { name: "GraphQL", category: "Backend", proficiency: 82 },
    { name: "Redis", category: "Database", proficiency: 78 },
  ] as Technology[],
  currentProjects: [
    {
      name: "Platform API v3",
      description:
        "Next-generation REST API with improved performance and new features.",
      status: "In Development",
      teamSize: 4,
    },
    {
      name: "Dashboard Redesign",
      description: "Complete UI/UX overhaul of the main user dashboard.",
      status: "Planning",
      teamSize: 6,
    },
    {
      name: "Microservices Migration",
      description:
        "Breaking down monolithic services into scalable microservices.",
      status: "In Progress",
      teamSize: 8,
    },
  ],
};
