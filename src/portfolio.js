//Home Page
const greeting = {
  title: "Mid-Senior Software Developer",
  title2: "Man Vu",
  logo_img: "letterm.png",
  logo_name: "Man Vu",
  logo_title: "| Software Developer",
  nickname: "",
  full_name: "Man Vu",
  subTitle:
    "Full-Time Software Developer @ ABELSoft | 4th Year CS Student @ uOttawa (Full-Time) | Cloud Computing & AI Enthusiast",
  resumeLink:
    "https://drive.google.com/file/d/1m0RFzfctAzep-DGSNWgtu2FTRhDcTBEl/view?usp=sharing",
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
        "Scalable .NET and web apps",
        "Automated deployments and legacy cleanup",
        "Performance fixes and reliable tests",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#9A6D38",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#41B883",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "simple-icons:visualstudio",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "Azure services via DevOps pipelines",
        "Server monitoring to reduce downtime",
        "Automated checks and documented deploys",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#008AD7",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:circleci",
          style: {
            color: "#343434",
          },
        },
        {
          skillName: "PowerShell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            color: "#5391FE",
          },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "Analyze data with Python and SQL",
        "Build regression and classification models",
        "Google and Stanford analytics certificates",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D00000",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
      ],
    },
  ],
};

const experience = {
  title: "Professional Experience",
  description:
    "Full-time Software Developer with 5+ years of experience building scalable applications, automating infrastructure, and leveraging AI tools for efficient problem-solving.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "",
      experiences: [
        {
          title: "Software Developer",
          company: "ABELSoft Inc.",
          company_url: "http://abelsoft.com/",
          logo_path: "abelsoft.jpg",
          duration: "Jan 2020 - Present",
          location: "Ottawa, Ontario, Canada",
          description: [
            "Developed mission-critical products with C#, SQL, WPF and WCF.",
            "Automated SQL deployments with PowerShell, cutting release time by 50%.",
            "Used GitHub Copilot and ChatGPT to accelerate development and debugging.",
            "Maintained Azure DevOps pipelines and resolved high-priority production issues.",
          ],
          color: "#7F00FF",
        },
        {
          title: "iOS Engineer",
          company: "E-RegisterNow",
          company_url: "https://e-registernow.com/",
          logo_path: "eregisternow.png",
          duration: "May 2019 - Aug 2019",
          location: "Mississauga, Ontario, Canada",
          description: [
            "Built native iOS apps integrating RESTful APIs for real-time events.",
            "Collaborated with cross-functional teams to deliver intuitive mobile experiences.",
          ],
          color: "#7F00FF",
        },
      ],
    },
  ],
};

