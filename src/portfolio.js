// Home Page
const greeting = {
  title: "Mid-Senior Software Developer",
  title2: "Man Vu",
  logo_img: "letterm.png",
  logo_name: "Man Vu",
  logo_title: "| Software Developer",
  nickname: "",
  full_name: "Man Vu",
  subTitle:
    "Software Developer @ ABELSoft | 496 PRs | 6+ Years | CS Student @ uOttawa | AI & Cloud Enthusiast",
  resumeLink: "/assets/resumes/Man_Resume.pdf",
  mail: "mailto:manvminh@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/man-vu",
  linkedin: "https://www.linkedin.com/in/manvu/",
  gmail: "manvminh@gmail.com",
  facebook: "https://www.facebook.com/manctgamer/",
  portfolio: "https://manvu.ca/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Scalable .NET desktop and web applications with WPF and service-oriented architecture",
        "496 merged PRs, 30,387 lines added, 1,618 files changed over 6+ years at ABELSoft",
        "RESTful APIs, legacy C modernization, performance optimization, and reliable test coverage",
      ],
      softwareSkills: [
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: { color: "#9A6D38" },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: { color: "#512BD4" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: { color: "#41B883" },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: { color: "#DD0031" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { color: "#CC2927" },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: { color: "#A8B9CC" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: { color: "#0769AD" },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "Azure cloud services, Application Insights, Functions, Logic Apps, and Service Bus",
        "CI/CD pipelines in Azure DevOps, deployment tracking, and package lifecycle management",
        "Automated error logging, data synchronization, and infrastructure automation",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#008AD7" },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: { color: "#0078D7" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:circleci",
          style: { color: "#343434" },
        },
        {
          skillName: "PowerShell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: { color: "#5391FE" },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: { color: "#5C2D91" },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "Data analysis and visualization with Python, Pandas, and SQL",
        "Regression, classification, and deep learning models",
        "Google, Stanford, and Microsoft analytics certifications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { color: "#D00000" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: { color: "#F37626" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
      ],
    },
  ],
};

