import type { Skill } from '../types/project';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'Frontend', status: 'used' },
  { name: 'CSS', category: 'Frontend', status: 'used' },
  { name: 'JavaScript', category: 'Frontend', status: 'used' },
  { name: 'TypeScript', category: 'Frontend', status: 'used' },
  { name: 'React', category: 'Frontend', status: 'used' },
  { name: 'Tailwind CSS', category: 'Frontend', status: 'used' },

  // Backend
  { name: 'PHP', category: 'Backend', status: 'used' },
  { name: 'Java', category: 'Backend', status: 'used' },
  { name: 'REST API fundamentals', category: 'Backend', status: 'learning' },

  // Database
  { name: 'MySQL', category: 'Database', status: 'used' },
  { name: 'PostgreSQL', category: 'Database', status: 'used' },

  // Tools
  { name: 'Git', category: 'Tools', status: 'used' },
  { name: 'GitHub', category: 'Tools', status: 'used' },
  { name: 'VS Code', category: 'Tools', status: 'used' },
  { name: 'IntelliJ IDEA', category: 'Tools', status: 'used' },
  { name: 'Postman', category: 'Tools', status: 'learning' },
];

export const skillCategories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;