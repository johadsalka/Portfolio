/**
 * ============================================================================
 *  YOUR CONTENT LIVES HERE. This is the only file you need to edit.
 * ============================================================================
 *
 *  Every value wrapped in double curly braces is a placeholder you must
 *  replace with your own information. Run `npm run check:content` and it will
 *  list anything you forgot. Do not deploy until it passes.
 *
 *  How to write strong bullets (the Google "XYZ" formula):
 *    "Accomplished [X], as measured by [Y], by doing [Z]."
 *    e.g. "Cut p95 API latency from 480 ms to 120 ms by adding a Redis
 *          read-through cache and batching N+1 queries."
 *  Use real numbers. If you do not have a number, describe the concrete
 *  outcome instead of an adjective. Never invent metrics.
 */

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
  name: "SOHAM",
  role: "Software Developer",
  headline:
    "I build {{the kind of systems you build}} that {{the outcome they achieve}}. Interested in {{two or three areas, e.g. distributed systems, developer tools}}.",
  description:
    "Portfolio of {{Your Name}}, a software engineer. Projects, experience and contact details.",
  location: "{{City, State}}",
  availability:
    "Open to {{2027}} software engineering internships and new-grad roles",
  email: "{{you@example.com}}",

  /**
   * Put your resume PDF at public/resume.pdf, then set this to "/resume.pdf".
   * Leave it as an empty string to hide the Resume button.
   */
  resumeUrl: "",

  socials: {
    github: "https://github.com/{{your-github-handle}}",
    linkedin: "https://www.linkedin.com/in/{{your-linkedin-handle}}"
  },

  about: [
    "{{Paragraph 1: who you are, what you study or do, and what you are most interested in building.}}",
    "{{Paragraph 2: one concrete thing that shows depth, e.g. a hard problem you solved or something you taught yourself.}}",
    "{{Paragraph 3: outside of code, one or two lines that make you memorable.}}",
  ],

  highlights: [
    { value: "{{N}}", label: "{{e.g. production services shipped}}" },
    { value: "{{N}}", label: "{{e.g. open-source contributions merged}}" },
    { value: "{{N}}", label: "{{e.g. users or requests served}}" },
  ] satisfies Highlight[],

  contactBlurb:
    "I am currently looking for {{roles you want}}. If you are hiring, working on something interesting, or just want to talk about {{a topic you enjoy}}, my inbox is open.",

  experience: [
    {
      company: "{{Company or Lab Name}}",
      role: "{{Software Engineering Intern}}",
      period: "{{Jun 2026 to Aug 2026}}",
      location: "{{City, State or Remote}}",
      bullets: [
        "{{Shipped X that did Y for Z users or teams, measured by a real metric.}}",
        "{{Reduced or improved a measurable thing by N% by doing a specific technical thing.}}",
        "{{Collaborated with N engineers; owned a feature end to end from design doc to production.}}",
      ],
      stack: ["Python", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      company: "{{Second Role, Research Lab, or Teaching Assistant Position}}",
      role: "{{Role title}}",
      period: "{{Sep 2025 to May 2026}}",
      location: "{{City, State or Remote}}",
      bullets: [
        "{{Concrete outcome with a number.}}",
        "{{Concrete outcome with a number.}}",
      ],
      stack: ["Java", "Docker", "Git"],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      title: "{{Flagship Project Name}}",
      year: "{{2026}}",
      tagline: "{{One line: what it is and who it is for}}",
      description:
        "{{Two sentences: the problem, the system you designed, and the one design decision you are proudest of (and the trade-off you made).}}",
      impact: [
        "{{Measured result, e.g. sustained N requests/sec at p95 under N ms in load tests.}}",
        "{{Reliability or scale detail, e.g. zero-downtime deploys, N-node cluster, N GB indexed.}}",
        "{{Engineering quality, e.g. N% test coverage, CI on every PR, documented architecture.}}",
      ],
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Redis", "Docker"],
      links: [
        { label: "Live demo", href: "https://{{your-demo-url}}" },
        {
          label: "Source",
          href: "https://github.com/{{your-github-handle}}/{{repo-name}}",
        },
      ],
      featured: true,
    },
    {
      title: "{{Second Project Name}}",
      year: "{{2025}}",
      tagline: "{{One line: what it is and who it is for}}",
      description:
        "{{Two sentences: the problem and your approach. Mention the hardest technical part.}}",
      impact: [
        "{{Measured result with a number.}}",
        "{{What you learned or what broke and how you fixed it.}}",
      ],
      stack: ["Python", "FastAPI", "PyTorch"],
      links: [
        {
          label: "Source",
          href: "https://github.com/{{your-github-handle}}/{{repo-name}}",
        },
      ],
      featured: true,
    },
    {
      title: "{{Third Project Name}}",
      year: "{{2025}}",
      tagline: "{{One line summary}}",
      description: "{{One or two sentences.}}",
      impact: ["{{Measured result or concrete outcome.}}"],
      stack: ["Go", "gRPC"],
      links: [
        {
          label: "Source",
          href: "https://github.com/{{your-github-handle}}/{{repo-name}}",
        },
      ],
    },
    {
      title: "{{Fourth Project Name}}",
      year: "{{2024}}",
      tagline: "{{One line summary}}",
      description: "{{One or two sentences.}}",
      impact: ["{{Measured result or concrete outcome.}}"],
      stack: ["C++", "CMake"],
      links: [
        {
          label: "Source",
          href: "https://github.com/{{your-github-handle}}/{{repo-name}}",
        },
      ],
    },
  ] satisfies Project[],

  /** Only list what you can discuss in depth in an interview. */
  skills: [
    {
      name: "Languages",
      items: ["Python", "TypeScript", "Java", "C++", "SQL"],
    },
    {
      name: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Accessibility"],
    },
    {
      name: "Backend & data",
      items: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "REST", "gRPC"],
    },
    {
      name: "Cloud & tooling",
      items: ["AWS", "Docker", "GitHub Actions", "Linux", "Git"],
    },
    {
      name: "Fundamentals",
      items: [
        "Data structures & algorithms",
        "System design",
        "Concurrency",
        "Testing",
      ],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      school: "{{University Name}}",
      degree: "{{B.S. in Computer Science}}",
      period: "{{2023 to 2027}}",
      location: "{{City, State}}",
      gpa: "{{3.X / 4.0}}",
      details: [
        "{{Honors, scholarships, or relevant leadership such as a CS club role.}}",
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Databases",
        "Distributed Systems",
        "Machine Learning",
      ],
    },
  ] satisfies EducationEntry[],
};