const experience = {
  title: "Professional Experience",
  description:
    "Software Developer with 6+ years delivering measurable impact across financial systems, clinical workflows, and cloud architecture at a leading dental practice management company.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "",
      experiences: [
        {
          title: "Mid-Senior Software Developer",
          company: "ABELSoft Inc.",
          company_url: "http://abelsoft.com/",
          logo_path: "abelsoft.jpg",
          duration: "Jan 2020 - Present",
          location: "Ottawa, Ontario, Canada",
          description: [
            "Promoted from Junior to Mid-Senior Developer over 6+ years, becoming a trusted owner of mission-critical systems across the full stack.",
            "Prevented revenue loss across hundreds of dental practices by architecting atomic financial transactions that eliminated partial billing failures.",
            "Reduced customer-impacting incidents through 62+ proactive data integrity hotfixes and automated cleanup scripts.",
            "Expanded the product's market reach by building imaging integrations for new hardware vendors and modernizing to cloud-based delivery.",
            "Dramatically reduced mean time to resolution by implementing automated error logging across all critical paths.",
            "Contributed to the launch of a new AI-powered clinical note-taking product, helping automate documentation for dental practitioners.",
          ],
          color: "#7F00FF",
          contributionAreas: [
            {
              area: "Financial & Billing System",
              prCount: 97,
              impact: "Prevented revenue loss and eliminated partial billing failures",
              highlights: [
                "Eliminated partial charge plan update failures affecting 14+ patient accounts",
                "Prevented stranded payments and orphaned billing records across customer databases",
                "Reduced load times for accounts receivable views through query optimization",
              ],
            },
            {
              area: "Data Integrity & Hotfixes",
              prCount: 62,
              impact: "Maintained data integrity across hundreds of customer databases",
              highlights: [
                "Reduced customer-impacting incidents through proactive data cleanup automation",
                "Enabled safe decommissioning and recommissioning of cloud environments",
                "Built reusable scripts for common data problems, reducing fix turnaround time",
              ],
            },
            {
              area: "Imaging Platform Integration",
              prCount: 44,
              impact: "Expanded market compatibility with new hardware vendors",
              highlights: [
                "Enabled support for new imaging hardware, expanding the product's market reach",
                "Modernized imaging from on-premise to cloud-based delivery architecture",
                "Improved reliability by fixing patient matching edge cases in imaging workflows",
              ],
            },
            {
              area: "Patient Management",
              prCount: 35,
              impact: "Improved front-desk workflow efficiency and data accuracy",
              highlights: [
                "Reduced patient data merge errors, preventing duplicates in practice databases",
                "Improved front-desk workflow efficiency with better contact management",
                "Eliminated data loss scenarios during household reassignment operations",
              ],
            },
            {
              area: "Charting & Clinical Workflows",
              prCount: 34,
              impact: "Recovered lost revenue and improved clinical data accuracy",
              highlights: [
                "Enabled practices to properly bill edge-case procedures, recovering lost revenue",
                "Improved clinical data accuracy through better deletion safeguards",
                "Eliminated a major source of support calls by resolving treatment data issues",
              ],
            },
            {
              area: "Scheduler & Appointments",
              prCount: 29,
              impact: "Improved scheduling accuracy and front-desk staff productivity",
              highlights: [
                "Fixed scheduling boundary bugs that caused appointment count inaccuracies",
                "Enabled practices to customize scheduler granularity without data loss",
                "Enhanced appointment reports with multi-phone support for better patient reach",
              ],
            },
            {
              area: "Cloud Services & Architecture",
              prCount: 26,
              impact: "Ensured system stability across client-server version mismatches",
              highlights: [
                "Maintained service compatibility across dozens of version releases",
                "Enabled secure database connections on modern SQL Server versions",
                "Improved system stability through graceful error handling and separation of concerns",
              ],
            },
            {
              area: "Database & Infrastructure",
              prCount: 26,
              impact: "Prevented calculation errors and improved query performance",
              highlights: [
                "Prevented arithmetic overflow errors in financial calculations via schema migration",
                "Improved query performance through strategic indexing on critical tables",
                "Enabled reliable new customer onboarding with maintained deployment scripts",
              ],
            },
            {
              area: "Logging & Observability",
              prCount: 12,
              impact: "Dramatically reduced mean time to resolution for production issues",
              highlights: [
                "Enabled root cause analysis for previously unresolvable data corruption issues",
                "Reduced support ticket resolution time with comprehensive diagnostic logging",
                "Built intelligent log filtering to reduce alert noise and focus on real issues",
              ],
            },
          ],
        },
        {
          title: "iOS Engineer",
          company: "E-RegisterNow",
          company_url: "https://e-registernow.com/",
          logo_path: "eregisternow.png",
          duration: "May 2019 - Aug 2019",
          location: "Mississauga, Ontario, Canada",
          description: [
            "Designed and built native iOS applications for the company's event management platform.",
            "Integrated RESTful APIs for real-time event data and user interactions.",
            "Collaborated with cross-functional teams to define, design, and ship new product features.",
          ],
          color: "#7F00FF",
        },
      ],
    },
  ],
};