const degrees = {
  completedDegrees: [
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
  ],
  inProgressDegrees: [
    {
      title: "Honours B.Sc. in Computer Science",
      subtitle: "University of Ottawa",
      logo_path: "uottawa_logo.png",
      alt_name: "uOttawa",
      duration: "Sep 2024 - Dec 2025 (Expected)",
      descriptions: [
        "Admitted with 57 transfer credits and on track to graduate in just over a year.",
        "Studying full-time while working full-time as a Software Developer at ABELSoft.",
        "Focusing on AI, operating systems and software design with plans for graduate studies.",
      ],
      website_link:
        "https://www.uottawa.ca/faculty-engineering/undergraduate-studies/programs/computer-science/course-sequence",
      transcript_link:
        "https://drive.google.com/file/d/1n1kD24rhGTHgzcgqkkmp2_cWWa4LdJL2/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
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
      title: "Google Data Analytics",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KSPBFUZ2DWZS",
      alt_name: "Google",
      color_code: "#F4B400",
      issued: "Jul 2024",
      credential_id: "KSPBFUZ2DWZS",
      skills: ["Data Analytics"],
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
      title: "Algorithmic Toolbox",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6BRBJQYWG4XE",
      alt_name: "Coursera",
      color_code: "#2A73CC",
      issued: "Sep 2023",
      credential_id: "6BRBJQYWG4XE",
      skills: ["Algorithm Design", "Algorithms"],
    },
    {
      title: "Meta Front-End Developer Specialization",
      subtitle: "Meta",
      logo_path: "meta.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/CPN5DGFBMEQD",
      alt_name: "Meta",
      color_code: "#1877F2",
      projects:
        "https://github.com/man-vu?tab=repositories&q=course-&type=&language=&sort=",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearningai.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4ZDVEUS8H6FJ",
      alt_name: "DeepLearning.AI",
      color_code: "#FF6B35",
      additional_info: {
        issue_date: {
          month: "September",
          year: 2023,
        },
        expiration_date: {
          month: "Month",
          year: "Year",
        },
        credential_id: "4ZDVEUS8H6FJ",
        skills: ["Machine Learning", "Deep Learning", "Data Science"],
      },
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "Stanford University",
      logo_path: "stanforduniversity.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/AUSDDALCQX7P",
      alt_name: "Stanford University",
      color_code: "#8C1515",
      additional_info: {
        issue_date: {
          month: "September",
          year: 2023,
        },
        expiration_date: {
          month: "Month",
          year: "Year",
        },
        credential_id: "AUSDDALCQX7P",
        skills: ["Machine Learning"],
      },
    },
    {
      title: "The Complete Junior to Senior Web Developer Roadmap (2021)",
      subtitle: "Udemy",
      description:
        "A comprehensive guide to mastering skills required to move from a junior to senior web developer.",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-73553207-52c3-4dba-b6ef-a3a01abee3b9/",
      alt_name: "Udemy",
      color_code: "#B045EF",
      issued: "Sep 2021",
      credential_id: "UC-73553207-52c3-4dba-b6ef-a3a01abee3b9",
      skills: [
        "Web Development",
        "Frontend",
        "Backend",
        "Databases",
        "Security",
        "Performance Optimization",
        "Continuous Integration",
      ],
    },
    {
      title: "Machine Learning & Data Science",
      subtitle: "Udemy",
      description:
        "An in-depth course on machine learning, data science, and the techniques and tools used in the field.",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-24365787-8e5d-41da-8928-2618dff216c8/",
      alt_name: "Udemy",
      color_code: "#B045EF",
      issued: "Aug 2021",
      credential_id: "UC-24365787-8e5d-41da-8928-2618dff216c8",
      skills: [
        "Machine Learning",
        "Data Science",
        "Python",
        "Algorithms",
        "Neural Networks",
        "Tensorflow",
        "Keras",
        "Data Visualization",
      ],
    },
    {
      title: "AZ-204: Developing Solutions for Microsoft Azure",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2b636227-68ef-432f-a267-7f76f5bace1e/",
      alt_name: "Microsoft Azure",
      color_code: "#B045EF",
    },
    {
      title: "IELTS Academic 8.0/9.0 Overall",
      subtitle:
        "British Council IELTS (International English Language Testing System)",
      logo_path: "IELTS.png",
      certificate_link:
        "https://drive.google.com/file/d/1Bqf1JGyr9EALsihpczphjK98TRy7GRLe/view?usp=drive_link",
      alt_name: "IELTS Academic",
      color_code: "#D83135",
    },
    {
      title: "IELTS General Training 8.5/9.0 Overall",
      subtitle:
        "British Council IELTS (International English Language Testing System)",
      description:
        "Designed for those migrating to English speaking countries for secondary education, work or training programs.",
      logo_path: "IELTS.png",
      certificate_link:
        "https://drive.google.com/file/d/1s8VK1NnnDRpQR9sDo5FRY9EXU3ZBDVGx/view?usp=drive_link",
      alt_name: "IELTS",
      color_code: "#D83135",
      issued: "Apr 2023",
      expires: "Apr 2025",
      credential_id: "23VN500280VUM028G",
      skills: [
        "Workplace Communication",
        "English",
        "Linguistics",
        "Listening",
        "Reading",
        "Writing",
        "Speaking",
      ],
    },
    {
      title:
        "Microsoft Project 2019 and Project Online Desktop Essential Training",
      subtitle: "LinkedIn",
      description:
        "Training for mastering the essentials of Microsoft Project 2019 and Project Online Desktop.",
      logo_path: "linkedin.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/946c694d4c320a237af60399b919ebeac6fc230d9107df773c506bc7e31ddbda?trk=backfilled_certificate",
      alt_name: "LinkedIn",
      color_code: "#5366AF",
      issued: "Sep 2020",
      skills: [
        "Project Management",
        "MS Project",
        "Task Scheduling",
        "Resource Allocation",
        "Reporting",
        "Project Tracking",
      ],
    },
    {
      title: "Full Stack Developer Certification",
      subtitle: "freeCodeCamp",
      description:
        "Certification for mastering both frontend and backend development, covering all stages of web development.",
      logo_path: "freecodecamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/manvu/full-stack",
      alt_name: "freeCodeCamp",
      color_code: "#0C9D5899",
      issued: "Dec 2018",
      skills: [
        "Web Development",
        "JavaScript",
        "Node.js",
        "Express.js",
        "React",
        "MongoDB",
        "RESTful APIs",
        "Databases",
        "Frontend",
        "Backend",
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Featured Projects",
  description:
    "I utilize a diverse array of cutting-edge technological tools in my projects. I'm particularly proficient in developing Vue.js and React applications, crafting Node.js backends, and scripting with Python. Here are a few of my notable projects.",
  avatar_image_path: "projects_image.svg",
};

const testimonialsHeader = {
  title: "Colleague Testimonials",
  description:
    "Throughout my career, I've had the privilege to work alongside amazing colleagues from various roles—developers, team leads, QAs, and more. Here's what some of them have to say about our time working together.",
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
      primary: true
    },
    {
      icon: "Linkedin",
      title: "LinkedIn",
      description: "Connect professionally",
      value: "linkedin.com/in/manvu",
      href: "https://www.linkedin.com/in/manvu/",
      primary: true
    },
    {
      icon: "Github",
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/man-vu",
      href: "https://github.com/man-vu",
      primary: true
    },
    {
      icon: "MapPin",
      title: "Location",
      description: "Based in",
      value: "Ottawa, Ontario, Canada",
      href: null,
      primary: false
    }
  ],
  socialLinks: [
    {
      icon: "Github",
      title: "GitHub",
      href: "https://github.com/man-vu",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      icon: "Linkedin",
      title: "LinkedIn", 
      href: "https://www.linkedin.com/in/manvu/",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
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
      images: ["abeldent_1.webp", "abeldent_2.png", "abeldent_3.png"],
      videos: ["https://www.youtube.com/embed/La6VCdKR-Co?si=FA8wnEPRXlq-GUYK"],
      name: "ABELDent Practice Management System",
      url: "https://www.abeldent.com/",
      badge: {
        text: "Professional Project",
        color: "warning", // Can be: primary, success, warning, danger, info, dark
        icon: "🏆", // Optional emoji or icon
      },
      description: `
- Served as a **core full-stack developer** on the ABELDent team  
- Designed and implemented **critical features** using **.NET**, **WPF**, and **SQL Server**  
- Automated **clinical workflows** and optimized **database performance**  
- Maintained **production infrastructure** and enhanced **scalability and usability**  
- Led the **refactoring** of legacy modules and integrated **modern technologies**  
`,

      languages: [
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
        {
          name: ".NET",
          iconifyClass: "logos:dotnet",
        },
        {
          name: "SQL Server",
          iconifyClass: "simple-icons:microsoftsqlserver",
          color: "#CC2927",
        },
        {
          name: "PowerShell",
          iconifyClass: "simple-icons:powershell",
          color: "#5391FE",
        },
        {
          name: "Azure",
          iconifyClass: "logos:microsoft-azure",
        },
        {
          name: "WPF",
          iconifyClass: "logos:wpf",
        },
      ],
      links: [
        {
          name: "Official Website",
          url: "https://www.abeldent.com/",
          iconifyClass: "mdi:web",
        },
        {
          name: "Company GitHub (internal)",
          url: "#",
          iconifyClass: "ri:lock-2-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Bad Habit Buster",
      badge: {
        text: "Hackathon Project",
        color: "success",
        icon: "💡",
      },
      images: [
        "habitbuster_1.png",
        "habitbuster_2.png",
        "habitbuster_3.png",
        "habitbuster_4.png",
      ],
      videos: [
        "https://www.youtube.com/embed/ViBoMEj1ldA?si=dOhBBYs5AGpOvOj9", // Replace with actual embed URL if different
      ],
      url: "https://devpost.com/software/bad-habit-buster",
      description: `
- Built an **AI-powered full-stack web app** using **React**, **Node.js**, and **GPT-4o**  
- Backend: **DynamoDB** to securely store user data  
- Frontend: Designed in **Figma** with **Material UI** for a responsive, polished UI  
- Users reflect daily and receive **AI-adapted plans** tailored to their personality, motivation, and progress  
`,

      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "AWS DynamoDB",
          iconifyClass: "logos:aws-dynamodb",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "OpenAI API",
          iconifyClass: "logos:openai-icon",
        },
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
        "capstone003.png",
        "capstone004.png",
        "capstone005.png",
        "capstone006.png",
        "capstone007.png",
        "capstone008.png",
        "capstone009.png",
        "capstone010.png",
        "capstone011.png",
        "capstone012.png",
        "capstone013.png",
        "capstone014.png",
        "capstone015.png",
        "capstone016.png",
        "capstone017.png",
        "capstone018.png",
        "capstone019.png",
        "capstone020.png",
        "capstone021.png",
        "capstone022.png",
        "capstone023.png",
        "capstone024.png",
        "capstone025.png",
        "capstone026.png",
        "capstone027.png",
        "capstone028.png",
        "capstone029.png",
        "capstone030.png",
        "capstone031.png",
        "capstone032.png",
        "capstone033.png",
        "capstone034.png",
        "capstone035.png",
        "capstone036.png",
        "capstone037.png",
        "capstone038.png",
        "capstone039.png",
        "capstone040.png",
        "capstone041.png",
        "capstone042.png",
        "capstone043.png",
        "capstone044.png",
        "capstone045.png",
        "capstone046.png",
        "capstone047.png",
        "capstone048.png",
      ],

      videos: [],
      badge: {
        text: "Capstone Project",
        color: "danger",
        icon: "🎓",
      },
      name: "Learning English Web App",
      url: "http://bit.ly/3QiW9OW",
      description: `
- Built a **full-featured e-learning platform** for non-native English speakers as my final capstone project.
- Modeled after systems like **MyCanvas** and **Desire2Learn** to ensure familiarity and usability.
- Implemented **interactive lessons**, **progress tracking**, and **adaptive quizzes** using **Vue**, **Node.js**, and **MySQL**.
- Deployed on **Microsoft Azure**, utilizing cloud services for scalability and secure access.
- Designed with a mobile-first, responsive layout using **Bootstrap** and **custom CSS**.
- Features include **admin management**, **student dashboards**, and **certificate generation** on course completion.
`,
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Vue",
          iconifyClass: "logos-vue",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Microsoft Azure",
          iconifyClass: "logos-microsoft-azure",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/man-vu/mohawk-capstone-study-english",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "http://bit.ly/3QiW9OW",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      images: ["phodelight_1.png", "phodelight_2.png"],
      videos: [],
      badge: {
        text: "Course Project",
        color: "success",
        icon: "💡",
      },
      name: "Pho Delight Restaurant",
      url: "https://bit.ly/45AA3Mh",
      description: `
- Developed a **restaurant showcase app** as the final project for Meta's Front-End Developer Certification.
- Implemented a **responsive single-page interface** using **React**, with elegant animations and transitions.
- Simulates real-world UX with **menu browsing**, **order placement mockup**, and **business overview**.
- Applied **semantic HTML**, **CSS Grid/Flexbox**, and **custom styling** for aesthetic layout and responsive design.
- Focused on accessibility and performance optimization for a professional portfolio-ready outcome.
`,

      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/vuminhman/course-8th-meta-front-end-capstone",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://bit.ly/45AA3Mh",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "4",
      images: [
        "dreamy_nails1.png",
        "dreamy_nails2.png",
        "dreamy_nails3.png",
        "dreamy_nails4.png",
      ], // Add your real image filenames here
      videos: [],
      badge: {
        text: "Assignment 2",
        color: "success",
        icon: "💅", // Changed to nail polish for nail salon
      },
      name: "Dreamy Nails & Beauty Salon",
      url: "https://dreamy-nails.netlify.app",
      description: `
- Developed a **full-featured appointment booking site** for a beauty & nail salon.
- Built with **React**, following **modern UI/UX design principles** for a responsive and visually appealing experience.
- Features include **multi-step booking flow**, service & staff selection, **gallery**, testimonials, pricing, and promotional sections.
- Integrated **React Big Calendar** for appointment scheduling, and designed custom components for seamless navigation.
- Focused on **mobile-first design**, accessibility, and performance.
- Project for University of Ottawa's SEG 3125 (Spring 2025).
`,
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
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
        "matching_cards1.png", // Replace with real filenames or Figma exports
        "matching_cards2.png",
        "matching_cards3.png",
        "matching_cards4.png",
      ],
      videos: [],
      badge: {
        text: "Assignment 3",
        color: "info",
        icon: "🃏", // Playing card emoji for memory game
      },
      name: "Matching Cards Memory Game",
      url: "https://my-matching-cards.netlify.app/",
      description: `
- Developed a **responsive card-matching memory game** for web, as part of University of Ottawa's CSI 3125 (Spring 2025).
- Features **two personas**: Anna (light theme, desktop) & David (dark theme, mobile), reflecting inclusive and accessible design.
- Designed with **modern UI/UX principles**: large, touch-friendly cards, quick feedback, clear results, and motivational end screens.
- Built with **React** and deployed a **high-fidelity prototype** using Figma and Netlify.
- Visual design adapts for both desktop and mobile, focusing on readability, ease of use, and fun for all ages.
- Integrated accessibility best practices, with keyboard/touch support and high-contrast options.
`,
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Figma",
          iconifyClass: "logos-figma",
        },
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
        "ecommerce_1.png",
        "ecommerce_2.png",
        "ecommerce_3.png",
        "ecommerce_4.png",
        "ecommerce_5.png",
        "ecommerce_6.png"
      ],
      videos: [],
      badge: {
        text: "Assignment 4",
        color: "primary",
        icon: "🛒",
      },
      name: "E-commerce Website",
      url: "https://sparkling-profiterole-0149e0.netlify.app/",
      description: `
- Modern e-commerce site for online courses, built for University of Ottawa's CSI 3125 (Summer 2025).
- Features instant filtering (category, difficulty, price, duration, rating), a clear checkout progress bar, and a friendly, accessible design.
- Inspired by Udemy, Coursera, Codecademy, and Pluralsight. Built with React, with a bold purple/blue theme and mobile-first layout.
- Accessibility, dark/light mode, and lively, supportive communication style throughout.
`,
      languages: [
        { name: "React", iconifyClass: "logos-react" },
        { name: "HTML", iconifyClass: "logos-html-5" },
        { name: "CSS", iconifyClass: "logos-css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "Figma", iconifyClass: "logos-figma" }
      ],
      links: [
        { name: "Live Demo", url: "https://sparkling-profiterole-0149e0.netlify.app/", iconifyClass: "mdi:web" },
        { name: "Github", url: "https://github.com/man-vu/SEG3125-Assignment4", iconifyClass: "ri:github-fill" },
      
      ],
    },
    {
      id: "8",
      images: ["comingsoon.jpg"],
      videos: [],
      badge: {
        text: "Assignment 5",
        color: "success",
        icon: "💡",
      },
      name: "Analytics site",
      url: "",
      description: `
Assignment as part of SEG 3125 
`,

      languages: [],
      links: [],
    },
  ],
};

