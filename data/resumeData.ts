export const resumeData = {
  personal: {
    name: "Trần Hữu Tài",
    title: "Fullstack Developer",
    address:
      "60 Đ Làng Tăng Phú, Tăng Nhơn Phú A, Thủ Đức, Hồ Chí Minh, Việt Nam",
    email: "huutaidev@gmail.com",
    phone: "0376100548",
    website: "https://devonwheels.id.vn/",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  summary:
    "I am a careful Fullstack Developer who wants to create clean and high-quality products. I like coding and always try to learn new things to improve my skills and work better. Besides coding, I enjoy traveling and discovering new places, which gives me more ideas and helps me solve problems.",
  websites: [
    { label: "Personal Website", url: "https://devonwheels.id.vn/" },
    {
      label: "Hodos Project",
      url: "https://hodos-admin.gitlabserver.id.vn/landing",
    },
    { label: "Portfolio", url: "https://devonwheels.id.vn/portfolio/1" },
  ],
  experience: [
    {
      position: "Fullstack Developer",
      company: "APETECHS Solution",
      location:
        "66 đường D, LakeView, Phường An Phú, Thành phố Thủ Đức, Hồ Chí Minh",
      duration: "Mar 2024",
      description:
        "Innovative Fullstack Developer with 1.5 years of experience, specializing in building dynamic and user-friendly applications using React Native and NestJS APIs. Experienced in UI/UX optimization, code performance improvement, and integration of Firebase, GPS, and location-based services. Backend (NestJS): Skilled in designing and developing REST APIs, database management, third-party systems (e.g., Payroll, Sepay), and building scalable server-side solutions. Domain Knowledge: Gained hands-on experience with real business workflows such as boarding house management, warehouse management for F&B chains, and procurement processes for production.",
      technologies: [
        "React Native",
        "NestJS",
        "Firebase",
        "GPS",
        "Location Services",
        "REST APIs",
        "Database Management",
      ],
    },
  ],
  skills: [
    "NestJS",
    "ReactJs",
    "Angular Js",
    "MySQL",
    "PostgreSQL",
    "Ubuntu",
    "Android Studio",
    "Jetpack Compose",
    "Java",
  ],
  languages: ["English", "Vietnamese"],
  education: [
    {
      degree: "Bachelor's Degree in Information Technology",
      institution: "Ton Duc Thang University",
      duration: "2021 — 2025",
      description:
        "Completed core and advanced courses including programming fundamentals, algorithms, object-oriented programming (OOP), and data structures. Beyond coursework, proactively self-studied modern technologies such as UI libraries for web and mobile development, and other emerging frameworks/tools to strengthen practical skills for both academic projects and professional work.",
    },
  ],
  hobbies: ["Passion for road trips"],
  projects: [
    {
      title:
        "AI-powered Travel Assistant for Foreign Tourists in Ho Chi Minh City (Hodos)",
      description:
        "Built a smart travel assistant app that helps international tourists overcome language barriers, navigation issues, and trip planning difficulties while exploring Ho Chi Minh City.",
      role: [
        "Backend (NestJS): Designed RESTful APIs, integrated third-party systems, and managed PostgreSQL database.",
        "Frontend (Android Jetpack Compose): Developed and optimized UI/UX, connected to backend services, and improved usability.",
        "Data Collection: Gathered and prepared image datasets (landmarks, food) for AI training and testing.",
        "AI Development: Integrated a pre-trained Computer Vision model into the mobile app (local) for landmark and food recognition, and implemented RAG-based prompting with external LLMs to deliver accurate, context-aware travel recommendations while reducing hallucinations.",
      ],
      technologies: [
        "NestJS",
        "Jetpack Compose",
        "PostgreSQL",
        "Firebase",
        "Computer Vision (YOLO)",
        "LLM",
        "RAG pipeline",
      ],
      impact:
        "Delivered a personalized, reliable, and interactive travel assistant, enhancing the experience of foreign tourists and promoting Ho Chi Minh City's culture through technology.",
      links: [
        {
          label: "Project",
          url: "https://hodos-admin.gitlabserver.id.vn/landing",
        },
        { label: "Portfolio", url: "https://devonwheels.id.vn/portfolio/1" },
      ],
    },
    {
      title:
        "F&B Procurement and Inventory Management System (Americano Chain)",
      description:
        "Developed a management system for an F&B retail chain (Americano) to handle purchasing, inventory control, and inter-branch coordination. The app supports store managers and staff in streamlining daily operations and improving stock accuracy.",
      role: [
        "Backend (NestJS): Implemented features for sales forecasting, inventory deduction, purchase order management, and synchronization of stock between branches.",
        "Frontend (React Native): Built and optimized UI for inventory and procurement workflows, integrated barcode scanning for faster stock checks, and delivered smooth user interactions.",
      ],
      technologies: [
        "NestJS",
        "React Native",
        "PostgreSQL",
        "Firebase",
        "Barcode Scanning Libraries",
      ],
      impact:
        "Helped Americano's chain stores reduce inventory errors, speed up stock-taking, and improve efficiency in procurement and branch operations.",
    },
  ],
};