// ABELSoft contribution stats for dedicated display
const abelsoftStats = {
  totalPRs: 496,
  totalFilesChanged: 1618,
  totalLinesAdded: 30387,
  totalLinesRemoved: 15547,
  tenure: "6+ years",
  startDate: "Jan 2020",
  statsImage: "abelsoft_stats.jpg",
  topAreas: [
    { name: "Financial/Billing", prs: 97 },
    { name: "Data Integrity & Hotfixes", prs: 62 },
    { name: "Imaging Integration", prs: 44 },
    { name: "Patient Management", prs: 35 },
    { name: "Charting/Clinical", prs: 34 },
    { name: "Scheduler/Appointments", prs: 29 },
    { name: "Cloud Services", prs: 26 },
    { name: "Database/Infrastructure", prs: 26 },
    { name: "Logging & Observability", prs: 12 },
    { name: "UI/UX Improvements", prs: 11 },
    { name: "Reporting", prs: 6 },
    { name: "Security & Permissions", prs: 4 },
  ],
  technicalSkills: [
    { category: "Languages", technologies: "C#, C (legacy), SQL, PowerShell, XAML" },
    { category: "Frameworks", technologies: ".NET / WPF, Entity Framework" },
    { category: "Database", technologies: "SQL Server, T-SQL, Schema Migrations" },
    { category: "Cloud", technologies: "Azure Application Insights, Azure DevOps" },
    { category: "Architecture", technologies: "Service-Oriented Architecture, Client-Server" },
    { category: "Tools", technologies: "NuGet, Git, Azure DevOps Pipelines" },
    { category: "Domain", technologies: "Dental Practice Management, Healthcare, Medical Imaging" },
  ],
  recentPRs: [
    { date: "2026-03-18", title: "Enhanced appointment report with multi-phone support" },
    { date: "2026-03-16", title: "Fixed object reference error in imaging capture" },
    { date: "2026-03-12", title: "Fixed race condition in clinical charting view" },
    { date: "2026-03-11", title: "Fixed arithmetic overflow in insurance calculations" },
    { date: "2026-02-24", title: "Reduced false positives in payment audit logging" },
    { date: "2026-02-24", title: "Enhanced transaction logging for better auditing" },
    { date: "2026-01-28", title: "Fixed threading issue in financial module UI" },
    { date: "2026-01-20", title: "Added diagnostic logging for date-related investigations" },
  ],
};

const degrees = {
  completedDegrees: [
    {
      title: "Bachelor of Science - BS, Computer Science",
      subtitle: "University of Ottawa",
      logo_path: "uottawa_logo.png",
      alt_name: "uOttawa",
      duration: "Sep 2024 - Mar 2026",
      descriptions: [
        "Degree conferred March 11th, 2026. Graduated Magna Cum Laude with a CGPA of 8.27.",
        "Completed while working full-time as a Software Developer at ABELSoft.",
        "AI & ML: Mastered neural networks and heuristic search, providing the foundation for work in Agentic AI and RAG.",
        "Cybersecurity & OS: Explored cryptography, threat modeling, and secure system design alongside process management and memory allocation.",
        "Networking: Gained expertise in network protocols, data communication architectures, and the OSI model.",
        "Algorithms & Automata: Specialized in complexity analysis, advanced data structures, and the mathematical foundations of computation.",
      ],
      website_link:
        "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/computer-science/course-sequence",
      transcript_link:
        "https://drive.google.com/file/d/1n1kD24rhGTHgzcgqkkmp2_cWWa4LdJL2/view?usp=sharing",
      additional_info: {
        gpa: "8.27 CGPA",
        honors: "Magna Cum Laude",
        transcripts: "Show Transcripts",
      },
    },
    {
      title: "Advanced Diploma in Software Development",
      subtitle: "Mohawk College",
      logo_path: "mohawkcollege.jpg",
      alt_name: "Mohawk",
      duration: "Jan 2019 - Aug 2021",
      descriptions: [
        "Graduated early from a three-year program with a 90% GPA.",
        "Proficient in AWS, .NET Core, SQL databases and modern web frameworks.",
        "Completed three co-op terms and led a project recognized with a college grant.",
      ],
      website_link:
        "https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559",
      transcript_link:
        "https://drive.google.com/file/d/1-dzbuRENcCxSpY0UY0Ap3gKvtCFhQNA1/view?usp=sharing",
      additional_info: {
        gpa: "90%",
        honors: "Honours Graduate",
        transcripts: "Show Transcripts",
      },
    },
    {
      title: "Bachelor of Technology (BTech)",
      subtitle: "McMaster University",
      logo_path: "mcmaster_logo.png",
      alt_name: "McMaster",
      duration: "",
      descriptions: [
        "Completed a Bachelor of Technology degree with a focus on software systems.",
      ],
      website_link: "https://www.mcmaster.ca/",
    },
    {
      title: "Advanced Diploma",
      subtitle: "Conestoga College",
      logo_path: "conestoga_logo.png",
      alt_name: "Conestoga",
      duration: "",
      descriptions: [
        "Earned an advanced diploma in a technology-focused program.",
      ],
      website_link: "https://www.conestogac.on.ca/",
    },
    {
      title: "English Certification Program",
      subtitle: "University of Guelph",
      logo_path: "guelph_logo.png",
      alt_name: "Guelph",
      duration: "",
      descriptions: [
        "Completed an English certification program to strengthen academic and professional communication.",
      ],
      website_link: "https://www.uoguelph.ca/",
    },
    {
      title: "Bachelor of Science",
      subtitle: "Bach Khoa University (HCMUT)",
      logo_path: "bachkhoa_logo.png",
      alt_name: "Bach Khoa",
      duration: "",
      descriptions: [
        "Completed foundational studies in science and engineering at one of Vietnam's top technical universities.",
      ],
      website_link: "https://www.hcmut.edu.vn/",
    },
  ],
  inProgressDegrees: [],
};