const testimonials = {
  data: [
    {
      name: "Dallas Matone",
      profilePicture:
        "https://media.licdn.com/dms/image/C4E03AQGux8dzatxBDQ/profile-displayphoto-shrink_100_100/0/1562515105072?e=1700092800&v=beta&t=4o1MDPXxKzuToBBk0ouKDxBXYwpaCOFOjv4yBzfxYpE",
      connection: "1st degree connection",
      position:
        "LiveOps Engineer Team Lead Manager @ LiveOps / Former Team Lead Software Developer @ ABELSoft",
      date: "September 3, 2021",
      companyLogo:
        "https://media.licdn.com/dms/image/C4E0BAQE-YjP3OAE4CA/company-logo_200_200/0/1629987692277?e=1702512000&v=beta&t=5tUddRiL_wjOCybUHYlNG7hl3ybWwguJo5581-DALEw",
      relationship: "Dallas managed Man directly",
      testimonial:
        "Man Vu joined my team around 8 months ago. Overall, it was a pleasure to work with him.\n\n Even though Man is just a co-op student, his ability to create solutions to complex problems was amazing. Man saved our team countless hours by creating standalone utilities carrying out tedious tasks.\n\n Man was also one of the only co-ops that had good experience with legacy and C++ development, which was impressive.\n\n Overall, Man was an incredibly valuable addition to our team due to his exceptional technical skills.",
    },
    {
      name: "Brett Hoes",
      profilePicture:
        "https://media.licdn.com/dms/image/C4E03AQFRimnqpSg5Jw/profile-displayphoto-shrink_800_800/0/1623452886040?e=1700092800&v=beta&t=YE9tMVv2d8bqqXnOFJ3E0RoH7mbc2nk2CGj7OKBCbpw",
      connection: "1st degree connection",
      position: "Team Lead Software Developer @ ABELSoft Inc.",
      date: "August 14, 2023",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQFd6vZ426WhTA/company-logo_200_200/0/1558707039783?e=1702512000&v=beta&t=sEQzxHCijp9AMHPcWZoM62EbkWmjrIWI0CTneXCpU4Y",
      relationship: "Brett managed Man directly",
      testimonial:
        "Before we were coworkers, Man and I were students together at Mohawk College. Even then, he was already known in our year for breaking multiple class records with code that he wrote in our infamously difficult data structures and algorithms course.\n\n Over the past 3 years, he has approached his work with the same creative problem solving skills that made him a stellar student. Man regularly contributes pieces of work that streamline labor-intensive manual processes.\n\n I've lost track of how many new things he has taught me, and I'm thankful to have spent so much of my development career with him thus far.\n\n In a sentence, Man is a naturally gifted developer who relentlessly pursues new information both inside and outside of his work.",
    },
    {
      name: "Andrew Cheung",
      profilePicture:
        "https://media.licdn.com/dms/image/C4E03AQEuikLbccIXEg/profile-displayphoto-shrink_800_800/0/1603205460771?e=1700092800&v=beta&t=l5P_J2TQnh5gNBC_YXrI0khqNZ-_R0THs4TZ9FXEwHc",
      connection: "1st degree connection",
      position: "Quality Assurance Analyst @ ABELSoft Inc.",
      date: "August 19, 2023",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQFd6vZ426WhTA/company-logo_200_200/0/1558707039783?e=1702512000&v=beta&t=sEQzxHCijp9AMHPcWZoM62EbkWmjrIWI0CTneXCpU4Y",
      relationship: "Andrew worked with Man on the same team",
      testimonial:
        "As a quality assurance analyst, I've had the pleasure of working closely with Man for over a year and I can attest that Man consistently delivers robust code and high quality results that exceeds expectations.\n\n Beyond his technical expertise, Man responds well to feedback and has excellent teamwork and communication skills.\n\n I am confident that Man will a make an invaluable addition to any software development team for his adaptability, collaborative ability, and problem solving skills.",
    },
    {
      name: "Adrian Paluch",
      profilePicture: "URL_TO_ADRIAN_PALUCH_PROFILE_PICTURE",
      connection: "1st degree connection",
      position: "Software Developer @ ABELSoft Inc.",
      date: "October 22, 2023",
      companyLogo:
        "https://media.licdn.com/dms/image/C560BAQFd6vZ426WhTA/company-logo_200_200/0/1558707039783?e=1702512000&v=beta&t=sEQzxHCijp9AMHPcWZoM62EbkWmjrIWI0CTneXCpU4Y",
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
};
