// Types pour le portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Contact {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}