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
      title: "Mid-Senior Software Developer - Firefighting Team",
      company: "ABELSoft Inc. (Dental SaaS)",
      location: "Remote, Canada",
      date: "Jan 2024 – Present",
      bullets: [
        "Driving successful product releases by collaborating with a cross-functional 30-member team across development, support, and marketing departments.",
        "Implementing database optimizations, non-blocking APIs, semaphores, and caching, reducing ABELDent's module load times from 8.5 to 2.1 seconds (75% improvement), boosting customer retention by 24%.",
        "Automating workflows to address patient's note records within 1 month, improving team productivity by 40%, surpassing initial objectives by 15%.",
        "Contributing at least 3 developer manuals per month to Dev Wiki to provide guidance to junior associates.",
        "Spearheaded an automated data sync tool using PowerShell, Python and MS SQL with topological sorting algorithms to address Azure Data Sync failures, resolving at least 10 CRM tickets per month and saving 3.5 hours per week on manual searches."
      ]
    },
    {
      title: "Software Developer - Firefighting Team",
      company: "ABELSoft Inc.",
      location: "Remote, Canada",
      date: "Sept 2021 – Dec 2023",
      bullets: [
        "Provided biweekly on-call support, including monitoring, restarts and failovers for Azure Web Apps outside business hours, resolving at least 2 critical production bugs per week.",
        "Troubleshot urgent issues reported by QA and AppInsights alerts and created emergency fixes within 2 hours.",
        "Migrated and refactored major ABELDent modules: financials (reporting), scheduler/appointments, charting/periodontal, and clinical notes (developed a custom utility to resolve concurrent note conflicts, saving 8 hours/month).",
        "Transitioned core backend logic from OData/legacy C++ to C# with Azure-hosted APIs and data contracts, improving maintainability and performance.",
        "Authored and maintained internal Dev Wiki documentation (Azure DevOps) for workflow, troubleshooting, design patterns, and system architecture."
      ]
    },
    {
      title: "Co-op Junior Software Developer - Feature Team",
      company: "ABELSoft Inc.",
      location: "Remote, Canada",
      date: "Jan 2020 – Aug 2021",
      bullets: [
        "Developed an innovative utility, resolving at least 20 tickets daily, compared to 1 when performed manually (1900% improvement).",
        "Collaborated with senior developers to architect robust MS SQL database schemas and object-oriented designs, resulting in a 35% reduction in query response time and supporting a 50% increase in user base.",
        "Led a team of 3 co-op developers to resolve over 1,000 failing unit and integration tests on the service layer within 1 week, significantly improving code quality and reducing deployment bugs by 25%.",
        "Contributed to the design, normalization, and performance optimization of complex SQL database schemas for high-availability reporting and analytics."
      ]
    }
  ],
  projects: [
    {
      name: "ABELDent Enterprise Application",
      link: "",
      stack: ["C", "C++", "C#", "WPF", "WCF", "MS SQL", ".NET", "Azure"],
      year: "2020 - Present",
      bullets: [
        "Developed and fine-tuned a full-stack enterprise application for dental clinics using C#, conducting extensive profiling and debugging to enhance user experience and operational efficiency by 30%.",
        "Transitioning a monolithic codebase to a microservice-based architecture and migrating C/C++ legacy code to C# code, leading to more reliable systems, reducing customer calls by 14%.",
        "Utilizing Test-Driven Development (TDD) with unit testing using Moq, integration testing and acceptance testing to ensure software quality, consistently maintaining over 90% code coverage."
      ]
    },
    {
      name: "Clinical Notes Utility",
      link: "",
      stack: ["C#", "WinForm", ".NET", "MS SQL"],
      year: "2020",
      bullets: [
        "Accelerated processes of resolving doctor's note conflicts due to simultaneous entries from different workstations, reducing team effort by 8 hours/month, exceeding initial targets by 2 hours."
      ]
    },
    {
      name: "Automated Data Sync Tool",
      link: "",
      stack: ["PowerShell", "Python", "MS SQL"],
      year: "2024",
      bullets: [
        "Spearheaded a productivity tool that automatically synced cloud and local databases using topological sorting algorithms to address Azure Data Sync failures, resolving at least 10 CRM tickets per month.",
        "Reduced overall team effort, saving over 3.5 hours per week on manual searches for missing records."
      ]
    },
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
      date: "Sep 2024 - Dec 2025 (Expected)",
      details: [
        "Admitted with 57 transfer credits and on track to graduate in just over a year.",
        "Studying full-time while working full-time as a Software Developer at ABELSoft.",
        "Focusing on AI, operating systems and software design with plans for graduate studies.",
        "Consistently achieved excellent grades across core computer science courses.",
        "Recognized for strong academic performance while balancing full-time work and studies.",
        "Demonstrated high proficiency in advanced topics such as databases, programming paradigms, and software engineering.",
        "Maintained a record of academic excellence in a rigorous, fast-tracked program."
      ]
    },
    {
      degree: "Advanced Diploma in Software Development, Honours Graduate",
      school: "Mohawk College",
      location: "Hamilton, ON",
      date: "Jan 2019 - Aug 2021",
      details: [
        "Graduated early from a three-year program with a 90% GPA.",
        "Proficient in AWS, .NET Core, SQL databases and modern web frameworks.",
        "Completed three co-op terms and led a project recognized with a college grant."
      ]
    },
  ],
  certifications: [
    {
      name: "Google Advanced Data Analytics",
      issuer: "Google",
    },
    {
      name: "Google Data Analytics",
      issuer: "Google",
    },
    {
      name: "Microsoft Azure Data Scientist Associate (DP-100)",
      issuer: "Microsoft",
    },
    {
      name: "Microsoft Azure Developer Associate (AZ-204)",
      issuer: "Microsoft",
    },
    {
      name: "Algorithmic Toolbox",
      issuer: "Coursera",
    },
    {
      name: "Meta Front-End Developer Specialization",
      issuer: "Meta",
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
    },
    {
      name: "The Complete Junior to Senior Web Developer Roadmap (2021)",
      issuer: "Udemy",
    },
    {
      name: "Machine Learning & Data Science",
      issuer: "Udemy",
    },
  ],
  interests: [
    "Investing", "options trading", "finance", "chess", "badminton", "esports"
  ]
}; 