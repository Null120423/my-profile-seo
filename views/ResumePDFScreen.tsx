import React from "react";

const resume = {
  name: "TRAN HUU TAI",
  title: "Mobile Developer",
  contact: [
    { label: "Phone", value: "+84 376 100 548" },
    { label: "Email", value: "huutaidev@gmail.com" },
    { label: "Website", value: "https://devonwheels.id.vn" },
    {
      label: "Address",
      value:
        "60 Đ Làng Tăng Phú, Tăng Nhơn Phú A, Thủ Đức, Hồ Chí Minh, Việt Nam",
    },
  ],
  summary:
    "I am a careful Fullstack Developer who wants to create clean and high-quality products. I like coding and always try to learn new things to improve my skills and work better. Besides coding, I enjoy traveling and discovering new places, which gives me more ideas and helps me solve problems.",
  education: {
    degree: "Bachelor's Degree in Information Technology",
    school: "Ton Duc Thang University",
    duration: "01/2021 - 01/2025",
    gpa: "8.21/10",
    description:
      "Completed core and advanced courses including programming fundamentals, algorithms, object-oriented programming (OOP), and data structures. Beyond coursework, proactively self-studied modern technologies such as UI libraries for web and mobile development, and other emerging frameworks/tools to strengthen practical skills for both academic projects and professional work.",
  },
  experience: [
    {
      company: "APETECHS Solution",
      position: "Fullstack Developer",
      duration: "03/2024 - Ongoing",
      location: "Fort Worth, Texas",
      details: [
        "Innovative Fullstack Developer with 1.5 years of experience, specializing in building dynamic and user-friendly applications using React Native and NestJS APIs.",
        "Experienced in UI/UX optimization, code performance improvement, and integration of Firebase, GPS, and location-based services.",
        "Backend (NestJS): Skilled in designing and developing REST APIs, database management, third-party systems (e.g., Payroll, Sepay), and building scalable server-side solutions.",
        "Domain Knowledge: Gained hands-on experience with real business workflows such as boarding house management, warehouse management for F&B chains, and procurement processes for production.",
      ],
    },
  ],
  projects: [
    {
      title:
        "AI-powered Travel Assistant for Foreign Tourists in Ho Chi Minh City (Hodos)",
      duration: "2024 - Ongoing",
      team: "Team size : 2",
      details: [
        "Built a smart travel assistant app that helps international tourists overcome language barriers, navigation issues, and trip planning difficulties while exploring Ho Chi Minh City.",
        "Backend (NestJS): Designed RESTful APIs, integrated third-party systems, and managed PostgreSQL database.",
        "Frontend (Android Jetpack Compose): Developed and optimized UI/UX, connected to backend services, and improved usability.",
        "Data Collection: Gathered and prepared image datasets (landmarks, food) for AI training and testing.",
        "AI Development: Integrated a pre-trained Computer Vision model into the mobile app (local) for landmark and food recognition, and implemented RAG-based prompting with external LLMs to deliver accurate, context-aware travel recommendations while reducing hallucinations.",
      ],
      technologies:
        "Technologies: NestJS, Jetpack Compose, PostgreSQL, Firebase, Computer Vision (YOLO), LLM, RAG pipeline",
      impact:
        "Impact: Delivered a personalized, reliable, and interactive travel assistant, enhancing the experience of foreign tourists and promoting Ho Chi Minh City's culture through technology.",
      links: [
        {
          label: "Landing",
          url: "https://hodos-admin.gitlabserver.id.vn/landing",
        },
      ],
    },
    {
      title:
        "F&B Procurement and Inventory Management System (Americano Chain)",
      duration: "2024 - 2025",
      team: "APETECHS Solution - Team size: 6",
      details: [
        "Developed a management system for an F&B retail chain (Americano) to handle purchasing, inventory control, and inter-branch coordination. The app supports store managers and staff in streamlining daily operations and improving stock accuracy.",
        "Backend (NestJS): Implemented features for sales forecasting, inventory deduction, purchase order management, and synchronization of stock between branches.",
        "Frontend (React Native): Built and optimized UI for inventory and procurement workflows, integrated barcode scanning for faster stock checks, and delivered smooth user interactions.",
      ],
      technologies:
        "Technologies: NestJS, React Native, PostgreSQL, Firebase, Barcode Scanning Libraries",
      impact:
        "Impact: Helped Americano's chain stores reduce inventory errors, speed up stock-taking, and improve efficiency in procurement and branch operations.",
    },
    {
      title: "Pickleball Court Management System (TeamSize 16)",
      duration: "2025 - 2025",
      team: "Duration: 2 months",
      details: [
        "Built a full platform to manage pickleball activities, including court booking, tournament management, news publishing, and role-based access for web users and admins.",
        "My Role: Focused on integrating Payoo payment gateway, managing transactions, and developing booking modules for both fixed and walk-in court reservations.",
        "Backend (NestJS): Implemented payment and transaction logic, and built APIs for booking flow.",
        "Frontend (React / React Native): Supported booking interface for users to reserve courts easily.",
      ],
      technologies: "Technologies: NestJS, React Js, PostgreSQL, Payoo API.",
      impact:
        "Impact: Simplified booking process, improved payment reliability, and supported better management of courts and users.",
    },
  ],
  skills: [
    "Backend Development",
    "NestJS",
    "Java (Spring Boot)",
    "RESTful APIs",
    "Frontend Development",
    "Mobile Development",
    "React.js",
    "AngularJS",
    "React Native",
    "Android Studio",
    "Jetpack Compose",
    "DevOps",
    "Cloud",
    "Ubuntu",
    "Linux Server Management",
    "Git",
    "GitHub",
    "Docker",
  ],
  interests: [
    {
      title: "Technology & Coding",
      desc: "Enjoy writing clean code and keeping everything well-organized; passionate about exploring new technologies related to app development and eager to work with high-load systems.",
    },
    {
      title: "Travel & Exploration",
      desc: "Passion for motorbike road trips and exploration, which helps me relieve stress while reflecting on solutions for both work and life challenges.",
    },
  ],
};

const ResumePDFScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide text-center">
          {resume.name}
        </h1>
        <div className="text-primary-700 dark:text-primary-400 font-semibold text-lg mb-4 text-center">
          {resume.title}
        </div>
        <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-700 dark:text-gray-300 mb-6">
          {resume.contact.map((c, i) => (
            <span key={i} className="flex items-center gap-1">
              {c.label === "Website" ? (
                <a
                  className="underline text-primary-700 dark:text-primary-400"
                  href={c.value}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {c.value}
                </a>
              ) : (
                c.value
              )}
            </span>
          ))}
        </div>
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Summary
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            {resume.summary}
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Education
          </h2>
          <div className="font-semibold text-primary-700 dark:text-primary-400 text-base">
            {resume.education.degree}
          </div>
          <div className="text-primary-500 dark:text-primary-200 text-sm mb-1">
            {resume.education.school}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {resume.education.duration}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            GPA: {resume.education.gpa}
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {resume.education.description}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Experience
          </h2>
          {resume.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-primary-700 dark:text-primary-400 text-base">
                {exp.company}
              </div>
              <div className="text-primary-500 dark:text-primary-200 text-sm mb-1">
                {exp.position}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {exp.duration}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                {exp.location}
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Projects
          </h2>
          {resume.projects.map((proj, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-primary-700 dark:text-primary-400 text-base">
                {proj.title}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {proj.duration}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                {proj.team}
              </div>
              <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {proj.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {proj.technologies}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {proj.impact}
              </div>
              {proj.links && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {proj.links.map((link, k) => (
                    <a
                      key={k}
                      className="underline text-primary-700 dark:text-primary-400 text-sm"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 justify-center">
            {resume.skills.map((skill, i) => (
              <li
                key={i}
                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
            Interests
          </h2>
          <ul className="space-y-4">
            {resume.interests.map((interest, i) => (
              <li key={i}>
                <div className="font-semibold text-base mb-1">
                  {interest.title}
                </div>
                <div className="text-sm leading-relaxed">{interest.desc}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResumePDFScreen;
