// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Chalie Melkamu Wagnew',
  role: 'Software Engineering Student | Aspiring Full Stack Developer',
  headline: 'Building Practical Digital Solutions Through Code.',
  intro:
    "I'm a Software Engineering student passionate about building useful web applications, learning modern technologies, and solving real-world problems through software.",
  email: 'chaliemelkamu6@gmail.com',
  github: 'https://github.com/chalie705',
  linkedin: '', // add your real LinkedIn URL; the icon is hidden while empty
  university: 'Injibara University, Ethiopia',
  universityShort: 'Injibara University',
  avatar: '/me.webp',
  focus: 'Full Stack Web',
  primaryStack: 'React · Node · PostgreSQL',
}

export const about = [
  "I'm a fourth-year Software Engineering undergraduate at Injibara University, Ethiopia. I enjoy web development, databases, and application development, and I learn best by building complete projects.",
  "I'm looking for opportunities to learn and grow, such as internships, collaborative projects, and mentorship, while continuing to improve my skills through academic and personal work.",
]

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'monitor',
    description:
      'Crafting responsive, accessible, and standards-compliant user interfaces across all viewports.',
    items: [
      'HTML5 (Semantic Markup)',
      'CSS3 (Flexbox & Grid)',
      'JavaScript (ES6+)',
      'TypeScript (Strict Typing)',
      'React',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Backend & Databases',
    icon: 'database',
    description:
      'Building server-side logic, data validation, and relational database schemas for dynamic systems.',
    items: [
      'PHP (Object-Oriented & Procedural)',
      'Node.js & Express.js',
      'MySQL Database Design',
      'PostgreSQL',
      'SQL Queries & Optimization',
      'REST API Fundamentals',
      'Authentication & Sessions',
    ],
  },
  {
    title: 'Development Tools',
    icon: 'settings',
    description:
      'Version control, local stack virtualization, and developer environments for efficient workflows.',
    items: [
      'Git Version Control',
      'GitHub Collaboration',
      'Visual Studio Code',
      'XAMPP / Apache Environment',
      'Chrome DevTools',
      'Linux',
    ],
  },
] as const

export type Category = 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile'
export const categories: ('All' | Category)[] = ['All', 'Full Stack']

export interface Project {
  slug: string
  name: string
  category: Category
  summary: string
  problem: string
  objectives: string[]
  contributions: string[]
  features: string[]
  stack: string[]
  challenges: string
  lessons: string
  status: string
  image?: string // screenshot, e.g. '/projects/clinical.webp' (file goes in public/projects/)
  repo?: string // add the real repository URL when ready
  demo?: string // add only if a working deployment exists
}

// Placeholder text is marked "TODO". Replace it with your real details.
export const projects: Project[] = [
  {
    slug: 'student-registration',
    name: 'Student Registration Management System',
    category: 'Full Stack',
    image: '/projects/registration.webp',
    summary: 'Handles student registration, records, and role-based dashboards for a school setting.',
    problem: 'Paper-based registration makes tracking students and courses difficult.',
    objectives: ['Digitize registration', 'Give each role a tailored dashboard'],
    contributions: ['TODO: describe what you personally built'],
    features: ['Role-based access', 'TODO: add more features'],
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    challenges: 'TODO: describe a challenge you faced.',
    lessons: 'TODO: describe what you learned.',
    status: 'Academic project',
  },
  {
    slug: 'human-resource-management',
    name: 'Human Resource Management System',
    category: 'Full Stack',
    // no image yet: the card shows a folder icon
    summary: 'Supports core HR workflows such as staff records, leave, and reporting.',
    problem: 'HR tasks handled manually are hard to track and audit.',
    objectives: ['Streamline HR processes', 'Improve record accuracy'],
    contributions: ['TODO: describe what you personally built'],
    features: ['TODO: list key features'],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    challenges: 'TODO: describe a challenge you faced.',
    lessons: 'TODO: describe what you learned.',
    status: 'Academic project',
  },
  {
    slug: 'clinical-management',
    name: 'Clinical Management System',
    category: 'Full Stack',
    image: '/projects/clinical.webp',
    summary: 'A full-stack web app for managing clinic patients, visits, and staff.',
    problem: 'Clinics need organized patient and appointment records.',
    objectives: ['Manage patient records', 'Support clinic staff workflows'],
    contributions: ['TODO: describe what you personally built'],
    features: ['TODO: list key features'],
    stack: ['TODO: update stack'],
    challenges: 'TODO: describe a challenge you faced.',
    lessons: 'TODO: describe what you learned.',
    status: 'Academic project',
  },
]

export const timeline = [
  {
    type: 'Education',
    title: 'B.Sc. Software Engineering, fourth year',
    place: 'Injibara University, Ethiopia',
    note: 'Studying software engineering, databases, and web and application development.',
  },
  {
    type: 'Academic projects',
    title: 'Management systems',
    place: 'University coursework',
    note: 'Built full-stack projects as part of academic work (see Projects).',
  },
  {
    type: 'Self-learning',
    title: 'Continuous technical learning',
    place: 'Personal development',
    note: 'Practicing React, TypeScript, Node.js, PostgreSQL, and Linux through hands-on building.',
  },
  // Add internship or employment entries here only when they are real and verified.
]