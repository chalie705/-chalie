import type { Project, SkillGroup } from '../types/project';

// 1. Re-export types so components importing from portfolio.ts resolve them cleanly
export type { Project, SkillGroup };

// 2. Re-export projects and category lists
export { projects, projectCategories } from './projects';

// 3. User Profile Information
export const profile = {
  name: 'Chalie Melkamu Wagnew',
  greeting: "Hi, I'm Chalie Melkamu Wagnew",
  role: 'Software Engineering Student | Aspiring Full Stack Developer',
  headline: 'Building Modern Web Applications That Solve Real Problems.',
  intro:
    'I am an undergraduate student in Software Engineering at Injibara University, passionate about creating responsive, user-friendly web applications and practical digital solutions.',
  email: 'chaliemelkamu6@gmail.com',
  github: 'https://github.com/chalie705',
  linkedin: '', // Add your LinkedIn URL when available
  cv: '/Chalie-Melkamu-CV.pdf',
  university: 'Injibara University',
  degree: 'Undergraduate Student in Software Engineering',
  specialization: 'Full Stack Web Development',
  primaryLanguages: 'TypeScript, JavaScript, PHP',
  availability: 'Internships (2026)',
  focus: 'Full Stack Web Dev',
  primaryStack: 'PHP · MySQL · TS',
  avatar: '/me.webp',
};

// 4. About Section Narrative
export const about = [
  "I am an undergraduate student in Software Engineering at Injibara University. My technical journey is driven by curiosity, rigorous fundamentals, and an eagerness to build practical applications that streamline organizational tasks.",
  "Rather than stopping at academic theory, I translate software engineering principles into usable products. My focus spans designing accessible frontend interfaces, constructing robust PHP backend architectures, and modeling efficient MySQL database schemas.",
];

// 5. Offered Services
export const services = [
  {
    title: 'Responsive Website Development',
    icon: 'smartphone',
    description:
      'Building fluid, mobile-first websites that render with precision across smartphones, tablets, laptops, and desktop monitors.',
  },
  {
    title: 'Frontend Development',
    icon: 'code',
    description:
      'Writing clean HTML5, modern CSS3, and strongly-typed TypeScript for dynamic, intuitive user interfaces.',
  },
  {
    title: 'PHP Backend Development',
    icon: 'server',
    description:
      'Constructing secure server-side logic, session management, authenticated workflows, and API endpoints.',
  },
  {
    title: 'MySQL Database Design',
    icon: 'database',
    description:
      'Architecting normalized relational schemas, defining table relationships, and writing optimized SQL queries.',
  },
];

// 6. Skill Categories & Tools
export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    icon: 'monitor',
    description:
      'Crafting responsive, accessible, and standards-compliant user interfaces across all viewports.',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'database',
    description:
      'Building server-side logic, data validation, and relational database schemas for dynamic systems.',
    items: [
      'PHP',
      'Node.js & Express.js',
      'MySQL Database Design',
      'PostgreSQL',
      'REST API Fundamentals',
    ],
  },
  {
    title: 'Development Tools',
    icon: 'settings',
    description:
      'Version control, local stack virtualization, and developer environments for efficient workflows.',
    items: [
      'Git & GitHub',
      'Visual Studio Code',
      'XAMPP Environment',
      'Postman',
      'Linux Administration',
    ],
  },
];

// 7. Academic Timeline
export const timeline = [
  {
    type: 'Education',
    title: 'B.Sc. Software Engineering, fourth year',
    place: 'Injibara University, Ethiopia',
    note: 'Studying software engineering, databases, system architecture, and web application development.',
  },
  {
    type: 'Academic projects',
    title: 'Management systems and full-stack applications',
    place: 'University coursework',
    note: 'Built full-stack management systems with PHP, MySQL, React, and TypeScript.',
  },
  {
    type: 'Self-learning',
    title: 'Continuous technical learning',
    place: 'Personal development',
    note: 'Practicing React, TypeScript, Node.js, PostgreSQL, and Linux through hands-on building.',
  },
];

// 8. Filter Categories (and category alias for backward compatibility)
export const categories = [
  'All',
  'Web Development',
  'Desktop Applications',
  'Database Systems',
  'Full Stack',
] as const;