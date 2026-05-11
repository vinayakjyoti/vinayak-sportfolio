export type SocialIconKey =
  | "github"
  | "linkedin"
  | "email"
  | "website"
  | "dribbble"
  | "x"
  | "youtube";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconKey;
  external?: boolean;
};

export type LinkItem = {
  label: string;
  href: string;
  icon?: SocialIconKey | "external" | "play" | "docs";
};

export type WorkItem = {
  company: string;
  title: string;
  logo: string;
  period: string;
  location?: string;
  badges?: string[];
  summary: string;
  details?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  logo: string;
  period: string;
  badges?: string[];
  summary: string;
  details?: string;
};

export type ProjectItem = {
  title: string;
  dateRange: string;
  description: string;
  technologies: string[];
  links: LinkItem[];
  image?: string;
  video?: string;
  active: boolean;
};

export type HackathonItem = {
  title: string;
  date: string;
  location: string;
  description: string;
  avatar: string;
  badges?: string[];
  links: LinkItem[];
};

export type PortfolioData = {
  name: string;
  initials: string;
  avatar: string;
  location: string;
  email: string;
  shortBio: string;
  longBio: string;
  resumePath: string;
  socialLinks: SocialLink[];
  skills: string[];
  workHistory: WorkItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  hackathons: HackathonItem[];
};

export const portfolio: PortfolioData = {
  name: "Vinayak Mittal",
  initials: "VM",
  avatar: "/avatar.png",
  location: "Greater Noida, India",
  email: "vinayakjyotimittal@gmail.com",
  shortBio:
    "Full-stack engineer building scalable applications with Next.js, React, and modern web technologies.",
  longBio:
    "I'm a passionate full-stack developer currently pursuing B.Tech in Computer Science at Bennett University. I specialize in building AI-powered SaaS applications, real-time systems, and scalable web platforms using Next.js, React, Node.js, and cloud technologies.\n\nI've worked with technologies like Gemini API, Socket.IO, and Prisma ORM to create production-ready applications. I'm particularly interested in AI integration, real-time communication, and building seamless user experiences across web platforms.\n\nWhen I'm not coding, I solve algorithmic challenges on LeetCode and contribute to open-source projects.",
  resumePath: "/resume.pdf",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/vinayakjyoti", icon: "github", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vinayak-mittal1/", icon: "linkedin", external: true },
    { label: "Email", href: "mailto:vinayakjyotimittal@gmail.com", icon: "email" },
    { label: "LeetCode", href: "https://leetcode.com/u/Vinayakjyotimittal/", icon: "website", external: true },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Django",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Prisma ORM",
    "tRPC",
    "Socket.IO",
    "REST APIs",
    "Git & GitHub",
    "Docker",
    "CI/CD",
    "DSA & OOP",
  ],
  workHistory: [
    {
      company: "Self-Employed",
      title: "Full-Stack Developer",
      logo: "/logos/northstar.svg",
      period: "2024 - Present",
      location: "Greater Noida, India",
      badges: ["Freelance", "Full-Stack", "AI Integration"],
      summary:
        "Building AI-powered SaaS applications and real-time web platforms for startups and personal projects.",
      details:
        "- Developed production-ready SaaS applications using Next.js, React, and Gemini API\n- Implemented real-time systems with Socket.IO and location-based features\n- Built scalable backends with Node.js, Express, and Prisma ORM\n- Designed and deployed Docker containerized applications",
    },
  ],
  education: [
    {
      school: "Bennett University",
      degree: "B.Tech in Computer Science and Engineering",
      logo: "/logos/bennett.svg",
      period: "2022 - 2026",
      badges: ["CGPA: 7.59"],
      summary:
        "Pursuing computer science with focus on full-stack development, algorithms, and cloud architecture.",
      details:
        "- Strong foundation in DSA (Data Structures and Algorithms)\n- Hands-on experience with modern web technologies and frameworks\n- Google Cloud Certified Professional Cloud Architect\n- Completed EDA for Machine Learning certification",
    },
    {
      school: "Satyam International School",
      degree: "Class XII (CBSE)",
      logo: "/logos/satyam.svg",
      period: "2020 - 2021",
      badges: ["81.67%"],
      summary: "Senior secondary education with strong academic foundation.",
    },
    {
      school: "Don Bosco Academy",
      degree: "Class X (ICSE)",
      logo: "/logos/donbosco.svg",
      period: "2018 - 2019",
      badges: ["87.8%"],
      summary: "Secondary education with excellent performance.",
    },
  ],
  projects: [
    {
      title: "Genify",
      dateRange: "2024 - 2025",
      description:
        "An AI-powered SaaS application for automated code generation workflows. Built with Next.js 15, React 19, and Gemini API, featuring sandboxed code execution environments and real-time agent workflows.\n\nImplemented secure user authentication, file handling, and automated background jobs using Inngest Agent Kit for a scalable, production-ready platform.",
      technologies: ["Next.js 15", "React 19", "Prisma ORM", "tRPC", "Inngest", "Gemini API", "E2B"],
      links: [
        { label: "Live Demo", href: "https://vibe-rho-ruddy.vercel.app/", icon: "external" },
        { label: "Source", href: "https://github.com/vinayakjyoti", icon: "github" },
      ],
      video: "/videos/genify.mp4",
      active: true,
    },
    {
      title: "OrbitRide",
      dateRange: "2024",
      description:
        "A ride-hailing web application featuring real-time ride booking and live driver location tracking. Built with React.js, Node.js, Express.js, and MongoDB with secure JWT + bcrypt authentication.\n\nIntegrated Google Maps API for location autocomplete, geocoding, and real-time route visualization. Implemented Socket.IO for real-time updates and RESTful APIs with robust validation.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Google Maps API", "JWT"],
      links: [
        { label: "Live Demo", href: "https://orbit-ride-frontend.vercel.app/", icon: "external" },
        { label: "Source", href: "https://github.com/vinayakjyoti", icon: "github" },
      ],
      image: "/projects/launch-system.svg",
      active: true,
    },
    {
      title: "BroLearn",
      dateRange: "2023 - 2024",
      description:
        "A collaborative learning platform with Django backend, designed to facilitate real-time study group interaction similar to Discord. Engineered full CRUD functionality for study rooms, topics, and real-time chat messages.\n\nSecured with native Django authentication and authorization. Features centralized Activity Feed and optimized Search functionality for dynamic discovery of rooms and system-wide interactions.",
      technologies: ["Python", "Django", "SQLite", "HTML/CSS", "Real-time chat", "CRUD operations"],
      links: [
        { label: "Source", href: "https://github.com/vinayakjyoti", icon: "github" },
      ],
      image: "/projects/frameflow.svg",
      active: false,
    },
  ],
  hackathons: [
    {
      title: "AI Code Generation Challenge",
      date: "2025",
      location: "Virtual",
      description:
        "Built an AI-powered code generator using Gemini API with sandboxed execution environment.",
      avatar: "/hackathons/ai-challenge.svg",
      badges: ["Innovation", "Full-Stack"],
      links: [
        { label: "Project", href: "https://github.com", icon: "github" },
      ],
    },
  ],
};