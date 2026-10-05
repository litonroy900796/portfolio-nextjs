export const RESUME = {
  title: "Resume",
  subtitle: "My",
  typeWriter: ["Education", "Experience"],

  education: [
    {
      // year: "2023 - Present",
      institution: "Bangladesh University",
      subject: "BSc in Computer Science and Engineering (CSE)",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science and Engineering with a focus on software development, web technologies, and modern programming practices.",
    },
    {
      // year: "2018 - 2022",
      institution: "Thakurgaon Polytechnic Institute",
      subject: "Diploma in Engineering (Mechatronics)",
      description:
        "Completed Diploma in Mechatronics Engineering, combining knowledge of computer systems, electronics, mechanical systems, and information technology.",
    },
  ],

  experience: [
    {
      year: "01/07/2022 - 28/02/2023",
      company: "Somikoron AI (Remote)",
      role: "Frontend Developer | UI Designer",
      description:
        "Worked on developing responsive and user-friendly web interfaces. Contributed to UI implementation, translating designs into functional components using HTML, CSS, and JavaScript, while ensuring performance and cross-device compatibility.",
    },
    {
      year: "01/03/2023 - Present",
      company: "CodeWare Limited",
      role: "Frontend Developer",
      description:
        "Developing modern web applications using React, Next.js, and TypeScript. Responsible for building scalable UI, integrating REST APIs, and ensuring performance and responsiveness.",
    },
  ],

  skills: [
    { category: "Core Web", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
    { category: "Styling", items: ["Bootstrap", "Tailwind CSS"] },
    { category: "Frontend Framework", items: ["React JS", "Next.js", "TypeScript"] },
    { category: "State Management", items: ["Context API", "Redux"] },
    { category: "Data Fetching", items: ["TanStack Query", "React Query"] },
    { category: "Forms & Validation", items: ["React Hook Form", "Zod"] },
    { category: "Authentication & API", items: ["JWT Authentication"] },
    { category: "Tools", items: ["Git & GitHub", "WordPress"] },
  ],
};
