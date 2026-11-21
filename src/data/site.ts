
export type Link = { label: string; href: string };

export type Highlight = { value: string; label: string };

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  title: string;
  year: string;
  tagline: string;
  description: string;
  impact: string[];
  stack: string[];
  links: Link[];
  featured?: boolean;
};

export type SkillGroup = { name: string; items: string[] };

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details: string[];
  coursework: string[];
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const site = {
  name: "SOHAM RANE",
  role: "Graduate Computer Science Student | Software Developer",
  headline:
    "I build software and web applications that solve practical problems. Interested in software engineering, artificial intelligence, and building reliable applications.",
  description:
    "Portfolio of Soham Rane, a Computer Science graduate student at Northeastern University, showcasing software development projects, technical experience, and AI-related work.",
  location: "Boston, MA",
  availability:
    "Open to software engineering and AI engineering opportunities",
  email: "sohamranesm@gmail.com",

  resumeUrl: "/resSCV.pdf",

  socials: {
    github: "https://github.com/johadsalka",
    linkedin: "https://www.linkedin.com/in/sohamrane96310/"
  },

    about: [
        "With a data science background and graduate studies in Computer Science at Northeastern's Khoury College, I spend a lot of time bridging structured engineering with conversational and cloud AI. What excites me most to build are interactive products and intelligent workflows—from gamified study platforms and AI agents to data-backed web apps—that turn tricky ideas into clean, everyday tools.",
        "Through academic work, research, and hands-on projects—including building Al-Will in Microsoft Copilot Studio, developing a cloud AI agent on Amazon Bedrock AgentCore, creating a React AI chatbot with the ChatGPT API, and shipping gamified learning and trekking platforms like Treasure Map Academy and Adventure Venture—I have worked across Java, Python, C++, JavaScript, React, Next.js, Node.js, MongoDB, Firebase, AWS S3, and MySQL. Along the way, I have also explored natural language processing, large language models, and published research on gamified e-learning, focusing on how different system components fit together reliably.",
        "I am particularly interested in software engineering and the practical application of AI. When I step away from my IDE, you'll usually find me practicing a new spoken language, exploring fresh ideas, and turning concepts into working projects that are fun to use.",
    ],

  highlights: [
    { value: "8+", label: "Software & AI Builds" },
    { value: "2", label: "AI Agents Built" },
    { value: "2", label: "Published Research Papers" },
  ] satisfies Highlight[],

  contactBlurb:
    "I am interested in software engineering and AI-related opportunities. Feel free to reach out if you would like to discuss software development, projects, or emerging technologies.",

  experience: [
    {
      company: "Oasis-Info Byte",
      role: "Data Science Intern",
      period: "March 2024 – April 2024",
      location: "Pune, India",
      bullets: [
          "Developed machine learning models using Python for Iris flower classification and email spam detection.",
          "Worked on unemployment analysis using data science techniques.",
          "Applied programming and data analysis skills to practical data science tasks.",
      ],
      stack: ["Python", "Machine Learning"],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      title: "Tresure Map Academy",
      year: "2025",
      tagline: "A gamified learning platform designed to make online education more interactive.",
      description:
        "Developed a learning platform with separate learner and creator dashboards. The platform supports quizzes, multiple-choice questions, and fill-in-the-blank activities to provide an interactive learning experience.",
      impact: [
          "Implemented learner and creator dashboards for different platform workflows.",
          "Integrated Firebase Authentication for user authentication.",
          "Used MongoDB for backend data operations.",
      ],
      stack: ["TypeScript", "Next.js","AWS S3", "MongoDB", "Firebase"],
      links: [
        {
          label: "Source",
          href: "https://github.com/johadsalka/TresureMapAcademy.git",
        },
      ],
      featured: true,
    },
    {
      title: "Adventure Venture",
      year: "2024",
      tagline: "A web platform for managing trekking advertisements and listings.",
      description:
        "Developed a trekking advertisement management platform that allows users to authenticate, create and manage listings, and interact through comments.",
      impact: [
          "Implemented user authentication.",
          "Added listing creation, editing, and deletion functionality.",
          "Implemented commenting functionality for user interaction.",
      ],
      stack: ["Bootstrap 4", "EJS", "Node.js", "MongoDB"],
      links: [
        {
          label: "Source",
          href: "https://github.com/johadsalka/AdventureVenture.git",
        },
      ],
      featured: true,
    },
    {
      title: "AI-Will",
      year: "2026",
      tagline: "A conversational AI agent developed using Microsoft Copilot Studio.",
      description: "Designed and built a conversational AI agent using Microsoft Copilot Studio. Configured its behavior, topics, and conversation flows to handle user queries.",
      impact: [
          "Configured agent behavior and topics.",
          "Designed conversation flows to support user queries.",
      ],
      stack: ["Microsoft Copilot Studio"],
      links: [
        {
          label: "Source",
          href: "https://teams.microsoft.com/l/app/?titleId=T_80a807e1-2329-8206-ed77-9b29fd6d4413",
        },
      ],
    },
    {
      title: "Cloud AI Agent",
      year: "2026",
      tagline: "A cloud-hosted AI agent built using Amazon Bedrock AgentCore.",
      description: "Developed an AI agent using Amazon Bedrock AgentCore, gaining hands-on experience with cloud-hosted agent runtimes and cloud AI workflows.",
      impact: [
          "Developed an AI agent using Amazon Bedrock AgentCore.",
          "Worked with cloud-hosted agent runtimes and cloud AI workflows.",
      ],
      stack: ["Amazon Bedrock AgentCore", "AWS"],
      links: [],
    },
  ] satisfies Project[],

  /** Only list what you can discuss in depth in an interview. */
  skills: [
    {
      name: "Languages",
      items: ["Python", "JavaScript", "Java", "C++", "SQL"],
    },
    {
      name: "Web & UI",
      items: ["HTML5", "CSS3", "React.js", "Next.js", "Node.js", "EJS", "Bootstrap 4", "Tailwind CSS"],
    },
    {
      name: "Databases",
      items: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      name: "AI & Cloud",
      items: ["Microsoft Copilot Studio", "Amazon Bedrock AgentCore", "ChatGPT API", "AWS S3"],
    },
    {
      name: "Developer Tools & Testing",
      items: ["GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "JUnit", "UML"],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      school: "Northeastern University - Khoury College of Computer Sciences",
      degree: "M.S. in Computer Science",
      period: "2026 - 2028",
      location: "Boston, MA",
      gpa: "In Progress",
      details: [
          "Currently pursuing graduate studies in Computer Science."
      ],
      coursework: [
        "Programming Design Paradigm",
        "Database Management Systems",
      ],
    },
      {
          school: "SPPU - P.E.S. Modern College of Engineering",
          degree: "B.E. in Information Technology (Honors in Data Science)",
          period: "2021 - 2025",
          location: "Pune, MH",
          gpa: "8.12/ 10",
          details: [
              "Completed Honors specialization in Data Science alongside the B.E. in Information Technology.",
              "Served as Class Representative, organizing class activities, coordinating student initiatives, and supporting faculty-student engagement."
          ],
          coursework: [
              "Data Structures and Algorithms",
              "Object-Oriented Programming",
              "Database Management Systems",
              "Operating Systems",
              "Computer Networks",
              "Software Engineering",
              "Theory of Computation",
              "Web Application Development",
              "Software Project Management",
              "Human-Computer Interaction",
              "Distributed Systems"
          ],
      },
  ] satisfies EducationEntry[],
};
