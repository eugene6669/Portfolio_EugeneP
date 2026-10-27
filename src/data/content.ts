export const siteContent = {
  personal: {
    name: "Eugene Pantua",
    handle: "@pantuaeugenio2",
    role: "Full-Stack JavaScript Developer",
    tagline: "Building scalable server-side architectures and ",
    taglineContinuation: "responsive frontend interfaces",
    subtitle: "BSIT Graduate specializing in Full-Stack JavaScript development with robust database design skills",
    email: "pantuaeugenio2@gmail.com",
    location: "Quezon City, Philippines",
    timezone: "PHT (UTC+8)",
    profileImage: "/src/assets/profile.png", 
  },

  social: {
    github: "https://github.com/eugene6669",
    linkedin: "https://www.linkedin.com/in/eugene-pantua-36665a182/",
    facebook: "https://www.facebook.com/pantuaeugene/",
    discord: "https://discord.com/lokai19/847334346977050635",
  },

  tools: [
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "MSSQL", icon: "mssql" },
    { name: "MySQL", icon: "mysql" },
    { name: "Azure", icon: "azure" },
    { name: "Git", icon: "git" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML/CSS", icon: "html" },
  ],

  projects: [
    {
      id: "project-1",
      title: "DesignExcel Furniture E-Commerce System",
      description: "Full-stack e-commerce platform with integrated backend APIs, MSSQL database, and Azure deployment for furniture retail business",
      stack: ["Node.js", "React", "MSSQL", "Express", "Azure"],
      year: "2024 – 2026",
      images: [
        "/projects/designexcel/Hero Section-Home Page.png",
        "/projects/designexcel/Product Section-Home Page.png",
        "/projects/designexcel/Footer And Location Section-Home Page.png",
        "/projects/designexcel/Testomonial Section-Home Page.png",
        "/projects/designexcel/Product Catalog-Product Page.png",
        "/projects/designexcel/Product Catalog 3D-Product Page.png",
        "/projects/designexcel/Product Catalog 3D-Product Page Model.png",
        "/projects/designexcel/Product Catalog 3D-Product Page Model- AR View Desktop.png",
        "/projects/designexcel/Company-Log IN  Page.png",
        "/projects/designexcel/Company-About Us Page.png",
        "/projects/designexcel/Company-Contact Us Page.png",
        "/projects/designexcel/Company-Customer Dashboard Page.png",
        "/projects/designexcel/Company-Customer Orders Page.png",
        "/projects/designexcel/Company-Customer Personal Information Page.png",
        "/projects/designexcel/Company-Project Page.png",
        "/projects/designexcel/Admin-Log In.png",
        "/projects/designexcel/Admin-Dashboard.png",
        "/projects/designexcel/Admin-Orders.png",
        "/projects/designexcel/Admin-Products Listings.png",
        "/projects/designexcel/Admin-CMS.png",
        "/projects/designexcel/Admin-Chat Support.png",
        "/projects/designexcel/Admin-Activity Logs.png",
        "/projects/designexcel/Admin-Report-Sales Report.png",
        "/projects/designexcel/Admin-Report-Inventory.png",
        "/projects/designexcel/Admin-Report-MastersList Report.png"
      ],
      liveUrl: "",
      githubUrl: "",
      status: "live"
    },
    {
      id: "project-2",
      title: "Golden Pyramid Resort Reservation System",
      description: "Comprehensive reservation management system with user requirements documentation, database design, and system workflows",
      stack: ["System Analysis", "Database Design", "MSSQL", "Documentation"],
      year: "2023 – 2024",
      images: [
        "/projects/golden-pyramid/Hero -Homepage.png",
        "/projects/golden-pyramid/Accommodation-Homepage.png",
        "/projects/golden-pyramid/Features And Amenities -Homepage.png",
        "/projects/golden-pyramid/Book and Reviews-Homepage.png"
      ],
      liveUrl: "",
      githubUrl: "",
      status: "archived"
    },
    {
      id: "project-3",
      title: "GentechAI - AI-Powered Productivity Platform",
      description: "All-in-one workspace platform with 40+ browser tools, AI assistant, CRM, invoicing, and job tracking for freelancers and virtual assistants",
      stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Vite"],
      year: "2026",
      images: [
        "/projects/gentechai/Hero-Page.png",
        "/projects/gentechai/Find Work - Page.png",
        "/projects/gentechai/Log In Page.png"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/eugene6669/GentechAI",
      status: "development"
    },
    {
      id: "project-4",
      title: "Z and E Laundry - Full Web Application",
      description: "Production-ready laundromat management system with customer portal, admin back office, rider PWA, booking wizard, and payment integration",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "PayMongo"],
      year: "2026",
      images: [
        "/projects/zne-laundry/Hero Page.png",
        "/projects/zne-laundry/Pricing Page.png",
        "/projects/zne-laundry/Why Choose Page.png",
        "/projects/zne-laundry/FAQ Page.png",
        "/projects/zne-laundry/Contact Page.png"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/eugene6669/ZnE_Laundry",
      status: "development"
    },
  ],

  services: [
    {
      id: "service-1",
      number: "01",
      title: "Full-Stack Development",
      tagline: "End-to-end web application development",
      badge: "Core Expertise",
      bullets: [
        "Node.js/Express backend architecture",
        "React frontend with responsive UI",
        "RESTful API design and integration"
      ],
      tools: ["Node.js", "React", "Express", "JavaScript"]
    },
    {
      id: "service-2",
      number: "02",
      title: "Database Design & Optimization",
      tagline: "Robust and scalable database solutions",
      badge: "Specialized",
      bullets: [
        "MSSQL and MySQL schema design",
        "Query optimization and indexing",
        "Data modeling and normalization"
      ],
      tools: ["MSSQL", "MySQL", "Database Design", "SQL"]
    },
    {
      id: "service-3",
      number: "03",
      title: "System Analysis",
      tagline: "Requirements gathering and documentation",
      badge: "Process",
      bullets: [
        "User requirements documentation",
        "System workflow design",
        "Use case and flow diagrams"
      ],
      tools: ["Figma", "Documentation", "System Analysis", "UML"]
    },
    {
      id: "service-4",
      number: "04",
      title: "Cloud Deployment",
      tagline: "Azure cloud infrastructure and deployment",
      badge: "DevOps",
      bullets: [
        "Microsoft Azure deployment",
        "CI/CD pipeline setup",
        "Application monitoring and maintenance"
      ],
      tools: ["Azure", "Git", "GitHub", "DevOps"]
    },
    {
      id: "service-5",
      number: "05",
      title: "Technical Support",
      tagline: "IT support and troubleshooting",
      badge: "Support",
      bullets: [
        "MIS administration",
        "Technical troubleshooting",
        "User training and documentation"
      ],
      tools: ["Help Desk", "IT Support", "Documentation", "Training"]
    }
  ],

  method: [
    {
      step: "01",
      title: "Requirements Gathering",
      description: "Analyze business needs, document user requirements, and design system workflows",
      tags: ["Analysis", "Documentation", "Planning"]
    },
    {
      step: "02",
      title: "Development & Integration",
      description: "Build features using Node.js and React, integrate APIs, and design database structure",
      tags: ["Coding", "API Integration", "Database Design"]
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description: "Conduct thorough testing, deploy to Azure cloud, and provide ongoing support",
      tags: ["Testing", "Azure Deploy", "Maintenance"]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      number: "01",
      title: "Java Fundamentals",
      issuer: "Oracle / Training Provider",
      date: "2024",
      image: "/certifications/Certificate Java Fundamentals.png",
      credentialId: "",
      skills: ["Java", "Programming Fundamentals", "Object-Oriented Programming"]
    },
    {
      id: "cert-2",
      number: "02",
      title: "SAP Certification - Part 1",
      issuer: "SAP",
      date: "2024",
      image: "/certifications/Certificate Sap 1.png",
      credentialId: "",
      skills: ["SAP", "Enterprise Systems", "Business Processes"]
    },
    {
      id: "cert-3",
      number: "03",
      title: "SAP Certification - Part 2",
      issuer: "SAP",
      date: "2024",
      image: "/certifications/Certificate Sap 2.png",
      credentialId: "",
      skills: ["SAP", "Enterprise Resource Planning", "System Integration"]
    },
    {
      id: "cert-4",
      number: "04",
      title: "Systems Administration",
      issuer: "Training Provider",
      date: "2024",
      image: "/certifications/Certificate Systems Administration.png",
      credentialId: "",
      skills: ["Systems Administration", "IT Infrastructure", "Network Management"]
    }
  ],

  about: {
    statement: "Transforming ideas into scalable solutions through",
    statementContinuation: "system analysis and technical support excellence.",
    bio: "BSIT Graduate specializing in System Analysis and MIS Administration with technical support expertise. Experienced in requirements gathering, system documentation, workflow design, and IT infrastructure management. Former MIS Admin Intern at Quezon City Public Library with hands-on experience in troubleshooting, user training, and system maintenance. Strong analytical and problem-solving skills with a focus on teamwork and effective communication.",
    profileImage: "/about/profile.png",
    roles: [
      {
        index: "01",
        title: "System Analyst",
        tools: ["Requirements Analysis", "Documentation", "Use Cases", "Workflows"]
      },
      {
        index: "02",
        title: "MIS Admin / Tech Support",
        tools: ["IT Support", "Troubleshooting", "User Training", "Documentation"]
      }
    ],
    certifications: [
      {
        title: "Bachelor of Science in Information Technology",
        id: "STI College Novaliches",
        issuer: "2022 – 2026"
      }
    ],
    community: {
      role: "Former MIS Admin Intern at Quezon City Public Library",
      link: ""
    }
  },

  aiBuilds: [
    {
      id: "build-1",
      name: "E-Commerce Platform",
      description: "Full-featured furniture e-commerce system with inventory management and payment integration",
      status: "live"
    },
    {
      id: "build-2",
      name: "Reservation System",
      description: "Resort booking and management system with real-time availability tracking",
      status: "archived"
    },
    {
      id: "build-3",
      name: "API Integration Tools",
      description: "RESTful API development and integration utilities for backend services",
      status: "development"
    }
  ],

  faqs: [
    {
      id: "faq-1",
      number: "01",
      question: "What technologies do you specialize in?",
      answer: "I specialize in Full-Stack JavaScript development with Node.js/Express on the backend and React on the frontend. I'm also experienced in database design and optimization with MSSQL and MySQL, along with Azure cloud deployment."
    },
    {
      id: "faq-2",
      number: "02",
      question: "What kind of projects have you worked on?",
      answer: "I've contributed to e-commerce platforms, reservation systems, and various web applications. My work includes full-stack development, database design, API integration, system analysis, and cloud deployment on Microsoft Azure."
    },
    {
      id: "faq-3",
      number: "03",
      question: "Do you have experience with database design?",
      answer: "Yes! I have robust experience in MSSQL and MySQL database design, including schema optimization, query performance tuning, data modeling, and normalization. I've designed and reviewed database structures for multiple production systems."
    },
    {
      id: "faq-4",
      number: "04",
      question: "Can you work with existing codebases?",
      answer: "Absolutely. I'm comfortable jumping into existing projects, whether it's adding new features, debugging issues, refactoring code, or optimizing performance. I can also review and improve database schemas and API integrations."
    },
    {
      id: "faq-5",
      number: "05",
      question: "Are you available for freelance or contract work?",
      answer: "Yes! I'm open to freelance projects, contract work, and full-time opportunities. I'm particularly interested in roles involving full-stack JavaScript development, database optimization, and cloud deployment. Feel free to reach out via email."
    }
  ]
};
