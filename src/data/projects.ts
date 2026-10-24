import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'employee-management',
    title: 'Employee Management System',
    shortDescription:
      'A system for organizing employee records and managing employee information efficiently.',
    fullDescription:
      'This web-based Employee Management System helps organizations keep track of employee data, including personal details, roles, and departmental information. It was built as a practical project to apply database design and full-stack web development skills.',
    problem:
      'Manual employee record-keeping is error-prone and time-consuming. Organizations need a centralized digital system to store, retrieve, and update employee information securely.',
    features: [
      'Employee registration and profile management',
      'Search and filter employees',
      'Basic CRUD operations for employee records',
      'Role-based information display',
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    githubUrl: undefined, // Add your repository URL when available
    liveDemoUrl: undefined,
    imageUrl: undefined,
    imagePlaceholder: 'Employee Management System',
  },
  {
    id: 'registration-management',
    title: 'Registration Management System',
    shortDescription:
      'A web application concept for managing registrations, submitted documents, and approval workflows.',
    fullDescription:
      'A modern registration management solution designed to streamline the process of handling applications, document submissions, and multi-step approval workflows. Built with React and TypeScript focusing on clean UI and type safety.',
    problem:
      'Organizations often struggle with paper-based or fragmented registration processes that lack transparency and efficient tracking of application status.',
    features: [
      'User registration and document upload interface',
      'Application status tracking',
      'Admin approval workflow concepts',
      'Responsive dashboard layout',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Development',
    githubUrl: undefined,
    liveDemoUrl: undefined,
    imageUrl: undefined,
    imagePlaceholder: 'Registration Management System',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    shortDescription:
      'An application for organizing student information and supporting student record management.',
    fullDescription:
      'A desktop-oriented Student Management System developed to help educational institutions manage student records, academic information, and related data. Implements solid software engineering principles using Java and database connectivity.',
    problem:
      'Educational institutions require reliable systems to maintain accurate student records, track academic progress, and generate reports without relying solely on spreadsheets.',
    features: [
      'Student registration and profile management',
      'Record search and filtering',
      'Data persistence with PostgreSQL',
      'Desktop GUI built with JavaFX',
    ],
    technologies: ['Java', 'JavaFX', 'PostgreSQL'],
    category: 'Desktop Applications',
    githubUrl: undefined,
    liveDemoUrl: undefined,
    imageUrl: undefined,
    imagePlaceholder: 'Student Management System',
  },
  {
    id: 'clinical-management',
    title: 'Clinical Management System',
    shortDescription:
      'A project focused on organizing clinical information and administrative workflows.',
    fullDescription:
      'A clinical information management project aimed at supporting healthcare administrative tasks such as patient records organization and workflow tracking. Developed to practice domain modeling and structured data handling.',
    problem:
      'Clinical environments generate large volumes of structured data that need organized storage and efficient retrieval for administrative and operational purposes.',
    features: [
      'Patient information organization',
      'Appointment and workflow concepts',
      'Data entry and retrieval interfaces',
      'Focus on data integrity and structure',
    ],
    technologies: ['Java', 'MySQL', 'HTML', 'CSS'], // Update with actual stack
    category: 'Database Systems',
    githubUrl: undefined,
    liveDemoUrl: undefined,
    imageUrl: undefined,
    imagePlaceholder: 'Clinical Management System',
  },
];

export const projectCategories = [
  'All',
  'Web Development',
  'Desktop Applications',
  'Database Systems',
] as const;
