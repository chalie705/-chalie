export const cv = {
  name: 'Chalie Melkamu Wagnew',
  role: 'Software Engineering Student | Full-Stack Developer',
  photo: '/me.webp',
  contact: [
    { icon: 'pin', label: 'Injibara, Ethiopia' },
    { icon: 'phone', label: '0976773968' },
    { icon: 'mail', label: 'chaliemelkamu6@gmail.com', href: 'mailto:chaliemelkamu6@gmail.com' },
    { icon: 'github', label: 'github.com/chalie705', href: 'https://github.com/chalie705' },
    { icon: 'link', label: 'chalie-9ebq.vercel.app', href: 'https://chalie-9ebq.vercel.app' },
  ],
  education: {
    degree: 'Software Engineering',
    school: 'Injibara University',
    period: '2023 – Present',
  },
  skills: [
    { category: 'Frontend', items: 'Next.js, React, TypeScript, JavaScript, Tailwind CSS, HTML/CSS, Responsive UI, i18n (Am/En)' },
    { category: 'Backend', items: 'Node.js, Express, Python, Flask, REST APIs, GraphQL, JWT Auth, Socket.io' },
    { category: 'Databases', items: 'PostgreSQL, MongoDB, MySQL, Redis, Prisma' },
    { category: 'DevOps & Cloud', items: 'Git & GitHub, GitHub Actions, Docker, Vercel, Linux' },
    { category: 'Tools & Design', items: 'Figma, VS Code, Postman, Design systems' },
  ],
  strengths: ['Problem solving', 'Team collaboration', 'Client communication', 'Ownership', 'Continuous learning'],
  summary:
    'Motivated and results-driven 4th-year Software Engineering student at Injibara University with extensive hands-on experience in full-stack web and mobile development. Proficient in React, Next.js, TypeScript, Node.js, Express, and PostgreSQL. Demonstrated ability to design, build, and deploy complete applications including HR management systems, registration platforms, and mobile booking solutions. Eager to contribute technical skills and collaborate within a professional engineering team.',
  projects: [
    {
      name: 'Human Resource Management System (HRMS)',
      stack: 'React, Node.js, Express, PostgreSQL',
      description:
        'Built a full-stack HRMS featuring role-based access control (RBAC) for employees, department managers, and administrators.',
    },
    {
      name: 'Student Registration & Management System',
      stack: 'Express.js, Knex.js, React, Tailwind CSS, PostgreSQL',
      description:
        'Developed a comprehensive registration platform with multi-dashboard role views and secure workflow management.',
    },
    {
      name: 'Hotel Booking Mobile Application',
      stack: 'React Native, Expo, TypeScript, Node.js, PostgreSQL',
      description:
        'Designed and engineered a mobile application featuring room listings, real-time availability tracking, and interactive mapping.',
    },
  ],
}

// The cover letter. {company} is replaced with recipient.company when it is shown.
export const letter = {
  recipient: {
    title: 'Hiring Manager',
    company: 'tttt Tech',
    city: 'Addis Ababa, Ethiopia',
  },
  subject: 'Application for Software Engineering Internship',
  greeting: 'Dear Hiring Manager,',
  paragraphs: [
    'I am writing to apply for the Software Engineering Internship at {company}. I am a Software Engineering student at Injibara University, and I am eager to strengthen my practical skills, learn from experienced developers, and contribute to meaningful software projects in a professional team.',
    'Through my coursework and academic and personal projects, I have been developing my understanding of web application development, software design, database management, and version control. My project work has included systems such as a Human Resource Management System, a Student Registration System, and an Employee Management System. These projects have helped me practice translating requirements into application features, organizing software components, and working through implementation challenges.',
    "I am motivated to keep learning, accept feedback, and improve the quality of my work. I would welcome the opportunity to support {company}'s development team while gaining experience with professional development practices and real-world project workflows. I would bring curiosity, commitment, and a willingness to learn, while continuing to build on the knowledge I have gained as a student.",
    "Thank you for considering my application. I would appreciate the opportunity to discuss my interest in the internship and how my academic background and project experience may fit your team's needs.",
  ],
  closing: 'Sincerely,',
  signature: '', // optional: put a signature image in public/ and set e.g. '/signature.png'
}