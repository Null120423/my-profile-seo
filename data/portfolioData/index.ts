import { DJPRO } from "./d-joy";
import { FNB } from "./fnb";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  isPrivate?: boolean;
  imgs: string[];
  subTitle: string;
  summary: string;
  responsibilities: string[];
  keyFeatures: string[];
  impact: string;
  additionalLinks: { label: string; url: string }[];
  role: string;
  teamSize: number;
}

export const portfolioData: Project[] = [
  {
    id: "1",
    title: "Hodos ( Travel Platform for Pilgrims )",
    subTitle:
      "A travel platform designed specifically for pilgrims, offering personalized itineraries and community features.",
    description: `# 🧳 Developing an AI-powered Application to Support Foreign Tourists in Ho Chi Minh City

In the current context of the rapid development of **international tourism** and **digital technology**, the demand for **free and personalized travel** is becoming increasingly popular.

Especially for **foreign tourists**, exploring a vibrant and diverse city like **Ho Chi Minh City** often presents many challenges such as:

- Language barriers  
- Lack of updated information  
- Difficulty in orientation  
- Trouble planning a suitable itinerary  

---

## 🎯 Why AI?

Given this situation, applying **Artificial Intelligence (AI)** to assist foreign visitors in experiencing Ho Chi Minh City in a **convenient, safe, and personalized** way is a **promising and essential** direction.

With capabilities like:

- Natural Language Processing (NLP)  
- Personal Preference Analysis  
- Location Recognition  
- Integration with Maps, Reviews, and Real-time Interaction  

→ **AI can become an intelligent virtual tour guide** for international tourists.

---

## 💡 Project Topic

> **“Developing an AI-powered application to support foreign tourists in Ho Chi Minh City”**

---

## 🎯 Project Goals

To build a **smart, personalized travel assistant app** that aims to:

### 🗣️ 1. Support Communication and Orientation

- Multilingual **AI Chatbot**
- Help tourists:
  - Ask for directions  
  - Find locations  
  - Book restaurants or hotels  

---

### 📅 2. Suggest Optimal Itineraries Based on User Preferences

- Analyze user input (e.g. interests, stay duration, budget)  
- Generate **personalized travel plans**  
- Provide **clear explanations** for each suggestion  

---

### 🌍 3. Enable 360° Location Exploration

- Preview places using **360° image technology**
- Help tourists make **better travel decisions**

---

### 📸 4. Recognize Landmarks and Local Food via Images

- Let users take photos
- Use AI to **identify what they are visiting or eating**
- Enhance **cultural connection** and understanding

---

### 📝 5. Allow Users to Share Experiences

- Post **images**, **videos**, and **content** about:
  - Food
  - Sightseeing
  - Cultural events  
- Add **locations**, **hashtags**, and **emotions** (e.g. 😊, 😍, "excited", "amazed")

---

### 🤝 6. Connect Users with Similar Travel Interests

- Find people with **similar plans or preferences**  
- Allow users to:
  - **Share journeys**
  - **Reduce costs**
  - **Enhance experiences**

---

## 🌏 Project Impact

Through this project, our team aims to:

- **Promote the culture and tourism** of Ho Chi Minh City to international friends  
- Provide a **practical, real-world tech solution**  
- Help foreign tourists **discover**, **connect**, and **experience Vietnam** in a **friendly, modern, and personalized** way

---

> 🚀 _Smart travel, meaningful connection – powered by AI._`,
    image:
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/3.png",
    technologies: [
      "Nest JS",
      "Jetpack Compose, Kotlin",
      "PostgreSQL",
      "React Js",
      "TailwindCSS",
      "kubernetes",
      "CI/CD",
      "Github Actions",
      "Docker",
      "Aws S3",
    ],
    liveUrl: "http://hodos-admin.gitlabserver.id.vn/landing",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    isPrivate: true,
    imgs: [
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/3.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2020.58.34.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2020.58.43.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2020.58.51.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2020.58.59.png",
    ],
    summary:
      "A smart travel assistant app helping international tourists overcome language barriers, navigation issues, and trip planning challenges while exploring Ho Chi Minh City.",
    responsibilities: [
      "Backend (NestJS): Designed and developed RESTful APIs, integrated third-party systems, and managed PostgreSQL database.",
      "Frontend (Android – Jetpack Compose): Built and optimized mobile UI/UX, connected to backend services, and improved usability.",
      "Data Collection: Collected and prepared image datasets (landmarks, food) for AI training and evaluation.",
      "AI Development: Integrated a pre-trained Computer Vision model (YOLO) for local landmark and food recognition.",
      "Implemented RAG-based prompting with external LLMs to deliver context-aware travel recommendations while reducing hallucinations.",
    ],
    keyFeatures: [
      "Food and location classification in Ho Chi Minh City",
      "Trip planning for travelers",
      "AI-powered chatbot support for travelers",
      "RAG to reduce token usage and search location data (using vector search in PostgreSQL with the vector extension)",
      "JWT, secret keys, and device ID for authentication",
      "Push notifications (via FCM tokens)",
      "OTA updates for the app (CodePush)",
      "Trip visualization on maps (using Google Maps and processed location data)",
      "Scheduling feature (single-service scheduling)",
      "Deployment with Kubernetes for the main system server",
      "Schedule API deployed with Nginx on Ubuntu 22.04",
      "CI/CD with GitHub Actions pipeline",
      "Integrated offline AI models into the Android app",
      "Integrated SePay for payment module",
    ],
    impact:
      "Delivered a personalized, reliable, and interactive travel assistant that enhances the experience of foreign tourists and promotes Ho Chi Minh City's culture through technology.",
    additionalLinks: [
      {
        label: "Project Landing Page",
        url: "https://hodos-admin.gitlabserver.id.vn/landing",
      },
    ],
    role: "Full-stack contributor (Mobile & Backend Development), Data Collector, Researcher",
    teamSize: 2,
  },
  {
    id: "2",
    title: "Activity-Based Social Connection App",
    subTitle:
      "An application designed to enhance social connections through activity-based interactions.",
    image:
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/2.png",
    technologies: [
      "Nest JS",
      "React Native",
      "PostgreSQL",
      "TailwindCSS",
      "Github Actions",
      "Docker",
      "Aws S3",
      "Microservices",
      "Event-Driven Architecture",
      "Role-Based Access Control (RBAC)",
      "Saga Pattern",
    ],
    description: `# 🔗 "Activity-Based Social Connection App" with Hybrid Architecture Optimization
The **"Activity-Based Social Connection"** application leverages a combination of architectural styles to **optimize social interaction and activity management**. This architecture ensures:

- ✅ **Real-time data updates**
- 🔐 **Role-based secure access**
- 📦 **Scalability** via service decoupling

Architectural styles used include:

- **Event-Driven Architecture**
- **Microservices with Client-Server model**
- **Role-Based Access Control (RBAC)**

Each contributes to the system’s efficiency, scalability, and user-centric design.

---

## ⚙️ Real-time Updates via Event-Driven Architecture

The application ensures real-time synchronization through an **event-driven model**, where microservices **automatically respond** to events such as:

- User profile updates
- New match suggestions
- Appointment responses

These events are handled by **NestJS Microservices**, which update **PostgreSQL** and trigger appropriate actions (e.g., **push notifications**).

📌 *Example:* When a user updates their **preferences** or **availability**:

- The system triggers an event → Matching Service generates new suggestions  
- Notification Service sends alerts to relevant users

➡️ This ensures seamless data propagation and timely decision-making in social interactions.

---

## 🧱 Microservices + Client-Server Architecture

The backend adopts a **Microservices architecture**, while following a **Client-Server model** overall:

### 📲 Frontend (Client)

- Built with **React Native**
- Provides a **cross-platform UI** (iOS/Android)
- Enables smooth interaction with profiles, schedules, and suggestions

### 🛠 Backend (Microservices)

- Developed using **NestJS Microservices**
- Each service handles a specific business domain:
  - User Service  
  - Matching Service  
  - Appointment Service  
  - Notification Service  
- **PostgreSQL** is used for data persistence

### 🚀 Advantages

- 📈 **Scalable**: Each service can scale independently
- 🧩 **Flexible Development**: Small teams can work in parallel
- 💪 **Fault Tolerant**: Failure in one service doesn't affect the whole system

---

## 🔐 Security with Role-Based Access Control (RBAC)

To protect resources and enforce workflow discipline, the app implements **RBAC**:

- Defines roles: **User**, **Administrator**
- Permissions are enforced via **NestJS backend services**
- Role data is securely stored in **PostgreSQL**

➡️ This approach ensures **secure access**, **fine-grained control**, and **reduced operational risks**, while maintaining task efficiency.

---`,
    isPrivate: true,
    featured: true,
    imgs: [
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/2.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Picture1-.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2022.18.24.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2022.18.18.png",
      "https://pub-8522858fd58049a6b24d543265789c51.r2.dev/app-img-banner/Screenshot%202025-07-15%20at%2022.18.09.png",
    ],
    role: "Mobile App Developer, Backend Developer",
    teamSize: 2,

    summary:
      "A social networking platform that fosters meaningful interactions by connecting users through shared activities. The system is designed with a hybrid architecture that combines event-driven microservices, secure role-based access, and scalable infrastructure for real-time engagement.",

    responsibilities: [
      "Backend (NestJS): Designed microservices for user, matching, appointment, and notification services.",
      "Implemented event-driven architecture for real-time updates and system responsiveness.",
      "Developed secure Role-Based Access Control (RBAC) and data persistence with PostgreSQL.",
      "Mobile App (React Native): Built cross-platform UI, integrated APIs, and optimized user flows for activity management and matching.",
      "Configured CI/CD pipelines with GitHub Actions and containerized deployment using Docker.",
      "Managed AWS S3 for media storage and applied Saga Pattern for complex transaction workflows.",
    ],

    keyFeatures: [
      "Activity-based user matching and social connection.",
      "Real-time updates via event-driven architecture.",
      "Role-Based Access Control (RBAC) for secure access management.",
      "Cross-platform mobile app with React Native.",
      "Scalable microservices backend with NestJS.",
      "Saga Pattern for distributed transaction handling.",
      "Media storage and retrieval using AWS S3.",
      "CI/CD automation with GitHub Actions.",
      "Containerized deployment with Docker.",
    ],

    impact:
      "Enhanced social interaction by enabling users to discover and connect through activities in real time. Delivered a scalable and secure architecture that supports growth, encourages community engagement, and ensures a seamless user experience.",

    additionalLinks: [],
  },
  DJPRO,
  FNB,
];
