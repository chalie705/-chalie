export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  features: string[];
  technologies: string[];
  category: 'Web Development' | 'Desktop Applications' | 'Database Systems' | 'Other';
  githubUrl?: string;
  liveDemoUrl?: string;
  imageUrl?: string;
  imagePlaceholder: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  status: 'used' | 'learning';
}

export interface EducationItem {
  institution: string;
  program: string;
  status: string;
  period?: string;
  details?: string[];
}
