import { Project } from ".";

export const FNB: Project = {
  id: "4",
  title: "D-Joy (Tournament Booking System)",
  description: `# D-PICKL System Description and My Role

## General System Description

The **D-PICKL system** is a comprehensive online platform designed to manage and optimize the operations of Pickleball courts. It serves four main user groups:  

1. **End-user (Player)** – the customers who search, book, and play on the courts.  
2. **Court Owner (Partner)** – the owners or managers of Pickleball courts.  
3. **Super Admin (D-Joy Application Owner)** – the main system owner.  
4. **System Administrator** – responsible for maintaining the platform.  

The platform simplifies the process of finding and booking courts for players while equipping court owners with modern tools to manage their schedules, track revenue, and attract new customers.  

### Main Components
The system is composed of two major components:  

- **Mobile App**  
  Provides features such as:  
  - Search for nearby Pickleball courts  
  - View court details and availability  
  - Book directly and make online payments  
  - Manage personal schedules  
  - Join events and view player rankings  

- **Web Admin System**  
  A web-based platform for **Super Admins, partners, and administrators**, with capabilities including:  
  - User account management  
  - Court cluster management  
  - Booking and order tracking  
  - Event and tournament creation & management  
  - Bracket management and reporting tools  

---

## My Role in the Project

As part of the D-PICKL project, my role is crucial in ensuring smooth operations and delivering key features. My main responsibilities include:  

### 🔹 Integrate Payoo
- Implement **Payoo integration** for online payments within the D-Joy system.  
- Support **VietQR** and **Payoo** as payment options for users.  

### 🔹 Court Booking Module
- Develop and maintain the **court booking module**.  
- Handle booking types:  
  - One-time bookings  
  - Recurring (periodic) bookings  
- Ensure reliable handling of court reservations and availability.  

### 🔹 Conflict Resolution
- Manage conflicts when a user books a fixed court.  
- Handle **payment-related issues**:  
  - Courts are held for **15 minutes** while a user completes payment.  
  - If payment is not made, the court is released back to the pool for others.  
- Support admin notifications for manual refund processing when booking changes leave a remaining balance.  

### 🔹 Court Status Management
- Oversee and update different court booking statuses, such as:  
  - **"Chờ thanh toán" (Awaiting Payment)**  
  - **"Đã diễn ra" (Already Occurred)**  
- Provide tools for admins to:  
  - Manage booking cancellations (from users or court owners)  
  - Handle refunds efficiently  

---

## Conclusion
The D-PICKL system is a powerful platform that enhances the Pickleball experience for both players and court owners. My role focuses on **payments, booking management, conflict resolution, and court status handling**, ensuring that the system operates smoothly and provides a seamless experience for all users.  
`,
  image: "https://pub-b8d0ec48dd23462d9cbddc79e9306cbe.r2.dev/d-joy-system.png",
  featured: true,
  imgs: [
    "https://pub-b8d0ec48dd23462d9cbddc79e9306cbe.r2.dev/d-joy-system.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.14.37.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.16.13.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.16.31.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.17.22.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.16.56.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.14.55.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.15.06.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.15.24.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.15.33.png",
    "https://pub-fef4f40d180a4a41b4f739a9dfb8321a.r2.dev/Screenshot%202025-09-17%20at%2011.15.33.png",
  ],
  subTitle:
    "A system that supports users in booking football courts at D-Joy (D-Holding), organizing tournaments, and registering for tournaments.",
  summary:
    "A system designed to manage and optimize the purchasing operations of the Americano store chain, focusing on inventory control, supplier coordination, and cost efficiency.",
  role: "Mobile App Developer, Backend Developer",

  teamSize: 12,
  responsibilities: [
    "Backend (NestJS): Designed and developed RESTful APIs, integrated third-party systems (Ipos, HRM), and managed PostgreSQL database.",
    "Frontend (Mobile App – React Native): Built and optimized mobile UI/UX, connected to backend services, and improved usability.",
  ],
  keyFeatures: [
    "Master data management for products (items, recipes, properties, equipment, materials).",
    "Distribution of product data to all branch operations.",
    "Integration with HRM system to synchronize branch, employee, BOD, role, and department data.",
    "Price warnings when recalculating at the end of the month.",
    "Quantity control for employee product orders.",
    "Enforcement of standard equipment/property numbers per branch.",
    "Material order boundary control for brands with multiple branches.",
    "Export monthly price and sales reports from Ipos.",
    "Recipe price monitoring with alerts on cost changes.",
    "Optimized supplier receiving module.",
    "QR code integration for inventory check and product receiving.",
    "Discrepancy handling at month-end.",
    "Role-based HRM authentication and access control.",
    "OTA updates with Expo.",
    "Push notifications using FCM tokens.",
  ],
  technologies: [
    "NestJS",
    "React.js",
    "React Native",
    "MySQL",
    "AWS S3",
    "Expo",
  ],

  impact:
    "Improved procurement efficiency and cost control across the Americano store chain, ensuring data consistency, supplier transparency, and streamlined branch operations.",
  additionalLinks: [],
};
