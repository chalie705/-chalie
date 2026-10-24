export interface Project {
  id: string;
  slug?: string;
  title: string;
  name?: string;
  shortDescription: string;
  summary?: string;
  fullDescription: string;
  problem: string;
  objectives?: string[];
  contributions?: string[];
  features: string[];
  technologies: string[];
  stack?: string[];
  category: string;
  githubUrl?: string;
  repo?: string;
  liveDemoUrl?: string;
  demo?: string;
  imageUrl?: string;
  image?: string;
  imagePlaceholder: string;
  status?: string;
  challenges?: string;
  lessons?: string;
}

export interface Skill {
  name: string;
  level?: number;
  category?: string;
  icon?: string;
}

export interface SkillGroup {
  title: string;
  description?: string;
  icon: string;
  items: string[];
}