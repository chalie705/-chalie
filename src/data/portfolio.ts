export const profile = {
  name: 'Chalie Melkamu Wagnew',
  greeting: "Hi, I'm Chalie Melkamu Wagnew",
  role: 'Software Engineering Student | Aspiring Full Stack Developer',
  headline: 'Building Modern Web Applications That Solve Real Problems.',
  intro:
    'I am an undergraduate student in Software Engineering at Injibara University, passionate about creating responsive, user-friendly web applications and practical digital solutions.',
  email: 'chaliemelkamu6@gmail.com',
  github: 'https://github.com/chalie705',
  linkedin: '', // add your real LinkedIn URL when ready
  cv: '/Chalie-Melkamu-CV.pdf',
  university: 'Injibara University',
  degree: 'Undergraduate Student in Software Engineering',
  specialization: 'Full Stack Web Development',
  primaryLanguages: 'TypeScript, JavaScript, PHP',
  availability: 'Internships (2026)',
  focus: 'Full Stack Web Dev',
  primaryStack: 'PHP · MySQL · TS',
  avatar: '/me.webp',
}

export const about = [
  "I am an undergraduate student in Software Engineering at Injibara University. My technical journey is driven by curiosity, rigorous fundamentals, and an eagerness to build practical applications that streamline organizational tasks.",
  "Rather than stopping at academic theory, I translate software engineering principles into usable products. My focus spans designing accessible frontend interfaces, constructing robust PHP backend architectures, and modeling efficient MySQL database schemas.",
]

export const services = [
  {
    title: 'Responsive Website Development',
    icon: 'smartphone',
    description:
      'Building fluid, mobile-first websites that render with precision across smartphones, tablets, laptops, and ultra-wide desktop monitors.',
  },
  {
    title: 'Frontend Development',
    icon: 'code',
    description:
      'Writing clean, accessible HTML5, modern CSS3, and strongly-typed TypeScript for dynamic, intuitive user interfaces and interactions.',
  },
  {
    title: 'PHP Backend Development',
    icon: 'server',
    description:
      'Constructing secure server-side logic, session management, authenticated workflows, and RESTful API endpoints for web applications.',
  },
  {
    title: 'MySQL Database Design',
    icon: 'database',
    description:
      'Architecting normalized relational schemas, defining table relationships, writing optimized SQL queries, and maintaining data integrity.',
  },
  {
    title: 'Business Management Systems',
    icon: 'briefcase',
    description:
      'Developing custom administrative systems for employee directories, student enrollments, clinical intake, and workflow tracking.',
  },
  {
    title: 'Website Maintenance',
    icon: 'wrench',
    description:
      'Debugging code issues, updating existing PHP scripts, refactoring CSS layouts, improving performance, and keeping web properties reliable.',
  },
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
      'Tailwind CSS',
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
      'Knex.js & Prisma',
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
      'Postman',
      'Chrome DevTools',
      'Linux Administration',
    ],
  },
] as const

export type Category = 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile'
export const categories: ('All' | Category)[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile']

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
  image?: string
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'employee-management',
    name: 'Employee Management System',
    category: 'Full Stack',
    image: '/projects/employee.webp',
    summary: 'A web application concept for managing employee information, departments, attendance tracking, and HR operations.',
    problem: 'Manual employee record keeping and payroll management are slow and error-prone.',
    objectives: [
      'Centralize employee onboarding and departmental data',
      'Automate attendance tracking and payroll calculations',
    ],
    contributions: [
      'Designed and developed full-stack employee directory and dashboard metrics',
      'Implemented database schemas for department statuses and employee records',
    ],
    features: [
      'Employee onboarding profiles and department status',
      'Payroll summary & department distribution analytics',
      'Real-time employee directory search & filtering',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    challenges: 'Designing dynamic dashboard card metrics for payroll summaries alongside responsive data tables.',
    lessons: 'Mastered relational database structure design in MySQL and server-side operations with PHP.',
    status: 'Academic project',
  },
  {
    slug: 'registration-management',
    name: 'Registration Management System',
    category: 'Full Stack',
    image: '/projects/registration.webp',
    summary: 'A multi-step application workflow platform for simplifying user registrations, document verification, and administrative reviews.',
    problem: 'Paper-based registration makes tracking candidate documents and multi-step reviews difficult.',
    objectives: [
      'Digitize registration forms and supporting document uploads',
      'Provide structured review stages for administrative verifications',
    ],
    contributions: [
      'Built multi-step applicant submission workflow forms in TypeScript and PHP',
      'Implemented administrative verification statuses and user portal interfaces',
    ],
    features: [
      'Multi-step application submission workflow',
      'Supporting document upload and verification pipeline',
      'Administrative review status tracking',
    ],
    stack: ['TypeScript', 'JavaScript', 'PHP', 'MySQL', 'CSS3'],
    challenges: 'Managing multi-step form state persistence and file upload validation.',
    lessons: 'Expanded knowledge in TypeScript data structures and multi-stage form architectures.',
    status: 'Academic project',
  },
  {
    slug: 'student-management',
    name: 'Student Management System',
    category: 'Full Stack',
    image: '/projects/student.webp',
    summary: 'An academic management system for organizing student records, course enrollment, and departmental records with fast CRUD operations.',
    problem: 'Educational institutions need efficient tracking of academic progress and course allocations.',
    objectives: [
      'Provide centralized student record keeping',
      'Enable instant search and filter mechanisms for departments and enrollment status',
    ],
    contributions: [
      'Constructed student directory with real-time search & filters',
      'Created course progress and credit distribution visualizations',
    ],
    features: [
      'Student directory with real-time search & filters',
      'Course enrollment and academic progress tracking',
      'Departmental breakdown and degree credit overview',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    challenges: 'Creating fast, responsive table filters across large departmental datasets.',
    lessons: 'Gained hands-on experience in query optimization and DOM manipulation for dashboard reporting.',
    status: 'Academic project',
  },
  {
    slug: 'clinical-management',
    name: 'Clinical Management System',
    category: 'Full Stack',
    image: '/projects/clinical.webp',
    summary: 'A professional healthcare management concept designed to help clinics coordinate daily patient intake, appointments, and treatment logs.',
    problem: 'Clinics need organized digital patient tracking, wait-time management, and appointment coordination.',
    objectives: [
      'Digitize patient registration and visit tracking',
      'Provide daily appointment schedules and doctor queue overviews',
    ],
    contributions: [
      'Designed the clinical dashboard UI including patient volume and admission stats',
      'Implemented appointment schedule logs and doctor allocation tools',
    ],
    features: [
      'Patient registration & visit logs with appointment status',
      'Daily appointment schedules & doctor queues',
      'Patient demographic analytics and trend reporting',
    ],
    stack: ['TypeScript', 'PHP', 'MySQL', 'CSS3', 'HTML5'],
    challenges: 'Structuring complex healthcare schemas and status tracking for appointment queues.',
    lessons: 'Deepened skills in designing clean healthcare UI architectures and relational schemas.',
    status: 'Academic project',
  },
]

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
]