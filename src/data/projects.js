import noteFlowImage from "../assets/noteflow.png";
import learningOnlinePlatformImage from "../assets/elearning.png";

export const projects = [
  {
    id: 2,
    title: "Learning Online Platform",
    shortDesc:
      "A full-stack e-learning platform with courses, quizzes, progress tracking, reviews, and Stripe subscriptions.",

    overview:
      "A comprehensive online learning platform built with React, Node.js, Express, and PostgreSQL. Users can browse courses, enroll in learning programs, complete lessons and quizzes, track their progress, leave reviews, and access premium content through subscription plans. The platform follows a scalable architecture with structured course content management, secure session-based authentication, and Stripe-powered payment processing.",

    features: [
      "Session-based authentication and authorization",
      "Course browsing and enrollment system",
      "Course hierarchy (Course → Module → Chapter → Lesson)",
      "Lesson content and quiz support",
      "Learning progress tracking and lesson completion",
      "Course reviews and ratings system",
      "Subscription plans with Stripe integration",
      "User dashboard for recent and completed courses",
      "Password reset and email notification system",
      "Role-based access for Learners, Instructors, and Admins",
    ],

    techStack: [
      "React 19",
      "React Router DOM",
      "TanStack React Query",
      "React Hook Form",
      "Zod",
      "Tailwind CSS 4",
      "Node.js",
      "Express 5",
      "PostgreSQL",
      "Express Session",
      "Stripe",
      "Cloudinary",
      "Nodemailer",
      "Resend",
    ],

    challenges: [
      "Designing a scalable relational database for course content, enrollments, quizzes, subscriptions, and reviews",
      "Implementing secure session-based authentication with persistent PostgreSQL session storage",
      "Building accurate learning progress tracking across lessons and courses",
      "Managing subscription lifecycle and payment confirmation through Stripe webhooks",
      "Structuring backend code with clean separation between routes, controllers, repositories, and business logic",
    ],

    solutions: [
      "Created a normalized PostgreSQL schema with UUID primary keys and relational constraints",
      "Used express-session with connect-pg-simple to securely manage authenticated user sessions",
      "Implemented dedicated progress and completion tables to efficiently track learner activity",
      "Integrated Stripe Payment Intents and webhooks to automate subscription activation and payment updates",
      "Adopted a layered backend architecture separating routes, controllers, repositories, and middleware for maintainability",
    ],

    lessons:
      "This project strengthened my full-stack development skills by teaching me how to design and implement a production-style learning management system. I gained experience in relational database design, session-based authentication, Stripe payment integration, scalable backend architecture, and managing complex relationships between courses, users, enrollments, progress tracking, and subscriptions.",

    github: "https://github.com/your-username/learning-online-platform",

    demo: "https://learning-online-platform-pern.onrender.com/",

    image: learningOnlinePlatformImage,
  },
  {
    id: 3,
    title: "NoteFlow — Full-Stack Note-Taking Application",

    shortDesc:
      "A modern full-stack note-taking app with rich-text editing, notebooks, tags, autosave, search, and authentication.",

    overview:
      "NoteFlow is a full-stack note-taking platform built with React 19, Express 5, and MongoDB Atlas. It provides a rich-text editing experience using TipTap, along with features like notebooks, tags, pin/favorite/archive system, full-text search, autosave, and a command palette. The app supports secure authentication with JWT cookies, avatar uploads, password reset flows, and a clean UI designed for productivity.",

    features: [
      "Rich-text editor with TipTap",
      "Notebooks and tag-based organization",
      "Pin, favorite, archive, and trash system",
      "Auto-save with debounce and background sync",
      "Command palette (⌘K) for quick actions",
      "Full-text note search with filters",
      "Dark/light theme with persistence",
      "Secure authentication with JWT httpOnly cookies",
      "Password reset and email verification system",
      "Avatar upload and profile management",
      "Soft delete and note recovery system",
      "Responsive UI with mobile support",
    ],

    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS 3",
      "Zustand",
      "TanStack React Query",
      "React Router DOM",
      "TipTap Editor",
      "Radix UI",
      "Node.js",
      "Express 5",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "bcrypt",
      "express-validator",
      "helmet",
      "cookie-parser",
      "multer",
      "Cloudinary",
      "Brevo SMTP",
      "DOMPurify",
      "sanitize-html",
      "JSZip",
    ],

    challenges: [
      "Designing a scalable note system with notebooks, tags, and soft delete functionality",
      "Implementing secure JWT authentication with httpOnly cookies and session restoration",
      "Building a rich-text editor with autosave and content sanitization",
      "Managing complex client state with Zustand and server state with React Query",
      "Ensuring performance with large note datasets and client-side search filtering",
    ],

    solutions: [
      "Used a modular MongoDB schema with relations between users, notes, notebooks, and tags",
      "Implemented secure JWT authentication stored in httpOnly cookies with verify endpoint",
      "Integrated TipTap editor with DOMPurify and autosave debounce system",
      "Separated state layers: Zustand for UI/auth, React Query for server state",
      "Optimized search and filtering logic with indexed queries and client-side memoization",
    ],

    lessons:
      "This project taught me how to design a scalable productivity application with a strong focus on UX and performance. I learned how to structure a full-stack architecture using React Query and Zustand together, how to build secure authentication with JWT cookies, and how to handle rich-text editing, autosave systems, and complex data relationships in MongoDB.",

    github: "https://github.com/your-username/noteflow",

    demo: "https://noteflow-demo.vercel.app",

    image: noteFlowImage,

    status: "Completed",
    type: "Full Stack",
    database: "MongoDB Atlas",
    architecture: "REST API",
    authentication: "JWT (httpOnly Cookies)",
    editor: "TipTap Rich Text Editor",
    deployment: "Vercel + Render",
  },
];