const certifications = {
  certifications: [
    {
      title: "Google AI",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/74473DIYYE1T",
      alt_name: "Google",
      color_code: "#F4B400",
      issued: "Mar 2026",
      credential_id: "74473DIYYE1T",
      skills: ["Artificial Intelligence"],
    },
    {
      title: "AI Infrastructure and Operations Fundamentals",
      subtitle: "NVIDIA",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BBED518004M6",
      alt_name: "NVIDIA",
      color_code: "#76B900",
      issued: "Mar 2026",
      credential_id: "BBED518004M6",
      skills: ["AI Infrastructure", "MLOps"],
    },
    {
      title: "Building AI Agents and Agentic Workflows",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/2SQA4WDP4PGZ",
      alt_name: "IBM",
      color_code: "#0530AD",
      issued: "Mar 2026",
      credential_id: "2SQA4WDP4PGZ",
      skills: ["AI Agents", "Agentic Workflows"],
    },
    {
      title: "IBM RAG and Agentic AI",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/V2EV8GHBV8XV",
      alt_name: "IBM",
      color_code: "#0530AD",
      issued: "Mar 2026",
      credential_id: "V2EV8GHBV8XV",
      skills: ["RAG", "Agentic AI"],
    },
    {
      title: "Google Advanced Data Analytics",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/UUHUVJ3X2ZWD",
      alt_name: "Google",
      color_code: "#F4B400",
      issued: "Jul 2024",
      credential_id: "UUHUVJ3X2ZWD",
      skills: ["Data Science", "Data Analytics"],
    },
    {
      title: "Microsoft Azure Data Scientist Associate (DP-100)",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/NNVTH8JX7YA3",
      alt_name: "Microsoft",
      color_code: "#0078D4",
      issued: "Jun 2024",
      credential_id: "NNVTH8JX7YA3",
      skills: ["Data Science", "Machine Learning"],
    },
    {
      title: "Microsoft Azure Developer Associate (AZ-204)",
      subtitle: "Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/V9NUWMSRTUGD",
      alt_name: "Microsoft",
      color_code: "#0078D4",
      issued: "Dec 2023",
      credential_id: "V9NUWMSRTUGD",
      skills: ["Cloud Computing"],
    },
    {
      title: "Meta Front-End Developer Specialization",
      subtitle: "Meta",
      logo_path: "meta.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/CPN5DGFBMEQD",
      alt_name: "Meta",
      color_code: "#1877F2",
      issued: "Sep 2023",
      credential_id: "CPN5DGFBMEQD",
      skills: ["JavaScript", "UI/UX", "React.js"],
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearningai.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4ZDVEUS8H6FJ",
      alt_name: "DeepLearning.AI",
      color_code: "#FF6B35",
      issued: "Sep 2023",
      credential_id: "4ZDVEUS8H6FJ",
      skills: ["Machine Learning", "Deep Learning", "Data Science"],
    },
    {
      title: "Supervised Machine Learning",
      subtitle: "Stanford University",
      logo_path: "stanforduniversity.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AUSDDALCQX7P",
      alt_name: "Stanford University",
      color_code: "#8C1515",
      issued: "Sep 2023",
      credential_id: "AUSDDALCQX7P",
      skills: ["Machine Learning"],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Featured Projects",
  description:
    "A showcase of my recent work across full-stack development and AI integration.",
  avatar_image_path: "projects_image.svg",
};

const testimonialsHeader = {
  title: "Colleague Testimonials",
  description:
    "Feedback from team leads and colleagues I've had the privilege to work alongside.",
  avatar_image_path: "testimonials_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  contactMethods: [
    {
      icon: "Mail",
      title: "Email",
      description: "Send me a message",
      value: "manvminh@gmail.com",
      href: "mailto:manvminh@gmail.com",
      primary: true,
    },
    {
      icon: "Linkedin",
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/manvu",
      href: "https://www.linkedin.com/in/manvu/",
      primary: true,
    },
    {
      icon: "Github",
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/man-vu",
      href: "https://github.com/man-vu",
      primary: true,
    },
    {
      icon: "MapPin",
      title: "Location",
      description: "Based in",
      value: "Ottawa, Ontario, Canada",
      href: null,
      primary: false,
    },
  ],
  socialLinks: [
    {
      icon: "Github",
      title: "GitHub",
      href: "https://github.com/man-vu",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      icon: "Linkedin",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/manvu/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
  ],
  blogSection: {
    title: "Blogs",
    subtitle: "I also post occasional tech and IELTS tips on my Facebook page.",
    link: "https://facebook.com/manctgamer",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      images: ["projects/abeldent_1.webp", "projects/abeldent_2.png", "projects/abeldent_3.png"],
      videos: ["https://www.youtube.com/embed/La6VCdKR-Co?si=FA8wnEPRXlq-GUYK"],
      name: "ABELDent Practice Management System",
      url: "https://www.abeldent.com/",
      badge: {
        text: "Professional Project",
        color: "warning",
        icon: "🏆",
      },
      briefDescription:
        "Core full-stack developer for a leading dental management system. Prevented revenue loss, reduced incidents, and expanded market reach over 6+ years.",
      description: `
- **Prevented revenue loss** across hundreds of dental practices by architecting atomic financial transactions (97 PRs)
- **Reduced customer-impacting incidents** through 62+ proactive data integrity hotfixes and automated cleanup scripts
- **Expanded market reach** by building imaging integrations for new hardware vendors and modernizing to cloud delivery (44 PRs)
- **Dramatically reduced incident resolution time** by implementing automated error logging across all critical paths
- **Improved front-desk productivity** with better patient management, scheduling tools, and clinical workflow enhancements
- **Contributed to new product launch** — an AI-powered clinical note-taking tool that automates documentation for practitioners
- **Maintained system stability** across dozens of releases through service architecture improvements and CI/CD pipelines
- Technologies: **C#, .NET, WPF, SQL Server, Azure, PowerShell, Entity Framework**
`,
      languages: [
        { name: "C#", iconifyClass: "logos:c-sharp" },
        { name: ".NET", iconifyClass: "logos:dotnet" },
        { name: "SQL Server", iconifyClass: "simple-icons:microsoftsqlserver", color: "#CC2927" },
        { name: "PowerShell", iconifyClass: "simple-icons:powershell", color: "#5391FE" },
        { name: "Azure", iconifyClass: "logos:microsoft-azure" },
        { name: "WPF", iconifyClass: "logos:wpf" },
      ],
      links: [
        { name: "Official Website", url: "https://www.abeldent.com/", iconifyClass: "mdi:web" },
        { name: "Company GitHub (internal)", url: "#", iconifyClass: "ri:lock-2-fill" },
      ],
    },
    {
      id: "1",
      name: "Bad Habit Buster",
      badge: { text: "Hackathon Project", color: "success", icon: "💡" },
      images: [
        "projects/habitbuster_1.png",
        "projects/habitbuster_2.png",
        "projects/habitbuster_3.png",
        "projects/habitbuster_4.png",
      ],
      videos: [
        "https://www.youtube.com/embed/ViBoMEj1ldA?si=dOhBBYs5AGpOvOj9",
      ],
      url: "https://devpost.com/software/bad-habit-buster",
      briefDescription:
        "AI-powered web app to help users break bad habits, built for a hackathon using React and GPT-4o.",
      description: `
- Built an **AI-powered full-stack web app** using **React**, **Node.js**, and **GPT-4o**
- Backend: **DynamoDB** to securely store user data
- Frontend: Designed in **Figma** with **Material UI** for a responsive, polished UI
- Users reflect daily and receive **AI-adapted plans** tailored to their personality, motivation, and progress
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "Node.js", iconifyClass: "logos-nodejs" },
        { name: "AWS DynamoDB", iconifyClass: "logos:aws-dynamodb" },
        { name: "Material UI", iconifyClass: "logos:material-ui" },
        { name: "OpenAI API", iconifyClass: "logos:openai-icon" },
      ],
      links: [
        {
          name: "GitHub Repo",
          url: "https://github.com/man-vu/Hack-The-Hill-2-Habit-Buster",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Devpost",
          url: "https://devpost.com/software/habitbuster",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "2",
      images: [
        "projects/capstone003.png", "projects/capstone004.png", "projects/capstone005.png", "projects/capstone006.png",
        "projects/capstone007.png", "projects/capstone008.png", "projects/capstone009.png", "projects/capstone010.png",
        "projects/capstone011.png", "projects/capstone012.png", "projects/capstone013.png", "projects/capstone014.png",
        "projects/capstone015.png", "projects/capstone016.png", "projects/capstone017.png", "projects/capstone018.png",
        "projects/capstone019.png", "projects/capstone020.png", "projects/capstone021.png", "projects/capstone022.png",
        "projects/capstone023.png", "projects/capstone024.png", "projects/capstone025.png", "projects/capstone026.png",
        "projects/capstone027.png", "projects/capstone028.png", "projects/capstone029.png", "projects/capstone030.png",
        "projects/capstone031.png", "projects/capstone032.png", "projects/capstone033.png", "projects/capstone034.png",
        "projects/capstone035.png", "projects/capstone036.png", "projects/capstone037.png", "projects/capstone038.png",
        "projects/capstone039.png", "projects/capstone040.png", "projects/capstone041.png", "projects/capstone042.png",
        "projects/capstone043.png", "projects/capstone044.png", "projects/capstone045.png", "projects/capstone046.png",
        "projects/capstone047.png", "projects/capstone048.png",
      ],
      videos: [],
      badge: { text: "Capstone Project", color: "danger", icon: "🎓" },
      name: "Learning English Web App",
      url: "http://bit.ly/3QiW9OW",
      briefDescription:
        "E-learning platform for English learners with interactive lessons and adaptive quizzes.",
      description: `
- Built a **full-featured e-learning platform** for non-native English speakers as my final capstone project.
- Modeled after systems like **MyCanvas** and **Desire2Learn** to ensure familiarity and usability.
- Implemented **interactive lessons**, **progress tracking**, and **adaptive quizzes** using **Vue**, **Node.js**, and **MySQL**.
- Deployed on **Microsoft Azure**, utilizing cloud services for scalability and secure access.
- Designed with a mobile-first, responsive layout using **Bootstrap** and **custom CSS**.
- Features include **admin management**, **student dashboards**, and **certificate generation** on course completion.
`,
      languages: [
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Bootstrap", iconifyClass: "logos-bootstrap" },
        { name: "Vue", iconifyClass: "logos-vue" },
        { name: "Node.js", iconifyClass: "logos-nodejs" },
        { name: "MySQL", iconifyClass: "logos-mysql" },
        { name: "Microsoft Azure", iconifyClass: "logos-microsoft-azure" },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/man-vu/mohawk-capstone-study-english",
          iconifyClass: "ri:github-fill",
        },
        { name: "Live Demo", url: "http://bit.ly/3QiW9OW", iconifyClass: "mdi:web" },
      ],
    },
    {
      id: "3",
      images: ["projects/phodelight_1.png", "projects/phodelight_2.png"],
      videos: [],
      badge: { text: "Course Project", color: "success", icon: "💡" },
      name: "Pho Delight Restaurant",
      url: "https://bit.ly/45AA3Mh",
      briefDescription:
        "Showcase app for a restaurant, built with React and modern UI/UX for Meta's certification.",
      description: `
- Developed a **restaurant showcase app** as the final project for Meta's Front-End Developer Certification.
- Implemented a **responsive single-page interface** using **React**, with elegant animations and transitions.
- Simulates real-world UX with **menu browsing**, **order placement mockup**, and **business overview**.
- Applied **semantic HTML**, **CSS Grid/Flexbox**, and **custom styling** for aesthetic layout and responsive design.
- Focused on accessibility and performance optimization for a professional portfolio-ready outcome.
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/vuminhman/course-8th-meta-front-end-capstone",
          iconifyClass: "ri:github-fill",
        },
        { name: "Live Demo", url: "https://bit.ly/45AA3Mh", iconifyClass: "mdi:web" },
      ],
    },
    {
      id: "4",
      images: [
        "projects/dreamy_nails1.png",
        "projects/dreamy_nails2.png",
        "projects/dreamy_nails3.png",
        "projects/dreamy_nails4.png",
      ],
      videos: [],
      badge: { text: "Assignment 2", color: "success", icon: "💅" },
      name: "Dreamy Nails & Beauty Salon",
      url: "https://dreamy-nails.netlify.app",
      briefDescription:
        "Appointment booking site for a beauty salon, with multi-step flow and modern UI/UX.",
      description: `
- Developed a **full-featured appointment booking site** for a beauty & nail salon.
- Built with **React**, following **modern UI/UX design principles** for a responsive and visually appealing experience.
- Features include **multi-step booking flow**, service & staff selection, **gallery**, testimonials, pricing, and promotional sections.
- Integrated **React Big Calendar** for appointment scheduling, and designed custom components for seamless navigation.
- Focused on **mobile-first design**, accessibility, and performance.
- Project for University of Ottawa's SEG 3125 (Spring 2025).
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/man-vu/SEG-3125-Assignment2-Nail-Salon",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://dreamy-nails.netlify.app",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "6",
      images: [
        "projects/matching_cards1.png",
        "projects/matching_cards2.png",
        "projects/matching_cards3.png",
        "projects/matching_cards4.png",
      ],
      videos: [],
      badge: { text: "Assignment 3", color: "info", icon: "🃏" },
      name: "Matching Cards Memory Game",
      url: "https://my-matching-cards.netlify.app/",
      briefDescription:
        "Responsive card-matching memory game with light/dark themes and accessible design.",
      description: `
- Developed a **responsive card-matching memory game** for web, as part of University of Ottawa's CSI 3125 (Spring 2025).
- Features **two personas**: Anna (light theme, desktop) & David (dark theme, mobile), reflecting inclusive and accessible design.
- Designed with **modern UI/UX principles**: large, touch-friendly cards, quick feedback, clear results, and motivational end screens.
- Built with **React** and deployed a **high-fidelity prototype** using Figma and Netlify.
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Figma", iconifyClass: "logos-figma" },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/man-vu/SEG3125-Assignment3-MatchingCards",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://my-matching-cards.netlify.app/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "7",
      images: [
        "projects/ecommerce_1.png",
        "projects/ecommerce_2.png",
        "projects/ecommerce_3.png",
        "projects/ecommerce_4.png",
        "projects/ecommerce_5.png",
        "projects/ecommerce_6.png",
      ],
      videos: [],
      badge: { text: "Assignment 4", color: "primary", icon: "🛒" },
      name: "E-commerce Website",
      url: "https://sparkling-profiterole-0149e0.netlify.app/",
      briefDescription:
        "Modern e-commerce site for online courses, with filtering, checkout, and accessibility features.",
      description: `
- Modern **e-commerce site** for online courses, built for University of Ottawa's **CSI 3125** (Summer 2023).
- Features: filtering, category, difficulty, price, duration, rating, a clear **checkout progress bar**, and a friendly, accessible design.
- Inspired by **Udemy, Coursera, Codecademy, and Pluralsight**. Built with **React**, with a bold purple/blue theme and mobile layout.
- **Accessibility**, dark/light mode, and lively, supportive communication style throughout.
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Figma", iconifyClass: "logos-figma" },
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://sparkling-profiterole-0149e0.netlify.app/",
          iconifyClass: "mdi:web",
        },
        {
          name: "Github",
          url: "https://github.com/man-vu/SEG3125-Assignment4",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "8",
      images: ["projects/analytics_1.png"],
      videos: [],
      badge: { text: "Assignment 5", color: "success", icon: "💡" },
      name: "Canadian University Analytics Dashboard",
      url: "https://canada-university-enrollment.netlify.app/",
      briefDescription:
        "Interactive dashboard visualizing Canadian university student enrollment data with bilingual support and modern UX/UI.",
      description: `
- Visualizes enrollment data by university, province, and student type (full-time, part-time, undergrad, grad)
- Interactive **bar and line charts**
- **Filter** by province and top universities
- **Language toggle** (EN/FR) updates UI text and chart labels
- Clean, card-based layout with accessible colors and tooltips
- Responsive and accessible (ARIA labels, keyboard navigation)
- Built with **React** for SEG 3125 (demo figures)
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
      links: [
        {
          name: "Live Dashboard",
          url: "https://canada-university-enrollment.netlify.app/",
          iconifyClass: "mdi:web",
        },
        {
          name: "GitHub Repository",
          url: "https://github.com/man-vu/SEG3125-Assignment5-university-dashboard",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

const testimonials = {
  data: [
    {
      name: "Dallas Matone",
      profilePicture: "",
      connection: "1st degree connection",
      position:
        "LiveOps Engineer Team Lead Manager @ LiveOps / Former Team Lead Software Developer @ ABELSoft",
      date: "September 3, 2021",
      companyLogo: "",
      relationship: "Dallas managed Man directly",
      testimonial:
        "Man Vu joined my team around 8 months ago. Overall, it was a pleasure to work with him.\n\n Even though Man is just a co-op student, his ability to create solutions to complex problems was amazing. Man saved our team countless hours by creating standalone utilities carrying out tedious tasks.\n\n Man was also one of the only co-ops that had good experience with legacy and C++ development, which was impressive.\n\n Overall, Man was an incredibly valuable addition to our team due to his exceptional technical skills.",
    },
    {
      name: "Brett Hoes",
      profilePicture: "",
      connection: "1st degree connection",
      position: "Team Lead Software Developer @ ABELSoft Inc.",
      date: "August 14, 2023",
      companyLogo: "",
      relationship: "Brett managed Man directly",
      testimonial:
        "Before we were coworkers, Man and I were students together at Mohawk College. Even then, he was already known in our year for breaking multiple class records with code that he wrote in our infamously difficult data structures and algorithms course.\n\n Over the past 3 years, he has approached his work with the same creative problem solving skills that made him a stellar student. Man regularly contributes pieces of work that streamline labor-intensive manual processes.\n\n I've lost track of how many new things he has taught me, and I'm thankful to have spent so much of my development career with him thus far.\n\n In a sentence, Man is a naturally gifted developer who relentlessly pursues new information both inside and outside of his work.",
    },
    {
      name: "Andrew Cheung",
      profilePicture: "",
      connection: "1st degree connection",
      position: "Quality Assurance Analyst @ ABELSoft Inc.",
      date: "August 19, 2023",
      companyLogo: "",
      relationship: "Andrew worked with Man on the same team",
      testimonial:
        "As a quality assurance analyst, I've had the pleasure of working closely with Man for over a year and I can attest that Man consistently delivers robust code and high quality results that exceeds expectations.\n\n Beyond his technical expertise, Man responds well to feedback and has excellent teamwork and communication skills.\n\n I am confident that Man will a make an invaluable addition to any software development team for his adaptability, collaborative ability, and problem solving skills.",
    },
    {
      name: "Adrian Paluch",
      profilePicture: "",
      connection: "1st degree connection",
      position: "Software Developer @ ABELSoft Inc.",
      date: "October 22, 2023",
      companyLogo: "",
      relationship: "Adrian worked with Man on the same team",
      testimonial:
        "Over my time working with Man Vu at ABELSoft, I've been continually impressed by his work ethic and ability to come up with effective solutions for difficult problems. Man is always looking for ways to improve or automate existing processes which is much appreciated by all his coworkers.\n\nMan is a valuable member for any team, he is always ready to help others and approaches challenges with a positive attitude. He has an excellent drive for continually improving and expanding his knowledge of software development.\n\nOverall, it has been fantastic to work alongside him. With Man's enormous passion for software development, I am excited to see what more he will accomplish in the future.",
    },
  ],
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  testimonialsHeader,
  contactPageData,
  projects,
  testimonials,
  abelsoftStats,
};
