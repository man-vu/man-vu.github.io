export const resumeData = {
  contact: {
    name: "MAN VU",
    location: "Ottawa, ON",
    phone: "226-971-9048",
    email: "manvminh@gmail.com",
    linkedin: "https://linkedin.com/in/manvu",
    github: "https://github.com/man-vu",
  },
  summary: [
    "6 years' experience building, deploying, and optimizing cloud-native SaaS and web applications; primary focus on scalable front-end architecture (React/TypeScript), design systems, automation, Azure, and backend systems.",
    "Highly proficient with Generative AI tools (GitHub Copilot, ChatGPT/Codex); leverage AI daily to accelerate development, automate workflows, and rapidly prototype robust solutions."
  ],
  technicalSkills: {
    cloud: ["Azure (App Services, SQL, Functions, ARM, Storage)", "Azure DevOps", "Docker", "CI/CD", "IaC"],
    languages: ["C#", "PowerShell", "Python", "TypeScript", "JavaScript", "SQL"],
    frameworks: ["React", ".NET", "Node.js", "REST APIs", "Microservices"],
    frontend: ["Component-driven development", "design systems", "accessibility (WCAG/ARIA)", "React Testing Library", "Jest"],
    other: ["AppInsights monitoring", "Agile/Scrum Documentation", "TDD", "automated testing", "functional programming"]
  },
  experience: [
    {
      title: "Full-Stack Engineer",
      company: "ABELSoft Inc. (Dental SaaS)",
      location: "Remote, Canada",
      date: "Sept 2021 – Present",
      bullets: [
        "Migrated and refactored major ABELDent modules: financials (reporting), scheduler/appointments, charting/periodontal, and clinical notes (developed a custom utility to resolve concurrent note conflicts).",
        "Transitioned core backend logic from OData/legacy C++ to C# with Azure-hosted APIs and data contracts, improving maintainability and performance.",
        "On-call DevOps: Monitored production health post-release, managed Azure/AppInsights alerts, and executed failovers/restarts as needed (HIPAA-compliant logging).",
        "Authored and maintained internal Dev Wiki documentation (Azure DevOps) for workflow, troubleshooting, design patterns, and system architecture. Participated in and led code reviews to ensure code quality, consistency, and maintainability.",
        "Automated customer migrations (LS to CS) with PowerShell scripts, including SQL version compatibility fixes and cloud/local data preservation utilities.",
        "Provided technical support and guidance to other teams and implementers consuming shared tools and components."
      ]
    },
    {
      title: "Junior Software Developer",
      company: "ABELSoft Inc.",
      location: "Remote, Canada",
      date: "Jan 2020 – Aug 2021",
      bullets: [
        "Contributed to the design, normalization, and performance optimization of complex SQL database schemas for high-availability reporting and analytics.",
        "Remediated 1,000+ unit/integration tests to reduce deployment bugs by 25%."
      ]
    }
  ],
  projects: [
    {
      name: "Nail Salon Appointment Platform",
      link: "https://dreamy-nails.netlify.app",
      stack: ["React", "TypeScript", "Azure", "Node.js", "Docker"],
      year: "2025",
      bullets: [
        "Built and deployed a full-stack appointment scheduler on Azure using microservices, ARM for IaC, automated DevOps pipeline, and cost optimization.",
        "Designed and implemented a reusable component library in React/TypeScript, with emphasis on accessibility and functional programming principles.",
        "Implemented automated front-end testing with Jest and React Testing Library; followed component-driven and TDD approaches.",
        "Collaborated with UI/UX designers for user-centric design and workflow.",
        "Project developed using CodeRocket, Copilot, and ChatGPT Codex for rapid prototyping and robust code quality."
      ]
    }
  ],
  education: [
    {
      degree: "Honours B.Sc. in Computer Science",
      school: "University of Ottawa",
      location: "Ottawa, ON",
      date: "Expected Dec 2025"
    },
    {
      degree: "Advanced Diploma in Software Development, Honours Graduate",
      school: "Mohawk College",
      location: "Hamilton, ON",
      date: "2021"
    }
  ],
  certifications: [
    {
      name: "Azure Developer Associate (AZ-204)",
      issuer: "Microsoft"
    }
  ],
  interests: [
    "Investing", "options trading", "finance", "chess", "badminton", "esports"
  ]
}; 